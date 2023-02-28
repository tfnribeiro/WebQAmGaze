var meco_para_12 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment-compact" id="paragraph">Регистрационный номер транспортного средства — это металлическая или пластиковая табличка, которая помещается на транспортное средство в целях идентификации. Все страны требуют регистрационных знаков для таких наземных транспортных средств, как легковые и грузовые автомобили, а также мотоциклы. <span id="meco_para_12_qa_2">Обязательны ли они для других видов транспорта, например, для велосипедов, лодок и тракторов, зависит от местных законов.</span> Регистрационный номер — это комбинация букв и цифр, которая позволяет однозначно идентифицировать владельца транспортного средства в реестре номеров соответствующей административной единицы. В некоторых странах номера регистрируются в едином реестре, <span id="meco_para_12_qa_3">в других реестры ведутся в отдельных штатах или областях.</span> <span id="meco_para_12_qa_0">Франция была первой страной, в которой ввели</span> регистрационные номера, — там это случилось в конце девятнадцатого века. Номерные знаки в начале двадцатого века настолько отличались размером и формой в разных административных единицах, что тому, кто переезжал, приходилось сверлить в автомобиле новые отверстия, чтобы прикрепить новый знак. <span id="meco_para_12_qa_1">Стандартизация знаков была введена в конце пятидесятых годов</span>, когда производители автомобилей пришли к соглашению с правительствами и международными организациями.</p>`,
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
stimulus: `<p class="webgaze-experiment" id="question">Первые регистрационные номера для автомобилей появились во Франции. `,
data: {
 correct_answer: "True", trial_name: "meco_para_12_qa_0"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_1 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Размер номерных знаков был стандартизирован до Второй Мировой войны. `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_1"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_2 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Каждый национальный индекс транспортных средств включает как автомобили, так и лодки. `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_2"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_3 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Региональные власти в некоторых странах имеют право вводить собственные номерные знаки.  `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_3"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};

var meco_trials_array = [[meco_para_12,[meco_para_12_qa_0,meco_para_12_qa_1,meco_para_12_qa_2,meco_para_12_qa_3]]];
