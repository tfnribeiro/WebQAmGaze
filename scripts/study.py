from experiment import *
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from scipy.stats import ttest_ind
import numpy as np
import json
import re
import sys
from study_config import StudyConfig
import os
import pytesseract
from pytesseract import Output
import cv2
import pandas as pd
from collections import Counter
from sys import platform
import utils
import argparse

"""
Code used to load a series of experiments and correct the various trials.
It generates the targets for a set and calculate the features for all the participants given the set.

"""
# From https://stackoverflow.com/questions/4060221/how-to-reliably-open-a-file-in-the-same-directory-as-the-currently-running-scrip
__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))

if platform == "win32":
    # Assumes it's in the default isntallation location
    # Used to create word boundaries.
    pytesseract.pytesseract.tesseract_cmd = 'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

DEBUG_LINK_TRIAL_IDS = {# Debug links:
                        "linkParaSJUN",
                        "linkP0r7K2r5k5a",
                        "linkPeMsvxL7uvK",

                        # Participants who requested to not be made part of the dataset.
                        "ADFJOOSM3Q18G", 
                        
                        # TR_v03 error screen
                        "linkP4MWzj4vI95",
                        "linkPaEPN9YyGAU",
                        "linkPspOmnz6g82",
                        "linkP7RvmkbKpam",
                        "linkPymykh61auj",
                        "linkPJbzqfYQgka",
                        "linkPk1xTptLWaq",
                        "linkPkdujg5fdP5",
                        "linkPmrAF41anyG",
                        "linkP0dQ5Qn5qSI",
                        "linkPYkEn8UTJFJ",
                        "linkPs0vOXtqjPC",
                        "linkP9Lx2LP0hh3",
                        "linkPdmywNtqq1G",
                        "linkPDnZkLNf2jL",
                        "linkP0wNKBnNK2U",
                        "linkPcyKp0tcFKv",
                        "linkPRV1rmTf1cb",
                        "linkPBXJpfqMGTR",
                        "linkP9IGnXzByD7",
                        "linkP4Pv4pxZakh",
                        "linkPyx4y68OgM1",
                        "linkPQz7aPavonM",
                        "linkPORSEXBYPV4",
                        "linkPH9bg2kai11",
                        "linkPDLsZ0hEWXp",
                        "linkPfGaWiwSE61",
                        "linkPh0JLkgMm5e",
                        "linkPLgSEiNYJ8A",
                        "linkPE22INGgGL6",
                        "linkP0PNttZOKdh",
                        "linkPiRg8A65phA",
                        "linkPw9WALfyBn5",
                        "linkPq7l7d8mTpP",
                        "linkPkkZ5VlDAft",
                        "linkPBYjtsmCpyj",
                        "linkP67hDrxQY3r",
                        "linkPUVCROD011g",
                        # End of TR_V03 errors
                        }

""" Class for loading the experiment data """
""" Will be composed of several trials and manipulates data across trials """

class Study:
    def __init__(self, study_name):
        self.study_name = study_name
        self.experiment_list = []
        # This will hold all the dev files with targets and
        # text information.
        self.experiment_dev = None
        self.target_dict = {}
        self.corret_answers = {}
        self.study_config = StudyConfig()
    
    def print_all_acc(self):
        """
            Prints all the accuracy of the validation step in the experiment.
        """
        total_experiment_roi = []
        total_experiment_sample_rate = []
        for exp in self.experiment_list:
            print(f"Participant {exp.worker_id}:")
            print(exp.val_roi)
            if exp.features.avg_roi is None:
                utils.log_error("Skipped experiment due to error in validation step.", utils.Error.INFO, exp.worker_id)
                #print("Skipping worker: ", " due to error in validation step.")
                print(f"Sample rate: {exp.features.sample_rate}")
                print()
                continue
            total_experiment_roi.append(exp.features.avg_roi)
            total_experiment_sample_rate.append(exp.features.sample_rate)
            print(f"Average ROI: {exp.features.avg_roi}")
            print(f"Sample rate: {exp.features.sample_rate}")
            print()
        total_experiment_roi = np.array(total_experiment_roi)
        total_experiment_sample_rate = np.array(total_experiment_sample_rate)
        print(f"Experiment ROI/SampleRate avg: {total_experiment_roi.mean():.2f} / {total_experiment_sample_rate.mean():.2f}")
        print(f"Experiment ROI/SampleRate std: {total_experiment_roi.std():.2f} / {total_experiment_sample_rate.std():.2f}")
        print(f"Experiment ROI/SampleRate MAX: {total_experiment_roi.max():.2f} / {total_experiment_sample_rate.max():.2f}")
        print(f"Experiment ROI/SampleRate MIN: {total_experiment_roi.min():.2f} / {total_experiment_sample_rate.min():.2f}")
        print()

    def load_data_from_folder(self, path_to_data, is_psiturk:bool, path_to_setdata="", 
                              show_first_part_data=False, show_answers=False, export_target_dataframes=False, 
                              export_feature_dataframes=False,):
        """
            path_to_data is expected to be a folder if is_psiturk is 'False' and a trialdata.csv (from psisturk) if 'True'
        """
        
        def get_config_file(data_dir):
            for file in os.listdir(data_dir):
                if ".conf" in file:
                    return os.path.join(data_dir, file)
            return False
        if path_to_setdata == "":
            path_to_setdata = os.path.join(__location__, "experiment_data", self.experiment_name)
            utils.log_error(f"No path to set given, defaulting to: '{path_to_setdata}'", utils.Error.INFO)
        utils.log_error(f"Loading data from: '{path_to_setdata}', is psiturk: '{is_psiturk}'", utils.Error.INFO)
        path_with_config = path_to_data
        self.get_study_targets(os.path.join(path_to_setdata,"webgazer-sample-data.csv"))
        if not os.path.isdir(path_with_config):
            # This is the case of psiturk
            path_with_config = os.sep.join(path_to_data.split(os.path.sep)[:-1])
        path_to_config = get_config_file(path_with_config)
        if path_to_config != False:
            self.load_config(path_to_config)

        if is_psiturk:
            experiment_loaded = self.load_psiturk(path_to_data, set_name_config = self.study_config.data["set_name"])   
        else:
            experiment_loaded = self.load_cognition(path_to_data) 
        self.experiment_list += experiment_loaded
        if path_to_config != False:
            self.set_config_experiment(experiment_loaded)             
        self.set_img_directory(path_to_setdata)
        self.update_all_experiments_targets()
        if show_answers:
            # Only print the information if show_answers is enabled.
            self.print_all_questionaire_data()
            self.print_all_total_time()
            self.print_all_acc()
            self.print_corrected_answers()
        self.correct_study_answers(verbose=show_answers)
        self.set_approve_reject_flag()

        print("Fixation Errors Report: ")
        print()
        
        for features in self.get_feature_vector_list():
            print(f"WorkerID: {features['worker_id']}, Type: {features['participant_type']}, Set: {features['set_name']} || Fixation Error | Target Error: ", features['fixation_error'], features['target_error'])
            if export_feature_dataframes:
                features.to_json(os.path.join(__location__, "pre_processed_data", f"{features.worker_id}_{features.set_name}.json"))
        if export_feature_dataframes:
            utils.log_error("All data saved in: " + os.path.join("pre_processed_data"), utils.Error.INFO)
        fixation_error_ids = []
        if export_target_dataframes:
            utils.log_error("Exporting all fixation data!", utils.Error.INFO)
            for worker in self.experiment_list:
                # Features can only be exported if there are no errors.
                if (not worker.features_series['fixation_error'] 
                and not worker.features_series['target_error']): 
                    try:
                        worker_target_df = pd.DataFrame()
                        experiment_name = worker.features_series["set_name"]
                        for trial_name in worker.features_series['set_trials']:
                            duration_dataframe = worker.get_duration_fixation_on_word(trial_name)
                            worker_target_df = pd.concat((worker_target_df, duration_dataframe))
                        worker_target_df.to_csv(os.path.join(__location__, "pre_processed_data","fixation_data_per_part",f"{worker.worker_id}_{experiment_name}_fix_dict.csv"), index=False)
                    except Exception as e:
                        print(e)
                        fixation_error_ids.append(worker.worker_id)
            utils.log_error("All fixation data saved in: " + os.path.join(__location__, "pre_processed_data", "fixation_data_per_part"), utils.Error.INFO)
        if len(fixation_error_ids) > 0:
            utils.log_error("Participants had fixation errors when generating IDs", utils.Error.ERROR)
            utils.log_error(f"Total errors: {len(fixation_error_ids)}", utils.Error.ERROR)
            for id in fixation_error_ids:
                print(id)
        if show_first_part_data:
            workers_selected = [
                worker for worker in self.experiment_list 
                if not worker.features_series['fixation_error'] 
                and not worker.features_series['target_error'] 
                and worker.features_series['webgazer_sample_rate'] > 10
                and worker.features_series['approved_flag'] > 0
                ]
            worker_selected = workers_selected[0]
            if plot_first_part:
                print("Generating plotmap for the first participant after filtering...")
                worker_selected.generate_plotmap()
    

    def load_cognition(self, folderpath, verbose=0):
        utils.log_error(f"Data loading from: {folderpath}", utils.Error.INFO)
        counter_of_unique_ids = 0
        loaded_experiment_list = []
        for file in os.listdir(folderpath):
            if "webgazer-sample-data.csv" in file: continue
            if "word_boundaries.csv" in file: continue
            if "trialdata.csv" in file: continue
            if ".csv" in file:
                print("Loading file: ", file)
                worker_id = "p"+file.replace(".csv","")+"_"+folderpath.split(os.sep)[-1]
                counter_of_unique_ids += 1
                loaded_experiment_list.append(experiment(is_psiturk=False, filepath=os.path.join(folderpath, file), img_path=folderpath, worker_id=worker_id))
        return loaded_experiment_list
        
    def load_psiturk(self, filepath, set_name_config=None, verbose = 0):
        """
            This expects the file trialdata.csv from psiturks 'download_datafiles' cmd.
            The file contains a row for each trial performed in the Study, as such we need to group them
            and covert them into an experiment dataframe. 
        """
        #print(f"LOADING DATA FROM: {filepath}")
        utils.log_error(f"Data loading from: {filepath}", utils.Error.INFO)
        loaded_experiment_list = []
        set_name = filepath.split(os.sep)[-2] if set_name_config is None else set_name_config
        trial_data = pd.read_csv(filepath, names=['id','status','trial_id','data'])
        trial_ids_to_keep = []
        counter_of_unique_ids = 0
        for trial in trial_data.id.unique():
            not_in_set_flag = False
            trial_set_name = None
            trial_df = pd.DataFrame()
            data_trial = trial_data[trial_data.id == trial]
            link_id, asssingment_id = trial.split(":")
            if 'debug' in trial or link_id in DEBUG_LINK_TRIAL_IDS:
                if verbose > 1:
                    print(f"Debug run ({trial}) skipped!")
                continue
            counter_of_unique_ids += 1
            dataframes = []
            for i, row in data_trial.iterrows():
                data = json.loads(row['data'])
                data = {k:[v] for k,v in data.items()}
                trial_set_name = data["set_name"][0]
                if trial_set_name != set_name:
                    not_in_set_flag = True
                    break 
                dataframes.append(pd.DataFrame.from_dict(data))
            if not_in_set_flag:
                if verbose > 1:
                    utils.log_error(f"Assignment ID: {trial} not in this data_set. Value was ({trial_set_name}, set is: {set_name}.", utils.Error.ERROR, worker_id)
                continue
            trial_df = pd.concat(dataframes)
            trial_df = trial_df.reset_index()
            worker_id, assignment_id = trial.split(":")
            img_path = filepath.split(os.sep)[:-1]

            if "trial_name" not in trial_df.columns:
                #print(f"WARNING! No trial name found. ID: {trial}")
                continue
            elif "set_name" not in trial_df.columns:
                #print(f"WARNING! No 'set name' found. ID: {trial}")
                continue
            elif "correct_answer" not in trial_df.columns:
                #print(f"WARNING! No 'correct_answer' found. ID: {trial}")
                continue
            utils.log_error(f"Experiment loaded! Assignment ID: {asssingment_id}", utils.Error.INFO, worker_id)
            #print(f"Loaded data, ID: {trial}")
            #print("UNIQUE COUNT: ", len(trial_df['trial_name'].unique()))
            if len(trial_df['trial_name'].unique()) < 26:
                utils.log_error("Experiment has less trials than expected. The experiment was not terminated/missing data.", utils.Error.INFO, worker_id)
                #print(f"ERROR, Worker ID: {worker_id}, didn't seem to finish the experiment.")
                continue
            loaded_experiment_list.append(experiment(is_psiturk=True, img_path=os.path.join(*img_path), dataframe=trial_df, worker_id=worker_id, assignment_id=assignment_id))
            
            # Keep all the indexes of data we have loaded
            trial_ids_to_keep += list(data_trial.index)

            #print("UNIQUE TRIALS: ", counter_of_unique_ids)
        # Replace the old CSV with a filtered CSV with the relevant data.
        # If no ids are kept, something went wrong, report it 
        if len(trial_ids_to_keep) > 0:
            trial_data.loc[trial_ids_to_keep].to_csv(filepath, header=False, index=False)
            if verbose > 1:
                utils.log_error(f"Total number of unique experiments: {counter_of_unique_ids}, writing to '{filepath}' to keep only the relevant data.", utils.Error.INFO)
        else:
            utils.log_error(f"No experiment was loaded, make sure the set_name matches the data you are trying to load.", utils.Error.ERROR)
        return loaded_experiment_list
    
    def load_config(self, config_path):
        self.study_config.load(config_path)

    def set_config_experiment(self, temporary_list):
        for e in temporary_list:
            e.set_set_name(self.study_config.data["set_name"])
            e.set_set_language(self.study_config.data["set_language"])
            e.set_participant_type(self.study_config.data["participant_type"])
            e.set_platform_type(self.study_config.data["platform_type"])
        utils.log_error("Updated all the experiments according to configuration.", utils.Error.INFO)
        print("Configuration used: ")
        print(self.study_config.data)


    def get_worker(self, worker_id):
        """
            Retrieves a worker by worker ID in the experiment list.
        """
        for worker in self.experiment_list:
            if worker.worker_id == worker_id:
                return worker
        return None

    def update_targets_with_worker(self, worker_id_with_target, worker_id_with_error):
        # If for some reason the images fail to load their properties (Low RAM(?))
        # We can use someone that has the same resolution to correct the targets. 
        # Otherwise this has to be done manually by performing the experiment on local and creating an ID.
        worker_id_correct = self.get_worker(worker_id_with_target)
        worker_id_error = self.get_worker(worker_id_with_error)
        if worker_id_correct is None or worker_id_error is None:
            utils.log_error(f"Reference Experiment ID: {worker_id_with_target} or Error Experiment ID: {worker_id_with_error} is missing.", utils.Error.ERROR)
            return
        if (worker_id_correct.features.screen_size[0] == worker_id_error.features.screen_size[0] and
             worker_id_correct.features.screen_size[1] == worker_id_error.features.screen_size[1]):
                worker_id_error.webgazer_targets = worker_id_correct.webgazer_targets.copy()
                utils.log_error(f"WorkerID ({worker_id_with_error}) Webgazer tagets updated successfuly with WorkerID ({worker_id_with_target}) targets.", error_level=utils.Error.INFO)
                worker_id_error.recalculate_features()
        else:
            utils.log_error(f"Targets were not updated as experiment with error and reference screen sizes are not the same. Error ID: {worker_id_error.worker_id} | Reference ID: {worker_id_correct.worker_id}", utils.Error.ERROR)
            #print(f"ERROR: WorkerID ({worker_id_error}) not udpated. The screen size was not the same.")


    def add_experiment(self, experiment):
        self.experiment_list.append(experiment)
    
    def print_all_total_time(self):
        """
            Converts the experiment total time to minutes and prints for all the participants.
        """
        time_taken = []
        for exp in self.experiment_list:
            total_time_to_min = exp.total_time * (1.66 * (10 ** -5))
            time_taken.append(total_time_to_min)
            print(f"WorkerID: {exp.worker_id} | Total Time (min): {total_time_to_min}")
        time_taken = np.array(time_taken)
        print(f"Mean time for experiment: {time_taken.mean():.4}min")
        print(f"Std time for experiment:  {time_taken.std():.4}min")

    def generate_all_webgazer_img(self):
        for exp in self.experiment_list:
            exp.generate_heatmap()
    
    def show_all_plotmaps(self, worker_list="ALL", use_unfiltered_data=False):
        if worker_list == "ALL":
            for exp in self.experiment_list:
                exp.generate_plotmap(use_unfiltered_data=use_unfiltered_data)
        else:
            for exp in self.experiment_list:
                if exp.worker_id in worker_list:
                    exp.generate_plotmap(use_unfiltered_data=use_unfiltered_data) 
    
    def get_study_answers(self):
        """
            Prints all the participants answers to the experiment.
        """
        for exp in self.experiment_list:
            print(f"ANSWERS FOR: {exp.worker_id}")
            for key, pair in exp.trial_answers.items():
                print(f"Trial: {key} | A: {pair[0]} || C: {pair[1]}")
                print(exp.features[key].keys())
                print(f"Total fixations on target: {exp.features.counts_per_target[key]}/{exp.features.counts_per_target[key][key]}")
                print()
    
    def get_assingment_id(self, worker_id):
        for worker in self.experiment_list:
            if worker.worker_id == worker_id:
                return worker.assignment_id
        return None

    def get_time_taken(self, worker_id):
        # Returns time taken in minutes
        for worker in self.experiment_list:
            if worker.worker_id == worker_id:
                total_time_to_min = worker.total_time * (1.66 * (10 ** -5))
                return total_time_to_min
        return None
    
    def set_approve_reject_flag(self):
        for worker, answers in self.corret_answers.items():
            count_correct = 0
            for key, (score,fix_ratio) in answers.items():
                if score == 1:
                    count_correct += 1
            worker_obj = self.get_worker(worker)
            if round(count_correct/len(answers),3) >= 0.50:
                worker_obj.features_series["approved_flag"] = 1
                if round(count_correct/len(answers),3) >= 0.75:
                    worker_obj.features_series["approved_flag"] = 3
                elif round(count_correct/len(answers),3) >= 0.60:
                    worker_obj.features_series["approved_flag"] = 2
            else:
                worker_obj.features_series["approved_flag"] = 0
    def print_corrected_answers(self):
        """
            Prints the results based on the corrected answers.
            This is used to pay the workers in PsiTurk.
        """
        counter_unapproved = 0
        counter_approved = 0
        counter_bonus_one = 0
        counter_bonus_two = 0
        for worker, answers in self.corret_answers.items():
            print()
            print()
            worker_exp_total_time = self.get_time_taken(worker)
            print(f"## Showing results for workerID: {worker}, total time: {worker_exp_total_time:.2f} ##")
            print()
            assignment_id = self.get_assingment_id(worker)
            count_correct = 0
            for key, (score,fix_ratio) in answers.items():
                if score == 1:
                    print(f"{key}: CORRECT (1), with a fixation ratio of {fix_ratio:.2f}")
                    count_correct += 1
                else:
                    print(f"{key}: WRONG (0), with a fixation ratio of {fix_ratio:.2f}")
            
            print()    
            print(f"WorkerID: {worker} has {count_correct}/{len(answers)} correct answers.")
            if worker_exp_total_time < 10:
                print()
                print(f"###!!! CHECK EVENTS FOR USER: {worker}, experiment took too little time. !!!###")
                print()
            if round(count_correct/len(answers),3) >= 0.50:
                counter_approved += 1
                if round(count_correct/len(answers),3) >= 0.75:
                    counter_bonus_two += 1
                    print(f"WorkerID: {worker} has >75% correct: 2$ BONUS")
                    print()
                    print(f"RUN PsiTurk: 'worker approve {assignment_id}'")
                    print(f"RUN PsiTurk: 'worker bonus --amount 2.00 {assignment_id}'")
                    print(f"Message: 'Well done, you got at least 75% of the questions correct!'")
                elif round(count_correct/len(answers),3) >= 0.60:
                    counter_bonus_one += 1
                    print(f"WorkerID: {worker} has >60% correct: 1$ BONUS")
                    print()
                    print(f"RUN PsiTurk: 'worker approve {assignment_id}'")
                    print(f"RUN PsiTurk: 'worker bonus --amount 1.00 {assignment_id}'")
                    # NEEDS TO BE TESTED print(f"RUN PsiTurk: 'worker bonus --amount 1.00 {assignment_id} --reason=\"Well done, you got at least 60% of the questions correct!\"'")
                    print(f"Message: \"Well done, you got at least 60% of the questions correct!\"")
                else:
                    print(f"WorkerID: {worker} has >50% correct: BASE")
                    print()
                    print(f"RUN PsiTurk: 'worker approve {assignment_id}'")
            else:
                counter_unapproved += 1
                print(f"WorkerID: {worker} has <50% correct: REJECT HIT")
                print()
                print(f"RUN PsiTurk: 'worker reject {assignment_id}'")
        print()
        print(f"Workers Approved: {counter_approved}")
        print(f"Workers Bonus 1$: {counter_bonus_one}")
        print(f"Workers Bonus 2$: {counter_bonus_two}")
        print(f"Workers Rejected: {counter_unapproved}")

    def correct_study_answers(self, verbose=False):
        """
            Run this to correct the answers for an experiment set.
            This will create two JSON files with the accepted/rejected answers in the folder.
        """
        for exp in self.experiment_list:
            self.corret_answers[exp.worker_id] = dict()
        
        # Loading data from previous corrections.
        dict_accepted_answer = dict()
        dict_unaccepted_answer = dict()

        path_dict_accepted_answer = os.path.join(__location__, "experiment_data",self.study_name,"accepted_answers.json")
        path_dict_unaccepted_answer = os.path.join(__location__, "experiment_data",self.study_name,"unaccepted_answers.json")

        if os.path.exists(path_dict_accepted_answer):
            with open(path_dict_accepted_answer) as f:
                dict_accepted_answer = json.load(f)
        if os.path.exists(path_dict_unaccepted_answer):
            with open(path_dict_unaccepted_answer) as f:
                dict_unaccepted_answer = json.load(f)

        # Calculate average time for experiment
        rt_per_trial = dict()
        for exp in self.experiment_list:
            for key, pair in exp.trial_answers.items():
                paragraph_target = re.sub('_qa_[0-9]+|q_after_','', key)
                if paragraph_target not in rt_per_trial and "_hunt" not in paragraph_target:
                    rt_per_trial[paragraph_target] = []
                try:
                    rt_per_trial[paragraph_target].append(exp.data[exp.data.trial_name == paragraph_target].rt.values[0])
                except:
                    utils.log_error("Worker completed a task twice!", utils.Error.WARNING, exp.worker_id, paragraph_target)
                    #print(f"## WARNING!! WorkerID: {exp.worker_id}, completed task [{paragraph_target}] twice!!")
        for exp in self.experiment_list:
            if verbose:
                print(f"ANSWERS FOR: {exp.worker_id}")
            count_correct = 0
            for i, (key, pair) in enumerate(exp.trial_answers.items()):
                # To speed up the process if the same answer is seen
                # we automatically mark it with whatever was assigned last.
                if key not in dict_accepted_answer:
                    dict_accepted_answer[key] = list()   
                    dict_unaccepted_answer[key] = list()
                paragraph_target = re.sub('_qa_[0-9]+|q_after_','', key)
                answer = str(pair[0]).strip().lower()
                correct_answer = str(pair[1]).strip().lower()
                if correct_answer not in dict_accepted_answer[key]: 
                    dict_accepted_answer[key].append(correct_answer)
                if 'idk' not in dict_unaccepted_answer[key]:
                    dict_unaccepted_answer[key].append('idk')
                try:
                    time_taken = exp.data[exp.data.trial_name == paragraph_target].rt.values[0]
                except:
                    print(exp.data[exp.data.trial_name == paragraph_target])
                    utils.log_error("Worker completed a task twice!", utils.Error.WARNING, exp.worker_id, paragraph_target)
                    #print(f"## WARNING!! WorkerID: {exp.worker_id}, completed task [{paragraph_target}] twice!!")
                avg_paragraph_time = np.array(rt_per_trial[paragraph_target]).mean()
                std_paragraph_time = np.array(rt_per_trial[paragraph_target]).std()
                if verbose:
                    print(f"Trial: {key} | A: {pair[0]} || C: {correct_answer}")
                    print(f"User took: {time_taken}ms, avg time taken in trial is: {avg_paragraph_time:.2f}, std={std_paragraph_time:.2f}")
                if time_taken < avg_paragraph_time-(avg_paragraph_time*.1):
                    if verbose:
                        print("----THIS USER TOOK LESS THAN AVERAGE ----")
                        print("Data for RT for this task: ", rt_per_trial[paragraph_target])
                error_load_fixations = False
                try:
                    exp_key = key.replace('q_after_','')
                    fixations_on_target = exp.features.counts_per_target[paragraph_target][exp_key]
                    total_fixations = exp.features.counts_per_target[paragraph_target]['TotalFix']
                    if verbose:
                        print(f"Total fixations on target: {fixations_on_target}/{total_fixations}")
                except Exception as e:
                    utils.log_error(f"Fixations contain errors. Exception: {e}", utils.Error.ERROR, exp.worker_id, paragraph_target)
                    utils.log_error(f"Key that was used: {exp_key}", utils.Error.ERROR, exp.worker_id, paragraph_target)
                    utils.log_error(f"Dictionary where error was seen: {exp.features.counts_per_target[paragraph_target]}", utils.Error.INFO)
                    error_load_fixations = True

                if answer in dict_unaccepted_answer[key]:
                    if verbose:
                        print(f"WorkerID ({exp.worker_id}), Trial {key} is wrong!")
                    correct = "n"
                elif answer in dict_accepted_answer[key]:
                    if verbose:
                        print(f"WorkerID ({exp.worker_id}), Trial {key} is correct!")
                    correct = "y"
                else:
                    correct = input("Is the answer correct? (y/n): ")

                if "y" in correct:
                    exp.features_series[f"question_{i}_correct_flag"] = 1
                    count_correct += 1
                    if error_load_fixations or total_fixations == 0:
                        self.corret_answers[exp.worker_id][key] = (1,0)
                        exp.features_series[f"question_{i}_target_to_fixation_ratio"] = 0
                    else:
                        self.corret_answers[exp.worker_id][key] = (1,fixations_on_target/total_fixations)
                        exp.features_series[f"question_{i}_target_to_fixation_ratio"] = fixations_on_target/total_fixations
                    if answer not in dict_accepted_answer[key]: 
                        dict_accepted_answer[key].append(answer)
                    #print(dict_accepted_answer[key])
                else:
                    exp.features_series[f"question_{i}_correct_flag"] = 0
                    if error_load_fixations or total_fixations == 0:
                        self.corret_answers[exp.worker_id][key] = (0,0)
                        exp.features_series[f"question_{i}_target_to_fixation_ratio"] = 0
                    else:
                        self.corret_answers[exp.worker_id][key]  = (0,fixations_on_target/total_fixations)
                        exp.features_series[f"question_{i}_target_to_fixation_ratio"] = fixations_on_target/total_fixations
                    if answer not in dict_unaccepted_answer[key]: 
                        dict_unaccepted_answer[key].append(answer)
                    #print(dict_unaccepted_answer[key])
                if verbose:
                    print("")
            exp.features_series[f"total_correct_answers"] = count_correct

        json_accepted_answers = json.dumps(dict_accepted_answer)
        json_unaccepted_answers = json.dumps(dict_unaccepted_answer)

        with open(path_dict_accepted_answer, "w") as f:
            f.write(json_accepted_answers)
        with open(path_dict_unaccepted_answer, "w") as f:
            f.write(json_unaccepted_answers)

    def get_study_settings(self, filepath):
        experiment_dev = experiment(filepath=filepath, is_dev=True, is_psiturk=False)
        return experiment_dev.data
    
    def export_set_texts(self, filepath, export_dataframe=True):
        experiment_dev = experiment(filepath=filepath, is_dev=True, is_psiturk=False)
        dataframe_with_settings = experiment_dev.data[['stimulus','trial_name','correct_answer', 'question_text']].copy()
        dataframe_with_settings = dataframe_with_settings.dropna(subset="trial_name")
        # From: https://stackoverflow.com/questions/11229831/regular-expression-to-remove-html-tags-from-a-string
        html_pattern = re.compile(r'<[^>]*>|\n')
        new_stimulus = []
        for i,row in dataframe_with_settings.iterrows():
            string_to_update = row["stimulus"]
            if pd.isnull(string_to_update):
                new_stimulus.append(html_pattern.sub("", row["question_text"]))
            else:
                new_stimulus.append(html_pattern.sub("", string_to_update))
        dataframe_with_settings.stimulus = new_stimulus
        dataframe_with_settings["lang"] = filepath.split(os.sep)[-2][len("mturk_"):len("mturk_")+2]
        dataframe_with_settings["task_type"] = "None"
        dataframe_with_settings.loc[1:12, "task_type"] = "NR"
        dataframe_with_settings.loc[12:, "task_type"] = "IS"
        if export_dataframe:
            path_to_save = os.path.join("experiment_data", "set_texts", f"text_settings_{filepath.split(os.sep)[-2]}.csv")
            dataframe_with_settings[['stimulus','trial_name','task_type','correct_answer','lang']].to_csv(path_to_save)
        return dataframe_with_settings
    
    def create_word_target_file(self,experiment_path):
        df = pd.DataFrame(columns=['text', 'word', 'counter', 'x', 'y', 'width', 'height'])
        ii = 0
        for file in os.listdir(experiment_path):
            if file.endswith('.png'):
                words = []
                img = cv2.imread(os.path.join(__location__, experiment_path, file))
                d = pytesseract.image_to_data(img, output_type=Output.DICT)
                n_boxes = len(d['level'])
                for i in range(n_boxes):
                    if(d['text'][i] != ""):
                        (x, y, w, h) = (d['left'][i], d['top'][i], d['width'][i], d['height'][i])
                        df.loc[ii] = [file.split(".")[0], d['text'][i], Counter(words)[d['text'][i].lower().replace(".", "").replace(',','').replace(';','')], x, y, w, h]
                        words.append(d['text'][i].lower().replace(".", "").replace(',','').replace(';',''))
                        ii += 1
        path_to_save = os.path.join(__location__, experiment_path,"word_boundaries.csv")
        df.to_csv(path_to_save)
        utils.log_error(f"Bounding boxes areas saved to: {path_to_save}", utils.Error.INFO)

    def get_study_targets(self, filepath, export_dataframe=True, load_word_boundaries=True):
        """
            Gets the list of targets for the experiment. 
            This needs the original CSV that was used to generate the images.
            This will then add the targets to the self.target_dict variable.
        """
        new_target_dict = {}
        experiment_dev = experiment(filepath=filepath, is_dev=True, is_psiturk=False)
        self.target_dict = experiment_dev.webgazer_targets
        # Adjust to generate word boundaries around the words.
        LINE_TOLERANCE = 10 # px

        WEBGAZER_TARGET_ADJUSTMENT = -16
        HTML_BOUNDING_ADJUSTMENT = 3
        X_ADJUSTMENT = 32
        MECO_Y_ADJUSTMENT = 21
        XQUAD_Y_ADJUSTMENT = 41
        if load_word_boundaries:
            path_to_set_dir = os.sep.join(filepath.split(os.sep)[:-1])
            path_to_word_boundaries_csv = os.path.join(path_to_set_dir,"word_boundaries.csv")
            if not os.path.exists(path_to_word_boundaries_csv):
                utils.log_error(f"Creating Word Boundaries for words in dir: {path_to_set_dir}", utils.Error.INFO)
                self.create_word_target_file(path_to_set_dir)
            else:
                utils.log_error(f"Loaded file from: {path_to_word_boundaries_csv}", utils.Error.INFO)
            word_boundaries_df = pd.read_csv(path_to_word_boundaries_csv)
            word_boundaries_df["text"] = word_boundaries_df["text"].str.replace("_1280_720","")
            for k, target_list in self.target_dict.items():
                targets_to_add = word_boundaries_df[word_boundaries_df.text == k]
                dictionary_line_ys = {0:[]}
                dictionary_line_height = {0:[]}
                name_to_line = {}
                current_line = 0
                for row in targets_to_add.iterrows():
                    row = row[1]
                    t_y = row.y
                    t_height = row.height
                    t_name = row.word + "_" + str(row.counter)
                    # If there are no points in the line:
                    if len(dictionary_line_ys.get(current_line, [])) == 0:
                        # Add the first point
                        dictionary_line_ys[current_line] = dictionary_line_ys[current_line] + [t_y]
                        dictionary_line_height[current_line] = dictionary_line_height[current_line] + [t_height]
                        name_to_line[t_name] = current_line
                        continue
                    
                    if np.abs(np.array(list(dictionary_line_ys[current_line])).mean() - t_y) < LINE_TOLERANCE:
                        dictionary_line_ys[current_line] = dictionary_line_ys[current_line] + [t_y]
                        dictionary_line_height[current_line] = dictionary_line_height[current_line] + [t_height]
                        name_to_line[t_name] = current_line
                    else:
                        # We are in a new line
                        current_line += 1
                        dictionary_line_ys[current_line] = [t_y]
                        dictionary_line_height[current_line] = [t_height]
                        name_to_line[t_name] = current_line

                for k_ys, v in dictionary_line_ys.items():
                    if "meco" in k:
                        dictionary_line_ys[k_ys] = np.array(v).mean() - MECO_Y_ADJUSTMENT/2
                    else:
                        dictionary_line_ys[k_ys] = np.array(v).mean() - XQUAD_Y_ADJUSTMENT/2
                
                for k_heights, v in dictionary_line_height.items():
                    # It seems height is over estimated so I have made remove a pixel
                    if "meco" in k:
                        dictionary_line_height[k_heights] = np.array(v).mean() + MECO_Y_ADJUSTMENT
                    else:
                        dictionary_line_height[k_heights] = np.array(v).mean() + XQUAD_Y_ADJUSTMENT

                for target in target_list:
                    if "#" not in target.name:
                        if "meco" in k:
                            target.y -= MECO_Y_ADJUSTMENT/2 + WEBGAZER_TARGET_ADJUSTMENT/2
                            target.height += MECO_Y_ADJUSTMENT + (WEBGAZER_TARGET_ADJUSTMENT+HTML_BOUNDING_ADJUSTMENT)
                        else:
                            target.y -= XQUAD_Y_ADJUSTMENT/2 + WEBGAZER_TARGET_ADJUSTMENT/2
                            target.height += XQUAD_Y_ADJUSTMENT + (WEBGAZER_TARGET_ADJUSTMENT+HTML_BOUNDING_ADJUSTMENT)
                        target.x -= X_ADJUSTMENT/2
                        target.width += X_ADJUSTMENT + 3

                
                for i, row in enumerate(targets_to_add.iterrows()):
                    row = row[1]
                    # Filter non_word detection.
                    if row.word == "_":
                        continue
                    t_name = row.word + "_" + str(row.counter)
                    t_x = row.x - X_ADJUSTMENT/2
                    t_y = dictionary_line_ys[name_to_line[t_name]]
                    t_width = row.width + X_ADJUSTMENT
                    t_height = dictionary_line_height[name_to_line[t_name]]
                    new_target = WebgazeTarget(t_name, t_x, t_y, t_width, t_height, -1, -1, -1, -1, is_word=True)
                    target_list.append(new_target)
            
        # Correct the Before trials to be the same as the after trials (Questions)
        for k, t_list in self.target_dict.items():
            new_target_dict[k] = t_list
            if "_after_" in k:
                new_target_dict[k.replace("_after_","_before_")] = t_list
        self.target_dict = new_target_dict

        # To generate CSV files with targets
        if export_dataframe:
            column_names = ["text_name", "target_name", "x", "y", "width", "height", "top", "right", "bottom", "left", "is_word"]
            data_frame_target_data = []
            for key, values in self.target_dict.items():
                for value in values:
                    if key in value.name:
                        # The target was already containing the text name
                        new_series = pd.Series([key] + [value.name] + list(value.to_numpy()), index=column_names)
                    else:
                        # The target was a generic #webgazer_target
                        new_series = pd.Series([key] + [key+"_"+value.name] + list(value.to_numpy()), index=column_names)
                    data_frame_target_data.append(new_series)
            pd.DataFrame(data_frame_target_data).to_csv(os.path.join(__location__,"target_dataframes", f"target_dataframe_{filepath.split(os.sep)[-2]}.csv"))
        return self.target_dict
    
    def print_all_questionaire_data(self):
        for exp in self.experiment_list:
            print(f"Questionaire Data for: {exp.worker_id}")
            print(f"Age                  : {exp.features.worker_age}")
            print(f"Mothertongue         : {exp.features.worker_lang}")
            print(f"Language Fluency     : {exp.features.worker_fluency}")
            print(f"Screen size          : {exp.features.screen_size}")
            print("---------------------------------------")

    def update_exp_targets(self, experiment):
        """
            Updates the targets of one of the experiments. 
            
            Returns True if there is an error setting the targets at experiment, else False.
        """
        error_found = True
        for trial, target_list in self.target_dict.items():
            for target in target_list:
                result = experiment.update_webgaze_targets(trial, target)
                error_found = error_found and result
        return error_found

    def update_all_experiments_targets(self):
        """
            Update all the experiment targets. 

            This is to do in case we want to update a small detail and recalculate features.
        """
        utils.log_error("Updating all experiment targets & Recalculating Features...", utils.Error.INFO)
        #print("Updating all experiment targets & Recalculating Features...")
        experiment_loaded_correctly = np.ones(len(self.experiment_list), dtype=bool)
        for i, exp in enumerate(self.experiment_list):
            experiment_loaded_correctly[i] = self.update_exp_targets(exp)

        """
        See if any of the experiments failed and fix if there is another participant
        with the same screen. If so, update the targets with those users targets.
        """
        total_errors = np.logical_not(experiment_loaded_correctly).sum()
        if total_errors > 0:
            # Counter and List of indices that need to be looked at:
            workers_fixed_c = 0 
            workers_with_no_targets = [i for i, v in enumerate(experiment_loaded_correctly) if not v]
            utils.log_error("Attempting to correct fixations with another worker...", utils.Error.INFO)
            #print("INFO: Attempting to correct fixations with another worker...")
            for worker_error_i in workers_with_no_targets:
                # Retrieve the experiment
                worker_error_exp = self.experiment_list[worker_error_i]
                # Retrieve the screen size
                worker_error_screen_size = worker_error_exp.features.screen_size
                for w_i, exp in enumerate(self.experiment_list):
                    # If the worker is not in the error workers and has the same
                    # screen size, then we update the values with the worker.
                    if (w_i not in workers_with_no_targets and
                    exp.features.screen_size == worker_error_screen_size):
                        self.update_targets_with_worker(exp.worker_id, worker_error_exp.worker_id)
                        experiment_loaded_correctly[worker_error_i] = self.update_exp_targets(worker_error_exp)
                        workers_fixed_c += 1
                        # Ensure the value was updated.
                        assert worker_error_exp.features_series['target_error'] == False
                        assert experiment_loaded_correctly[worker_error_i], f"ERROR: Updating the user failed. Please check WorkerID: {worker_error_exp.worker_id}"
                        break
                if not experiment_loaded_correctly[worker_error_i]:
                    utils.log_error(f"No workers found with same screen size as {worker_error_exp.worker_id}, ({worker_error_screen_size}).", utils.Error.INFO)
                    #print(f"INFO: No workers found with same screen size as {worker_error_exp.worker_id}, ({worker_error_screen_size}).")
            if np.logical_not(experiment_loaded_correctly).any():
                workers_with_no_targets = [self.experiment_list[i].worker_id for i, v in enumerate(experiment_loaded_correctly) if not v]
                for i, v in enumerate(experiment_loaded_correctly):
                    if not v:
                        self.experiment_list[i].features_series['target_error'] = True
                utils.log_error(f"Remaining workers with no targets: {workers_with_no_targets}", utils.Error.INFO)
                #print(f"WARNING: {workers_fixed_c}/{total_errors} Workers with target errors after attempting to fix: ", workers_with_no_targets)
            utils.log_error(f"Number of Worker with no targets fixed: {workers_fixed_c}/{total_errors}.", utils.Error.INFO)
            #print(f"INFO: {workers_fixed_c}/{total_errors} Workers with target errors fixed!")

        # This step is crucial.
        for exp in self.experiment_list:
            exp.recalculate_features()
        utils.log_error("STEP DONE! 'Updating all experiment targets & Recalculating Features...'", utils.Error.INFO)
        #print("DONE! Updating all experiment targets & Recalculating Features.")
                        

    def plot_experiment_data(self, plot_type, filtered_data = False):
        valid_options = " ".join(["'x_axis'","'y_axis'","'scatter'"])
        assert plot_type in ["x_axis","y_axis","scatter"], f"Invalid plot type, valid options: {valid_options}"
        wegbazer_experiment_list = self.experiment_list[0].webgazer_data.keys()
        wegbazer_img = self.experiment_list[0].webgaze_img_path
        for trial in wegbazer_experiment_list:
            for i_p, person_data in enumerate(self.experiment_list):
                if filtered_data:
                    data_to_plot = person_data.webgazer_fixations_filtered[trial]
                else:
                    data_to_plot = person_data.webgazer_data[trial]
                    if len(data_to_plot) == 0:
                        print(data_to_plot)
                        break
                print(data_to_plot)
                if plot_type == "x_axis" and len(data_to_plot) > 0:
                    plt.plot(data_to_plot[:,2], data_to_plot[:,0], label=i_p)
                    plt.xlabel("Time (ms)")
                    plt.ylabel("X position")
                elif plot_type == "y_axis" and len(data_to_plot) > 0:
                    plt.plot(data_to_plot[:,2], data_to_plot[:,1], label=i_p)
                    plt.xlabel("Time (ms)")
                    plt.ylabel("Y position")
                elif plot_type == "scatter" and len(data_to_plot) > 0 :
                    plt.scatter(data_to_plot[:,0], data_to_plot[:,1], label=i_p)
                    plt.xlabel("X position")
                    plt.ylabel("Y position")
                    plt.gca().invert_yaxis()
                    if wegbazer_img[trial] is not None:
                        img = mpimg.imread(wegbazer_img[trial])
                        plt.imshow(img)
            plt.title(trial)
            plt.show()

    def set_img_directory(self, path_to_img):
        for exp in self.experiment_list:
            exp.set_img_directory(path_to_img)
    
    def get_feature_vector_list(self):
        feature_list = []
        for exp in self.experiment_list:
            feature_list.append(exp.features_series)
        return feature_list
    
    def export_webgazer_csv(self, exp_nr):
        """
            Export the webgazer data into a CSV.
        """
        for exp, data in self.experiment_list[exp_nr].webgazer_data.items():
            np.savetxt(exp+".csv", data, fmt='%i', delimiter=",")


parser = argparse.ArgumentParser(description="Study script to agregate the data from WebQAmGaze.", epilog="""
                    Example usage, loading the psiturk for set 'mturk_EN_v18': 'python study.py -study-name mturk_EN_v18 -mode p'
                    """)
parser.add_argument('-study-name', metavar='path', type=str, nargs=1,
                    help="""Name of the folder within the 'experiment_data' folder. This will be used as the 
                    default directory for loading the data. Folder should contain images and targets for experiment.""")
parser.add_argument('-mode', metavar="r|c|p|e", type=str, nargs=1,
                    help="""(r)ecreate-set|(c)ognition|(p)siturk|(e)xport.
                    ''Recreate-Set'': Used to get the experiment names to be used in the html.
                    ''Cognition'': loads a csv per participant rather than psiturk .csv.
                    ''Psiturk'': loads a csv with all the data exported from Psiturk. This mode filters the data in the .csv. 
                    ''Export'': loads the data using Psiturk in each folder and combines it in a single dataframe.
                    """)
parser.add_argument('--show-first-participant', metavar="0|1", type=bool, nargs=1,
                    help="""Plots the data for the first participant.
                    """)
parser.add_argument('--data-path', metavar='path', type=str, nargs=1,
                    help="Path to the data, optional, if not passed the study_name directory is used.")

test_data = None
all_data_df = None
if __name__ == '__main__':
    args = sys.argv[1:]
    set_name = None
    if len(args) == 0:
        parser.print_help()
    else:
        args = vars(parser.parse_args())
        study_name = args["study_name"][0]
        set_data = Study(study_name)
        plot_first_part = True if args['show_first_participant'] is not None else False
        mode = args['mode'][0]
        psiturk_default_data_path = os.path.join(__location__, "experiment_data",study_name, "trialdata.csv")
        csv_default_data_path = os.path.join(__location__, "experiment_data",study_name)

        if mode == "p":
            data_path = psiturk_default_data_path
            if args['data_path'] is not None:
                data_path = args['data_path'][0]
            set_data.load_data_from_folder(data_path, True, os.path.join("experiment_data",study_name), plot_first_part, 
                                           show_answers=True, export_target_dataframes=True, export_feature_dataframes=True,)
        elif mode == "c":
            data_path = csv_default_data_path
            if args['data_path'] is not None:
                data_path = args['data_path'][0]
            set_data.load_data_from_folder(data_path, False, os.path.join("experiment_data",study_name), plot_first_part, show_answers=True,
                                           export_target_dataframes=True, export_feature_dataframes=True,)
            
        elif mode == "r":
            test_recreate_set = [name for name in set_data[set_data.trial_name.notna()].trial_name]
            xquad_string = "let reconstruct_trial_xquad = ["
            for i in range(0, len(test_recreate_set), 2):
                if i == 0:
                    print(f"let reconstruct_trial_meco = [[{test_recreate_set[i]}, [{test_recreate_set[i+1]}]]];")
                else:
                    question = test_recreate_set[i+1].replace("q_after_","")
                    xquad_string += f"[{test_recreate_set[i]}, [{question}]],"
            xquad_string += "];"
            print(xquad_string)
        elif mode == "e":
            utils.log_error("Not yet updated. This functionality needs to be updated for the new data storing format.", utils.Error.WARNING)
            utils.log_error("Exporting-data ...", utils.Error.INFO)
            export_text_bool = False
            export_target_dataframes = False
            export = input("Export texts data for all sets? (y/[n]): ")
            if export == "y":
                export_text_bool = True
            
            export_t_df = input("Export target df for all sets? (y/[n]): ")
            if export_t_df == "y":
                export_target_dataframes = True

            all_features = []
            for study_name in os.listdir("experiment_data"):
                set_n = int(experiment_name.split("_")[2].replace("v",""))
                set_language = experiment_name.split("_")[1]

                if not os.path.exists(os.path.join("experiment_data",study_name,"trialdata.csv")):
                    utils.log_error(f"Language: {set_language} | Loading set: {set_n}, is missing 'trial_data.csv', check folder.", utils.Error.WARNING)
                    continue

                if not os.path.exists(os.path.join("experiment_data",study_name,"accepted_answers.json")):
                    # Set hasn't been corrected yet
                    utils.log_error(f"Set {study_name} has not been corrected yet, skipping...", utils.Error.INFO)
                    continue
                
                test_study = Study(experiment_name)

                # Check if it is a default set (no changes yet)
                path_to_data = os.path.join("../experiment_data", experiment_name)
                if os.path.exists(os.path.join(path_to_data, "trialdata.csv")):
                    if set_n == 1 and set_language == "EN":
                            # The experiment was split into two files (this appends the data)
                            test_study.load_data_from_folder(os.path.join("../experiment_data",experiment_name,"trialdata_2.csv"), True, os.path.join("../experiment_data", experiment_name,), 
                                                             eexport_target_dataframes=export_target_dataframes, export_feature_dataframes=True)
                    test_study.load_data_from_folder(os.path.join("../experiment_data", experiment_name,"trialdata.csv"), True, os.path.join("../experiment_data", experiment_name,), 
                                                     export_target_dataframes=export_target_dataframes, export_feature_dataframes=True)
                else:
                    # Handle cases where the data has been moved.
                    for directory_w_data in os.listdir(os.path.join(path_to_data)):
                        dir_path = os.path.join(path_to_data, directory_w_data)
                        if not os.path.isdir(dir_path):
                            continue
                        if os.path.exists(os.path.join(dir_path, "trialdata.csv")):
                            # Load the data from PsiTurk
                            test_study.load_data_from_folder(join(dir_path,"trialdata.csv"), True, join("../experiment_data", experiment_name,), 
                                                             export_target_dataframes=export_target_dataframes, export_feature_dataframes=True)
                        else:
                            test_study.load_data_from_folder(dir_path, False, join("../experiment_data", experiment_name,), 
                                                             export_target_dataframes=export_target_dataframes, export_feature_dataframes=True)

                if export_text_bool:
                    test_study.export_set_texts(os.path.join(__location__, "experiment_data",study_name,"webgazer-sample-data.csv"))

                features = set_data.get_feature_vector_list()
                all_features += features

                # Generate all the fixation CSVs
                for worker in set_data.experiment_list:
                    # Features can only be exported if there are no errors.
                    if (not worker.features_series['fixation_error'] 
                    and not worker.features_series['target_error']): 
                        worker_target_df = pd.DataFrame()
                        study_name = worker.features_series["set_name"]
                        for trial_name in worker.features_series['set_trials']:
                            duration_dataframe = worker.get_duration_fixation_on_word(trial_name)
                            worker_target_df = pd.concat((worker_target_df, duration_dataframe))
                        worker_target_df.to_csv(os.path.join("pre_processed_data","fixation_data_per_part",f"{worker.worker_id}_{study_name}_fix_dict.csv"), index=False)
                    
            filter_approved = False
            if len(args) > 1 and int(args[1]) == 1:
                filter_approved = True
            all_features_filtered = pd.DataFrame(all_features)
            all_features_export = all_features_filtered.copy()
            save_path = os.path.join("pre_processed_data")

            if filter_approved:
                all_features_filtered = all_features_filtered[all_features_filtered["approved_flag"] > 0]
                all_features_filtered = all_features_filtered[all_features_filtered["fixation_error"] == False]
                all_features_filtered = all_features_filtered[all_features_filtered["target_error"] == False]
                all_features_filtered = all_features_filtered[all_features_filtered["avg_roi_last_val"] > 0]
                all_features_filtered = all_features_filtered[all_features_filtered["webgazer_sample_rate"] > 10]
                all_features_filtered = all_features_filtered[all_features_filtered['screen_x'] >  1110]
                all_features_filtered = all_features_filtered[all_features_filtered['screen_y'] >  615]
                for row_i, row in all_features_filtered.iterrows():
                    row.to_json(os.path.join("pre_processed_data", f"{row.worker_id}_{row.set_name}.json"))
                utils.log_error(f"Filtered data saved to: {save_path}", utils.Error.INFO)
            else:
                for row_i, row in all_features_export.iterrows():
                    row.to_json(os.path.join("pre_processed_data", f"{row.worker_id}_{row.set_name}.json"))
                utils.log_error(f"All data saved to: {save_path}", utils.Error.INFO)

            utils.log_error(f"Shape of dataframe         : {all_features_export.shape}", utils.Error.INFO)
            utils.log_error(f"Shape of filtered dataframe: {all_features_filtered.shape}", utils.Error.INFO)

            print(args)
            print(parser)
        else:
            parser.print_help()

"""
Example use:
test_study = Study("pilot-test")
test_study.load_psiturk(os.path.join("experiment_data","mturk_pilot_v2","trialdata.csv"))
test_study.get_study_targets(os.path.join("experiment_data","mturk_pilot_v2","webgazer-sample-data.csv"))
test_study.set_img_directory(os.path.join("experiment_data","mturk_pilot_v2"))
test_study.update_all_experiments_targets()
test_study.update_all_experiments_targets()
test_study.correct_study_answers()
test_study.set_approve_reject_flag()
features = test_study.get_feature_vector_list()

"""