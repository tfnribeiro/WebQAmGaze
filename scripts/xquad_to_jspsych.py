from pathlib import Path
import json 
import regex as re
from parsing_xquad import get_dataset_stats
import os

def prep_string_for_regex(string_to_replace):
    special_characters = [".",",","(",")",]
    print("Before: ", string_to_replace)
    for char in special_characters:
        string_to_replace = string_to_replace.replace(".",f"\\{char}")
    print(string_to_replace)
    return string_to_replace
def xquad_trial_jspsych(xquad_filepath, language, limit_char=1000, output_file="jsPsychtrials.js", push_to_timeline=True, verbose=False, question_seperate_array=False, min_questions=1):
    """
    Generates the jsPsych trials from an XQuAD json file.
    """
    if xquad_filepath != ".":
        path_to_data = Path(xquad_filepath)
    
    json_dict = None
    with open(path_to_data) as file:
        json_dict = json.load(file)
    
    para_stat, qa_stat, qa_n_stat = get_dataset_stats(language, xquad_filepath)
    filter = (para_stat <= limit_char) & (qa_n_stat >= min_questions)
    trial_list = []
    qas_list = []
    javascript_trials = []
    qas_trial = []
    qa_var_name_per_trial = []
    para_counter = 0
    used_paragraphs = 0
    dict_WebQAMGaze_to_XQuaD = {}
    for art_i, article in enumerate(json_dict["data"]):
        title = "a_"+''.join(e for e in article["title"] if e.isalnum())
        for para_i, paragraph in enumerate(article["paragraphs"]):
            if filter[para_counter]:
                used_paragraphs += 1
                trial_name = title + "_" + str(para_i)
                trial_list.append(trial_name)
                js_string_for_trial = "var " + trial_name + " = {\n" + \
                    "type: jsPsychHtmlKeyboardResponse,\nstimulus:`\n<p class=\"webgaze-experiment\" id=\"paragraph\">"
                targets = []
                paragraph_with_targets = paragraph["context"]
                qa_to_paragraph = []
                qa_var_names = []
                deslocation_of_target = dict()
                times_seen = dict()
                #print(f"### {title} ###")
                for qa_i, qa in enumerate(paragraph["qas"]):
                    question_trial_name = trial_name + "_qa_" + str(qa_i)
                    qa_var_names.append(question_trial_name)
                    answer_start = int(paragraph["qas"][qa_i]["answers"][0]["answer_start"])
                    qa_id = paragraph["qas"][qa_i]["id"]
                    updated_start = answer_start
                    answer_text = paragraph["qas"][qa_i]["answers"][0]["text"]
                    # Debugging
                    # print(deslocation_of_target)
                    # print("Paragraph, No Filter: ", paragraph_with_targets)
                    # print()
                    # print("Filtered Paragraph (no adjustment): ", paragraph_with_targets[updated_start:])
                    # print()
                    # print("Target: ", answer_text, answer_start)
                    counter_updates_full = 0
                    partial_update = 0
                    for (k,_), (length, span) in deslocation_of_target.items():
                        if answer_start >= k and answer_text not in span:
                            updated_start += length
                            counter_updates_full += 1
                        elif answer_start >= k and answer_text in span:
                            updated_start += (length-len("</span>"))
                            partial_update += 1
                    # Debugging Steps:
                    # print("Filtered Paragraph (adjustment done): ", paragraph_with_targets[updated_start:])
                    # print("Updates, Full: ", counter_updates_full, " | Partial Updates: ", partial_update)
                    # print()
                    js_string_for_qa_trial = "var " + question_trial_name + " = {\n" + \
                        "type: jsPsychSurveyText,\nquestions: [\n{prompt:`<p class=\"webgaze-experiment\" id=\"question\">" + \
                        paragraph["qas"][qa_i]["question"] + "`, placeholder: 'Your answer...', required: true }\n]," + \
                        "extensions: [\n" + \
                                "{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }\n ]," + \
                        "data: { question_text: `" + paragraph["qas"][qa_i]["question"] + "`, correct_answer: \""+ answer_text.replace("\"","") + "\", trial_name: \""+ question_trial_name +"\"} " + \
                        "\n};"
                    if push_to_timeline:
                        js_string_for_qa_trial += f"\ntimeline.push({question_trial_name});"
                    qa_to_paragraph.append(js_string_for_qa_trial)
                    target_replacement = f"<span id=\"{question_trial_name}\">{answer_text}</span>"
                    targets.append(question_trial_name)
                    compile_regex_passage = re.compile(f"([ ]?|>)({answer_text})([ ]?|<)")
                
                    before_change = len(paragraph_with_targets) # To see if the string is updated.
                    # Use the answer start to find the correct place to replace the text
                    correct_replacement = compile_regex_passage.sub(f"\\1{target_replacement}\\3", paragraph_with_targets[updated_start:], count=1)
                    paragraph_with_targets = paragraph_with_targets[:updated_start] + correct_replacement
                    
                    
                    # In case, it fails (Regex might have problems with certain chars)
                    # Use string replace. This should be rare, and doesn't seem to cause the issues we saw
                    # of replacing small ocurrences.
                    if before_change == len(paragraph_with_targets):
                        non_update = paragraph_with_targets[:updated_start] 
                        paragraph_with_targets = non_update + paragraph_with_targets[updated_start:].replace(answer_text,target_replacement)
                    
                    if before_change == len(paragraph_with_targets):
                        print("## Failed to update: ", question_trial_name)
                        print("Target Replace text: ", target_replacement)
                        print("Arae to replace text: ", paragraph_with_targets[updated_start:])
                        input()
                        
                    # Keep track of the added text, so the spans match correctly.
                    times_seen[answer_start] = times_seen.get(answer_start,0) + 1
                    deslocation_of_target[(answer_start,times_seen[answer_start])] = (len(target_replacement.replace(answer_text,"")), answer_text)
                    dict_WebQAMGaze_to_XQuaD[question_trial_name] = qa_id

                qa_var_name_per_trial.append(qa_var_names)
                js_string_for_trial += paragraph_with_targets
                js_string_for_trial += "</p>`,\nchoices: 'ALL_KEYS',\n" + \
                                        "extensions: [\n" + \
                                        "{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph',"
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
    print("Total used paragraphs:", used_paragraphs, "/", len(para_stat))

    with open(os.path.join("map_to_xquad_ids", f"{language}_WebQAMGaze_to_Xquad.json"), "w", encoding="utf-8") as file:
        file.write(json.dumps(dict_WebQAMGaze_to_XQuaD))

    if question_seperate_array:
        with open(output_file, "w", encoding="utf-8") as file:
            for para_i, trial_p in enumerate(javascript_trials):
                file.write(trial_p)
                for qas in qas_trial[para_i]:
                    file.write(qas)
            trail_array = "var trial_array = ["
            for var_name in trial_list:
                trail_array += var_name + ","
            trail_array = trail_array[:-1] + "];\n"
            file.write(trail_array)
            question_array = "var question_array = ["
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
            trail_array = "var xquad_trials_array = ["
            for qa_i, var_name in enumerate(trial_list):
                tuple_to_add = "[" + var_name + ","
                tuple_to_add += "[" + ",".join(qa_var_name_per_trial[qa_i]) + "]],"
                trail_array += tuple_to_add
            trail_array = trail_array[:-1] + "];\n"
            file.write(trail_array)
    return js_string_for_trial

print("English XQuaD filtering: ")
xquad_trial_jspsych(".\\datasets\\xquad-master\\xquad.en.json","en", limit_char=650, push_to_timeline=False, output_file="EN-XQuAD-Trials.js")
print("German XQuaD filtering: ")
xquad_trial_jspsych(".\\datasets\\xquad-master\\xquad.de.json","de", limit_char=650, push_to_timeline=False, output_file="DE-XQuAD-Trials.js")
print("Spanish XQuaD filtering: ")
xquad_trial_jspsych(".\\datasets\\xquad-master\\xquad.es.json","es", limit_char=650, push_to_timeline=False, output_file="ES-XQuAD-Trials.js")
print("Turkish XQuaD filtering: ")
xquad_trial_jspsych(".\\datasets\\xquad-master\\xquad.tr.json","tr", limit_char=650, push_to_timeline=False, output_file="TR-XQuAD-Trials.js")
print("Russian XQuaD filtering: ")
xquad_trial_jspsych(".\\datasets\\xquad-master\\xquad.ru.json","ru", limit_char=650, push_to_timeline=False, output_file="RU-XQuAD-Trials.js")
print("Greek XQuaD filtering: ")
xquad_trial_jspsych(".\\datasets\\xquad-master\\xquad.el.json","el", limit_char=650, push_to_timeline=False, output_file="GR-XQuAD-Trials.js")