import pandas as pd
import numpy as np
import yaml
import click
from os import listdir, makedirs
from os.path import join, isfile, isdir


def average_features(sent_dict, subject_count):
    # average feature values for all subjects

    averaged_dict= {}
    for sent, features in sent_dict.items():
        avg_rel_fix = np.nanmean(np.array(features[1]), axis=0)
        if len(features[0]) > 1:
            averaged_dict[sent] = [features[0], avg_rel_fix]
    print(len(averaged_dict), " total sentences from ", subject_count, " subjects.")

    return averaged_dict


def read_meco_file(filename, language, data_path, out_dir):

    #reads meco files and stores relative fixation files
    print("Reading file for MECO: ", filename)

    dict_lang = {'en': 'en', 'sp': 'es', 'ge': 'de', 'tr': 'tr', 'gr': 'gr', 'ru':'ru'}

    # Make sure that this is available
    if not isfile(filename):
        raise FileNotFoundError(
            f"you need to store joint_data_trimmed.rda as joint_data_trimmed.csv and store it in {data_path}")

    data = pd.read_csv(filename, na_filter=False, encoding='utf-8')
    data["trialid"] = data["trialid"].apply(lambda x: int(float(x)) if x!='NA' else x)
    data["ianum"] = data["ianum"].apply(lambda x: int(float(x)) if x != 'NA' else x)
    print(data.columns)

    stopchars = (".", ",", "?", "!", ";", ")", ":", "'")
    beginchars = ("(", '``', '`')

    languages = data.groupby('lang')
    for lang, lang_data in languages:
        print(lang)
        subjects = pd.unique(lang_data['uniform_id'].values)
        print(len(subjects), " subjects.")

    for lang, lang_data in languages:
        if lang == language:
            texts = pd.unique(lang_data['trialid'].values)
            print(texts)
            subjects = pd.unique(lang_data['uniform_id'].values)
            subjects_code = [subj.replace(lang, dict_lang[lang]) for subj in subjects]
            print(len(subjects), " subjects.")

    for subj, subj_code in zip(subjects, subjects_code):
        if isfile(join(out_dir, f"{subj_code}-relfix-feats.csv")):
            continue

        else:
            flat_word_index = 1
            print(subj)
            subj_data_orig = data.loc[data['uniform_id'] == subj]

            #there is something wrong with the English data in mecoL2, this is a manual fix
            if 'L2' in data_path and language == 'en':
                subj_data_orig = subj_data_orig.drop_duplicates(
                    subset=['firstrun.refix', 'firstrun.reg.in', 'firstrun.reg.out', 'firstrun.dur', 'ia', "sentnum",
                            "ianum", "trialid"])

            print(len(subj_data_orig))
            df_subj = pd.DataFrame(columns=['text_id', 'sentence_id', 'word_id', 'word',
                                            'TRT', 'relFix', 'word_order', 'nfix'])
            # split into texts
            text_dfs = subj_data_orig.groupby('trialid')
            for trialid, text in text_dfs:

                if trialid==3 and 10 in text.sentnum.unique() and 'en' in subj:
                    text.loc[text.sentnum>5, 'sentnum'] = text[text.sentnum>5].sentnum-1

                for w_id, row in text.sort_values("ianum").iterrows():

                    trt = float(row['dur']) if row['dur'] != "NA" else np.nan
                    #tokenize correctly for downstream processing
                    word = row['ia']
                    if word == "...":
                        df_subj.loc[flat_word_index] = [trialid, row['sentnum'], int(row['ianum'])+1, ".", np.nan, 0, word_order, row['nfix']]
                        flat_word_index += 1
                        word_order += 1
                        df_subj.loc[flat_word_index] = [trialid, row['sentnum'], int(row['ianum'])+1, ".", np.nan, 0, word_order, 0]
                        flat_word_index += 1
                        word_order += 1
                        df_subj.loc[flat_word_index] = [trialid, row['sentnum'], int(row['ianum'])+1, ".", np.nan, 0, word_order, 0]
                        flat_word_index += 1
                        word_order += 1
                    elif len(word) > 3 and word.endswith("..."):
                        new_word = word[:-3]
                        punct = word[-1]
                        df_subj.loc[flat_word_index] = [trialid, row['sentnum'], int(row['ianum']), new_word.lower(), float(trt), 0, word_order, row['nfix']]
                        flat_word_index += 1
                        word_order += 1
                        df_subj.loc[flat_word_index] = [trialid, row['sentnum'], int(row['ianum'])+1, punct, np.nan, 0, word_order, 0]
                        flat_word_index += 1
                        word_order += 1
                        df_subj.loc[flat_word_index] = [trialid, row['sentnum'], int(row['ianum'])+1, punct, np.nan, 0, word_order, 0]
                        flat_word_index += 1
                        word_order += 1
                        df_subj.loc[flat_word_index] = [trialid, row['sentnum'], int(row['ianum'])+1, punct, np.nan, 0, word_order, 0]
                        flat_word_index += 1
                        word_order += 1
                    elif word.endswith(beginchars):
                        new_word = word[1:]
                        #print(new_word)
                        punct = word[0]
                        df_subj.loc[flat_word_index] = [trialid, row['sentnum'], int(row['ianum'])+1, punct, np.nan,0, word_order, 0]
                        flat_word_index += 1
                        word_order += 1
                        df_subj.loc[flat_word_index] = [trialid, row['sentnum'], int(row['ianum']), new_word.lower(), float(trt), 0, word_order, row['nfix']]
                        flat_word_index += 1
                        word_order += 1
                    elif '-' in word and language=='ge':
                        try:
                            # row['nfix'] = int(row['nfix']) if row['nfix']!='NA'
                            nfix = int(float(row['nfix']))/2 if row['nfix']!='NA' else np.nan
                        except TypeError:
                            import ipdb;ipdb.set_trace()
                        df_subj.loc[flat_word_index] = [trialid, row['sentnum'], int(row['ianum']), word.split('-')[0].lower(), float(trt)/2, 0, word_order, nfix]
                        flat_word_index += 1
                        word_order += 1
                        df_subj.loc[flat_word_index] = [trialid, row['sentnum'], int(row['ianum'])+1, word.split('-')[1].lower(), float(trt)/2, 0, word_order, nfix]
                        flat_word_index += 1
                        word_order += 1
                    else:
                        df_subj.loc[flat_word_index] = [trialid, row['sentnum'], int(row['ianum']), row['ia'].lower(), trt, 0, word_order, row['nfix']]
                        flat_word_index += 1
                        word_order += 1

            sent_data = df_subj.groupby(['text_id', 'sentence_id'])
            print(len(sent_data))
            new_sent_id = 1
            for i, sentence in sent_data:
                #min-max scale feature  values
                df_subj.loc[(df_subj['text_id'] == i[0]) & (df_subj['sentence_id'] == i[1]), 'NEW_sentence_id'] = new_sent_id
                relfix = [float(s)/np.nansum(sentence['TRT'].values) for s in sentence['TRT'].values]
                df_subj.loc[df_subj['NEW_sentence_id'] == new_sent_id, 'relFix'] = relfix
                new_sent_id +=1
            df_subj.to_csv(join(out_dir, f"{subj_code}-relfix-feats.csv"), encoding="utf-8")

    print("ALL DONE.")


def extract_features(data_dir, language):
    # stores sentences and average relative fixations
    # join results from all subjects

    # MECO texts used in WebQAmGaze
    if language == 'en':
        all_texts = [i for i in range(1, 13)] #[3, 7, 11, 12]
    elif language == 'es':
        all_texts = [12]
    elif language == 'de':
        all_texts = [1, 12]
    elif language == 'gr':
        all_texts = [11]
    elif language == 'ru':
        all_texts = [12]
    elif language == 'tr':
        all_texts = [7, 11]
    for text_id in all_texts:
        if not isfile(join(data_dir, f"meco_{language}_{text_id}_relfix-feats_avg.csv")):
            df_all = pd.DataFrame()
            nsubjects = 0
            for file in sorted(listdir(data_dir)):
                if file.startswith(language) and file.endswith('feats.csv'):
                    print("Reading files for subj ", file)
                    subj_data = pd.read_csv(join(data_dir, file), delimiter=',', usecols=['text_id', 'sentence_id', 'word_id', 'relFix', 'word', 'TRT', 'nfix'], low_memory=False)
                    subj_data = subj_data.query("text_id == @text_id")
                    if len(subj_data)==0:
                        continue
                    subj_data['nfix'].fillna(0, inplace=True)
                    nsubjects+=1
                    if len(subj_data)>186 and text_id==3 and language=='en':
                        if len(subj_data.loc[subj_data['word'].isnull()].index.values)>1:
                            import ipdb; ipdb.set_trace()
                        subj_data.loc[subj_data.loc[subj_data['word'].isnull()].index.values[0]:, 'word_id']-=1
                        subj_data = subj_data.dropna(subset='word')
                    print(len(subj_data))
                    column = file.split('-')[0]
                    if len(df_all) > 0:
                        subj_data = subj_data[['text_id', 'sentence_id', 'word_id', 'relFix', 'word', 'TRT', 'nfix']].rename(
                            columns={'relFix': column, 'TRT': 'TRT' + column, 'nfix': 'nfix' + column})
                        df_all = df_all.merge(subj_data, on=['text_id', 'sentence_id', 'word_id', 'word'], how='outer')
                        df_all['relFix'] = df_all[['relFix', column]].sum(axis=1)
                        df_all['TRT'] = df_all[['TRT', 'TRT'+column]].sum(axis=1)
                        df_all['nfix'] = df_all[['nfix', 'nfix' + column]].sum(axis=1)
                        df_all = df_all.drop(columns=[column, 'TRT'+column, 'nfix' + column])
                    else:
                        df_all = subj_data[['text_id', 'sentence_id', 'word_id', 'relFix', 'word', 'TRT', 'nfix']]

            df_all = df_all.dropna(subset=['word'])
            df_out = pd.DataFrame(columns=['relFix', 'text_id', 'sentence_id', 'word_id', 'TRT', 'nfix'])
            df_out['relFix'] = df_all['relFix']/nsubjects
            df_out['TRT'] = df_all['TRT'] / nsubjects
            df_out['nfix'] = df_all['nfix'] / nsubjects
            df_out['word'] = df_all['word']
            df_out['word_id'] = df_all['word_id']
            df_out['text_id'] = df_all['text_id']
            df_out['sentence_id'] = df_all['sentence_id']
            df_out['word_length'] = df_all['word'].apply(lambda x: len(x))
            df_out.to_csv(join(data_dir, f"meco_{language}_{text_id}_relfix-feats_avg.csv"), encoding="utf-8")


@click.command()
@click.option('--data', default='mecoL1')
def main(data):

    with open("config.yaml", "r") as f:
        config = yaml.load(f, Loader=yaml.FullLoader)

    et_dir = config[data]['et_dir']
    data_path = config[data]["et_orig"]
    languages = config[data]['languages']

    if not isdir(et_dir):
        makedirs(et_dir)

    filename = join(data_path, "joint_data_trimmed.csv")

    dict_lang = {'en': 'en', 'sp': 'es', 'ge': 'de', 'tr': 'tr', 'gr': 'gr', 'ru':'ru'}
    for language in languages:
        read_meco_file(filename, language, data_path, et_dir)
        print("language:", language)
        extract_features(et_dir, dict_lang[language])


if __name__ == "__main__":
    main()
