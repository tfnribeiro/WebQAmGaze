var a_SuperBowl50_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_SuperBowl50_1_qa_5">Die Broncos</span> besiegten <span id="a_SuperBowl50_1_qa_0"><span id="a_SuperBowl50_1_qa_10"><span id="a_SuperBowl50_1_qa_13">die Pittsburgh Steelers</span></span></span> in der Divisional Round, <span id="a_SuperBowl50_1_qa_6">23-16</span>, indem sie in den letzten drei Minuten des Spiels <span id="a_SuperBowl50_1_qa_1"><span id="a_SuperBowl50_1_qa_11">11</span></span> Punkte erzielten. Sie schlugen daraufhin im AFC-Championship-Spiel den verteidigenden Super Bowl XLIX-Champion, die <span id="a_SuperBowl50_1_qa_2"><span id="a_SuperBowl50_1_qa_7"><span id="a_SuperBowl50_1_qa_12"><span id="a_SuperBowl50_1_qa_14">New England Patriots</span></span></span></span>, <span id="a_SuperBowl50_1_qa_3">20-18</span>, indem sie bei nur <span id="a_SuperBowl50_1_qa_4"><span id="a_SuperBowl50_1_qa_8"><span id="a_SuperBowl50_1_qa_15">17</span></span> Sekunden</span> verbleibender Spielzeit New Englands Versuch, eine 2-Point Conversion zu erzielen, abfingen. Trotz <span id="a_SuperBowl50_1_qa_9">Manning</span>s Problemen mit Interceptions während der Saison verfehlte er in den beiden Playoff-Spielen keine einzige.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_SuperBowl50_1_qa_0','#a_SuperBowl50_1_qa_1','#a_SuperBowl50_1_qa_2','#a_SuperBowl50_1_qa_3','#a_SuperBowl50_1_qa_4','#a_SuperBowl50_1_qa_5','#a_SuperBowl50_1_qa_6','#a_SuperBowl50_1_qa_7','#a_SuperBowl50_1_qa_8','#a_SuperBowl50_1_qa_9','#a_SuperBowl50_1_qa_10','#a_SuperBowl50_1_qa_11','#a_SuperBowl50_1_qa_12','#a_SuperBowl50_1_qa_13','#a_SuperBowl50_1_qa_14','#a_SuperBowl50_1_qa_15'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_SuperBowl50_1_1280_720.png';
a.click();});}},data: { trial_name: "a_SuperBowl50_1"}
};
var a_SuperBowl50_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer verlor in der Divisional Round gegen die Broncos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer verlor in der Divisional Round gegen die Broncos?`, correct_answer: "die Pittsburgh Steelers", trial_name: "a_SuperBowl50_1_qa_0"} 
};var a_SuperBowl50_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele Punkte erzielten die Broncos in den letzten drei Minuten des Spiels gegen Pittsburgh?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele Punkte erzielten die Broncos in den letzten drei Minuten des Spiels gegen Pittsburgh?`, correct_answer: "11", trial_name: "a_SuperBowl50_1_qa_1"} 
};var a_SuperBowl50_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer gewann den Super Bowl XLIX?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer gewann den Super Bowl XLIX?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_2"} 
};var a_SuperBowl50_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie lautete der Endstand des AFC-Championship-Spiels?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie lautete der Endstand des AFC-Championship-Spiels?`, correct_answer: "20-18", trial_name: "a_SuperBowl50_1_qa_3"} 
};var a_SuperBowl50_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viel Zeit verblieb, als den Broncos die Interception gelang, die das AFC-Championship-Spiel entschied?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viel Zeit verblieb, als den Broncos die Interception gelang, die das AFC-Championship-Spiel entschied?`, correct_answer: "17 Sekunden", trial_name: "a_SuperBowl50_1_qa_4"} 
};var a_SuperBowl50_1_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welches Team war der Sieger der Divisional Round im Spiel der Broncos gegen die Steelers?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welches Team war der Sieger der Divisional Round im Spiel der Broncos gegen die Steelers?`, correct_answer: "Die Broncos", trial_name: "a_SuperBowl50_1_qa_5"} 
};var a_SuperBowl50_1_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie lautete das Endergebnis des Spiels der Broncos gegen die Steelers?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie lautete das Endergebnis des Spiels der Broncos gegen die Steelers?`, correct_answer: "23-16", trial_name: "a_SuperBowl50_1_qa_6"} 
};var a_SuperBowl50_1_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer gewann den Super Bowl XLIX?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer gewann den Super Bowl XLIX?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_7"} 
};var a_SuperBowl50_1_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele Sekunden Spielzeit verblieben, als die Broncos den Pass abfingen, der das Spiel gewann?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele Sekunden Spielzeit verblieben, als die Broncos den Pass abfingen, der das Spiel gewann?`, correct_answer: "17", trial_name: "a_SuperBowl50_1_qa_8"} 
};var a_SuperBowl50_1_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer verfehlte während der Playoff-Spiele der Broncos keine Interception?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer verfehlte während der Playoff-Spiele der Broncos keine Interception?`, correct_answer: "Manning", trial_name: "a_SuperBowl50_1_qa_9"} 
};var a_SuperBowl50_1_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wen schlugen die Broncos in der Divisional Round?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wen schlugen die Broncos in der Divisional Round?`, correct_answer: "die Pittsburgh Steelers", trial_name: "a_SuperBowl50_1_qa_10"} 
};var a_SuperBowl50_1_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele Punkte erzielten die Broncos in den letzten drei Minuten des Pittsburgh-Spiels?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele Punkte erzielten die Broncos in den letzten drei Minuten des Pittsburgh-Spiels?`, correct_answer: "11", trial_name: "a_SuperBowl50_1_qa_11"} 
};var a_SuperBowl50_1_qa_12 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wen besiegten die Broncos im AFC-Championship-Spiel?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wen besiegten die Broncos im AFC-Championship-Spiel?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_12"} 
};var a_SuperBowl50_1_qa_13 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wen schlugen die Broncos 2015, um in ihrer Division zu gewinnen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wen schlugen die Broncos 2015, um in ihrer Division zu gewinnen?`, correct_answer: "die Pittsburgh Steelers", trial_name: "a_SuperBowl50_1_qa_13"} 
};var a_SuperBowl50_1_qa_14 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wen schlugen die Broncos, um AFC-Champion zu werden?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wen schlugen die Broncos, um AFC-Champion zu werden?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_14"} 
};var a_SuperBowl50_1_qa_15 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele Sekunden verblieben im Spiel, als die 2-Point Conversion der Patriots fehlschlug?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele Sekunden verblieben im Spiel, als die 2-Point Conversion der Patriots fehlschlug?`, correct_answer: "17", trial_name: "a_SuperBowl50_1_qa_15"} 
};var a_SuperBowl50_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_SuperBowl50_2_qa_8"><span id="a_SuperBowl50_2_qa_11"><span id="a_SuperBowl50_2_qa_14">Peyton Manning</span></span></span> wurde zum ersten Quarterback, der <span id="a_SuperBowl50_2_qa_9"><span id="a_SuperBowl50_2_qa_10">zwei</span></span> verschiedene Teams zu mehreren Super Bowls führte. Mit <span id="a_SuperBowl50_2_qa_0"><span id="a_SuperBowl50_2_qa_15">39</span></span> Jahren ist er zudem auch der älteste Quarterback, der je in einem Super Bowl spielte. Vor Manning wurde der Rekord von <span id="a_SuperBowl50_2_qa_1"><span id="a_SuperBowl50_2_qa_6"><span id="a_SuperBowl50_2_qa_12"><span id="a_SuperBowl50_2_qa_16">John Elway</span></span></span></span> gehalten, der im Alter von <span id="a_SuperBowl50_2_qa_2"><span id="a_SuperBowl50_2_qa_7">38</span></span> Jahren die <span id="a_SuperBowl50_2_qa_4"><span id="a_SuperBowl50_2_qa_5">Broncos</span></span> zum Sieg beim <span id="a_SuperBowl50_2_qa_13">Super Bowl XXXIII</span> führte und derzeit Denvers <span id="a_SuperBowl50_2_qa_3">Executive Vice President of Football Operations und General Manager</span> ist.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_SuperBowl50_2_qa_0','#a_SuperBowl50_2_qa_1','#a_SuperBowl50_2_qa_2','#a_SuperBowl50_2_qa_3','#a_SuperBowl50_2_qa_4','#a_SuperBowl50_2_qa_5','#a_SuperBowl50_2_qa_6','#a_SuperBowl50_2_qa_7','#a_SuperBowl50_2_qa_8','#a_SuperBowl50_2_qa_9','#a_SuperBowl50_2_qa_10','#a_SuperBowl50_2_qa_11','#a_SuperBowl50_2_qa_12','#a_SuperBowl50_2_qa_13','#a_SuperBowl50_2_qa_14','#a_SuperBowl50_2_qa_15','#a_SuperBowl50_2_qa_16'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_SuperBowl50_2_1280_720.png';
a.click();});}},data: { trial_name: "a_SuperBowl50_2"}
};
var a_SuperBowl50_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie alt war Peyton Manning, als er im Super Bowl 50 spielte?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie alt war Peyton Manning, als er im Super Bowl 50 spielte?`, correct_answer: "39", trial_name: "a_SuperBowl50_2_qa_0"} 
};var a_SuperBowl50_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer hielt zuvor den Rekord als ältester Quarterback, der in einem Super Bowl mitspielte?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer hielt zuvor den Rekord als ältester Quarterback, der in einem Super Bowl mitspielte?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_1"} 
};var a_SuperBowl50_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie alt war John Elway, als er im Super Bowl XXXIII spielte?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie alt war John Elway, als er im Super Bowl XXXIII spielte?`, correct_answer: "38", trial_name: "a_SuperBowl50_2_qa_2"} 
};var a_SuperBowl50_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Position hat John Elway derzeit im Broncos-Franchise inne?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Position hat John Elway derzeit im Broncos-Franchise inne?`, correct_answer: "Executive Vice President of Football Operations und General Manager", trial_name: "a_SuperBowl50_2_qa_3"} 
};var a_SuperBowl50_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Für wen spielte John Elway im Super Bowl XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Für wen spielte John Elway im Super Bowl XXXIII?`, correct_answer: "Broncos", trial_name: "a_SuperBowl50_2_qa_4"} 
};var a_SuperBowl50_2_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welches Team gewann den Super Bowl XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welches Team gewann den Super Bowl XXXIII?`, correct_answer: "Broncos", trial_name: "a_SuperBowl50_2_qa_5"} 
};var a_SuperBowl50_2_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer ist der General Manager der Broncos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer ist der General Manager der Broncos?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_6"} 
};var a_SuperBowl50_2_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie alt war Elway während seines Sieges im Super Bowl XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie alt war Elway während seines Sieges im Super Bowl XXXIII?`, correct_answer: "38", trial_name: "a_SuperBowl50_2_qa_7"} 
};var a_SuperBowl50_2_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer hält den Rekord für den ältesten Quarterback in einem Super Bowl-Spiel?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer hält den Rekord für den ältesten Quarterback in einem Super Bowl-Spiel?`, correct_answer: "Peyton Manning", trial_name: "a_SuperBowl50_2_qa_8"} 
};var a_SuperBowl50_2_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Für wie viele Teams, die den Super Bowl erreichten, spielte Manning?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Für wie viele Teams, die den Super Bowl erreichten, spielte Manning?`, correct_answer: "zwei", trial_name: "a_SuperBowl50_2_qa_9"} 
};var a_SuperBowl50_2_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele verschiedene Teams führte Peyton Manning zum Super Bowl?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele verschiedene Teams führte Peyton Manning zum Super Bowl?`, correct_answer: "zwei", trial_name: "a_SuperBowl50_2_qa_10"} 
};var a_SuperBowl50_2_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer ist der älteste Quarterback, der je in einem Super Bowl gespielt hat?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer ist der älteste Quarterback, der je in einem Super Bowl gespielt hat?`, correct_answer: "Peyton Manning", trial_name: "a_SuperBowl50_2_qa_11"} 
};var a_SuperBowl50_2_qa_12 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer war vor Manning der älteste Quarterback, der je in einem Super Bowl gespielt hat?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer war vor Manning der älteste Quarterback, der je in einem Super Bowl gespielt hat?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_12"} 
};var a_SuperBowl50_2_qa_13 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welchen Super Bowl gewann Elway im Alter von 38 Jahren?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welchen Super Bowl gewann Elway im Alter von 38 Jahren?`, correct_answer: "Super Bowl XXXIII", trial_name: "a_SuperBowl50_2_qa_13"} 
};var a_SuperBowl50_2_qa_14 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer war der erste Quarterback, der zwei Teams zu mehr als einem Super Bowl führte?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer war der erste Quarterback, der zwei Teams zu mehr als einem Super Bowl führte?`, correct_answer: "Peyton Manning", trial_name: "a_SuperBowl50_2_qa_14"} 
};var a_SuperBowl50_2_qa_15 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie alt war Manning, als er im Super Bowl 50 mitspielte?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie alt war Manning, als er im Super Bowl 50 mitspielte?`, correct_answer: "39", trial_name: "a_SuperBowl50_2_qa_15"} 
};var a_SuperBowl50_2_qa_16 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie heißt der Quarterback, der während des Super Bowl XXXIII 38 Jahre alt war?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie heißt der Quarterback, der während des Super Bowl XXXIII 38 Jahre alt war?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_16"} 
};var a_SuperBowl50_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Die <span id="a_SuperBowl50_3_qa_0"><span id="a_SuperBowl50_3_qa_10">sechs</span></span>-malige Grammy-Gewinnerin und <span id="a_SuperBowl50_3_qa_2">Oscar</span>-Nominierte <span id="a_SuperBowl50_3_qa_5"><span id="a_SuperBowl50_3_qa_7"><span id="a_SuperBowl50_3_qa_9">Lady Gaga</span></span></span> führte <span id="a_SuperBowl50_3_qa_1"><span id="a_SuperBowl50_3_qa_3">die Nationalhymne</span></span> auf, während die Oscar-Gewinnerin <span id="a_SuperBowl50_3_qa_6"><span id="a_SuperBowl50_3_qa_8"><span id="a_SuperBowl50_3_qa_11">Marlee Matlin</span></span></span> <span id="a_SuperBowl50_3_qa_4">in die Amerikanische Gebärdensprache</span> (ASL) übersetzte.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_SuperBowl50_3_qa_0','#a_SuperBowl50_3_qa_1','#a_SuperBowl50_3_qa_2','#a_SuperBowl50_3_qa_3','#a_SuperBowl50_3_qa_4','#a_SuperBowl50_3_qa_5','#a_SuperBowl50_3_qa_6','#a_SuperBowl50_3_qa_7','#a_SuperBowl50_3_qa_8','#a_SuperBowl50_3_qa_9','#a_SuperBowl50_3_qa_10','#a_SuperBowl50_3_qa_11'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_SuperBowl50_3_1280_720.png';
a.click();});}},data: { trial_name: "a_SuperBowl50_3"}
};
var a_SuperBowl50_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele Grammys gewann Lady Gaga?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele Grammys gewann Lady Gaga?`, correct_answer: "sechs", trial_name: "a_SuperBowl50_3_qa_0"} 
};var a_SuperBowl50_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was hat Lady Gaga gesungen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was hat Lady Gaga gesungen?`, correct_answer: "die Nationalhymne", trial_name: "a_SuperBowl50_3_qa_1"} 
};var a_SuperBowl50_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Auszeichnung erhielt Marlee Matlin?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Auszeichnung erhielt Marlee Matlin?`, correct_answer: "Oscar", trial_name: "a_SuperBowl50_3_qa_2"} 
};var a_SuperBowl50_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was übersetzte Marlee Matlin?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was übersetzte Marlee Matlin?`, correct_answer: "die Nationalhymne", trial_name: "a_SuperBowl50_3_qa_3"} 
};var a_SuperBowl50_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In welche Sprache übersetzte Marlee Matlin die Nationalhymne?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In welche Sprache übersetzte Marlee Matlin die Nationalhymne?`, correct_answer: "in die Amerikanische Gebärdensprache", trial_name: "a_SuperBowl50_3_qa_4"} 
};var a_SuperBowl50_3_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer sang die Nationalhymne?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer sang die Nationalhymne?`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_5"} 
};var a_SuperBowl50_3_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Schauspielerin übersetzte beim Spiel in die Amerikanische Gebärdensprache?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Schauspielerin übersetzte beim Spiel in die Amerikanische Gebärdensprache?`, correct_answer: "Marlee Matlin", trial_name: "a_SuperBowl50_3_qa_6"} 
};var a_SuperBowl50_3_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer sang die Nationalhymne beim Super Bowl 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer sang die Nationalhymne beim Super Bowl 50?`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_7"} 
};var a_SuperBowl50_3_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welcher Schauspieler übersetzte beim Super Bowl 50 die Nationalhymne in die Gebärdensprache?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welcher Schauspieler übersetzte beim Super Bowl 50 die Nationalhymne in die Gebärdensprache?`, correct_answer: "Marlee Matlin", trial_name: "a_SuperBowl50_3_qa_8"} 
};var a_SuperBowl50_3_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer sang die Nationalhymne beim Super Bowl 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer sang die Nationalhymne beim Super Bowl 50?`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_9"} 
};var a_SuperBowl50_3_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele Grammy Awards hat Lady Gaga laut Text gewonnen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele Grammy Awards hat Lady Gaga laut Text gewonnen?`, correct_answer: "sechs", trial_name: "a_SuperBowl50_3_qa_10"} 
};var a_SuperBowl50_3_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer übersetzte die Nationalhymne beim Super Bowl 50 in die Gebärdensprache?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer übersetzte die Nationalhymne beim Super Bowl 50 in die Gebärdensprache?`, correct_answer: "Marlee Matlin", trial_name: "a_SuperBowl50_3_qa_11"} 
};var a_Warsaw_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In der Nähe, in <span id="a_Warsaw_0_qa_0">Ogród Saski</span> (<span id="a_Warsaw_0_qa_1">Sächsischer Garten</span>), war das Sommertheater von <span id="a_Warsaw_0_qa_2">1870 bis 1939</span> in Betrieb. In der Zwischenkriegszeit umfasste der Theaterkomplex auch das <span id="a_Warsaw_0_qa_3">Momus</span>, Warschaus erstes literarisches Kabarett, und Leon Schillers Musiktheater Melodram. <span id="a_Warsaw_0_qa_4">Das Wojciech Bogusławski Theater</span> (1922-26) war das beste Beispiel für „Polnisches Monumentaltheater“. Ab Mitte der 1930er Jahre beherbergte das Gebäude des Teatr Wielki auch das Upati Institut für darstellende Kunst - die erste staatliche Akademie für Schauspielkunst mit einer Schauspielabteilung und einer Abteilung für Bühnenleitung.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Warsaw_0_qa_0','#a_Warsaw_0_qa_1','#a_Warsaw_0_qa_2','#a_Warsaw_0_qa_3','#a_Warsaw_0_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Warsaw_0_1280_720.png';
a.click();});}},data: { trial_name: "a_Warsaw_0"}
};
var a_Warsaw_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie lautet der Name der Sächsischen Gärten auf Polnisch?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie lautet der Name der Sächsischen Gärten auf Polnisch?`, correct_answer: "Ogród Saski", trial_name: "a_Warsaw_0_qa_0"} 
};var a_Warsaw_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wo befand sich das Sommertheater?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wo befand sich das Sommertheater?`, correct_answer: "Sächsischer Garten", trial_name: "a_Warsaw_0_qa_1"} 
};var a_Warsaw_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie lange war das Sommertheater in Betrieb?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie lange war das Sommertheater in Betrieb?`, correct_answer: "1870 bis 1939", trial_name: "a_Warsaw_0_qa_2"} 
};var a_Warsaw_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie hieß das erste literarische Kabarett Warschaus?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie hieß das erste literarische Kabarett Warschaus?`, correct_answer: "Momus", trial_name: "a_Warsaw_0_qa_3"} 
};var a_Warsaw_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welches Theater war das beste Beispiel für „Polnisches Monumentaltheater“?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welches Theater war das beste Beispiel für „Polnisches Monumentaltheater“?`, correct_answer: "Das Wojciech Bogusławski Theater", trial_name: "a_Warsaw_0_qa_4"} 
};var a_Warsaw_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Ihre lokalen Rivalen, <span id="a_Warsaw_1_qa_0">Polonia Warschau</span>, haben deutlich weniger Anhänger. Dennoch gelang es ihnen, die Ekstraklasa-Meisterschaft im Jahr 2000 zu gewinnen. Sie gewannen auch die Landesmeisterschaft von <span id="a_Warsaw_1_qa_1">1946</span> und holten <span id="a_Warsaw_1_qa_2">zwei Mal</span> den Pokal. Das Heimstadion Polonias befindet sich in der <span id="a_Warsaw_1_qa_3">Konwiktorska-Straße</span>, zehn Gehminuten nördlich der Altstadt. Polonia wurde 2013 <span id="a_Warsaw_1_qa_4">wegen seiner katastrophalen finanziellen Situation</span> aus der Spitzengruppe des Landes verwiesen. Sie spielen nun in der vierten Liga (5. Rang in Polen) – der untersten Profiliga in der Struktur des Polnischen Fußballverbandes (PZPN).</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Warsaw_1_qa_0','#a_Warsaw_1_qa_1','#a_Warsaw_1_qa_2','#a_Warsaw_1_qa_3','#a_Warsaw_1_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Warsaw_1_1280_720.png';
a.click();});}},data: { trial_name: "a_Warsaw_1"}
};
var a_Warsaw_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer gewann 2000 die Ekstraklasa-Meisterschaft?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer gewann 2000 die Ekstraklasa-Meisterschaft?`, correct_answer: "Polonia Warschau", trial_name: "a_Warsaw_1_qa_0"} 
};var a_Warsaw_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wann gewann Polonia Warschau vor 2000 die Landesmeisterschaft?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wann gewann Polonia Warschau vor 2000 die Landesmeisterschaft?`, correct_answer: "1946", trial_name: "a_Warsaw_1_qa_1"} 
};var a_Warsaw_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie oft hat Polonia den Pokal gewonnen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie oft hat Polonia den Pokal gewonnen?`, correct_answer: "zwei Mal", trial_name: "a_Warsaw_1_qa_2"} 
};var a_Warsaw_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wo befindet sich das Heimstadion Polonias?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wo befindet sich das Heimstadion Polonias?`, correct_answer: "Konwiktorska-Straße", trial_name: "a_Warsaw_1_qa_3"} 
};var a_Warsaw_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Warum wurde Polonia 2013 aus der Spitzengruppe des Landes verbannt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Warum wurde Polonia 2013 aus der Spitzengruppe des Landes verbannt?`, correct_answer: "wegen seiner katastrophalen finanziellen Situation", trial_name: "a_Warsaw_1_qa_4"} 
};var a_Warsaw_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Warschau war während seiner gesamten Existenz <span id="a_Warsaw_2_qa_0">eine multikulturelle Stadt</span>. Laut der Volkszählung von 1901 waren von <span id="a_Warsaw_2_qa_1">711.988</span> Einwohnern <span id="a_Warsaw_2_qa_2">56,2%</span> Katholiken, 35,7% Juden, 5% griechisch-orthodoxe Christen und <span id="a_Warsaw_2_qa_3">2,8%</span> Protestanten. Acht Jahre später, im Jahr 1909, gab es 281.754 Juden (36,9%), 18.189 Protestanten (2,4%) und 2.818 Mariaviten (0,4%). Dies führte zum Bau von Hunderten von religiösen Kultstätten in allen Teilen der Stadt. Die meisten von ihnen wurden nach dem Warschauer Aufstand von <span id="a_Warsaw_2_qa_4">1944</span> zerstört. Nach dem Krieg rieten die neuen kommunistischen Behörden Polens vom Kirchenbau ab und nur wenige wurden wiederaufgebaut.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Warsaw_2_qa_0','#a_Warsaw_2_qa_1','#a_Warsaw_2_qa_2','#a_Warsaw_2_qa_3','#a_Warsaw_2_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Warsaw_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Warsaw_2"}
};
var a_Warsaw_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Art von Stadt ist Warschau schon immer gewesen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Art von Stadt ist Warschau schon immer gewesen?`, correct_answer: "eine multikulturelle Stadt", trial_name: "a_Warsaw_2_qa_0"} 
};var a_Warsaw_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie groß war die Bevölkerung Warschaus im Jahr 1901?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie groß war die Bevölkerung Warschaus im Jahr 1901?`, correct_answer: "711.988", trial_name: "a_Warsaw_2_qa_1"} 
};var a_Warsaw_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welcher Prozentsatz der Warschauer Bevölkerung war im Jahr 1901 katholisch?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welcher Prozentsatz der Warschauer Bevölkerung war im Jahr 1901 katholisch?`, correct_answer: "56,2%", trial_name: "a_Warsaw_2_qa_2"} 
};var a_Warsaw_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welcher Prozentsatz der Bevölkerung Warschaus war 1901 protestantisch?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welcher Prozentsatz der Bevölkerung Warschaus war 1901 protestantisch?`, correct_answer: "2,8%", trial_name: "a_Warsaw_2_qa_3"} 
};var a_Warsaw_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wann wurden die meisten religiösen Kultstätten in Warschau zerstört?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wann wurden die meisten religiösen Kultstätten in Warschau zerstört?`, correct_answer: "1944", trial_name: "a_Warsaw_2_qa_4"} 
};var a_Warsaw_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Die erste Warschauer Börse wurde im Jahr <span id="a_Warsaw_4_qa_0">1817</span> gegründet und bis zum <span id="a_Warsaw_4_qa_1">Zweiten Weltkrieg</span> weitergeführt. Sie wurde <span id="a_Warsaw_4_qa_2">im April 1991</span> nach dem Ende der kommunistischen Kontrolle der Nachkriegszeit und der Wiedereinführung einer freien Marktwirtschaft wiederhergestellt. Heute ist die Warschauer Börse (WSE) laut vielen Indikatoren der größte Markt in der Region, mit <span id="a_Warsaw_4_qa_3">374</span> börsennotierten Unternehmen und einer Gesamtkapitalisierung von 162 584 Mio. EUR zum 31. August 2009. Von 1991 bis 2000 befand sich die Börse ironischerweise in dem Gebäude, das früher als <span id="a_Warsaw_4_qa_4">Sitz der Polnischen Vereinigten Arbeiterpartei</span> (PZPR) diente.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Warsaw_4_qa_0','#a_Warsaw_4_qa_1','#a_Warsaw_4_qa_2','#a_Warsaw_4_qa_3','#a_Warsaw_4_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Warsaw_4_1280_720.png';
a.click();});}},data: { trial_name: "a_Warsaw_4"}
};
var a_Warsaw_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wann wurde die erste Warschauer Börse gegründet?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wann wurde die erste Warschauer Börse gegründet?`, correct_answer: "1817", trial_name: "a_Warsaw_4_qa_0"} 
};var a_Warsaw_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was brachte die Warschauer Börse zum Stillstand?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was brachte die Warschauer Börse zum Stillstand?`, correct_answer: "Zweiten Weltkrieg", trial_name: "a_Warsaw_4_qa_1"} 
};var a_Warsaw_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wann wurde die Warschauer Börse wieder zum Leben erweckt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wann wurde die Warschauer Börse wieder zum Leben erweckt?`, correct_answer: "im April 1991", trial_name: "a_Warsaw_4_qa_2"} 
};var a_Warsaw_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele Unternehmen waren im August 2009 an der WSE gelistet?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele Unternehmen waren im August 2009 an der WSE gelistet?`, correct_answer: "374", trial_name: "a_Warsaw_4_qa_3"} 
};var a_Warsaw_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In wessen ehemaligem Hauptsitz befand sich die WSE bis 2000?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In wessen ehemaligem Hauptsitz befand sich die WSE bis 2000?`, correct_answer: "Sitz der Polnischen Vereinigten Arbeiterpartei", trial_name: "a_Warsaw_4_qa_4"} 
};var a_Normans_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Zwischen 1402 und 1405 eroberte die Expedition unter der Führung des normannischen Adligen Jean de Béthencourt und dem Poitevin Gadifer de la Salle die Kanarischen Inseln Lanzarote, Fuerteventura und El Hierro vor der Atlantikküste von <span id="a_Normans_4_qa_0">Afrika</span>. Ihre Truppen wurden in der Normandie und der Gascogne versammelt und später durch kastilische Kolonisten aufgestockt.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Normans_4_qa_0'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Normans_4_1280_720.png';
a.click();});}},data: { trial_name: "a_Normans_4"}
};
var a_Normans_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Vor der Küste welches Kontinents liegen die Kanarischen Inseln?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Vor der Küste welches Kontinents liegen die Kanarischen Inseln?`, correct_answer: "Afrika", trial_name: "a_Normans_4_qa_0"} 
};var a_NikolaTesla_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Nachdem er Edisons Firma verlassen hatte, verbündete sich <span id="a_NikolaTesla_1_qa_9">Tesla</span> <span id="a_NikolaTesla_1_qa_6">1886</span> mit zwei Geschäftsleuten, <span id="a_NikolaTesla_1_qa_0"><span id="a_NikolaTesla_1_qa_5">Robert Lane und Benjamin Vail</span></span>, die sich bereit erklärten, ein Elektrikunternehmen in Teslas Namen, <span id="a_NikolaTesla_1_qa_1"><span id="a_NikolaTesla_1_qa_7">Tesla Electric Light & Manufacturing</span></span> zu finanzieren. <span id="a_NikolaTesla_1_qa_2">Das Unternehmen installierte <span id="a_NikolaTesla_1_qa_4">Lichtbogenbeleuchtungssysteme</span>, die von Tesla entworfen wurden</span>, und besaß auch Entwürfe für Lichtmaschinenkommutatoren, die ersten <span id="a_NikolaTesla_1_qa_3">Patente</span>, die Tesla in den USA angemeldet hatte.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_NikolaTesla_1_qa_0','#a_NikolaTesla_1_qa_1','#a_NikolaTesla_1_qa_2','#a_NikolaTesla_1_qa_3','#a_NikolaTesla_1_qa_4','#a_NikolaTesla_1_qa_5','#a_NikolaTesla_1_qa_6','#a_NikolaTesla_1_qa_7','#a_NikolaTesla_1_qa_8','#a_NikolaTesla_1_qa_9'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_NikolaTesla_1_1280_720.png';
a.click();});}},data: { trial_name: "a_NikolaTesla_1"}
};
var a_NikolaTesla_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Mit wem verbündete sich Tesla 1886?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Mit wem verbündete sich Tesla 1886?`, correct_answer: "Robert Lane und Benjamin Vail", trial_name: "a_NikolaTesla_1_qa_0"} 
};var a_NikolaTesla_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was finanzierten Lane und Vail?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was finanzierten Lane und Vail?`, correct_answer: "Tesla Electric Light & Manufacturing", trial_name: "a_NikolaTesla_1_qa_1"} 
};var a_NikolaTesla_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In welchem Bereich war Tesla Electric Light & Manufacturing tätig?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In welchem Bereich war Tesla Electric Light & Manufacturing tätig?`, correct_answer: "Das Unternehmen installierte Lichtbogenbeleuchtungssysteme, die von Tesla entworfen wurden", trial_name: "a_NikolaTesla_1_qa_2"} 
};var a_NikolaTesla_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was erhielt Tesla nach der Gründung seines Unternehmens zum ersten Mal?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was erhielt Tesla nach der Gründung seines Unternehmens zum ersten Mal?`, correct_answer: "Patente", trial_name: "a_NikolaTesla_1_qa_3"} 
};var a_NikolaTesla_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was wurde in Teslas Firma produziert? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was wurde in Teslas Firma produziert? `, correct_answer: "Lichtbogenbeleuchtungssysteme", trial_name: "a_NikolaTesla_1_qa_4"} 
};var a_NikolaTesla_1_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie hießen die neuen Partner von Tesla?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie hießen die neuen Partner von Tesla?`, correct_answer: "Robert Lane und Benjamin Vail", trial_name: "a_NikolaTesla_1_qa_5"} 
};var a_NikolaTesla_1_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wann entstand die Partnerschaft zwischen Tesla, Lane und Vail?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wann entstand die Partnerschaft zwischen Tesla, Lane und Vail?`, correct_answer: "1886", trial_name: "a_NikolaTesla_1_qa_6"} 
};var a_NikolaTesla_1_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie hieß das Unternehmen, das die Geschäftsleute finanzierten? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie hieß das Unternehmen, das die Geschäftsleute finanzierten? `, correct_answer: "Tesla Electric Light & Manufacturing", trial_name: "a_NikolaTesla_1_qa_7"} 
};var a_NikolaTesla_1_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In welchem Bereich war Tesla Electric Light & Manufacturing tätig?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In welchem Bereich war Tesla Electric Light & Manufacturing tätig?`, correct_answer: "Das Unternehmen installierte Lichtbogenbeleuchtungssysteme", trial_name: "a_NikolaTesla_1_qa_8"} 
};var a_NikolaTesla_1_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer entwarf die Beleuchtungssysteme, die Tesla Electric Light & Manufacturing installierte?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer entwarf die Beleuchtungssysteme, die Tesla Electric Light & Manufacturing installierte?`, correct_answer: "Tesla", trial_name: "a_NikolaTesla_1_qa_9"} 
};var a_NikolaTesla_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In den Jahren nach diesen Gerüchten gewannen weder Tesla noch <span id="a_NikolaTesla_3_qa_1">Edison</span> den Nobelpreis (obwohl Edison 1915 eine von <span id="a_NikolaTesla_3_qa_0">38</span> möglichen Nominierungen erhielt und Tesla <span id="a_NikolaTesla_3_qa_2">1937</span> eine von 38 möglichen Nominierungen).</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_NikolaTesla_3_qa_0','#a_NikolaTesla_3_qa_1','#a_NikolaTesla_3_qa_2'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_NikolaTesla_3_1280_720.png';
a.click();});}},data: { trial_name: "a_NikolaTesla_3"}
};
var a_NikolaTesla_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele mögliche Nominierungen für den Preis gab es 1915?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele mögliche Nominierungen für den Preis gab es 1915?`, correct_answer: "38", trial_name: "a_NikolaTesla_3_qa_0"} 
};var a_NikolaTesla_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer erhielt 1915 eine Nominierung?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer erhielt 1915 eine Nominierung?`, correct_answer: "Edison", trial_name: "a_NikolaTesla_3_qa_1"} 
};var a_NikolaTesla_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In welchem Jahr erhielt Tesla eine Nominierung für den Nobelpreis?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In welchem Jahr erhielt Tesla eine Nominierung für den Nobelpreis?`, correct_answer: "1937", trial_name: "a_NikolaTesla_3_qa_2"} 
};var a_NikolaTesla_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Seine religiösen Ansichten bleiben aufgrund einiger anderer Aussagen jedoch <span id="a_NikolaTesla_4_qa_1">ungewiss</span>. In seinem Artikel <span id="a_NikolaTesla_4_qa_0">„A Machine to End <span id="a_NikolaTesla_4_qa_2">War</span>“</span>, der 1937 veröffentlicht wurde, sagte Tesla beispielsweise:</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_NikolaTesla_4_qa_0','#a_NikolaTesla_4_qa_1','#a_NikolaTesla_4_qa_2'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_NikolaTesla_4_1280_720.png';
a.click();});}},data: { trial_name: "a_NikolaTesla_4"}
};
var a_NikolaTesla_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welcher Artikel wurde 1937 veröffentlicht?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welcher Artikel wurde 1937 veröffentlicht?`, correct_answer: "„A Machine to End War“", trial_name: "a_NikolaTesla_4_qa_0"} 
};var a_NikolaTesla_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie lauten aufgrund bestimmter Aussagen seine religiösen Ansichten?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie lauten aufgrund bestimmter Aussagen seine religiösen Ansichten?`, correct_answer: "ungewiss", trial_name: "a_NikolaTesla_4_qa_1"} 
};var a_NikolaTesla_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was sollte die Maschine im Titel des Artikels beenden?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was sollte die Maschine im Titel des Artikels beenden?`, correct_answer: "War", trial_name: "a_NikolaTesla_4_qa_2"} 
};var a_Computationalcomplexitytheory_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Die <span id="a_Computationalcomplexitytheory_0_qa_0">Komplexitätstheorie</span> ist ein Zweig der Berechnungstheorie in der theoretischen Informatik, der sich darauf konzentriert, <span id="a_Computationalcomplexitytheory_0_qa_2">Rechenprobleme</span> <span id="a_Computationalcomplexitytheory_0_qa_1">nach ihrer inhärenten Schwierigkeit</span> zu klassifizieren und diese Klassen miteinander in Beziehung zu setzen. Unter einem Rechenproblem versteht man eine Aufgabe, die grundsätzlich von einem Computer gelöst werden kann. Dies ist gleichbedeutend mit der Aussage, dass das Problem durch die mechanische Anwendung mathematischer Schritte, beispielsweise durch einen Algorithmus, gelöst werden kann.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Computationalcomplexitytheory_0_qa_0','#a_Computationalcomplexitytheory_0_qa_1','#a_Computationalcomplexitytheory_0_qa_2'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Computationalcomplexitytheory_0_1280_720.png';
a.click();});}},data: { trial_name: "a_Computationalcomplexitytheory_0"}
};
var a_Computationalcomplexitytheory_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welcher Zweig der theoretischen Informatik beschäftigt sich mit der breiten Klassifizierung von Rechenproblemen nach Schwierigkeit und Beziehungsklassen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welcher Zweig der theoretischen Informatik beschäftigt sich mit der breiten Klassifizierung von Rechenproblemen nach Schwierigkeit und Beziehungsklassen?`, correct_answer: "Komplexitätstheorie", trial_name: "a_Computationalcomplexitytheory_0_qa_0"} 
};var a_Computationalcomplexitytheory_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Nach welchem Hauptattribut werden Rechenprobleme unter Verwendung der Komplexitätstheorie klassifiziert? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Nach welchem Hauptattribut werden Rechenprobleme unter Verwendung der Komplexitätstheorie klassifiziert? `, correct_answer: "nach ihrer inhärenten Schwierigkeit", trial_name: "a_Computationalcomplexitytheory_0_qa_1"} 
};var a_Computationalcomplexitytheory_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie lautet der Begriff für eine Aufgabe, die sich im Allgemeinen für die Lösung durch einen Computer anbietet?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie lautet der Begriff für eine Aufgabe, die sich im Allgemeinen für die Lösung durch einen Computer anbietet?`, correct_answer: "Rechenprobleme", trial_name: "a_Computationalcomplexitytheory_0_qa_2"} 
};var a_Computationalcomplexitytheory_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Bei der Betrachtung von Rechenproblemen stellt ein String in einem Alphabet eine <span id="a_Computationalcomplexitytheory_1_qa_0">Probleminstanz</span> dar. Normalerweise wird <span id="a_Computationalcomplexitytheory_1_qa_1">das binäre Alphabet</span> (d.h. die Menge {0,1}) als Alphabet angenommen, woraus folgt, dass die Strings <span id="a_Computationalcomplexitytheory_1_qa_2">Bitketten</span> sind. Wie in einem realen Computer müssen mathematische Objekte, die keine Bitketten sind, entsprechend kodiert werden. So können beispielsweise ganze Zahlen in <span id="a_Computationalcomplexitytheory_1_qa_3">binärer Notation</span> dargestellt und Graphen direkt über ihre <span id="a_Computationalcomplexitytheory_1_qa_4">Adjazenzmatrizen</span> oder durch Kodierung der Adjazenzlisten in binärer Form kodiert werden.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Computationalcomplexitytheory_1_qa_0','#a_Computationalcomplexitytheory_1_qa_1','#a_Computationalcomplexitytheory_1_qa_2','#a_Computationalcomplexitytheory_1_qa_3','#a_Computationalcomplexitytheory_1_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Computationalcomplexitytheory_1_1280_720.png';
a.click();});}},data: { trial_name: "a_Computationalcomplexitytheory_1"}
};
var a_Computationalcomplexitytheory_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Als was kann ein String in einem Alphabet bei der Betrachtung von Rechenproblemen beschrieben werden?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Als was kann ein String in einem Alphabet bei der Betrachtung von Rechenproblemen beschrieben werden?`, correct_answer: "Probleminstanz", trial_name: "a_Computationalcomplexitytheory_1_qa_0"} 
};var a_Computationalcomplexitytheory_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie lautet der Name des Alphabets, das am häufigsten in einer Probleminstanz verwendet wird?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie lautet der Name des Alphabets, das am häufigsten in einer Probleminstanz verwendet wird?`, correct_answer: "das binäre Alphabet", trial_name: "a_Computationalcomplexitytheory_1_qa_1"} 
};var a_Computationalcomplexitytheory_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie lautet ein anderer Begriff für die Zeichenkette einer Probleminstanz?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie lautet ein anderer Begriff für die Zeichenkette einer Probleminstanz?`, correct_answer: "Bitketten", trial_name: "a_Computationalcomplexitytheory_1_qa_2"} 
};var a_Computationalcomplexitytheory_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie werden bei der Kodierung von mathematischen Objekten ganze Zahlen üblicherweise ausgedrückt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie werden bei der Kodierung von mathematischen Objekten ganze Zahlen üblicherweise ausgedrückt?`, correct_answer: "binärer Notation", trial_name: "a_Computationalcomplexitytheory_1_qa_3"} 
};var a_Computationalcomplexitytheory_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Auf welche Weise können Graphen kodiert werden?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Auf welche Weise können Graphen kodiert werden?`, correct_answer: "Adjazenzmatrizen", trial_name: "a_Computationalcomplexitytheory_1_qa_4"} 
};var a_Computationalcomplexitytheory_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Es ist verlockend zu denken, dass Funktionsprobleme viel umfassender sind als Entscheidungsprobleme. Dies ist jedoch nicht der Fall, da Funktionsprobleme <span id="a_Computationalcomplexitytheory_2_qa_0">als Entscheidungsprobleme</span> umformuliert werden können. So kann beispielsweise die Multiplikation zweier Integerwerte als <span id="a_Computationalcomplexitytheory_2_qa_1">Dreiermenge</span> (a, b, c) ausgedrückt werden, so dass die Beziehung a × b = c gilt. Die Entscheidung, ob ein bestimmtes Tripel zu dieser Menge gehört, entspricht der Lösung des Problems der Multiplikation zweier Zahlen.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Computationalcomplexitytheory_2_qa_0','#a_Computationalcomplexitytheory_2_qa_1'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Computationalcomplexitytheory_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Computationalcomplexitytheory_2"}
};
var a_Computationalcomplexitytheory_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Als was können Funktionsprobleme typischerweise umformuliert werden?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Als was können Funktionsprobleme typischerweise umformuliert werden?`, correct_answer: "als Entscheidungsprobleme", trial_name: "a_Computationalcomplexitytheory_2_qa_0"} 
};var a_Computationalcomplexitytheory_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wenn zwei ganze Zahlen multipliziert werden und einen Wert ausgeben, wie heißt dann diese Ausdrucksmenge?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wenn zwei ganze Zahlen multipliziert werden und einen Wert ausgeben, wie heißt dann diese Ausdrucksmenge?`, correct_answer: "Dreiermenge", trial_name: "a_Computationalcomplexitytheory_2_qa_1"} 
};var a_Computationalcomplexitytheory_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Computationalcomplexitytheory_4_qa_0">Von vielen bekannten Komplexitätsklassen wird vermutet, sie seien ungleich</span>. Dies ist jedoch nicht bewiesen. Zum Beispiel ist <span id="a_Computationalcomplexitytheory_4_qa_1">P ⊆ NP ⊆ PP ⊆ PSPACE</span>, aber es ist möglich, dass P = PSPACE ist. Wenn P nicht gleich NP ist, dann ist auch P nicht gleich PSPACE. Da es viele bekannte Komplexitätsklassen, wie z.B. RP, BPP, PP, BQP, MA, PH, etc. gibt, die <span id="a_Computationalcomplexitytheory_4_qa_2">zwischen P und PSPACE</span> liegen, ist es möglich, dass alle diese Komplexitätsklassen in eine Klasse zerfallen. <span id="a_Computationalcomplexitytheory_4_qa_3">Der Nachweis, dass eine dieser Klassen ungleich ist</span>, wäre ein großer Durchbruch in der Komplexitätstheorie.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Computationalcomplexitytheory_4_qa_0','#a_Computationalcomplexitytheory_4_qa_1','#a_Computationalcomplexitytheory_4_qa_2','#a_Computationalcomplexitytheory_4_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Computationalcomplexitytheory_4_1280_720.png';
a.click();});}},data: { trial_name: "a_Computationalcomplexitytheory_4"}
};
var a_Computationalcomplexitytheory_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was ist die unbewiesene Annahme, die im Allgemeinen dem Wert von Komplexitätsklassen zugeschrieben wird?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was ist die unbewiesene Annahme, die im Allgemeinen dem Wert von Komplexitätsklassen zugeschrieben wird?`, correct_answer: "Von vielen bekannten Komplexitätsklassen wird vermutet, sie seien ungleich", trial_name: "a_Computationalcomplexitytheory_4_qa_0"} 
};var a_Computationalcomplexitytheory_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was ist ein Ausdruck, der verwendet werden kann, um die vermutete Ungleichheit von Komplexitätsklassen zu veranschaulichen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was ist ein Ausdruck, der verwendet werden kann, um die vermutete Ungleichheit von Komplexitätsklassen zu veranschaulichen?`, correct_answer: "P ⊆ NP ⊆ PP ⊆ PSPACE", trial_name: "a_Computationalcomplexitytheory_4_qa_1"} 
};var a_Computationalcomplexitytheory_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wo sind die Komplexitätsklassen RP, BPP, PP, BQP, MA und PH angesiedelt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wo sind die Komplexitätsklassen RP, BPP, PP, BQP, MA und PH angesiedelt?`, correct_answer: "zwischen P und PSPACE", trial_name: "a_Computationalcomplexitytheory_4_qa_2"} 
};var a_Computationalcomplexitytheory_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Beweise über Komplexitätsklassen wären ein theoretischer Wendepunkt für die Komplexitätstheorie?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Beweise über Komplexitätsklassen wären ein theoretischer Wendepunkt für die Komplexitätstheorie?`, correct_answer: "Der Nachweis, dass eine dieser Klassen ungleich ist", trial_name: "a_Computationalcomplexitytheory_4_qa_3"} 
};var a_Teacher_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">﻿In der Vergangenheit war die körperliche Bestrafung (Schläge mit der Hand, einem Paddel, einem Stock, einem Gürtel oder einer Rute, um Schülern <span id="a_Teacher_0_qa_4">körperliche Schmerzen</span> zuzufügen) <span id="a_Teacher_0_qa_0">eine der häufigsten Formen</span> der Disziplinierung an Schulen weltweit. In <span id="a_Teacher_0_qa_1">den meisten westlichen Ländern</span> und einigen anderen ist sie heute verboten, aber sie bleibt in den <span id="a_Teacher_0_qa_2">Vereinigten Staaten</span> nach einer <span id="a_Teacher_0_qa_3">Entscheidung des Obersten Gerichtshofs, dem US Supreme Court,</span> aus dem Jahr 1977, laut der Schläge mit dem Paddel nicht gegen die US-Verfassung verstoßen, legal.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Teacher_0_qa_0','#a_Teacher_0_qa_1','#a_Teacher_0_qa_2','#a_Teacher_0_qa_3','#a_Teacher_0_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Teacher_0_1280_720.png';
a.click();});}},data: { trial_name: "a_Teacher_0"}
};
var a_Teacher_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie verbreitet war die Form der körperlichen Bestrafung in der Vergangenheit?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie verbreitet war die Form der körperlichen Bestrafung in der Vergangenheit?`, correct_answer: "eine der häufigsten Formen", trial_name: "a_Teacher_0_qa_0"} 
};var a_Teacher_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wo wird körperliche Bestrafung nicht mehr praktiziert?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wo wird körperliche Bestrafung nicht mehr praktiziert?`, correct_answer: "den meisten westlichen Ländern", trial_name: "a_Teacher_0_qa_1"} 
};var a_Teacher_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In welchem ​​westlichen Land ist körperliche Bestrafung noch immer erlaubt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In welchem ​​westlichen Land ist körperliche Bestrafung noch immer erlaubt?`, correct_answer: "Vereinigten Staaten", trial_name: "a_Teacher_0_qa_2"} 
};var a_Teacher_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche US-amerikanische Einrichtung erklärte, dass körperliche Bestrafung mit der Verfassung vereinbar sei?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche US-amerikanische Einrichtung erklärte, dass körperliche Bestrafung mit der Verfassung vereinbar sei?`, correct_answer: "Entscheidung des Obersten Gerichtshofs, dem US Supreme Court,", trial_name: "a_Teacher_0_qa_3"} 
};var a_Teacher_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was bewirkt körperliche Bestrafung bei Schülern?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was bewirkt körperliche Bestrafung bei Schülern?`, correct_answer: "körperliche Schmerzen", trial_name: "a_Teacher_0_qa_4"} 
};var a_Teacher_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Lehrkräfte in Wales können registrierte Mitglieder von <span id="a_Teacher_1_qa_0"><span id="a_Teacher_1_qa_3">Gewerkschaften</span></span> wie ATL, NUT oder NASUWT sein. Berichten zufolge <span id="a_Teacher_1_qa_1">fällt</span> in den letzten Jahren in Wales das Durchschnittsalter der Lehrkräfte. Die Lehrkräfte sind also jünger als in der Vergangenheit. Ein wachsender Grund zur <span id="a_Teacher_1_qa_4">Sorge</span> sind Angriffe auf Lehrkräfte an walisischen Schulen, die <span id="a_Teacher_1_qa_2">zwischen 2005 und 2010</span> ein Allzeithoch erreichten.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Teacher_1_qa_0','#a_Teacher_1_qa_1','#a_Teacher_1_qa_2','#a_Teacher_1_qa_3','#a_Teacher_1_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Teacher_1_1280_720.png';
a.click();});}},data: { trial_name: "a_Teacher_1"}
};
var a_Teacher_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bei welcher Einrichtung können sich Lehrkräfte in Wales registrieren?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bei welcher Einrichtung können sich Lehrkräfte in Wales registrieren?`, correct_answer: "Gewerkschaften", trial_name: "a_Teacher_1_qa_0"} 
};var a_Teacher_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was passiert in Bezug auf das Durchschnittsalter der Lehrkräfte in Wales?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was passiert in Bezug auf das Durchschnittsalter der Lehrkräfte in Wales?`, correct_answer: "fällt", trial_name: "a_Teacher_1_qa_1"} 
};var a_Teacher_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wann war die Anzahl der Angriffe auf Lehrkräfte am höchsten?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wann war die Anzahl der Angriffe auf Lehrkräfte am höchsten?`, correct_answer: "zwischen 2005 und 2010", trial_name: "a_Teacher_1_qa_2"} 
};var a_Teacher_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was ist die NASUWT?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was ist die NASUWT?`, correct_answer: "Gewerkschaften", trial_name: "a_Teacher_1_qa_3"} 
};var a_Teacher_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wozu führen die Angriffe auf Lehrkräfte?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wozu führen die Angriffe auf Lehrkräfte?`, correct_answer: "Sorge", trial_name: "a_Teacher_1_qa_4"} 
};var a_Teacher_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Im Hinduismus werden spirituelle Lehrer/innen <span id="a_Teacher_3_qa_0">Guru</span> genannt und in vielen Traditionen des Hinduismus - insbesondere in den im <span id="a_Teacher_3_qa_3">Westen</span> verbreiteten - liegt ein <span id="a_Teacher_3_qa_1">extrem großer</span> Schwerpunkt auf der spirituellen Betreuung, in dessen Rahmen Gurus oft ein großes Maß an Kontrolle über das Leben <span id="a_Teacher_3_qa_2">ihrer Schüler/innen</span> ausüben.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Teacher_3_qa_0','#a_Teacher_3_qa_1','#a_Teacher_3_qa_2','#a_Teacher_3_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Teacher_3_1280_720.png';
a.click();});}},data: { trial_name: "a_Teacher_3"}
};
var a_Teacher_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie nennt man spirituelle Lehrer/innen im Hinduismus?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie nennt man spirituelle Lehrer/innen im Hinduismus?`, correct_answer: "Guru", trial_name: "a_Teacher_3_qa_0"} 
};var a_Teacher_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ist der Fokus auf spirituelle Betreuung im Hinduismus hoch oder gering?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ist der Fokus auf spirituelle Betreuung im Hinduismus hoch oder gering?`, correct_answer: "extrem großer", trial_name: "a_Teacher_3_qa_1"} 
};var a_Teacher_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wen kontrollieren Gurus?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wen kontrollieren Gurus?`, correct_answer: "ihrer Schüler/innen", trial_name: "a_Teacher_3_qa_2"} 
};var a_Teacher_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In welcher Region ist die spirituelle Betreuung extrem weit verbreitet?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In welcher Region ist die spirituelle Betreuung extrem weit verbreitet?`, correct_answer: "Westen", trial_name: "a_Teacher_3_qa_3"} 
};var a_Teacher_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Im tibetischen Buddhismus werden die Dharma-Lehrer/innen gewöhnlich als <span id="a_Teacher_4_qa_0">Lama</span> bezeichnet. Ein Lama, der sich durch <span id="a_Teacher_4_qa_4">Phowa und Siddhi</span> bewusst zur <span id="a_Teacher_4_qa_1">Wiedergeburt</span>, häufig <span id="a_Teacher_4_qa_3">mehrere Male</span>, entschlossen hat, um sein Bodhisattva-Gelübte fortsetzen zu können, wird <span id="a_Teacher_4_qa_2">Tulku</span> genannt.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Teacher_4_qa_0','#a_Teacher_4_qa_1','#a_Teacher_4_qa_2','#a_Teacher_4_qa_3','#a_Teacher_4_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Teacher_4_1280_720.png';
a.click();});}},data: { trial_name: "a_Teacher_4"}
};
var a_Teacher_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie nennt man Lehrer/innen im tibetischen Buddhismus?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie nennt man Lehrer/innen im tibetischen Buddhismus?`, correct_answer: "Lama", trial_name: "a_Teacher_4_qa_0"} 
};var a_Teacher_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wozu ist ein Lama entschlossen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wozu ist ein Lama entschlossen?`, correct_answer: "Wiedergeburt", trial_name: "a_Teacher_4_qa_1"} 
};var a_Teacher_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie nennt man ein Bodhisattva-Gelübde?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie nennt man ein Bodhisattva-Gelübde?`, correct_answer: "Tulku", trial_name: "a_Teacher_4_qa_2"} 
};var a_Teacher_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Zu wie vielen Wiedergeburten hat sich ein Lama bereiterklärt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Zu wie vielen Wiedergeburten hat sich ein Lama bereiterklärt?`, correct_answer: "mehrere Male", trial_name: "a_Teacher_4_qa_3"} 
};var a_Teacher_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was hat dem Lama dabei geholfen, sich zur Wiedergeburt zu entschließen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was hat dem Lama dabei geholfen, sich zur Wiedergeburt zu entschließen?`, correct_answer: "Phowa und Siddhi", trial_name: "a_Teacher_4_qa_4"} 
};var a_MartinLuther_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Luthers Schriften waren weit verbreitet und erreichten bereits <span id="a_MartinLuther_0_qa_0">1519</span> Frankreich, England und Italien. <span id="a_MartinLuther_0_qa_1">Studenten</span> strömten nach Wittenberg, um Luther sprechen zu hören. Er veröffentlichte einen kurzen Kommentar über die Galater und sein Werk über die Psalmen. Dieser <span id="a_MartinLuther_0_qa_2">frühe</span> Abschnitt von Luthers Karriere war einer seiner kreativsten und produktivsten. Drei seiner bekanntesten Werke wurden im Jahr <span id="a_MartinLuther_0_qa_3">1520</span> veröffentlicht: An den christlichen Adel deutscher Nation, Von der babylonischen Gefangenschaft der Kirche und <span id="a_MartinLuther_0_qa_4">Von der Freiheit eines Christenmenschen</span>.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_MartinLuther_0_qa_0','#a_MartinLuther_0_qa_1','#a_MartinLuther_0_qa_2','#a_MartinLuther_0_qa_3','#a_MartinLuther_0_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_MartinLuther_0_1280_720.png';
a.click();});}},data: { trial_name: "a_MartinLuther_0"}
};
var a_MartinLuther_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wann verbreiteten sich Luthers Schriften nach Frankreich, England und Italien?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wann verbreiteten sich Luthers Schriften nach Frankreich, England und Italien?`, correct_answer: "1519", trial_name: "a_MartinLuther_0_qa_0"} 
};var a_MartinLuther_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer reiste nach Wittenberg, um Luther sprechen zu hören?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer reiste nach Wittenberg, um Luther sprechen zu hören?`, correct_answer: "Studenten", trial_name: "a_MartinLuther_0_qa_1"} 
};var a_MartinLuther_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welcher Abschnitt von Luthers Karriere war einer seiner produktivsten?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welcher Abschnitt von Luthers Karriere war einer seiner produktivsten?`, correct_answer: "frühe", trial_name: "a_MartinLuther_0_qa_2"} 
};var a_MartinLuther_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wann wurden einige der bekanntesten Werke Luthers veröffentlicht?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wann wurden einige der bekanntesten Werke Luthers veröffentlicht?`, correct_answer: "1520", trial_name: "a_MartinLuther_0_qa_3"} 
};var a_MartinLuther_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welches andere Werk gab Luther neben An den christlichen Adel deutscher Nation und Von der babylonischen Gefangenschaft der Kirche im Jahr 1520 heraus?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welches andere Werk gab Luther neben An den christlichen Adel deutscher Nation und Von der babylonischen Gefangenschaft der Kirche im Jahr 1520 heraus?`, correct_answer: "Von der Freiheit eines Christenmenschen", trial_name: "a_MartinLuther_0_qa_4"} 
};var a_MartinLuther_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Später wurde ein Stück Papier entdeckt, auf dem Luther <span id="a_MartinLuther_4_qa_0">seine letzte Schrift</span> verfasst hatte. Der Text war in <span id="a_MartinLuther_4_qa_1">Lateinisch</span> geschrieben, abgesehen von den Worten <span id="a_MartinLuther_4_qa_2">„Wir sind Bettler”,</span> welche er auf Deutsch niederschrieb.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_MartinLuther_4_qa_0','#a_MartinLuther_4_qa_1','#a_MartinLuther_4_qa_2'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_MartinLuther_4_1280_720.png';
a.click();});}},data: { trial_name: "a_MartinLuther_4"}
};
var a_MartinLuther_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Schrift Luthers wurde später entdeckt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Schrift Luthers wurde später entdeckt?`, correct_answer: "seine letzte Schrift", trial_name: "a_MartinLuther_4_qa_0"} 
};var a_MartinLuther_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In welcher Sprache war der größte Teil der Erklärung verfasst?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In welcher Sprache war der größte Teil der Erklärung verfasst?`, correct_answer: "Lateinisch", trial_name: "a_MartinLuther_4_qa_1"} 
};var a_MartinLuther_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welcher Teil von Luthers letzter Schrift war auf Deutsch?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welcher Teil von Luthers letzter Schrift war auf Deutsch?`, correct_answer: "„Wir sind Bettler”,", trial_name: "a_MartinLuther_4_qa_2"} 
};var a_SouthernCalifornia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Zu den professionellen Sportmannschaften in Südkalifornien gehören Mannschaften in der <span id="a_SouthernCalifornia_3_qa_0">NFL</span> (Los Angeles Rams, San Diego Chargers), <span id="a_SouthernCalifornia_3_qa_1">NBA</span> (Los Angeles Lakers, Los Angeles Clippers), <span id="a_SouthernCalifornia_3_qa_2">MLB</span> (Los Angeles Dodgers, Los Angeles Angels of Anaheim, San Diego Padres), NHL (<span id="a_SouthernCalifornia_3_qa_3">Los Angeles Kings</span>, Anaheim Ducks) und MLS (<span id="a_SouthernCalifornia_3_qa_4">LA Galaxy</span>).</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_SouthernCalifornia_3_qa_0','#a_SouthernCalifornia_3_qa_1','#a_SouthernCalifornia_3_qa_2','#a_SouthernCalifornia_3_qa_3','#a_SouthernCalifornia_3_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_SouthernCalifornia_3_1280_720.png';
a.click();});}},data: { trial_name: "a_SouthernCalifornia_3"}
};
var a_SouthernCalifornia_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Die Los Angeles Rams sind ein Beispiel für welche Art von Sportmannschaft?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Die Los Angeles Rams sind ein Beispiel für welche Art von Sportmannschaft?`, correct_answer: "NFL", trial_name: "a_SouthernCalifornia_3_qa_0"} 
};var a_SouthernCalifornia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Die Los Angeles Clippers sind eine Mannschaft in welcher ​​Sportart?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Die Los Angeles Clippers sind eine Mannschaft in welcher ​​Sportart?`, correct_answer: "NBA", trial_name: "a_SouthernCalifornia_3_qa_1"} 
};var a_SouthernCalifornia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Die Los Angeles Angels of Anaheim kommen aus welcher Sportart?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Die Los Angeles Angels of Anaheim kommen aus welcher Sportart?`, correct_answer: "MLB", trial_name: "a_SouthernCalifornia_3_qa_2"} 
};var a_SouthernCalifornia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welches ist neben den Anaheim Ducks das andere NHL-Team in Südkalifornien?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welches ist neben den Anaheim Ducks das andere NHL-Team in Südkalifornien?`, correct_answer: "Los Angeles Kings", trial_name: "a_SouthernCalifornia_3_qa_3"} 
};var a_SouthernCalifornia_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welches ist das einzige MLS-Team aus Südkalifornien?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welches ist das einzige MLS-Team aus Südkalifornien?`, correct_answer: "LA Galaxy", trial_name: "a_SouthernCalifornia_3_qa_4"} 
};var a_SouthernCalifornia_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Von 2005 bis <span id="a_SouthernCalifornia_4_qa_2">2014</span> gab es <span id="a_SouthernCalifornia_4_qa_1">zwei</span> Major League Soccer-Teams in Los Angeles ‐ LA Galaxy und Chivas USA ‐, die beide im <span id="a_SouthernCalifornia_4_qa_3">StubHub Center</span> spielten und lokale Rivalen waren. Allerdings wurden <span id="a_SouthernCalifornia_4_qa_0">Chivas</span> nach der MLS-Saison 2014 gesperrt und ab <span id="a_SouthernCalifornia_4_qa_4">2018</span> soll es wieder ein zweites MLS-Team geben.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_SouthernCalifornia_4_qa_0','#a_SouthernCalifornia_4_qa_1','#a_SouthernCalifornia_4_qa_2','#a_SouthernCalifornia_4_qa_3','#a_SouthernCalifornia_4_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_SouthernCalifornia_4_1280_720.png';
a.click();});}},data: { trial_name: "a_SouthernCalifornia_4"}
};
var a_SouthernCalifornia_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welches Team wurde von der MLS gesperrt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welches Team wurde von der MLS gesperrt?`, correct_answer: "Chivas", trial_name: "a_SouthernCalifornia_4_qa_0"} 
};var a_SouthernCalifornia_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele Teams hatte Los Angeles früher?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele Teams hatte Los Angeles früher?`, correct_answer: "zwei", trial_name: "a_SouthernCalifornia_4_qa_1"} 
};var a_SouthernCalifornia_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In welchem ​​Jahr wurde eine der beiden Fußballmannschaften gesperrt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In welchem ​​Jahr wurde eine der beiden Fußballmannschaften gesperrt?`, correct_answer: "2014", trial_name: "a_SouthernCalifornia_4_qa_2"} 
};var a_SouthernCalifornia_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie hieß das Stadion, in dem die Mannschaften spielten?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie hieß das Stadion, in dem die Mannschaften spielten?`, correct_answer: "StubHub Center", trial_name: "a_SouthernCalifornia_4_qa_3"} 
};var a_SouthernCalifornia_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Für welches Jahr ist die Rückkehr der gesperrten Mannschaft geplant?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Für welches Jahr ist die Rückkehr der gesperrten Mannschaft geplant?`, correct_answer: "2018", trial_name: "a_SouthernCalifornia_4_qa_4"} 
};var a_SkyUnitedKingdom_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Die Vereinbarungen enthalten feste jährliche Sendegebühren in Höhe von <span id="a_SkyUnitedKingdom_4_qa_0">30 Mio. GBP</span> für die Kanäle, wobei beide Kanalanbieter zusätzliche Zahlungen mit Obergrenzen sichern konnten, wenn ihre Kanäle bestimmte leistungsbezogene Ziele erfüllen. Derzeit gibt es <span id="a_SkyUnitedKingdom_4_qa_1">keine Angaben</span> dazu, ob die neue Vereinbarung die zusätzlichen Video-On-Demand- und High-Definition-Inhalte umfasst, die zuvor von BSkyB angeboten wurden. Im Rahmen des Abkommens einigten sich <span id="a_SkyUnitedKingdom_4_qa_3">BSkyB</span> und <span id="a_SkyUnitedKingdom_4_qa_2">Virgin Media</span> darauf, alle Verfahren gegeneinander vor dem Obersten Gerichtshof in Bezug auf das Angebot der jeweiligen <span id="a_SkyUnitedKingdom_4_qa_4">Basiskanäle</span> einzustellen.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_SkyUnitedKingdom_4_qa_0','#a_SkyUnitedKingdom_4_qa_1','#a_SkyUnitedKingdom_4_qa_2','#a_SkyUnitedKingdom_4_qa_3','#a_SkyUnitedKingdom_4_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_SkyUnitedKingdom_4_1280_720.png';
a.click();});}},data: { trial_name: "a_SkyUnitedKingdom_4"}
};
var a_SkyUnitedKingdom_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie hoch waren die jährlichen Sendegebühren für die Kanäle?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie hoch waren die jährlichen Sendegebühren für die Kanäle?`, correct_answer: "30 Mio. GBP", trial_name: "a_SkyUnitedKingdom_4_qa_0"} 
};var a_SkyUnitedKingdom_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Umfasst der neue Vertrag Video-on-Demand und High Definition?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Umfasst der neue Vertrag Video-on-Demand und High Definition?`, correct_answer: "keine Angaben", trial_name: "a_SkyUnitedKingdom_4_qa_1"} 
};var a_SkyUnitedKingdom_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welches Unternehmen hat zugestimmt, die Klage gegen BSkyB vor dem Obersten Gerichtshof einzustellen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welches Unternehmen hat zugestimmt, die Klage gegen BSkyB vor dem Obersten Gerichtshof einzustellen?`, correct_answer: "Virgin Media", trial_name: "a_SkyUnitedKingdom_4_qa_2"} 
};var a_SkyUnitedKingdom_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welches Unternehmen hat zugestimmt, die Klage gegen Virgin Media vor dem Obersten Gerichtshof einzustellen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welches Unternehmen hat zugestimmt, die Klage gegen Virgin Media vor dem Obersten Gerichtshof einzustellen?`, correct_answer: "BSkyB", trial_name: "a_SkyUnitedKingdom_4_qa_3"} 
};var a_SkyUnitedKingdom_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Worum ging es in den Gerichtsverfahren?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Worum ging es in den Gerichtsverfahren?`, correct_answer: "Basiskanäle", trial_name: "a_SkyUnitedKingdom_4_qa_4"} 
};var a_VictoriaAustralia_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In der Vergangenheit war Victoria die Heimat von Werken der <span id="a_VictoriaAustralia_2_qa_0">großen Automarken</span> Ford, Toyota und Holden. Allerdings werden die Schließungsankündigungen aller drei Unternehmen im 21. Jahrhundert dazu führen, dass Australien nicht länger eine Basis der weltweiten Automobilindustrie sein wird. Toyotas Erklärung vom Februar 2014 sieht als Schließungsjahr <span id="a_VictoriaAustralia_2_qa_1">2017</span> vor. Holdens Ankündigung erfolgte im <span id="a_VictoriaAustralia_2_qa_2">Mai 2013</span>, gefolgt von Fords Entscheidung im Dezember desselben Jahres (<span id="a_VictoriaAustralia_2_qa_4">Fords</span> Werke in Broadmeadows und Geelong in Victoria werden im <span id="a_VictoriaAustralia_2_qa_3">Oktober 2016</span> schließen).</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_VictoriaAustralia_2_qa_0','#a_VictoriaAustralia_2_qa_1','#a_VictoriaAustralia_2_qa_2','#a_VictoriaAustralia_2_qa_3','#a_VictoriaAustralia_2_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_VictoriaAustralia_2_1280_720.png';
a.click();});}},data: { trial_name: "a_VictoriaAustralia_2"}
};
var a_VictoriaAustralia_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Art von Produktionsstätte verliert Victoria bald?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Art von Produktionsstätte verliert Victoria bald?`, correct_answer: "großen Automarken", trial_name: "a_VictoriaAustralia_2_qa_0"} 
};var a_VictoriaAustralia_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wann wird Toyota laut Ankündigung das Werk in Victoria schließen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wann wird Toyota laut Ankündigung das Werk in Victoria schließen?`, correct_answer: "2017", trial_name: "a_VictoriaAustralia_2_qa_1"} 
};var a_VictoriaAustralia_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wann kündigte Holden an, das Werk in Victoria zu schließen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wann kündigte Holden an, das Werk in Victoria zu schließen?`, correct_answer: "Mai 2013", trial_name: "a_VictoriaAustralia_2_qa_2"} 
};var a_VictoriaAustralia_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wann werden Fords Produktionsstätten geschlossen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wann werden Fords Produktionsstätten geschlossen?`, correct_answer: "Oktober 2016", trial_name: "a_VictoriaAustralia_2_qa_3"} 
};var a_VictoriaAustralia_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Automarke wird in Broadmeadows produziert?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Automarke wird in Broadmeadows produziert?`, correct_answer: "Fords", trial_name: "a_VictoriaAustralia_2_qa_4"} 
};var a_VictoriaAustralia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Es gibt zudem mehrere kleinere Güterverkehrsunternehmen und zahlreiche Touristeneisenbahnen, die auf Strecken operieren, die früher Teil eines staatlichen Systems waren. Die Eisenbahn in Victoria fährt hauptsächlich auf der <span id="a_VictoriaAustralia_3_qa_0">Breitspur mit 1.600 mm (5 Fuß 3 Zoll)</span>. Die Fernrouten zwischen den Staaten sowie eine Reihe von Nebenstrecken im Westen des Bundesstaates wurden jedoch auf die <span id="a_VictoriaAustralia_3_qa_1">Normalspur von 1.435 mm (4 Fuß 8 1⁄2  Zoll)</span> umgestellt. Zwei touristische Eisenbahnen verkehren auf <span id="a_VictoriaAustralia_3_qa_2">760 mm (2 Fuß 6 Zoll) breiten Schmalspurschienen</span>, die Überreste von <span id="a_VictoriaAustralia_3_qa_4">fünf</span> ehemals staatseigenen Bahnen in <span id="a_VictoriaAustralia_3_qa_3">Berggebieten</span> sind.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_VictoriaAustralia_3_qa_0','#a_VictoriaAustralia_3_qa_1','#a_VictoriaAustralia_3_qa_2','#a_VictoriaAustralia_3_qa_3','#a_VictoriaAustralia_3_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_VictoriaAustralia_3_1280_720.png';
a.click();});}},data: { trial_name: "a_VictoriaAustralia_3"}
};
var a_VictoriaAustralia_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was ist die Spurweite der Eisenbahnstrecken in Victoria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was ist die Spurweite der Eisenbahnstrecken in Victoria?`, correct_answer: "Breitspur mit 1.600 mm (5 Fuß 3 Zoll)", trial_name: "a_VictoriaAustralia_3_qa_0"} 
};var a_VictoriaAustralia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Auf welches Maß wurden einige Linien im Westen von Victoria umgestellt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Auf welches Maß wurden einige Linien im Westen von Victoria umgestellt?`, correct_answer: "Normalspur von 1.435 mm (4 Fuß 8 1⁄2  Zoll)", trial_name: "a_VictoriaAustralia_3_qa_1"} 
};var a_VictoriaAustralia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Spurweite haben zwei Touristenstrecken?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Spurweite haben zwei Touristenstrecken?`, correct_answer: "760 mm (2 Fuß 6 Zoll) breiten Schmalspurschienen", trial_name: "a_VictoriaAustralia_3_qa_2"} 
};var a_VictoriaAustralia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wo wurden die Schmalspurbahnen in Victoria gebaut?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wo wurden die Schmalspurbahnen in Victoria gebaut?`, correct_answer: "Berggebieten", trial_name: "a_VictoriaAustralia_3_qa_3"} 
};var a_VictoriaAustralia_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele Schmalspurbahnen befanden sich früher in Staatsbesitz?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele Schmalspurbahnen befanden sich früher in Staatsbesitz?`, correct_answer: "fünf", trial_name: "a_VictoriaAustralia_3_qa_4"} 
};var a_Steamengine_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Die zum Aufkochen des Wassers und zur Bereitstellung des Dampfes benötigte Hitze kann verschiedenen Ursprungs sein, meistens stammt sie aus <span id="a_Steamengine_0_qa_0">der Verfeuerung brennbarer Materialien</span> mit entsprechender Luftzufuhr in einem geschlossenen Raum (wahlweise <span id="a_Steamengine_0_qa_1">Brennkammer</span> oder Feuerkammer genannt). In manchen Fällen ist die Wärmequelle ein Atomreaktor, Erdwärme, <span id="a_Steamengine_0_qa_2">Solarenergie</span> oder Abwärme von einem Verbrennungsmotor oder einem Industrieprozess. Im Fall von Modell- oder Spielzeugdampfmaschinen kann die Wärmequelle ein <span id="a_Steamengine_0_qa_3">elektrisches</span> Heizelement sein.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Steamengine_0_qa_0','#a_Steamengine_0_qa_1','#a_Steamengine_0_qa_2','#a_Steamengine_0_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Steamengine_0_1280_720.png';
a.click();});}},data: { trial_name: "a_Steamengine_0"}
};
var a_Steamengine_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was ist die gewöhnliche Wärmequelle zum Aufkochen von Wasser in der Dampfmaschine?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was ist die gewöhnliche Wärmequelle zum Aufkochen von Wasser in der Dampfmaschine?`, correct_answer: "der Verfeuerung brennbarer Materialien", trial_name: "a_Steamengine_0_qa_0"} 
};var a_Steamengine_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Abgesehen von Feuerkammer, welchen anderen Namen gibt für den Raum, in dem brennbares Material im Motor verfeuert wird?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Abgesehen von Feuerkammer, welchen anderen Namen gibt für den Raum, in dem brennbares Material im Motor verfeuert wird?`, correct_answer: "Brennkammer", trial_name: "a_Steamengine_0_qa_1"} 
};var a_Steamengine_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Art von Energiequelle kann neben der Wärme aus nuklearer und geothermaler Energie sowie der Abwärme von Verbrennungsmotoren die Hitze für eine Dampfmaschine liefern?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Art von Energiequelle kann neben der Wärme aus nuklearer und geothermaler Energie sowie der Abwärme von Verbrennungsmotoren die Hitze für eine Dampfmaschine liefern?`, correct_answer: "Solarenergie", trial_name: "a_Steamengine_0_qa_2"} 
};var a_Steamengine_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Art von Heizelement wird häufig in Spielzeugdampfmaschinen verwendet?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Art von Heizelement wird häufig in Spielzeugdampfmaschinen verwendet?`, correct_answer: "elektrisches", trial_name: "a_Steamengine_0_qa_3"} 
};var a_Steamengine_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Obwohl die Kolben-Dampfmaschine nicht mehr flächendeckend kommerziell genutzt wird, erforschen oder nutzen mehrere Unternehmen das Potential dieses Motors als Alternative zu Verbrennungsmotoren. Die Firma <span id="a_Steamengine_3_qa_0">Energiprojekt AB</span> in <span id="a_Steamengine_3_qa_1">Schweden</span> hat bei der Nutzung moderner Materialien zur Nutzung der Dampfenergie Fortschritte gemacht. Der Wirkungsgrad der Dampfmaschine von Energiprojekt erreicht <span id="a_Steamengine_3_qa_4">27-30 %</span> bei Hochdruck-Motoren. Es handelt sich um einen <span id="a_Steamengine_3_qa_2">5</span>-Zylinder-Zweitaktmotor (kein Verbundmotor) mit Heißdampf, der ca. 4 kg (<span id="a_Steamengine_3_qa_3">8.8</span> lb.) Dampf pro kWh verbraucht.[nicht in angegebener Quelle enthalten]</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Steamengine_3_qa_0','#a_Steamengine_3_qa_1','#a_Steamengine_3_qa_2','#a_Steamengine_3_qa_3','#a_Steamengine_3_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Steamengine_3_1280_720.png';
a.click();});}},data: { trial_name: "a_Steamengine_3"}
};
var a_Steamengine_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welches moderne Unternehmen hat insbesondere an einer Dampfmaschine mit modernen Materialien gearbeitet?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welches moderne Unternehmen hat insbesondere an einer Dampfmaschine mit modernen Materialien gearbeitet?`, correct_answer: "Energiprojekt AB", trial_name: "a_Steamengine_3_qa_0"} 
};var a_Steamengine_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wo ist Energiprojekt AB ansässig?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wo ist Energiprojekt AB ansässig?`, correct_answer: "Schweden", trial_name: "a_Steamengine_3_qa_1"} 
};var a_Steamengine_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele Zylinder hat der Motor von Energiprojekt AB?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele Zylinder hat der Motor von Energiprojekt AB?`, correct_answer: "5", trial_name: "a_Steamengine_3_qa_2"} 
};var a_Steamengine_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele Kilogramm Dampf pro Kilowattstunde verbraucht der Motor von Energiprojekt AB?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele Kilogramm Dampf pro Kilowattstunde verbraucht der Motor von Energiprojekt AB?`, correct_answer: "8.8", trial_name: "a_Steamengine_3_qa_3"} 
};var a_Steamengine_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Prozentzahl des Wirkungsgrades von Hochdruckmotoren hat die Maschine von Energiprojekt AB erreicht?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Prozentzahl des Wirkungsgrades von Hochdruckmotoren hat die Maschine von Energiprojekt AB erreicht?`, correct_answer: "27-30 %", trial_name: "a_Steamengine_3_qa_4"} 
};var a_1973oilcrisis_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Im Jahr <span id="a_1973oilcrisis_2_qa_1">1973</span> ernannte Nixon <span id="a_1973oilcrisis_2_qa_0">William E. Simon</span> zum ersten Direktor des Federal Energy Office (Bundesamt für Energie), einer zeitlich befristeten Organisation, die geschaffen wurde, <span id="a_1973oilcrisis_2_qa_2">um die Reaktion auf das Embargo zu koordinieren</span>. Simon teilte den Staaten für 1974 die gleiche Menge an inländischem Öl zu, die sie jeweils im Jahr 1972 verbraucht hatten. Das funktionierte für Staaten, deren Bevölkerung nicht wuchs. In anderen Staaten waren Schlangen an Tankstellen alltäglich. Die American Automobile Association (AAA, Automobilklub der USA) berichtete, dass in der letzten Februarwoche 1974 <span id="a_1973oilcrisis_2_qa_3">20 %</span> der Tankstellen in den USA über kein Benzin verfügten.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_1973oilcrisis_2_qa_0','#a_1973oilcrisis_2_qa_1','#a_1973oilcrisis_2_qa_2','#a_1973oilcrisis_2_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_1973oilcrisis_2_1280_720.png';
a.click();});}},data: { trial_name: "a_1973oilcrisis_2"}
};
var a_1973oilcrisis_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer war der erste Direktor des Federal Energy Office?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer war der erste Direktor des Federal Energy Office?`, correct_answer: "William E. Simon", trial_name: "a_1973oilcrisis_2_qa_0"} 
};var a_1973oilcrisis_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wann wurde er von Nixon ausgewählt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wann wurde er von Nixon ausgewählt?`, correct_answer: "1973", trial_name: "a_1973oilcrisis_2_qa_1"} 
};var a_1973oilcrisis_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Warum wurde diese zeitlich befristete Organisation geschaffen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Warum wurde diese zeitlich befristete Organisation geschaffen?`, correct_answer: "um die Reaktion auf das Embargo zu koordinieren", trial_name: "a_1973oilcrisis_2_qa_2"} 
};var a_1973oilcrisis_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welchem Prozentsatz an Tankstellen ging der AAA zufolge das Benzin aus?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welchem Prozentsatz an Tankstellen ging der AAA zufolge das Benzin aus?`, correct_answer: "20 %", trial_name: "a_1973oilcrisis_2_qa_3"} 
};var a_Apolloprogram_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Mit einem Budget von 207.000 € wurden die noch vorhandenen Übertragungsdaten von Apollo 11 von <span id="a_Apolloprogram_4_qa_0">Nafzger</span> zusammengestellt und zur Restauration an <span id="a_Apolloprogram_4_qa_3">Lowry Digital</span> übergeben. Das Video wurde bearbeitet, um das Rauschen und die Kameraverwackelungen zu entfernen, <span id="a_Apolloprogram_4_qa_1">ohne die historische Legitimität</span> zu zerstören. Die Bilder stammten von Bändern aus Australien, dem Archiv von CBS News und von am Johnson Space Center gemachten <span id="a_Apolloprogram_4_qa_2">Kinescope-Aufnahmen</span>. Das restaurierte Video, nach wie vor in <span id="a_Apolloprogram_4_qa_4">Schwarz-Weiß</span>, enthält konservative, digitale Verbesserungen, aber keine Verbesserungen der Tonqualität.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Apolloprogram_4_qa_0','#a_Apolloprogram_4_qa_1','#a_Apolloprogram_4_qa_2','#a_Apolloprogram_4_qa_3','#a_Apolloprogram_4_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Apolloprogram_4_1280_720.png';
a.click();});}},data: { trial_name: "a_Apolloprogram_4"}
};
var a_Apolloprogram_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer stellte die originalen, noch vorhandenen Landedaten von Apollo 11 zusammen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer stellte die originalen, noch vorhandenen Landedaten von Apollo 11 zusammen?`, correct_answer: "Nafzger", trial_name: "a_Apolloprogram_4_qa_0"} 
};var a_Apolloprogram_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Konnten die Bänder restauriert und verarbeitet werden, ohne ihre historische Legitimität zu zerstören, oder verloren Teile der Bänder Legitimität?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Konnten die Bänder restauriert und verarbeitet werden, ohne ihre historische Legitimität zu zerstören, oder verloren Teile der Bänder Legitimität?`, correct_answer: "ohne die historische Legitimität", trial_name: "a_Apolloprogram_4_qa_1"} 
};var a_Apolloprogram_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Arten von Aufnahmen vom Johnson Space Center wurde verwendet, um bei der Restaurierung der originalen Bänder zu helfen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Arten von Aufnahmen vom Johnson Space Center wurde verwendet, um bei der Restaurierung der originalen Bänder zu helfen?`, correct_answer: "Kinescope-Aufnahmen", trial_name: "a_Apolloprogram_4_qa_2"} 
};var a_Apolloprogram_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welches Unternehmen wurde damit beauftragt, zu versuchen, die originalen Bänder zu restaurieren?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welches Unternehmen wurde damit beauftragt, zu versuchen, die originalen Bänder zu restaurieren?`, correct_answer: "Lowry Digital", trial_name: "a_Apolloprogram_4_qa_3"} 
};var a_Apolloprogram_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Konnte den restaurierten Bändern Farbe hinzugefügt werden, um das Bild zu verbessern oder waren sie nach wie vor Schwarz-Weiß?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Konnte den restaurierten Bändern Farbe hinzugefügt werden, um das Bild zu verbessern oder waren sie nach wie vor Schwarz-Weiß?`, correct_answer: "Schwarz-Weiß", trial_name: "a_Apolloprogram_4_qa_4"} 
};var a_Amazonrainforest_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Die Bedürfnisse der <span id="a_Amazonrainforest_2_qa_0">Sojabauern</span> wurden genutzt, um viele der umstrittenen Transportprojekte zu rechtfertigen, die derzeit im Amazonasgebiet entstehen. Die ersten beiden Autobahnen erschlossen den Regenwald erfolgreich und führten <span id="a_Amazonrainforest_2_qa_1">zu mehr Siedlungen und mehr Rodungen</span>. Die durchschnittliche jährliche Abholzungsrate war von 2000 bis 2005 (22.392 km2 oder <span id="a_Amazonrainforest_2_qa_2">8.646 Quadratmeilen</span> pro Jahr) <span id="a_Amazonrainforest_2_qa_4">18%</span> höher als in den letzten fünf Jahren (19.018 km2 oder 7.343 Quadratmeilen pro Jahr). Obwohl die Waldrodung im brasilianischen Amazonasgebiet zwischen 2004 und 2014 <span id="a_Amazonrainforest_2_qa_3">deutlich zurückgegangen</span> ist, ist sie insgesamt bis heute gestiegen.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Amazonrainforest_2_qa_0','#a_Amazonrainforest_2_qa_1','#a_Amazonrainforest_2_qa_2','#a_Amazonrainforest_2_qa_3','#a_Amazonrainforest_2_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Amazonrainforest_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Amazonrainforest_2"}
};
var a_Amazonrainforest_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Für welche Art von Bauern wurden die Autobahnen im Amazonas-Regenwald hauptsächlich gebaut?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Für welche Art von Bauern wurden die Autobahnen im Amazonas-Regenwald hauptsächlich gebaut?`, correct_answer: "Sojabauern", trial_name: "a_Amazonrainforest_2_qa_0"} 
};var a_Amazonrainforest_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wozu führte der Bau von Autobahnen im Amazonas-Regenwald?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wozu führte der Bau von Autobahnen im Amazonas-Regenwald?`, correct_answer: "zu mehr Siedlungen und mehr Rodungen", trial_name: "a_Amazonrainforest_2_qa_1"} 
};var a_Amazonrainforest_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele Quadratmeilen pro Jahr wurden von 2000 bis 2005 gerodet?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele Quadratmeilen pro Jahr wurden von 2000 bis 2005 gerodet?`, correct_answer: "8.646 Quadratmeilen", trial_name: "a_Amazonrainforest_2_qa_2"} 
};var a_Amazonrainforest_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie hat sich die Abholzungsrate im Amazonasgebiet Brasiliens zwischen 2004 und 2014 entwickelt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie hat sich die Abholzungsrate im Amazonasgebiet Brasiliens zwischen 2004 und 2014 entwickelt?`, correct_answer: "deutlich zurückgegangen", trial_name: "a_Amazonrainforest_2_qa_3"} 
};var a_Amazonrainforest_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viel höher war die Abholzungsrate von 2000 bis 2005 im Vergleich zu 1995 bis 2000?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viel höher war die Abholzungsrate von 2000 bis 2005 im Vergleich zu 1995 bis 2000?`, correct_answer: "18%", trial_name: "a_Amazonrainforest_2_qa_4"} 
};var a_Amazonrainforest_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Umweltschützer zeigen sich besorgt über den Verlust der <span id="a_Amazonrainforest_3_qa_0">Biodiversität</span>, die sich <span id="a_Amazonrainforest_3_qa_1">aus der Zerstörung des Waldes</span> ergeben wird, und auch <span id="a_Amazonrainforest_3_qa_2">über die Freisetzung des in der Vegetation enthaltenen Kohlenstoffs</span>, der die globale Erwärmung beschleunigen könnte. Die immergrünen Wälder des Amazonasgebietes machen etwa 10% der weltweiten terrestrischen Primärproduktion und <span id="a_Amazonrainforest_3_qa_3">10%</span> der Kohlenstoffspeicher der Ökosysteme aus - dies entspricht einer Menge von <span id="a_Amazonrainforest_3_qa_4">1,1 × 1011 Tonnen Kohlenstoff</span>. Schätzungen zufolge haben die Wälder des Amazonas zwischen 1975 und 1996 0,62 ± 0,37 Tonnen Kohlenstoff pro Hektar und Jahr angesammelt.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Amazonrainforest_3_qa_0','#a_Amazonrainforest_3_qa_1','#a_Amazonrainforest_3_qa_2','#a_Amazonrainforest_3_qa_3','#a_Amazonrainforest_3_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Amazonrainforest_3_1280_720.png';
a.click();});}},data: { trial_name: "a_Amazonrainforest_3"}
};
var a_Amazonrainforest_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was wird laut Befürchtungen der Umweltschützer im Amazonaswald verloren gehen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was wird laut Befürchtungen der Umweltschützer im Amazonaswald verloren gehen?`, correct_answer: "Biodiversität", trial_name: "a_Amazonrainforest_3_qa_0"} 
};var a_Amazonrainforest_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Woraus ergibt sich der Verlust der Biodiversität laut den Umweltschützern möglicherweise?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Woraus ergibt sich der Verlust der Biodiversität laut den Umweltschützern möglicherweise?`, correct_answer: "aus der Zerstörung des Waldes", trial_name: "a_Amazonrainforest_3_qa_1"} 
};var a_Amazonrainforest_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Über die Freisetzung welches Stoffes sind Umweltschützer besorgt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Über die Freisetzung welches Stoffes sind Umweltschützer besorgt?`, correct_answer: "über die Freisetzung des in der Vegetation enthaltenen Kohlenstoffs", trial_name: "a_Amazonrainforest_3_qa_2"} 
};var a_Amazonrainforest_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Mengen des globalen Kohlenstoffs werden im Amazonaswald gespeichert?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Mengen des globalen Kohlenstoffs werden im Amazonaswald gespeichert?`, correct_answer: "10%", trial_name: "a_Amazonrainforest_3_qa_3"} 
};var a_Amazonrainforest_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele Tonnen Kohlenstoff sollen im Amazonaswald gespeichert sein?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele Tonnen Kohlenstoff sollen im Amazonaswald gespeichert sein?`, correct_answer: "1,1 × 1011 Tonnen Kohlenstoff", trial_name: "a_Amazonrainforest_3_qa_4"} 
};var a_FresnoCalifornia_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Die „<span id="a_FresnoCalifornia_0_qa_4">West Side</span>“ von Fresno, auch oft „<span id="a_FresnoCalifornia_0_qa_0">Southwest Fresno</span>“ genannt, ist eines der ältesten Viertel der Stadt. Das Viertel liegt <span id="a_FresnoCalifornia_0_qa_1">südwestlich</span> der California State Route 99 (die es von Downtown Fresno trennt), westlich der California State Route 41 und südlich der Nielsen Ave (oder der neu errichteten California State Route 180) und erstreckt sich bis zur Stadtgrenze im Westen und Süden. <span id="a_FresnoCalifornia_0_qa_2">Das Viertel gilt traditionell als das Zentrum von Fresnos afroamerikanischer Community</span>. Es ist kulturell vielfältig und umfasst auch bedeutende mexikanisch-amerikanische und asiatisch-amerikanische (hauptsächlich <span id="a_FresnoCalifornia_0_qa_3">Hmong- oder laotische</span>) Bevölkerungsgruppen.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_FresnoCalifornia_0_qa_0','#a_FresnoCalifornia_0_qa_1','#a_FresnoCalifornia_0_qa_2','#a_FresnoCalifornia_0_qa_3','#a_FresnoCalifornia_0_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_FresnoCalifornia_0_1280_720.png';
a.click();});}},data: { trial_name: "a_FresnoCalifornia_0"}
};
var a_FresnoCalifornia_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie lautet ein anderer Name für die West Side von Fresno?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie lautet ein anderer Name für die West Side von Fresno?`, correct_answer: "Southwest Fresno", trial_name: "a_FresnoCalifornia_0_qa_0"} 
};var a_FresnoCalifornia_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In welcher Richtung liegt die West Side von Fresno zur California State Route 99?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In welcher Richtung liegt die West Side von Fresno zur California State Route 99?`, correct_answer: "südwestlich", trial_name: "a_FresnoCalifornia_0_qa_1"} 
};var a_FresnoCalifornia_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche ethnische Community befindet sich im Zentrum der West Side von Fresno?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche ethnische Community befindet sich im Zentrum der West Side von Fresno?`, correct_answer: "Das Viertel gilt traditionell als das Zentrum von Fresnos afroamerikanischer Community", trial_name: "a_FresnoCalifornia_0_qa_2"} 
};var a_FresnoCalifornia_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche sind die beiden wichtigsten asiatisch-amerikanischen Gruppen, die in der West Side von Fresno leben?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche sind die beiden wichtigsten asiatisch-amerikanischen Gruppen, die in der West Side von Fresno leben?`, correct_answer: "Hmong- oder laotische", trial_name: "a_FresnoCalifornia_0_qa_3"} 
};var a_FresnoCalifornia_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welches Viertel liegt westlich der California State Route 41?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welches Viertel liegt westlich der California State Route 41?`, correct_answer: "West Side", trial_name: "a_FresnoCalifornia_0_qa_4"} 
};var a_FresnoCalifornia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Durch Fresno verläuft <span id="a_FresnoCalifornia_3_qa_0">die California State Route 99</span>. Sie ist die wichtigste Nord-Süd-Autobahn, die die großen Ballungszentren des California Central Valley verbindet. Die State Route 168, der <span id="a_FresnoCalifornia_3_qa_1">Sierra Freeway</span>, führt nach Osten in die Stadt Clovis und nach Huntington Lake. Die <span id="a_FresnoCalifornia_3_qa_2">State Route 41</span> (Yosemite Freeway/Eisenhower Freeway) führt von Atascadero im Süden nach Fresno und verläuft dann nach Norden nach Yosemite. Die State Route 180 (Kings Canyon Freeway) beginnt im <span id="a_FresnoCalifornia_3_qa_3">Westen</span>, führt über Mendota und endet im Kings Canyon Nationalpark in Richtung Reedley.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_FresnoCalifornia_3_qa_0','#a_FresnoCalifornia_3_qa_1','#a_FresnoCalifornia_3_qa_2','#a_FresnoCalifornia_3_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_FresnoCalifornia_3_1280_720.png';
a.click();});}},data: { trial_name: "a_FresnoCalifornia_3"}
};
var a_FresnoCalifornia_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Straße verbindet Fresno mit dem California Central Valley?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Straße verbindet Fresno mit dem California Central Valley?`, correct_answer: "die California State Route 99", trial_name: "a_FresnoCalifornia_3_qa_0"} 
};var a_FresnoCalifornia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie wird die State Route 168 noch genannt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie wird die State Route 168 noch genannt?`, correct_answer: "Sierra Freeway", trial_name: "a_FresnoCalifornia_3_qa_1"} 
};var a_FresnoCalifornia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie wird der Yosemite Freeway noch genannt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie wird der Yosemite Freeway noch genannt?`, correct_answer: "State Route 41", trial_name: "a_FresnoCalifornia_3_qa_2"} 
};var a_FresnoCalifornia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Aus welcher Richtung verläuft die State Route 180 über Mendota?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Aus welcher Richtung verläuft die State Route 180 über Mendota?`, correct_answer: "Westen", trial_name: "a_FresnoCalifornia_3_qa_3"} 
};var a_Geology_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Geology_4_qa_0">James Hutton</span> wird oft als der erste moderne Geologe angesehen. Im Jahr 1785 präsentierte er der Royal Society of Edinburgh ein Papier mit dem Titel „<span id="a_Geology_4_qa_1">Theory of the Earth</span>“. In seinem Werk erklärte er seine Theorie, <span id="a_Geology_4_qa_3">dass die Erde viel älter sein muss als bisher angenommen</span>, um genügend Zeit für die Erosion von Bergen und für die Bildung neuer Gesteine am Meeresboden zur Verfügung zu haben, die sich wiederum zu trockenem Land entwickelten. Hutton veröffentlichte eine zweibändige Version seiner Ideen im Jahr <span id="a_Geology_4_qa_2">1795</span> (Band 1, Band 2).</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Geology_4_qa_0','#a_Geology_4_qa_1','#a_Geology_4_qa_2','#a_Geology_4_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Geology_4_1280_720.png';
a.click();});}},data: { trial_name: "a_Geology_4"}
};
var a_Geology_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer gilt als der erste moderne Geologe?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer gilt als der erste moderne Geologe?`, correct_answer: "James Hutton", trial_name: "a_Geology_4_qa_0"} 
};var a_Geology_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">1785 präsentierte James Hutton der Royal Society of Edinburgh welches Papier?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1785 präsentierte James Hutton der Royal Society of Edinburgh welches Papier?`, correct_answer: "Theory of the Earth", trial_name: "a_Geology_4_qa_1"} 
};var a_Geology_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In welchem Jahr veröffentlichte James Hutton eine 2-bändige Version seiner Theorien?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In welchem Jahr veröffentlichte James Hutton eine 2-bändige Version seiner Theorien?`, correct_answer: "1795", trial_name: "a_Geology_4_qa_2"} 
};var a_Geology_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie lautet die Hauptidee von James Huttons Papier?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie lautet die Hauptidee von James Huttons Papier?`, correct_answer: "dass die Erde viel älter sein muss als bisher angenommen", trial_name: "a_Geology_4_qa_3"} 
};var a_AmericanBroadcastingCompany_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Im Jahr 2000 startete ABC eine webbasierte Werbekampagne, in deren Mittelpunkt ein <span id="a_AmericanBroadcastingCompany_0_qa_0">Kreislogo</span>, auch <span id="a_AmericanBroadcastingCompany_0_qa_3">„der Punkt“</span> genannt, stand. Die Comicfigur „Little Dot“ (also Pünktchen) forderte die Besucher dann auf, „den Punkt herunterzuladen", ein Programm, das dazu führt, dass das ABC-Logo um den Bildschirm fliegt und schließlich in der rechten unteren Ecke landet. Das Netzwerk beauftragte die <span id="a_AmericanBroadcastingCompany_0_qa_1">Troika Design Group</span> mit dem Design und der Umsetzung seines Auftritts für die Jahre 2001-02. Dabei wurde die <span id="a_AmericanBroadcastingCompany_0_qa_2">Schwarz-Gelb</span>-Färbung des Logos weiterhin genutzt und es waren Punkte und Streifen in verschiedenen Werbe- und Identifikationsspots zu sehen.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_AmericanBroadcastingCompany_0_qa_0','#a_AmericanBroadcastingCompany_0_qa_1','#a_AmericanBroadcastingCompany_0_qa_2','#a_AmericanBroadcastingCompany_0_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_AmericanBroadcastingCompany_0_1280_720.png';
a.click();});}},data: { trial_name: "a_AmericanBroadcastingCompany_0"}
};
var a_AmericanBroadcastingCompany_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was stand im Mittelpunkt der internetbasierten Werbekampagne, die ABC im Jahr 2000 begann?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was stand im Mittelpunkt der internetbasierten Werbekampagne, die ABC im Jahr 2000 begann?`, correct_answer: "Kreislogo", trial_name: "a_AmericanBroadcastingCompany_0_qa_0"} 
};var a_AmericanBroadcastingCompany_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer wurde beauftragt, den Auftritt des ABC-Netzwerks für die Jahre 2001-02 zu produzieren?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer wurde beauftragt, den Auftritt des ABC-Netzwerks für die Jahre 2001-02 zu produzieren?`, correct_answer: "Troika Design Group", trial_name: "a_AmericanBroadcastingCompany_0_qa_1"} 
};var a_AmericanBroadcastingCompany_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Farben hatte das ABC-Logo 2001?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Farben hatte das ABC-Logo 2001?`, correct_answer: "Schwarz-Gelb", trial_name: "a_AmericanBroadcastingCompany_0_qa_2"} 
};var a_AmericanBroadcastingCompany_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie lautet der Spitzname für das ABC-Logo aus der Werbekampagne im Jahr 2000?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie lautet der Spitzname für das ABC-Logo aus der Werbekampagne im Jahr 2000?`, correct_answer: "„der Punkt“", trial_name: "a_AmericanBroadcastingCompany_0_qa_3"} 
};var a_Construction_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Der <span id="a_Construction_0_qa_0">Bau</span> ist der Prozess der Errichtung eines Gebäudes oder einer Infrastruktur. Der Bau unterscheidet sich von der Fertigung darin, dass bei der <span id="a_Construction_0_qa_1">Fertigung</span> in der Regel ohne einen bestimmten Käufer ähnliche Artikel in Massenproduktion hergestellt werden, während ein Bau in der Regel vor Ort für <span id="a_Construction_0_qa_4">einen bekannten Kunden</span> erfolgt. Das Baugewerbe macht <span id="a_Construction_0_qa_2">sechs bis neun Prozent</span> des Bruttoinlandsprodukts der Industrieländer aus. Der Bau beginnt mit der <span id="a_Construction_0_qa_3">Planung, [Quellenangabe erforderlich] dem Design und der Finanzierung</span> und dauert an, bis das Projekt fertig und nutzungsbereit ist.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Construction_0_qa_0','#a_Construction_0_qa_1','#a_Construction_0_qa_2','#a_Construction_0_qa_3','#a_Construction_0_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Construction_0_1280_720.png';
a.click();});}},data: { trial_name: "a_Construction_0"}
};
var a_Construction_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie läuft der Bau eines Gebäudes oder einer Infrastruktur ab?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie läuft der Bau eines Gebäudes oder einer Infrastruktur ab?`, correct_answer: "Bau", trial_name: "a_Construction_0_qa_0"} 
};var a_Construction_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie nennt man normalerweise die Massenproduktion ähnlicher Artikel ohne einen bestimmten Käufer?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie nennt man normalerweise die Massenproduktion ähnlicher Artikel ohne einen bestimmten Käufer?`, correct_answer: "Fertigung", trial_name: "a_Construction_0_qa_1"} 
};var a_Construction_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viel Prozent des Bruttoinlandsprodukts bestehen aus dem Baugewerbe?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viel Prozent des Bruttoinlandsprodukts bestehen aus dem Baugewerbe?`, correct_answer: "sechs bis neun Prozent", trial_name: "a_Construction_0_qa_2"} 
};var a_Construction_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche drei Dinge sind für den Bau erforderlich?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche drei Dinge sind für den Bau erforderlich?`, correct_answer: "Planung, [Quellenangabe erforderlich] dem Design und der Finanzierung", trial_name: "a_Construction_0_qa_3"} 
};var a_Construction_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Für wen wird vor Ort gebaut?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Für wen wird vor Ort gebaut?`, correct_answer: "einen bekannten Kunden", trial_name: "a_Construction_0_qa_4"} 
};var a_Construction_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Construction_2_qa_2">Die Standard Industrial Classification und das neuere nordamerikanische Industry Classification System</span> haben ein Klassifizierungssystem für Unternehmen, die Bauarbeiten ausführen oder anderweitig damit befasst sind. Um die Unterschiede der Unternehmen in diesem Sektor zu ermitteln, ist es in drei Teilsektoren unterteilt: <span id="a_Construction_2_qa_0">Einfache Bauausführung, Schwermaschinen- und Tiefbau, sowie Spezialbauunternehmen</span>. Es gibt auch Kategorien für <span id="a_Construction_2_qa_1">Baudienstleistungsunternehmen (z. B. Ingenieurwesen, Architektur) und Bauleiter</span> (<span id="a_Construction_2_qa_3">Unternehmen, die Bauprojekte verwalten, ohne die direkte finanzielle Verantwortung für den Abschluss des Bauprojekts</span> zu übernehmen).</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Construction_2_qa_0','#a_Construction_2_qa_1','#a_Construction_2_qa_2','#a_Construction_2_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Construction_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Construction_2"}
};
var a_Construction_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was sind die drei Bau-Teilsektoren?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was sind die drei Bau-Teilsektoren?`, correct_answer: "Einfache Bauausführung, Schwermaschinen- und Tiefbau, sowie Spezialbauunternehmen", trial_name: "a_Construction_2_qa_0"} 
};var a_Construction_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wofür gibt es noch weitere Kategorien?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wofür gibt es noch weitere Kategorien?`, correct_answer: "Baudienstleistungsunternehmen (z. B. Ingenieurwesen, Architektur) und Bauleiter", trial_name: "a_Construction_2_qa_1"} 
};var a_Construction_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Organisation hat ein Klassifizierungssystem für Bauunternehmen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Organisation hat ein Klassifizierungssystem für Bauunternehmen?`, correct_answer: "Die Standard Industrial Classification und das neuere nordamerikanische Industry Classification System", trial_name: "a_Construction_2_qa_2"} 
};var a_Construction_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was sind Bauleiter?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was sind Bauleiter?`, correct_answer: "Unternehmen, die Bauprojekte verwalten, ohne die direkte finanzielle Verantwortung für den Abschluss des Bauprojekts", trial_name: "a_Construction_2_qa_3"} 
};var a_Privateschool_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">﻿<span id="a_Privateschool_0_qa_0">Ergänzungsschulen</span> sind sekundäre oder postsekundäre (nicht-tertiäre) Schulen, die von Privatpersonen, Privatorganisationen oder, selten, <span id="a_Privateschool_0_qa_3">religiösen</span> Gruppen geführt werden und eine Art von Bildung anbieten, die an öffentlichen Schulen nicht verfügbar ist. Die meisten dieser Schulen sind <span id="a_Privateschool_0_qa_1">berufsbildende</span> Schulen. Diese berufsbildenden Schulen sind allerdings nicht Teil des deutschen Bildungssystems. Ergänzungsschulen haben die Freiheit, außerhalb der staatlichen Regulierung betrieben zu werden, und finanzieren sich einzig dadurch, dass sie ihren Studenten <span id="a_Privateschool_0_qa_2">Studiengebühren</span> berechnen.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Privateschool_0_qa_0','#a_Privateschool_0_qa_1','#a_Privateschool_0_qa_2','#a_Privateschool_0_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Privateschool_0_1280_720.png';
a.click();});}},data: { trial_name: "a_Privateschool_0"}
};
var a_Privateschool_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie heißen private Sekundarschulen in Deutschland?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie heißen private Sekundarschulen in Deutschland?`, correct_answer: "Ergänzungsschulen", trial_name: "a_Privateschool_0_qa_0"} 
};var a_Privateschool_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Art von Schule sind die meisten Ergänzungsschulen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Art von Schule sind die meisten Ergänzungsschulen?`, correct_answer: "berufsbildende", trial_name: "a_Privateschool_0_qa_1"} 
};var a_Privateschool_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie finanzieren sich Ergänzungsschulen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie finanzieren sich Ergänzungsschulen?`, correct_answer: "Studiengebühren", trial_name: "a_Privateschool_0_qa_2"} 
};var a_Privateschool_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Gruppen leiten manchmal, neben Privatpersonen und -organisationen, Ergänzungsschulen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Gruppen leiten manchmal, neben Privatpersonen und -organisationen, Ergänzungsschulen?`, correct_answer: "religiösen", trial_name: "a_Privateschool_0_qa_3"} 
};var a_Privateschool_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Manche der ältesten Schulen in Südafrika sind kirchliche Privatschulen, die von Missionaren im frühen <span id="a_Privateschool_2_qa_4">neunzehnten</span> Jahrhundert gegründet wurden. Seitdem ist der Privatsektor stetig gewachsen. Nach Abschaffung der Apartheid haben sich die Gesetze, die private Bildung in Südafrika regeln, drastisch geändert. Der <span id="a_Privateschool_2_qa_0">South African Schools Act</span> von <span id="a_Privateschool_2_qa_1">1996</span> erkannte zwei Schulkategorien an: „öffentliche“ (staatlich kontrollierte) und „<span id="a_Privateschool_2_qa_2">unabhängige</span>“ (welche <span id="a_Privateschool_2_qa_3">traditionelle private</span> Schulen, die unter privater Verwaltung stehen, beinhalten[Erklärung nötig].)</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Privateschool_2_qa_0','#a_Privateschool_2_qa_1','#a_Privateschool_2_qa_2','#a_Privateschool_2_qa_3','#a_Privateschool_2_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Privateschool_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Privateschool_2"}
};
var a_Privateschool_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welches südafrikanische Gesetzt erkannte zwei Schultypen an?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welches südafrikanische Gesetzt erkannte zwei Schultypen an?`, correct_answer: "South African Schools Act", trial_name: "a_Privateschool_2_qa_0"} 
};var a_Privateschool_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In welchem Jahr wurde der South African Schools Act verabschiedet?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In welchem Jahr wurde der South African Schools Act verabschiedet?`, correct_answer: "1996", trial_name: "a_Privateschool_2_qa_1"} 
};var a_Privateschool_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Art von Schule wurde neben öffentlichen Schulen anerkannt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Art von Schule wurde neben öffentlichen Schulen anerkannt?`, correct_answer: "unabhängige", trial_name: "a_Privateschool_2_qa_2"} 
};var a_Privateschool_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Schulen werden in Südafrika, neben Privatschulen, als unabhängig klassifiziert?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Schulen werden in Südafrika, neben Privatschulen, als unabhängig klassifiziert?`, correct_answer: "traditionelle private", trial_name: "a_Privateschool_2_qa_3"} 
};var a_Privateschool_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In welchem Jahrhundert gründeten Missionare namhafte kirchliche Schulen in Südafrika?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In welchem Jahrhundert gründeten Missionare namhafte kirchliche Schulen in Südafrika?`, correct_answer: "neunzehnten", trial_name: "a_Privateschool_2_qa_4"} 
};var a_HarvardUniversity_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Die Harvard Business School und viele der Sportanlagen der Universität, inklusive dem Harvard Stadium, liegen auf einem 358 Acker (145 ha) großen Campus gegenüber vom Cambridge-Campus in <span id="a_HarvardUniversity_1_qa_0">Allston</span>. Die <span id="a_HarvardUniversity_1_qa_1">John W. Weeks Bridge</span> ist eine Fußgängerbrücke über den Charles River, welche die beiden Campus verbindet. Die Harvard Medical School, Harvard School of Dental Medicine und Harvard School of Public Health liegen auf einem 21 Acker (8,5 ha) großen Campus in der <span id="a_HarvardUniversity_1_qa_2">Longwood Medical and Academic Area</span>, ungefähr 3,3 Meilen (5,3 km) südwestlich der Innenstadt von Boston und 3,3 Meilen (5,3 km) südlich des Cambridge-Campus.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_HarvardUniversity_1_qa_0','#a_HarvardUniversity_1_qa_1','#a_HarvardUniversity_1_qa_2'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_HarvardUniversity_1_1280_720.png';
a.click();});}},data: { trial_name: "a_HarvardUniversity_1"}
};
var a_HarvardUniversity_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wo liegt das Harvard Stadium?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wo liegt das Harvard Stadium?`, correct_answer: "Allston", trial_name: "a_HarvardUniversity_1_qa_0"} 
};var a_HarvardUniversity_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie heißt die Brücke, die Teile des Campus über den Charles River miteinander verbindet?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie heißt die Brücke, die Teile des Campus über den Charles River miteinander verbindet?`, correct_answer: "John W. Weeks Bridge", trial_name: "a_HarvardUniversity_1_qa_1"} 
};var a_HarvardUniversity_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wo liegen die Harvard Medical School, School of Dental Medicine und School of Public Health?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wo liegen die Harvard Medical School, School of Dental Medicine und School of Public Health?`, correct_answer: "Longwood Medical and Academic Area", trial_name: "a_HarvardUniversity_1_qa_2"} 
};var a_DoctorWho_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Der häufigste musikalische Mitwirkende der ersten 15 Jahre war <span id="a_DoctorWho_3_qa_0">Dudley Simpson</span>, der auch für seine Titel- und Bühnenmusik für Blake's 7 und für seine schauerliche Titelmusik und seine Partitur für die ursprüngliche Version von The Tomorrow People aus den 1970ern bekannt ist. Simpsons erste Doctor Who-Partitur war <span id="a_DoctorWho_3_qa_1">Planet of Giants</span> (1964). Anschließend komponierte er Musik für viele Abenteuer <span id="a_DoctorWho_3_qa_2">der 1960er und 1970er</span>, inklusive den meisten Geschichten der Jon Pertwee/Tom Baker-Perioden. Den Abschluss bildete <span id="a_DoctorWho_3_qa_3">The Horns of Nimon</span> (1979). Er hatte auch einen Gastaufritt in <span id="a_DoctorWho_3_qa_4">The Talons of Weng-Chiang</span> (als Dirigent eines Musiksaals).</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_DoctorWho_3_qa_0','#a_DoctorWho_3_qa_1','#a_DoctorWho_3_qa_2','#a_DoctorWho_3_qa_3','#a_DoctorWho_3_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_DoctorWho_3_1280_720.png';
a.click();});}},data: { trial_name: "a_DoctorWho_3"}
};
var a_DoctorWho_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer war der häufigste musikalische Mitwirkende bei Doctor Who in den ersten 15 Jahren der Serie?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer war der häufigste musikalische Mitwirkende bei Doctor Who in den ersten 15 Jahren der Serie?`, correct_answer: "Dudley Simpson", trial_name: "a_DoctorWho_3_qa_0"} 
};var a_DoctorWho_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie hieß die Folge von Simpsons erster Doctor Who-Partitur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie hieß die Folge von Simpsons erster Doctor Who-Partitur?`, correct_answer: "Planet of Giants", trial_name: "a_DoctorWho_3_qa_1"} 
};var a_DoctorWho_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In welchen Jahrzehnten hat Dudley Simpson am aktivsten zu Doctor Who beigetragen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In welchen Jahrzehnten hat Dudley Simpson am aktivsten zu Doctor Who beigetragen?`, correct_answer: "der 1960er und 1970er", trial_name: "a_DoctorWho_3_qa_2"} 
};var a_DoctorWho_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche war die letzte Doctor Who-Folge, für die Dudley Simpson Musik komponierte?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche war die letzte Doctor Who-Folge, für die Dudley Simpson Musik komponierte?`, correct_answer: "The Horns of Nimon", trial_name: "a_DoctorWho_3_qa_3"} 
};var a_DoctorWho_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In welchen Folgen spielte Dudley Simpson einen Dirigenten?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In welchen Folgen spielte Dudley Simpson einen Dirigenten?`, correct_answer: "The Talons of Weng-Chiang", trial_name: "a_DoctorWho_3_qa_4"} 
};var a_UniversityofChicago_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Zu den bedeutenden Alumni in den Wirtschaftswissenschaften zählen Microsofts CEO <span id="a_UniversityofChicago_3_qa_0">Satya Nadella</span>, der Gründer der Oracle Corporation und der drittreichste Mann in Amerika <span id="a_UniversityofChicago_3_qa_1"><span id="a_UniversityofChicago_3_qa_2">Larry Ellison</span></span>, der CEO von Goldman Sachs und MF Global sowie frühere Gouverneur von New Jersey <span id="a_UniversityofChicago_3_qa_3">Jon Corzine</span>, der Gründer von McKinsey & Company und Autor des ersten Lehrbuchs für internes Rechnungswesen <span id="a_UniversityofChicago_3_qa_4">James O. McKinsey</span>, Arley D. Cathey, Daniel Doctoroff, CEO von Bloomberg L.P., Brady Dougan, CEO von Credit Suisse, Joe Mansueto, Gründer und CEO von Morningstar, Inc., Thomas S. Ricketts, Eigentümer und Vorsitzender der Chicago Cubs, und NBA-Commissioner Adam Silver.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_UniversityofChicago_3_qa_0','#a_UniversityofChicago_3_qa_1','#a_UniversityofChicago_3_qa_2','#a_UniversityofChicago_3_qa_3','#a_UniversityofChicago_3_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_UniversityofChicago_3_1280_720.png';
a.click();});}},data: { trial_name: "a_UniversityofChicago_3"}
};
var a_UniversityofChicago_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welcher CEO von Microsoft ist auch ein Alumni der University of Chicago?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welcher CEO von Microsoft ist auch ein Alumni der University of Chicago?`, correct_answer: "Satya Nadella", trial_name: "a_UniversityofChicago_3_qa_0"} 
};var a_UniversityofChicago_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer war der Gründer der Oracle Corporation?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer war der Gründer der Oracle Corporation?`, correct_answer: "Larry Ellison", trial_name: "a_UniversityofChicago_3_qa_1"} 
};var a_UniversityofChicago_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer ist der drittreichste Mann in Amerika?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer ist der drittreichste Mann in Amerika?`, correct_answer: "Larry Ellison", trial_name: "a_UniversityofChicago_3_qa_2"} 
};var a_UniversityofChicago_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welcher CEO von Goldman Sachs ist auch ein Alumni der University of Chicago?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welcher CEO von Goldman Sachs ist auch ein Alumni der University of Chicago?`, correct_answer: "Jon Corzine", trial_name: "a_UniversityofChicago_3_qa_3"} 
};var a_UniversityofChicago_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer gründete McKinsey & Company?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer gründete McKinsey & Company?`, correct_answer: "James O. McKinsey", trial_name: "a_UniversityofChicago_3_qa_4"} 
};var a_Yuandynasty_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Der Historiker <span id="a_Yuandynasty_4_qa_0">Frederick W. Mote</span> schrieb, das die Verwendung des Begriffs „soziale Klassen“ für dieses System irreführend ist und dass die Position der Personen innerhalb des Vierklassensystems kein Hinweis auf ihren tatsächlichen sozialen Einfluss und Reichtum war, sondern nur „<span id="a_Yuandynasty_4_qa_1">Grade von Privilegien</span>“ enthielt, die ihnen institutionell und rechtlich zustanden. Der Status einer Person innerhalb der Klassen war also keine Garantie ihrer Stellung, da es <span id="a_Yuandynasty_4_qa_2">reiche und sozial hochstehende</span> Chinesen gab, während es weniger reiche Mongolen und Semu als Mongolen und Semu gab, die <span id="a_Yuandynasty_4_qa_3">in Armut lebten und geschunden wurden</span>.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Yuandynasty_4_qa_0','#a_Yuandynasty_4_qa_1','#a_Yuandynasty_4_qa_2','#a_Yuandynasty_4_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Yuandynasty_4_1280_720.png';
a.click();});}},data: { trial_name: "a_Yuandynasty_4"}
};
var a_Yuandynasty_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer glaubte, dass das System sozialer Klassen der Yuan nicht als soziale Klassen bezeichnet werden sollte?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer glaubte, dass das System sozialer Klassen der Yuan nicht als soziale Klassen bezeichnet werden sollte?`, correct_answer: "Frederick W. Mote", trial_name: "a_Yuandynasty_4_qa_0"} 
};var a_Yuandynasty_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was, glaubte Mote, stellte das Klassensystem der Yuan tatsächlich dar?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was, glaubte Mote, stellte das Klassensystem der Yuan tatsächlich dar?`, correct_answer: "Grade von Privilegien", trial_name: "a_Yuandynasty_4_qa_1"} 
};var a_Yuandynasty_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Es gab viele Chinesen mit welchem unerwarteten Status?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Es gab viele Chinesen mit welchem unerwarteten Status?`, correct_answer: "reiche und sozial hochstehende", trial_name: "a_Yuandynasty_4_qa_2"} 
};var a_Yuandynasty_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Es gab viele Mongolen mit welchem unerwarteten Status?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Es gab viele Mongolen mit welchem unerwarteten Status?`, correct_answer: "in Armut lebten und geschunden wurden", trial_name: "a_Yuandynasty_4_qa_3"} 
};var a_Kenya_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Kenia steht auf Transparency Internationals Korruptionswahrnehmungsindex (CPI), einem Maßstab, welcher die Verbreitung von <span id="a_Kenya_0_qa_1">Korruption im öffentlichen Sektor</span> in verschiedenen Ländern zu messen versucht, <span id="a_Kenya_0_qa_0">weit unten</span>. 2012 stand das Land auf Platz <span id="a_Kenya_0_qa_2">139</span> von insgesamt 176 Ländern im CPI, mit einer Punktzahl von 27/100. Aber es gibt verschiedene ziemlich bedeutsame Entwicklungen bezüglich der Korruptionseindämmung von der kenianischen Regierung, zum Beispiel <span id="a_Kenya_0_qa_3">die Einrichtung einer neuen, unabhängigen Kommission für Ethik und Korruptionsbekämpfung</span> (EACC).</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Kenya_0_qa_0','#a_Kenya_0_qa_1','#a_Kenya_0_qa_2','#a_Kenya_0_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Kenya_0_1280_720.png';
a.click();});}},data: { trial_name: "a_Kenya_0"}
};
var a_Kenya_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wo steht Kenia auf dem CPI-Maßstab?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wo steht Kenia auf dem CPI-Maßstab?`, correct_answer: "weit unten", trial_name: "a_Kenya_0_qa_0"} 
};var a_Kenya_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was misst der CPI-Maßstab?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was misst der CPI-Maßstab?`, correct_answer: "Korruption im öffentlichen Sektor", trial_name: "a_Kenya_0_qa_1"} 
};var a_Kenya_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welchen Platz auf dem Maßstab hatte Kenia 2012?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welchen Platz auf dem Maßstab hatte Kenia 2012?`, correct_answer: "139", trial_name: "a_Kenya_0_qa_2"} 
};var a_Kenya_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer dämmt Kenia Korruption ein?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer dämmt Kenia Korruption ein?`, correct_answer: "die Einrichtung einer neuen, unabhängigen Kommission für Ethik und Korruptionsbekämpfung", trial_name: "a_Kenya_0_qa_3"} 
};var a_Kenya_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Da sowohl Präsident Kenyatta als auch Vizepräsident William Ruto 2013 <span id="a_Kenya_2_qa_0">Gerichtstermine vor dem Internationalen Strafgerichtshof</span> in Verbindung mit den Auswirkungen der Wahl von 2007 hatten, entschied sich <span id="a_Kenya_2_qa_1">US-Präsident Barack Obama</span>, das Land während seiner Afrikareise Mitte 2013 nicht zu besuchen. Später in diesem Sommer besuchte Kenyatta auf Einladung von Präsident Xi Jinping <span id="a_Kenya_2_qa_2">China</span>, nachdem er einen Zwischenstopp in Russland eingelegt und die USA als Präsident nicht besucht hatte. Im <span id="a_Kenya_2_qa_3">Juli 2015</span> besuchte Obama Kenia als erster amerikanischer Präsident, der das Land während seiner Regierungszeit bereiste. </p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Kenya_2_qa_0','#a_Kenya_2_qa_1','#a_Kenya_2_qa_2','#a_Kenya_2_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Kenya_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Kenya_2"}
};
var a_Kenya_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was war das Ergebnis der Wahl von 2007?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was war das Ergebnis der Wahl von 2007?`, correct_answer: "Gerichtstermine vor dem Internationalen Strafgerichtshof", trial_name: "a_Kenya_2_qa_0"} 
};var a_Kenya_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer entschied sich, das Land 2013 nicht zu besuchen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer entschied sich, das Land 2013 nicht zu besuchen?`, correct_answer: "US-Präsident Barack Obama", trial_name: "a_Kenya_2_qa_1"} 
};var a_Kenya_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welches Land besuchte Kenyatta auf Einladung des Präsidenten?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welches Land besuchte Kenyatta auf Einladung des Präsidenten?`, correct_answer: "China", trial_name: "a_Kenya_2_qa_2"} 
};var a_Kenya_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wann besuchte Obama Kenia schließlich?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wann besuchte Obama Kenia schließlich?`, correct_answer: "Juli 2015", trial_name: "a_Kenya_2_qa_3"} 
};var a_IntergovernmentalPanelonClimateChange_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_IntergovernmentalPanelonClimateChange_0_qa_1">Der koreanische</span> Wirtschaftswissenschaftler <span id="a_IntergovernmentalPanelonClimateChange_0_qa_0">Hoesung Lee</span> ist seit der Wahl des neuen IPCC-Vorstandes am 8. Oktober 2015 der Vorsitzende des IPCC. Vor dieser Wahl wurde das IPCC von seinem stellvertretenden Vorsitzenden <span id="a_IntergovernmentalPanelonClimateChange_0_qa_2">Ismail El Gizouli</span> geleitet, der nach dem Rücktritt von Rajendra K. Pachauri im <span id="a_IntergovernmentalPanelonClimateChange_0_qa_4">Februar 2015</span> zum amtierenden Vorsitzenden ernannt wurde. Die früheren Vorsitzenden waren Rajendra K. Pachauri, gewählt im Mai 2002, Robert Watson 1997 und <span id="a_IntergovernmentalPanelonClimateChange_0_qa_3">Bert Bolin</span> 1988. Dem Vorsitzenden assistiert ein gewählter Vorstand, zu dem ein stellvertretender Vorsitzender, Co-Vorsitzende der Arbeitsgruppen und ein Sekretariat zählen.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_IntergovernmentalPanelonClimateChange_0_qa_0','#a_IntergovernmentalPanelonClimateChange_0_qa_1','#a_IntergovernmentalPanelonClimateChange_0_qa_2','#a_IntergovernmentalPanelonClimateChange_0_qa_3','#a_IntergovernmentalPanelonClimateChange_0_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_IntergovernmentalPanelonClimateChange_0_1280_720.png';
a.click();});}},data: { trial_name: "a_IntergovernmentalPanelonClimateChange_0"}
};
var a_IntergovernmentalPanelonClimateChange_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer ist der Vorsitzende des IPCC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer ist der Vorsitzende des IPCC?`, correct_answer: "Hoesung Lee", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_0"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Nationalität hat Hoesung Lee?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Nationalität hat Hoesung Lee?`, correct_answer: "Der koreanische", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_1"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer ist der stellvertretende Vorsitzende des IPCC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer ist der stellvertretende Vorsitzende des IPCC?`, correct_answer: "Ismail El Gizouli", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_2"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer war der erste Vorsitzende des IPCC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer war der erste Vorsitzende des IPCC?`, correct_answer: "Bert Bolin", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_3"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wann trat Pachauri als Vorsitzender des IPCC zurück?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wann trat Pachauri als Vorsitzender des IPCC zurück?`, correct_answer: "Februar 2015", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_4"} 
};var a_IntergovernmentalPanelonClimateChange_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Diese Vorhersage war in der abschließenden Zusammenfassung für politische Entscheidungsträger nicht enthalten. Das IPCC hat seither zugegeben, dass <span id="a_IntergovernmentalPanelonClimateChange_2_qa_0">die Zeitangabe</span> unrichtig ist, aber nochmals bekräftigt, dass die Schlussfolgerung in der abschließenden Zusammenfassung solide sei. Es drückte sein Bedauern über <span id="a_IntergovernmentalPanelonClimateChange_2_qa_1">„die mangelhafte Anwendung gängiger IPCC-Verfahren in diesem Fall“</span> aus. Die Zeitangabe 2035 wurde vom IPCC korrekt aus <span id="a_IntergovernmentalPanelonClimateChange_2_qa_2">dem WWF-Bericht</span> zitiert, welcher seine eigene Quelle, einen ICSI-Bericht  <span id="a_IntergovernmentalPanelonClimateChange_2_qa_3">„Variations of Snow and Ice in the past and at present on a Global and Regional Scale“</span>, falsch zitiert hat. </p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_IntergovernmentalPanelonClimateChange_2_qa_0','#a_IntergovernmentalPanelonClimateChange_2_qa_1','#a_IntergovernmentalPanelonClimateChange_2_qa_2','#a_IntergovernmentalPanelonClimateChange_2_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_IntergovernmentalPanelonClimateChange_2_1280_720.png';
a.click();});}},data: { trial_name: "a_IntergovernmentalPanelonClimateChange_2"}
};
var a_IntergovernmentalPanelonClimateChange_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was war nach Angaben des IPCC ein Fehler?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was war nach Angaben des IPCC ein Fehler?`, correct_answer: "die Zeitangabe", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_0"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wofür hat sich das IPCC entschuldigt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wofür hat sich das IPCC entschuldigt?`, correct_answer: "„die mangelhafte Anwendung gängiger IPCC-Verfahren in diesem Fall“", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_1"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was war die Fehlerquelle?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was war die Fehlerquelle?`, correct_answer: "dem WWF-Bericht", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_2"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welcher Bericht enthielt die richtige Zeitangabe?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welcher Bericht enthielt die richtige Zeitangabe?`, correct_answer: "„Variations of Snow and Ice in the past and at present on a Global and Regional Scale“", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_3"} 
};var a_Chloroplast_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Diese Chloroplasten, die direkt auf einen cyanobakteriellen Vorfahren zurückgeführt werden können, werden als primäre Plastide bezeichnet („Plastid“ bedeutet in diesem Kontext fast dasselbe wie <span id="a_Chloroplast_1_qa_0">Chloroplast</span>). Alle primären Chloroplasten gehören zu einer von <span id="a_Chloroplast_1_qa_1">drei</span> Chloroplasten-Entwicklungslinien – der Glaucophyta-Chloroplasten-Entwicklungslinie, der Rhodophyta- oder <span id="a_Chloroplast_1_qa_2">Rotalgen-Chloroplasten-Entwicklungslinie</span> oder der Chloroplastida- oder <span id="a_Chloroplast_1_qa_3">grünen Chloroplasten-Entwicklungslinie</span>. Die zweiten zwei sind die größten und <span id="a_Chloroplast_1_qa_4">die grüne Chloroplasten-Entwicklungslinie</span> ist diejenige, die die Landpflanzen enthält.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Chloroplast_1_qa_0','#a_Chloroplast_1_qa_1','#a_Chloroplast_1_qa_2','#a_Chloroplast_1_qa_3','#a_Chloroplast_1_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Chloroplast_1_1280_720.png';
a.click();});}},data: { trial_name: "a_Chloroplast_1"}
};
var a_Chloroplast_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was bedeutet „Plastid“?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was bedeutet „Plastid“?`, correct_answer: "Chloroplast", trial_name: "a_Chloroplast_1_qa_0"} 
};var a_Chloroplast_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie viele Chloroplasten-Entwicklungslinien gibt es?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie viele Chloroplasten-Entwicklungslinien gibt es?`, correct_answer: "drei", trial_name: "a_Chloroplast_1_qa_1"} 
};var a_Chloroplast_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was bedeutet Rhodophyta?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was bedeutet Rhodophyta?`, correct_answer: "Rotalgen-Chloroplasten-Entwicklungslinie", trial_name: "a_Chloroplast_1_qa_2"} 
};var a_Chloroplast_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was bedeutet Chloroplastida?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was bedeutet Chloroplastida?`, correct_answer: "grünen Chloroplasten-Entwicklungslinie", trial_name: "a_Chloroplast_1_qa_3"} 
};var a_Chloroplast_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Entwicklungslinie enthält Landpflanzen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Entwicklungslinie enthält Landpflanzen?`, correct_answer: "die grüne Chloroplasten-Entwicklungslinie", trial_name: "a_Chloroplast_1_qa_4"} 
};var a_Chloroplast_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Es gibt einige verbreitete Irrglauben über die äußeren und inneren Chloroplastenmembranen. Die Tatsache, dass Chloroplasten <span id="a_Chloroplast_4_qa_0">von einer Doppelmembran umgeben sind</span>, wird oft als Beweis dafür angeführt, dass sie die Vorfahren endosymbiotischer Cyanobakterien sind. Dies wird oft so verstanden, dass die äußere Chloroplastenmembran <span id="a_Chloroplast_4_qa_1">das Produkt der Zellmembran des Wirts ist, die sich entfaltet, um ein das anzestrale Zyanobakterium umgebendes Vesikel zu bilden</span> – was unwahr ist. Beide Chloroplasten-Membranen sind den ursprünglichen Doppelmembranen des Cyanobakteriums <span id="a_Chloroplast_4_qa_2">homolog</span>.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Chloroplast_4_qa_0','#a_Chloroplast_4_qa_1','#a_Chloroplast_4_qa_2'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Chloroplast_4_1280_720.png';
a.click();});}},data: { trial_name: "a_Chloroplast_4"}
};
var a_Chloroplast_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was ist der Beweis dafür, dass Chloroplasten von endosymbiotischen Cyanobakterien abstammen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was ist der Beweis dafür, dass Chloroplasten von endosymbiotischen Cyanobakterien abstammen?`, correct_answer: "von einer Doppelmembran umgeben sind", trial_name: "a_Chloroplast_4_qa_0"} 
};var a_Chloroplast_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was wird fälschlicherweise von der äußeren Chloroplasten-Membran angenommen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was wird fälschlicherweise von der äußeren Chloroplasten-Membran angenommen?`, correct_answer: "das Produkt der Zellmembran des Wirts ist, die sich entfaltet, um ein das anzestrale Zyanobakterium umgebendes Vesikel zu bilden", trial_name: "a_Chloroplast_4_qa_1"} 
};var a_Chloroplast_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was sind beide Chloroplasten-Membranen im Vergleich zu den ursprünglichen Doppelmembranen des Cyanobakteriums?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was sind beide Chloroplasten-Membranen im Vergleich zu den ursprünglichen Doppelmembranen des Cyanobakteriums?`, correct_answer: "homolog", trial_name: "a_Chloroplast_4_qa_2"} 
};var a_Rhine_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Zwischen Bingen und Bonn fließt der <span id="a_Rhine_0_qa_0"><span id="a_Rhine_0_qa_4">Mittelrhein</span></span> durch die <span id="a_Rhine_0_qa_1"><span id="a_Rhine_0_qa_5">Rheinschlucht</span></span>, eine Formation, die durch <span id="a_Rhine_0_qa_2">Erosion</span> entstanden ist. Die Erosionsrate entsprach dem Hebungsprozess in der Region, so dass der Fluss etwa auf seinem ursprünglichen Niveau verblieben war, während sich die umliegenden Flächen erhöhten. Die Schlucht ist ziemlich tief und ist der Abschnitt des Flusses, der für seine vielen <span id="a_Rhine_0_qa_6">Burgen und Weinberge</span> bekannt ist. Er ist UNESCO-Weltkulturerbe (2002) und bekannt als "<span id="a_Rhine_0_qa_3"><span id="a_Rhine_0_qa_7">der romantische Rhein</span></span>", mit mehr als 40 Burgen und Schlössern aus dem Mittelalter und vielen malerischen und schönen ländlichen Dörfern.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Rhine_0_qa_0','#a_Rhine_0_qa_1','#a_Rhine_0_qa_2','#a_Rhine_0_qa_3','#a_Rhine_0_qa_4','#a_Rhine_0_qa_5','#a_Rhine_0_qa_6','#a_Rhine_0_qa_7'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Rhine_0_1280_720.png';
a.click();});}},data: { trial_name: "a_Rhine_0"}
};
var a_Rhine_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was fließt zwischen Bingen und Bonn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was fließt zwischen Bingen und Bonn?`, correct_answer: "Mittelrhein", trial_name: "a_Rhine_0_qa_0"} 
};var a_Rhine_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Schlucht liegt zwischen Bingen und Bonn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Schlucht liegt zwischen Bingen und Bonn?`, correct_answer: "Rheinschlucht", trial_name: "a_Rhine_0_qa_1"} 
};var a_Rhine_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie entstand die Rheinschlucht?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie entstand die Rheinschlucht?`, correct_answer: "Erosion", trial_name: "a_Rhine_0_qa_2"} 
};var a_Rhine_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie heißt das Gebiet in der Nähe der Rheinschlucht mit Burgen aus dem Mittelalter?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie heißt das Gebiet in der Nähe der Rheinschlucht mit Burgen aus dem Mittelalter?`, correct_answer: "der romantische Rhein", trial_name: "a_Rhine_0_qa_3"} 
};var a_Rhine_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was fließt zwischen Bingen und Bonn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was fließt zwischen Bingen und Bonn?`, correct_answer: "Mittelrhein", trial_name: "a_Rhine_0_qa_4"} 
};var a_Rhine_0_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wohin fließt der Mittelrhein zwischen Bingen und Bonn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wohin fließt der Mittelrhein zwischen Bingen und Bonn?`, correct_answer: "Rheinschlucht", trial_name: "a_Rhine_0_qa_5"} 
};var a_Rhine_0_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wofür ist die Rheinschlucht bekannt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wofür ist die Rheinschlucht bekannt?`, correct_answer: "Burgen und Weinberge", trial_name: "a_Rhine_0_qa_6"} 
};var a_Rhine_0_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie heißt der von der UNESCO anerkannte Abschnitt der Rheinschlucht?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie heißt der von der UNESCO anerkannte Abschnitt der Rheinschlucht?`, correct_answer: "der romantische Rhein", trial_name: "a_Rhine_0_qa_7"} 
};var a_Rhine_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Das <span id="a_Rhine_1_qa_0">Rhein-Maas-</span> Delta, die wichtigste Naturregion der Niederlande, beginnt <span id="a_Rhine_1_qa_1">bei Millingen aan de Rijn</span>, nahe der deutsch-niederländischen Grenze an der Teilung des Rheins in Waal und Nederrijn. Da der Rhein den größten Teil des Wassers beiträgt, wird häufig die kürzere Bezeichnung <span id="a_Rhine_1_qa_2">Rheindelta</span> verwendet. Dieser Name wird aber auch für das Flussdelta verwendet, in dem der Rhein in den Bodensee mündet, so dass es deutlicher ist, das größere der beiden Rhein-Maas-Delta oder auch Rhein-Maas-Schelde-Delta zu nennen, da die Schelde im gleichen Delta endet.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Rhine_1_qa_0','#a_Rhine_1_qa_1','#a_Rhine_1_qa_2'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Rhine_1_1280_720.png';
a.click();});}},data: { trial_name: "a_Rhine_1"}
};
var a_Rhine_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie heißt das Delta in den Niederlanden? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie heißt das Delta in den Niederlanden? `, correct_answer: "Rhein-Maas-", trial_name: "a_Rhine_1_qa_0"} 
};var a_Rhine_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wo beginnt das Delta in den Niederlanden?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wo beginnt das Delta in den Niederlanden?`, correct_answer: "bei Millingen aan de Rijn", trial_name: "a_Rhine_1_qa_1"} 
};var a_Rhine_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie lautet der Spitzname für das Delta in den Niederlanden?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie lautet der Spitzname für das Delta in den Niederlanden?`, correct_answer: "Rheindelta", trial_name: "a_Rhine_1_qa_2"} 
};var a_Islamism_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Islamism_1_qa_0">Islamistische Bewegungen</span> wie die Muslimbrüder "sind bekannt dafür, <span id="a_Islamism_1_qa_2">Unterkünfte, Bildungshilfen, kostenlose oder kostengünstige medizinische Kliniken, Wohnraumhilfen</span> für Studenten von außerhalb der Stadt, Studentenberatungsgruppen, die Förderung kostengünstiger Massenhochzeiten zur <span id="a_Islamism_1_qa_4">unerschwinglich teurer Mitgiftforderungen</span>, Rechtsbeistand, Sportanlagen und Frauengruppen bereitzustellen". All dies schneidet im Vergleich zu <span id="a_Islamism_1_qa_1">inkompetenten, ineffizienten oder nachlässigen</span> Regierungen, deren Engagement für soziale Gerechtigkeit auf <span id="a_Islamism_1_qa_3">Rhetorik</span> beschränkt ist, sehr gut ab.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Islamism_1_qa_0','#a_Islamism_1_qa_1','#a_Islamism_1_qa_2','#a_Islamism_1_qa_3','#a_Islamism_1_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Islamism_1_1280_720.png';
a.click();});}},data: { trial_name: "a_Islamism_1"}
};
var a_Islamism_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Art von Bewegung ist die Muslimbruderschaft?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Art von Bewegung ist die Muslimbruderschaft?`, correct_answer: "Islamistische Bewegungen", trial_name: "a_Islamism_1_qa_0"} 
};var a_Islamism_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Die Kompetenzen der Muslimischen Bruderschaft stehen im Vergleich zu welchen lokalen Regierungen gut da?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Die Kompetenzen der Muslimischen Bruderschaft stehen im Vergleich zu welchen lokalen Regierungen gut da?`, correct_answer: "inkompetenten, ineffizienten oder nachlässigen", trial_name: "a_Islamism_1_qa_1"} 
};var a_Islamism_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Für welche Art von Hilfe für Studenten außerhalb der Stadt ist die Muslimbruderschaft bekannt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Für welche Art von Hilfe für Studenten außerhalb der Stadt ist die Muslimbruderschaft bekannt?`, correct_answer: "Unterkünfte, Bildungshilfen, kostenlose oder kostengünstige medizinische Kliniken, Wohnraumhilfen", trial_name: "a_Islamism_1_qa_2"} 
};var a_Islamism_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Worauf beschränkt sich das Engagement einer inkompetenten Regierung für soziale Gerechtigkeit?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Worauf beschränkt sich das Engagement einer inkompetenten Regierung für soziale Gerechtigkeit?`, correct_answer: "Rhetorik", trial_name: "a_Islamism_1_qa_3"} 
};var a_Islamism_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Warum hat die Muslimbruderschaft preiswerte Massenhochzeiten gefördert?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Warum hat die Muslimbruderschaft preiswerte Massenhochzeiten gefördert?`, correct_answer: "unerschwinglich teurer Mitgiftforderungen", trial_name: "a_Islamism_1_qa_4"} 
};var a_Islamism_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Viele Jahre lang herrschte im Sudan ein <span id="a_Islamism_3_qa_0">islamistisches</span> Regime unter der Führung von <span id="a_Islamism_3_qa_1">Hassan al-Turabi</span>. Seine <span id="a_Islamism_3_qa_2">Nationale Islamische Front</span> gewann erstmals an Einfluss, als der Machthaber General Gaafar al-Nimeiry 1979 Mitglieder einlud, in seiner Regierung zu dienen. Turabi baute eine starke wirtschaftliche Basis mit <span id="a_Islamism_3_qa_3">Geld aus ausländischen islamistischen Bankensystemen</span> auf, insbesondere von solchen mit Verbindung zu Saudi-Arabien. Er rekrutierte und baute auch ein Kader einflussreicher Loyalisten auf, indem er sympathisierende Studenten in die <span id="a_Islamism_3_qa_4">Universität und Militärakademie</span> einbrachte, während er als Bildungsminister amtierte.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Islamism_3_qa_0','#a_Islamism_3_qa_1','#a_Islamism_3_qa_2','#a_Islamism_3_qa_3','#a_Islamism_3_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Islamism_3_1280_720.png';
a.click();});}},data: { trial_name: "a_Islamism_3"}
};
var a_Islamism_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Art von Regime herrschte viele Jahre lang über den Sudan?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Art von Regime herrschte viele Jahre lang über den Sudan?`, correct_answer: "islamistisches", trial_name: "a_Islamism_3_qa_0"} 
};var a_Islamism_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wer war der Führer des islamistischen Regimes im Sudan?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wer war der Führer des islamistischen Regimes im Sudan?`, correct_answer: "Hassan al-Turabi", trial_name: "a_Islamism_3_qa_1"} 
};var a_Islamism_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche Organisation hat General Gaafar al-Nimeiry Mitglieder eingeladen, in seiner Regierung zu dienen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche Organisation hat General Gaafar al-Nimeiry Mitglieder eingeladen, in seiner Regierung zu dienen?`, correct_answer: "Nationale Islamische Front", trial_name: "a_Islamism_3_qa_2"} 
};var a_Islamism_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie hat Turabi eine starke wirtschaftliche Basis aufgebaut?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie hat Turabi eine starke wirtschaftliche Basis aufgebaut?`, correct_answer: "Geld aus ausländischen islamistischen Bankensystemen", trial_name: "a_Islamism_3_qa_3"} 
};var a_Islamism_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wo hat Turabi Studenten untergebracht, die mit seinen Ansichten sympathisierten?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wo hat Turabi Studenten untergebracht, die mit seinen Ansichten sympathisierten?`, correct_answer: "Universität und Militärakademie", trial_name: "a_Islamism_3_qa_4"} 
};var a_FrenchandIndianWar_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In Europa gibt es für das US-amerikanische Theater des Siebenjährigen Krieges in der Regel keinen eigenständigen Namen. Der gesamte internationale Konflikt wird als Siebenjähriger Krieg bezeichnet. „Sieben Jahre“ beziehen sich auf Ereignisse in Europa, von der offiziellen Kriegserklärung im Jahr <span id="a_FrenchandIndianWar_0_qa_0">1756 bis zur Unterzeichnung des Friedensvertrags im Jahr 1763</span>. Diese Daten entsprechen nicht den Auseinandersetzungen auf dem nordamerikanischen Festland, wo die Schlachten zwischen den beiden Kolonialmächten in <span id="a_FrenchandIndianWar_0_qa_1">sechs Jahren</span>, vom <span id="a_FrenchandIndianWar_0_qa_3">Gefecht von Jumonville Glen</span> 1754 bis hin zur Eroberung von Montreal <span id="a_FrenchandIndianWar_0_qa_2">1760</span> weitgehend beigelegt wurden.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_FrenchandIndianWar_0_qa_0','#a_FrenchandIndianWar_0_qa_1','#a_FrenchandIndianWar_0_qa_2','#a_FrenchandIndianWar_0_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_FrenchandIndianWar_0_1280_720.png';
a.click();});}},data: { trial_name: "a_FrenchandIndianWar_0"}
};
var a_FrenchandIndianWar_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welchen zeitlichen Rahmen umfasst der Siebenjährige Krieg?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welchen zeitlichen Rahmen umfasst der Siebenjährige Krieg?`, correct_answer: "1756 bis zur Unterzeichnung des Friedensvertrags im Jahr 1763", trial_name: "a_FrenchandIndianWar_0_qa_0"} 
};var a_FrenchandIndianWar_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie lange dauerten die Gefechte im Siebenjährigen Krieg?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie lange dauerten die Gefechte im Siebenjährigen Krieg?`, correct_answer: "sechs Jahren", trial_name: "a_FrenchandIndianWar_0_qa_1"} 
};var a_FrenchandIndianWar_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">?Wann wurde Montreal eingenommen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `?Wann wurde Montreal eingenommen?`, correct_answer: "1760", trial_name: "a_FrenchandIndianWar_0_qa_2"} 
};var a_FrenchandIndianWar_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was war die erste Schlacht von 1754?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was war die erste Schlacht von 1754?`, correct_answer: "Gefecht von Jumonville Glen", trial_name: "a_FrenchandIndianWar_0_qa_3"} 
};var a_Force_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Durch die Kombination der Definition von <span id="a_Force_3_qa_0">elektrischem Strom</span> als Zeitrate der Änderung der elektrischen Ladung beschreibt eine Regel der Vektorvervielfachung namens <span id="a_Force_3_qa_2">Lorentzkraft</span> die Kraft auf eine sich in einem Magnetfeld bewegende Ladung. Die Verbindung zwischen Elektrizität und Magnetismus ermöglicht die Beschreibung einer <span id="a_Force_3_qa_1">einheitlichen elektromagnetischen Kraft</span>, die auf eine Ladung wirkt. Diese Kraft kann als Summe aus der <span id="a_Force_3_qa_3">elektrostatischen Kraft</span> (aufgrund des elektrischen Feldes) und der Magnetkraft (aufgrund des Magnetfeldes) angegeben werden. In seiner Vollständigkeit lautet das Gesetz wie folgt:</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Force_3_qa_0','#a_Force_3_qa_1','#a_Force_3_qa_2','#a_Force_3_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Force_3_1280_720.png';
a.click();});}},data: { trial_name: "a_Force_3"}
};
var a_Force_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie hoch ist die Zeitspanne der Änderung der elektrischen Ladung?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie hoch ist die Zeitspanne der Änderung der elektrischen Ladung?`, correct_answer: "elektrischem Strom", trial_name: "a_Force_3_qa_0"} 
};var a_Force_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Welche magnetische und elektrische Kraft wirkt auf eine Ladung?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Welche magnetische und elektrische Kraft wirkt auf eine Ladung?`, correct_answer: "einheitlichen elektromagnetischen Kraft", trial_name: "a_Force_3_qa_1"} 
};var a_Force_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Wie heißt die Kraft, die eine Ladung definiert, die sich durch ein Magnetfeld bewegt?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Wie heißt die Kraft, die eine Ladung definiert, die sich durch ein Magnetfeld bewegt?`, correct_answer: "Lorentzkraft", trial_name: "a_Force_3_qa_2"} 
};var a_Force_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Die elektrostatische und die magnetische Kraft werden als Summe wovon angegeben?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Die elektrostatische und die magnetische Kraft werden als Summe wovon angegeben?`, correct_answer: "elektrostatischen Kraft", trial_name: "a_Force_3_qa_3"} 
};var a_Force_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Wo ist die relevante Querschnittsfläche für das Volumen, für das der Spannungstensor berechnet wird. Dieser <span id="a_Force_4_qa_3">Formalismus</span> beinhaltet <span id="a_Force_4_qa_1"><span id="a_Force_4_qa_2">Druckkräfte</span></span>, die mit Kräften verbunden sind, die normal zur Querschnittsfläche wirken (die Matrixdiagonalen des Tensors), sowie Scherkräfte, die mit Kräften verbunden sind, die parallel zur Querschnittsfläche wirken (die nicht-diagonalen Elemente). Der <span id="a_Force_4_qa_0">Spannungstensor</span> berücksichtigt Kräfte, die alle Dehnungen (Verformungen) einschließlich der Zugbelastungen und Kompressionen verursachen.:133–134:38-1–38-11</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Force_4_qa_0','#a_Force_4_qa_1','#a_Force_4_qa_2','#a_Force_4_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Force_4_1280_720.png';
a.click();});}},data: { trial_name: "a_Force_4"}
};
var a_Force_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was verursacht Spannungen in den Strukturen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was verursacht Spannungen in den Strukturen?`, correct_answer: "Spannungstensor", trial_name: "a_Force_4_qa_0"} 
};var a_Force_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was wird verwendet, um die Querschnittsfläche im Volumen eines Objekts zu berechnen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was wird verwendet, um die Querschnittsfläche im Volumen eines Objekts zu berechnen?`, correct_answer: "Druckkräfte", trial_name: "a_Force_4_qa_1"} 
};var a_Force_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was ist mit Normalkräften verbunden?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was ist mit Normalkräften verbunden?`, correct_answer: "Druckkräfte", trial_name: "a_Force_4_qa_2"} 
};var a_Force_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Was beinhaltet Druckkräfte bei der Berechnung der Fläche im Volumen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Was beinhaltet Druckkräfte bei der Berechnung der Fläche im Volumen?`, correct_answer: "Formalismus", trial_name: "a_Force_4_qa_3"} 
};var xquad_trials_array = [[a_SuperBowl50_1,[a_SuperBowl50_1_qa_0,a_SuperBowl50_1_qa_1,a_SuperBowl50_1_qa_2,a_SuperBowl50_1_qa_3,a_SuperBowl50_1_qa_4,a_SuperBowl50_1_qa_5,a_SuperBowl50_1_qa_6,a_SuperBowl50_1_qa_7,a_SuperBowl50_1_qa_8,a_SuperBowl50_1_qa_9,a_SuperBowl50_1_qa_10,a_SuperBowl50_1_qa_11,a_SuperBowl50_1_qa_12,a_SuperBowl50_1_qa_13,a_SuperBowl50_1_qa_14,a_SuperBowl50_1_qa_15]],[a_SuperBowl50_2,[a_SuperBowl50_2_qa_0,a_SuperBowl50_2_qa_1,a_SuperBowl50_2_qa_2,a_SuperBowl50_2_qa_3,a_SuperBowl50_2_qa_4,a_SuperBowl50_2_qa_5,a_SuperBowl50_2_qa_6,a_SuperBowl50_2_qa_7,a_SuperBowl50_2_qa_8,a_SuperBowl50_2_qa_9,a_SuperBowl50_2_qa_10,a_SuperBowl50_2_qa_11,a_SuperBowl50_2_qa_12,a_SuperBowl50_2_qa_13,a_SuperBowl50_2_qa_14,a_SuperBowl50_2_qa_15,a_SuperBowl50_2_qa_16]],[a_SuperBowl50_3,[a_SuperBowl50_3_qa_0,a_SuperBowl50_3_qa_1,a_SuperBowl50_3_qa_2,a_SuperBowl50_3_qa_3,a_SuperBowl50_3_qa_4,a_SuperBowl50_3_qa_5,a_SuperBowl50_3_qa_6,a_SuperBowl50_3_qa_7,a_SuperBowl50_3_qa_8,a_SuperBowl50_3_qa_9,a_SuperBowl50_3_qa_10,a_SuperBowl50_3_qa_11]],[a_Warsaw_0,[a_Warsaw_0_qa_0,a_Warsaw_0_qa_1,a_Warsaw_0_qa_2,a_Warsaw_0_qa_3,a_Warsaw_0_qa_4]],[a_Warsaw_1,[a_Warsaw_1_qa_0,a_Warsaw_1_qa_1,a_Warsaw_1_qa_2,a_Warsaw_1_qa_3,a_Warsaw_1_qa_4]],[a_Warsaw_2,[a_Warsaw_2_qa_0,a_Warsaw_2_qa_1,a_Warsaw_2_qa_2,a_Warsaw_2_qa_3,a_Warsaw_2_qa_4]],[a_Warsaw_4,[a_Warsaw_4_qa_0,a_Warsaw_4_qa_1,a_Warsaw_4_qa_2,a_Warsaw_4_qa_3,a_Warsaw_4_qa_4]],[a_Normans_4,[a_Normans_4_qa_0]],[a_NikolaTesla_1,[a_NikolaTesla_1_qa_0,a_NikolaTesla_1_qa_1,a_NikolaTesla_1_qa_2,a_NikolaTesla_1_qa_3,a_NikolaTesla_1_qa_4,a_NikolaTesla_1_qa_5,a_NikolaTesla_1_qa_6,a_NikolaTesla_1_qa_7,a_NikolaTesla_1_qa_8,a_NikolaTesla_1_qa_9]],[a_NikolaTesla_3,[a_NikolaTesla_3_qa_0,a_NikolaTesla_3_qa_1,a_NikolaTesla_3_qa_2]],[a_NikolaTesla_4,[a_NikolaTesla_4_qa_0,a_NikolaTesla_4_qa_1,a_NikolaTesla_4_qa_2]],[a_Computationalcomplexitytheory_0,[a_Computationalcomplexitytheory_0_qa_0,a_Computationalcomplexitytheory_0_qa_1,a_Computationalcomplexitytheory_0_qa_2]],[a_Computationalcomplexitytheory_1,[a_Computationalcomplexitytheory_1_qa_0,a_Computationalcomplexitytheory_1_qa_1,a_Computationalcomplexitytheory_1_qa_2,a_Computationalcomplexitytheory_1_qa_3,a_Computationalcomplexitytheory_1_qa_4]],[a_Computationalcomplexitytheory_2,[a_Computationalcomplexitytheory_2_qa_0,a_Computationalcomplexitytheory_2_qa_1]],[a_Computationalcomplexitytheory_4,[a_Computationalcomplexitytheory_4_qa_0,a_Computationalcomplexitytheory_4_qa_1,a_Computationalcomplexitytheory_4_qa_2,a_Computationalcomplexitytheory_4_qa_3]],[a_Teacher_0,[a_Teacher_0_qa_0,a_Teacher_0_qa_1,a_Teacher_0_qa_2,a_Teacher_0_qa_3,a_Teacher_0_qa_4]],[a_Teacher_1,[a_Teacher_1_qa_0,a_Teacher_1_qa_1,a_Teacher_1_qa_2,a_Teacher_1_qa_3,a_Teacher_1_qa_4]],[a_Teacher_3,[a_Teacher_3_qa_0,a_Teacher_3_qa_1,a_Teacher_3_qa_2,a_Teacher_3_qa_3]],[a_Teacher_4,[a_Teacher_4_qa_0,a_Teacher_4_qa_1,a_Teacher_4_qa_2,a_Teacher_4_qa_3,a_Teacher_4_qa_4]],[a_MartinLuther_0,[a_MartinLuther_0_qa_0,a_MartinLuther_0_qa_1,a_MartinLuther_0_qa_2,a_MartinLuther_0_qa_3,a_MartinLuther_0_qa_4]],[a_MartinLuther_4,[a_MartinLuther_4_qa_0,a_MartinLuther_4_qa_1,a_MartinLuther_4_qa_2]],[a_SouthernCalifornia_3,[a_SouthernCalifornia_3_qa_0,a_SouthernCalifornia_3_qa_1,a_SouthernCalifornia_3_qa_2,a_SouthernCalifornia_3_qa_3,a_SouthernCalifornia_3_qa_4]],[a_SouthernCalifornia_4,[a_SouthernCalifornia_4_qa_0,a_SouthernCalifornia_4_qa_1,a_SouthernCalifornia_4_qa_2,a_SouthernCalifornia_4_qa_3,a_SouthernCalifornia_4_qa_4]],[a_SkyUnitedKingdom_4,[a_SkyUnitedKingdom_4_qa_0,a_SkyUnitedKingdom_4_qa_1,a_SkyUnitedKingdom_4_qa_2,a_SkyUnitedKingdom_4_qa_3,a_SkyUnitedKingdom_4_qa_4]],[a_VictoriaAustralia_2,[a_VictoriaAustralia_2_qa_0,a_VictoriaAustralia_2_qa_1,a_VictoriaAustralia_2_qa_2,a_VictoriaAustralia_2_qa_3,a_VictoriaAustralia_2_qa_4]],[a_VictoriaAustralia_3,[a_VictoriaAustralia_3_qa_0,a_VictoriaAustralia_3_qa_1,a_VictoriaAustralia_3_qa_2,a_VictoriaAustralia_3_qa_3,a_VictoriaAustralia_3_qa_4]],[a_Steamengine_0,[a_Steamengine_0_qa_0,a_Steamengine_0_qa_1,a_Steamengine_0_qa_2,a_Steamengine_0_qa_3]],[a_Steamengine_3,[a_Steamengine_3_qa_0,a_Steamengine_3_qa_1,a_Steamengine_3_qa_2,a_Steamengine_3_qa_3,a_Steamengine_3_qa_4]],[a_1973oilcrisis_2,[a_1973oilcrisis_2_qa_0,a_1973oilcrisis_2_qa_1,a_1973oilcrisis_2_qa_2,a_1973oilcrisis_2_qa_3]],[a_Apolloprogram_4,[a_Apolloprogram_4_qa_0,a_Apolloprogram_4_qa_1,a_Apolloprogram_4_qa_2,a_Apolloprogram_4_qa_3,a_Apolloprogram_4_qa_4]],[a_Amazonrainforest_2,[a_Amazonrainforest_2_qa_0,a_Amazonrainforest_2_qa_1,a_Amazonrainforest_2_qa_2,a_Amazonrainforest_2_qa_3,a_Amazonrainforest_2_qa_4]],[a_Amazonrainforest_3,[a_Amazonrainforest_3_qa_0,a_Amazonrainforest_3_qa_1,a_Amazonrainforest_3_qa_2,a_Amazonrainforest_3_qa_3,a_Amazonrainforest_3_qa_4]],[a_FresnoCalifornia_0,[a_FresnoCalifornia_0_qa_0,a_FresnoCalifornia_0_qa_1,a_FresnoCalifornia_0_qa_2,a_FresnoCalifornia_0_qa_3,a_FresnoCalifornia_0_qa_4]],[a_FresnoCalifornia_3,[a_FresnoCalifornia_3_qa_0,a_FresnoCalifornia_3_qa_1,a_FresnoCalifornia_3_qa_2,a_FresnoCalifornia_3_qa_3]],[a_Geology_4,[a_Geology_4_qa_0,a_Geology_4_qa_1,a_Geology_4_qa_2,a_Geology_4_qa_3]],[a_AmericanBroadcastingCompany_0,[a_AmericanBroadcastingCompany_0_qa_0,a_AmericanBroadcastingCompany_0_qa_1,a_AmericanBroadcastingCompany_0_qa_2,a_AmericanBroadcastingCompany_0_qa_3]],[a_Construction_0,[a_Construction_0_qa_0,a_Construction_0_qa_1,a_Construction_0_qa_2,a_Construction_0_qa_3,a_Construction_0_qa_4]],[a_Construction_2,[a_Construction_2_qa_0,a_Construction_2_qa_1,a_Construction_2_qa_2,a_Construction_2_qa_3]],[a_Privateschool_0,[a_Privateschool_0_qa_0,a_Privateschool_0_qa_1,a_Privateschool_0_qa_2,a_Privateschool_0_qa_3]],[a_Privateschool_2,[a_Privateschool_2_qa_0,a_Privateschool_2_qa_1,a_Privateschool_2_qa_2,a_Privateschool_2_qa_3,a_Privateschool_2_qa_4]],[a_HarvardUniversity_1,[a_HarvardUniversity_1_qa_0,a_HarvardUniversity_1_qa_1,a_HarvardUniversity_1_qa_2]],[a_DoctorWho_3,[a_DoctorWho_3_qa_0,a_DoctorWho_3_qa_1,a_DoctorWho_3_qa_2,a_DoctorWho_3_qa_3,a_DoctorWho_3_qa_4]],[a_UniversityofChicago_3,[a_UniversityofChicago_3_qa_0,a_UniversityofChicago_3_qa_1,a_UniversityofChicago_3_qa_2,a_UniversityofChicago_3_qa_3,a_UniversityofChicago_3_qa_4]],[a_Yuandynasty_4,[a_Yuandynasty_4_qa_0,a_Yuandynasty_4_qa_1,a_Yuandynasty_4_qa_2,a_Yuandynasty_4_qa_3]],[a_Kenya_0,[a_Kenya_0_qa_0,a_Kenya_0_qa_1,a_Kenya_0_qa_2,a_Kenya_0_qa_3]],[a_Kenya_2,[a_Kenya_2_qa_0,a_Kenya_2_qa_1,a_Kenya_2_qa_2,a_Kenya_2_qa_3]],[a_IntergovernmentalPanelonClimateChange_0,[a_IntergovernmentalPanelonClimateChange_0_qa_0,a_IntergovernmentalPanelonClimateChange_0_qa_1,a_IntergovernmentalPanelonClimateChange_0_qa_2,a_IntergovernmentalPanelonClimateChange_0_qa_3,a_IntergovernmentalPanelonClimateChange_0_qa_4]],[a_IntergovernmentalPanelonClimateChange_2,[a_IntergovernmentalPanelonClimateChange_2_qa_0,a_IntergovernmentalPanelonClimateChange_2_qa_1,a_IntergovernmentalPanelonClimateChange_2_qa_2,a_IntergovernmentalPanelonClimateChange_2_qa_3]],[a_Chloroplast_1,[a_Chloroplast_1_qa_0,a_Chloroplast_1_qa_1,a_Chloroplast_1_qa_2,a_Chloroplast_1_qa_3,a_Chloroplast_1_qa_4]],[a_Chloroplast_4,[a_Chloroplast_4_qa_0,a_Chloroplast_4_qa_1,a_Chloroplast_4_qa_2]],[a_Rhine_0,[a_Rhine_0_qa_0,a_Rhine_0_qa_1,a_Rhine_0_qa_2,a_Rhine_0_qa_3,a_Rhine_0_qa_4,a_Rhine_0_qa_5,a_Rhine_0_qa_6,a_Rhine_0_qa_7]],[a_Rhine_1,[a_Rhine_1_qa_0,a_Rhine_1_qa_1,a_Rhine_1_qa_2]],[a_Islamism_1,[a_Islamism_1_qa_0,a_Islamism_1_qa_1,a_Islamism_1_qa_2,a_Islamism_1_qa_3,a_Islamism_1_qa_4]],[a_Islamism_3,[a_Islamism_3_qa_0,a_Islamism_3_qa_1,a_Islamism_3_qa_2,a_Islamism_3_qa_3,a_Islamism_3_qa_4]],[a_FrenchandIndianWar_0,[a_FrenchandIndianWar_0_qa_0,a_FrenchandIndianWar_0_qa_1,a_FrenchandIndianWar_0_qa_2,a_FrenchandIndianWar_0_qa_3]],[a_Force_3,[a_Force_3_qa_0,a_Force_3_qa_1,a_Force_3_qa_2,a_Force_3_qa_3]],[a_Force_4,[a_Force_4_qa_0,a_Force_4_qa_1,a_Force_4_qa_2,a_Force_4_qa_3]]];
