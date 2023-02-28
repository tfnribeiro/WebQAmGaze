var meco_para_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment-compact" id="paragraph"><span id="meco_para_1_qa_3">In der alten römischen Religion und Mythologie</span> <span id="meco_para_1_qa_0">ist Janus der Gott des Anfangs und der Tore</span>. Er hat eine doppelte Natur und wird gewöhnlich mit zwei Gesichtern dargestellt, da er in die Zukunft und in die Vergangenheit blickt. Janus überwachte den Beginn und das Ende von Konflikten und damit auch Krieg und Frieden. <span id="meco_para_1_qa_2">Die Türen seines Tempels waren in Kriegszeiten geöffnet und geschlossen in Zeiten des Friedens</span>. Als Gott der Tore wurde er außerdem mit dem Betreten und Verlassen von Haustüren in Verbindung gebracht. <span id="meco_para_1_qa_1">Janus symbolisierte häufig Veränderungen und Übergänge</span>, wie den Wechsel von einer Bedingung zur anderen, von einer Perspektive zur anderen und das Heranwachsen junger Menschen zum Erwachsenenalter. Deswegen wurde Janus zu Beginn der Saat-und Erntezeit verehrt, genauso wie zu Hochzeiten, Todesfällen und anderen Übergänge. Für Janus war kein spezieller Priester zuständig, sondern der höchste Priester leitete die Zeremonien selbst. Janus stellte den Mittelweg zwischen Barbarei und Zivilisation, ländlichem und urbanem Leben, Jugend und Erwachsenenalter dar. Die alten Griechen hatten kein Äquivalent zu Janus, den die Römer ganz für sich beanspruchten.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#meco_para_1_qa_0','#meco_para_1_qa_1','#meco_para_1_qa_2','#meco_para_1_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'meco_para_1_1280_720.png';
a.click();});}},data: { trial_name: "meco_para_1"}
};
var meco_para_1_qa_0 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">War Janus ein Gott der Türen und Übergänge? `,
data: {
 correct_answer: "True", trial_name: "meco_para_1_qa_0"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_1_qa_1 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Symbolisiert Janus die Nacht? `,
data: {
 correct_answer: "False", trial_name: "meco_para_1_qa_1"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_1_qa_2 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Waren die Türen zu Janus Tempel in Zeiten des Friedens geöffnet? `,
data: {
 correct_answer: "False", trial_name: "meco_para_1_qa_2"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_1_qa_3 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Ist Janus ein griechischer Gott? `,
data: {
 correct_answer: "False", trial_name: "meco_para_1_qa_3"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment-compact" id="paragraph">Ein Fahrzeugkennzeichen ist ein Metall- oder Kunststoffschild, das zur amtlichen Identifizierung an einem Fahrzeug angebracht ist. In allen Ländern sind solche Kennzeichen für Straßenfahrzeuge wie Autos, Lastwagen und Motorräder erforderlich. <span id="meco_para_12_qa_2">Ob sie für andere Fahrzeuge wie Fahrräder, Boote oder Traktoren erforderlich sind, kann je nach Rechtssprechung variieren</span>. <span id="meco_para_12_qa_3">Die Registrierungskennung besteht aus einer Reihe von Buchstaben und Ziffern<span id="meco_para_12_qa_3">, die den Fahrzeughalter eindeutig im Fahrzeugregister der ausstellenden Behörde identifiziert. In einigen Ländern ist die Kennung innerhalb des gesamten Landes einzigartig, während sie dies in anderen Ländern nur innerhalb eines Staates oder einer Provinz ist. <span id="meco_para_12_qa_0">Frankreich war das erste Land, das Ende des 19. Jahrhunderts das Kennzeichen einführte</span>. Die Kennzeichen des frühen zwanzigsten Jahrhunderts variierten in Größe und Form je nach regionaler Rechtssprechung, so dass bei einem Umzug zusätzliche Löcher in das Auto gebohrt werden mussten, um das neue Kennzeichen anbringen zu können. <span id="meco_para_12_qa_1">Die Standardisierung der Platten erfolgte erst Ende der fünfziger Jahre</span>, als sich die Automobilhersteller mit Regierungen und internationalen Organisationen einigten.</p>`,
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
stimulus: `<p class="webgaze-experiment" id="question">Wurde das erste Kennzeichen in Frankreich eingeführt? `,
data: {
 correct_answer: "True", trial_name: "meco_para_12_qa_0"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_1 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Wurde die Kennzeichengröße vor dem Zweiten Weltkrieg vereinheitlicht? `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_1"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_2 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Umfasst jedes nationale Fahrzeugregister sowohl Straßenfahrzeuge als auch Boote? `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_2"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_3 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Besteht eine Fahrzeugkennung aus Buchstaben, Ziffern und Symbolen? `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_3"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};

var meco_trials_array = [[meco_para_1,[meco_para_1_qa_0,meco_para_1_qa_1,meco_para_1_qa_2,meco_para_1_qa_3]],[meco_para_12,[meco_para_12_qa_0,meco_para_12_qa_1,meco_para_12_qa_2,meco_para_12_qa_3]]];
