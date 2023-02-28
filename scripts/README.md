# Scripts Folder

### Folders:

- **experiment_data**: Images and Data collected which sets
- **js_trials**: javascript trials for XQuaD and MECO
- **map_to_xquad_ids**:  Dictionaries mapping the question_ids of WebQAmGaze to XQuAD ids
- **MECO_texts**: annotated passages for MECO texts
- **pre_processed_data**: data folder 
- **target_dataframes**: targets for each trial for each sets. 

### Scripts:

- **all_resolution.pkl**: Pickle file with the resolutions listed in: https://www.screenresolution.org/
- **Loading Eye-Tracking Data + Word Boundaries.ipynb**: Examples on how to use this dataset.
- **combined_text_features.csv**: text features combined into a single .CSV (read "Loading Eye-Tracking Data + Word Boundaries.ipynb" for more information)
- **text_token_stats.csv**: text token stats in a single .CSV (read "Loading Eye-Tracking Data + Word Boundaries.ipynb" for more information)
- **DataAnalysis.ipynb**: Data analysis code
- **meco_to_jspsych.py**: Loads the MECO annotated data and creates JSPsych trials to generate sets (JS code).
- **xquad_to_jspsych.py**: Loads the XQuAD data and creates JSPsych trials to generate sets (JS code).
- **experiment.py**: script that handles the experiments, handles the eye-tracking fixation merging and target counts.
- **study.py**: script that loads multiple experiments to export the data.
- **utils.py**: helper scripts