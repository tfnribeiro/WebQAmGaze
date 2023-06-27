from os.path import join, isfile, isdir, exists
from os import listdir, mkdir

import matplotlib.pyplot as plt
import seaborn as sns
import sys
sys.path.append('../')

import study
import numpy as np
import pandas as pd
import yaml
import pickle
from scipy.stats import spearmanr, entropy


def word_per_minute(TRT, nwords):
    return (nwords/TRT)*60


def collect_fixations(experiments, MECO=False, FILTER_QUALITY=False, threshold=None, WORKERS=None):
    quality = {}
    #fixations from the QAmGaze dataset
    for experiment_name in experiments:
        lookup_table = pd.read_csv(f"../experiment_data/set_texts/text_settings_{experiment_name}.csv")
        quality[experiment_name] = []
        test_study = study.Study(experiment_name)
        set_n = int(experiment_name.split("_")[2].replace("v",""))
        set_language = experiment_name.split("_")[1]
        # Check if it is a default set (no changes yet)
        path_to_data = join("../experiment_data", experiment_name)
        if exists(join(path_to_data, "trialdata.csv")):
            if set_n == 1 and set_language == "EN":
                    # The experiment was split into two files (this appends the data)
                    test_study.load_data_from_folder(join("../experiment_data",experiment_name,"trialdata_2.csv"), True, join("../experiment_data", experiment_name,), export_target_dataframes=False)
            test_study.load_data_from_folder(join("../experiment_data", experiment_name,"trialdata.csv"), True, join("../experiment_data", experiment_name,), export_target_dataframes=False)
        else:
            # Handle cases where the data has been moved.
            for directory_w_data in listdir(join(path_to_data)):
                dir_path = join(path_to_data, directory_w_data)
                if not isdir(dir_path):
                    continue
                if exists(join(dir_path, "trialdata.csv")):
                    # Load the data from PsiTurk
                    test_study.load_data_from_folder(join(dir_path,"trialdata.csv"), True, join("../experiment_data", experiment_name,), export_target_dataframes=False)
                else:
                    test_study.load_data_from_folder(dir_path, False, join("../experiment_data", experiment_name,), export_target_dataframes=False)


        all_workers = [
            worker for worker in test_study.experiment_list
            if not worker.features_series['fixation_error']
               and not worker.features_series['target_error']
               and worker.features_series['webgazer_sample_rate'] > 10
               and worker.features_series['approved_flag'] > 0
               and worker.features_series['screen_x'] > 1110
               and worker.features_series['screen_y'] > 615]

        if WORKERS is not None:
            # filenames with "link" are from volunteers, without from Mturk
            if WORKERS == "mturk_only":
                all_workers = [worker for worker in all_workers if "link" not in worker.worker_id and worker.participant_type != "volunteer" and worker.participant_type != "lab"]
            elif WORKERS == "volunteer_only":
                all_workers = [worker for worker in all_workers if "link" in worker.worker_id or worker.participant_type == "volunteer"]
            else:
                print("Check WORKERS variable!")

        if FILTER_QUALITY and threshold is not None:
            # import pdb;pdb.set_trace()
            all_workers = [
                worker for worker in all_workers
                if worker.features_series['avg_roi_last_val'] > threshold]
            # import pdb;
            # pdb.set_trace()


        for ii, selected_worker in enumerate(all_workers):
            print(experiment_name, ii, selected_worker.features_series['worker_id'])
            df_out = pd.DataFrame()
            quality[experiment_name].append(selected_worker.features_series['avg_roi_last_val'])
            # if not isfile(join(out_dir, f"{'_'.join(experiment_name.split('_')[1:])}_{ii}-relfix-feats.csv")):
            if True:
                all_trials = [selected_worker.features_series['set_trials'][0]] if MECO else selected_worker.features_series['set_trials']
                # for key in selected_worker.features_series.keys():
                #     print(key)
                for itrial, trial in enumerate(all_trials):
                    if MECO:
                        if 'meco' not in trial:
                            import pdb;pdb.set_trace()
                        # assert 'meco' in trial
                    try:
                        df_worker = selected_worker.get_duration_fixation_on_word(trial)
                    except IndexError:
                        import pdb;pdb.set_trace()
                    df_worker = df_worker.rename(columns={'word_id': 'word_id_orig'})
                    df_worker['countFix'] = df_worker['FixCount'].astype(int)
                    df_worker['word_id'] = df_worker['word_id_orig'].apply(lambda x: x.split('_')[0])
                    df_worker['sentence_id'] = 1
                    df_worker['word_length'] = df_worker['word_id'].apply(lambda x: len(x))
                    df_worker['TRT'] = df_worker['TRT'].astype(float)
                    df_worker['correct_answer'] = None
                    question = True if f"question_{itrial}_correct_flag" in selected_worker.features_series else False
                    df_worker['correct_answer'] = selected_worker.features_series[
                                                      f"question_{itrial}_correct_flag"] == 1 if question else None
                    df_worker['target_to_fixation_ratio'] = selected_worker.features_series[
                        f'question_{itrial}_target_to_fixation_ratio']
                    df_worker['task_type'] = lookup_table.query("trial_name==@trial").iloc[0].task_type

                    for sen_num, (idx0, idx1) in enumerate(zip(df_worker.query("word_id.str.endswith('.')").index[:-1],
                                                               df_worker.query("word_id.str.endswith('.')").index[1:])):
                        df_worker.loc[idx0+1:idx1, 'sentence_id'] = sen_num + 2

                    if MECO:
                        for sen_num, sentence in df_worker.groupby('sentence_id'):
                                df_worker.loc[df_worker.sentence_id == sen_num, 'relFix'] = [
                                    float(s) / np.nansum(sentence['TRT'].values) for s in sentence['TRT'].values]
                    else:
                        df_worker['relFix'] = [
                            float(s) / np.nansum(df_worker['TRT'].values) for s in df_worker['TRT'].values]

                    df_out = pd.concat([df_worker, df_out])

                    #  uncomment to plot for first trials
                    # if itrial==1:
                    #     fig, axs = plt.subplots(2, 1, figsize=[18, 8])
                    #     append = [0 for _ in range(9 - len(df_worker['TRT']) % 9)]
                    #     tok_append = ['PAD' for _ in range(len(append))]
                    #     reshape = (9, -1)
                    #     trt = np.array(df_worker['TRT'].tolist() + append)
                    #     relfix = np.array(df_worker['relFix'].tolist() + append)
                    #     trt[np.isnan(trt)] = 0
                    #     relfix[np.isnan(relfix)] = 0
                    #     sns.heatmap(np.array(trt[:, None]).reshape(reshape),
                    #                 annot=np.array(df_worker['word_id'].tolist() + tok_append).reshape(reshape),
                    #                 fmt='', ax=axs[0])
                    #
                    #     sns.heatmap(np.array(relfix[:, None]).reshape(reshape),
                    #                 annot=np.array(df_worker['word_id'].tolist() + tok_append).reshape(reshape),
                    #                 fmt='', ax=axs[1])
                    #
                    #     plt.savefig(
                    #         f"{df_worker.iloc[0]['text_id']}_{'_'.join(experiment_name.split('_')[1:])}_{ii}",
                    #         dpi=300)
                    #     plt.close()

                df_out.to_csv(join(out_dir, f"{'_'.join(experiment_name.split('_')[1:])}_{ii}-relfix-feats.csv"),
                              encoding="utf-8")
    pickle.dump(quality, open(f'data_quality_{experiment_name.split("_")[1]}.p', 'wb'))


def average_features_id(language, experiments, WORKERS=None):
    #average across experiment sets based on text_id
    if language == 'en':
        all_texts = [3, 7, 11, 12]
        set_to_text = {3: ['01', '02', '08', '16', '19'],
                       7: ['04', '05'],
                       11: ['03', '06', '09', '12', '14', '17', '18', '20'],
                       12: ['07', '10', '11', '13', '15']}
    elif language == 'es':
        all_texts = [12]
        set_to_text = {12: ['01', '02', '03', '04', '05', '06', '07', '08', '09']}
    elif language == 'de':
        if WORKERS == "volunteer_only":
                all_texts = [1]
                set_to_text = {1: ['05']}
        else:
            all_texts = [1, 12]
            set_to_text = {1: ['03', '05'],
                           12: ['01', '02', '04']}
    elif language == 'ru':
        all_texts = [12]
        set_to_text = {12: ['01']}
    elif language == 'tr':
        if WORKERS == "mturk_only":
            all_texts = [11]
            set_to_text = {11: ['01']}
        else:
            all_texts = [7, 11]
            set_to_text = {7: ['02', '03', '04'], 11: ['01']}
    elif language == 'gr':
        all_texts = [11]
        set_to_text = {11: ['01']}

    for text in all_texts:
        set_id = set_to_text[text]
        print(text, set_id)
        df = pd.DataFrame()
        column_names_rel = []
        column_names_trt = []
        column_names_count = []
        # import ipdb;ipdb.set_trace()
        experiments_subset = [experiment for experiment in experiments if any(id in experiment for id in set_id)]
        print(experiments_subset)
        for experiment_name in sorted(experiments_subset):
            workers = [file for file in listdir(out_dir) if file.startswith('_'.join(experiment_name.split('_')[1:]))
                       and not file.endswith('avg.csv') and not file.endswith('avg_correct.csv')
                       and not file.endswith('0.25.csv') and not file.endswith('0.1.csv')]
            print(text, experiment_name, len(workers), 'workers')
            for selected_worker in workers:
                print(selected_worker)
                df_worker = pd.read_csv(join(out_dir, selected_worker))
                selected_worker_id = selected_worker.split("_")
                column_rel = f'relFix_{selected_worker_id[1]}_{selected_worker_id[2].split("-")[0]}'
                column_trt = f'TRT_{selected_worker_id[1]}_{selected_worker_id[2].split("-")[0]}'
                column_count = f'count_{selected_worker_id[1]}_{selected_worker_id[2].split("-")[0]}'
                column_names_rel.append(column_rel)
                column_names_trt.append(column_trt)
                column_names_count.append(column_count)
                if len(df) > 0:
                    try:
                        #print(df_worker)
                        df = df.merge(df_worker[['word_id_orig', 'relFix', 'countFix', 'TRT']].rename(
                            columns={'relFix': column_rel, 'TRT': column_trt, 'countFix': column_count}),
                            on='word_id_orig', how='inner')
                    except KeyError:
                        import pdb;pdb.set_trace()
                else:
                    df = df_worker[['word_id_orig', 'relFix', 'word_id', 'countFix', 'TRT']].rename(
                        columns={'relFix': column_rel, 'TRT': column_trt, 'countFix': column_count})
        df_out = pd.DataFrame(columns=['relFix', 'TRT', 'countFix', 'word_id', 'word_id_orig', 'text_id', 'sentence_id'])
        try:
            df_out['relFix'] = df[column_names_rel].mean(axis=1)
        except KeyError:
            import pdb;
            pdb.set_trace()
        df_out['TRT'] = df[column_names_trt].mean(axis=1)
        df_out['countFix'] = df[column_names_count].mean(axis=1)
        df_out['word_id'] = df['word_id']
        df_out['word_id_orig'] = df['word_id_orig']
        df_out['text_id'] = df_worker['text_id']
        df_out['sentence_id'] = df_worker['sentence_id']
        df_out['word_length'] = df_worker['word_length']
        print(df_worker.loc[0, 'text_id'])
        print(df_worker.loc[0, 'text_id'].split('_')[2])
        print(f"{experiment_name.split('_')[1]}_text{df_worker.loc[0, 'text_id'].split('_')[2]}-relfix-feats_avg.csv")
        df_out.to_csv(join(out_dir, f"{experiment_name.split('_')[1]}_text{df_worker.loc[0, 'text_id'].split('_')[2]}-relfix-feats_avg.csv"), encoding="utf-8")
        print("file saved")
        print("---")


if __name__ == '__main__':

    with open("config.yaml", "r") as f:
        config = yaml.load(f, Loader=yaml.FullLoader)

    data='mecoL1'
    languages = config[data]['languages_web']
    out_dir = config[data]['meco_webcam_dir']

    for lang in languages:
        print()
        print(lang)
        print()

        experiments = sorted([folder for folder in listdir('../experiment_data') if folder.startswith(f'mturk_{lang.upper()}')])
        print(experiments)
        print()

        MECO = True
        WORKERS = None # "mturk_only", "volunteer_only" or None (= "all")

        FILTER_QUALITY = False
        threshold = None
        if FILTER_QUALITY and threshold is not None:
            out_dir = out_dir + '_' + str(threshold)
        if WORKERS is not None:
            out_dir = out_dir + '_' + WORKERS
        if not isdir(out_dir):
            mkdir(out_dir)

        collect_fixations(experiments, MECO=MECO, FILTER_QUALITY=FILTER_QUALITY, threshold=threshold, WORKERS=WORKERS)

        #this function averages across MECO ids (relevant for WebQAmGaze dataset paper)
        average_features_id(lang, experiments, WORKERS=WORKERS)
