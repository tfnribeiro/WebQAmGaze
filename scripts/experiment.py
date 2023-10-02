"""
- Class for that handles a single participants experiment and all its' data.
- Loads the original data collected from jsPsych and allows it to be loaded onto a Study object.

"""
import numpy as np
import pandas as pd
import json
import os
from os import path
from PIL import Image
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import regex as re
from matplotlib import cm
import pickle
import sys
import pytesseract
from pytesseract import Output
from study_config import PARTICIPANT_TYPES, PLATFORM_TYPES
import pandas as pd
import utils

# From https://stackoverflow.com/questions/4060221/how-to-reliably-open-a-file-in-the-same-directory-as-the-currently-running-scrip
__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))
OUTPUT_HEATGAZE_DIR = path.join("experiment_data", "imgs", "gaze_heatmaps")

## Variables for participants
VISION_TYPES = ["normal", "contact-lenses", "glasses", None]

## Values for Merging fixations:
PX_TOLERANCE_FIX_DECISION = 32 # PX Radius to consider
T_TOLERANCE_FIX_DECISION = 150 # t interval to consider between p1 and p2
T_TOLERANCE_FIX_FILTER = 50    # t threshold to remove fixations. Fix_t < T_TOLERANCE_FIX_FILTER is removed.

# Counting the fixations on target tolerance
PX_TOLERANCE_COUNT_FIXATIONS = 0

# Tolerance for filtering the fixations outside
# target paragraph.
PX_TOLERANCE_OUTSIDE_TARGET = 25

## These resolutions were extracted from: https://www.screenresolution.org/
## Regex was used to capture all and compile them into a file.
with open(path.join(__location__,'all_resolution.txt'),'rb') as f:
   ALL_RESOLUTIONS_SET = pickle.load(f)

def to_JSON_dict(dictionary_to_convert):
    converted_dict = {k:list([[int(v) for v in point] for point in l]) for k,l in dictionary_to_convert.items()}
    return json.dumps(converted_dict)

class WebgazeTarget:
    """
        This class aims to implement easier functionality for targets from the experiment.
        Each target has the attributes described, and it can be used to quickly check if a point
        is inside the target.

        Can possibily be extended to contain sub-sections of the target based on the image. Currently, 
        it corresponds to the Screenshot of the text, or spans inside the text.
    """
    def __init__(self, name, x, y, width, height, top, right, bottom, left, is_word=False):
        self.name = name
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.top = top
        self.right = right
        self.bottom = bottom
        self.left = left
        self.is_word = is_word

    def in_boundaries(self, point, tolerance):
        # Assumes point is (x, y, t)
        p_x, p_y, _ = point
        return (p_x > self.x - tolerance and p_x < self.x + self.width + tolerance) and \
            (p_y > self.y - tolerance and p_y < self.y + self.height + tolerance)
    
    def target_is_overlapping(self, target_2):
        assert type(target_2) is WebgazeTarget
        # https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
        REDUCE_TARGET = 10
        return (
            self.x + REDUCE_TARGET < target_2.x + target_2.width and
            self.x + self.width - REDUCE_TARGET > target_2.x and 
            self.y + REDUCE_TARGET < target_2.y + target_2.height and
            self.y + self.height - REDUCE_TARGET > target_2.y
        )

    
    def to_numpy(self):
        return np.array([self.x,self.y,self.width, self.height, self.top, self.right, self.bottom, self.left, self.is_word])
        
    def __str__(self) -> str:
        str_format = f"Target {self.name}: (x:{self.x},y:{self.y}), w:{self.width}, height:{self.height}"
        return str_format

    def __repr__(self):
        return str(self.name)


class Features:
    """
        Class to handle the features retrieved from the experiment.
    """
    def __init__(self):
        self.counts_per_target = None
        self.screen_size = None
        self.worker_age = None
        self.worker_lang = None
        self.worker_fluency = None
        self.avg_roi = None
        self.sample_rate = None
    
    def get_feature_vector(self):
        return np.array([int(self.worker_age), self.worker_lang, self.worker_fluency, self.avg_roi, self.sample_rate])
    
    def get_counts_per_target(self):
        return self.counts_per_target
    
    def get_screen_size(self):
        return self.screen_size
        
    def print_counts_per_target(self):
        for trial in self.counts_per_target.keys():
            print(f"Trial: {trial}")
            for target in self.counts_per_target[trial].keys():
                print(
                    f"Target ({target}): {self.counts_per_target[trial][target]}")
            print("--")
        print("---")


class experiment:
    """
        This class takes an experiment (All the trials for a worker)
        and loads it into a dataframe. It then processes the features for the experiment (i.e. fixations on target)

    """
    def __generate_js_images(self):
        """
            Used with the DEV option.

            Generates a JS file with all the trials with the images as used in the psiturk server.
            This is then used to create the webpage for each set.
        """
        javascript_vars = []
        trial_name_list = []
        image_list = ["'/static/images/ku_logo_dk_v.png'",
                      "'/static/images/face_position.png'",
                      "'/static/images/Sitting_position_smaller.png'"]
        trial_i = 0
        for trial_name, img_path in self.webgaze_img_path.items():
            if img_path is None:
                continue
            if path.exists(img_path):
                file_name = f"/static/images/{self.experiment_name}/{img_path.split(os.sep)[-1]}"
                trial_type = self.data[self.data.trial_name ==
                                       trial_name].trial_type.values[0]
                js_script = ""
                image_list.append("'" + file_name + "'")
                if "button" in trial_type:
                    trial_type = "jsPsychImageButtonResponse"
                    js_script = f"""var {trial_name} = {{ 
                            type: {trial_type},
                            stimulus: "{file_name}",
                            prompt: `Paragraph {trial_i}: Please choose that fits the option based on the paragraph you read.`,
                            data: {{
                                correct_answer: "{self.data[self.data.trial_name == trial_name].correct_answer.values[0]}",
                                trial_name: "{trial_name}",
                            }},
                            choices: ["True", "False"],
                            extensions: [
                                {{
                                    type: jsPsychExtensionWebgazer, 
                                    params: {{targets: ['#jspsych-image-button-response-stimulus']}}
                                }}
                                ]
                        }};"""
                elif "keyboard" in trial_type:
                    trial_type = "jsPsychImageKeyboardResponse"
                    js_script = f"""var {trial_name} = {{ 
                            type: {trial_type},
                            stimulus: "{file_name}",
                            data: {{
                                trial_name: "{trial_name}",
                            }},
                            choices: " ",
                            extensions: [
                                {{
                                    type: jsPsychExtensionWebgazer, 
                                    params: {{targets: ['#jspsych-image-keyboard-response-stimulus']}}
                                }}
                                ]
                        }};"""
                elif "survey" in trial_type:
                    trial_type = "jsPsychSurveyText"
                    js_script = f"""var {trial_name} = {{ 
                            type: {trial_type},
                            preamble: `Paragraph {trial_i}: This time, write an answer based on the paragraph you read. If you don't know the answer, write 'idk'.<br>
                            <img src="{file_name}" id="question"></img>`,
                            questions: [
                                    {{
                                        prompt: "",
                                        placeholder: "Your answer...",
                                        required: true,
                                    }},
                            ],
                            data: {{
                                correct_answer: "{self.data[self.data.trial_name == trial_name].correct_answer.values[0]}",
                                trial_name: "{trial_name}",
                            }},
                            extensions: [
                                            {{
                                            type: jsPsychExtensionWebgazer,
                                            params: {{
                                                targets: ["#question"],
                                            }},
                                            }},
                                        ],
                        }};"""
                trial_name_list.append(trial_name)
                if "q_after" in trial_name or "_post_" in trial_name:
                    trial_type = "jsPsychImageButtonResponse"
                    new_trial_name = trial_name
                    if "post" in trial_name:
                        new_trial_name = new_trial_name.replace("_post", "")
                    new_trial_name = "q_before_" + \
                        new_trial_name.replace("q_after_", "")
                    js_script += f"""\n var {new_trial_name} = {{ 
                            type: {trial_type},
                            stimulus: "{file_name}",
                            prompt: `Paragraph {trial_i}: Please read the question and continue - You don't have to answer.`,
                            data: {{
                                trial_name: "{new_trial_name}",
                            }},
                            choices: ["Continue"],
                            extensions: [
                                            {{
                                            type: jsPsychExtensionWebgazer,
                                            params: {{
                                                targets: ["#jspsych-image-button-response-stimulus"],
                                            }},
                                            }},
                                        ],
                        }};"""
                    trial_name_list.append(new_trial_name)
                    swap_element = trial_name_list[-3]
                    trial_name_list[-3] = new_trial_name
                    trial_name_list[-1] = trial_name_list[-2]
                    trial_name_list[-2] = swap_element

                if not("_qa_" in trial_name):
                    trial_i += 1
                javascript_vars.append(js_script)

        with open("jsPsych_img_experiment.js", "w", encoding="utf-8") as file:
            for i, trial in enumerate(javascript_vars):
                file.write(trial)
                file.write("\n")
            image_preload = f"""var preload = {{
                                type: jsPsychPreload,
                                auto_preload: true,
                                images: [{",".join(image_list)}]
                            }};"""
            file.write(image_preload + "\n")
            hunting_flag = False
            write_instructions = True
            # (each screen includes a fixation for normal reading, Text, Fix, Question, Fix)
            trial_spacing = 4
            count = 0
            print(trial_name_list)
            for i_trial, trial in enumerate(trial_name_list):
                if "q_before_" in trial:
                    hunting_flag = True
                if i_trial == 0:
                    file.write(f"""\n\n// NORMAL READING ----\n""")
                    file.write(
                        f"""timeline.push(task_instructions_normal);\n""")
                    file.write(f"""timeline.push(fixation);\n""")
                if hunting_flag and write_instructions:
                    write_instructions = False
                    if count != 0:
                        trial_spacing = 5
                    else:
                        trial_spacing = 6
                    file.write(
                        f"""\n\n// INFORMATION SEEKING READING ----\n""")
                    file.write(
                        f"""timeline.push(task_instructions_hunting);\n""")
                    file.write(f"""timeline.push(fixation);\n""")
                file.write(f"""timeline.push({trial});\n""")
                file.write(f"""timeline.push(fixation);\n""")
                count += 1
                if count == trial_spacing and i_trial != len(trial_name_list)-1:
                    file.write(f"""timeline.push(quick_recalibrate);\n""")
                    file.write(f"""timeline.push(fixation);\n""")
                    count = 0
                    if write_instructions == False:
                        trial_spacing = 6

    def __load_webgaze(self):
        # Load Targets + Webgaze data
        if self.data is None:
            utils.log_error("No data.", utils.Error.ERROR, self.worker_id)
            return
        # Filter non-webgaze targets
        filter_webgaze_trials = self.data[self.data.webgazer_data.notnull()]
        for i_row in range(len(filter_webgaze_trials)):
            # Each trial
            trial = filter_webgaze_trials.iloc[i_row]
            # Filtering the data points of the eye-tracker
                
            # Psiturk data is in a dictionary.
            webgazer_target_list = []
            webgazer_data_filter = trial["webgazer_data"]
            target_dictionary = trial["webgazer_targets"]

            # In cognition data is a str that needs to be made into a JSON file.
            if not self.is_psiturk:
                webgazer_data_filter = json.loads(webgazer_data_filter)
                target_dictionary  = json.loads(target_dictionary)
                if self.__is_dev:
                    target_dictionary = {k.replace("#",""):v for k,v in target_dictionary.items()}
                #webgazer_data_filter = [json.loads(point) for point in webgazer_data_filter]
            
            eye_tracking_data_post_processed = [
                [point["x"],point["y"],point["t"]] for point in webgazer_data_filter]
            eye_tracking_data_post_processed = np.array(
                eye_tracking_data_post_processed)
            if len(eye_tracking_data_post_processed) == 0 and not self.__is_dev:
                utils.log_error("NO GAZE DATA FOR TRIAL.", utils.Error.ERROR, self.worker_id, trial.trial_name)
                #print(f"############## {self.worker_id}: HAS NO GAZE DATA FOR TRIAL: {trial.trial_name} #################")

            for target_name, dict_vals in target_dictionary.items():
                # name, x, y, width, height, top, right, bottom, left
                target_webgazer = WebgazeTarget(
                    target_name, dict_vals['x'], dict_vals['y'], dict_vals['width'],
                        dict_vals['height'], dict_vals['top'], dict_vals['right'], dict_vals['bottom'], dict_vals['left'])
                webgazer_target_list.append(target_webgazer)
            if trial.isna()["trial_name"]:
                self.webgazer_data[str(
                    trial["trial_index"])] = eye_tracking_data_post_processed
                self.webgazer_targets[str(
                    trial["trial_index"])] = webgazer_target_list
            else:
                self.webgazer_data[str(
                    trial["trial_name"])] = eye_tracking_data_post_processed
                self.webgazer_targets[str(
                    trial["trial_name"])] = webgazer_target_list

    def __load_experiment_answers(self):
        # Loading the answers to the question trials
        filterd_dataframe = self.data[self.data.correct_answer.notna()].filter(
            items=["trial_name", "response", "correct_answer"])
        if self.is_psiturk:
            for trial_i, trial_data in filterd_dataframe.iterrows():
                if type(trial_data["response"]) is dict:
                    self.trial_answers[trial_data["trial_name"]] = ( 
                        list(trial_data["response"].values())[0], trial_data["correct_answer"])
                else:
                    if str(trial_data["response"]) == "1":
                        self.trial_answers[trial_data["trial_name"]] = (
                            False, trial_data["correct_answer"])
                        # print(f"### IF LOADING EXPERIMENT < EN_V06 OR < ES_v03, this was converted wrongly. WorkerID: {self.worker_id}")
                    else:
                        self.trial_answers[trial_data["trial_name"]] = (
                            True, trial_data["correct_answer"])
        else:
            for trial_i, trial_data in filterd_dataframe.iterrows():
                if len(trial_data["response"]) > 1:
                    filtered_answer = trial_data["response"].split(
                        ":")[1].replace("\"", "").replace("}", "")
                    self.trial_answers[trial_data["trial_name"]] = (
                        filtered_answer, trial_data["correct_answer"])
                else:
                    if str(trial_data["response"]) == "1":
                        self.trial_answers[trial_data["trial_name"]] = (
                            False, trial_data["correct_answer"])
                    else:
                        self.trial_answers[trial_data["trial_name"]] = (
                            True, trial_data["correct_answer"])

    def __get_validation_roi(self):
        # Return the validation roi (List with the 5 target acc)
        last_validation_data = self.data.percent_in_roi[self.data.percent_in_roi.notna(
        )].to_numpy()
        all_validation = []
        for roi_val in last_validation_data:
            if self.is_psiturk:
                # Psiturk already has the data in a list form (no need to parse strings)
                all_validation.append(roi_val)
                continue
            else:
                val_array = roi_val.replace(
                    "[", "").replace("]", "").split(",")
                val_array = np.array([float(x) for x in val_array])
                all_validation.append(val_array)
        return np.array(all_validation)
    
    def __get_sample_rate(self):
        # Returns the list with the validation samples_per_sec (can be 1 or 2), returns mean.
        all_sample_rate = self.data.samples_per_sec[self.data.samples_per_sec.notna(
        )].to_numpy(dtype=float)
        return all_sample_rate.mean()

    def __preprocess_load_dataframe(self, filepath):
        """
            When loading the dataframe we need to update the second trial to 
            represent that it was a "hunt" task, instead of normal reading.

            For this, detect if there are 2 duplicated trials with qa in the name.
        """
        raw_data = pd.read_csv(filepath)
        # Rename Hunt task duplicated names
        if "trial_name" not in raw_data.columns:
            utils.log_error("No 'trial_name' column found. Skipping.", utils.Error.WARNING, self.worker_id)
            #print("## WARNING, no trial_name column found. Skipping.")
            return
        duplicated_mask = raw_data.trial_name.duplicated() & raw_data.correct_answer.notnull()
        for i_duplicate in raw_data[duplicated_mask].index:
            trial_name = raw_data.at[i_duplicate, 'trial_name']
            if "_qa_" not in trial_name:
                # This means that the user refreshed the page at some point.
                # Usually we should check if they have completed trials twice.
                utils.log_error("There are duplicated trials.", utils.Error.ERROR, self.worker_id, trial_name)
            hunt_trial_i = raw_data[raw_data.trial_name == trial_name].index[0]
            raw_data.at[hunt_trial_i, 'correct_answer'] = np.NaN
            raw_data.at[i_duplicate, 'trial_name'] = raw_data.at[i_duplicate,
                                                                 'trial_name'] + "_hunt"
        return raw_data

    def __preprocess_dataframe(self, dataframe):
        """
            Same as __preprocess_load_dataframe, but takes a dataframe instead.
        """
        raw_data = dataframe
        completed_experiment = False
        # Rename Hunt task duplicated names
        if "trial_name" not in raw_data.columns:
            utils.log_error("No 'trial_name' column found. Skipping.", utils.Error.WARNING, self.worker_id)
            #print("## WARNING, no trial_name column found. Skipping.")
            return
        if (raw_data.trial_type == "preload").sum() > 1:
            self.experiment_reload = True
            restart_i = raw_data[raw_data.trial_type == "preload"].index
            # If the experiment has reloaded we have to check if there are questions that are answered twice.
            counts = raw_data.trial_name.value_counts()
            highest_repeated_i = -1
            for trial_repeated, counts in counts.items():
                # I want to find the last QA_trial that was repeated.
                # I then delete all of the trials that are between the 
                # experiment_repeat and the latest repeated_i
                if counts > 1 and ("a_" in trial_repeated or "meco" in trial_repeated):
                    max_i = raw_data[raw_data.trial_name == trial_repeated].index.max()
                    if max_i > highest_repeated_i:
                        highest_repeated_i = max_i
            data_i_to_keep = []
            max_i_in_experiment = raw_data.index.max()
            if len(restart_i) > 2:
                # We had more than 2 restarts.
                # Check if the user finished the experiment in one of the intervals.
                for i_start in range(len(restart_i)-1):
                    #print("Restart i:",restart_i[i_start], restart_i[i_start+1])
                    if len(raw_data.iloc[restart_i[i_start]:restart_i[i_start+1]]['trial_name'].unique()) >= 26:
                        # The Participant completed the experiment.
                        completed_experiment = True
                        # We drop all the rows, up until the time that they completed the experiment.
                        # With the link participants, some might attempt to restart the experiment again.
                        utils.log_error(f"Dropped ROWS {restart_i[0]}:{restart_i[i_start]} and {restart_i[i_start+1]}:{max_i_in_experiment}, due to completing experiment at n={i_start+1} try! Without starting the other times."
                                        , utils.Error.INFO, self.worker_id)
                        utils.log_error(f"Restart IDs: {restart_i}", utils.Error.INFO, self.worker_id)
                        #print(f"## WARNING: WorkerID: {self.worker_id}, Dropped ROWS {restart_i[0]}:{restart_i[i_start]} and {restart_i[i_start+1]}:{max_i_in_experiment}, due to completing experiment at n={i_start+1} try! Without starting the other times.")
                        #print(f"# INFO: WorkerID: {self.worker_id}, restart_ids: ", restart_i)
                        raw_data = raw_data.loc[restart_i[i_start]:restart_i[i_start+1]-1]
                        # If Rows are dropped, then you I need to recaluclate restart_i
                        restart_i = raw_data[raw_data.trial_type == "preload"].index
                        break
                # We can also have a situation where they do some in the first iteration and others in the second iteration
                for i_start in range(len(restart_i)):
                    if completed_experiment:
                        utils.log_error(f"Set 'data_i_to_keep' to [] as the experiment is complete.", utils.Error.INFO, self.worker_id)
                        data_i_to_keep = []
                        break
                    is_last_attempt = False
                    if i_start == len(restart_i)-1:
                        # We need to consider all the repetitions.
                        # Including the final one up until the last index
                        data_to_consider = raw_data.iloc[restart_i[i_start]:]
                        is_last_attempt = True
                    else:
                        data_to_consider = raw_data.iloc[restart_i[i_start]:restart_i[i_start+1]]
                    if len(data_i_to_keep) > 0:
                        # If we have found a completed trial
                        # Then we need to find where it was done in the second run:
                        last_trial, _, _ = data_i_to_keep[-1]
                        data_to_keep_start = data_to_consider[data_to_consider['trial_name'] == last_trial].index.max() + 1
                        data_i_to_keep[-1][2] = data_to_keep_start

                    if (not is_last_attempt and 
                        data_to_consider['trial_name'].str.contains("_qa_").any()):
                        # If it's the last attempt we shouldn't drop any rows.
                        mask_out_nans = ~data_to_consider['trial_name'].isnull()
                        question_mask = data_to_consider['trial_name'].str.contains("_qa_")
                        combine_mask = mask_out_nans & question_mask
                        last_available_data = data_to_consider[combine_mask].index.max()
                        data = data_to_consider.loc[last_available_data]
                        data_i_to_keep.append([data["trial_name"], last_available_data+1, -1])
                
            
            if len(data_i_to_keep) > 0:
                new_raw_data = pd.DataFrame()
                utils.log_error(f"Completed parts of the experiment in different attempts. Filtering so all first attempts are ketp.", utils.Error.INFO, self.worker_id)
                #print(f"INFO: WorkerID: {self.worker_id}, Completed parts of the experiment in different starts.")
                i_keep_start = 0
                for _, end_keep, new_keep_start in data_i_to_keep:
                    # Make the cuts
                    # This should result in removing all the duplicated rows.
                    new_raw_data = pd.concat([new_raw_data, raw_data.loc[i_keep_start:end_keep]])
                    utils.log_error(f"Keeping ROWS {i_keep_start}:{end_keep}, due to repetition of experiment!", utils.Error.INFO, self.worker_id)
                    #print(f"INFO: WorkerID: {self.worker_id}, Keeping ROWS {i_keep_start}:{end_keep}, due to repetition of experiment!")
                    i_keep_start = new_keep_start
                rest_of_the_data = raw_data.index.max()
                new_raw_data = pd.concat([new_raw_data, raw_data.loc[i_keep_start:rest_of_the_data]])
                utils.log_error(f"Keeping ROWS {i_keep_start}:{rest_of_the_data}, due to repetition of experiment!", utils.Error.INFO, self.worker_id)
                #print(f"INFO: WorkerID: {self.worker_id}, Keeping ROWS {i_keep_start}:{rest_of_the_data}, due to repetition of experiment!")
                raw_data = new_raw_data

            elif highest_repeated_i > -1 and not completed_experiment:
                self.questions_duplicated = True
                possible_restarts_mask = restart_i < highest_repeated_i
                range_to_drop = [restart_i[possible_restarts_mask].max(), highest_repeated_i+1]
                raw_data = raw_data.drop(raw_data.index[range_to_drop[0]:range_to_drop[1]])
                utils.log_error(f"Dropped ROWS {range_to_drop[0]}:{range_to_drop[1]}, due to repetition of experiment!", utils.Error.INFO, self.worker_id)
                #print(f"INFO: WorkerID: {self.worker_id}, Dropped ROWS {range_to_drop[0]}:{range_to_drop[1]}, due to repetition of experiment!")
            else:
                utils.log_error("Experiment was refreshed, but no questions were repeated.", utils.Error.INFO, self.worker_id)
                #print(f"INFO: WorkerID: {self.worker_id}, refreshed experiment, but did not repeat questions")

        duplicated_mask = raw_data.trial_name.duplicated() & raw_data.correct_answer.notnull()
        for i_duplicate in raw_data[duplicated_mask].index:
            trial_name = raw_data.at[i_duplicate, 'trial_name']
            if "_qa_" not in trial_name:
                # This means that the user refreshed the page at some point.
                # Usually we should check if they have completed trials twice.
                self.questions_duplicated = True
                repeated_i = raw_data[raw_data.trial_name == trial_name].index[-1]
                raw_data = raw_data.drop(repeated_i)
                utils.log_error("There are duplicated trials.", utils.Error.ERROR, self.worker_id, trial_name)
                #print(f"#### ERROR - There are duplicated trials for {self.worker_id}. ######")

            hunt_trial_i = raw_data[raw_data.trial_name == trial_name].index[0]
            raw_data.at[hunt_trial_i, 'correct_answer'] = np.NaN
            raw_data.at[i_duplicate, 'trial_name'] = raw_data.at[i_duplicate,
                                                             'trial_name'] + "_hunt"
        raw_data = raw_data.reset_index()
        #print(raw_data.trial_type)
        return raw_data

    def __load_images(self, path_to_imgs="experiment_data"):
        """
            Load the images for the experiment. Assumes they are placed at the folder used containing the
            "webgazer-sample-data.csv", which details the location of each of the targets.
        """
        image_path = dict()
        for webgaze_trial in self.webgazer_data.keys():
            img_name_w_size = webgaze_trial + "_1280_720"
            for endings in [".jpg", ".png"]:
                path_to_img = path.join(path_to_imgs, img_name_w_size + endings)
                if path.exists(path_to_img):
                    image_path[webgaze_trial] = path_to_img
                    continue
                else:
                    image_path[webgaze_trial] = None
        if self.__is_dev and path_to_imgs != "experiment_data":
            for k, v in image_path.items():
                if v is None:
                    utils.log_error(f"Image for {k} was not found.", utils.Error.ERROR)
                    #print(f"##### ERROR, image for {k} was not found!")
                    input("ENTER A KEY TO CONTINUE...")
        return image_path

    def __merge_fix_decision(point1, point2, tolerance=PX_TOLERANCE_FIX_DECISION, t_tolerance = T_TOLERANCE_FIX_DECISION):
        """
            Method to merge fixations if they are close together.
        """
        x1, y1, t1 = point1
        x2, y2, t2 = point2
        return (abs(x1-x2) < tolerance and abs(y1-y2) < tolerance and t2 - t1 <= t_tolerance)

    def __avg_fixations(webgaze_dict, points_avg=3):
        """
            Simple method that averages each fixation to be the the mean of the 3 points.

            Can be used as a denoising technique, but looses resolution.
        """
        merged_fixations_data = dict()
        for webgaze_trial, webgaze_data in webgaze_dict.items():
            new_webgaze_data = [webgaze_data[0]]
            for webgaze_data_i in range(2, len(webgaze_data)-points_avg-2):
                new_webgaze_data.append(
                    webgaze_data[webgaze_data_i-2:webgaze_data_i+points_avg-2].mean(axis=0))
            merged_fixations_data[webgaze_trial] = np.array(
                new_webgaze_data, dtype=int)
        return merged_fixations_data

    def __merge_fixations(webgaze_dict):
        """
            This method takes a dictionary of points and will continuously merge fixations
            as long as they fit the criteria defined in __merge_fix_decision().
            
            The point being considered is the merged_point to the following datapoint in the 
            raw data. This means that points that were close together will result in one averaged
            point of all the points. The time component is marked as the last valid points sample time.
            
            Let's say t1, t2, t3, t4:
            - t1 and t2 fit the __merge_fix_decision criteria, they are merged into a new t'1 (t1x+t2x/2, t1y+t2y/2, t2t)
            - t'1 and t3 still fit the __merge_fix_decision criteria, they then are merged into t''1(t'1x+t3x/2, t'1y+t3y/2, t3t)
            - t''1 and t4 don't match the criteria.
            - t''1 is added to the new point list
            - t4 is now the new point that will be compared with t5 ... until we run out of points.
        """
        merged_fixations_data = dict()
        for webgaze_trial, webgaze_data in webgaze_dict.items():
            if len(webgaze_data) == 0:
                merged_fixations_data[webgaze_trial] = []
                continue
            point1_i = 1
            point2_i = 1
            new_points = [webgaze_data[0]]
            count_merged = [0]
            while(point1_i < len(webgaze_data)-1 and point2_i < len(webgaze_data)):
                point2_i += 1
                c_point_merged = webgaze_data[point1_i]
                c_point_consider = webgaze_data[point2_i]
                points_merged = 0
                #print("Comparing: ", c_point_merged, c_point_consider, experiment.__merge_fix_decision(c_point_merged, c_point_consider))
                while(experiment.__merge_fix_decision(c_point_merged, c_point_consider)):
                    n_x, n_y = (c_point_merged[:2] + c_point_consider[:2])/2
                    n_t = c_point_consider[2]
                    new_point = np.array((n_x,n_y,n_t))
                    #print("Merged!", c_point_merged, c_point_consider, "New Point: ", new_point)
                    c_point_merged = new_point
                    point2_i += 1
                    if not (point2_i < len(webgaze_data)):
                        break
                    c_point_consider = webgaze_data[point2_i]
                    
                #print("OUT LOOP Comparing: ", c_point_merged, c_point_consider, experiment.__merge_fix_decision(c_point_merged, c_point_consider))
                points_merged = point2_i-point1_i
                count_merged.append(points_merged)
                new_points.append(c_point_merged)
                point1_i = point2_i
                #print("New Gaze: ", np.array(new_points))
                #print("Old Gaze: ", webgaze_data[:point1_i])
                #input("\nNext Iter...")
            data_to_merge = np.array(new_points,dtype=int)
            merged_fixations_data[webgaze_trial] = data_to_merge
            count_merged = np.array(count_merged, dtype=int)
            #if len(count_merged) > 0:
                #print(count_merged.mean(), count_merged.max(), count_merged.std())
        return merged_fixations_data
    def __calculate_durations(webgaze_dict):
        dict_with_fixation_dur = dict()
        
        for webgaze_trial, webgaze_data in webgaze_dict.items():
            if len(webgaze_data) == 0:
                dict_with_fixation_dur[webgaze_trial] = webgaze_data
                continue
            fixation_duration = webgaze_data[1:, 2] - webgaze_data[0:-1, 2]
            fix_dur = np.hstack([[0], fixation_duration])
            fix_w_duration = np.zeros((len(fix_dur),4))
            fix_w_duration[:,:3] = webgaze_data
            fix_w_duration[:, 3] = fix_dur
            dict_with_fixation_dur[webgaze_trial] = fix_w_duration
        return dict_with_fixation_dur

    def __filter_fixations(self, webgaze_data):
        """
            Filters fixations based on the duration threshold.

            This only makes sense if fixations have been merged as otherwise all fixations might end up filtered,
            depending on the refresh rate.
            Returns a dictionary of updated fixcations.
        """
        new_dict = dict()
        dict_with_fixation_dur = dict()
        total_fix = 0
        total_fix_filtered = 0
        for i, (webgaze_trial, webgaze_data) in enumerate(webgaze_data.items()):
            if len(webgaze_data) == 0:
                new_dict[webgaze_trial] = webgaze_data
                dict_with_fixation_dur[webgaze_trial] = webgaze_data
                continue

            # Calculate duration based on the differences of the following gaze point.
            fixation_duration = webgaze_data[1:, 2] - webgaze_data[0:-1, 2]

            # Assume that the first fixation has no duration (The first point in the data)
            fix_dur = np.hstack([[0], fixation_duration])
            filter_mask = np.hstack(([True], (fixation_duration >= T_TOLERANCE_FIX_FILTER)))
            fix_w_duration = np.zeros((len(fix_dur),4))
            fix_w_duration[:,:3] = webgaze_data
            fix_w_duration[:, 3] = fix_dur
            total_fix += len(filter_mask)
            total_fix_filtered += len(filter_mask)-filter_mask.sum()
            self.features_series[f"trial_{i}_total_fix_points_d"] = len(filter_mask), # Total Gaze Points for all trials
            self.features_series[f"trial_{i}_total_fix_points_d_filtered"] = len(filter_mask)-filter_mask.sum(), # Points filtered due to duration Threshold
            
            new_dict[webgaze_trial] = webgaze_data[filter_mask]
            dict_with_fixation_dur[webgaze_trial] = fix_w_duration[filter_mask]

            if filter_mask.sum() == 0:
                utils.log_error("Filtering removed all fixations", utils.Error.INFO, self.worker_id, webgaze_trial)
                #print("## WARNING: Filtering would remove all fixations.")
        self.features_series["total_fix_points_d"] = total_fix
        self.features_series["total_fix_points_d_filtered"] = total_fix_filtered
        return new_dict, dict_with_fixation_dur

    def __transform_to_scale(points, scale=[300, 800]):
        """
            Method that takes points xi,yi and transforms them into a new scale
            x'i,y'i which is limited to the scale [0-300, 0-800].
        """
        # https://math.stackexchange.com/questions/914823/shift-numbers-into-a-different-range
        points_current_scale = [points.min(), points.max()]
        return scale[0] + ((scale[1]-scale[0])/(points_current_scale[1]-points_current_scale[0]) * (points-points_current_scale[0]))

    def __count_fixations_per_target(self, fixations):
        """
            Counts the number of webgaze points inside the target area.

            This is used for the features.

            Dict [TrialName] -> Dict[TargetName] -> CountFix
        """

        fix_count_dict = dict()
        fix_trt_dict = dict()
        for trial in self.webgazer_targets.keys():
            count_dict = dict()
            dur_dict = dict()
            for target in self.webgazer_targets[trial]:
                count = 0
                count_duration = 0
                for point in fixations[trial]:
                    if target.in_boundaries(point[:3], tolerance=PX_TOLERANCE_COUNT_FIXATIONS):
                        count += 1
                        count_duration += point[3]
                count_dict[target.name] = count
                dur_dict[target.name] = count_duration
            count_dict["TotalFix"] = len(fixations[trial])
            if '#jspsych-image-keyboard-response-stimulus' in dur_dict:
                dur_dict["jsPsychTarget"] = dur_dict['#jspsych-image-keyboard-response-stimulus']
            elif '#jspsych-image-button-response-stimulus' in dur_dict:
                dur_dict["jsPsychTarget"] = dur_dict['#jspsych-image-button-response-stimulus']
            elif '#question' in dur_dict:
                dur_dict["jsPsychTarget"] = dur_dict['#question']

            fix_count_dict[trial] = count_dict
            fix_trt_dict[trial] = dur_dict

        return fix_count_dict, fix_trt_dict

    def __crop_question_answer(self):
        """
            Used with the DEV option. 
            
            It will crop the images to be used in the actual experiment.
            This means that it removes any unnecessary margins for the images.
        """
        for trial_name, img_path in self.webgaze_img_path.items():
            if img_path is None:
                continue
            if "_q" in trial_name:
                if path.exists(img_path):
                    img = Image.open(img_path)
                    # Check Heights if smaller means it has been cropped
                    if img.size[1] < self.features.screen_size[1]:
                        print(
                            f"Img ({img_path}) has been cropped already, skipping!")
                        continue
                    quetion_obj = self.webgazer_targets[trial_name][0]
                    left, top, right, bottom = quetion_obj.x, quetion_obj.top, quetion_obj.x + \
                        quetion_obj.width, quetion_obj.y+quetion_obj.height
                    img_crop = img.crop((left, top, right, bottom))
                    img_crop.save(img_path)

    
    def __remove_fixations_outside_target_region(self, verbose = 0):
        """
            This method assumes the image has been translated to the new coordinate system of 0:1280;0:720
            AND 
            That the targets have been given from the the study.py (This is called in the recalculate features.)
        """
        new_fixation_dict = self.webgazer_fixations_filtered.copy()
        new_fixation_dict_w_dur = self.webgazer_fixations_w_duration.copy()
        last_paragraph = None
        total_fix = 0
        total_fix_filtered = 0
        try:
            for i, trial_name in enumerate(self.webgazer_fixations_filtered.keys()):
                    last_paragraph = trial_name
                    if "q_before" in trial_name:
                        # This is same as q_after
                        updated_trial_name = trial_name.replace("q_before", "q_after")
                        paragraph_target = self.webgazer_targets[updated_trial_name][1]
                    else:
                        paragraph_target = self.webgazer_targets[trial_name][1]
                    trial_total_fix = len(self.webgazer_fixations_filtered[trial_name])
                    fixations = np.array([point for point in self.webgazer_fixations_filtered[trial_name]
                                        if paragraph_target.in_boundaries(point, tolerance=PX_TOLERANCE_OUTSIDE_TARGET)])
                    fixations_w_dur = np.array([point for point in self.webgazer_fixations_w_duration[trial_name]
                                        if paragraph_target.in_boundaries(point[:3], tolerance=PX_TOLERANCE_OUTSIDE_TARGET)])
                    fixation_n_filtered = trial_total_fix - len(fixations)
                    total_fix += trial_total_fix
                    total_fix_filtered += fixation_n_filtered
                    self.features_series[f"trial_{i}_total_fix_points_p"] = trial_total_fix
                    self.features_series[f"trial_{i}_total_fix_points_p_filtered"] = fixation_n_filtered
                    if len(fixations) == 0 and verbose > 1:
                        print("INFO: Removing fixations outside of target would remove all fixations!")
                        print(f"INFO: Fixations not removed for worker: {self.worker_id}, trial: {trial_name}")
                    if len(fixations > 0) and paragraph_target.width != 0 and paragraph_target.height != 0:
                        new_fixation_dict[trial_name] = fixations
                        new_fixation_dict_w_dur[trial_name] = fixations_w_dur
        except Exception as e:
            print("The fixations were not removed, this is most likely because the targets have not been updated.")
            print("#### Exception: ", e)
            print(f"#### WorkerID: {self.worker_id}, Set-name: {self.features_series['set_name']}")
            print(f"#### Screen-size: {self.features_series['screen_x']}x{self.features_series['screen_y']}")
            print("#### Last paragraph: ", last_paragraph)
            self.features_series['fixation_error'] = True
            self.features_series['target_error'] = True
            total_fix = 0
            total_fix_filtered = 0
            # input("Press enter to continue...")
        self.features_series["total_fix_points_p"] = total_fix
        self.features_series["total_fix_points_p_filtered"] = total_fix_filtered
        return new_fixation_dict, new_fixation_dict_w_dur
        
    def __trans_cord_merge_gaze_p(self):
        """
            Transforms the webgaze raw data into the "standard" location in the image which is 
            indepedent of the screensize.

            This first filters the points which are inside the image-region and then transforms them into
            a scale between [0-tolerance, y_max+tolerance]

            Generates fixations by:
                1) Merging those based on __merge_fixation()
                2) Removes fixations based on __filter_fixations()

            This automatically applies this to the variable self.webgazer_fixations_filtered
        """
        # Assumes that Targets are just an image with the stimulus.
        target_missing = False
        self.features_series['fixation_error'] = False
        
        for i, trial_name in enumerate(self.webgazer_fixations_filtered.keys()):
            paragraph_target = self.webgazer_targets[trial_name][0]
            fixations = self.webgazer_fixations_filtered[trial_name]
            if len(fixations) == 0:
                utils.log_error("No fixations detected!", utils.Error.ERROR, self.worker_id, trial_name)
                #print(
                #    f"### ERROR for trial ({trial_name}), Worker:({self.worker_id}). No fixations detected.")
                self.features_series['fixation_error'] = True
                continue
            if len(fixations > 0) and paragraph_target.width != 0 and paragraph_target.height != 0:

                # Transformation to move the points to the Image coordinates based on the screen.
                fixations[:, 0] = fixations[:, 0] - paragraph_target.x
                fixations[:, 1] = fixations[:, 1] - paragraph_target.y

                # Method to force all fixations to be in a certain scale:
                # fixations[:,0] =  experiment.__transform_to_scale(fixations[:,0], scale=[0, target.width])
                # fixations[:,1] =  experiment.__transform_to_scale(fixations[:,1], scale=[0, target.height])

                self.webgazer_fixations_filtered[trial_name] = fixations
            elif paragraph_target.width == 0 and paragraph_target.height == 0:
                utils.log_error("Image width and height were not saved! Fixations remain unscaled.", utils.Error.WARNING, self.worker_id, trial_name)
                #print(
                #    f"### ERROR for trial ({trial_name}), image width and height were not saved! Fixations remain unscaled.")
                self.webgazer_fixations_filtered[trial_name] = self.webgazer_data[trial_name]
                target_missing = True
                self.features_series['fixation_error'] = True
        if not target_missing:
            self.webgazer_fixations_filtered = experiment.__merge_fixations(self.webgazer_fixations_filtered)
            # With the merged fixations we can now calculate the updated duration
            # we do this by subtracting the t2-t1 (and consider the first point to have duration 0)
            self.webgazer_fixations_filtered, self.webgazer_fixations_w_duration = self.__filter_fixations(self.webgazer_fixations_filtered)

        return self.webgazer_fixations_filtered, self.webgazer_fixations_w_duration 

    def __get_questionaire_answers(self):
        """
            Retrieves the answers to the Questionaire Form.
        """
        # Data is in shape of Dictionary
        # Keys: age, language, fluency
        questionaire_data = self.data[self.data.trial_type ==
                                      "survey-html-form"]['response'].values[0]
        if type(questionaire_data) != dict:
            questionaire_data = json.loads(questionaire_data)
        worker_age = questionaire_data['age']
        if 'language' in questionaire_data:
            worker_lang = questionaire_data['language']
        else:
            # This else clause was to test the data from the previous Pilot. From live, the field is language.
            worker_lang = questionaire_data['mothertongue']
        worker_fluency = questionaire_data['fluency']
        worker_vision = questionaire_data.get('vision', None)
        return worker_age, worker_lang, worker_fluency, worker_vision
    
    def __calculate_total_time(self):
        indexes_where_experiment_reset = self.data[self.data.trial_type == "preload"].index
        #print(indexes_where_experiment_reset)
        if len(indexes_where_experiment_reset) <= 1:
            return self.data.time_elapsed.max()
        else:
            total_time = 0
            for i in indexes_where_experiment_reset:
                if i == 0:
                    continue
                total_time += self.data.iloc[i-1].time_elapsed
            total_time += self.data.iloc[-1].time_elapsed
            return total_time

    def __init__(self, filepath="", img_path="experiment_data", is_dev=False, is_psiturk=True, dataframe=None, worker_id=None, assignment_id=None):
        self.__TRIAL_IMG_DIR = path.join("experiment_data")
        self.__is_dev = is_dev
        self.is_psiturk = is_psiturk
        
        self.trial_nr = path.split(filepath)[-1].split(".")[0]
        self.features = Features()

        self.worker_id = worker_id
        self.assignment_id = assignment_id
        self.questions_duplicated = False
        self.experiment_reload = False
        if is_psiturk:
            assert dataframe is not None, "Please pass the dataframe to be used. dataframe was 'None'"
            self.data = self.__preprocess_dataframe(dataframe)
            
        else:
            assert filepath != "", "Please filepath to the CSV to be used. filepath was ''"
            self.data = self.__preprocess_load_dataframe(filepath)
        
        self.experiment_settings = self.data[self.data.trial_type ==
                                             "browser-check"].iloc[-1]

        self.features.worker_age = None
        self.features.worker_lang = None
        self.features.worker_fluency = None
        self.error_target = False
        experiment_screen_size = (float(self.experiment_settings.width), float(
            self.experiment_settings.height))  # (x,y)
        # There was an issue with experiment to retrieve the size of the screen
        # The method will ensure that there resolution is set to the standard.
        self.features.screen_size = self.get_screen_size(experiment_screen_size)

        self.img_path = img_path
        self.webgazer_data = dict()  # Trial Name (str) -> Webgazedata (x, y, t)
        self.webgazer_targets = dict()  # Trial Name (str) -> [WebgazeTargets]
        self.browser = self.experiment_settings.browser  # str
        self.screen_caps = dict()  # Trial name (str) -> Filepath img
        self.trial_answers = dict()  # Trial Name (str) -> str
        self.trial_names = list()  # [str]
        self.total_time = self.__calculate_total_time()
        self.__load_webgaze()
        self.__load_experiment_answers()

        if not self.__is_dev:
            # We need to get the features from the experiment
            self.val_roi = self.__get_validation_roi()
            worker_age, worker_lang, worker_fluency, worker_vision = self.__get_questionaire_answers()
            # Set into the features object
            if pd.isnull(self.val_roi[-1]).any():
                utils.log_error("Could not load AVG ROI. A value is Null.", utils.Error.WARNING, self.worker_id)
                #print(f"## WARNING: Error in loading the AVG ROI for worker id: {self.worker_id} ####")
                self.features.avg_roi  = None
            else:
                self.features.avg_roi  = self.val_roi[-1].mean()  
            self.features.sample_rate = self.__get_sample_rate()
            self.features.worker_age = worker_age
            self.features.worker_lang = worker_lang
            self.features.worker_fluency = worker_fluency

            # This data should only be created when a user has 
            # completed the experiment.
            self.trial_columns = [
            "worker_id",
            "worker_age",
            "worker_lang",
            "worker_fluency",
            "set_name",
            "set_trials",
            "participant_type",
            "platform_type",
            "vision",
            "target_error",
            "screen_x",
            "screen_y",
            "webgazer_raw_data",
            "webgazer_filtered_data",
            "total_fix_points_d", # Total Gaze Points across all trials
            "total_fix_points_d_filtered", # Total Gaze Points after filtering
            "total_fix_points_p", # Total Gaze Points across all trials
            "total_fix_points_p_filtered", # Points filtered due to duration and paragraph filter
            "avg_roi_last_val",
            "webgazer_sample_rate", 
            "exp_total_time",
            "experiment_reload",
            "questions_duplicated",
            "approved_flag",
            "total_correct_answers"
            ]

            for i in range(5):
                self.trial_columns.extend([
                f"trial_{i}_name", 
                f"trial_{i}_condition", 
                f"trial_{i}_time",
                f"trial_{i}_fixation_total",
                f"trial_{i}_fixation_text_TRT",
                f"trial_{i}_fixation_target_TRT",
                f"trial_{i}_fixation_on_target",
                f"trial_{i}_total_fix_points_d", # Total Gaze Points for all trials
                f"trial_{i}_total_fix_points_d_filtered", # Points filtered due to duration Threshold
                f"trial_{i}_total_fix_points_p", # Total Gaze Points for all trials
                f"trial_{i}_total_fix_points_p_filtered", # Points filtered due to duration and paragraph filter
                f"question_{i}_name",
                f"question_{i}_time",
                f"question_{i}_answer",
                f"question_{i}_correct_flag",
                f"question_{i}_target_to_fixation_ratio"])

            for i in range(5,10):
                self.trial_columns.extend([
                f"trial_{i}_name", 
                f"trial_{i}_condition", 
                f"trial_{i}_time",
                f"trial_{i}_fixation_total",
                f"trial_{i}_fixation_on_target",
                f"trial_{i}_fixation_text_TRT",
                f"trial_{i}_fixation_target_TRT",
                f"trial_{i}_total_fix_points_d", # Total Gaze points before duration filter
                f"trial_{i}_total_fix_points_d_filtered", # Points filtered due to duration Threshold
                f"trial_{i}_total_fix_points_p", # Total Gaze Points before paragraph filter (after duration)
                f"trial_{i}_total_fix_points_p_filtered", # Points filtered due to duration and paragraph filter
                f"pre_question_{i}_name",
                f"pre_question_{i}_time",
                f"question_{i}_name",
                f"question_{i}_time",
                f"question_{i}_answer",
                f"question_{i}_correct_flag",
                f"question_{i}_target_to_fixation_ratio"]) 

            self.features_series = pd.Series(np.zeros(len(self.trial_columns)), index=self.trial_columns)
            self.webgazer_fixations_filtered = self.webgazer_data.copy()
            self.webgazer_fixations_w_duration = experiment.__calculate_durations(self.webgazer_data.copy())
            # Perform the filtering on the Webgaze features.


            #### Setting the Series features:
            self.features_series['worker_id'] = self.worker_id
            self.features_series['worker_age'] = int(worker_age)
            self.features_series['worker_lang'] = worker_lang
            self.features_series['worker_fluency'] = int(worker_fluency)
            self.features_series['set_name'] = self.data['set_name'].iloc[0]
            self.features_series['set_language'] = self.features_series['set_name'].split("_")[1].upper()
            self.features_series['set_trials'] = [name for name in self.data['trial_name'].values if type(name) is str and "_qa_" not in name and ("meco" in name or "a_" in name)]
            self.features_series['participant_type'] = None # Volunteer / Lab / Mturk
            self.features_series['platform_type'] = None # Cognition / Psiturk
            self.features_series['vision'] = worker_vision # normal / glasses / contact lenses 
            self.features_series['screen_x'] = self.get_screen_size(experiment_screen_size)[0]
            self.features_series['screen_y'] = self.get_screen_size(experiment_screen_size)[1]
            self.features_series['webgazer_raw_data'] = to_JSON_dict(self.webgazer_data) 
            if pd.isnull(self.val_roi[-1]).any():
                utils.log_error("Could not load AVG ROI. A value is Null.", utils.Error.WARNING, self.worker_id)
                #print(f"## WARNING: Error in loading the AVG ROI for worker id: {self.worker_id} ####")
                self.features_series['avg_roi_last_val'] = np.nan
            else:
                self.features_series['avg_roi_last_val'] = self.val_roi[-1].mean()
            self.features_series['webgazer_sample_rate'] = self.__get_sample_rate()
            self.features_series['exp_total_time'] = self.total_time
            self.features_series['experiment_reload'] = self.experiment_reload
            self.features_series['questions_duplicated'] = self.questions_duplicated
            self.features_series['fixation_error'] = False
            self.features_series['target_error'] = False
        
            # All should be done on the __filter_webgaze method as it will be called to recalculate features.
            self.webgazer_fixations_filtered, self.webgazer_fixations_w_duration = self.__trans_cord_merge_gaze_p()
            # Below only do after adding targets (recalculate method)
            # self.features.counts_per_target = self.__count_fixations_per_target(self.webgazer_fixations_filtered)

            # self.webgazer_fixations_w_duration is always updated when self.__trans_cord_merge_gaze_p is called.
            # This is because, fixation duration needs to be estimated with all the data, and not when
            self.features_series['webgazer_filtered_data'] = to_JSON_dict(self.webgazer_fixations_w_duration) 

            for i, trial_name in enumerate(self.features_series['set_trials']):
                for j, row in self.data[self.data.trial_name.str.contains(trial_name) == True].iterrows():
                    if "_qa_" in row.trial_name:
                        if "before" in row.trial_name:
                            self.features_series[f"pre_question_{i}_name"] = row.trial_name
                            self.features_series[f"pre_question_{i}_time"] = row.rt
                        else:
                            self.features_series[f"question_{i}_name"] = row.trial_name
                            self.features_series[f"question_{i}_time"] = row.rt
                            self.features_series[f"question_{i}_answer"] = self.trial_answers[row.trial_name][0]
                    else:
                        self.features_series[f"trial_{i}_name"] = trial_name
                        if i >= 5:
                            self.features_series[f"trial_{i}_condition"] = "is"
                        else:
                            self.features_series[f"trial_{i}_condition"] = "nr"
                        self.features_series[f"trial_{i}_time"] = row.rt
                        self.features_series[f"trial_{i}_fixation_total"] = -1

        self.webgaze_img_path = self.__load_images(self.img_path)
        if self.__is_dev:
            """
                This is used to create the JS file to create the set for an experiment.
            """
            self.experiment_name = self.img_path.split(os.sep)[-1]
            self.__crop_question_answer()
            self.__generate_js_images()

    def set_img_directory(self, path_to_img):
        self.__TRIAL_IMG_DIR = path_to_img
    
    def set_set_name(self, new_set_name):
        self.features_series['set_name'] = new_set_name
    
    def set_set_language(self, new_set_language):
        self.features_series['set_language'] = new_set_language

    def set_participant_type(self, new_participant_type):
        assert new_participant_type in PARTICIPANT_TYPES, f"Participant type needs to be in {PARTICIPANT_TYPES}, used: '{new_participant_type}'." 
        self.features_series['participant_type'] = new_participant_type # Volunteer / Lab / Mturk           
    
    def set_platform_type(self, new_platform_type):
        assert new_platform_type in PLATFORM_TYPES, f"Participant type needs to be in {PLATFORM_TYPES}, used: '{new_platform_type}'." 
        self.features_series['platform_type'] = new_platform_type # Cognition / Psiturk
    
    def set_vision(self, new_vision):
        assert new_vision in VISION_TYPES, f"Participant type needs to be in {VISION_TYPES}, used: '{new_vision}'." 
        self.features_series['vision'] = new_vision # normal / glasses / contact lenses 

    def reset_webgaze_targets(self, trial):
        # If the trial is not present, then there was an error.
        if trial in self.webgazer_targets:
            self.webgazer_targets[trial] = self.webgazer_targets[trial][:1]

    def update_webgaze_targets(self, trial, target, verbose=0):
        """
            Update the target dictionary with a trial, target pair.
            This is used as the targets are lost when using images. This can be used
            in conjunction with the method study.get_study_targets to re-add the original
            locations of passages.

            One thing to note is that we have to "translate" to the new coordinate system.
            We have the targets to come from the original 1280x720 template, so we need to add the 
            distance from where the screen renders the image (x,y) to the target (x,y) so they are moved accordingly.

            To do this adjustment we take the original target (first in the list) and update the values based on that.
        """
        self.features_series['target_error'] = False
        if trial not in self.webgazer_targets:
            utils.log_error("Trial missing from 'webgazer_targets'.", utils.Error.ERROR, self.worker_id, trial)
            #print(
            #   f"ERROR {self.worker_id}, trial ({trial}) missing from webgazer_targets.")
            self.error_target = True
            self.features_series['target_error'] = True
            return False
        image_location = self.webgazer_targets[trial][0]

        # Ensuring the target corresponds to the target image.
        assert (image_location.name == "#jspsych-image-keyboard-response-stimulus" or
                image_location.name == "#jspsych-image-button-response-stimulus" or
                image_location.name == "#question"), f"Wrong image location target stored. Check user {self.worker_id}. Target name was: '{image_location.name}'"

        if image_location.width != 0 and image_location.height != 0:
            if target.name == "question":
                target.x = 0
                target.y = 0
            self.webgazer_targets[trial].append(target)
            # print(self.webgaze_img_path)
            #im = Image.open(self.webgaze_img_path[trial])
            # Create figure and axes
            #fig, ax = plt.subplots()
            # Display the image
            # ax.imshow(im)
            # Create a Rectangle patch
            #rect = patches.Rectangle((target.x, target.y), target.width, target.height, linewidth=1, edgecolor='r', facecolor='none')
            # Add the patch to the Axes
            # ax.add_patch(rect)
            # plt.show()
            return True
        else:
            self.error_target = True
            self.features_series['target_error'] = True
            if verbose > 0:
                utils.log_error(f"Image not loaded correctly: Image witdh: {image_location.width} | Image height: {image_location.height}", utils.Error.WARNING, self.worker_id, trial)
                #print( 
                #    f"ERROR with trial: ({trial}), the image was not loaded properly in the study.")
                #print(f"Worker id: {self.worker_id}")
                #print(
                #    f"Image witdh: {image_location.width} | Image height: {image_location.height}")
            return False
            
    def recalculate_features(self):
        """
            This method needs to be used to count the fixations.

            This is because only when the study class loads the webgazer data is this object updated with the span targets.
            Therefor ## self.features_series[f"trial_{i}_fixation_on_target"] ## will only have valid data after this is run.

            For instance, some users don't get the target-location and can be updated later with another
            participant, where we need to recalculate the features.
        """
        self.webgazer_fixations_filtered = self.webgazer_data.copy()
        self.webgazer_fixations_filtered, self.webgazer_fixations_w_duration = self.__trans_cord_merge_gaze_p()
        self.webgazer_fixations_filtered, self.webgazer_fixations_w_duration = self.__remove_fixations_outside_target_region()
        self.features.counts_per_target, duration_dict = self.__count_fixations_per_target(self.webgazer_fixations_w_duration)
        for i, trial_name in enumerate(self.features_series['set_trials']):
                target = ""
                for j, row in self.data[self.data.trial_name.str.contains(trial_name) == True].iterrows():
                    if "_qa_" in row.trial_name:
                        if "before" in row.trial_name:
                            self.features_series[f"pre_question_{i}_name"] = row.trial_name
                            self.features_series[f"pre_question_{i}_time"] = row.rt
                        else:
                            target = row.trial_name.replace("q_after_", "")
                self.features_series[f"trial_{i}_fixation_on_target"] = self.features.counts_per_target[trial_name].get(target, 0)
                self.features_series[f"trial_{i}_fixation_total"] = self.features.counts_per_target[trial_name]["TotalFix"]
                self.features_series[f"trial_{i}_fixation_text_TRT"] = duration_dict[trial_name].get("paragraph", duration_dict[trial_name]["jsPsychTarget"])
                self.features_series[f"trial_{i}_fixation_target_TRT"] = duration_dict[trial_name].get(target, 0)
        self.features_series['webgazer_filtered_data'] = to_JSON_dict(self.webgazer_fixations_w_duration) #consider using json.dumps
                        
    def get_browser(self):
        return self.browser

    def get_screen_size(self, experiment_screen_size):
        """
            Correcting the screen size in case for some reason the measurements are a bit 
            off like 1355, 760.
        """
        resolutions = ALL_RESOLUTIONS_SET
        if experiment_screen_size in resolutions:
            return experiment_screen_size
        min = 100000
        updated_res = (-1, -1)
        current_val = np.array(experiment_screen_size)
        for res in resolutions:
            distance = np.abs(res - current_val)
            # The most important distance is the one in width
            distance = distance[0] * 0.75 + distance[1] * 0.25
            if min > distance:
                min = distance
                updated_res = res
        #print("Check Resoltion conversion: ")
        #print(f"Before: {experiment_screen_size}, after: {updated_res}")
        #print(min)
        #input()
        return updated_res

    def get_filtered_fixations_w_duration(self):
        return self.webgazer_fixations_w_duration 
    
    def get_duration_fixation_on_word(self, trial_name):
        """
            Return dataframe
            word_id, TRT, FixCount, Span_word_is_in, text_id
        """
        duration_dict = dict()
        fixations = self.webgazer_fixations_w_duration[trial_name]
        non_word_patterns = re.compile(r'meco_para_\w+|#jspsych-image-keyboard-response-stimulus|paragraph|a_\w+_[0-9]|question')
        target_patterns = re.compile(r'meco_para_\w+|a_\w+_[0-9]')
        for target in self.webgazer_targets[trial_name]:
            if non_word_patterns.match(target.name):
                # Skip all the non-word paterns. We only want to consider the words TRT.
                continue
            duration = 0
            count_fixation = 0
            span_word_is_in = ""
            is_in_span = False
            if not is_in_span:
                for span_target in self.webgazer_targets[trial_name]:
                    if (target_patterns.match(span_target.name) and
                    target.target_is_overlapping(span_target)):
                        is_in_span = True
                        span_word_is_in += span_target.name + " "
            for point in fixations:
                if target.in_boundaries(point[:3], tolerance=PX_TOLERANCE_COUNT_FIXATIONS):
                    duration += point[3]
                    count_fixation += 1
                
            if duration > 0:
                duration_dict[target.name] = [duration, count_fixation, span_word_is_in]
            else:
                duration_dict[target.name] = [np.NaN, count_fixation, span_word_is_in]
        dataframe_format = pd.DataFrame()
        try:
            counts_np = np.array(list(duration_dict.values()))
            dataframe_format['word_id'] = duration_dict.keys()
            dataframe_format['TRT'] = counts_np[:,0]
            dataframe_format['FixCount'] = counts_np[:,1]
            dataframe_format['Span_word_is_in'] = counts_np[:,2]
            dataframe_format['text_id'] = trial_name
        except Exception as e:
            print("Error creating the TRT dictionary.")
            print("#### Exception: ", e)
            print(f"#### WorkerID: {self.worker_id}, Set-name: {self.features_series['set_name']}")
            print(f"#### TRIAL WITH ERROR: '{trial_name}'")

        return dataframe_format

    def generate_plotmap(self, use_unfiltered_data=False, plot_scan_path=True):
        """
            Generates a plot using the screenshot for the experiment and 
            places all the filtered webgaze points with the bounding boxes for the ROI for each target.
        """
        if use_unfiltered_data:
            gaze_data_to_use = self.webgazer_data
        else:
            gaze_data_to_use = self.webgazer_fixations_filtered
        for i in range(10):
            print(self.features_series[f"trial_{i}_name"], 
                  "Paragraph TRT: ", self.features_series[f"trial_{i}_fixation_text_TRT"], 
                  "Fixation Target TRT: ", self.features_series[f"trial_{i}_fixation_target_TRT"])
        
        for trial, gaze in gaze_data_to_use.items():
            image_size = self.webgazer_targets[trial][0]
            if image_size.width == 0 and image_size.height == 0:
                im = Image.open(self.webgaze_img_path[trial])
                x, y = im.size
            else:
                x, y = int(image_size.width), int(image_size.height)
            image_name = trial
            if "q_before" in trial:
                image_name = image_name.replace("q_before", "q_after")
            bg_img_name = f"{image_name}_1280_720.png"
            path_to_bg_img = path.join(self.__TRIAL_IMG_DIR, bg_img_name)
            prefix_name = ""
            if self.worker_id is not None:
                prefix_name = self.worker_id
            else:
                prefix_name = self.trial_nr
            save_file_path = path.join(
                OUTPUT_HEATGAZE_DIR, f"{prefix_name}_{trial}_plotmap.png")
            if not path.exists(path_to_bg_img):
                utils.log_error("Image is for trial is missing. No plot was generated.", utils.Error.ERROR, self.worker_id, trial)
                #print(f"## ERROR: image for Trial ({trial}) was not generated. IMG missing.")
            else:
                try:
                    plt.clf()
                    img = plt.imread(path_to_bg_img)
                    colours = [
                        'tab:blue',
                        'tab:orange',
                        'tab:green',
                        'tab:red',
                        'tab:purple',
                        'tab:brown',
                        'tab:pink',
                        'tab:olive',
                        'tab:cyan',
                    ]
                    colour_word = 'tab:gray'
                    target_rect = []
                    for i, target in enumerate(self.webgazer_targets[trial]):
                        if "#" not in target.name:
                            if target.is_word:
                                # Word Pattern
                                # print(target.name)
                                rect = patches.Rectangle((target.x-PX_TOLERANCE_COUNT_FIXATIONS, target.y-PX_TOLERANCE_COUNT_FIXATIONS), target.width+2*PX_TOLERANCE_COUNT_FIXATIONS, target.height+2*PX_TOLERANCE_COUNT_FIXATIONS, linewidth=1, edgecolor=colour_word, facecolor='none', alpha=0.5)
                            else:
                                rect = patches.Rectangle((target.x-PX_TOLERANCE_COUNT_FIXATIONS, target.y-PX_TOLERANCE_COUNT_FIXATIONS), target.width+2*PX_TOLERANCE_COUNT_FIXATIONS, target.height+2*PX_TOLERANCE_COUNT_FIXATIONS, linewidth=3, alpha=0.8, edgecolor=colours[i % len(
                                colours)], facecolor='none', label=target.name)
                            target_rect.append(rect)
                        
                    fig, ax = plt.subplots()
                    ax.imshow(img)
                    for target_r in target_rect:
                        ax.add_patch(target_r)
                    colour_array = []
                    for i, point in enumerate(gaze):
                        colour = "b"
                        for j, target in enumerate(self.webgazer_targets[trial]):
                            if target.in_boundaries(point, tolerance=PX_TOLERANCE_COUNT_FIXATIONS) and "#" not in target.name and "paragraph" not in target.name:
                                colour = colours[j % len(colours)]
                                break
                        colour_array.append(colour)
                    size_array = np.hstack(([0], gaze[:-1,2]))
                    size_array = gaze[:,2] - size_array
                    
                    #for i_w, row_w in self.get_duration_fixation_on_word(trial).iterrows():
                    #    print(row_w['word_id'], row_w['TRT'])
                    
                    #print(size_array)
                    size_array = (size_array/max(size_array) * 100)*2
                    colour_array = np.array(colour_array)
                    ax.scatter(gaze[:, 0], gaze[:, 1],
                            alpha=0.8, s=size_array)
                    
                    if plot_scan_path:
                        n = len(gaze)
                        viridis = cm.get_cmap('viridis', n)
                        for i in range(n-1):
                            x = gaze[i:i+2,0]
                            y = gaze[i:i+2,1]
                            ax.plot(x, y, c=viridis(i), alpha=0.4)
                    #print(self.webgazer_data[trial][:15])
                    #print(self.webgazer_data[trial].shape)
                    #print(self.webgazer_fixations_filtered[trial][:15])
                    #print(self.webgazer_fixations_filtered[trial].shape)
                    print(f"Plot path if saved: {save_file_path}")
                    ax.legend()
                    plt.show()
                    
                except IndexError:
                    utils.log_error("Couldn't generate plotmap. Gaze data might be missing.", utils.Error.ERROR, self.worker_id, trial)
                    #print(f"ERROR when generating the plotmap. There might not be gaze data for this trial ({trial}).")
            
    def __str__(self):
        return str(self.data)


#test_trial = experiment(os.path.join("experiment_data","images_experiment", "webgazer-sample-data.csv"), os.path.join("experiment_data","images_experiment"), True)
"""
To generate an experiment with the generated images from the DEV Jspsych please use the following:
test_trial = experiment(os.path.join("path to CSV"), os.path.join("path to images"), is_dev=True, is_psiturk=False)
# This will create a file: jsPsych_img_experiment.js containing the experiment with the images.
"""
if __name__ == '__main__':
    args = sys.argv[1:]
    set_name = args[0]
    experiment_name = set_name
    test_trial = experiment(path.join("experiment_data", experiment_name, "webgazer-sample-data.csv"),
                            path.join("experiment_data", experiment_name), is_dev=True, is_psiturk=False)
