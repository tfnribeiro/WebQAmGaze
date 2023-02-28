# Follows the structure:
# json[data, version]
# json[data] - list of articles (dict {paragraphs, title})
# json[data][n][paragraphs] - list of paragraphs (dict {context, qas})
# json[data][n][paragraphs][n][context] - str of paragraph context. 
# json[data][n][paragraphs][n][qas] - list of questions (Dict {answers, id, question})
# json[data][n][paragraphs][n][qas][n][answers][n] - Dict {'answer': 1|0, 'code': 'q1|2|3|4'}
import numpy as np
import regex as re
from pathlib import Path
import json
import os
from utils import *
from simalign import SentenceAligner
import torch

CUDA_AVAILABLE = torch.cuda.is_available()
TORCH_DEVICE = "cpu"
if CUDA_AVAILABLE:
    TORCH_DEVICE = "cuda"

PATH_TO_MECO_ANNOTATED = os.path.join("MECO_texts")

def load_meco_file(path):
    texts = np.loadtxt(path, delimiter="\t", dtype="str", encoding="utf-8")
    # Delete headers
    return texts[2:]

def meco_json_to_jspsych(meco_filepath):
    """
        Takes a JSON file and transforms into a jsPsych, I have been using the .DAT files instead.

        This is because the MECO dataset needs to be annoted from Word files. 
    """
    if meco_filepath != ".":
        path_to_data = Path(meco_filepath)
    
    json_dict = None
    with open(path_to_data) as file:
        json_dict = json.load(file)
    
    javascript_trials = []
    for art_i, article in enumerate(json_dict["data"]):
        title = article["title"]
        trial_name = title + "_" + str(art_i)
        js_string_for_trial = "var " + trial_name + " = {\n" + \
            "type: jsPsychHtmlKeyboardResponse,\nstimulus:`"
        targets = []
        for para_i, paragraph in enumerate(article["paragraphs"]):
            split_paragraph = paragraph["context"].split("\n")
            line_to_add = ""
            for tp_i, text_paragraph in enumerate(split_paragraph):
                line_to_add += f"\n<p class=\"webgaze-experiment\" id=\"{title}_{tp_i}\">{text_paragraph}</p>"
                targets.append(f"{title}_{tp_i}")
            js_string_for_trial += line_to_add
            for qa_i, qa in enumerate(paragraph["qas"]):
                pass
        js_string_for_trial += "`,\nchoices: 'ALL_KEYS',\n" + \
                                "extensions: [\n" + \
                                "{type: jsPsychExtensionWebgazer, params: {targets:["
        for i, target in enumerate(targets):
            js_string_for_trial += f"'#{target}'"
            if i + 1 < len(targets):
                js_string_for_trial += ","
        js_string_for_trial += "] } }\n ] };"
        js_string_for_trial += f"\ntimeline.push({trial_name});"
        javascript_trials.append(js_string_for_trial)
        print(js_string_for_trial)
    return js_string_for_trial

def meco_trial_jspsych(meco_filepath, output_file="jsPsychtrials-meco.js", push_to_timeline=False, verbose=False, question_seperate_array=False, tight_flag=False, char_limit = 1300):
    """
        Takes a MECO dat file and generates the jsPsych trials for the paragraphs.
    """
    meco_file = np.loadtxt(meco_filepath, dtype=str, encoding="utf-8", delimiter="\t")[2:]
    for i_line, line in enumerate(meco_file):
        for i_param, param in enumerate(line):
            meco_file[i_line][i_param] = param.replace("\"","")

    trial_list = []
    qas_list = []
    javascript_trials = []
    qas_trial = []
    qa_var_name_per_trial = []
    para_counter = 0
    used_paragraphs = 0
    for para_i, paragraph in enumerate(meco_file):
        if paragraph[10] == "0":
            continue
        paragraph_with_targets = paragraph[0]
        title = "meco_para_"+ paragraph[1]
        if len(paragraph_with_targets) >= char_limit:
            print(len(paragraph_with_targets))
            print(f"Paragraph {title} skipped due to char limit!")
            continue
        used_paragraphs += 1
        trial_name = title
        trial_list.append(trial_name)
        css_class = "webgaze-experiment"
        if tight_flag:
            css_class = "webgaze-experiment-compact"
        js_string_for_trial = "var " + trial_name + " = {\n" + \
            f"type: jsPsychHtmlKeyboardResponse,\nstimulus:`\n<p class=\"{css_class}\" id=\"paragraph\">"
        targets = []
        targets.append("paragraph")
        
        print(len(paragraph_with_targets))
        qa_to_paragraph = []
        qa_var_names = []
        for qa_i, qa_n in enumerate(range(2,9,2)):
            question_trial_name = trial_name + "_qa_" + str(qa_i)
            qa_var_names.append(question_trial_name)
            answer_text = None
            if paragraph[qa_n+1] == "1":
                answer_text = "True"
            else:
                answer_text = "False"
            js_string_for_qa_trial = "var " + question_trial_name + " = {\n" + \
                "type: jsPsychHtmlButtonResponse,\nstimulus: `<p class=\"webgaze-experiment\" id=\"question\">" + paragraph[qa_n] + " `,\n" + \
                "data: {\n correct_answer: \"" + answer_text + "\", trial_name: \""+ question_trial_name +"\"\n},\n" + \
                "choices: [\"True\", \"False\"]," + \
                "extensions: [\n" + \
                                "{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }\n ]," + \
                "\n};"
            if push_to_timeline:
                js_string_for_qa_trial += f"\ntimeline.push({question_trial_name});"
            qa_to_paragraph.append(js_string_for_qa_trial)
            targets.append(question_trial_name)
            target_start_replacement = f"<span id=\"{question_trial_name}\">"
            target_end_replacement = "</span>"
            # The qa are numbered 1 to 4
            target_start_label = "<q"+str(qa_i+1)+">"
            target_end_label = "</q"+str(qa_i+1)+">"
            paragraph_with_targets = paragraph_with_targets.replace(target_start_label, target_start_replacement)
            paragraph_with_targets = paragraph_with_targets.replace(target_end_label, target_end_replacement)
        qa_var_name_per_trial.append(qa_var_names)
        js_string_for_trial += paragraph_with_targets
        js_string_for_trial += "</p>`,\nchoices: 'ALL_KEYS',\n" + \
                                "extensions: [\n" + \
                                "{type: jsPsychExtensionWebgazer, params: {targets:["
        for i, target in enumerate(targets):
            js_string_for_trial += f"'#{target}'"
            if i + 1 < len(targets):
                js_string_for_trial += ","
        js_string_for_trial += "] } }\n ],"
        js_string_for_trial += "on_load: function(){ if(__dev__){" + \
                    "\nconst screenshotTarget = document.body;" +\
                    "\nhtml2canvas(screenshotTarget).then((canvas) => {" + \
                    "\nvar image = canvas.toDataURL(\"image/png\").replace(\"image/png\", \"image/octet-stream\");" +\
                    "\nvar a = document.createElement('a');" +\
                    "\na.href = image;" + \
                    f"a.download = '{trial_name}_1280_720.png';" + \
                    "\na.click();});}},"
        js_string_for_trial +=  "data: { trial_name: \""+ trial_name +"\"}" 
        js_string_for_trial +=  "\n};\n"
        if push_to_timeline:
            js_string_for_trial += f"\ntimeline.push({trial_name});"
        javascript_trials.append(js_string_for_trial)    
        qas_trial.append(qa_to_paragraph)
        if verbose:            
            print(js_string_for_trial)
            for question in qa_to_paragraph:
                print(question)
        qas_list.append(qa_var_names)
        para_counter += 1
    print("Total used paragraphs:", used_paragraphs, "/", len(meco_file))
    if question_seperate_array:
        with open(output_file, "w", encoding="utf-8") as file:
            for para_i, trial_p in enumerate(javascript_trials):
                file.write(trial_p)
                for qas in qas_trial[para_i]:
                    file.write(qas)
            trail_array = "var meco_trial_array = ["
            for var_name in trial_list:
                trail_array += var_name + ","
            trail_array = trail_array[:-1] + "];\n"
            file.write(trail_array)
            question_array = "var meco_question_array = ["
            for trail_var_name in qas_list:
                question_array += "[" + ",".join(trail_var_name) + "],"
            question_array = question_array[:-1] + "];\n"
            file.write(question_array)
    else:
        with open(output_file, "w", encoding="utf-8") as file:
            for para_i, trial_p in enumerate(javascript_trials):
                file.write(trial_p)
                for qas in qas_trial[para_i]:
                    file.write(qas)
            trail_array = "\n\nvar meco_trials_array = ["
            for qa_i, var_name in enumerate(trial_list):
                tuple_to_add = "[" + var_name + ","
                tuple_to_add += "[" + ",".join(qa_var_name_per_trial[qa_i]) + "]],"
                trail_array += tuple_to_add
            trail_array = trail_array[:-1] + "];\n"
            file.write(trail_array)
    return js_string_for_trial

def meco_align(meco_filepath_source, meco_filepath_target, filename):
    """
        Aligns the MECO dataset by using the SentenceAligner.

        Similar results to "align_meco_text"
    """
    # [2:] removes header
    source_meco = np.loadtxt(meco_filepath_source, delimiter="\t", dtype=str, encoding="UTF-8")[2:]
    target_meco = np.loadtxt(meco_filepath_target, delimiter="\t", dtype=str, encoding="UTF-8")[2:]
    text_aligner = SentenceAligner(device=TORCH_DEVICE)
    # array format: ['$paragraph', 'number', '$q1', 'a1', '$q2', 'a2', '$q3', 'a3','$q4', 'a4', '$parallel']
    context_tags = set(["<q1>","<q2>","<q3>","<q4>","</q1>","</q2>","</q3>","</q4>"])
    for para_i, paragraph in enumerate(source_meco):
        if target_meco[para_i][10] == "1":
            source_meco_no_tags =  paragraph[0] + ""
            for tag in context_tags:
                source_meco_no_tags = source_meco_no_tags.replace(tag,"")
            context_source = paragraph[0].replace("\"","")
            context_target = target_meco[para_i][0].replace("\"","")
            source_word_list_tag = sentence_to_word_list(context_source)
            source_word_list_no_tag = sentence_to_word_list(source_meco_no_tags)
            target_word_list = sentence_to_word_list(context_target)
            print(f"Making alignments for text: {para_i}")
            alignments = text_aligner.get_word_aligns(source_word_list_no_tag, target_word_list)["mwmf"]
            print("Alignment Completed!")
            present_tags = set()
            for i_word, word in enumerate(source_word_list_tag):
                start_tag = word[:4]
                end_tag = word.replace(".","").replace(",","")[-5:]
                if start_tag in context_tags:
                    for (source_i, target_i) in alignments:
                        if source_i == i_word and start_tag not in present_tags:
                            target_word_list[target_i] = start_tag + target_word_list[target_i]
                            present_tags.add(start_tag)
                if end_tag in context_tags:
                    for (source_i, target_i) in alignments:
                        if source_i == i_word and end_tag not in present_tags:
                            target_word_list[target_i] = target_word_list[target_i] + end_tag
                            present_tags.add(end_tag)
            target_meco[para_i][0] = "\"" + " ".join(target_word_list) + "\"" 
    file_name = filename + "-meco-aligned.dat"
    with open(file_name, "w", encoding="UTF-8") as output_file:
        for line in target_meco:
            output_file.write("\t".join(line) + "\n")
        print(f"json file saved to: {file_name}")
    return target_meco

def align_meco_text(en_file, foreign_language_file_list):
    """
        Aligns the MECO dataset by using the SentenceAligner.

        Newer version, creates a dictionary with the passage start and
        end for english, and then attempts to find the word of starting and ending 
        in the target text. Hard to say if it performs better than meco_align
    """
    myaligner = SentenceAligner(device=TORCH_DEVICE)

    for file in foreign_language_file_list:
        foreign_meco_data = load_meco_file(file)
        english_meco_data = load_meco_file(en_file)
        regex_match_passage_start = re.compile(r'(<q[0-9]>)')
        regex_match_passage_end = re.compile(r'.*(<\/q[0-9]>)')
        for text_i in range(len(foreign_meco_data)):
            if foreign_meco_data[text_i,-1] == "0":
                continue
            target_sentence = foreign_meco_data[text_i,0].replace("\"","")
            en_sentence = english_meco_data[text_i,0].replace("\"","")
            src_sentence = sentence_to_word_list(en_sentence)
            tgt_sentence = sentence_to_word_list(target_sentence)
            # Will have formate q1 = (w_position_start, w_position_end)
            dict_relavant_passage = {}
            for i_w, word in enumerate(src_sentence):
                start = regex_match_passage_start.match(word)
                end = regex_match_passage_end.match(word)
                if start is not None:
                    match = start.group(1)
                    src_sentence[i_w] = word.replace(match,"")
                    match = match.replace("<","").replace(">","")
                    dict_relavant_passage[match] = dict_relavant_passage.get(match, [-1,-1])
                    dict_relavant_passage[match][0] = i_w
                if end is not None:
                    match = end.group(1)
                    src_sentence[i_w] = word.replace(match,"")
                    match = match.replace("</","").replace(">","")
                    dict_relavant_passage[match] = dict_relavant_passage.get(match, [-1,-1])
                    dict_relavant_passage[match][1] = i_w
            
            print(f"Aligning text {text_i} file: {file}...")
            alignments = myaligner.get_word_aligns(src_sentence, tgt_sentence)
            print(f"Aligningment complete!")

            for k, v in dict_relavant_passage.items():
                for v_i in range(len(v)):
                    word_position = v[v_i]
                    for (src_i, tgt_i) in alignments["mwmf"]:
                        if src_i == word_position:
                            if v_i == 0:
                                tgt_sentence[tgt_i] = f"<{k}>{tgt_sentence[tgt_i]}"
                                break
                            else:
                                tgt_sentence[tgt_i] = f"{tgt_sentence[tgt_i]}</{k}>"
                                break 
            updated_text = " ".join(tgt_sentence)
            foreign_meco_data[text_i,0] = f"\"{updated_text}\""
        new_name = file.split(os.sep)
        new_name[-1] = "aligned_" + new_name[-1]
        try: 
            np.savetxt(os.path.join(*new_name), foreign_meco_data, delimiter='\t', fmt="%s", encoding="utf-8")
        except Exception as e: 
            print(e)

print("English: ")
meco_trial_jspsych(os.path.join(PATH_TO_MECO_ANNOTATED, "en_questions_annotated.dat"), output_file="en_meco_jspsych.js", tight_flag=True)
print("Spanish: ")
meco_trial_jspsych(os.path.join(PATH_TO_MECO_ANNOTATED, "es_questions_annotated.dat"), output_file="es_meco_jspsych.js", tight_flag=True)
print("German: ")
meco_trial_jspsych(os.path.join(PATH_TO_MECO_ANNOTATED, "de_questions_annotated.dat"), output_file="de_meco_jspsych.js", tight_flag=True)
print("Turkish: ")
meco_trial_jspsych(os.path.join(PATH_TO_MECO_ANNOTATED,"tr_corrected_alignment.dat"), output_file="tr_meco_jspsych.js", tight_flag=True)
print("Russian: ")
meco_trial_jspsych(os.path.join(PATH_TO_MECO_ANNOTATED,"ru_corrected_alignment.dat"), output_file="ru_meco_jspsych.js", tight_flag=True)
print("Greek: ")
meco_trial_jspsych(os.path.join(PATH_TO_MECO_ANNOTATED,"gr_corrected_alignment.dat"), output_file="gr_meco_jspsych.js", tight_flag=True)