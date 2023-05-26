# Compare WebGazer data to MECO data

The code in this directory is used for the analysis in Section "5.2 Comparison to High-Quality Recordings" of [this paper](https://arxiv.org/abs/2303.17876).

1. Download the MECO .rda file (version 1.2) from https://osf.io/3527a/.

2. Convert .rda to .csv with `convert2csv.py`.

3. Set paths and languages in `config.yaml`.

4. Run `data_extractor_meco.py` to get the eye-tracking features of the subset of texts used from MECO. The features are averaged across all available participants and relative fixation duration within sentences is calculated.

5. Run `collect_relative_fixations.py` to get the data from the MECO texts in WebQAmGaze and aggregate to relative fixation duration.

6. Run `compare_meco.py` to compare relative fixation durations from the original MECO data and the WebQAmGaze data.
