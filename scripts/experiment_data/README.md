## experiment_data

Folder Structure should be:

- Folder: Set_Name
    - Files: Images, _Accepted/Unaccepted answers_, HTML file and .csv generated from DEV html ('webgazer-sample-data.csv')
    - Folder: _Data Folders_, where the data is stored with an optional .conf file which sets the "set" variables, such as language, participant_type and set_name.

### Each folder needs to contain:
- images for each of the trials in the experiment
- the HTML file which was used for the experiment, eg. 'pilot_webgazer_experiment_mturk_TR_v01.html'
- the .CSV generated from the DEV HTML ('webgazer-sample-data.csv'), this contains the targets for the resolution 1280x720.

### Optionally:
- **unaccepted_answers/accepted_answers.json** : containing the accepted answers from the participants
- **trialdata.csv** : the data exported from the collection from MTurk

To allow for multiple collections of the same set, one can have "data" folders within the set_folder.

Example:

**mturk_EN_v18/lab-control** and **mturk_EN_v18/mturk-data**, which represent to different data collections for the same set mturk_EN_v18. When this is the case, a .conf file should be provided with the settings for that particular data collection. 

