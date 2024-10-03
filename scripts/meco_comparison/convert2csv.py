#convert MECO .rda file to .csv

import pandas as pd
import rdata
from os import path

def convertFile(filename):
    if path.exists(filename):
        parsed = rdata.parser.parse_file(filename)
        converted = rdata.conversion.convert(parsed)
        for k in converted.keys():
            converted_df = pd.DataFrame(converted.get(k))
            fileprefix = k.replace(".","_")
            converted_df.to_csv(f"{fileprefix}.csv", index=False, na_rep='NA')

convertFile("joint_data_trimmed.rda")
convertFile("joint_fix_trimmed.rda")

