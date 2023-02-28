var meco_para_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment-compact" id="paragraph">In competitive sports, doping is the use of banned <span id="meco_para_3_qa_1">performance-enhancing drugs by athletic competitors</span>. The term doping is widely used by organizations which regulate sporting competitions. The use of drugs to enhance performance is largely considered unethical, and is therefore prohibited by most international sports organizations, including the International Olympic Committee. Furthermore, athletes who take explicit measures to evade detection exacerbate the ethical violation with overt deception and cheating. Despite its prevalence in the headlines recently, doping is not a new phenomenon; in fact, it is as old as sport itself. From the use of substances <span id="meco_para_3_qa_3">in ancient chariot races</span> to more recent controversies <span id="meco_para_3_qa_2">in baseball and cycling</span>, popular views among athletes have varied widely over the years. In recent decades, authorities and sporting organizations have tried to strictly regulate the use of drugs in sport. The primary reasons for this ban are the <span id="meco_para_3_qa_0">health risks of performance-enhancing drugs</span>, the equality of opportunity for athletes, and the positive example to the public set by drug-free sport. Anti-doping authorities have repeatedly emphasized that using performance-enhancing drugs goes against the 'spirit of sport'.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#meco_para_3_qa_0','#meco_para_3_qa_1','#meco_para_3_qa_2','#meco_para_3_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'meco_para_3_1280_720.png';
a.click();});}},data: { trial_name: "meco_para_3"}
};
var meco_para_3_qa_0 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Can doping have adverse health effects? `,
data: {
 correct_answer: "True", trial_name: "meco_para_3_qa_0"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_3_qa_1 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Do athletes use doping to calm down before their competition? `,
data: {
 correct_answer: "False", trial_name: "meco_para_3_qa_1"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_3_qa_2 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Is doping an issue only in specific disciplines? `,
data: {
 correct_answer: "False", trial_name: "meco_para_3_qa_2"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_3_qa_3 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Was the use of doping first observed in ancient wrestling competitions? `,
data: {
 correct_answer: "False", trial_name: "meco_para_3_qa_3"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_7 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment-compact" id="paragraph">Wine tasting is the sensory examination and evaluation of wine. While the practice of wine tasting is as ancient as its production, a more formalized methodology has slowly become established from the late middle ages onwards. Modern, professional wine tasters use a constantly evolving specialized terminology which is used to describe the range of perceived flavors, aromas and general characteristics of a wine. In recent years, <span id="meco_para_7_qa_0">results challenging the reliability of wine tasting <span id="meco_para_7_qa_1">in both experts</span> and consumers have surfaced</span>. For example, studies showed that people expect more expensive wine to have more desirable characteristics than less expensive wine: When tasters are given wine that they are falsely told is expensive they virtually always report it as tasting better than the very same wine when they are told that it is inexpensive. Other studies show that tasters' judgment can be prejudiced by knowing details of a wine, such as geographic origin, reputation, or other considerations. <span id="meco_para_7_qa_2">Objective wine tasting therefore requires the wine to be served blind</span> – that is, without the taster having seen the label or bottle shape. Blind tasting may also involve serving the wine from a <span id="meco_para_7_qa_3">black wine glass to mask the color of the wine</span>.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#meco_para_7_qa_0','#meco_para_7_qa_1','#meco_para_7_qa_2','#meco_para_7_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'meco_para_7_1280_720.png';
a.click();});}},data: { trial_name: "meco_para_7"}
};
var meco_para_7_qa_0 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Are wine tasters reliable in their judgments of wine quality? `,
data: {
 correct_answer: "False", trial_name: "meco_para_7_qa_0"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_7_qa_1 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Are experienced wine tasters less prejudiced towards wine than a lay person? `,
data: {
 correct_answer: "False", trial_name: "meco_para_7_qa_1"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_7_qa_2 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Does blind-tasting ensure wine tasting to be less subjective? `,
data: {
 correct_answer: "True", trial_name: "meco_para_7_qa_2"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_7_qa_3 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Is wine served in a black glass to mask its color? `,
data: {
 correct_answer: "True", trial_name: "meco_para_7_qa_3"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_11 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment-compact" id="paragraph">The International Union for Conservation of Nature is <span id="meco_para_11_qa_0">an international organization</span> working in the field of nature conservation and the sustainable use of natural resources. It is involved in data gathering and analysis, research, field projects, advocacy, and education. Its mission is to 'influence, encourage and assist societies throughout the <span id="meco_para_11_qa_2">world to conserve nature and to ensure that any use of natural resources is equitable and ecologically sustainable'</span>. Over the past decades, the organization has widened its focus beyond conservation ecology and now incorporates issues related to sustainable development in its projects. Unlike many other international environmental organizations, it does not aim to mobilize the public in support of nature conservation. Instead, the organization tries to influence the actions of governments, business and other stakeholders by providing information and advice, and through building partnerships. The organization is best known to the wider public for <span id="meco_para_11_qa_3">compiling and publishing the Red List of Threatened Species</span>, which assesses the conservation status of species worldwide. Today, <span id="meco_para_11_qa_1">the organization employs approximately one thousand full-time staff</span> in more than fifty countries.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#meco_para_11_qa_0','#meco_para_11_qa_1','#meco_para_11_qa_2','#meco_para_11_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'meco_para_11_1280_720.png';
a.click();});}},data: { trial_name: "meco_para_11"}
};
var meco_para_11_qa_0 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">The International Union for Conservation of Nature is different from Green Peace. `,
data: {
 correct_answer: "True", trial_name: "meco_para_11_qa_0"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_11_qa_1 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">This organization is mostly run by volunteers. `,
data: {
 correct_answer: "False", trial_name: "meco_para_11_qa_1"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_11_qa_2 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Its main goal is to raise public awareness on nature conservation. `,
data: {
 correct_answer: "False", trial_name: "meco_para_11_qa_2"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_11_qa_3 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">This organization publishes the Red List of Threatened Species. `,
data: {
 correct_answer: "True", trial_name: "meco_para_11_qa_3"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment-compact" id="paragraph">A vehicle registration plate is a metal or plastic plate attached to a vehicle for officialidentification purposes. All countries require registration plates for road vehicles such as cars, trucks,and motorcycles. Whether they are required for other vehicles, such as bicycles, <span id="meco_para_12_qa_2">boats, or tractors, may vary by jurisdiction</span>. The registration identifier is a <span id="meco_para_12_qa_3">series of letters and digits</span> that uniquely identifies the vehicle owner within the issuing region's vehicle register. In some countries, the identifier is unique within the entire country, while in others it is unique within a state or province. <span id="meco_para_12_qa_0">France was the first country to introduce</span> the registration plate, in the late nineteenth century. Early twentieth century plates varied in size and shape from one jurisdiction to the next, such that if a person moved, new holes would need to be drilled into the automobile to support the new plate. <span id="meco_para_12_qa_1">Standardization of plates came in the late fifties</span>, when automobile manufacturers came to an agreement with governments and international organizations.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#meco_para_12_qa_0','#meco_para_12_qa_1','#meco_para_12_qa_2','#meco_para_12_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'meco_para_12_1280_720.png';
a.click();});}},data: { trial_name: "meco_para_12"}
};
var meco_para_12_qa_0 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">The first registration plate was introduced in France. `,
data: {
 correct_answer: "True", trial_name: "meco_para_12_qa_0"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_1 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">The size of plates was standardized before World War II. `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_1"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_2 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Every national vehicle register includes both road vehicles and boats. `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_2"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_3 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">A vehicle registration identifier may be composed of letters, digits, and symbols. `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_3"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};

var meco_trials_array = [[meco_para_3,[meco_para_3_qa_0,meco_para_3_qa_1,meco_para_3_qa_2,meco_para_3_qa_3]],[meco_para_7,[meco_para_7_qa_0,meco_para_7_qa_1,meco_para_7_qa_2,meco_para_7_qa_3]],[meco_para_11,[meco_para_11_qa_0,meco_para_11_qa_1,meco_para_11_qa_2,meco_para_11_qa_3]],[meco_para_12,[meco_para_12_qa_0,meco_para_12_qa_1,meco_para_12_qa_2,meco_para_12_qa_3]]];
