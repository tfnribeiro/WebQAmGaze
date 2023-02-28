var a_SuperBowl50_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_SuperBowl50_1_qa_5">Бронкос</span> победил <span id="a_SuperBowl50_1_qa_0"><span id="a_SuperBowl50_1_qa_10"><span id="a_SuperBowl50_1_qa_13">Питтсбург Стилерс</span></span></span> в дивизионном раунде, <span id="a_SuperBowl50_1_qa_6">23–16</span>, набрав <span id="a_SuperBowl50_1_qa_1"><span id="a_SuperBowl50_1_qa_11">11</span></span> очков в последние три минуты игры. Затем они победили действующего чемпиона Суперкубка XLIX <span id="a_SuperBowl50_1_qa_2"><span id="a_SuperBowl50_1_qa_7"><span id="a_SuperBowl50_1_qa_12"><span id="a_SuperBowl50_1_qa_14">Нью-Ингленд Пэтриотс</span></span></span></span> в игре чемпионата АФК, <span id="a_SuperBowl50_1_qa_3">20–18</span>, перехватив пас на попытку двухочковой конверсии Нью-Ингленд, когда на часах оставалось <span id="a_SuperBowl50_1_qa_4"><span id="a_SuperBowl50_1_qa_8"><span id="a_SuperBowl50_1_qa_15">17</span></span> секунд</span>. Несмотря на проблемы <span id="a_SuperBowl50_1_qa_9">Мэннинга</span> с перехватами в течение сезона, он не проиграл ни одной в их двух игр плей-офф. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Кто проиграл Бронкосу в дивизионном раунде? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто проиграл Бронкосу в дивизионном раунде? `, correct_answer: "Питтсбург Стилерс", trial_name: "a_SuperBowl50_1_qa_0"} 
};var a_SuperBowl50_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько очков Бронкос набрал за последние три минуты игры против Питтсбурга?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько очков Бронкос набрал за последние три минуты игры против Питтсбурга?`, correct_answer: "11", trial_name: "a_SuperBowl50_1_qa_1"} 
};var a_SuperBowl50_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто выиграл Суперкубок XLIX?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто выиграл Суперкубок XLIX?`, correct_answer: "Нью-Ингленд Пэтриотс", trial_name: "a_SuperBowl50_1_qa_2"} 
};var a_SuperBowl50_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой был финальный счет игры чемпионата АФК?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой был финальный счет игры чемпионата АФК?`, correct_answer: "20–18", trial_name: "a_SuperBowl50_1_qa_3"} 
};var a_SuperBowl50_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько времени оставалось на часах, когда Бронкос сделал перехват, который завершил игру Чемпионата АФК?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько времени оставалось на часах, когда Бронкос сделал перехват, который завершил игру Чемпионата АФК?`, correct_answer: "17 секунд", trial_name: "a_SuperBowl50_1_qa_4"} 
};var a_SuperBowl50_1_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какая команда выиграла дивизионный раунд между Бронкосом и Стилерсом? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая команда выиграла дивизионный раунд между Бронкосом и Стилерсом? `, correct_answer: "Бронкос", trial_name: "a_SuperBowl50_1_qa_5"} 
};var a_SuperBowl50_1_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой был заключительный счет игры между Бронкосом и Стилерсом?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой был заключительный счет игры между Бронкосом и Стилерсом?`, correct_answer: "23–16", trial_name: "a_SuperBowl50_1_qa_6"} 
};var a_SuperBowl50_1_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто выиграл Суперкубок XLIX? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто выиграл Суперкубок XLIX? `, correct_answer: "Нью-Ингленд Пэтриотс", trial_name: "a_SuperBowl50_1_qa_7"} 
};var a_SuperBowl50_1_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько секунд осталось в игре, когда Бронкос перехватил пас, что принесло победу в игре?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько секунд осталось в игре, когда Бронкос перехватил пас, что принесло победу в игре?`, correct_answer: "17", trial_name: "a_SuperBowl50_1_qa_8"} 
};var a_SuperBowl50_1_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Во время игр плей-офф Бронкос кто вообще не делал вброса?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Во время игр плей-офф Бронкос кто вообще не делал вброса?`, correct_answer: "Мэннинга", trial_name: "a_SuperBowl50_1_qa_9"} 
};var a_SuperBowl50_1_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кого Бронкос победил в дивизионной игре?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кого Бронкос победил в дивизионной игре?`, correct_answer: "Питтсбург Стилерс", trial_name: "a_SuperBowl50_1_qa_10"} 
};var a_SuperBowl50_1_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько заключительных очков набрал Бронкос за последние три минуты игры с Питтсбургом?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько заключительных очков набрал Бронкос за последние три минуты игры с Питтсбургом?`, correct_answer: "11", trial_name: "a_SuperBowl50_1_qa_11"} 
};var a_SuperBowl50_1_qa_12 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кого победил Бронкос в игре чемпионата АФК?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кого победил Бронкос в игре чемпионата АФК?`, correct_answer: "Нью-Ингленд Пэтриотс", trial_name: "a_SuperBowl50_1_qa_12"} 
};var a_SuperBowl50_1_qa_13 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кого побил Бронкос в 2015 году, чтобы победить в своем дивизионе?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кого побил Бронкос в 2015 году, чтобы победить в своем дивизионе?`, correct_answer: "Питтсбург Стилерс", trial_name: "a_SuperBowl50_1_qa_13"} 
};var a_SuperBowl50_1_qa_14 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто побил Бронкос, чтобы стать чемпионами АФК?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто побил Бронкос, чтобы стать чемпионами АФК?`, correct_answer: "Нью-Ингленд Пэтриотс", trial_name: "a_SuperBowl50_1_qa_14"} 
};var a_SuperBowl50_1_qa_15 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько секунд осталось в игре, когда Пэтриотс не смогли перевести 2-очковую конверсию? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько секунд осталось в игре, когда Пэтриотс не смогли перевести 2-очковую конверсию? `, correct_answer: "17", trial_name: "a_SuperBowl50_1_qa_15"} 
};var a_SuperBowl50_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_SuperBowl50_2_qa_8"><span id="a_SuperBowl50_2_qa_11"><span id="a_SuperBowl50_2_qa_14">Пейтон Мэннинг</span></span></span> стал первым квотербеком, который привел <span id="a_SuperBowl50_2_qa_9"><span id="a_SuperBowl50_2_qa_10">две</span></span> разных команды к нескольким Суперкубкам. Он также самый старый защитник, когда-либо игравший в Суперкубке в возрасте <span id="a_SuperBowl50_2_qa_0"><span id="a_SuperBowl50_2_qa_15">39</span></span> лет. Прошлый рекорд удерживал <span id="a_SuperBowl50_2_qa_1"><span id="a_SuperBowl50_2_qa_6"><span id="a_SuperBowl50_2_qa_12"><span id="a_SuperBowl50_2_qa_16">Джон Элвей</span></span></span></span>, который привел <span id="a_SuperBowl50_2_qa_4"><span id="a_SuperBowl50_2_qa_5">Бронкос</span></span> к победе в <span id="a_SuperBowl50_2_qa_13">Суперкубке XXXIII</span> в возрасте <span id="a_SuperBowl50_2_qa_2"><span id="a_SuperBowl50_2_qa_7">38</span></span> лет и в настоящее время является <span id="a_SuperBowl50_2_qa_3">исполнительным вице-президентом по футболу и генеральным директором</span> Денвера. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Сколько лет было Пейтону Мэннингу, когда он играл в Суперкубке 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько лет было Пейтону Мэннингу, когда он играл в Суперкубке 50?`, correct_answer: "39", trial_name: "a_SuperBowl50_2_qa_0"} 
};var a_SuperBowl50_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кому ранее принадлежал рекорд по игре старейшего квотербека в Суперкубке?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кому ранее принадлежал рекорд по игре старейшего квотербека в Суперкубке?`, correct_answer: "Джон Элвей", trial_name: "a_SuperBowl50_2_qa_1"} 
};var a_SuperBowl50_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько лет было Джону Элвею, когда он играл в Суперкубке XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько лет было Джону Элвею, когда он играл в Суперкубке XXXIII?`, correct_answer: "38", trial_name: "a_SuperBowl50_2_qa_2"} 
};var a_SuperBowl50_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какую роль в настоящее время играет Джон Элвей во франшизе Бронкоса?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какую роль в настоящее время играет Джон Элвей во франшизе Бронкоса?`, correct_answer: "исполнительным вице-президентом по футболу и генеральным директором", trial_name: "a_SuperBowl50_2_qa_3"} 
};var a_SuperBowl50_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">За кого играл Джон Элвей в Суперкубке XXXIII? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `За кого играл Джон Элвей в Суперкубке XXXIII? `, correct_answer: "Бронкос", trial_name: "a_SuperBowl50_2_qa_4"} 
};var a_SuperBowl50_2_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какая команда стала победителем Суперкубка XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая команда стала победителем Суперкубка XXXIII?`, correct_answer: "Бронкос", trial_name: "a_SuperBowl50_2_qa_5"} 
};var a_SuperBowl50_2_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто является генеральным менеджером Бронкоса?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто является генеральным менеджером Бронкоса?`, correct_answer: "Джон Элвей", trial_name: "a_SuperBowl50_2_qa_6"} 
};var a_SuperBowl50_2_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько лет было Элвею, когда он выиграл Суперкубок XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько лет было Элвею, когда он выиграл Суперкубок XXXIII?`, correct_answer: "38", trial_name: "a_SuperBowl50_2_qa_7"} 
};var a_SuperBowl50_2_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто был старейшим квотербеком в какой-либо игре Суперкубка?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто был старейшим квотербеком в какой-либо игре Суперкубка?`, correct_answer: "Пейтон Мэннинг", trial_name: "a_SuperBowl50_2_qa_8"} 
};var a_SuperBowl50_2_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько команд достигли Суперкубка, когда в их составе играл Мэннинг?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько команд достигли Суперкубка, когда в их составе играл Мэннинг?`, correct_answer: "две", trial_name: "a_SuperBowl50_2_qa_9"} 
};var a_SuperBowl50_2_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько различных команд довел до Суперкубка Пейтон Мэннинг? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько различных команд довел до Суперкубка Пейтон Мэннинг? `, correct_answer: "две", trial_name: "a_SuperBowl50_2_qa_10"} 
};var a_SuperBowl50_2_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто является старейшим квотербеком, который играл в Суперкубке?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто является старейшим квотербеком, который играл в Суперкубке?`, correct_answer: "Пейтон Мэннинг", trial_name: "a_SuperBowl50_2_qa_11"} 
};var a_SuperBowl50_2_qa_12 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто был старейшим квотербеком в Суперкубке до Мэннинга?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто был старейшим квотербеком в Суперкубке до Мэннинга?`, correct_answer: "Джон Элвей", trial_name: "a_SuperBowl50_2_qa_12"} 
};var a_SuperBowl50_2_qa_13 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой Суперкубок выиграл Элвей в 38 лет?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой Суперкубок выиграл Элвей в 38 лет?`, correct_answer: "Суперкубке XXXIII", trial_name: "a_SuperBowl50_2_qa_13"} 
};var a_SuperBowl50_2_qa_14 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто был первым квотербеком, который привел две команды к более чем одному Суперкубку?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто был первым квотербеком, который привел две команды к более чем одному Суперкубку?`, correct_answer: "Пейтон Мэннинг", trial_name: "a_SuperBowl50_2_qa_14"} 
};var a_SuperBowl50_2_qa_15 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько лет было Мэннингу, когда он играл в Суперкубке 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько лет было Мэннингу, когда он играл в Суперкубке 50?`, correct_answer: "39", trial_name: "a_SuperBowl50_2_qa_15"} 
};var a_SuperBowl50_2_qa_16 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как зовут квотербека, которому было 38 лет в Суперкубке XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как зовут квотербека, которому было 38 лет в Суперкубке XXXIII?`, correct_answer: "Джон Элвей", trial_name: "a_SuperBowl50_2_qa_16"} 
};var a_SuperBowl50_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_SuperBowl50_3_qa_0"><span id="a_SuperBowl50_3_qa_10">Шестикратный</span></span> обладатель Грэмми и номинант на <span id="a_SuperBowl50_3_qa_2">Оскар</span> <span id="a_SuperBowl50_3_qa_5"><span id="a_SuperBowl50_3_qa_7"><span id="a_SuperBowl50_3_qa_9">Леди Гага</span></span></span> исполнила <span id="a_SuperBowl50_3_qa_1"><span id="a_SuperBowl50_3_qa_3">государственный гимн</span></span>, а лауреат премии Оскар <span id="a_SuperBowl50_3_qa_6"><span id="a_SuperBowl50_3_qa_8"><span id="a_SuperBowl50_3_qa_11">Марли Мэтлин</span></span></span> обеспечила перевод на <span id="a_SuperBowl50_3_qa_4">Американский язык жестов</span> (ASL). </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Сколько премий Грэмми выиграла Леди Гага? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько премий Грэмми выиграла Леди Гага? `, correct_answer: "Шестикратный", trial_name: "a_SuperBowl50_3_qa_0"} 
};var a_SuperBowl50_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что пела Леди Гага?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что пела Леди Гага?`, correct_answer: "государственный гимн", trial_name: "a_SuperBowl50_3_qa_1"} 
};var a_SuperBowl50_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какую награду получила Марли Мэтлин?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какую награду получила Марли Мэтлин?`, correct_answer: "Оскар", trial_name: "a_SuperBowl50_3_qa_2"} 
};var a_SuperBowl50_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что Марли Мэтлин перевела?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что Марли Мэтлин перевела?`, correct_answer: "государственный гимн", trial_name: "a_SuperBowl50_3_qa_3"} 
};var a_SuperBowl50_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">На какой язык Марли Мэтлин перевела государственный гимн?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `На какой язык Марли Мэтлин перевела государственный гимн?`, correct_answer: "Американский язык жестов", trial_name: "a_SuperBowl50_3_qa_4"} 
};var a_SuperBowl50_3_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто пел государственный гимн?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто пел государственный гимн?`, correct_answer: "Леди Гага", trial_name: "a_SuperBowl50_3_qa_5"} 
};var a_SuperBowl50_3_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какая актриса выполнила перевод на американский язык жестов для игры?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая актриса выполнила перевод на американский язык жестов для игры?`, correct_answer: "Марли Мэтлин", trial_name: "a_SuperBowl50_3_qa_6"} 
};var a_SuperBowl50_3_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто исполнил государственный гимн на Суперкубке 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто исполнил государственный гимн на Суперкубке 50?`, correct_answer: "Леди Гага", trial_name: "a_SuperBowl50_3_qa_7"} 
};var a_SuperBowl50_3_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой актер выполнял сурдоперевод государственного гимна на Суперкубке 50? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой актер выполнял сурдоперевод государственного гимна на Суперкубке 50? `, correct_answer: "Марли Мэтлин", trial_name: "a_SuperBowl50_3_qa_8"} 
};var a_SuperBowl50_3_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто исполнил государственный гимн на Суперкубке 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто исполнил государственный гимн на Суперкубке 50?`, correct_answer: "Леди Гага", trial_name: "a_SuperBowl50_3_qa_9"} 
};var a_SuperBowl50_3_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько премий Грэмми выиграла Леди Гага согласно тексту?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько премий Грэмми выиграла Леди Гага согласно тексту?`, correct_answer: "Шестикратный", trial_name: "a_SuperBowl50_3_qa_10"} 
};var a_SuperBowl50_3_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто выполнил перевод государственного гимна на язык жестов на Суперкубке 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто выполнил перевод государственного гимна на язык жестов на Суперкубке 50?`, correct_answer: "Марли Мэтлин", trial_name: "a_SuperBowl50_3_qa_11"} 
};var a_Warsaw_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Рядом, в <span id="a_Warsaw_0_qa_0">Ogród Saski</span> (<span id="a_Warsaw_0_qa_1">Саксонский сад</span>), Летний театр работал с <span id="a_Warsaw_0_qa_2">1870 по 1939</span> гг., а в межвоенный период театральный комплекс также включал <span id="a_Warsaw_0_qa_3">Momus</span>, первое варшавское литературное кабаре и музыкальный театр Леона Шиллера "Мелодрам". <span id="a_Warsaw_0_qa_4">Театр Войцеха Богуславского</span> (1922–26) был лучшим примером "Польского монументального театра". С середины 1930-х годов в здании Большого театра находился Институт драматического искусства Упати - первая государственная академия драматического искусства с актерским и режиссерским отделениями.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Как будет "Саксонский сад" на польском языке?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как будет "Саксонский сад" на польском языке?`, correct_answer: "Ogród Saski", trial_name: "a_Warsaw_0_qa_0"} 
};var a_Warsaw_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Где был расположен Летний театр?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Где был расположен Летний театр?`, correct_answer: "Саксонский сад", trial_name: "a_Warsaw_0_qa_1"} 
};var a_Warsaw_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как долго работал Летний театр?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как долго работал Летний театр?`, correct_answer: "1870 по 1939", trial_name: "a_Warsaw_0_qa_2"} 
};var a_Warsaw_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Каким было первое литературное кабаре в Варшаве?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Каким было первое литературное кабаре в Варшаве?`, correct_answer: "Momus", trial_name: "a_Warsaw_0_qa_3"} 
};var a_Warsaw_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой театр был лучшим примером "Польского монументального театра"?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой театр был лучшим примером "Польского монументального театра"?`, correct_answer: "Театр Войцеха Богуславского", trial_name: "a_Warsaw_0_qa_4"} 
};var a_Warsaw_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Их местные конкуренты, <span id="a_Warsaw_1_qa_0">Полония Уорсоу</span>, имеют значительно меньше болельщиков, но им удалось выиграть Чемпионат Экстракласса в 2000 году. Они также выиграли чемпионат страны в <span id="a_Warsaw_1_qa_1">1946</span> года, а также <span id="a_Warsaw_1_qa_2">дважды</span> выиграли кубок. Свой стадион Полонии находится по адресу <span id="a_Warsaw_1_qa_3">Konwiktorska Street</span>, в десяти минутах ходьбы к северу от Старого города. Полония была переведена в низшую лигу из высшей лиги страны в 2013 году из-за их <span id="a_Warsaw_1_qa_4">катастрофического финансового положения</span>. Сейчас они играют в 4-й лиге (5-й уровень в Польше) - нижней профессиональной лиге в структуре Национальной польской футбольной ассоциации (PZPN). </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Кто выиграл Чемпионат Экстракласса в 2000 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто выиграл Чемпионат Экстракласса в 2000 году?`, correct_answer: "Полония Уорсоу", trial_name: "a_Warsaw_1_qa_0"} 
};var a_Warsaw_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда Полония Уорсоу выиграла чемпионат страны до 2000 года?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда Полония Уорсоу выиграла чемпионат страны до 2000 года?`, correct_answer: "1946", trial_name: "a_Warsaw_1_qa_1"} 
};var a_Warsaw_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько раз Полония выиграла кубок?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько раз Полония выиграла кубок?`, correct_answer: "дважды", trial_name: "a_Warsaw_1_qa_2"} 
};var a_Warsaw_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Где находится свой стадион Полонии?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Где находится свой стадион Полонии?`, correct_answer: "Konwiktorska Street", trial_name: "a_Warsaw_1_qa_3"} 
};var a_Warsaw_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Почему Полония была исключена из высшей лиги страны в 2013 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Почему Полония была исключена из высшей лиги страны в 2013 году?`, correct_answer: "катастрофического финансового положения", trial_name: "a_Warsaw_1_qa_4"} 
};var a_Warsaw_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">На протяжении всего своего существования Варшава была <span id="a_Warsaw_2_qa_0">мультикультурным городом</span>. Согласно переписи 1901 года, из <span id="a_Warsaw_2_qa_1">711 988</span> жителей <span id="a_Warsaw_2_qa_2">56,2%</span> были католики, 35,7% евреи, 5% греческие православные христиане и <span id="a_Warsaw_2_qa_3">2,8%</span> протестанты. Восемь лет спустя, в 1909 году, было 281 754 евреев (36,9%), 18 189 протестантов (2,4%) и 2818 мариавитов (0,4%). Это привело к строительству сотен мест религиозного культа во всех частях города. Большинство из них были уничтожены после Варшавского восстания <span id="a_Warsaw_2_qa_4">1944</span> года. После войны новые коммунистические власти Польши препятствовали строительству церквей, и лишь небольшая их часть была восстановлена. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Городом какого типа была Варшава, пока она была городом?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Городом какого типа была Варшава, пока она была городом?`, correct_answer: "мультикультурным городом", trial_name: "a_Warsaw_2_qa_0"} 
};var a_Warsaw_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Каким было население Варшавы в 1901 году? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Каким было население Варшавы в 1901 году? `, correct_answer: "711 988", trial_name: "a_Warsaw_2_qa_1"} 
};var a_Warsaw_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой процент жителей Варшавы в 1901 году были католиками?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой процент жителей Варшавы в 1901 году были католиками?`, correct_answer: "56,2%", trial_name: "a_Warsaw_2_qa_2"} 
};var a_Warsaw_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой процент населения Варшавы были протестантами в 1901 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой процент населения Варшавы были протестантами в 1901 году?`, correct_answer: "2,8%", trial_name: "a_Warsaw_2_qa_3"} 
};var a_Warsaw_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда в Варшаве было разрушено большинство мест религиозного культа?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда в Варшаве было разрушено большинство мест религиозного культа?`, correct_answer: "1944", trial_name: "a_Warsaw_2_qa_4"} 
};var a_Normans_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Между 1402 и 1405 годами экспедиция под руководством норманнского дворянина Жана де Бетенкура и Пуатевина Гадифера де ла Салья завоевала канарские острова Лансароте, Фуэртевентура и Эль Йерро у атлантического побережья <span id="a_Normans_4_qa_0">Африки</span>. Их войска были собраны в Нормандии, Гаскони и позже были усилены кастильскими колонистами. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">У побережья какого континента находятся Канарские острова?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `У побережья какого континента находятся Канарские острова?`, correct_answer: "Африки", trial_name: "a_Normans_4_qa_0"} 
};var a_NikolaTesla_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">После ухода из компании Эдисона <span id="a_NikolaTesla_1_qa_9">Тесла</span> сотрудничал с двумя бизнесменами в <span id="a_NikolaTesla_1_qa_6">1886</span> году, <span id="a_NikolaTesla_1_qa_0"><span id="a_NikolaTesla_1_qa_5">Робертом Лейном и Бенджамином Вейлом</span></span>, которые согласились финансировать компанию электроосвещения от имени Теслы, <span id="a_NikolaTesla_1_qa_1"><span id="a_NikolaTesla_1_qa_7">Tesla Electric Light & Manufacturing</span></span>. Компания <span id="a_NikolaTesla_1_qa_2">устанавливала <span id="a_NikolaTesla_1_qa_4">системы освещения на основе электрической дуговой подсветки</span>, разработанные Теслой</span>, а также имела проекты коммутаторов динамо-машин - первые <span id="a_NikolaTesla_1_qa_3">патенты</span>, выданные Тесле в США. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">С кем сотрудничал Тесла в 1886 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `С кем сотрудничал Тесла в 1886 году?`, correct_answer: "Робертом Лейном и Бенджамином Вейлом", trial_name: "a_NikolaTesla_1_qa_0"} 
};var a_NikolaTesla_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что финансировали Лейн и Вейл?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что финансировали Лейн и Вейл?`, correct_answer: "Tesla Electric Light & Manufacturing", trial_name: "a_NikolaTesla_1_qa_1"} 
};var a_NikolaTesla_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что делала компания Tesla Electric Light & Manufacturing?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что делала компания Tesla Electric Light & Manufacturing?`, correct_answer: "устанавливала системы освещения на основе электрической дуговой подсветки, разработанные Теслой", trial_name: "a_NikolaTesla_1_qa_2"} 
};var a_NikolaTesla_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что Тесла впервые получил после создания своей компании?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что Тесла впервые получил после создания своей компании?`, correct_answer: "патенты", trial_name: "a_NikolaTesla_1_qa_3"} 
};var a_NikolaTesla_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что производили в компании Теслы? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что производили в компании Теслы? `, correct_answer: "системы освещения на основе электрической дуговой подсветки", trial_name: "a_NikolaTesla_1_qa_4"} 
};var a_NikolaTesla_1_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как звали новых партнеров Теслы?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как звали новых партнеров Теслы?`, correct_answer: "Робертом Лейном и Бенджамином Вейлом", trial_name: "a_NikolaTesla_1_qa_5"} 
};var a_NikolaTesla_1_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда возникло партнерство между Теслой, Лейном и Вейлом? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда возникло партнерство между Теслой, Лейном и Вейлом? `, correct_answer: "1886", trial_name: "a_NikolaTesla_1_qa_6"} 
};var a_NikolaTesla_1_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как называлась компания, которую финансировали бизнесмены?  `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называлась компания, которую финансировали бизнесмены?  `, correct_answer: "Tesla Electric Light & Manufacturing", trial_name: "a_NikolaTesla_1_qa_7"} 
};var a_NikolaTesla_1_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что делала компания Tesla Electric Light & Manufacturing?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что делала компания Tesla Electric Light & Manufacturing?`, correct_answer: "устанавливала системы освещения на основе электрической дуговой подсветки", trial_name: "a_NikolaTesla_1_qa_8"} 
};var a_NikolaTesla_1_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто спроектировал системы освещения, которые устанавливала компания Tesla Electric Light & Manufacturing?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто спроектировал системы освещения, которые устанавливала компания Tesla Electric Light & Manufacturing?`, correct_answer: "Тесла", trial_name: "a_NikolaTesla_1_qa_9"} 
};var a_NikolaTesla_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">В последующие годы после этих слухов ни Тесла, ни <span id="a_NikolaTesla_3_qa_1">Эдисон</span> не выиграли премию (хотя Эдисон действительно получил одну из <span id="a_NikolaTesla_3_qa_0">38</span> возможных номинаций в 1915 году, а Тесла получил одну из 38 возможных номинаций в <span id="a_NikolaTesla_3_qa_2">1937</span> году). </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Сколько возможных номинаций на премию было в 1915 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько возможных номинаций на премию было в 1915 году?`, correct_answer: "38", trial_name: "a_NikolaTesla_3_qa_0"} 
};var a_NikolaTesla_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто получил номинацию в 1915 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто получил номинацию в 1915 году?`, correct_answer: "Эдисон", trial_name: "a_NikolaTesla_3_qa_1"} 
};var a_NikolaTesla_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком году Тесла получил Нобелевскую премию?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком году Тесла получил Нобелевскую премию?`, correct_answer: "1937", trial_name: "a_NikolaTesla_3_qa_2"} 
};var a_NikolaTesla_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Однако его религиозные взгляды остаются <span id="a_NikolaTesla_4_qa_1">неопределенными</span> из-за других сделанных им заявлений. Например, в своей статье <span id="a_NikolaTesla_4_qa_0">"Машина для завершения <span id="a_NikolaTesla_4_qa_2">войны</span>"</span>, опубликованной в 1937 году, Тесла заявил:</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Какая статья была опубликована в 1937 году? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая статья была опубликована в 1937 году? `, correct_answer: "Машина для завершения войны", trial_name: "a_NikolaTesla_4_qa_0"} 
};var a_NikolaTesla_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В связи с определенными заявлениями, каково было предположительное состояние его религиозных взглядов?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В связи с определенными заявлениями, каково было предположительное состояние его религиозных взглядов?`, correct_answer: "неопределенными", trial_name: "a_NikolaTesla_4_qa_1"} 
};var a_NikolaTesla_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В заголовке статьи, что машина должна была закончить?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В заголовке статьи, что машина должна была закончить?`, correct_answer: "войны", trial_name: "a_NikolaTesla_4_qa_2"} 
};var a_Computationalcomplexitytheory_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Computationalcomplexitytheory_0_qa_0">Теория сложности вычислений</span> является разделом теории вычислений в теоретической информатике, которая фокусируется на классификации <span id="a_Computationalcomplexitytheory_0_qa_2">вычислительных задач</span> в соответствии с присущей им <span id="a_Computationalcomplexitytheory_0_qa_1">сложностью</span> и связывает эти классы с друг с другом. Под вычислительной задачей понимается задача, которая в принципе поддается решению с помощью компьютера, что эквивалентно утверждению, что задача может быть решена путем механического применения математических действий, таких как алгоритм. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Какая отрасль теоретической информатики имеет дело с широкой классификацией вычислительных задач по сложности и классу отношений? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая отрасль теоретической информатики имеет дело с широкой классификацией вычислительных задач по сложности и классу отношений? `, correct_answer: "Теория сложности вычислений", trial_name: "a_Computationalcomplexitytheory_0_qa_0"} 
};var a_Computationalcomplexitytheory_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">По какому основному признаку вычислительные задачи классифицируются с использованием теории сложности вычислений? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `По какому основному признаку вычислительные задачи классифицируются с использованием теории сложности вычислений? `, correct_answer: "сложностью", trial_name: "a_Computationalcomplexitytheory_0_qa_1"} 
};var a_Computationalcomplexitytheory_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Каким термином обозначается задача, которая обычно поддается решению с помощью компьютера? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Каким термином обозначается задача, которая обычно поддается решению с помощью компьютера? `, correct_answer: "вычислительных задач", trial_name: "a_Computationalcomplexitytheory_0_qa_2"} 
};var a_Computationalcomplexitytheory_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">При рассмотрении вычислительных задач <span id="a_Computationalcomplexitytheory_1_qa_0">экземпляр задачи</span> представляет собой строку над алфавитом. Обычно под алфавитом понимается <span id="a_Computationalcomplexitytheory_1_qa_1">двоичный</span> алфавит (то есть набор {0,1}), и, таким образом, строки являются <span id="a_Computationalcomplexitytheory_1_qa_2">строками битов</span>.  Как и в реальном компьютере, математические объекты, кроме строк битов, должны быть соответствующим образом закодированы. Например, целые числа могут быть представлены в <span id="a_Computationalcomplexitytheory_1_qa_3">двоичной записи</span>, а графики могут быть закодированы непосредственно посредством их <span id="a_Computationalcomplexitytheory_1_qa_4">матрицы смежности</span> или путем кодирования их списков смежности в двоичном виде.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Что можно описать как строку над алфавитом в вычислительной задаче?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что можно описать как строку над алфавитом в вычислительной задаче?`, correct_answer: "экземпляр задачи", trial_name: "a_Computationalcomplexitytheory_1_qa_0"} 
};var a_Computationalcomplexitytheory_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как называется алфавит, чаще всего используемый в экземпляре задачи?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называется алфавит, чаще всего используемый в экземпляре задачи?`, correct_answer: "двоичный", trial_name: "a_Computationalcomplexitytheory_1_qa_1"} 
};var a_Computationalcomplexitytheory_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой еще существует термин для строки экземпляра задачи?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой еще существует термин для строки экземпляра задачи?`, correct_answer: "строками битов", trial_name: "a_Computationalcomplexitytheory_1_qa_2"} 
};var a_Computationalcomplexitytheory_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Каким образом обычно выражаются целые числа в кодировке математических объектов? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Каким образом обычно выражаются целые числа в кодировке математических объектов? `, correct_answer: "двоичной записи", trial_name: "a_Computationalcomplexitytheory_1_qa_3"} 
};var a_Computationalcomplexitytheory_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Каким образом можно кодировать графики? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Каким образом можно кодировать графики? `, correct_answer: "матрицы смежности", trial_name: "a_Computationalcomplexitytheory_1_qa_4"} 
};var a_Computationalcomplexitytheory_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Это склоняет к мысли, что понятие функциональных задач гораздо богаче, чем понятие задачи принятия решения. Однако на самом деле это не так, поскольку функциональные задачи могут быть переформулированы <span id="a_Computationalcomplexitytheory_2_qa_0">в задачи принятия решения</span>. Например, умножение двух целых чисел может быть выражено как набор <span id="a_Computationalcomplexitytheory_2_qa_1">троек</span> (a, b, c), при этом выполняется соотношение a × b = c. Решение, является ли данная тройка членом этого множества, соответствует решению задачи умножения двух чисел. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Как обычно можно переформулировать функциональные задачи?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как обычно можно переформулировать функциональные задачи?`, correct_answer: "в задачи принятия решения", trial_name: "a_Computationalcomplexitytheory_2_qa_0"} 
};var a_Computationalcomplexitytheory_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Если два целых числа умножить и вывести значение, как называется этот набор выражений?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Если два целых числа умножить и вывести значение, как называется этот набор выражений?`, correct_answer: "троек", trial_name: "a_Computationalcomplexitytheory_2_qa_1"} 
};var a_Computationalcomplexitytheory_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Многие известные классы сложности <span id="a_Computationalcomplexitytheory_4_qa_0">подозреваются как неравные</span>, но это не было доказано. Например, <span id="a_Computationalcomplexitytheory_4_qa_1">P ⊆ NP ⊆ PP ⊆ PSPACE</span>, но возможно, что P = PSPACE. Если P не равно NP, то P также не равно PSPACE. Поскольку существует много известных классов сложности <span id="a_Computationalcomplexitytheory_4_qa_2">между P и PSPACE</span>, таких как RP, BPP, PP, BQP, MA, PH и т. д., возможно, что все эти классы сложности сливаются в один класс. <span id="a_Computationalcomplexitytheory_4_qa_3">Доказательство того, что любой из этих классов является неравным</span>, станет большим прорывом в теории сложности. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Какое недоказанное предположение обычно приписывается значению классов сложности? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какое недоказанное предположение обычно приписывается значению классов сложности? `, correct_answer: "подозреваются как неравные", trial_name: "a_Computationalcomplexitytheory_4_qa_0"} 
};var a_Computationalcomplexitytheory_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какое выражение можно использовать для иллюстрации предполагаемого неравенства классов сложности? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какое выражение можно использовать для иллюстрации предполагаемого неравенства классов сложности? `, correct_answer: "P ⊆ NP ⊆ PP ⊆ PSPACE", trial_name: "a_Computationalcomplexitytheory_4_qa_1"} 
};var a_Computationalcomplexitytheory_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Где могут быть расположены классы сложности RP, BPP, PP, BQP, MA и PH? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Где могут быть расположены классы сложности RP, BPP, PP, BQP, MA и PH? `, correct_answer: "между P и PSPACE", trial_name: "a_Computationalcomplexitytheory_4_qa_2"} 
};var a_Computationalcomplexitytheory_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какие доказательства между и среди классов сложности означают теоретический водораздел для теории сложности? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какие доказательства между и среди классов сложности означают теоретический водораздел для теории сложности? `, correct_answer: "Доказательство того, что любой из этих классов является неравным", trial_name: "a_Computationalcomplexitytheory_4_qa_3"} 
};var a_Teacher_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">﻿В прошлые времена телесные наказания (шлепки, шлепки лопаткой, удары тростью, сечение розгами с целью причинить <span id="a_Teacher_0_qa_4">физическую боль</span>) были <span id="a_Teacher_0_qa_0">одной из самых распространенных</span> форм дисциплинарного взыскания в большинстве школ мира. <span id="a_Teacher_0_qa_1">В большинстве западных стран</span> и в некоторых других телесные наказания теперь запрещены, однако они остаются законными в <span id="a_Teacher_0_qa_2">США</span>, согласно <span id="a_Teacher_0_qa_3">решению Верховного суда США</span> от 1977 года, в соответствии с которым шлепанье лопаткой не нарушает конституцию США.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Насколько были распространены телесные наказания в прошлом?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Насколько были распространены телесные наказания в прошлом?`, correct_answer: "одной из самых распространенных", trial_name: "a_Teacher_0_qa_0"} 
};var a_Teacher_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Где больше не применяют телесные наказания?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Где больше не применяют телесные наказания?`, correct_answer: "В большинстве западных стран", trial_name: "a_Teacher_0_qa_1"} 
};var a_Teacher_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В какой из западных стран телесные наказания все еще разрешены?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В какой из западных стран телесные наказания все еще разрешены?`, correct_answer: "США", trial_name: "a_Teacher_0_qa_2"} 
};var a_Teacher_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какое учреждение США заявило о том, что телесные наказания не противоречат конституции?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какое учреждение США заявило о том, что телесные наказания не противоречат конституции?`, correct_answer: "решению Верховного суда США", trial_name: "a_Teacher_0_qa_3"} 
};var a_Teacher_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что причиняет телесное наказание школьникам?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что причиняет телесное наказание школьникам?`, correct_answer: "физическую боль", trial_name: "a_Teacher_0_qa_4"} 
};var a_Teacher_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Учителя в Уэльсе могут зарегистрироваться в <span id="a_Teacher_1_qa_0"><span id="a_Teacher_1_qa_3">профсоюзах</span></span>, таких как ATL, NUT или NASUWT, при этом, согласно отчетам за последние годы, средний возраст учителей в Уэльсе <span id="a_Teacher_1_qa_1">снижается</span>, так что в последнее время учители становятся все моложе. Одной из причин для растущего <span id="a_Teacher_1_qa_4">беспокойства</span> являются нападения на учителей в школах Уэльса, достигшие исторического пика <span id="a_Teacher_1_qa_2">между 2005 и 2010 годами</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">В какой организации могут зарегистрироваться учителя в Уэльсе?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В какой организации могут зарегистрироваться учителя в Уэльсе?`, correct_answer: "профсоюзах", trial_name: "a_Teacher_1_qa_0"} 
};var a_Teacher_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что происходит со средним возрастом учителей в Уэльсе?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что происходит со средним возрастом учителей в Уэльсе?`, correct_answer: "снижается", trial_name: "a_Teacher_1_qa_1"} 
};var a_Teacher_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда число нападений на учителей достигло своего пика?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда число нападений на учителей достигло своего пика?`, correct_answer: "между 2005 и 2010 годами", trial_name: "a_Teacher_1_qa_2"} 
};var a_Teacher_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что такое NASUWT?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что такое NASUWT?`, correct_answer: "профсоюзах", trial_name: "a_Teacher_1_qa_3"} 
};var a_Teacher_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какое чувство внушают нападения на учителей?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какое чувство внушают нападения на учителей?`, correct_answer: "беспокойства", trial_name: "a_Teacher_1_qa_4"} 
};var a_Teacher_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">В индуизме духовные наставники называются <span id="a_Teacher_3_qa_0">гуру</span>, при этом во многих ответвлениях индуизма — в особенности <span id="a_Teacher_3_qa_3">на Западе</span> — духовному наставничеству придается <span id="a_Teacher_3_qa_1">необычайно высокое значение</span>, так что гуру имеют огромное влияние на <span id="a_Teacher_3_qa_2">своих послушников</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Как называются духовные наставники в индуизме?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называются духовные наставники в индуизме?`, correct_answer: "гуру", trial_name: "a_Teacher_3_qa_0"} 
};var a_Teacher_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Духовное наставничество в индуизме имеет высокое или низкое значение?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Духовное наставничество в индуизме имеет высокое или низкое значение?`, correct_answer: "необычайно высокое значение", trial_name: "a_Teacher_3_qa_1"} 
};var a_Teacher_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">На кого оказывают влияние гуру?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `На кого оказывают влияние гуру?`, correct_answer: "своих послушников", trial_name: "a_Teacher_3_qa_2"} 
};var a_Teacher_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком регионе духовное наставничество обычно имеет необычайно высокое значение?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком регионе духовное наставничество обычно имеет необычайно высокое значение?`, correct_answer: "на Западе", trial_name: "a_Teacher_3_qa_3"} 
};var a_Teacher_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">В тибетском буддизме тибетские преподаватели Дхармы обычно называются <span id="a_Teacher_4_qa_0">ламами</span>. Лама, прошедший практики <span id="a_Teacher_4_qa_4">пховы и сиддхи</span> и сознательно обрекающий себя на <span id="a_Teacher_4_qa_1">перерождение</span>, зачастую <span id="a_Teacher_4_qa_3">много раз</span>, чтобы продолжить обет Бодхисаттвы, называется <span id="a_Teacher_4_qa_2">Тулку</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Как называется наставник в тибетском буддизме?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называется наставник в тибетском буддизме?`, correct_answer: "ламами", trial_name: "a_Teacher_4_qa_0"} 
};var a_Teacher_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что предначертано ламе?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что предначертано ламе?`, correct_answer: "перерождение", trial_name: "a_Teacher_4_qa_1"} 
};var a_Teacher_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как называется лама, принявший обет Бодхисаттвы?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называется лама, принявший обет Бодхисаттвы?`, correct_answer: "Тулку", trial_name: "a_Teacher_4_qa_2"} 
};var a_Teacher_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько раз лама согласен терпеть перерождение?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько раз лама согласен терпеть перерождение?`, correct_answer: "много раз", trial_name: "a_Teacher_4_qa_3"} 
};var a_Teacher_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Благодаря чему лама может проходить перерождения?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Благодаря чему лама может проходить перерождения?`, correct_answer: "пховы и сиддхи", trial_name: "a_Teacher_4_qa_4"} 
};var a_MartinLuther_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Писания Лютера получили широкое распространение и достигли Франции, Англии и Италии уже в <span id="a_MartinLuther_0_qa_0">1519 году</span>. <span id="a_MartinLuther_0_qa_1">Студенты</span> заполоняли Виттенберг, чтобы послушать проповеди Лютера. Он опубликовал короткий комментарий к «Посланию Галатам» и свой курс о псалмах. Этот <span id="a_MartinLuther_0_qa_2">ранний</span> этап деятельности Лютера оказался самым творческим и эффективным. Три из самых знаменитых его работ были опубликованы в <span id="a_MartinLuther_0_qa_3">1520 году</span>: «К христианскому дворянству немецкой нации», «О вавилонском пленении церкви» и <span id="a_MartinLuther_0_qa_4">«О свободе христианина»</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Когда писания Лютера достигли Франции, Англии и Италии?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда писания Лютера достигли Франции, Англии и Италии?`, correct_answer: "1519 году", trial_name: "a_MartinLuther_0_qa_0"} 
};var a_MartinLuther_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто собирался в Виттенберге, чтобы послушать проповеди Лютера?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто собирался в Виттенберге, чтобы послушать проповеди Лютера?`, correct_answer: "Студенты", trial_name: "a_MartinLuther_0_qa_1"} 
};var a_MartinLuther_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой этап деятельности Лютера оказался самым плодотворным?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой этап деятельности Лютера оказался самым плодотворным?`, correct_answer: "ранний", trial_name: "a_MartinLuther_0_qa_2"} 
};var a_MartinLuther_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда были опубликованы некоторые из самых известных работ Лютера?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда были опубликованы некоторые из самых известных работ Лютера?`, correct_answer: "1520 году", trial_name: "a_MartinLuther_0_qa_3"} 
};var a_MartinLuther_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой труд Лютера, помимо «К христианскому дворянству немецкой нации» и «О вавилонском пленении церкви», был опубликован в 1520 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой труд Лютера, помимо «К христианскому дворянству немецкой нации» и «О вавилонском пленении церкви», был опубликован в 1520 году?`, correct_answer: "«О свободе христианина»", trial_name: "a_MartinLuther_0_qa_4"} 
};var a_MartinLuther_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Опубликованный во время растущего спроса на <span id="a_MartinLuther_2_qa_0">немецкоязычные публикации</span>, перевод <span id="a_MartinLuther_2_qa_1">Библии</span> Лютера быстро стал популярным и влиятельным. Этот перевод внес значительный вклад в <span id="a_MartinLuther_2_qa_2">развитие немецкого языка и литературы</span>. Снабженный комментариями и вступлениями Лютера, этот перевод Библии с гравюрами по дереву в исполнении <span id="a_MartinLuther_2_qa_3">Лукаса Кранаха</span>, использовавшего антипапские иллюстрации, сыграл главную роль в распространении учения Лютера по всей Германии. Библия Лютера повлияла на другие национальные переводы Писания, например, на английскую Библию <span id="a_MartinLuther_2_qa_4">Вильяма Тиндейла</span> (с 1525 года), ставшую предшественницей Библии короля Якова.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_MartinLuther_2_qa_0','#a_MartinLuther_2_qa_1','#a_MartinLuther_2_qa_2','#a_MartinLuther_2_qa_3','#a_MartinLuther_2_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_MartinLuther_2_1280_720.png';
a.click();});}},data: { trial_name: "a_MartinLuther_2"}
};
var a_MartinLuther_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">На что наблюдался спрос во времена Мартина Лютера?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `На что наблюдался спрос во времена Мартина Лютера?`, correct_answer: "немецкоязычные публикации", trial_name: "a_MartinLuther_2_qa_0"} 
};var a_MartinLuther_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какая работа Мартина Лютера стала популярной?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая работа Мартина Лютера стала популярной?`, correct_answer: "Библии", trial_name: "a_MartinLuther_2_qa_1"} 
};var a_MartinLuther_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Чему поспособствовала популярность перевода Лютера?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Чему поспособствовала популярность перевода Лютера?`, correct_answer: "развитие немецкого языка и литературы", trial_name: "a_MartinLuther_2_qa_2"} 
};var a_MartinLuther_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой художник создал гравюры для Библии Лютера?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой художник создал гравюры для Библии Лютера?`, correct_answer: "Лукаса Кранаха", trial_name: "a_MartinLuther_2_qa_3"} 
};var a_MartinLuther_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">На чей английский перевод Библии повлияла Библия Лютера?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `На чей английский перевод Библии повлияла Библия Лютера?`, correct_answer: "Вильяма Тиндейла", trial_name: "a_MartinLuther_2_qa_4"} 
};var a_MartinLuther_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">При написании гимнов Лютер часто вдохновлялся особенными <span id="a_MartinLuther_3_qa_0">событиями в своей жизни</span> и в развивающейся Реформации. Все началось с того момента, когда он узнал о казни Иоганна Эша и Генриха Воса, первых мучеников, пострадавших от Римской католической церкви <span id="a_MartinLuther_3_qa_1">за свою приверженность лютеранству</span>, что послужило для Лютера толчком к написанию гимна "<span id="a_MartinLuther_3_qa_2">Ein neues Lied wir heben an</span>" («Новую песнь мы возносим»), которая известна среди английских верующих в переводе <span id="a_MartinLuther_3_qa_3">Джона К. Мессенджера</span> и называется по своей первой строчке <span id="a_MartinLuther_3_qa_4">«Развеянные беспечными ветрами...»</span>, на мотив песни «Ибстон», сочиненной в 1875 Марией К. Тиддеман.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_MartinLuther_3_qa_0','#a_MartinLuther_3_qa_1','#a_MartinLuther_3_qa_2','#a_MartinLuther_3_qa_3','#a_MartinLuther_3_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_MartinLuther_3_1280_720.png';
a.click();});}},data: { trial_name: "a_MartinLuther_3"}
};
var a_MartinLuther_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что служило Лютеру поводом для написания гимнов?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что служило Лютеру поводом для написания гимнов?`, correct_answer: "событиями в своей жизни", trial_name: "a_MartinLuther_3_qa_0"} 
};var a_MartinLuther_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Почему Иоганн Эш и Генрих Вос были казнены католической церковью?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Почему Иоганн Эш и Генрих Вос были казнены католической церковью?`, correct_answer: "за свою приверженность лютеранству", trial_name: "a_MartinLuther_3_qa_1"} 
};var a_MartinLuther_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой гимн написал Лютер после мученической смерти Эша и Воса?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой гимн написал Лютер после мученической смерти Эша и Воса?`, correct_answer: "Ein neues Lied wir heben an", trial_name: "a_MartinLuther_3_qa_2"} 
};var a_MartinLuther_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто перевел этот гимн на английский язык?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто перевел этот гимн на английский язык?`, correct_answer: "Джона К. Мессенджера", trial_name: "a_MartinLuther_3_qa_3"} 
};var a_MartinLuther_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как называется этот гимн в переводе с английского языка?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называется этот гимн в переводе с английского языка?`, correct_answer: "«Развеянные беспечными ветрами...»", trial_name: "a_MartinLuther_3_qa_4"} 
};var a_MartinLuther_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Позднее был найден лист бумаги, на котором Лютер оставил <span id="a_MartinLuther_4_qa_0">свою последнюю запись</span>. Запись была сделана на <span id="a_MartinLuther_4_qa_1">латинском языке</span>, помимо записи <span id="a_MartinLuther_4_qa_2">«Мы попрошайки»</span>, которую он написал на немецком языке.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Какая запись Лютера была найдена позднее?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая запись Лютера была найдена позднее?`, correct_answer: "свою последнюю запись", trial_name: "a_MartinLuther_4_qa_0"} 
};var a_MartinLuther_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">На каком языке, по большей части, была эта запись? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `На каком языке, по большей части, была эта запись? `, correct_answer: "латинском языке", trial_name: "a_MartinLuther_4_qa_1"} 
};var a_MartinLuther_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какая часть последней записи была написана на немецком языке?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая часть последней записи была написана на немецком языке?`, correct_answer: "«Мы попрошайки»", trial_name: "a_MartinLuther_4_qa_2"} 
};var a_SouthernCalifornia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Профессиональные спортивные команды в Южной Калифорнии включают в себя команды лиги <span id="a_SouthernCalifornia_3_qa_0">НФЛ</span> (Лос-Анджелес Рэмс, Сан-Диего Чарджерс), <span id="a_SouthernCalifornia_3_qa_1">НБА</span> (Лос-Анджелес-Лэйкерс, Лос-Анджелес-Клипперс), <span id="a_SouthernCalifornia_3_qa_2">MLB</span> (Лос0Анджелес Доджерс, Лос-Анджелес Энджелс из Анахайма, Сан-Диего Падрес), НХЛ (<span id="a_SouthernCalifornia_3_qa_3">Лос-Анджелес Кингс</span>, Анахайм Дакс) и MLS (<span id="a_SouthernCalifornia_3_qa_4">Лос-Анджелес Гэлекси</span>).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">В каком виде спорта выступает команда Лос-Анджелес Рэмс?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком виде спорта выступает команда Лос-Анджелес Рэмс?`, correct_answer: "НФЛ", trial_name: "a_SouthernCalifornia_3_qa_0"} 
};var a_SouthernCalifornia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">К какому типу спорта относится команда Лос-Анджелес Клипперс?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `К какому типу спорта относится команда Лос-Анджелес Клипперс?`, correct_answer: "НБА", trial_name: "a_SouthernCalifornia_3_qa_1"} 
};var a_SouthernCalifornia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком виде спорта играет команда Лос-Анджелес Энджелс из Анахайма?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком виде спорта играет команда Лос-Анджелес Энджелс из Анахайма?`, correct_answer: "MLB", trial_name: "a_SouthernCalifornia_3_qa_2"} 
};var a_SouthernCalifornia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какая команда из Южной Калифорнии играет в лиге НХЛ, кроме Анахайм Дакс?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая команда из Южной Калифорнии играет в лиге НХЛ, кроме Анахайм Дакс?`, correct_answer: "Лос-Анджелес Кингс", trial_name: "a_SouthernCalifornia_3_qa_3"} 
};var a_SouthernCalifornia_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какая единственная команда в лиге MLS представляет Южную Калифорнию?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая единственная команда в лиге MLS представляет Южную Калифорнию?`, correct_answer: "Лос-Анджелес Гэлекси", trial_name: "a_SouthernCalifornia_3_qa_4"} 
};var a_SouthernCalifornia_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">С 2005 до <span id="a_SouthernCalifornia_4_qa_2">2014</span> года в Лос-Анджелесе было <span id="a_SouthernCalifornia_4_qa_1">две</span> команды, игравших в Высшей футбольной лиге — Лос-Анджелес Гэлекси и Чивас USA, обе играли на стадионе <span id="a_SouthernCalifornia_4_qa_3">StubHub Center</span> и были местными командами, соперничавшими между собой. Однако <span id="a_SouthernCalifornia_4_qa_0">Чивас</span> выбыли из MLS после сезона 2014 года, так что вторая команда планирует вернуться в лигу в <span id="a_SouthernCalifornia_4_qa_4">2018</span> году.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Какая команда выбыла из лиги MLS?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая команда выбыла из лиги MLS?`, correct_answer: "Чивас", trial_name: "a_SouthernCalifornia_4_qa_0"} 
};var a_SouthernCalifornia_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько команд из Лос-Анджелеса было в лиге?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько команд из Лос-Анджелеса было в лиге?`, correct_answer: "две", trial_name: "a_SouthernCalifornia_4_qa_1"} 
};var a_SouthernCalifornia_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком году одна из двух команд выбыла из лиги?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком году одна из двух команд выбыла из лиги?`, correct_answer: "2014", trial_name: "a_SouthernCalifornia_4_qa_2"} 
};var a_SouthernCalifornia_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как называется стадион, на котором играли обе команды?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называется стадион, на котором играли обе команды?`, correct_answer: "StubHub Center", trial_name: "a_SouthernCalifornia_4_qa_3"} 
};var a_SouthernCalifornia_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда выбывшая команда должна вновь вернуться в лигу?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда выбывшая команда должна вновь вернуться в лигу?`, correct_answer: "2018", trial_name: "a_SouthernCalifornia_4_qa_4"} 
};var a_VictoriaAustralia_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Исторически Виктория была основным местом для размещения предприятий по производству <span id="a_VictoriaAustralia_2_qa_0">автомобилей крупнейших марок</span> — Ford, Toyota и Holden, однако закрытие заводов всех трех компаний в 21-м веке будет означать для Австралии потерю своей роли в качестве глобального лидера автомобилестроения: в феврале 2014 года руководство Toyota заявило о закрытии своих заводов в <span id="a_VictoriaAustralia_2_qa_1">2017</span> году. Компания Holden объявила о закрытии производства в <span id="a_VictoriaAustralia_2_qa_2">мае 2013 года</span>, Ford приняла такое же решение в декабре того же года (заводы <span id="a_VictoriaAustralia_2_qa_4">Ford</span> в Виктории в Броадмидоус и Джилонге закроются в <span id="a_VictoriaAustralia_2_qa_3">октябре 2016 года</span>).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Какую отрасль производства вскоре потеряет Виктория?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какую отрасль производства вскоре потеряет Виктория?`, correct_answer: "автомобилей крупнейших марок", trial_name: "a_VictoriaAustralia_2_qa_0"} 
};var a_VictoriaAustralia_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда Toyota намерена закрыть свой завод в Виктории?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда Toyota намерена закрыть свой завод в Виктории?`, correct_answer: "2017", trial_name: "a_VictoriaAustralia_2_qa_1"} 
};var a_VictoriaAustralia_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда компания Holden объявила о своем намерении закрыть завод в Виктории?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда компания Holden объявила о своем намерении закрыть завод в Виктории?`, correct_answer: "мае 2013 года", trial_name: "a_VictoriaAustralia_2_qa_2"} 
};var a_VictoriaAustralia_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда закроются заводы Ford?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда закроются заводы Ford?`, correct_answer: "октябре 2016 года", trial_name: "a_VictoriaAustralia_2_qa_3"} 
};var a_VictoriaAustralia_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Автомобили какой марки производятся в Броадмидоус?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Автомобили какой марки производятся в Броадмидоус?`, correct_answer: "Ford", trial_name: "a_VictoriaAustralia_2_qa_4"} 
};var a_Huguenot_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">﻿Религиозные войны, возобновившиеся в 1620 годах, завершились поражением гугенотов, которые лишились политических и военных привилегий. Религиозные положения Нантского эдикта оставались в силе до начала правления <span id="a_Huguenot_0_qa_2">Людовика XIV</span>. Он продолжил преследование гугенотов, а впоследствии издал <span id="a_Huguenot_0_qa_0">Эдикт Фонтенбло</span> (<span id="a_Huguenot_0_qa_1">1685 год</span>), который фактически объявлял протестантизм незаконным на территории Франции и вынуждал гугенотов перейти в католичество. Хотя почти три четверти протестантов были убиты или подчинились, около <span id="a_Huguenot_0_qa_3">500,000</span> гугенотов бежали из страны к началу XVIII века [нет источника].</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Huguenot_0_qa_0','#a_Huguenot_0_qa_1','#a_Huguenot_0_qa_2','#a_Huguenot_0_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Huguenot_0_1280_720.png';
a.click();});}},data: { trial_name: "a_Huguenot_0"}
};
var a_Huguenot_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой указ поставил протестантизм во Франции вне закона?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой указ поставил протестантизм во Франции вне закона?`, correct_answer: "Эдикт Фонтенбло", trial_name: "a_Huguenot_0_qa_0"} 
};var a_Huguenot_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда был издан этот эдикт?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда был издан этот эдикт?`, correct_answer: "1685 год", trial_name: "a_Huguenot_0_qa_1"} 
};var a_Huguenot_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой французский король издал этот указ?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой французский король издал этот указ?`, correct_answer: "Людовика XIV", trial_name: "a_Huguenot_0_qa_2"} 
};var a_Huguenot_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько гугенотов покинули Францию к началу XVIII века?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько гугенотов покинули Францию к началу XVIII века?`, correct_answer: "500,000", trial_name: "a_Huguenot_0_qa_3"} 
};var a_Steamengine_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Тепло, необходимое для закипания воды и подачи пара, может быть получено из различных источников. Как правило, для этой цели <span id="a_Steamengine_0_qa_0">сжигают горючие вещества</span> при наличии достаточного количества воздуха в замкнутом пространстве (известном как<span id="a_Steamengine_0_qa_1">камера сгорания</span> или огневая коробка). В некоторых случаях в качестве источника тепла используется ядерный реактор, геотермальная энергия, <span id="a_Steamengine_0_qa_2">солнечная</span> энергия или отходящее тепло от двигателей внутреннего сгорания или промышленных процессов. В модели или игрушечной паровой машине источником тепла может выступать <span id="a_Steamengine_0_qa_3">электрический</span> нагревательный элемент.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Что обычно используется в качестве источника тепла для закипания воды в паровом двигателе?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что обычно используется в качестве источника тепла для закипания воды в паровом двигателе?`, correct_answer: "сжигают горючие вещества", trial_name: "a_Steamengine_0_qa_0"} 
};var a_Steamengine_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как иначе называется огневая коробка или отделение двигателя для сжигания горючего вещества?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как иначе называется огневая коробка или отделение двигателя для сжигания горючего вещества?`, correct_answer: "камера сгорания", trial_name: "a_Steamengine_0_qa_1"} 
};var a_Steamengine_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какая энергия помимо ядерной, геотермальной энергии и энергии отходящего тепла от двигателей внутреннего сгорания применяется для подачи тепла в паровой машине?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая энергия помимо ядерной, геотермальной энергии и энергии отходящего тепла от двигателей внутреннего сгорания применяется для подачи тепла в паровой машине?`, correct_answer: "солнечная", trial_name: "a_Steamengine_0_qa_2"} 
};var a_Steamengine_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой вид нагревательного элемента часто используют в игрушечных паровых машинах?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой вид нагревательного элемента часто используют в игрушечных паровых машинах?`, correct_answer: "электрический", trial_name: "a_Steamengine_0_qa_3"} 
};var a_Steamengine_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Хотя сегодня поршневой паровой двигатель практически не используется в промышленных масштабах, некоторые компании изучают или задействуют его потенциал в качестве альтернативы двигателям внутреннего сгорания. Компания <span id="a_Steamengine_3_qa_0">Energiprojekt AB</span> из <span id="a_Steamengine_3_qa_1">Швеции</span> добилась успехов, применяя современные материалы для производства энергии из пара. КПД паровых двигателей Energiprojekt на машинах высокого давления достигает <span id="a_Steamengine_3_qa_4">27-30 %</span>. Это одноступенчатый <span id="a_Steamengine_3_qa_2">5</span>-цилиндровый двигатель (без компаунда), работающий на перегретом паре и потребляющий около 4 кг (<span id="a_Steamengine_3_qa_3">8,8</span> фунтов) пара на кВт. ч. [нет в источнике]</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Какая современная компания занимается разработкой парового двигателя с применением современных материалов?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая современная компания занимается разработкой парового двигателя с применением современных материалов?`, correct_answer: "Energiprojekt AB", trial_name: "a_Steamengine_3_qa_0"} 
};var a_Steamengine_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Где находится компания Energiprojekt AB?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Где находится компания Energiprojekt AB?`, correct_answer: "Швеции", trial_name: "a_Steamengine_3_qa_1"} 
};var a_Steamengine_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько цилиндров имеет двигатель Energiprojekt AB?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько цилиндров имеет двигатель Energiprojekt AB?`, correct_answer: "5", trial_name: "a_Steamengine_3_qa_2"} 
};var a_Steamengine_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько фунтов пара на киловатт-час потребляет двигатель Energiprojekt AB?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько фунтов пара на киловатт-час потребляет двигатель Energiprojekt AB?`, correct_answer: "8,8", trial_name: "a_Steamengine_3_qa_3"} 
};var a_Steamengine_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой КПД у двигателя высокого давления производства Energiprojekt AB?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой КПД у двигателя высокого давления производства Energiprojekt AB?`, correct_answer: "27-30 %", trial_name: "a_Steamengine_3_qa_4"} 
};var a_1973oilcrisis_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_1973oilcrisis_1_qa_0">Эмбарго</span> негативно отразилось на экономике США в виде неотложных мер по устранению угроз для энергетической безопасности США. На международном уровне с ростом цен изменились конкурентные позиции во многих отраслях, в частности в <span id="a_1973oilcrisis_1_qa_1">автомобилестроении</span>. <span id="a_1973oilcrisis_1_qa_2">Макроэкономические</span> проблемы включали в себя как инфляцию, так и дефляцию. Вследствие эмбарго нефтяные компании были вынуждены искать новые пути увеличения поставок нефти, даже в труднодоступной местности, например, в <span id="a_1973oilcrisis_1_qa_3">Арктике</span>. С момента обнаружения и разработки новых месторождений до выхода на достаточный уровень добычи обычно проходит от <span id="a_1973oilcrisis_1_qa_4">пяти до десяти лет</span>.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_1973oilcrisis_1_qa_0','#a_1973oilcrisis_1_qa_1','#a_1973oilcrisis_1_qa_2','#a_1973oilcrisis_1_qa_3','#a_1973oilcrisis_1_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_1973oilcrisis_1_1280_720.png';
a.click();});}},data: { trial_name: "a_1973oilcrisis_1"}
};
var a_1973oilcrisis_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что оказало негативное влияние на экономику США?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что оказало негативное влияние на экономику США?`, correct_answer: "Эмбарго", trial_name: "a_1973oilcrisis_1_qa_0"} 
};var a_1973oilcrisis_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Конкурентные позиции какой отрасли были ослаблены на международном уровне? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Конкурентные позиции какой отрасли были ослаблены на международном уровне? `, correct_answer: "автомобилестроении", trial_name: "a_1973oilcrisis_1_qa_1"} 
};var a_1973oilcrisis_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какая проблема включает в себя инфляционное и дефляционное воздействие?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая проблема включает в себя инфляционное и дефляционное воздействие?`, correct_answer: "Макроэкономические", trial_name: "a_1973oilcrisis_1_qa_2"} 
};var a_1973oilcrisis_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком регионе нефтяные компании были вынуждены увеличить поставки нефти в условиях топливного кризиса?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком регионе нефтяные компании были вынуждены увеличить поставки нефти в условиях топливного кризиса?`, correct_answer: "Арктике", trial_name: "a_1973oilcrisis_1_qa_3"} 
};var a_1973oilcrisis_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько времени необходимо для выхода на достаточный уровень добычи нефти в новом регионе?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько времени необходимо для выхода на достаточный уровень добычи нефти в новом регионе?`, correct_answer: "пяти до десяти лет", trial_name: "a_1973oilcrisis_1_qa_4"} 
};var a_1973oilcrisis_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">В <span id="a_1973oilcrisis_2_qa_1">1973</span> президент Никсон назначил <span id="a_1973oilcrisis_2_qa_0">Уильяма Э. Саймона</span> первым председателем Федеральной энергетической комиссии, временной организации, созданной <span id="a_1973oilcrisis_2_qa_2">для координации мер по устранению последствий эмбарго</span>. При распределении отечественной нефти между штатами на 1974 год Саймон опирался на объемы, которые они потребляли в 1972 году. Это сработало для штатов, население которых не увеличилось. В других штатах очереди на заправках стали обычным явлением. По данным Американской автомобильной ассоциации в последнюю неделю февраля 1974 года <span id="a_1973oilcrisis_2_qa_3">20 %</span> американских автозаправок остались без топлива.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Кто первым возглавил Федеральную энергетическую комиссию?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто первым возглавил Федеральную энергетическую комиссию?`, correct_answer: "Уильяма Э. Саймона", trial_name: "a_1973oilcrisis_2_qa_0"} 
};var a_1973oilcrisis_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда Никсон назначил его на данный пост?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда Никсон назначил его на данный пост?`, correct_answer: "1973", trial_name: "a_1973oilcrisis_2_qa_1"} 
};var a_1973oilcrisis_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">С какой целью была создана эта временная организация?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `С какой целью была создана эта временная организация?`, correct_answer: "для координации мер по устранению последствий эмбарго", trial_name: "a_1973oilcrisis_2_qa_2"} 
};var a_1973oilcrisis_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько процентов автозаправок, по данным ААА, остались без бензина?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько процентов автозаправок, по данным ААА, остались без бензина?`, correct_answer: "20 %", trial_name: "a_1973oilcrisis_2_qa_3"} 
};var a_Apolloprogram_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Apolloprogram_2_qa_1">Гриссом, Уайт и Чаффи</span> решили назвать свою миссию «Аполлон-1», подчеркнув мотивирующую роль первого пилотируемого полета. Астронавты тренировались и проводили испытания своего космического корабля на <span id="a_Apolloprogram_2_qa_3">базе North American</span> и в <span id="a_Apolloprogram_2_qa_0">барокамере</span> в Космического центра имени Кеннеди. На январь были назначены «испытания с выдернутыми штекерами», в ходе которых предполагалось смоделировать <span id="a_Apolloprogram_2_qa_2">стартовый отсчет времени</span> на LC-34 с переключением тестовой кабины корабля на внутреннее питание. В случае успеха были запланированы более строгие предстартовые испытания ближе к дате запуска 21 февраля с заправкой космического аппарата и ракеты-носителя.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Apolloprogram_2_qa_0','#a_Apolloprogram_2_qa_1','#a_Apolloprogram_2_qa_2','#a_Apolloprogram_2_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Apolloprogram_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Apolloprogram_2"}
};
var a_Apolloprogram_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Где экипаж «Аполлон-1» тренировался в Космическом центре имени Кеннеди?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Где экипаж «Аполлон-1» тренировался в Космическом центре имени Кеннеди?`, correct_answer: "барокамере", trial_name: "a_Apolloprogram_2_qa_0"} 
};var a_Apolloprogram_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто входил в основной состав экипажа «Аполлон-1», как они сами себя назвали?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто входил в основной состав экипажа «Аполлон-1», как они сами себя назвали?`, correct_answer: "Гриссом, Уайт и Чаффи", trial_name: "a_Apolloprogram_2_qa_1"} 
};var a_Apolloprogram_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Для моделирования какого процесса на LC-34 проводились «испытания с выдернутыми штекерами»?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Для моделирования какого процесса на LC-34 проводились «испытания с выдернутыми штекерами»?`, correct_answer: "стартовый отсчет времени", trial_name: "a_Apolloprogram_2_qa_2"} 
};var a_Apolloprogram_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Где помимо Космического центра имени Кеннеди проводились испытания корабля «Аполлон-1»?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Где помимо Космического центра имени Кеннеди проводились испытания корабля «Аполлон-1»?`, correct_answer: "базе North American", trial_name: "a_Apolloprogram_2_qa_3"} 
};var a_Apolloprogram_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Располагая бюджетом в размере 230 000 долларов, <span id="a_Apolloprogram_4_qa_0">Дик Нафцгер</span> собрал сохранившиеся оригинальные записи лунной экспедиции «Аполлон-11» и передал компании <span id="a_Apolloprogram_4_qa_3">Lowry Digital</span> для восстановления. Видео было обработано для устранения фоновых шумов и дрожания камеры <span id="a_Apolloprogram_4_qa_1">без ущерба для его исторической достоверности</span>. Были использованы пленки из Австралии, записи из архива канала CBS News и <span id="a_Apolloprogram_4_qa_2">записи с экранов кинескопов</span>, сделанные в Космическом центре имени Джонсона. При восстановлении<span id="a_Apolloprogram_4_qa_4">черно-белого</span> видео применялись цифровые методы восстановления и улучшения качества изображения без улучшения качества звука.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Кто занимался сбором сохранившихся оригинальных записей экспедиции «Аполлон-11»?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто занимался сбором сохранившихся оригинальных записей экспедиции «Аполлон-11»?`, correct_answer: "Дик Нафцгер", trial_name: "a_Apolloprogram_4_qa_0"} 
};var a_Apolloprogram_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Удалось ли восстановить и обработать эти пленки без ущерба для исторической достоверности, или некоторые аспекты записей уже не могут считаться достоверными?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Удалось ли восстановить и обработать эти пленки без ущерба для исторической достоверности, или некоторые аспекты записей уже не могут считаться достоверными?`, correct_answer: "без ущерба для его исторической достоверности", trial_name: "a_Apolloprogram_4_qa_1"} 
};var a_Apolloprogram_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какие записи из Космического центра имени Джонсона использовались для восстановления оригинальных пленок?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какие записи из Космического центра имени Джонсона использовались для восстановления оригинальных пленок?`, correct_answer: "записи с экранов кинескопов", trial_name: "a_Apolloprogram_4_qa_2"} 
};var a_Apolloprogram_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой компании было поручено восстановить оригиналы пленок?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой компании было поручено восстановить оригиналы пленок?`, correct_answer: "Lowry Digital", trial_name: "a_Apolloprogram_4_qa_3"} 
};var a_Apolloprogram_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Были ли пленки восстановлены в цвете для улучшения качества изображения или остались черно-белыми?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Были ли пленки восстановлены в цвете для улучшения качества изображения или остались черно-белыми?`, correct_answer: "черно-белого", trial_name: "a_Apolloprogram_4_qa_4"} 
};var a_Amazonrainforest_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Экологи обеспокоены потерей <span id="a_Amazonrainforest_3_qa_0">биоразнообразия</span> в результате <span id="a_Amazonrainforest_3_qa_1">уничтожения леса</span>, а также выбросом <span id="a_Amazonrainforest_3_qa_2">углерода, содержащегося в растительности</span>, что может ускорить глобальное потепление. На вечнозеленые леса Амазонии приходится около 10% мировой производительности наземных первичных ресурсов и <span id="a_Amazonrainforest_3_qa_3">10%</span> запасов углерода в экосистемах — порядка <span id="a_Amazonrainforest_3_qa_4">1,1 × 10 в 11-й степени</span> тонн углерода. По оценкам, в период с 1975 по 1996 год в амазонских лесах накапливалось 0,62 ± 0,37 тонны углерода на гектар земли.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Чем обеспокоены защитники окружающей среды, учитывая потерю лесов Амазонки?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Чем обеспокоены защитники окружающей среды, учитывая потерю лесов Амазонки?`, correct_answer: "биоразнообразия", trial_name: "a_Amazonrainforest_3_qa_0"} 
};var a_Amazonrainforest_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В результате чего, по мнению экологов, может происходить утрата биоразнообразия?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В результате чего, по мнению экологов, может происходить утрата биоразнообразия?`, correct_answer: "уничтожения леса", trial_name: "a_Amazonrainforest_3_qa_1"} 
};var a_Amazonrainforest_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Высвобождение чего именно из региона Амазонки беспокоит экологов?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Высвобождение чего именно из региона Амазонки беспокоит экологов?`, correct_answer: "углерода, содержащегося в растительности", trial_name: "a_Amazonrainforest_3_qa_2"} 
};var a_Amazonrainforest_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какое количество мирового углерода хранится в лесах Амазонки?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какое количество мирового углерода хранится в лесах Амазонки?`, correct_answer: "10%", trial_name: "a_Amazonrainforest_3_qa_3"} 
};var a_Amazonrainforest_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько тонн углерода, как полагают, содержится в лесах Амазонки?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько тонн углерода, как полагают, содержится в лесах Амазонки?`, correct_answer: "1,1 × 10 в 11-й степени", trial_name: "a_Amazonrainforest_3_qa_4"} 
};var a_Ctenophora_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Обладая размерами от 1 миллиметра (0,039 дюйма) до 1,5 метра (4,9 фута) гребневики являются крупнейшими неколониальными животными, которые используют <span id="a_Ctenophora_2_qa_0">реснички</span> («волоски») в качестве основного <span id="a_Ctenophora_2_qa_1">способа локомоции</span>. Большинство видов имеют восемь пластинок, называемых рядами гребных пластинок, которые простираются по всей длине тела и имеют полосы из ресничек наподобие гребенки, называемые «<span id="a_Ctenophora_2_qa_2">ктены</span>», сложенные вдоль гребней так, чтобы при ударе ресничек каждый гребень касался гребня ниже. Название «ктенофора» (гребневик) означает «<span id="a_Ctenophora_2_qa_3">носящие гребень</span>», от греческого κτείς (корень κτεν-) — «гребень» и греческого суффикса -φορος, что означает «носить».</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Ctenophora_2_qa_0','#a_Ctenophora_2_qa_1','#a_Ctenophora_2_qa_2','#a_Ctenophora_2_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Ctenophora_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Ctenophora_2"}
};
var a_Ctenophora_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как называются волоски на гребневиках?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называются волоски на гребневиках?`, correct_answer: "реснички", trial_name: "a_Ctenophora_2_qa_0"} 
};var a_Ctenophora_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Для чего используются реснички?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Для чего используются реснички?`, correct_answer: "способа локомоции", trial_name: "a_Ctenophora_2_qa_1"} 
};var a_Ctenophora_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как называются полосы ресничек, похожие на гребень?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называются полосы ресничек, похожие на гребень?`, correct_answer: "ктены", trial_name: "a_Ctenophora_2_qa_2"} 
};var a_Ctenophora_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что означает ктенофора по-гречески?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что означает ктенофора по-гречески?`, correct_answer: "носящие гребень", trial_name: "a_Ctenophora_2_qa_3"} 
};var a_FresnoCalifornia_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Район Фресно «<span id="a_FresnoCalifornia_0_qa_4">Вест-Сайд</span>», который также часто называют «<span id="a_FresnoCalifornia_0_qa_0">Юго-западным Фресно</span>», является одним из старейших районов города. Район расположен <span id="a_FresnoCalifornia_0_qa_1">юго-западнее</span> от 99-й автомагистрали (которая отделяет его от центрального района Фресно), к западу от 41-й автомагистрали и к югу от Нильсен-Авеню (или недавно построенной 180-й автомагистрали), и простирается до границ города на западе и на юге. Этот район традиционно считается центром <span id="a_FresnoCalifornia_0_qa_2">афроамериканской общины</span> Фресно. Она разнообразна в культурном отношении и включает в себя значительное число мексиканско-американского и азиатско-американского населения (главным образом, <span id="a_FresnoCalifornia_0_qa_3">хмонгов и лаосцев</span>).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Как еще называется западная часть Фресно?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как еще называется западная часть Фресно?`, correct_answer: "Юго-западным Фресно", trial_name: "a_FresnoCalifornia_0_qa_0"} 
};var a_FresnoCalifornia_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком направлении относительно 99-й автомагистрали находится западная часть района Фресно?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком направлении относительно 99-й автомагистрали находится западная часть района Фресно?`, correct_answer: "юго-западнее", trial_name: "a_FresnoCalifornia_0_qa_1"} 
};var a_FresnoCalifornia_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Центром какой этнической общины является западная часть Фресно?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Центром какой этнической общины является западная часть Фресно?`, correct_answer: "афроамериканской общины", trial_name: "a_FresnoCalifornia_0_qa_2"} 
};var a_FresnoCalifornia_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какие две основные азиатско-американские группы населения проживают в западном районе Фресно?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какие две основные азиатско-американские группы населения проживают в западном районе Фресно?`, correct_answer: "хмонгов и лаосцев", trial_name: "a_FresnoCalifornia_0_qa_3"} 
};var a_FresnoCalifornia_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой район находится к западу от 41-й автомагистрали?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой район находится к западу от 41-й автомагистрали?`, correct_answer: "Вест-Сайд", trial_name: "a_FresnoCalifornia_0_qa_4"} 
};var a_FresnoCalifornia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Фресно обслуживается <span id="a_FresnoCalifornia_3_qa_0">99-м шоссе</span>, главной магистралью, проложенной с севера на юг и соединяющей основные населенные пункты Центральной долины Калифорнии. 168-е шоссе, <span id="a_FresnoCalifornia_3_qa_1">автомагистраль Сиерра</span>, ведет на восток к городу Кловис и озеру Хантингтон-Лейк.  <span id="a_FresnoCalifornia_3_qa_2">41-е шоссе</span> (Йосемитская автомагистраль/автомагистраль Эйзенхауэра) ведет во Фресно из Атаскадеро на юге, а затем направляется на север к Йосемиту. 180-е шоссе (автомагистраль Кингс-Каньон) идет с <span id="a_FresnoCalifornia_3_qa_3">запада</span> через Мендоту, и с востока через Национальный парк Кингс-Каньон в направлении города Ридли.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Какая дорога соединяет Фресно с Центральной долиной Калифорнии?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая дорога соединяет Фресно с Центральной долиной Калифорнии?`, correct_answer: "99-м шоссе", trial_name: "a_FresnoCalifornia_3_qa_0"} 
};var a_FresnoCalifornia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как еще называется 168-е шоссе?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как еще называется 168-е шоссе?`, correct_answer: "автомагистраль Сиерра", trial_name: "a_FresnoCalifornia_3_qa_1"} 
};var a_FresnoCalifornia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как еще называется Йосемитское шоссе?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как еще называется Йосемитское шоссе?`, correct_answer: "41-е шоссе", trial_name: "a_FresnoCalifornia_3_qa_2"} 
};var a_FresnoCalifornia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">С какого направления через Мендоту проходит 180-е шоссе?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `С какого направления через Мендоту проходит 180-е шоссе?`, correct_answer: "запада", trial_name: "a_FresnoCalifornia_3_qa_3"} 
};var a_Geology_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Geology_4_qa_0">Джеймса Хаттона</span> зачастую считают первым современным геологом. В 1785 году он представил Эдинбургскому королевскому обществу работу под названием <span id="a_Geology_4_qa_1">"Теория Земли"</span>. В этой работе он объяснял свою теорию о том, что <span id="a_Geology_4_qa_3">Земля должна быть намного старше, чем предполагалось ранее</span>, чтобы могло пройти достаточно времени для разрушения гор и образования новых камней из осадочных пород на дне моря, которые, в свою очередь, должны были подняться, чтобы стать сушей. Хаттон опубликовал двухтомную версию своих идей в <span id="a_Geology_4_qa_2">1795 году</span> (Том 1, Том 2).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Кого считают первым современным геологом?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кого считают первым современным геологом?`, correct_answer: "Джеймса Хаттона", trial_name: "a_Geology_4_qa_0"} 
};var a_Geology_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какую работу Джеймс Хаттон представил Эдинбургскому королевскому обществу в 1785 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какую работу Джеймс Хаттон представил Эдинбургскому королевскому обществу в 1785 году?`, correct_answer: "Теория Земли", trial_name: "a_Geology_4_qa_1"} 
};var a_Geology_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком году Джеймс Хаттон опубликовал двухтомную версию своих теорий?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком году Джеймс Хаттон опубликовал двухтомную версию своих теорий?`, correct_answer: "1795 году", trial_name: "a_Geology_4_qa_2"} 
};var a_Geology_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какова главная идея работы Джеймса Хаттона?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какова главная идея работы Джеймса Хаттона?`, correct_answer: "Земля должна быть намного старше, чем предполагалось ранее", trial_name: "a_Geology_4_qa_3"} 
};var a_VictoriaandAlbertMuseum_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Коллекция костюмов является самой полной в Британии, она включает <span id="a_VictoriaandAlbertMuseum_2_qa_0">более 14 000</span> нарядов и аксессуаров, в основном датируемых с 1600 года по настоящее время. Эскизы костюмов, дизайнерские тетради и другие работы на бумаге обычно хранятся в отделе <span id="a_VictoriaandAlbertMuseum_2_qa_1">слов и изображений</span>. <span id="a_VictoriaandAlbertMuseum_2_qa_2">Поскольку повседневная одежда прошлых эпох практически не сохранилась</span>, в коллекции доминируют модные наряды для особых случаев. Один из первых значительных подарков костюмов был преподнесен в <span id="a_VictoriaandAlbertMuseum_2_qa_3">1913</span> году, когда музей Виктории и Альберта получил коллекцию Талбота Хьюса, содержавшую 1 442 костюма и предмета, подаренных <span id="a_VictoriaandAlbertMuseum_2_qa_4">Harrods</span> после показа в соседнем универмаге.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_VictoriaandAlbertMuseum_2_qa_0','#a_VictoriaandAlbertMuseum_2_qa_1','#a_VictoriaandAlbertMuseum_2_qa_2','#a_VictoriaandAlbertMuseum_2_qa_3','#a_VictoriaandAlbertMuseum_2_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_VictoriaandAlbertMuseum_2_1280_720.png';
a.click();});}},data: { trial_name: "a_VictoriaandAlbertMuseum_2"}
};
var a_VictoriaandAlbertMuseum_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько примерно предметов в коллекции костюмов музея Виктории и Альберта?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько примерно предметов в коллекции костюмов музея Виктории и Альберта?`, correct_answer: "более 14 000", trial_name: "a_VictoriaandAlbertMuseum_2_qa_0"} 
};var a_VictoriaandAlbertMuseum_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком отделе хранятся бумажные работы из коллекции костюмов?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком отделе хранятся бумажные работы из коллекции костюмов?`, correct_answer: "слов и изображений", trial_name: "a_VictoriaandAlbertMuseum_2_qa_1"} 
};var a_VictoriaandAlbertMuseum_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Почему в коллекции доминирует модная одежда для особых случаев?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Почему в коллекции доминирует модная одежда для особых случаев?`, correct_answer: "Поскольку повседневная одежда прошлых эпох практически не сохранилась", trial_name: "a_VictoriaandAlbertMuseum_2_qa_2"} 
};var a_VictoriaandAlbertMuseum_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком году музей Виктории и Альберта получил коллекцию Талбота Хьюса?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком году музей Виктории и Альберта получил коллекцию Талбота Хьюса?`, correct_answer: "1913", trial_name: "a_VictoriaandAlbertMuseum_2_qa_3"} 
};var a_VictoriaandAlbertMuseum_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Подарком от какой компании была коллекция Талбота Хьюса?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Подарком от какой компании была коллекция Талбота Хьюса?`, correct_answer: "Harrods", trial_name: "a_VictoriaandAlbertMuseum_2_qa_4"} 
};var a_AmericanBroadcastingCompany_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">В 2000 году ABC запустила рекламную веб-кампанию, в центре которой оказался их <span id="a_AmericanBroadcastingCompany_0_qa_0">круглый логотип</span>, так называемая "<span id="a_AmericanBroadcastingCompany_0_qa_3">точка</span>". В этой кампании персонаж одноименного комикса Маленькая Точка предлагала посетителям "скачать точку", программу, с помощью которой логотип ABC начинал летать по экрану, а потом располагался в правом нижнем углу. Сеть наняла агентство <span id="a_AmericanBroadcastingCompany_0_qa_1">Troika Design Group</span> для создания и разработки своего стиля 2001—02 годов, в котором по-прежнему использовалось <span id="a_AmericanBroadcastingCompany_0_qa_2">черно-желтое</span> оформление логотипа с точками и полосами в различных рекламных и идентификационных форматах.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Что оказалось в центре интернет-кампании ABC, запущенной в 2000 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что оказалось в центре интернет-кампании ABC, запущенной в 2000 году?`, correct_answer: "круглый логотип", trial_name: "a_AmericanBroadcastingCompany_0_qa_0"} 
};var a_AmericanBroadcastingCompany_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто был нанят для разработки идентичности ABC 2001-02?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто был нанят для разработки идентичности ABC 2001-02?`, correct_answer: "Troika Design Group", trial_name: "a_AmericanBroadcastingCompany_0_qa_1"} 
};var a_AmericanBroadcastingCompany_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какого цвета был логотип ABC в 2001 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какого цвета был логотип ABC в 2001 году?`, correct_answer: "черно-желтое", trial_name: "a_AmericanBroadcastingCompany_0_qa_2"} 
};var a_AmericanBroadcastingCompany_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какое прозвище у логотипа ABC из кампании 2000 года?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какое прозвище у логотипа ABC из кампании 2000 года?`, correct_answer: "точка", trial_name: "a_AmericanBroadcastingCompany_0_qa_3"} 
};var a_AmericanBroadcastingCompany_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">В начале <span id="a_AmericanBroadcastingCompany_3_qa_0">1970-х</span> ABC завершила переход к цвету; десятилетие в целом стало поворотным моментом для <span id="a_AmericanBroadcastingCompany_3_qa_1">ABC</span>, когда она начала превосходить CBS и NBC по рейтингам и заняла место первой сети. Она также начала использовать <span id="a_AmericanBroadcastingCompany_3_qa_2">поведенческие и демографические</span> показатели для более эффективного определения типов спонсоров, которым следует продавать рекламные слоты, и обеспечения программы передач, ориентированных на определенные аудитории. Прирост доли аудитории ABC был в значительной степени обусловлен тем фактом, что несколько менее крупных рынков стали достаточно большими, чтобы позволить установление постоянной связи со всеми тремя сетями.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_AmericanBroadcastingCompany_3_qa_0','#a_AmericanBroadcastingCompany_3_qa_1','#a_AmericanBroadcastingCompany_3_qa_2'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_AmericanBroadcastingCompany_3_1280_720.png';
a.click();});}},data: { trial_name: "a_AmericanBroadcastingCompany_3"}
};
var a_AmericanBroadcastingCompany_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком десятилетии ABC завершил переход к цвету?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком десятилетии ABC завершил переход к цвету?`, correct_answer: "1970-х", trial_name: "a_AmericanBroadcastingCompany_3_qa_0"} 
};var a_AmericanBroadcastingCompany_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какая сеть в 1970-х смогла переместиться на первое место по рейтингам ?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая сеть в 1970-х смогла переместиться на первое место по рейтингам ?`, correct_answer: "ABC", trial_name: "a_AmericanBroadcastingCompany_3_qa_1"} 
};var a_AmericanBroadcastingCompany_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какие данные ABC начала использовать в 1970-х для более эффективного таргетинга рекламы и передач для определенных аудиторий?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какие данные ABC начала использовать в 1970-х для более эффективного таргетинга рекламы и передач для определенных аудиторий?`, correct_answer: "поведенческие и демографические", trial_name: "a_AmericanBroadcastingCompany_3_qa_2"} 
};var a_Pharmacy_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">В большинстве стран деятельность рецептурных отделов регулируется <span id="a_Pharmacy_2_qa_0">законодательством  об аптечной практике</span>, определяющим требования, касающиеся <span id="a_Pharmacy_2_qa_4">условий хранения, текстов, обязательных для выполнения, оборудования и т. д.</span>. В прошлом, когда фармацевты находились <span id="a_Pharmacy_2_qa_1">в рецептурном отделе, приготовляя/отпуская медикаменты</span>, имеется возрастающая тенденция использовать специально обученных аптекарей, в то время как фармацевт проводит больше времени в общении с пациентами. В настоящее время аптекари больше зависят от <span id="a_Pharmacy_2_qa_2">автоматики</span>, помогающей им в их новой роли, когда они имеют дело с <span id="a_Pharmacy_2_qa_3">лекарствами, прописанными пациентам, и с вопросами безопасности пациентов</span>.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Pharmacy_2_qa_0','#a_Pharmacy_2_qa_1','#a_Pharmacy_2_qa_2','#a_Pharmacy_2_qa_3','#a_Pharmacy_2_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Pharmacy_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Pharmacy_2"}
};
var a_Pharmacy_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Чем регулируется деятельность рецептурных отделов в большинстве стран?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Чем регулируется деятельность рецептурных отделов в большинстве стран?`, correct_answer: "законодательством  об аптечной практике", trial_name: "a_Pharmacy_2_qa_0"} 
};var a_Pharmacy_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Каким кругом обязанностей ограничивались аптекари в прошлом?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Каким кругом обязанностей ограничивались аптекари в прошлом?`, correct_answer: "в рецептурном отделе, приготовляя/отпуская медикаменты", trial_name: "a_Pharmacy_2_qa_1"} 
};var a_Pharmacy_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">От чего всё больше и больше зависят аптекари?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `От чего всё больше и больше зависят аптекари?`, correct_answer: "автоматики", trial_name: "a_Pharmacy_2_qa_2"} 
};var a_Pharmacy_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какие новые обязанности имеются теперь у аптекарей?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какие новые обязанности имеются теперь у аптекарей?`, correct_answer: "лекарствами, прописанными пациентам, и с вопросами безопасности пациентов", trial_name: "a_Pharmacy_2_qa_3"} 
};var a_Pharmacy_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какие требования предъявляются законодательством  об аптечной практике?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какие требования предъявляются законодательством  об аптечной практике?`, correct_answer: "условий хранения, текстов, обязательных для выполнения, оборудования и т. д.", trial_name: "a_Pharmacy_2_qa_4"} 
};var a_Construction_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Construction_0_qa_0">Строительство</span> — это процесс сооружения здания или инфраструктуры. Строительство отличается от производства тем, что <span id="a_Construction_0_qa_1">производство</span> обычно включает в себя массовое изготовление похожих товаров без того, чтобы назначался покупатель, в то время как строительство обычно осуществляется на некоторой территории для <span id="a_Construction_0_qa_4">известного клиента</span>. Строительство как отрасль экономической деятельности составляет в развитых странах <span id="a_Construction_0_qa_2">от шести до девяти процентов</span> валового национального продукта. Строительство начинается с <span id="a_Construction_0_qa_3">планирования,[необходима ссылка] дизайна и финансирования</span> и продолжается, пока проект не будет завершен и готов к эксплуатации.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Что представляет собой процесс построения здания или инфраструктуры?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что представляет собой процесс построения здания или инфраструктуры?`, correct_answer: "Строительство", trial_name: "a_Construction_0_qa_0"} 
};var a_Construction_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что включает в себя обычно массовое изготовление похожих товаров без того, чтобы назначался покупатель?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что включает в себя обычно массовое изготовление похожих товаров без того, чтобы назначался покупатель?`, correct_answer: "производство", trial_name: "a_Construction_0_qa_1"} 
};var a_Construction_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой процент валового национального продукта составляет строительство?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой процент валового национального продукта составляет строительство?`, correct_answer: "от шести до девяти процентов", trial_name: "a_Construction_0_qa_2"} 
};var a_Construction_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какие три составляющие необходимы для осуществления строительства?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какие три составляющие необходимы для осуществления строительства?`, correct_answer: "планирования,[необходима ссылка] дизайна и финансирования", trial_name: "a_Construction_0_qa_3"} 
};var a_Construction_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Для кого осуществляется строительство на некоторой территории?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Для кого осуществляется строительство на некоторой территории?`, correct_answer: "известного клиента", trial_name: "a_Construction_0_qa_4"} 
};var a_Privateschool_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Privateschool_0_qa_0">Дополнительные школы</span> – это средние или cредние специальные (не высшие) школы, которыми управляют частные лица, частные организации или изредка <span id="a_Privateschool_0_qa_3">религиозные</span> группы, в которых предлагают тип образования, который не доступен в государственных школах. Большая часть таких школ – это <span id="a_Privateschool_0_qa_1">профессиональные</span> училища. Тем не менее, эти профессиональные училища не являются частью системы среднего специального образования Германии. Дополнительные школы имеют право действовать вне рамок государственного регулирования и финансируются полностью из средств, которые учащиеся платят за <span id="a_Privateschool_0_qa_2">обучение</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Как в Германии называются частные средние школы?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как в Германии называются частные средние школы?`, correct_answer: "Дополнительные школы", trial_name: "a_Privateschool_0_qa_0"} 
};var a_Privateschool_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какими типами школ является большинство дополнительных школ?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какими типами школ является большинство дополнительных школ?`, correct_answer: "профессиональные", trial_name: "a_Privateschool_0_qa_1"} 
};var a_Privateschool_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как финансируются дополнительные школы?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как финансируются дополнительные школы?`, correct_answer: "обучение", trial_name: "a_Privateschool_0_qa_2"} 
};var a_Privateschool_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какие группы иногда управляют дополнительными школами наряду с частными лицами и организациями?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какие группы иногда управляют дополнительными школами наряду с частными лицами и организациями?`, correct_answer: "религиозные", trial_name: "a_Privateschool_0_qa_3"} 
};var a_Privateschool_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Некоторые из самых старых школ в Южно-Африканской Республике являются частными церковными школами, которые были основаны миссионерами в начале <span id="a_Privateschool_2_qa_4">девятнадцатого</span> столетия. Частный сектор вырос с тех пор. После отмены апартеида законы, регулирующие частное образование в ЮАР, значительно изменились. <span id="a_Privateschool_2_qa_0">Акт ЮАР о школах</span> от <span id="a_Privateschool_2_qa_1">1996 г.</span> признает две категории школ: "государственные" (под контролем государства) и "<span id="a_Privateschool_2_qa_2">независимые</span>" (что включает <span id="a_Privateschool_2_qa_3">традиционные частные</span> школы и школы, которые управляются частным образом[необходимо разъяснение].)</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Какой закон ЮАР признал два типа школ?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой закон ЮАР признал два типа школ?`, correct_answer: "Акт ЮАР о школах", trial_name: "a_Privateschool_2_qa_0"} 
};var a_Privateschool_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком году был принят Акт ЮАР о школах?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком году был принят Акт ЮАР о школах?`, correct_answer: "1996 г.", trial_name: "a_Privateschool_2_qa_1"} 
};var a_Privateschool_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой тип школы был признан Актом ЮАР о школах наряду с государственными школами?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой тип школы был признан Актом ЮАР о школах наряду с государственными школами?`, correct_answer: "независимые", trial_name: "a_Privateschool_2_qa_2"} 
};var a_Privateschool_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какие школы в ЮАР классифицируются как независимые наряду со школами, которые управляются частным образом?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какие школы в ЮАР классифицируются как независимые наряду со школами, которые управляются частным образом?`, correct_answer: "традиционные частные", trial_name: "a_Privateschool_2_qa_3"} 
};var a_Privateschool_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком столетии миссионеры основали церковные школы в ЮАР?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком столетии миссионеры основали церковные школы в ЮАР?`, correct_answer: "девятнадцатого", trial_name: "a_Privateschool_2_qa_4"} 
};var a_HarvardUniversity_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Гарвардская школа бизнеса и многие спортивные сооружения университета, в том числе Гарвардский стадион, расположены на кампусе площадью 358 акров (145 га) напротив кампуса Кембриджа в <span id="a_HarvardUniversity_1_qa_0">Оллстоне</span>. <span id="a_HarvardUniversity_1_qa_1">Мост "Джон В. Викс"</span> является пешеходным мостом через реку Чарльз, соединяющим оба кампуса. Гарвардская медицинская школа, Гарвардская школа стоматологии и Гарвардская школа общественного здравоохранения расположены на кампусе площадью 21 акр (8,5 га) в <span id="a_HarvardUniversity_1_qa_2">Медицинской и академической части Лонгвуда</span> примерно в 3,3 милях (5,3 км) к  юго-западу от центра Бостона и в 3,3 милях (5,3 км) к югу от кампуса Кембриджа.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Где находится Гарвардский стадион?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Где находится Гарвардский стадион?`, correct_answer: "Оллстоне", trial_name: "a_HarvardUniversity_1_qa_0"} 
};var a_HarvardUniversity_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как называется мост на реке Чарльз, соединяющий части кампуса?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называется мост на реке Чарльз, соединяющий части кампуса?`, correct_answer: "Мост Джон В. Викс", trial_name: "a_HarvardUniversity_1_qa_1"} 
};var a_HarvardUniversity_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Где находятся Гарвардская медицинская школа, Гарвардская школа стоматологии и Гарвардская школа общественного здравоохранения?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Где находятся Гарвардская медицинская школа, Гарвардская школа стоматологии и Гарвардская школа общественного здравоохранения?`, correct_answer: "Медицинской и академической части Лонгвуда", trial_name: "a_HarvardUniversity_1_qa_2"} 
};var a_HarvardUniversity_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Прием студентов в Гарвардский университет характеризуется Фондом Карнеги как "более избирательный, более низкий прием". Гарвард-колледж принял <span id="a_HarvardUniversity_3_qa_0">5,3%</span> кандидатов на 2019 учебный год, что является рекордно низким и вторым самым низким показателем приема среди всех национальных университетов. Гарвард-колледж прекратил свою программу раннего приема в <span id="a_HarvardUniversity_3_qa_1">2007 году</span>, поскольку считалось, что программа <span id="a_HarvardUniversity_3_qa_2">действует в ущерб абитуриентов из малообеспеченных семей и национальных меньшинств</span>, поступающих в вузы с наличием конкурсного отбора, но для приема <span id="a_HarvardUniversity_3_qa_3">2016 года</span> была заново введена программа ранних действий.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_HarvardUniversity_3_qa_0','#a_HarvardUniversity_3_qa_1','#a_HarvardUniversity_3_qa_2','#a_HarvardUniversity_3_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_HarvardUniversity_3_1280_720.png';
a.click();});}},data: { trial_name: "a_HarvardUniversity_3"}
};
var a_HarvardUniversity_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Каким является процент приема абитуриентов в 2019 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Каким является процент приема абитуриентов в 2019 году?`, correct_answer: "5,3%", trial_name: "a_HarvardUniversity_3_qa_0"} 
};var a_HarvardUniversity_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком году Гарвард прекратил программу раннего приема?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком году Гарвард прекратил программу раннего приема?`, correct_answer: "2007 году", trial_name: "a_HarvardUniversity_3_qa_1"} 
};var a_HarvardUniversity_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Почему Гарвард прекратил программу раннего приема?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Почему Гарвард прекратил программу раннего приема?`, correct_answer: "действует в ущерб абитуриентов из малообеспеченных семей и национальных меньшинств", trial_name: "a_HarvardUniversity_3_qa_2"} 
};var a_HarvardUniversity_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком году программа раннего приема была введена снова?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком году программа раннего приема была введена снова?`, correct_answer: "2016 года", trial_name: "a_HarvardUniversity_3_qa_3"} 
};var a_JacksonvilleFlorida_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_JacksonvilleFlorida_0_qa_0">Джэксонвилл</span> является крупнейшим городом по численности населения в американском штате Флорида и крупнейшим городом по площади среди граничащих штатов США. Это главный город <span id="a_JacksonvilleFlorida_0_qa_3">округа Дувал</span>, с которым правительство города объединилось в <span id="a_JacksonvilleFlorida_0_qa_4">1968 г.</span>. Объединение дало Джэксонвиллю большую площадь и разместило бoльшую часть населения столицы в черте города; имея численность населения 853 382 человек по оценке 2014 года, это самый густонаселенный город во Флориде и на юго-востоке, а также <span id="a_JacksonvilleFlorida_0_qa_2">12-й</span> самый густонаселенный город в США. Джэксонвилл является главным городом в метрополитенском районе Джэксонвилл с населением <span id="a_JacksonvilleFlorida_0_qa_1">1 345 596</span> по состоянию на 2010 год.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_JacksonvilleFlorida_0_qa_0','#a_JacksonvilleFlorida_0_qa_1','#a_JacksonvilleFlorida_0_qa_2','#a_JacksonvilleFlorida_0_qa_3','#a_JacksonvilleFlorida_0_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_JacksonvilleFlorida_0_1280_720.png';
a.click();});}},data: { trial_name: "a_JacksonvilleFlorida_0"}
};
var a_JacksonvilleFlorida_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой город Флориды имеет самое большое население?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой город Флориды имеет самое большое население?`, correct_answer: "Джэксонвилл", trial_name: "a_JacksonvilleFlorida_0_qa_0"} 
};var a_JacksonvilleFlorida_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какова была численность населения Джэксонвилля в 2010 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какова была численность населения Джэксонвилля в 2010 году?`, correct_answer: "1 345 596", trial_name: "a_JacksonvilleFlorida_0_qa_1"} 
};var a_JacksonvilleFlorida_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Исходя из численности населения, какое место занимает Джэксонвилл в Соединенных Штатах?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Исходя из численности населения, какое место занимает Джэксонвилл в Соединенных Штатах?`, correct_answer: "12-й", trial_name: "a_JacksonvilleFlorida_0_qa_2"} 
};var a_JacksonvilleFlorida_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком округе находится Джэксонвилл?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком округе находится Джэксонвилл?`, correct_answer: "округа Дувал", trial_name: "a_JacksonvilleFlorida_0_qa_3"} 
};var a_JacksonvilleFlorida_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком году благодаря объединению Джэксонвилл стал частью округа Дувал?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком году благодаря объединению Джэксонвилл стал частью округа Дувал?`, correct_answer: "1968 г.", trial_name: "a_JacksonvilleFlorida_0_qa_4"} 
};var a_DoctorWho_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Самым частым музыкальным автором в течение первых 15 лет был <span id="a_DoctorWho_3_qa_0">Дадли Симпсон</span>, который также известен основной музыкальной темой для "Семерки Блейка", а также его чарующей музыкой для оригинальной версии 1970-х годов фильма "Люди будущего". Первая музыка Симпсона к фильму "Доктор Кто" была для <span id="a_DoctorWho_3_qa_1">Планеты гигантов</span> (1964), после чего он продолжил писать музыку для многих приключений <span id="a_DoctorWho_3_qa_2">1960-х и 1970-х годов</span>, в том числе для большинства историй периода Джона Пертви / Тома Бейкера, заканчивая фильмом <span id="a_DoctorWho_3_qa_3">"Рога Нимона"</span> (1979). Он также сыграл эпизодическую роль в серии <span id="a_DoctorWho_3_qa_4">"Когти Венг-Чанга"</span> (в качестве дирижера в мюзик-холле).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Кто был самым частым музыкальным автором фильма "Доктор Кто" в первые 15 лет шоу?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто был самым частым музыкальным автором фильма "Доктор Кто" в первые 15 лет шоу?`, correct_answer: "Дадли Симпсон", trial_name: "a_DoctorWho_3_qa_0"} 
};var a_DoctorWho_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как называлась серия фильма "Доктор Кто", для которой Симпсон написал первую музыку?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называлась серия фильма "Доктор Кто", для которой Симпсон написал первую музыку?`, correct_answer: "Планеты гигантов", trial_name: "a_DoctorWho_3_qa_1"} 
};var a_DoctorWho_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В какие десятилетия Дадли Симпсон был наиболее активным участником "Доктора Кто"?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В какие десятилетия Дадли Симпсон был наиболее активным участником "Доктора Кто"?`, correct_answer: "1960-х и 1970-х годов", trial_name: "a_DoctorWho_3_qa_2"} 
};var a_DoctorWho_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Для какой последней серии "Доктора Кто» Дадли Симпсон написал музыку?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Для какой последней серии "Доктора Кто» Дадли Симпсон написал музыку?`, correct_answer: "Рога Нимона", trial_name: "a_DoctorWho_3_qa_3"} 
};var a_DoctorWho_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В какой серии Дадли Симпсон сыграл роль дирижера?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В какой серии Дадли Симпсон сыграл роль дирижера?`, correct_answer: "Когти Венг-Чанга", trial_name: "a_DoctorWho_3_qa_4"} 
};var a_DoctorWho_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Доктор Кто появлялся на сцене много раз. В начале 1970-х годов <span id="a_DoctorWho_4_qa_0">Тревор Мартин</span> сыграл роль в серии <span id="a_DoctorWho_4_qa_3">"Доктор Кто и Далеки в семи ключах Судного дня"</span>. В конце 1980-х годов Джон Пертви и Колин Бейкер оба играли Доктора в разное время во время пьесы под названием <span id="a_DoctorWho_4_qa_1">"Доктор Кто – наибольшее приключение"</span>. В течение двух спектаклей, когда Пертви был болен, <span id="a_DoctorWho_4_qa_4">Дэвид Бэнкс</span> (более известен за роли киберлюдей) играл Доктора. Другие оригинальные пьесы были поставлены как любительские постановки с участием других актеров в роли Доктора, а Терри Нейшн написал <span id="a_DoctorWho_4_qa_2">"Проклятие Далеков"</span>, пьесу, поставленную в конце 1960-х годов, но без Доктора.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_DoctorWho_4_qa_0','#a_DoctorWho_4_qa_1','#a_DoctorWho_4_qa_2','#a_DoctorWho_4_qa_3','#a_DoctorWho_4_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_DoctorWho_4_1280_720.png';
a.click();});}},data: { trial_name: "a_DoctorWho_4"}
};
var a_DoctorWho_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто играл Доктора не сцене в 70-х годах?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто играл Доктора не сцене в 70-х годах?`, correct_answer: "Тревор Мартин", trial_name: "a_DoctorWho_4_qa_0"} 
};var a_DoctorWho_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как называлась пьеса про Доктора Кто с 1980-х годов?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называлась пьеса про Доктора Кто с 1980-х годов?`, correct_answer: "Доктор Кто – наибольшее приключение", trial_name: "a_DoctorWho_4_qa_1"} 
};var a_DoctorWho_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какая из серий "Доктора Кто" была написана без участия Доктора Кто?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая из серий "Доктора Кто" была написана без участия Доктора Кто?`, correct_answer: "Проклятие Далеков", trial_name: "a_DoctorWho_4_qa_2"} 
};var a_DoctorWho_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как называлась пьеса в 1970-х годах?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называлась пьеса в 1970-х годах?`, correct_answer: "Доктор Кто и Далеки в семи ключах Судного дня", trial_name: "a_DoctorWho_4_qa_3"} 
};var a_DoctorWho_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой актер заменил Доктора Кто из-за болезни главного актера?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой актер заменил Доктора Кто из-за болезни главного актера?`, correct_answer: "Дэвид Бэнкс", trial_name: "a_DoctorWho_4_qa_4"} 
};var a_Yuandynasty_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Историк <span id="a_Yuandynasty_4_qa_0">Фредерик В. Мот</span> писал, что использование термина "социальные классы" для этой системы вводит в заблуждение, и что положение людей в системе четырех классов не является показателем их реальной социальной власти и богатства, но влечет за собой "<span id="a_Yuandynasty_4_qa_1">степени привилегий</span>", на которые они имели институциональные и юридические права, так что положение человека в классах не было гарантией его положения в обществе, так как были <span id="a_Yuandynasty_4_qa_2">богатые и занимающие высокое социальное положение</span> китайцы, в то время как были менее богатые монголы и сему, которые <span id="a_Yuandynasty_4_qa_3">жили в бедности и подвергались жестокому обращению</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Кто считал, что систему социальных классов Юаня не следует называть социальными классами?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто считал, что систему социальных классов Юаня не следует называть социальными классами?`, correct_answer: "Фредерик В. Мот", trial_name: "a_Yuandynasty_4_qa_0"} 
};var a_Yuandynasty_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что, по мнению Мота, действительно представляла сосбой система классов Юаня?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что, по мнению Мота, действительно представляла сосбой система классов Юаня?`, correct_answer: "степени привилегий", trial_name: "a_Yuandynasty_4_qa_1"} 
};var a_Yuandynasty_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">С каким неожиданным статусом было много китайцев?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `С каким неожиданным статусом было много китайцев?`, correct_answer: "богатые и занимающие высокое социальное положение", trial_name: "a_Yuandynasty_4_qa_2"} 
};var a_Yuandynasty_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">С каким неожиданным статусом было много монголов?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `С каким неожиданным статусом было много монголов?`, correct_answer: "жили в бедности и подвергались жестокому обращению", trial_name: "a_Yuandynasty_4_qa_3"} 
};var a_Kenya_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Kenya имеет <span id="a_Kenya_0_qa_0">низкий</span> рейтинг по индексу восприятия коррупции по версии Transparency International (ИВК), показатель, который пытается измерить распространенность <span id="a_Kenya_0_qa_1">коррупции в государственном секторе</span> в различных странах. В 2012 году эта страна заняла <span id="a_Kenya_0_qa_2">139-е</span> место среди 176 стран по ИВК, набрав 27 баллов из 100. Тем не менее, есть несколько довольно значительных событий, связанных с борьбой с коррупцией со стороны кенийского правительства, например, <span id="a_Kenya_0_qa_3">создание новой независимой Комиссии по этике и противодействию коррупции</span> (КЭПК). </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Где находится Кения по шкале ИВК?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Где находится Кения по шкале ИВК?`, correct_answer: "низкий", trial_name: "a_Kenya_0_qa_0"} 
};var a_Kenya_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что измеряет шкала ИВК?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что измеряет шкала ИВК?`, correct_answer: "коррупции в государственном секторе", trial_name: "a_Kenya_0_qa_1"} 
};var a_Kenya_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какое место по шкале занимает Кения в 2012 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какое место по шкале занимает Кения в 2012 году?`, correct_answer: "139-е", trial_name: "a_Kenya_0_qa_2"} 
};var a_Kenya_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как Кения борется с коррупцией?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как Кения борется с коррупцией?`, correct_answer: "создание новой независимой Комиссии по этике и противодействию коррупции", trial_name: "a_Kenya_0_qa_3"} 
};var a_Kenya_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">В дни рассмотрения дела в <span id="a_Kenya_2_qa_0">Международном уголовном суде</span> в 2013 году как в отношении президента Кеньятты, так и заместителя президента Уильяма Руто, связанного с последствиями выборов 2007 года, <span id="a_Kenya_2_qa_1">Президент США Барак Обама</span> решил не посещать страну во время своей поездки в Африку в середине 2013 года. Позже летом Кеньятта посетил <span id="a_Kenya_2_qa_2">Китай</span> по приглашению президента Си Цзиньпина после остановки в России и не посетив Соединенные Штаты в качестве президента. В <span id="a_Kenya_2_qa_3">июле 2015 года</span> Обама посетил Кению в качестве первого американского президента, посетившего эту страну во время срока действия президентских полномочий. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Какие были результаты выборов 2007 года? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какие были результаты выборов 2007 года? `, correct_answer: "Международном уголовном суде", trial_name: "a_Kenya_2_qa_0"} 
};var a_Kenya_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто решил не посещать страну в 2013 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто решил не посещать страну в 2013 году?`, correct_answer: "Президент США Барак Обама", trial_name: "a_Kenya_2_qa_1"} 
};var a_Kenya_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Где побывал Кеньятта по приглашению президента? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Где побывал Кеньятта по приглашению президента? `, correct_answer: "Китай", trial_name: "a_Kenya_2_qa_2"} 
};var a_Kenya_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда Обама наконец посетил Кению? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда Обама наконец посетил Кению? `, correct_answer: "июле 2015 года", trial_name: "a_Kenya_2_qa_3"} 
};var a_IntergovernmentalPanelonClimateChange_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">С 8 октября 2015 года, после выборов нового Бюро МГЭИК, председателем МГЭИК является <span id="a_IntergovernmentalPanelonClimateChange_0_qa_1">Корейский</span> экономист <span id="a_IntergovernmentalPanelonClimateChange_0_qa_0">Хёсон Ли</span>. До этих выборов МГЭИК возглавлял заместитель председателя <span id="a_IntergovernmentalPanelonClimateChange_0_qa_2">Исмаил Эль-Гизули</span>, который был назначен исполняющим обязанности председателя после отставки Раджендры К. Пачаури в <span id="a_IntergovernmentalPanelonClimateChange_0_qa_4">феврале 2015 года</span>. Предыдущими председателями были Раджендра К. Пачаури, избранный в мае 2002 года; Роберт Уотсон в 1997 году; и <span id="a_IntergovernmentalPanelonClimateChange_0_qa_3">Берт Болин</span> в 1988 году. Председателю помогает избранное бюро, в которое входят заместители председателя, сопредседатели рабочих групп и секретариат. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Кто является председателем МГЭИК?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто является председателем МГЭИК?`, correct_answer: "Хёсон Ли", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_0"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой национальности Хёсон Ли?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой национальности Хёсон Ли?`, correct_answer: "Корейский", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_1"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто является заместителем председателя МГЭИК?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто является заместителем председателя МГЭИК?`, correct_answer: "Исмаил Эль-Гизули", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_2"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто был первым председателем МГЭИК?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто был первым председателем МГЭИК?`, correct_answer: "Берт Болин", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_3"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда Пачаури подал в отставку с поста председателя МГЭИК?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда Пачаури подал в отставку с поста председателя МГЭИК?`, correct_answer: "феврале 2015 года", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_4"} 
};var a_IntergovernmentalPanelonClimateChange_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Этот прогноз не был включен в окончательную сводку для лиц, определяющих политику. С тех пор МГЭИК признала, что <span id="a_IntergovernmentalPanelonClimateChange_2_qa_0">дата</span> является неверной, и при этом вновь подтвердила, что заключение в сводном отчете было обоснованным. Они выразили сожаление по поводу <span id="a_IntergovernmentalPanelonClimateChange_2_qa_1">"плохого применения в этом случае хорошо зарекомендовавших себя процедур МГЭИК"</span>. МГЭИК правильно сослалась на дату 2035 года из <span id="a_IntergovernmentalPanelonClimateChange_2_qa_2">отчета Всемирного фонда дикой природы</span>, который неверно процитировал свой собственный источник, отчет Международной комиссии по изучению снега и льда <span id="a_IntergovernmentalPanelonClimateChange_2_qa_3">"Изменения снега и льда в прошлом и в настоящее время в глобальном и региональном масштабе"</span>. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">В чем, по словам МГЭИК, произошла ошибка?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В чем, по словам МГЭИК, произошла ошибка?`, correct_answer: "дата", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_0"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">За что извинилась МГЭИК?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `За что извинилась МГЭИК?`, correct_answer: "плохого применения в этом случае хорошо зарекомендовавших себя процедур МГЭИК", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_1"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что было источником ошибки?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что было источником ошибки?`, correct_answer: "отчета Всемирного фонда дикой природы", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_2"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В каком отчете была правильная дата?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В каком отчете была правильная дата?`, correct_answer: "Изменения снега и льда в прошлом и в настоящее время в глобальном и региональном масштабе", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_3"} 
};var a_Chloroplast_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Эти хлоропласты, которые можно проследить непосредственно до предка цианобактерии, известны как первичные пластиды (в данном контексте "пластида" означает почти то же самое, что и <span id="a_Chloroplast_1_qa_0">хлоропласт</span>). Все первичные хлоропласты принадлежат к одной из <span id="a_Chloroplast_1_qa_1">трех</span> линий хлоропластов - линии хлоропластов глаукофитов, родофитов или <span id="a_Chloroplast_1_qa_2">линии хлоропластов красных водорослей</span>, или хлоропластидана, или <span id="a_Chloroplast_1_qa_3">линии зеленых хлоропластов</span>. Вторые два являются самыми большими, а <span id="a_Chloroplast_1_qa_4">зеленая линия хлоропластов</span> - та, которая содержит наземные растения.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Что означает "пластид"?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что означает "пластид"?`, correct_answer: "хлоропласт", trial_name: "a_Chloroplast_1_qa_0"} 
};var a_Chloroplast_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько существует линий хлоропластов?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько существует линий хлоропластов?`, correct_answer: "трех", trial_name: "a_Chloroplast_1_qa_1"} 
};var a_Chloroplast_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что означает родофит? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что означает родофит? `, correct_answer: "линии хлоропластов красных водорослей", trial_name: "a_Chloroplast_1_qa_2"} 
};var a_Chloroplast_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что значит хлоропластидан?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что значит хлоропластидан?`, correct_answer: "линии зеленых хлоропластов", trial_name: "a_Chloroplast_1_qa_3"} 
};var a_Chloroplast_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">В какую линию входят наземные растения?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `В какую линию входят наземные растения?`, correct_answer: "зеленая линия хлоропластов", trial_name: "a_Chloroplast_1_qa_4"} 
};var a_Chloroplast_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Хлоропласты имеют свою собственную ДНК, часто сокращенно обозначаемую как <span id="a_Chloroplast_2_qa_0">цпДНК или хлДНК</span>. Она также известна как <span id="a_Chloroplast_2_qa_1">пластом</span>. Ее существование впервые было доказано в <span id="a_Chloroplast_2_qa_2">1962 году</span>, а впервые она секвенирована в <span id="a_Chloroplast_2_qa_3">1986 году</span> - когда <span id="a_Chloroplast_2_qa_4">две японские исследовательские группы</span> секвенировали ДНК хлоропластов печеночника и табака. С тех пор были секвенированы сотни ДНК хлоропластов из различных видов, но в основном это ДНК наземных растений и зеленых водорослей - глаукофиты, красные водоросли, а другие группы водорослей крайне недопредставлены, что может привести к некоторому смещению во взглядах на "типичную" структуру и содержание хлоропластной ДНК.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Chloroplast_2_qa_0','#a_Chloroplast_2_qa_1','#a_Chloroplast_2_qa_2','#a_Chloroplast_2_qa_3','#a_Chloroplast_2_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Chloroplast_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Chloroplast_2"}
};
var a_Chloroplast_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как пишется хлоропластная ДНК сокращенно?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как пишется хлоропластная ДНК сокращенно?`, correct_answer: "цпДНК или хлДНК", trial_name: "a_Chloroplast_2_qa_0"} 
};var a_Chloroplast_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой у хлоропластной ДНК синоним?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой у хлоропластной ДНК синоним?`, correct_answer: "пластом", trial_name: "a_Chloroplast_2_qa_1"} 
};var a_Chloroplast_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда был обнаружен пластом?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда был обнаружен пластом?`, correct_answer: "1962 году", trial_name: "a_Chloroplast_2_qa_2"} 
};var a_Chloroplast_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда был секвенирован первый пластом?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда был секвенирован первый пластом?`, correct_answer: "1986 году", trial_name: "a_Chloroplast_2_qa_3"} 
};var a_Chloroplast_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто секвенировал первый пластом?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто секвенировал первый пластом?`, correct_answer: "две японские исследовательские группы", trial_name: "a_Chloroplast_2_qa_4"} 
};var a_Chloroplast_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Есть некоторые распространенные заблуждения о внешней и внутренней мембранах хлоропластов. Тот факт, что хлоропласты <span id="a_Chloroplast_4_qa_0">окружены двойной мембраной</span>, часто приводят в качестве доказательства того, что они являются потомками эндосимбиотических цианобактерий. Это часто интерпретируется как означающее, что наружная хлоропластная мембрана <span id="a_Chloroplast_4_qa_1">является продуктом клеточной мембраны хозяина, которая образует пузырь, окружающий наследственную цианобактерию</span> - что не соответствует действительности - обе мембраны хлоропласта <span id="a_Chloroplast_4_qa_2">гомологичны</span> оригинальным двойным мембранам цианобактерии. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Каковы доказательства того, что хлоропласты произошли от эндосимбиотических цианобактерий?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Каковы доказательства того, что хлоропласты произошли от эндосимбиотических цианобактерий?`, correct_answer: "окружены двойной мембраной", trial_name: "a_Chloroplast_4_qa_0"} 
};var a_Chloroplast_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Каковы неправиьные представления о внешней мембране хлоропласта?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Каковы неправиьные представления о внешней мембране хлоропласта?`, correct_answer: "является продуктом клеточной мембраны хозяина, которая образует пузырь, окружающий наследственную цианобактерию", trial_name: "a_Chloroplast_4_qa_1"} 
};var a_Chloroplast_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как обе хлоропластные мембраны сравниваются с оригинальными двойными мембранами цианобактерии? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как обе хлоропластные мембраны сравниваются с оригинальными двойными мембранами цианобактерии? `, correct_answer: "гомологичны", trial_name: "a_Chloroplast_4_qa_2"} 
};var a_Rhine_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Rhine_0_qa_0"><span id="a_Rhine_0_qa_4">Средний Рейн</span></span> протекает между Бингеном и Бонном, через <span id="a_Rhine_0_qa_1"><span id="a_Rhine_0_qa_5">Рейнское ущелье</span></span>, образованное в результате <span id="a_Rhine_0_qa_2">эрозии</span>. Скорость эрозии соответствовала поднятию в регионе таким образом, что река оставалась на своем первоначальном уровне, в то время как окружающие земли возвышались. Ущелье довольно глубокое и занимает протяженность реки. Оно славится своими многочисленными <span id="a_Rhine_0_qa_6">замками и виноградниками</span>. Этот объект Всемирного наследия ЮНЕСКО (2002 год), который содержит более 40 замков и крепостей Средневековья, а также множество необычных и очаровательных деревушек, известен как «<span id="a_Rhine_0_qa_3"><span id="a_Rhine_0_qa_7">Романтический Рейн</span></span>».</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Что протекает между Бингеном и Бонном?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что протекает между Бингеном и Бонном?`, correct_answer: "Средний Рейн", trial_name: "a_Rhine_0_qa_0"} 
};var a_Rhine_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какое ущелье находится между Бингеном и Бонном?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какое ущелье находится между Бингеном и Бонном?`, correct_answer: "Рейнское ущелье", trial_name: "a_Rhine_0_qa_1"} 
};var a_Rhine_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как образовалось Рейнское ущелье?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как образовалось Рейнское ущелье?`, correct_answer: "эрозии", trial_name: "a_Rhine_0_qa_2"} 
};var a_Rhine_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как называется область со средневековыми замками возле Рейнского ущелья?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называется область со средневековыми замками возле Рейнского ущелья?`, correct_answer: "Романтический Рейн", trial_name: "a_Rhine_0_qa_3"} 
};var a_Rhine_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что протекает между Бингеном и Бонном?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что протекает между Бингеном и Бонном?`, correct_answer: "Средний Рейн", trial_name: "a_Rhine_0_qa_4"} 
};var a_Rhine_0_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Где протекает Средний Рейн между Бингеном и Бонном?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Где протекает Средний Рейн между Бингеном и Бонном?`, correct_answer: "Рейнское ущелье", trial_name: "a_Rhine_0_qa_5"} 
};var a_Rhine_0_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Чем славится Рейнское ущелье?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Чем славится Рейнское ущелье?`, correct_answer: "замками и виноградниками", trial_name: "a_Rhine_0_qa_6"} 
};var a_Rhine_0_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как называется участок Рейнского ущелья, признанный ЮНЕСКО?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называется участок Рейнского ущелья, признанный ЮНЕСКО?`, correct_answer: "Романтический Рейн", trial_name: "a_Rhine_0_qa_7"} 
};var a_Rhine_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Дельта <span id="a_Rhine_1_qa_0">Рейна и Мааса</span>, важнейшая географическая зона Нидерландов, начинается <span id="a_Rhine_1_qa_1">у городка Миллинген-ан-де-Рейн</span>, недалеко от границы Германии с Нидерландами, разделяя Рейн на Ваал и Недер-Рейн. Поскольку на Рейн приходится больший объем воды, обычно используется более короткий термин – <span id="a_Rhine_1_qa_2">дельта Рейна</span>. Однако он служит названием и для дельты реки, где Рейн впадает в Боденское озеро, поэтому понятнее называть большую часть дельтой Рейна и Мааса, или же дельтой Рейна, Мааса и Шельды, поскольку река Шельда заканчивается в той же дельте.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Как называется дельта в Нидерландах?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называется дельта в Нидерландах?`, correct_answer: "Рейна и Мааса", trial_name: "a_Rhine_1_qa_0"} 
};var a_Rhine_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Где начинается дельта в Нидерландах?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Где начинается дельта в Нидерландах?`, correct_answer: "у городка Миллинген-ан-де-Рейн", trial_name: "a_Rhine_1_qa_1"} 
};var a_Rhine_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какое прозвище у дельты в Нидерландах?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какое прозвище у дельты в Нидерландах?`, correct_answer: "дельта Рейна", trial_name: "a_Rhine_1_qa_2"} 
};var a_ScottishParliament_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">В соответствии с Актом о Шотландии 1978 года <span id="a_ScottishParliament_0_qa_0">в Эдинбурге</span> намечалось учредить избранную ассамблею при условии, что за нее проголосует <span id="a_ScottishParliament_0_qa_1">большинство</span> шотландских избирателей на референдуме, который должен был состояться 1 марта 1979 года, с явкой не менее 40 % от общего числа избирателей. В 1979 году референдум по вопросу о создании автономной Шотландской ассамблеи <span id="a_ScottishParliament_0_qa_3">провалился</span>. Несмотря на то, что за Шотландскую ассамблею проголосовало <span id="a_ScottishParliament_0_qa_2">51,6 %</span>, эта цифра не составила и 40% от порога явки избирателей, что необходимо для принятия мер, так как <span id="a_ScottishParliament_0_qa_4">32,9 %</span> населения, имеющего избирательное право, не проголосовало или не смогло проголосовать.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_ScottishParliament_0_qa_0','#a_ScottishParliament_0_qa_1','#a_ScottishParliament_0_qa_2','#a_ScottishParliament_0_qa_3','#a_ScottishParliament_0_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_ScottishParliament_0_1280_720.png';
a.click();});}},data: { trial_name: "a_ScottishParliament_0"}
};
var a_ScottishParliament_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Где должны были учредить избранную ассамблею в соответствии с Актом о Шотландии 1978 года?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Где должны были учредить избранную ассамблею в соответствии с Актом о Шотландии 1978 года?`, correct_answer: "в Эдинбурге", trial_name: "a_ScottishParliament_0_qa_0"} 
};var a_ScottishParliament_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какое количество шотландского электората было необходимо для проведения этого референдума?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какое количество шотландского электората было необходимо для проведения этого референдума?`, correct_answer: "большинство", trial_name: "a_ScottishParliament_0_qa_1"} 
};var a_ScottishParliament_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какой процент голосов получила Шотландская ассамблея?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой процент голосов получила Шотландская ассамблея?`, correct_answer: "51,6 %", trial_name: "a_ScottishParliament_0_qa_2"} 
};var a_ScottishParliament_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Чем закончилась попытка создать автономную Шотландскую ассамблею в 1979 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Чем закончилась попытка создать автономную Шотландскую ассамблею в 1979 году?`, correct_answer: "провалился", trial_name: "a_ScottishParliament_0_qa_3"} 
};var a_ScottishParliament_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какому проценту населения Шотландии фактически не удалось проголосовать?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какому проценту населения Шотландии фактически не удалось проголосовать?`, correct_answer: "32,9 %", trial_name: "a_ScottishParliament_0_qa_4"} 
};var a_Islamism_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">В течение многих лет в Судане существовал <span id="a_Islamism_3_qa_0">исламистский</span> режим под руководством <span id="a_Islamism_3_qa_1">Хасана ат-Тураби</span>. Основанный им <span id="a_Islamism_3_qa_2">Национальный исламский фронт</span> впервые добился влияния, когда властный лидер – генерал Джафар Нимейри пригласил его членов на службу в свое правительство в 1979 году. Тураби создал мощную экономическую базу с помощью <span id="a_Islamism_3_qa_3">сумм из иностранных исламистских банковских систем</span>, особенно тех, которые были связаны с Саудовской Аравией. Он также нанимал на работу и создавал штат из влиятельных верноподданных, устраивая близких по духу студентов в <span id="a_Islamism_3_qa_4">университет и военную академию</span> во время пребывания в должности министра образования.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Какой режим господствовал в Судане в течение многих лет?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой режим господствовал в Судане в течение многих лет?`, correct_answer: "исламистский", trial_name: "a_Islamism_3_qa_0"} 
};var a_Islamism_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Кто был лидером исламистского режима в Судане?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Кто был лидером исламистского режима в Судане?`, correct_answer: "Хасана ат-Тураби", trial_name: "a_Islamism_3_qa_1"} 
};var a_Islamism_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Членов какой организации пригласил генерал Джафар Нимейри на службу в своем правительстве?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Членов какой организации пригласил генерал Джафар Нимейри на службу в своем правительстве?`, correct_answer: "Национальный исламский фронт", trial_name: "a_Islamism_3_qa_2"} 
};var a_Islamism_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как построил Тураби крепкую экономическую основу?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как построил Тураби крепкую экономическую основу?`, correct_answer: "сумм из иностранных исламистских банковских систем", trial_name: "a_Islamism_3_qa_3"} 
};var a_Islamism_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Куда устраивал Тураби близких по духу студентов?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Куда устраивал Тураби близких по духу студентов?`, correct_answer: "университет и военную академию", trial_name: "a_Islamism_3_qa_4"} 
};var a_FrenchandIndianWar_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">В Европе для Североамериканского театра Семилетней войны обычно используют другое название. Весь международный конфликт известен как Семилетняя война. «Семилетняя» относится к событиям в Европе, с официального объявления войны в <span id="a_FrenchandIndianWar_0_qa_0">1756 году до подписания мирного договора в 1763 году</span>. Эти даты не соответствуют хронологии сражений в континентальной части Северной Америки, где боевые действия между двумя колониальными державами продолжались на протяжении приблизительно <span id="a_FrenchandIndianWar_0_qa_1">шести лет</span>, начиная с <span id="a_FrenchandIndianWar_0_qa_3">Жумонвильского инцидента</span> в 1754 году и заканчивая взятием Монреаля в <span id="a_FrenchandIndianWar_0_qa_2">1760 году</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Какой период времени охватывает Семилетняя война?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какой период времени охватывает Семилетняя война?`, correct_answer: "1756 году до подписания мирного договора в 1763 году", trial_name: "a_FrenchandIndianWar_0_qa_0"} 
};var a_FrenchandIndianWar_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как долго длились бои в Семилетней войне?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как долго длились бои в Семилетней войне?`, correct_answer: "шести лет", trial_name: "a_FrenchandIndianWar_0_qa_1"} 
};var a_FrenchandIndianWar_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда был захвачен Монреаль?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда был захвачен Монреаль?`, correct_answer: "1760 году", trial_name: "a_FrenchandIndianWar_0_qa_2"} 
};var a_FrenchandIndianWar_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какая битва была первый в 1754 году?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая битва была первый в 1754 году?`, correct_answer: "Жумонвильского инцидента", trial_name: "a_FrenchandIndianWar_0_qa_3"} 
};var a_FrenchandIndianWar_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Еще до возвращения Вашингтона Динвидди отправил отряд из <span id="a_FrenchandIndianWar_2_qa_0">40</span> человек во главе с Уильямом Трентом в указанное место, где в начале <span id="a_FrenchandIndianWar_2_qa_1">1754 года</span> они приступили к строительству укреплений. В то же время губернатор Дюкен послал дополнительные силы под началом Клода-Пьера Пикади де Конрекура для освобождения Сен-Пьера, и 5 апреля 1754 года Конрекур привел отряд из 500 человек к югу от форта Венанго. Прибыв с войсками в форт 16 апреля, Конрекур великодушно позволил Тренту и его людям отступить. Французы выкупили у англичан инструменты и закончили строительство <span id="a_FrenchandIndianWar_2_qa_2">форта Дюкен</span>.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_FrenchandIndianWar_2_qa_0','#a_FrenchandIndianWar_2_qa_1','#a_FrenchandIndianWar_2_qa_2'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_FrenchandIndianWar_2_1280_720.png';
a.click();});}},data: { trial_name: "a_FrenchandIndianWar_2"}
};
var a_FrenchandIndianWar_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Сколько людей Дюкен отправил освобождать Сен-Пьер?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Сколько людей Дюкен отправил освобождать Сен-Пьер?`, correct_answer: "40", trial_name: "a_FrenchandIndianWar_2_qa_0"} 
};var a_FrenchandIndianWar_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Когда англичане под руководством Уильяма Трента начали строить форт?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Когда англичане под руководством Уильяма Трента начали строить форт?`, correct_answer: "1754 года", trial_name: "a_FrenchandIndianWar_2_qa_1"} 
};var a_FrenchandIndianWar_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как в итоге назвали строящийся форт?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как в итоге назвали строящийся форт?`, correct_answer: "форта Дюкен", trial_name: "a_FrenchandIndianWar_2_qa_2"} 
};var a_Force_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Определяя <span id="a_Force_3_qa_0">электрический ток</span> как скорость изменения электрического заряда во времени, правило векторного умножения, известное как <span id="a_Force_3_qa_2">Закон Лоренца</span>, описывает влияние магнитного поля на единичный движущийся заряд. Связь между электричеством и магнетизмом позволяет описать <span id="a_Force_3_qa_1">единую электромагнитную силу</span>, действующую на заряд. Эта сила может быть записана как сумма <span id="a_Force_3_qa_3">электростатической силы</span> (влияние электрического поля) и магнитной силы (влияние магнитного поля). В полной версии этот закон выглядит следующим образом:</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Что представляет собой скорость изменения электрического заряда во времени?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что представляет собой скорость изменения электрического заряда во времени?`, correct_answer: "электрический ток", trial_name: "a_Force_3_qa_0"} 
};var a_Force_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какие магнитные и электрические силы воздействуют на заряд?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какие магнитные и электрические силы воздействуют на заряд?`, correct_answer: "единую электромагнитную силу", trial_name: "a_Force_3_qa_1"} 
};var a_Force_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Как называется закон, определяющий заряд, движущийся в магнитном поле?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Как называется закон, определяющий заряд, движущийся в магнитном поле?`, correct_answer: "Закон Лоренца", trial_name: "a_Force_3_qa_2"} 
};var a_Force_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какая величина может быть записана как сумма электростатической и магнитной сил?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая величина может быть записана как сумма электростатической и магнитной сил?`, correct_answer: "электростатической силы", trial_name: "a_Force_3_qa_3"} 
};var a_Force_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">где  — площадь поперечного сечения, соответствующая объему, для которого рассчитывается тензор напряжений. Приведенные <span id="a_Force_4_qa_3">формулы</span> включают в себя <span id="a_Force_4_qa_1"><span id="a_Force_4_qa_2">компоненты давления</span></span>, вызванного силами, действующими перпендикулярно к площади поперечного сечения (диагональные элементы матрицы тензора), а также компоненты сдвига, вызванного силами, действующими параллельно площади поперечного сечения (недиагональные элементы). <span id="a_Force_4_qa_0">Тензор напряжений</span> учитывает силы, вызывающие все напряжения (деформации), в том числе напряжения растяжения и сжатия.:133-134:38-1‑38-11</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Что вызывает напряжение в конструкциях?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что вызывает напряжение в конструкциях?`, correct_answer: "Тензор напряжений", trial_name: "a_Force_4_qa_0"} 
};var a_Force_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Какая величина используется для расчета площади поперечного сечения в объеме объекта?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Какая величина используется для расчета площади поперечного сечения в объеме объекта?`, correct_answer: "компоненты давления", trial_name: "a_Force_4_qa_1"} 
};var a_Force_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что связано с силами, направленными перпендикулярно?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что связано с силами, направленными перпендикулярно?`, correct_answer: "компоненты давления", trial_name: "a_Force_4_qa_2"} 
};var a_Force_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Что включает в себя компоненты давления при расчете площади в объеме?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Что включает в себя компоненты давления при расчете площади в объеме?`, correct_answer: "формулы", trial_name: "a_Force_4_qa_3"} 
};var xquad_trials_array = [[a_SuperBowl50_1,[a_SuperBowl50_1_qa_0,a_SuperBowl50_1_qa_1,a_SuperBowl50_1_qa_2,a_SuperBowl50_1_qa_3,a_SuperBowl50_1_qa_4,a_SuperBowl50_1_qa_5,a_SuperBowl50_1_qa_6,a_SuperBowl50_1_qa_7,a_SuperBowl50_1_qa_8,a_SuperBowl50_1_qa_9,a_SuperBowl50_1_qa_10,a_SuperBowl50_1_qa_11,a_SuperBowl50_1_qa_12,a_SuperBowl50_1_qa_13,a_SuperBowl50_1_qa_14,a_SuperBowl50_1_qa_15]],[a_SuperBowl50_2,[a_SuperBowl50_2_qa_0,a_SuperBowl50_2_qa_1,a_SuperBowl50_2_qa_2,a_SuperBowl50_2_qa_3,a_SuperBowl50_2_qa_4,a_SuperBowl50_2_qa_5,a_SuperBowl50_2_qa_6,a_SuperBowl50_2_qa_7,a_SuperBowl50_2_qa_8,a_SuperBowl50_2_qa_9,a_SuperBowl50_2_qa_10,a_SuperBowl50_2_qa_11,a_SuperBowl50_2_qa_12,a_SuperBowl50_2_qa_13,a_SuperBowl50_2_qa_14,a_SuperBowl50_2_qa_15,a_SuperBowl50_2_qa_16]],[a_SuperBowl50_3,[a_SuperBowl50_3_qa_0,a_SuperBowl50_3_qa_1,a_SuperBowl50_3_qa_2,a_SuperBowl50_3_qa_3,a_SuperBowl50_3_qa_4,a_SuperBowl50_3_qa_5,a_SuperBowl50_3_qa_6,a_SuperBowl50_3_qa_7,a_SuperBowl50_3_qa_8,a_SuperBowl50_3_qa_9,a_SuperBowl50_3_qa_10,a_SuperBowl50_3_qa_11]],[a_Warsaw_0,[a_Warsaw_0_qa_0,a_Warsaw_0_qa_1,a_Warsaw_0_qa_2,a_Warsaw_0_qa_3,a_Warsaw_0_qa_4]],[a_Warsaw_1,[a_Warsaw_1_qa_0,a_Warsaw_1_qa_1,a_Warsaw_1_qa_2,a_Warsaw_1_qa_3,a_Warsaw_1_qa_4]],[a_Warsaw_2,[a_Warsaw_2_qa_0,a_Warsaw_2_qa_1,a_Warsaw_2_qa_2,a_Warsaw_2_qa_3,a_Warsaw_2_qa_4]],[a_Normans_4,[a_Normans_4_qa_0]],[a_NikolaTesla_1,[a_NikolaTesla_1_qa_0,a_NikolaTesla_1_qa_1,a_NikolaTesla_1_qa_2,a_NikolaTesla_1_qa_3,a_NikolaTesla_1_qa_4,a_NikolaTesla_1_qa_5,a_NikolaTesla_1_qa_6,a_NikolaTesla_1_qa_7,a_NikolaTesla_1_qa_8,a_NikolaTesla_1_qa_9]],[a_NikolaTesla_3,[a_NikolaTesla_3_qa_0,a_NikolaTesla_3_qa_1,a_NikolaTesla_3_qa_2]],[a_NikolaTesla_4,[a_NikolaTesla_4_qa_0,a_NikolaTesla_4_qa_1,a_NikolaTesla_4_qa_2]],[a_Computationalcomplexitytheory_0,[a_Computationalcomplexitytheory_0_qa_0,a_Computationalcomplexitytheory_0_qa_1,a_Computationalcomplexitytheory_0_qa_2]],[a_Computationalcomplexitytheory_1,[a_Computationalcomplexitytheory_1_qa_0,a_Computationalcomplexitytheory_1_qa_1,a_Computationalcomplexitytheory_1_qa_2,a_Computationalcomplexitytheory_1_qa_3,a_Computationalcomplexitytheory_1_qa_4]],[a_Computationalcomplexitytheory_2,[a_Computationalcomplexitytheory_2_qa_0,a_Computationalcomplexitytheory_2_qa_1]],[a_Computationalcomplexitytheory_4,[a_Computationalcomplexitytheory_4_qa_0,a_Computationalcomplexitytheory_4_qa_1,a_Computationalcomplexitytheory_4_qa_2,a_Computationalcomplexitytheory_4_qa_3]],[a_Teacher_0,[a_Teacher_0_qa_0,a_Teacher_0_qa_1,a_Teacher_0_qa_2,a_Teacher_0_qa_3,a_Teacher_0_qa_4]],[a_Teacher_1,[a_Teacher_1_qa_0,a_Teacher_1_qa_1,a_Teacher_1_qa_2,a_Teacher_1_qa_3,a_Teacher_1_qa_4]],[a_Teacher_3,[a_Teacher_3_qa_0,a_Teacher_3_qa_1,a_Teacher_3_qa_2,a_Teacher_3_qa_3]],[a_Teacher_4,[a_Teacher_4_qa_0,a_Teacher_4_qa_1,a_Teacher_4_qa_2,a_Teacher_4_qa_3,a_Teacher_4_qa_4]],[a_MartinLuther_0,[a_MartinLuther_0_qa_0,a_MartinLuther_0_qa_1,a_MartinLuther_0_qa_2,a_MartinLuther_0_qa_3,a_MartinLuther_0_qa_4]],[a_MartinLuther_2,[a_MartinLuther_2_qa_0,a_MartinLuther_2_qa_1,a_MartinLuther_2_qa_2,a_MartinLuther_2_qa_3,a_MartinLuther_2_qa_4]],[a_MartinLuther_3,[a_MartinLuther_3_qa_0,a_MartinLuther_3_qa_1,a_MartinLuther_3_qa_2,a_MartinLuther_3_qa_3,a_MartinLuther_3_qa_4]],[a_MartinLuther_4,[a_MartinLuther_4_qa_0,a_MartinLuther_4_qa_1,a_MartinLuther_4_qa_2]],[a_SouthernCalifornia_3,[a_SouthernCalifornia_3_qa_0,a_SouthernCalifornia_3_qa_1,a_SouthernCalifornia_3_qa_2,a_SouthernCalifornia_3_qa_3,a_SouthernCalifornia_3_qa_4]],[a_SouthernCalifornia_4,[a_SouthernCalifornia_4_qa_0,a_SouthernCalifornia_4_qa_1,a_SouthernCalifornia_4_qa_2,a_SouthernCalifornia_4_qa_3,a_SouthernCalifornia_4_qa_4]],[a_VictoriaAustralia_2,[a_VictoriaAustralia_2_qa_0,a_VictoriaAustralia_2_qa_1,a_VictoriaAustralia_2_qa_2,a_VictoriaAustralia_2_qa_3,a_VictoriaAustralia_2_qa_4]],[a_Huguenot_0,[a_Huguenot_0_qa_0,a_Huguenot_0_qa_1,a_Huguenot_0_qa_2,a_Huguenot_0_qa_3]],[a_Steamengine_0,[a_Steamengine_0_qa_0,a_Steamengine_0_qa_1,a_Steamengine_0_qa_2,a_Steamengine_0_qa_3]],[a_Steamengine_3,[a_Steamengine_3_qa_0,a_Steamengine_3_qa_1,a_Steamengine_3_qa_2,a_Steamengine_3_qa_3,a_Steamengine_3_qa_4]],[a_1973oilcrisis_1,[a_1973oilcrisis_1_qa_0,a_1973oilcrisis_1_qa_1,a_1973oilcrisis_1_qa_2,a_1973oilcrisis_1_qa_3,a_1973oilcrisis_1_qa_4]],[a_1973oilcrisis_2,[a_1973oilcrisis_2_qa_0,a_1973oilcrisis_2_qa_1,a_1973oilcrisis_2_qa_2,a_1973oilcrisis_2_qa_3]],[a_Apolloprogram_2,[a_Apolloprogram_2_qa_0,a_Apolloprogram_2_qa_1,a_Apolloprogram_2_qa_2,a_Apolloprogram_2_qa_3]],[a_Apolloprogram_4,[a_Apolloprogram_4_qa_0,a_Apolloprogram_4_qa_1,a_Apolloprogram_4_qa_2,a_Apolloprogram_4_qa_3,a_Apolloprogram_4_qa_4]],[a_Amazonrainforest_3,[a_Amazonrainforest_3_qa_0,a_Amazonrainforest_3_qa_1,a_Amazonrainforest_3_qa_2,a_Amazonrainforest_3_qa_3,a_Amazonrainforest_3_qa_4]],[a_Ctenophora_2,[a_Ctenophora_2_qa_0,a_Ctenophora_2_qa_1,a_Ctenophora_2_qa_2,a_Ctenophora_2_qa_3]],[a_FresnoCalifornia_0,[a_FresnoCalifornia_0_qa_0,a_FresnoCalifornia_0_qa_1,a_FresnoCalifornia_0_qa_2,a_FresnoCalifornia_0_qa_3,a_FresnoCalifornia_0_qa_4]],[a_FresnoCalifornia_3,[a_FresnoCalifornia_3_qa_0,a_FresnoCalifornia_3_qa_1,a_FresnoCalifornia_3_qa_2,a_FresnoCalifornia_3_qa_3]],[a_Geology_4,[a_Geology_4_qa_0,a_Geology_4_qa_1,a_Geology_4_qa_2,a_Geology_4_qa_3]],[a_VictoriaandAlbertMuseum_2,[a_VictoriaandAlbertMuseum_2_qa_0,a_VictoriaandAlbertMuseum_2_qa_1,a_VictoriaandAlbertMuseum_2_qa_2,a_VictoriaandAlbertMuseum_2_qa_3,a_VictoriaandAlbertMuseum_2_qa_4]],[a_AmericanBroadcastingCompany_0,[a_AmericanBroadcastingCompany_0_qa_0,a_AmericanBroadcastingCompany_0_qa_1,a_AmericanBroadcastingCompany_0_qa_2,a_AmericanBroadcastingCompany_0_qa_3]],[a_AmericanBroadcastingCompany_3,[a_AmericanBroadcastingCompany_3_qa_0,a_AmericanBroadcastingCompany_3_qa_1,a_AmericanBroadcastingCompany_3_qa_2]],[a_Pharmacy_2,[a_Pharmacy_2_qa_0,a_Pharmacy_2_qa_1,a_Pharmacy_2_qa_2,a_Pharmacy_2_qa_3,a_Pharmacy_2_qa_4]],[a_Construction_0,[a_Construction_0_qa_0,a_Construction_0_qa_1,a_Construction_0_qa_2,a_Construction_0_qa_3,a_Construction_0_qa_4]],[a_Privateschool_0,[a_Privateschool_0_qa_0,a_Privateschool_0_qa_1,a_Privateschool_0_qa_2,a_Privateschool_0_qa_3]],[a_Privateschool_2,[a_Privateschool_2_qa_0,a_Privateschool_2_qa_1,a_Privateschool_2_qa_2,a_Privateschool_2_qa_3,a_Privateschool_2_qa_4]],[a_HarvardUniversity_1,[a_HarvardUniversity_1_qa_0,a_HarvardUniversity_1_qa_1,a_HarvardUniversity_1_qa_2]],[a_HarvardUniversity_3,[a_HarvardUniversity_3_qa_0,a_HarvardUniversity_3_qa_1,a_HarvardUniversity_3_qa_2,a_HarvardUniversity_3_qa_3]],[a_JacksonvilleFlorida_0,[a_JacksonvilleFlorida_0_qa_0,a_JacksonvilleFlorida_0_qa_1,a_JacksonvilleFlorida_0_qa_2,a_JacksonvilleFlorida_0_qa_3,a_JacksonvilleFlorida_0_qa_4]],[a_DoctorWho_3,[a_DoctorWho_3_qa_0,a_DoctorWho_3_qa_1,a_DoctorWho_3_qa_2,a_DoctorWho_3_qa_3,a_DoctorWho_3_qa_4]],[a_DoctorWho_4,[a_DoctorWho_4_qa_0,a_DoctorWho_4_qa_1,a_DoctorWho_4_qa_2,a_DoctorWho_4_qa_3,a_DoctorWho_4_qa_4]],[a_Yuandynasty_4,[a_Yuandynasty_4_qa_0,a_Yuandynasty_4_qa_1,a_Yuandynasty_4_qa_2,a_Yuandynasty_4_qa_3]],[a_Kenya_0,[a_Kenya_0_qa_0,a_Kenya_0_qa_1,a_Kenya_0_qa_2,a_Kenya_0_qa_3]],[a_Kenya_2,[a_Kenya_2_qa_0,a_Kenya_2_qa_1,a_Kenya_2_qa_2,a_Kenya_2_qa_3]],[a_IntergovernmentalPanelonClimateChange_0,[a_IntergovernmentalPanelonClimateChange_0_qa_0,a_IntergovernmentalPanelonClimateChange_0_qa_1,a_IntergovernmentalPanelonClimateChange_0_qa_2,a_IntergovernmentalPanelonClimateChange_0_qa_3,a_IntergovernmentalPanelonClimateChange_0_qa_4]],[a_IntergovernmentalPanelonClimateChange_2,[a_IntergovernmentalPanelonClimateChange_2_qa_0,a_IntergovernmentalPanelonClimateChange_2_qa_1,a_IntergovernmentalPanelonClimateChange_2_qa_2,a_IntergovernmentalPanelonClimateChange_2_qa_3]],[a_Chloroplast_1,[a_Chloroplast_1_qa_0,a_Chloroplast_1_qa_1,a_Chloroplast_1_qa_2,a_Chloroplast_1_qa_3,a_Chloroplast_1_qa_4]],[a_Chloroplast_2,[a_Chloroplast_2_qa_0,a_Chloroplast_2_qa_1,a_Chloroplast_2_qa_2,a_Chloroplast_2_qa_3,a_Chloroplast_2_qa_4]],[a_Chloroplast_4,[a_Chloroplast_4_qa_0,a_Chloroplast_4_qa_1,a_Chloroplast_4_qa_2]],[a_Rhine_0,[a_Rhine_0_qa_0,a_Rhine_0_qa_1,a_Rhine_0_qa_2,a_Rhine_0_qa_3,a_Rhine_0_qa_4,a_Rhine_0_qa_5,a_Rhine_0_qa_6,a_Rhine_0_qa_7]],[a_Rhine_1,[a_Rhine_1_qa_0,a_Rhine_1_qa_1,a_Rhine_1_qa_2]],[a_ScottishParliament_0,[a_ScottishParliament_0_qa_0,a_ScottishParliament_0_qa_1,a_ScottishParliament_0_qa_2,a_ScottishParliament_0_qa_3,a_ScottishParliament_0_qa_4]],[a_Islamism_3,[a_Islamism_3_qa_0,a_Islamism_3_qa_1,a_Islamism_3_qa_2,a_Islamism_3_qa_3,a_Islamism_3_qa_4]],[a_FrenchandIndianWar_0,[a_FrenchandIndianWar_0_qa_0,a_FrenchandIndianWar_0_qa_1,a_FrenchandIndianWar_0_qa_2,a_FrenchandIndianWar_0_qa_3]],[a_FrenchandIndianWar_2,[a_FrenchandIndianWar_2_qa_0,a_FrenchandIndianWar_2_qa_1,a_FrenchandIndianWar_2_qa_2]],[a_Force_3,[a_Force_3_qa_0,a_Force_3_qa_1,a_Force_3_qa_2,a_Force_3_qa_3]],[a_Force_4,[a_Force_4_qa_0,a_Force_4_qa_1,a_Force_4_qa_2,a_Force_4_qa_3]]];
