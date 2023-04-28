# WebQAmGaze


Crowdsourced multilingual low-cost eye-tracking dataset while reading dataset using Webgazer. 

Find more about the project here: https://cst.ku.dk/english/projects/low-cost-eye-tracking-corpus-for-explainable-natural-language-processing/

## Depedencies:

Please follow the instructions to install *tesseract*: https://github.com/tesseract-ocr/tesseract, this is required to run pytesseract. This is responsible for doing the OCR and create word boundaries. 

A "requirement.txt" is provided.

## Structure:

- **root/generate_set**: contains all the HTML files used to generate the experiments. 
- **root/datasets**: contains the MECO and XQuAD repositories.
- **root/scripts**: contains all the main code used in the experiment
- **root/scripts/experiment_data**: contains all the data collected.
- **root/scripts/pre_processed_data**: contains a pd.Series .csv for each of the participants which includes all pre-processing steps.
- **root/scripts/pre_processed_data/fixation_data_per_part**: contains a pd.Series (.csv) with all the TRTs/FixCount per word for every trial for each participant. The file also contains the spans each word is contained in.

### Loading the data:

If you want to use the data in this dataset, please refer to the notebook: **root/python_script/experiment_data/Loading Eye-Tracking Data + Word Boundaries.ipynb**. It contains a working example on how to access different data from the the dataset. All the pre-processed data is provided in the folder **pre_processed_data**. 

### Overview of the Data

Due to low response rates on Mturk for certain languages, we opened collection to volunteers, which are reflected here.

Total: **573** participants

Approved: **396**

Not-Approved: **177**, had less than 50% of answers correct.


|Language|Vol/MTurker|   Counts  |
|:-------|---------|------------:|
| German  |  MTurk |          50 |
| German  |  Vol.  |           3 |
| English |  MTurk |         183 |
| Spanish |  MTurk |          99 |
| Spanish |  Vol.  |           8 |
| Greek   |  Vol.  |           1 |
| Russian |  Vol.  |           4 |
| Turkish |  MTurk |          15 |
| Turkish |  Vol.  |         210 |

#### Text Stats:

These were obtained using *spaCy* (https://spacy.io/) pipelines with the exception of Turkish, where *TrTokenizer* (https://github.com/apdullahyayik/TrTokenizer) was used.

| Language|Original Dataset| Unique Texts | Char Count   |   Token Count |   Token AVG Length |   AVG Sentence Count |AVG Token per Sentence|                       
|:-------|:----------------|-------------:|-------------:|--------------:|-------------------:|-----------------:|---------------------------:|   
|German  | MECO            |            2 |      1185.00    |        185.00    |               5.52 |             9.00    |                        20.72 |
|German  | XQuAD           |           45 |       508.87 |         82.04 |               5.37 |             3.22 |                        29.10  |
|English | MECO            |            4 |      1191.25 |        203.50  |               4.98 |             8.25 |                        24.70  |
|English | XQuAD           |           97 |       528.28 |         97.15 |               4.60  |             3.43 |                        32.60  |
|Spanish | MECO            |            1 |      1092.00    |        195.00    |               4.70  |             8.00    |                        24.38 |
|Spanish | XQuAD           |           64 |       541.58 |         98.66 |               4.60  |             3.19 |                        34.47 |
|Greek   | MECO            |            1 |      1253.00    |        206.00    |               5.21 |             8.00    |                        25.75 |
|Greek   | XQuAD           |            9 |       595.44 |         99.33 |               5.13 |             3.22 |                        33.75 |
|Russian | MECO            |            1 |      1228.00    |        180.00    |               5.96 |             8.00    |                        22.50  |
|Russian | XQuAD           |            9 |       534.11 |         85.89 |               5.47 |             3.44 |                        27.14 |
|Turkish | MECO            |            2 |      1206.00    |        155.00    |               6.84 |             8.00    |                        19.38 |
|Turkish | XQuAD           |           36 |       545.36 |         77.19 |               6.15 |             3.86 |                        21.69 |

### Datasets used in this project:

- **XQuAD**: https://github.com/deepmind/xquad
- **MECO**: https://meco-read.com/ 

### Libraries used in this project:
- **jsPsych**: https://github.com/jspsych/jsPsych
- **psiTurk**: https://github.com/NYUCCL/psiTurk

### Generating an experiment:

Each HTML in **root/generate_set** 'pilot_webgazer_experiment_dev_[LANG].html', contains all the XQuAD filtered data and when run will create an experiment of 10 questions, 1 MECO, 9 XQUAD texts based on a seed. When opened in the browser, the browser development tools are used to set the page to be 1280x720 (this is done to ensure consistency). Then, the experiment can be skipped through and images are automatically downloaded. At the end choose .CSV. All these files, should then be copied to a folder like the ones in **root/scripts/experiment_data**, and can then be used to set-up the experiment.

To generate the experiment, run the script **root/scripts/expriment.py [FOLDER_NAME]** and the script will generate a .js file with all the trials linking to the images in this folder. This script expect the images to be of 1280x720 and the names to match those of the trials in the .CSV.

Then one can use the latest .HTML file as a template, making note to update the trials in the experiment and the timeline and the preload list. Remember to also change the **set_name** variable to match that of the [FOLDER_NAME], this ensure the data can then be loaded using **root/scripts/study.py [FOLDER_NAME]**. 

When loading the collected data with **root/scripts/study.py [FOLDER_NAME]**, the user is prompted if they want to generate the word boundaries for this set. This is then used to calculate the target dictionaries, and should be done once. Afterwards, the data will be loaded and any errors will be shown in the console. Check the list for known errors for possible explanations. The user is then prompted to correct the set data, by being shown the response from participants and the Dataset's official response. As answers are corrected, these are stored and re-used in case participants use the same answer. 

### Known Errors:

### License:

CC-By Attribution 4.0 International

### Paper:

```
@misc{ribeiro2023webqamgaze,
      title={WebQAmGaze: A Multilingual Webcam Eye-Tracking-While-Reading Dataset}, 
      author={Tiago Ribeiro and Stephanie Brandl and Anders Søgaard and Nora Hollenstein},
      year={2023},
      eprint={2303.17876},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}
```
