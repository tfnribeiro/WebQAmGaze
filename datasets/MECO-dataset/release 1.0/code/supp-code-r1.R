##### Upload libraries #####
library(party)
library(tidyr)
library(effects)
library(psych)
library(plyr)
library(dplyr)
library(xtable)
library(gridExtra)
library(grid)
library(ggplot2)
library(lattice)
library(Hmisc)
library(lme4)

##### Upload data and descriptive stats #####
load("../primary data/eye tracking data/joint_data_trimmed.rda") #data frame after low-quality participants and trials are removed.

# remove outliers by language and participant

joint.data = joint.data[joint.data$dur > 80 | is.na(joint.data$dur)==T,]

crit = ddply(joint.data, c("lang", "uniform_id"), summarise,
      dur.crit = quantile(dur, 0.99, na.rm = T))

m = merge(joint.data, crit, by.x = c("lang", "uniform_id"), by.y = c("lang", "uniform_id"))  
m = m[m$skip == 1 | (m$dur < m$dur.crit),]

m -> joint.data
rm(m)

joint.data = joint.data[is.na(joint.data$lang)==F,]
joint.data = joint.data[joint.data$skip == 1 | joint.data$nfix <= quantile(joint.data$nfix, 0.99, na.rm = T), ]


### note re-labeling of variables:
# skipping (in popeye: skip), firstFixationDuration (firstfix.dur), gaze duration (firstrun.dur), total fixation duration (dur), first run number of fixations (firstrun.nfix), total number of fixations (nfix), regression (reg.in), rereading. Then CFT.  

by.sub = ddply(joint.data, c("uniform_id", "lang"), summarise,
      skipping = mean(skip, na.rm = T),
      firstFixationDuration = mean(firstfix.dur, na.rm = T),
      gazeDuration = mean(firstrun.dur, na.rm = T),
      totalFixationDuration = mean(dur, na.rm = T),
      nFixationsFirstRun = mean(firstrun.nfix, na.rm = T),
      nFixationsTotal = mean(nfix, na.rm = T),
      regressionIn = mean(reg.in, na.rm = T),
      rereading = mean(reread, na.rm = T))

load("../primary data/eye tracking data/joint.readrate.rda") #reading rate broken down by story and participant
u -> readrate_full
rm(u)

colnames(readrate_full)[colnames(readrate_full) == "rate"] <- "readingRate" #change label

readrate_full <- readrate_full %>% filter(readingRate < 1000)

readrate <- readrate_full %>% group_by(uniform_id) %>% dplyr::summarize(readingRate = mean(readingRate))

by.sub = by.sub[is.na(by.sub$lang)==F,]

m = merge(by.sub, readrate)
m -> by.sub
rm(m, readrate)

u <- unique(joint.data[, c("lang", "uniform_id", "trialid")])
x <- unique(by.sub[, c("lang", "uniform_id")])

data.frame(rbind(table(by.sub$lang), table(joint.data$lang),
                 round(100*rowMeans(table(u$lang, u$trialid))/table(by.sub$lang)))) -> stats_parts
stats_parts = data.frame(t(stats_parts))
colnames(stats_parts) = c("N subjects", "N trials", "Trials after trimming, %")
xtable(stats_parts, caption = "Number of participants and percent of trials retained after data cleaning", label = "tab:statsparts", digits = 0) -> tab1
print(tab1)


##### Create table of means #####
describeBy(x = by.sub[, 2:ncol(by.sub)], group = "lang") -> descr
data.frame(do.call(rbind, descr)) -> descr
substr(rownames(descr), 1, 2) -> descr$lang
substr(rownames(descr), 4, nchar(rownames(descr))) -> descr$var

descr <- descr[, c("var", "lang", "n", "mean", "sd", "se",  "median", "min", "max")]
descr = descr[-grep("lang", rownames(descr)),]
descr = descr[order(descr$var, descr$lang),]

for (i in 3:ncol(descr)) {
  descr[,i] = round(descr[,i], 2)
}

rownames(descr) = 1:nrow(descr)
descr = droplevels(descr)

load("../primary data/comprehension data/joint_l1_acc.rda") #uploading comprehension accuracy data.

colnames(joint.acc)[colnames(joint.acc) == "accuracy_matched"] <- "accuracyMatched" #just to change format of label

joint.acc$lang = as.factor(joint.acc$lang)

describeBy(joint.acc[, c("accuracy", "accuracyMatched")], group = joint.acc$lang) -> desc_acc
data.frame(do.call(rbind, desc_acc)) -> desc_acc
substr(rownames(desc_acc), 1, 2) -> desc_acc$lang
substr(rownames(desc_acc), 4, nchar(rownames(desc_acc))) -> desc_acc$var
desc_acc <- desc_acc[, c("var", "lang", "n", "mean", "sd", "se",  "median", "min", "max")]
desc_acc = desc_acc[order(desc_acc$var, desc_acc$lang),]

for (i in 3:ncol(desc_acc)) {
  desc_acc[,i] = round(desc_acc[,i], 2)
}

rownames(desc_acc) = 1:nrow(desc_acc)
desc_acc = droplevels(desc_acc)

cft <- read.csv("../primary data/individual differences data/cft.all.2021may20.csv", T) #CFT non-verbal intelligence data.
cft$cft20 -> cft$cft_score
cft$cft20 <- NULL
describeBy(cft[, c("cft_score")], group = cft$lang) -> desc_cft
data.frame(do.call(rbind, desc_cft)) -> desc_cft

substr(rownames(desc_cft), 1, 2) -> desc_cft$lang
desc_cft$var <- "cft"
desc_cft <- desc_cft[, c("var", "lang", "n", "mean", "sd", "se",  "median", "min", "max")]
desc_cft = desc_cft[order(desc_cft$var, desc_cft$lang),]


descr <- data.frame(rbind(descr, desc_acc, desc_cft), stringsAsFactors = F)
rm(desc_acc, desc_cft)
descr$lang = as.factor(descr$lang)
# write.csv(descr, "descriptive_eyemove_language.csv", quote = F, row.names = F)


##### Descriptive stats for read rate and acc by passage #####
fun25 = function(x) {
  return(quantile(x, 0.25))
}
fun75 = function(x) {
  return(quantile(x, 0.75))
}

describeBy(readrate_full$readingRate, group = list(readrate_full$trialid, readrate_full$lang), mat = T) -> descr_rate_story
head(descr_rate_story)
colnames(descr_rate_story)[2:4] = c("trialid", "lang", "var")
descr_rate_story <- data.frame(descr_rate_story[, c("var", "lang", "trialid", "n", "mean", "sd", "se",  "median", "min", "max")], stringsAsFactors = F)

readrate_full %>% group_by(lang, trialid) %>% dplyr::summarize(q1 = fun25(readingRate), q3 = fun75(readingRate)) -> tmp_rate

descr_rate_story = cbind(descr_rate_story, tmp_rate[, 3:4])
descr_rate_story$var = "readingRate"
for (i in 5:8) {
  descr_rate_story[,i] = round(descr_rate_story[,i])
}
head(descr_rate_story)
# write.csv(descr_rate_story, file = "descriptive_rate_passage.csv", quote = F, row.names = F)

load("../primary data/comprehension data/joint_l1_acc_breakdown.rda") #accuracy data by participant and passage

describeBy(joint.br.acc$ACCURACY, group = list(joint.br.acc$number, joint.br.acc$lang), mat = T) -> descr_acc_story
head(descr_acc_story)
colnames(descr_acc_story)[2:4] = c("trialid", "lang", "var")
descr_acc_story <- data.frame(descr_acc_story[, c("var", "lang", "trialid", "n", "mean", "sd", "se",  "median", "min", "max")], stringsAsFactors = F)

joint.br.acc %>% group_by(lang, number) %>% dplyr::summarize(q1 = fun25(ACCURACY), q3 = fun75(ACCURACY)) -> tmp_acc

descr_acc_story = cbind(descr_acc_story, tmp_acc[, 3:4])
descr_acc_story$var = "accuracy"
for (i in 5:8) {
  descr_acc_story[,i] = round(descr_acc_story[,i],2)
}
head(descr_acc_story)
# write.csv(descr_acc_story, file = "descriptive_acc_passage.csv", quote = F, row.names = F)

# #re-order variables for plot 
descr$var <- as.factor(descr$var)
levels(descr$var)
descr$var.order <- factor(descr$var, levels(descr$var)[c(11,4,5,12,8,6,7,9,10,3,1,2)])


##### Plot means #####
# tiff("../../BRM revision 1/figures/means.tiff", width = 550, height = 550, units = "px")
ggplot(aes(x = lang, y = mean, col = lang, lty = lang), data = descr) + geom_point(stat = "identity") + geom_errorbar(aes(ymin=mean - se, ymax=mean+se)) + facet_wrap(~var.order, scales = "free") + theme(axis.text=element_text(size=5)) #+ theme(legend.position = "none")
#+scale_fill_discrete(palette="Dark2")
# dev.off() -> z

##### Variance explained by Language #####
#evaluate amount of variance (R2) explained by language in all dependent variables

merge(by.sub, joint.acc[, c("uniform_id", "accuracy", "accuracyMatched")], by.x = "uniform_id", by.y = "uniform_id", all = T) -> by.sub1
by.sub1 <- merge(by.sub1, cft[, c("uniform_id", "cft_score")], all = T)
# by.sub1$accuracy -> by.sub1$acc
# by.sub1$accuracy <- NULL
# by.sub1$acc_matched <- by.sub1$accuracy_matched
# by.sub1$accuracy_matched <- NULL

u <- colnames(by.sub1)[3:length(colnames(by.sub1))]
r2 <- vector()
for (i in 1:length(u)) {
  mod = lm(by.sub1[,u[i]] ~ by.sub1$lang)
  
  r2[i] = round(100*summary(mod)$adj.r.squared,2)
}  
names(r2) <- u
sort(r2)


##### Correlation matrix #####
#create a correlation matrix of oculomotor measures, accuracy and cft.
by.sub1.cor <- by.sub1[, 3:ncol(by.sub1)]
by.sub1.cor <- by.sub1.cor[,c(1,2,3,4,9,5,6,7,8,12)] #re-order variables for table

rcorr(as.matrix(by.sub1.cor)) -> rc

mat_corr = matrix(nrow = nrow(rc$r), ncol = ncol(rc$r), "")
mat_corr[upper.tri(mat_corr)] <- round(rc$r[upper.tri(rc$r)],2)
mat_corr[lower.tri(mat_corr)] <- round(rc$P[lower.tri(rc$P)],3)
data.frame(mat_corr) -> mat_corr
colnames(mat_corr) = rownames(mat_corr) = colnames(rc$r)

# write.csv(mat_corr, file = "../../tables prep/corr.13lang.r1.csv")
##### Classification tree #####
#Classification tree with Language as an outcome variable and oculomotor predictors as input.

by.sub$lang = as.factor(by.sub$lang)
vars = colnames(by.sub)[3:ncol(by.sub)]
vars = vars[-c(9)]

fmla = as.formula(paste("lang", paste(vars, collapse = " + "), sep = "~"))
ctree(fmla, data = by.sub, controls = ctree_control(mincriterion = 0.99, minsplit = 20, minbucket = 20, 
                                                    maxdepth = 4)) -> best_tree
# tiff("../../BRM revision 1/figures/lang_tree.r1.tiff", res=100, height=800, width=1600) 
plot(best_tree)
# dev.off() -> z

#Check distribution in terminal nodes:
tree.node = data.frame(predicted.node = best_tree@get_where(), lang = by.sub$lang)
table(tree.node$lang, tree.node$predicted.node)


##### Skipping rate and word length #####
#Analysis of the relation between word length and skipping rate.

joint.data$ia_mod = gsub("[[:punct:]]", "", joint.data$ia)
joint.data$len = nchar(joint.data$ia_mod)
describeBy(joint.data$len, group = joint.data$lang, mat = T) -> desc.len

joint.data.len <- joint.data

#regression models to estimate the intercept and slope of the word length effect on skipping.
u = unique(joint.data.len$lang)
interc = slope = vector()
for (i in 1:length(u)) {
  print(u[i])
  jd = joint.data.len[joint.data.len$lang == u[i],]
  mod.len = glm(skip ~ scale(len, center = T, scale = F), data = jd, family = "binomial")
  interc[i] = summary(mod.len)$coefficients[1,1]
  slope[i] = summary(mod.len)$coefficients[2,1]
}


lengths = data.frame(lang = u, intercept = interc, slope = slope, length_mean = desc.len$mean, length_se = desc.len$se, length_sd = desc.len$sd)
lengths$intercept_percent = exp(lengths$intercept)/(1+exp(lengths$intercept))
lengths <- lengths[, c("lang", "intercept", "intercept_percent", "slope", "length_mean", "length_sd")]
lengths[, 2:ncol(lengths)] <- round(lengths[, 2:ncol(lengths)], 3)
lengths = lengths[, c(1, 5, 6, 3, 2,4)]
xtable(lengths, digits = 3, align = c("lrrrrrr"), caption = "Intercept and slope of model predicting skip from length, by language.", label = "tab:lendistr") -> xlen
print(xlen)

# tiff("../../BRM revision 1/figures/skip_length.tiff")
ggplot(data = lengths, aes(x = length_mean, y = intercept_percent)) +
  geom_text(aes(label = lang)) +
  theme_bw() +
  theme(legend.position = "none") + labs(x = "mean word length", y = "estimated skipping rate")
# dev.off -> z

cor.test(lengths$length_mean, lengths$intercept_percent)
cor.test(lengths$length_mean, lengths$slope)

##### Correlation matrix length info #####
round(cor(lengths[,2:ncol(lengths)]),2) -> cor_length
xtable(cor_length, caption = c("Correlations between mean and SD of word lengths and the predicted intercept and slope of skipping rate in individual languages, N = 12"), label = "tab:corlen")


##### Clustering of languages #####
#Clustering solution for languages, based on oculomotor parameters.

by.sub1 = by.sub1[by.sub1$uniform_id %in% by.sub$uniform_id,]
subs = as.matrix(by.sub1[, c("skipping", "gazeDuration", "nFixationsTotal")])

# ("skipping", "gazeDuration", "nFixationsTotal", "totalFixationDuration") #similar results when total fixation duration is included. 

scale(subs) -> subs

#correlations
cor.mat = matrix(nrow = nrow(subs), ncol = nrow(subs), NA)
for (i in 1:nrow(subs)) {
  for (j in 1:nrow(subs)) {
    cor.mat[i,j] = cor(subs[i,], subs[j,], use = "pairwise.complete.obs")
  }
}

row.names(subs) = by.sub$uniform_id
dist(subs, method = "euclidian") -> dis
dis.mat = as.matrix(dis)

langs = unique(by.sub$lang)
dist.lang = matrix(nrow = length(langs), ncol = length(langs), NA)
row.names(dist.lang) = colnames(dist.lang) = unique(by.sub$lang)
within.dist = between.dist = vector()
for (lang1 in langs) {
  for (lang2 in langs) { 
    dist.tmp = dis.mat[by.sub$lang == lang1, by.sub$lang == lang2]
    if(lang1 == lang2) { 
      dist.tmp[lower.tri(dist.tmp, diag = T)] <- NA #if same language, look only at upper triangular part
      within.dist = c(within.dist, as.vector(dist.tmp))
    }else { 
      between.dist = c(between.dist, as.vector(dist.tmp))
    }
    dist.lang[lang1, lang2] = mean(dist.tmp, na.rm = T)
  }
}


hclust(as.dist(dist.lang), method = "ward.D2") -> h

# tiff("../../BRM revision 1/figures/cluster_lang_r1.tiff")
plot(h, xlab = "", sub = "", main = "Language clustering")
# dev.off() -> z
