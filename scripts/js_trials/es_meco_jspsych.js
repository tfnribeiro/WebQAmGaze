var meco_para_12 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment-compact" id="paragraph">La patente de un vehículo es una placa de metal o plástico fijada al vehículo con el propósito de identificación oficial. Todos los países requieren patentes para vehículos como autos, camiones y motocicletas. Su requerimiento para otros vehículos como <span id="meco_para_12_qa_2">bicicletas, botes o tractores puede variar por jurisdicción</span>. El identificador de registro es <span id="meco_para_12_qa_3">una serie de letras o números</span> que identifican únicamente al dueño de un vehículo dentro de la región del registro del vehículo. En algunos países, el identificador es único en todo el país, mientras que, en otros, es único dentro de un estado o provincia. <span id="meco_para_12_qa_0">Francia fue el primer país en introducir la patente</span>, a fines del siglo diecinueve. Las patentes de principios de siglo veinte variaban en tamaño y forma de una jurisdicción a otra, de manera que, si una persona se mudaba, se necesitaba hacer nuevos agujeros en el auto para sostener la nueva patente. <span id="meco_para_12_qa_1">La estandarización de patentes llegó a fines de los años cincuenta</span>, cuando los fabricantes de automóviles llegaron a un acuerdo con los distintos gobiernos y organizaciones internacionales.</p>`,
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
stimulus: `<p class="webgaze-experiment" id="question">La primera patente fue introducida en Francia. `,
data: {
 correct_answer: "True", trial_name: "meco_para_12_qa_0"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_1 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">El tamaño de las patentes fue estandarizado antes de la Segunda Guerra Mundial. `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_1"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_2 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Todo registro nacional de vehículos incluye tanto a vehículos de calle como a botes. `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_2"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_3 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">El identificador de la matrícula del vehículo puede estar compuesto por letras, dígitos y símbolos. `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_3"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};

var meco_trials_array = [[meco_para_12,[meco_para_12_qa_0,meco_para_12_qa_1,meco_para_12_qa_2,meco_para_12_qa_3]]];
