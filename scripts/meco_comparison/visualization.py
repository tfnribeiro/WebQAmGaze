import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt


def visualize_sentence(tokens, web_saliency, meco_saliency, outfile):

    assert(len(tokens) == len(web_saliency) == len(meco_saliency))

    web_data = pd.DataFrame({"Tokens": tokens, "Importance": web_saliency}).fillna(0)
    meco_data = pd.DataFrame({"Tokens": tokens, "Importance": meco_saliency})

    fig, ax = plt.subplots(figsize=(8, 4))
    mypalette = sns.diverging_palette(150, 275, s=80, l=55, n=2)
    sns.set(font_scale=1)
    sns.set_style("white")
    sns.lineplot(x='Tokens', y="Importance", data=web_data, markers=False, color=mypalette[0], label='QAmGaze')
    sns.lineplot(x='Tokens', y="Importance", data=meco_data, markers=False, color=mypalette[1], label='MECO')
    sns.scatterplot(x="Tokens", y="Importance", data=web_data, markers=["o"], color=mypalette[0],
                    legend=False, size='Importance', sizes=(50, 300))
    sns.scatterplot(x="Tokens", y="Importance", data=meco_data, markers=["o"], color=mypalette[1],
                    legend=False, size='Importance', sizes=(50, 300))
    ax.lines[0].set_linestyle("dashed")

    handles, labels = ax.get_legend_handles_labels()
    ax.set_xticklabels(web_data['Tokens'].apply(lambda x: x.split('_')[0]), rotation=90, fontsize=16)
    ax.set_xlabel("")
    ax.legend(handles=handles, labels=labels)
    plt.tight_layout()
    plt.savefig(outfile)
    plt.close()


def visualize_sentence_subplot(tokens_all, web_saliency_all, meco_saliency_all, outfile):

    fig, ax = plt.subplots(nrows=1, ncols=2, figsize=(10, 3), sharey=True)
    mypalette = sns.diverging_palette(150, 275, s=80, l=55, n=2)
    ii=0

    for tokens, web_saliency, meco_saliency in zip(tokens_all, web_saliency_all, meco_saliency_all):

        assert(len(tokens) == len(web_saliency) == len(meco_saliency))

        meco_data = pd.DataFrame({"Tokens": tokens, "Importance": meco_saliency})
        web_data = pd.DataFrame({"Tokens": tokens, "Importance": web_saliency}).fillna(0)

        sns.set(font_scale=1)
        sns.set_style("white")
        sns.lineplot(x='Tokens', y="Importance", data=web_data, markers=False, color=mypalette[0], label='WebQAmGaze', ax=ax[ii])
        sns.lineplot(x='Tokens', y="Importance", data=meco_data, markers=False, color=mypalette[1], label='MECO', ax=ax[ii])
        sns.scatterplot(x="Tokens", y="Importance", data=web_data, markers=["o"], color=mypalette[0],
                        legend=False, size='Importance', sizes=(30, 200), ax=ax[ii])
        sns.scatterplot(x="Tokens", y="Importance", data=meco_data, markers=["o"], color=mypalette[1],
                        legend=False, size='Importance', sizes=(30, 200), ax=ax[ii])
        ax[ii].lines[0].set_linestyle("dashed")

        ax[ii].set_xticklabels(web_data['Tokens'].apply(lambda x: x.split('_')[0]), rotation=90)
        ax[ii].set_xlabel("")
        ii+=1

    ax[0].legend().set_visible(False)
    ax[0].set_ylabel('relative Fixation')
    plt.tight_layout()
    # plt.show()
    # import ipdb;ipdb.set_trace()
    # handles, labels = ax.get_legend_handles_labels()
    # ax.legend(handles=handles, labels=labels)
    plt.savefig(outfile, bbox_inches='tight', dpi=300)
    plt.close()
