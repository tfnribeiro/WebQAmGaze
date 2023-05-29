import json
import os
from utils import log_error, Error

PARTICIPANT_TYPES = ["Volunteer", "Lab", "Mturk", None]
PLATFORM_TYPES = ["Mturk", "Cognition", None]
SET_LANGUAGES = ["EN","ES", "DE", "GR", "TR", "RU", None]

KEY_TYPE_MAPPING = {
    "set_name": [],
    "set_language": SET_LANGUAGES,
    "participant_type": PARTICIPANT_TYPES,
    "platform_type": PLATFORM_TYPES
}

class StudyConfig():
    def __init__(self) -> None:
        self.data = {}
        self.data['set_name'] = None
        self.data['set_language'] = None
        self.data['participant_type'] = None
        self.data['platform_type'] = None

    def load(self, path_to_file:str):
        path = os.path.abspath(path_to_file)
        fileData = dict()
        try:
            with open(path_to_file, "r", encoding="utf-8") as f:
                fileData = json.load(f)
        except Exception as e:
            log_error(f"Failed to load '{path}', Error: '{e}'", Error.ERROR)
            return False
        for k, v in fileData.items():
            if k in KEY_TYPE_MAPPING:
                # Dont check the set name
                if v not in KEY_TYPE_MAPPING[k] and k != "set_name":
                    log_error(f"Config has invalid value for '{k}', set to: '{v}', valid options are: {KEY_TYPE_MAPPING[k]}. Skipping...", Error.ERROR)
                    continue
            else:
                log_error(f"Found setting which is not being tracked: '{k}'.", Error.INFO)
            self.data[k] = v
        return True
    
    def save(self, path_to_file:str):
        path = os.path.abspath(path_to_file)
        try:
            with open(path_to_file, "w", encoding="utf-8") as f:
                json.dump(self.data, f)
        except Exception as e:
            log_error(f"Failed to load '{path}', Error: '{e}'", Error.ERROR)
            return False
        return True
    
