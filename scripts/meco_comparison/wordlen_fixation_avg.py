from os import listdir
from os.path import join
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

MECO_FEATURES_LOCATION = "meco-features"
WEBQAM_FEATURES_LOCATION = "webcam_meco"

def filter_NR(df, experiment_set):
    experiment_set = experiment_set.split("\\")[1]
    set_info = pd.read_csv(f'../experiment_data/set_texts/text_settings_mturk_{experiment_set[:6]}.csv')
    NR_task = set_info.query('task_type=="NR"')['trial_name'].tolist()
    return df.query("text_id in @NR_task")


files_meco = [join(MECO_FEATURES_LOCATION, f"meco_en_{i}_relfix-feats_avg.csv") for i in range(1, 13)]
            #[join(MECO_FEATURES_LOCATION, "meco_en_3_relfix-feats_avg.csv"),
            #  join(MECO_FEATURES_LOCATION, "meco_en_7_relfix-feats_avg.csv"),
            #  join(MECO_FEATURES_LOCATION, "meco_en_11_relfix-feats_avg.csv"),
            #  join(MECO_FEATURES_LOCATION, "meco_en_12_relfix-feats_avg.csv")]

files_qamgaze_meco = [join(WEBQAM_FEATURES_LOCATION, "EN_text3-relfix-feats_avg.csv"),
                      join(WEBQAM_FEATURES_LOCATION, "EN_text7-relfix-feats_avg.csv"),
                      join(WEBQAM_FEATURES_LOCATION, "EN_text11-relfix-feats_avg.csv"),
                      join(WEBQAM_FEATURES_LOCATION, "EN_text12-relfix-feats_avg.csv")]

data_dir = WEBQAM_FEATURES_LOCATION
files_qamgaze = [join(data_dir, file) for file in listdir(data_dir) if file.startswith("EN_") and file.endswith("relfix-feats.csv")]
print("Collected following WebQAm files: ", files_qamgaze)
files = {}
files['qamgaze'] = files_qamgaze_meco + files_qamgaze
files['meco'] = files_meco
for data in ['qamgaze', 'meco']:
    for file in files[data]:
        #print(file.split("/")[-1].split("-")[0].split('_')[1])
        df = pd.read_csv(file)
        if 'text' not in file and data=='qamgaze':
            df = df[~df['text_id'].str.contains("meco")]
            df = filter_NR(df, file.split("/")[-1].split("-")[0])
        #df = df.dropna(subset=['word_id'])
        #sns.scatterplot(data=df, x='word_length', y='TRT', label=file.split("/")[-1].split("-")[0].split('_')[1])
#plt.savefig("wordlen_fixation_TRT", bbox_inches='tight', dpi=300)
#plt.close()

wordlen_meco = {}
wordlen_qamgaze = {}
wordlen_dicts = [wordlen_qamgaze, wordlen_meco]
for ii, data in enumerate(['qamgaze', 'meco']):
    for file in files[data]:
        #print(file.split("/")[-1].split("-")[0].split('_')[1])
        df = pd.read_csv(file)
        if 'text' not in file and data=='qamgaze':
            df = df[~df['text_id'].str.contains("meco")]
            df = filter_NR(df, file.split("/")[-1].split("-")[0])
        df = df.dropna(subset=['word_id'])
        print(df["text_id"].unique())
        for wordlen, subdf in df.groupby('word_length'):
            try:
                wordlen_dicts[ii][wordlen] = wordlen_dicts[ii][wordlen] + subdf.TRT.tolist()
            except KeyError:
                wordlen_dicts[ii][wordlen] = subdf.TRT.tolist()

mypalette = sns.diverging_palette(150, 275, s=80, l=55, n=2)
fig, ax = plt.subplots(nrows=1, ncols=1, figsize=(5, 3))

for ii, data in enumerate(['WebQAmGaze', 'MECO']):
    dict_wordlen_mean = {}
    dict_wordlen_std = {}
    for wordlen in wordlen_dicts[ii].keys():
        if wordlen>16 or wordlen == 0:
            continue
        plot_data = np.array(wordlen_dicts[ii][wordlen])
        dict_wordlen_mean[wordlen] = np.nanmean(plot_data)
        dict_wordlen_std[wordlen] = np.nanstd(plot_data)
    df_mean = pd.DataFrame.from_dict(dict_wordlen_mean, orient='index', columns=['mean']).sort_index()
    df_std = pd.DataFrame.from_dict(dict_wordlen_std, orient='index', columns=['std']).sort_index()
    sns.scatterplot(data=df_mean, legend=None, label='_nolegend_', color=mypalette[ii], ax=ax)
    ax.errorbar(df_mean.index, df_mean['mean'].tolist(), yerr=df_std['std'].tolist(), fmt='o', color=mypalette[ii]) #fmt=None to plot bars only
    plt.yticks(np.arange(0, 1251, step=250)) 
    plt.ylim([0, 1251])

ax.set_ylim(0, None)
plt.xlabel('word length')
plt.ylabel('averaged TRT [ms]')
plt.legend(['WebQAmGaze', 'MECO'])
plt.savefig("wordlen_fixation_avg", bbox_inches='tight', dpi=300)
plt.close()

