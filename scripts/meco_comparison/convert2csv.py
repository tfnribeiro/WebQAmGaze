#convert MECO .rda file to .csv

import pandas as pd
import rdata
parsed = rdata.parser.parse_file("joint_data_trimmed.rda")
converted = rdata.conversion.convert(parsed)
converted_df = pd.DataFrame(converted.get("joint.data"))
converted_df.to_csv("joint_data_trimmed.csv", index=False, na_rep='NA')
