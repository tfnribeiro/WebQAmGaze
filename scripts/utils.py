"""
    Small functions used throughout the the project.
"""
from enum import Enum

class Error(Enum):
    ERROR = 4
    WARNING = 3
    INFO = 2
    OTHER = 1

def log_error(error_message, error_level:Error, worker_id=None, trial_id=None):
    worker_trial_str = ""
    if worker_id is not None:
        worker_trial_str += f"WorkerID: {worker_id} "
    if trial_id is not None:
        worker_trial_str += f"| TrialID: {trial_id}"

    if error_level == Error.OTHER:
        print(f"NOTE       : {error_message} | {worker_trial_str}")
    elif error_level == Error.INFO:
        print(f"# INFO     : {error_message} | {worker_trial_str}")
    elif error_level == Error.WARNING:
        print(f"## WARNING : {error_message} | {worker_trial_str}")
    elif error_level == Error.ERROR:
        print(f"### ERROR  : {error_message} | {worker_trial_str}")


def sentence_to_word_list(sentence):
    return [word for word in sentence.split(" ")]

def sentence_to_word_pos_dictionary(sentence):
    word_pos_dict = dict()
    start_str = 0
    for word_i, word in enumerate(sentence_to_word_list(sentence)):
        word_end = start_str + len(word)
        word_pos_dict[start_str] = word_i
        start_str = word_end+1
    return word_pos_dict

def invert_dictionary(dict_to_invert):
    return {v:k for k,v in dict_to_invert.items()}