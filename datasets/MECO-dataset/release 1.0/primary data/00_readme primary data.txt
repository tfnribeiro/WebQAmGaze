This folder contains primary data from release 1.0 of MECO-L1. 

The four sub-folders contain data of four types:

1) "bibliometric database": contains the bibliometric database used to estimate the state of cross-language research on reading using eye-tracking. 
"all_raw.csv" contains all papers resulting from the bibliometric search conducted using Web of Sciences (full details reported in the MECO L1 paper). 
Columns A to BO include fields from the Web of Sciences repository. See 
https://images.webofknowledge.com/images/help/WOS/hs_wos_fieldtags.html
for varaible key. 
Columns BP to BW include fields coded by the research team:
- whether the paper should be inclueded or not in the bibliometric analysis (i.e. whether it includes primary eye tracking-data on reading).
- the investigated language(s).
- in case of more than one investigated language, whether the cross-language investigation is within or between subjects: Within-subjects: study with bilinguals/multilinguals reading in all investigated languages; Between-subjects: study with readers of different languages reading in their L1s. 
- Type of investigated written material. Most commonly: sentences or texts. Texts are defined as written materials with 2 sentences or more. 
- Additional comments (e.g. developmental study; L1 vs L2; neuro-imaging; etc.).

2) "Comprehension data": Accuracy data from comprehension questions presented to participants after each of the texts during the eye-tracking reading task. Note that files include data after removal of subjects who did not meet eye-tracking quality checks. Three files are provided:
- "joint_l1_acc.rda": number of correct responses for each participant (out of a total of 48 questions).
- "joint_l1_acc_breakdown.rda": number of correct responses for each participant in each text (out of 4). 
- "joint_l1_acc_full_breakdown.rda": correct (1) or incorrect (0) response for each participant in each question (i.e. trial-by-trial data). 
Note: Due to a human error, in the Norwegian sample there are 47 comprehension questions (rather than 48 as in the other sites). All measures of % accuracy are computed accordingly. 

3) "Eye-tracking data": Includes files with eye-movement data from the reading task. Note that files include data after removal of subjects and passages that did not meet eye-tracking quality checks.  
- "joint.readrate.rda": reading rate (words/minute) for each participant in each passage.
- "joint_data_trimmed.rda": eye-tracking measures for each word (i.e. each interest area). 
- "passage_data.csv": eye-tracking measures summed by passage.
- "sentence_data.csv" eye-tracking measures summed by sentence.
For more information about variables and file structure see popeye github page, 
https://rdrr.io/github/sascha2schroeder/popEye/

4) "Individual-differences data": Files with data from non-eye-tracking tasks. Note that files include data after removal of subjects who did not meet quality checks. 
- "data by language" folder: Includes data from each site in separate sub-folders (sub-folder name is the two-letter language code). Each sub-folder includes two files: (1) XX-ind-diff.xlsx: data from individual differences tests used this language. (2) XX-leap.xlsx: data from an abridged version of the Language Experience and Proficiency Questionnaire (LEAP-Q; Marian, Blumenfeld, & Kaushanskaya, 2007).
- "cft.summary.csv": summary of CFT scores (IQ test) for subjects from all sites.
- "ind-diff-task-description.docx": descriptions of individual differences tasks used in each site. 