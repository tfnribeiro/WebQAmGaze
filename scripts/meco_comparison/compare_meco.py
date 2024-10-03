import pandas as pd
from os import listdir
from os.path import join
from scipy.stats import spearmanr
import numpy as np
from visualization import visualize_sentence, visualize_sentence_subplot
import yaml

def compare_to_meco(language, meco_webcam_dir):
    meco_webcam_sets = [file for file in listdir(meco_webcam_dir) if file.endswith('_avg.csv') and file.startswith(f'{language}_text')]
    df_stats = pd.DataFrame(columns=['meco_TRT_mean', 'meco_nfix_mean', 'web_TRT_mean', 'web_nfix_mean', 'corr', 'corr_p'])
    for file in sorted(meco_webcam_sets):
        print(file)
        df = pd.read_csv(join(meco_webcam_dir, file))
        df = df.dropna(subset=['word_id'])
        df = df.drop(columns='Unnamed: 0')
        assert(df.text_id.nunique() == 1)
        text_id = int(df.iloc[0].text_id.split('_')[2])
        df_meco = pd.read_csv(join(meco_dir, f"meco_{language.lower()}_{text_id}_relfix-feats_avg.csv"))
        if 'text' in file:
            df_stats.loc[text_id] = [np.around(df_meco['TRT'].mean(), decimals=2),
                                     np.around(df_meco['nfix'].mean(), decimals=2),
                                     np.around(df['TRT'].mean(), decimals=2),
                                     np.around(df['countFix'].mean(), decimals=2),
                                     0,
                                     0]
        df_meco_id = df_meco[['relFix', 'text_id', 'sentence_id', 'word_id', 'word']]
        web = [word for word in df.word_id.values]
        for i, row in df_meco_id.iterrows():
            try:
                if '-' in row.word or '—' in row.word:
                    df_meco_id.loc[i] = [row.relFix + df_meco_id.loc[i+1, 'relFix'], row['text_id'], row['sentence_id'],
                                         row['word_id'], row['word']+df_meco_id.loc[i+1, 'word']]
                    df_meco_id = df_meco_id.drop(index=i+1)
                #if 'uluslararası' in row.word:
                #    df_meco_id = df_meco_id.drop(index=i)
            except TypeError:
                import ipdb;ipdb.set_trace()
        
        if language == "TR" and df.text_id[0] == "meco_para_11":
            # Fix Galisan
            index_to_fix = df.loc[df.word_id == 'galisan'].index[0]
            row = df.loc[index_to_fix]
            df.loc[index_to_fix + 0.5] = [np.nan, np.nan, np.nan, 'uluslararası', 'uluslararası', row['text_id'], row['sentence_id'], len('uluslararası')]
            # Fix 'Kirmizi—Listesi"ni'
            index_to_fix = df.loc[df.word_id == 'Kirmizi—Listesi"ni'].index[0]
            row = df.loc[index_to_fix] 
            df.loc[index_to_fix] = [row.relFix, row.TRT, row.countFix, 'Kirmizi—', 'Kirmizi—', row['text_id'], row['sentence_id'], len('Kirmizi')]
            df.loc[index_to_fix + 0.5] = [np.nan, np.nan, np.nan, 'Listesi"ni', 'Listesi"ni', row['text_id'], row['sentence_id'], len('Listesi"ni')]
            df = df.sort_index().reset_index(drop=True)
        if language == "TR" and df.text_id[0] == "meco_para_7":
            index_to_fix = df.loc[df.word_id_orig == 'oldugu_sdylendiginden_0'].index[0]
            row = df.loc[index_to_fix] 
            df.loc[index_to_fix] = [row.relFix/2, row.TRT/2, row.countFix/2, 'oldugu', 'oldugu', row['text_id'], row['sentence_id'], len('oldugu')]
            df.loc[index_to_fix+0.5] = [row.relFix/2, row.TRT/2, row.countFix/2, 'sdylendiginden', 'sdylendiginden', row['text_id'], row['sentence_id'], len('sdylendiginden')]
            index_to_fix = df.loc[df.word_id_orig == 'gerektirir-_0'].index[0]
            row = df.loc[index_to_fix]
            row_seperated = df.loc[index_to_fix+1]
            df.loc[index_to_fix] = [row.relFix + row_seperated.relFix, 
                                    row.TRT + row_seperated.relFix, 
                                    row.countFix + row_seperated.countFix, 
                                    'gerektirir-bu', 'gerektirir-bu', row['text_id'], row['sentence_id'], len('gerektirir-bu')]
            df = df.drop([index_to_fix+1])
            df = df.sort_index().reset_index(drop=True)

        for i, row in df.iterrows():
            try:
                if 'officialidentification' in row.word_id:
                    df.loc[i] = [row.relFix/2, row.TRT/2, row.countFix/2, 'official', 'official', row['text_id'], row['sentence_id'], len('official')]
                    df.loc[i+0.5] = [row.relFix/2, row.TRT/2, row.countFix/2, 'identification', 'identification', row['text_id'], row['sentence_id'], len('identification')]
                    df = df.sort_index().reset_index(drop=True)
                elif 'trucks,and' in row.word_id:
                    df.loc[i] = [row.relFix, row.TRT, row.countFix, 'trucks,', 'trucks,', row['text_id'], row['sentence_id'], len('trucks')]
                    df.loc[i + 0.5] = [np.nan, np.nan, np.nan, 'and', 'and', row['text_id'],
                                       row['sentence_id'], len('and')]
                    df = df.sort_index().reset_index(drop=True)
                elif 'Saat-und' in row.word_id:
                    df.loc[i] = [row.relFix, row.TRT, row.countFix, 'Saat-', 'Saat-', row['text_id'], row['sentence_id'], len('Saat')]
                    df.loc[i + 0.5] = [np.nan, np.nan, np.nan, 'und', 'und', row['text_id'], row['sentence_id'], len('und')]
                    df = df.sort_index().reset_index(drop=True)
                elif row.word_id == '—' or row.word_id == '=' or '|' in row.word_id:
                    df = df.drop([i])
            except TypeError:
                import ipdb;ipdb.set_trace()
        try:
            print(spearmanr(df_meco_id.relFix.values, df.relFix.values, nan_policy='omit'))
        except ValueError:
            for (xx, xrow), (yy, yrow) in zip(df_meco_id.iterrows(), df.iterrows()):
                print(xrow['word'],xrow['word_id'], yrow['word_id'], yrow['word_id_orig'])
            import ipdb;ipdb.set_trace()
        rho, p = spearmanr(df_meco_id.relFix.values, df.relFix.values, nan_policy='omit')
        df_stats.loc[text_id,"corr"] = rho
        df_stats.loc[text_id,"corr_p"] = p
        # rho_all.append(rho)
        print('file:', file.split('-')[0], 'text_id:', text_id, 'correlation:', np.around(rho, decimals=2), 'p:', np.around(p, decimals=4))

        if text_id == '12':
            visualize_sentence_subplot([df.query('sentence_id==1')['word_id_orig'].tolist(),
                                        df.query('sentence_id==2')['word_id_orig'].tolist()],
                                       [df.query('sentence_id==1')['relFix'].tolist(),
                                        df.query('sentence_id==2')['relFix'].tolist()],
                                       [df_meco.query('sentence_id==1')['relFix'].tolist(),
                                        df_meco.query('sentence_id==2')['relFix'].tolist()],
                                       f'sentence_comparison_12_{language}_{text_id}')

    print(df_stats.sort_index().round(2))

    for (id, sen_web), (_, sen_meco) in zip(df.groupby('sentence_id'), df_meco_id.groupby('sentence_id')):
        try:
            tokens_web = sen_web.word_id_orig.to_list()
            importance_web = sen_web.relFix.to_list()
            importance_meco = sen_meco.relFix.to_list()
            visualize_sentence(tokens_web, importance_web, importance_meco, f'sentence_comparison_{id}')
        except:
            import ipdb;
            ipdb.set_trace()

if __name__ == '__main__':

    with open("config.yaml", "r") as f:
        config = yaml.load(f, Loader=yaml.FullLoader)

    languages = config['mecoL1']['languages_web']
    meco_dir = config['mecoL1']['et_dir']
    meco_webcam_dir = config['mecoL1']['meco_webcam_dir']
    print(meco_webcam_dir)
    rho_all = []

    for language in languages:
        print(language)
        print()
        language=language.upper()
        compare_to_meco(language, meco_webcam_dir)
