var a_SuperBowl50_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Los <span id="a_SuperBowl50_1_qa_5">Broncos</span> vencieron a los <span id="a_SuperBowl50_1_qa_0"><span id="a_SuperBowl50_1_qa_10"><span id="a_SuperBowl50_1_qa_13">Pittsburgh Steelers</span></span></span> en la ronda divisional <span id="a_SuperBowl50_1_qa_6">por 23 a 16</span> al conseguir anotar <span id="a_SuperBowl50_1_qa_1"><span id="a_SuperBowl50_1_qa_11">11</span></span> puntos en los últimos tres minutos del partido. Posteriormente, en el Campeonato de la AFC, batieron al defensor del título de la Super Bowl XLIX, los <span id="a_SuperBowl50_1_qa_2"><span id="a_SuperBowl50_1_qa_7"><span id="a_SuperBowl50_1_qa_12"><span id="a_SuperBowl50_1_qa_14">New England Patriots</span></span></span></span> por <span id="a_SuperBowl50_1_qa_3">20 a 18</span>. Cuando quedaban tan solo <span id="a_SuperBowl50_1_qa_4"><span id="a_SuperBowl50_1_qa_8"><span id="a_SuperBowl50_1_qa_15">17</span></span> segundos</span> en el marcador, lograron interceptar un pase en un intento de conversión de 2 puntos de los New England. A pesar de los problemas de <span id="a_SuperBowl50_1_qa_9">Manning</span> con las intercepciones la temporada pasada, este no decepcionó en ninguno de sus dos partidos de eliminatoria.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Quién perdió contra los Broncos en la ronda divisional?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién perdió contra los Broncos en la ronda divisional?`, correct_answer: "Pittsburgh Steelers", trial_name: "a_SuperBowl50_1_qa_0"} 
};var a_SuperBowl50_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántos puntos anotaron los Broncos en los tres últimos minutos del partido contra Pittsburgh?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántos puntos anotaron los Broncos en los tres últimos minutos del partido contra Pittsburgh?`, correct_answer: "11", trial_name: "a_SuperBowl50_1_qa_1"} 
};var a_SuperBowl50_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién ganó la Super Bowl XLIX?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién ganó la Super Bowl XLIX?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_2"} 
};var a_SuperBowl50_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál fue el resultado final del Campeonato de la AFC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál fue el resultado final del Campeonato de la AFC?`, correct_answer: "20 a 18", trial_name: "a_SuperBowl50_1_qa_3"} 
};var a_SuperBowl50_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuánto tiempo quedaba cuando los Broncos lograron la intercepción que decidió el Campeonato de la AFC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuánto tiempo quedaba cuando los Broncos lograron la intercepción que decidió el Campeonato de la AFC?`, correct_answer: "17 segundos", trial_name: "a_SuperBowl50_1_qa_4"} 
};var a_SuperBowl50_1_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué equipo fue el vencedor de la ronda divisional entre los Broncos y los Steelers?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué equipo fue el vencedor de la ronda divisional entre los Broncos y los Steelers?`, correct_answer: "Broncos", trial_name: "a_SuperBowl50_1_qa_5"} 
};var a_SuperBowl50_1_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál fue el resultado final entre los Broncos y los Steelers?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál fue el resultado final entre los Broncos y los Steelers?`, correct_answer: "por 23 a 16", trial_name: "a_SuperBowl50_1_qa_6"} 
};var a_SuperBowl50_1_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién ganó la Super Bowl XLIX?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién ganó la Super Bowl XLIX?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_7"} 
};var a_SuperBowl50_1_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántos segundos quedaban cuando los Broncos interceptaron el pase que les hizo ganar el partido?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántos segundos quedaban cuando los Broncos interceptaron el pase que les hizo ganar el partido?`, correct_answer: "17", trial_name: "a_SuperBowl50_1_qa_8"} 
};var a_SuperBowl50_1_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Durante las eliminatorias de los Broncos, ¿Quién no decepcionó en ninguno de los partidos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Durante las eliminatorias de los Broncos, ¿Quién no decepcionó en ninguno de los partidos?`, correct_answer: "Manning", trial_name: "a_SuperBowl50_1_qa_9"} 
};var a_SuperBowl50_1_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A quiénes derrotaron los Broncos en el partido divisional?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A quiénes derrotaron los Broncos en el partido divisional?`, correct_answer: "Pittsburgh Steelers", trial_name: "a_SuperBowl50_1_qa_10"} 
};var a_SuperBowl50_1_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántos puntos anotaron los Broncos en los últimos tres minutos del partido contra Pittsburgh?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántos puntos anotaron los Broncos en los últimos tres minutos del partido contra Pittsburgh?`, correct_answer: "11", trial_name: "a_SuperBowl50_1_qa_11"} 
};var a_SuperBowl50_1_qa_12 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A quiénes derrotaron los Broncos en el Campeonato de la AFC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A quiénes derrotaron los Broncos en el Campeonato de la AFC?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_12"} 
};var a_SuperBowl50_1_qa_13 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A quiénes derrotaron los Broncos para ganar su división en 2015?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A quiénes derrotaron los Broncos para ganar su división en 2015?`, correct_answer: "Pittsburgh Steelers", trial_name: "a_SuperBowl50_1_qa_13"} 
};var a_SuperBowl50_1_qa_14 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A quiénes derrotaron los Broncos para convertirse en los campeones de la AFC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A quiénes derrotaron los Broncos para convertirse en los campeones de la AFC?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_14"} 
};var a_SuperBowl50_1_qa_15 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántos segundos quedaban de partido cuando los Patriots fallaron su conversión de 2 puntos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántos segundos quedaban de partido cuando los Patriots fallaron su conversión de 2 puntos?`, correct_answer: "17", trial_name: "a_SuperBowl50_1_qa_15"} 
};var a_SuperBowl50_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_SuperBowl50_2_qa_8"><span id="a_SuperBowl50_2_qa_11"><span id="a_SuperBowl50_2_qa_14">Peyton Manning</span></span></span> se convirtió en el primer mariscal de campo de la historia en llevar a <span id="a_SuperBowl50_2_qa_9"><span id="a_SuperBowl50_2_qa_10">dos</span></span> equipos diferentes a participar en múltiples Super Bowls. Ademas, es con <span id="a_SuperBowl50_2_qa_0"><span id="a_SuperBowl50_2_qa_15">39</span></span> años, el mariscal de campo más longevo de la historia en jugar ese partido. El récord anterior estaba en manos de <span id="a_SuperBowl50_2_qa_1"><span id="a_SuperBowl50_2_qa_6"><span id="a_SuperBowl50_2_qa_12"><span id="a_SuperBowl50_2_qa_16">John Elway</span></span></span></span> <span id="a_SuperBowl50_2_qa_3">―mánager general y actual vicepresidente ejecutivo para operaciones futbolísticas de Denver―</span> que condujo a los <span id="a_SuperBowl50_2_qa_4"><span id="a_SuperBowl50_2_qa_5">Broncos</span></span> a la victoria en la <span id="a_SuperBowl50_2_qa_13">Super Bowl XXXIII</span> a los <span id="a_SuperBowl50_2_qa_2"><span id="a_SuperBowl50_2_qa_7">38</span></span> años de edad.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántos años tenía Peyton Manning cuando jugó la Super Bowl 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántos años tenía Peyton Manning cuando jugó la Super Bowl 50?`, correct_answer: "39", trial_name: "a_SuperBowl50_2_qa_0"} 
};var a_SuperBowl50_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién tenía el récord anterior de ser el mariscal de campo más longevo en jugar la Super Bowl?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién tenía el récord anterior de ser el mariscal de campo más longevo en jugar la Super Bowl?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_1"} 
};var a_SuperBowl50_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántos años tenía John Elway cuando jugó la Super Bowl XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántos años tenía John Elway cuando jugó la Super Bowl XXXIII?`, correct_answer: "38", trial_name: "a_SuperBowl50_2_qa_2"} 
};var a_SuperBowl50_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué puesto tiene actualmente John Elway dentro de la franquicia de los Broncos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué puesto tiene actualmente John Elway dentro de la franquicia de los Broncos?`, correct_answer: "―mánager general y actual vicepresidente ejecutivo para operaciones futbolísticas de Denver―", trial_name: "a_SuperBowl50_2_qa_3"} 
};var a_SuperBowl50_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Para quién jugaba John Elway en la Super Bowl XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Para quién jugaba John Elway en la Super Bowl XXXIII?`, correct_answer: "Broncos", trial_name: "a_SuperBowl50_2_qa_4"} 
};var a_SuperBowl50_2_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién fue el equipo campeón de la Super Bowl XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién fue el equipo campeón de la Super Bowl XXXIII?`, correct_answer: "Broncos", trial_name: "a_SuperBowl50_2_qa_5"} 
};var a_SuperBowl50_2_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién es el mánager general de los Broncos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién es el mánager general de los Broncos?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_6"} 
};var a_SuperBowl50_2_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántos años tenía John Elway cuando ganó la Super Bowl XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántos años tenía John Elway cuando ganó la Super Bowl XXXIII?`, correct_answer: "38", trial_name: "a_SuperBowl50_2_qa_7"} 
};var a_SuperBowl50_2_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién posee el récord de ser el mariscal de campo más longevo en jugar una Super Bowl?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién posee el récord de ser el mariscal de campo más longevo en jugar una Super Bowl?`, correct_answer: "Peyton Manning", trial_name: "a_SuperBowl50_2_qa_8"} 
};var a_SuperBowl50_2_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">De los equipos para los que jugó Manning, ¿cuántos llegaron a la Super Bowl?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `De los equipos para los que jugó Manning, ¿cuántos llegaron a la Super Bowl?`, correct_answer: "dos", trial_name: "a_SuperBowl50_2_qa_9"} 
};var a_SuperBowl50_2_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A cuántos equipos diferentes llevo Peyton Manning a la Super Bowl?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A cuántos equipos diferentes llevo Peyton Manning a la Super Bowl?`, correct_answer: "dos", trial_name: "a_SuperBowl50_2_qa_10"} 
};var a_SuperBowl50_2_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién es el mariscal de campo más longevo en jugar la Super Bowl?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién es el mariscal de campo más longevo en jugar la Super Bowl?`, correct_answer: "Peyton Manning", trial_name: "a_SuperBowl50_2_qa_11"} 
};var a_SuperBowl50_2_qa_12 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Antes de Manning, ¿quién fue el mariscal de campo más longevo en jugar la Super Bowl?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Antes de Manning, ¿quién fue el mariscal de campo más longevo en jugar la Super Bowl?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_12"} 
};var a_SuperBowl50_2_qa_13 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál fue la Super Bowl que ganó Elway a los 38 años?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál fue la Super Bowl que ganó Elway a los 38 años?`, correct_answer: "Super Bowl XXXIII", trial_name: "a_SuperBowl50_2_qa_13"} 
};var a_SuperBowl50_2_qa_14 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién fue el primer mariscal de campo en llevar a dos equipos a más de una Super Bowl?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién fue el primer mariscal de campo en llevar a dos equipos a más de una Super Bowl?`, correct_answer: "Peyton Manning", trial_name: "a_SuperBowl50_2_qa_14"} 
};var a_SuperBowl50_2_qa_15 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué edad tenía Manning cuando jugó la Super Bowl 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué edad tenía Manning cuando jugó la Super Bowl 50?`, correct_answer: "39", trial_name: "a_SuperBowl50_2_qa_15"} 
};var a_SuperBowl50_2_qa_16 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se llama el mariscal de campo que tenía 38 años en la Super Bowl XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se llama el mariscal de campo que tenía 38 años en la Super Bowl XXXIII?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_16"} 
};var a_SuperBowl50_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_SuperBowl50_3_qa_5"><span id="a_SuperBowl50_3_qa_7"><span id="a_SuperBowl50_3_qa_9">Lady Gaga</span></span></span>, la <span id="a_SuperBowl50_3_qa_0"><span id="a_SuperBowl50_3_qa_10">seis</span></span> veces ganadora del Grammy y nominada al <span id="a_SuperBowl50_3_qa_2">Óscar</span>, cantó <span id="a_SuperBowl50_3_qa_1"><span id="a_SuperBowl50_3_qa_3">el himno nacional estadounidense</span></span>; mientras que <span id="a_SuperBowl50_3_qa_6"><span id="a_SuperBowl50_3_qa_8"><span id="a_SuperBowl50_3_qa_11">Marlee Matlin</span></span></span>, la ganadora del Óscar, lo traducía a <span id="a_SuperBowl50_3_qa_4">la lengua de signos americana</span> (ASL, por sus siglas en inglés).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántos Grammys ha ganado Lady Gaga?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántos Grammys ha ganado Lady Gaga?`, correct_answer: "seis", trial_name: "a_SuperBowl50_3_qa_0"} 
};var a_SuperBowl50_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué cantó Lady Gaga?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué cantó Lady Gaga?`, correct_answer: "el himno nacional estadounidense", trial_name: "a_SuperBowl50_3_qa_1"} 
};var a_SuperBowl50_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué premio ha ganado Marlee Matlin?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué premio ha ganado Marlee Matlin?`, correct_answer: "Óscar", trial_name: "a_SuperBowl50_3_qa_2"} 
};var a_SuperBowl50_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué tradujo Marlee Matlin?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué tradujo Marlee Matlin?`, correct_answer: "el himno nacional estadounidense", trial_name: "a_SuperBowl50_3_qa_3"} 
};var a_SuperBowl50_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A qué idioma tradujo Marlee Matlin el himno nacional estadounidense?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A qué idioma tradujo Marlee Matlin el himno nacional estadounidense?`, correct_answer: "la lengua de signos americana", trial_name: "a_SuperBowl50_3_qa_4"} 
};var a_SuperBowl50_3_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién cantó el himno nacional estadounidense?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién cantó el himno nacional estadounidense?`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_5"} 
};var a_SuperBowl50_3_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué actriz hizo la traducción a la lengua de signos (ASL) para el partido?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué actriz hizo la traducción a la lengua de signos (ASL) para el partido?`, correct_answer: "Marlee Matlin", trial_name: "a_SuperBowl50_3_qa_6"} 
};var a_SuperBowl50_3_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién ejecutó el himno nacional de Estados Unidos en la Super Bowl 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién ejecutó el himno nacional de Estados Unidos en la Super Bowl 50?`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_7"} 
};var a_SuperBowl50_3_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué estrella de cine reprodujo la lengua de signos para el himno nacional estadounidense en la Super Bowl 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué estrella de cine reprodujo la lengua de signos para el himno nacional estadounidense en la Super Bowl 50?`, correct_answer: "Marlee Matlin", trial_name: "a_SuperBowl50_3_qa_8"} 
};var a_SuperBowl50_3_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién interpretó el himno nacional de Estados Unidos en la Super Bowl 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién interpretó el himno nacional de Estados Unidos en la Super Bowl 50?`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_9"} 
};var a_SuperBowl50_3_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">De acuerdo con lo que dice el texto, ¿cuántos premios Grammy ha ganado Lady Gaga?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `De acuerdo con lo que dice el texto, ¿cuántos premios Grammy ha ganado Lady Gaga?`, correct_answer: "seis", trial_name: "a_SuperBowl50_3_qa_10"} 
};var a_SuperBowl50_3_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién utilizó la lengua de signos para el himno nacional en la Super Bowl 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién utilizó la lengua de signos para el himno nacional en la Super Bowl 50?`, correct_answer: "Marlee Matlin", trial_name: "a_SuperBowl50_3_qa_11"} 
};var a_Warsaw_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Muy cerca, en <span id="a_Warsaw_0_qa_0">Ogród Saski</span> (<span id="a_Warsaw_0_qa_1">Jardín Sajón</span>), se encontraba el Teatro de Verano que se mantuvo en funcionamiento desde <span id="a_Warsaw_0_qa_2">1870 hasta 1939</span>. Durante el periodo de entreguerras, el complejo teatral también contó con el <span id="a_Warsaw_0_qa_3">Momus</span> ―el primer cabaret literario de Varsovia― y con el teatro musical Melodram de Leon Schiller. El teatro <span id="a_Warsaw_0_qa_4">Wojciech Bogusławski</span> (1922–26) constituía el mejor ejemplo del «teatro monumental polaco» . A partir de mediados de los años 30 el edificio del gran teatro albergó el Instituto Nacional de Arte Dramático, que fue la primera academia estatal de arte dramático, con un departamento de actuación y otro de dirección escénica.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se llama al Jardín Sajón en polaco?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se llama al Jardín Sajón en polaco?`, correct_answer: "Ogród Saski", trial_name: "a_Warsaw_0_qa_0"} 
};var a_Warsaw_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Dónde se encontraba el Teatro de Verano?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Dónde se encontraba el Teatro de Verano?`, correct_answer: "Jardín Sajón", trial_name: "a_Warsaw_0_qa_1"} 
};var a_Warsaw_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuánto tiempo estuvo en funcionamiento el Teatro de Verano?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuánto tiempo estuvo en funcionamiento el Teatro de Verano?`, correct_answer: "1870 hasta 1939", trial_name: "a_Warsaw_0_qa_2"} 
};var a_Warsaw_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál fue el primer cabaret literario de Varsovia?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál fue el primer cabaret literario de Varsovia?`, correct_answer: "Momus", trial_name: "a_Warsaw_0_qa_3"} 
};var a_Warsaw_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué teatro fue el mejor ejemplo de «teatro monumental polaco»?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué teatro fue el mejor ejemplo de «teatro monumental polaco»?`, correct_answer: "Wojciech Bogusławski", trial_name: "a_Warsaw_0_qa_4"} 
};var a_Warsaw_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Su rival local, el <span id="a_Warsaw_1_qa_0">Polonia Varsovia</span>, que a pesar de contar con bastantes menos seguidores, consiguió ganar la Ekstraklasa en el año 2000. También ganó el campeonato del país en <span id="a_Warsaw_1_qa_1">1946</span> y la copa en <span id="a_Warsaw_1_qa_2">dos ocasiones</span>. La sede del equipo se encuentra en la <span id="a_Warsaw_1_qa_3">calle Konwiktorska</span>, a solo 10 minutos caminando, en dirección norte, desde el centro histórico de la ciudad. Debido a su <span id="a_Warsaw_1_qa_4">desastrosa situación financiera</span>, el Polonia fue relegado de la máxima categoría del país en 2013 y ahora juega en la 4.a liga (la 5.a en Polonia), la categoría profesional más baja de la liga en el sistema de la Asociación Polaca de Fútbol (PZPN, por sus siglas en inglés).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Quién ganó la Ekstraklasa en el año 2000?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién ganó la Ekstraklasa en el año 2000?`, correct_answer: "Polonia Varsovia", trial_name: "a_Warsaw_1_qa_0"} 
};var a_Warsaw_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo ganó el Polonia Varsovia el campeonato antes de haberlo hecho en el 2000?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo ganó el Polonia Varsovia el campeonato antes de haberlo hecho en el 2000?`, correct_answer: "1946", trial_name: "a_Warsaw_1_qa_1"} 
};var a_Warsaw_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántas veces ganó la copa el Polonia?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántas veces ganó la copa el Polonia?`, correct_answer: "dos ocasiones", trial_name: "a_Warsaw_1_qa_2"} 
};var a_Warsaw_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Dónde se encuentra la sede del Polonia?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Dónde se encuentra la sede del Polonia?`, correct_answer: "calle Konwiktorska", trial_name: "a_Warsaw_1_qa_3"} 
};var a_Warsaw_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Por qué el Polonia fue relegado de la máxima categoría del país en 2013?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Por qué el Polonia fue relegado de la máxima categoría del país en 2013?`, correct_answer: "desastrosa situación financiera", trial_name: "a_Warsaw_1_qa_4"} 
};var a_Normans_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Entre 1402 y 1405, el noble normando Jean de Bethencourt y el francés Gadifer de la Salle lideraron la expedición que conquistó las islas canarias de Lanzarote, Fuerteventura y El Hierro en la costa atlántica de <span id="a_Normans_4_qa_0">África</span>. Sus tropas se agruparon en Normandía, Gascuña y más tarde se vieron reforzadas por los colonos castellanos.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Enfrente a las costas de qué continente se encuentran las islas Canarias?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Enfrente a las costas de qué continente se encuentran las islas Canarias?`, correct_answer: "África", trial_name: "a_Normans_4_qa_0"} 
};var a_NikolaTesla_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Tras abandonar la compañía de Edison, <span id="a_NikolaTesla_1_qa_9">Tesla</span> se asoció en <span id="a_NikolaTesla_1_qa_6">1886</span> con <span id="a_NikolaTesla_1_qa_0"><span id="a_NikolaTesla_1_qa_5">Robert Lane y Benjamin Vail</span></span>, dos hombres de negocios que accedieron a financiar una compañía de iluminación eléctrica a su nombre: <span id="a_NikolaTesla_1_qa_1"><span id="a_NikolaTesla_1_qa_7">Tesla Electric Light & Manufacturing</span></span>. La empresa <span id="a_NikolaTesla_1_qa_2">instalaba <span id="a_NikolaTesla_1_qa_4">sistemas de iluminación basados en la luz de arco eléctrico</span> que diseñó el propio Tesla</span>. Este también poseía diseños para conmutadores de máquinas eléctricas de dinamo que le supusieron sus primeras <span id="a_NikolaTesla_1_qa_3">patentes</span> en EE. UU.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Con quién se asoció Tesla en 1886?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Con quién se asoció Tesla en 1886?`, correct_answer: "Robert Lane y Benjamin Vail", trial_name: "a_NikolaTesla_1_qa_0"} 
};var a_NikolaTesla_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué financiaron Lane y Vail?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué financiaron Lane y Vail?`, correct_answer: "Tesla Electric Light & Manufacturing", trial_name: "a_NikolaTesla_1_qa_1"} 
};var a_NikolaTesla_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué hacía Tesla Electric Light & Manufacturing?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué hacía Tesla Electric Light & Manufacturing?`, correct_answer: "instalaba sistemas de iluminación basados en la luz de arco eléctrico que diseñó el propio Tesla", trial_name: "a_NikolaTesla_1_qa_2"} 
};var a_NikolaTesla_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué fue lo primero que recibió Tesla tras crear su empresa?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué fue lo primero que recibió Tesla tras crear su empresa?`, correct_answer: "patentes", trial_name: "a_NikolaTesla_1_qa_3"} 
};var a_NikolaTesla_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué se producía en la empresa de Tesla?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué se producía en la empresa de Tesla?`, correct_answer: "sistemas de iluminación basados en la luz de arco eléctrico", trial_name: "a_NikolaTesla_1_qa_4"} 
};var a_NikolaTesla_1_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuáles eran los nombres de los nuevos socios de Tesla?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuáles eran los nombres de los nuevos socios de Tesla?`, correct_answer: "Robert Lane y Benjamin Vail", trial_name: "a_NikolaTesla_1_qa_5"} 
};var a_NikolaTesla_1_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo se formó la sociedad entre Tesla, Lane y Vale?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo se formó la sociedad entre Tesla, Lane y Vale?`, correct_answer: "1886", trial_name: "a_NikolaTesla_1_qa_6"} 
};var a_NikolaTesla_1_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál fue el nombre de la compañía que financiaron los empresarios?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál fue el nombre de la compañía que financiaron los empresarios?`, correct_answer: "Tesla Electric Light & Manufacturing", trial_name: "a_NikolaTesla_1_qa_7"} 
};var a_NikolaTesla_1_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué hacia Tesla Electric Light & Manufacturing?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué hacia Tesla Electric Light & Manufacturing?`, correct_answer: "instalaba sistemas de iluminación basados en la luz de arco eléctrico", trial_name: "a_NikolaTesla_1_qa_8"} 
};var a_NikolaTesla_1_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién diseñó los sistemas de iluminación que instalaba Tesla Electric Light & Manufacturing?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién diseñó los sistemas de iluminación que instalaba Tesla Electric Light & Manufacturing?`, correct_answer: "Tesla", trial_name: "a_NikolaTesla_1_qa_9"} 
};var a_NikolaTesla_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">En los años que sucedieron a estos rumores, ni Tesla ni <span id="a_NikolaTesla_3_qa_1">Edison</span> ganaron el premio. Aunque en 1915, Edison recibió una propuesta de <span id="a_NikolaTesla_3_qa_0">38</span> posibles mientras que Tesla también recibió una de 38 posibles en el año <span id="a_NikolaTesla_3_qa_2">1937</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántas posibles propuestas habían para el premio en 1915?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántas posibles propuestas habían para el premio en 1915?`, correct_answer: "38", trial_name: "a_NikolaTesla_3_qa_0"} 
};var a_NikolaTesla_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién recibió una propuesta en 1915?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién recibió una propuesta en 1915?`, correct_answer: "Edison", trial_name: "a_NikolaTesla_3_qa_1"} 
};var a_NikolaTesla_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué año Tesla recibió una propuesta para el premio Nobel?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué año Tesla recibió una propuesta para el premio Nobel?`, correct_answer: "1937", trial_name: "a_NikolaTesla_3_qa_2"} 
};var a_NikolaTesla_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Sin embargo, debido a las diferentes declaraciones que realizaba, sus opiniones religiosas siguen siendo <span id="a_NikolaTesla_4_qa_1">confusas</span>. Por ejemplo, en su artículo <span id="a_NikolaTesla_4_qa_0">" Una máquina para acabar con la <span id="a_NikolaTesla_4_qa_2">guerra</span>"</span>, publicado en 1937, Tesla declaraba lo siguiente:</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué artículo fue publicado en 1937?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué artículo fue publicado en 1937?`, correct_answer: " Una máquina para acabar con la guerra", trial_name: "a_NikolaTesla_4_qa_0"} 
};var a_NikolaTesla_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Debido a ciertas declaraciones, ¿qué se creía sobre las opiniones religiosas de Tesla?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Debido a ciertas declaraciones, ¿qué se creía sobre las opiniones religiosas de Tesla?`, correct_answer: "confusas", trial_name: "a_NikolaTesla_4_qa_1"} 
};var a_NikolaTesla_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">De acuerdo con el título del artículo, ¿con qué esperaba acabar la máquina?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `De acuerdo con el título del artículo, ¿con qué esperaba acabar la máquina?`, correct_answer: "guerra", trial_name: "a_NikolaTesla_4_qa_2"} 
};var a_Computationalcomplexitytheory_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Computationalcomplexitytheory_0_qa_0">La teoría de la complejidad computacional</span> es una rama de la teoría de la computación dentro de la ciencia computacional teórica. Esta teoría se centra en la clasificación de los <span id="a_Computationalcomplexitytheory_0_qa_2">problemas computacionales</span> según su <span id="a_Computationalcomplexitytheory_0_qa_1">dificultad inherente</span> y en la relación de esas clases de dificultad entre sí. Un problema computacional se entiende como una tarea que en principio puede ser resuelta por un ordenador, es decir, que el problema puede ser resuelto mediante la aplicación mecánica de pasos matemáticos tales como un algoritmo.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué rama de la ciencia computacional teórica se encarga de la clasificación de los problemas computacionales por dificultad y clase de relación?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué rama de la ciencia computacional teórica se encarga de la clasificación de los problemas computacionales por dificultad y clase de relación?`, correct_answer: "La teoría de la complejidad computacional", trial_name: "a_Computationalcomplexitytheory_0_qa_0"} 
};var a_Computationalcomplexitytheory_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es el principal atributo que se utiliza para clasificar los problemas computacionales utilizando la teoría de la complejidad computacional?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es el principal atributo que se utiliza para clasificar los problemas computacionales utilizando la teoría de la complejidad computacional?`, correct_answer: "dificultad inherente", trial_name: "a_Computationalcomplexitytheory_0_qa_1"} 
};var a_Computationalcomplexitytheory_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué término se utiliza para definir una tarea que puede ser resuelta por un ordenador?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué término se utiliza para definir una tarea que puede ser resuelta por un ordenador?`, correct_answer: "problemas computacionales", trial_name: "a_Computationalcomplexitytheory_0_qa_2"} 
};var a_Computationalcomplexitytheory_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Computationalcomplexitytheory_1_qa_0">La instancia de un problema</span>, cuando se habla de problemas computacionales, es una cadena de elementos de un alfabeto. Por lo general, el alfabeto que se utiliza es el <span id="a_Computationalcomplexitytheory_1_qa_1">binario</span> (es decir, combinaciones de 0 y 1) y por ello, estas cadenas reciben el nombre de <span id="a_Computationalcomplexitytheory_1_qa_2">cadenas de bits</span>. Como ocurre en una computadora del mundo real, los objetos matemáticos que no son cadenas de bits deben estar debidamente codificados. Por ejemplo, los números enteros pueden representarse como <span id="a_Computationalcomplexitytheory_1_qa_3">notación binaria</span> y los gráficos se pueden codificar directamente, o bien a través de sus <span id="a_Computationalcomplexitytheory_1_qa_4">matrices de adyacencia</span>, o bien a través de sus listas de adyacencia en código binario.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">En un problema computacional, ¿qué es lo que se describe como un cadena de elementos de un alfabeto? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `En un problema computacional, ¿qué es lo que se describe como un cadena de elementos de un alfabeto? `, correct_answer: "La instancia de un problema", trial_name: "a_Computationalcomplexitytheory_1_qa_0"} 
};var a_Computationalcomplexitytheory_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se llama el alfabeto usado normalmente en una instancia?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se llama el alfabeto usado normalmente en una instancia?`, correct_answer: "binario", trial_name: "a_Computationalcomplexitytheory_1_qa_1"} 
};var a_Computationalcomplexitytheory_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿De qué otra manera se puede llamar a la cadena de una instancia?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿De qué otra manera se puede llamar a la cadena de una instancia?`, correct_answer: "cadenas de bits", trial_name: "a_Computationalcomplexitytheory_1_qa_2"} 
};var a_Computationalcomplexitytheory_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">En cuanto a la codificación de objetos matemáticos, ¿De qué manera se expresan normalmente los números enteros?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `En cuanto a la codificación de objetos matemáticos, ¿De qué manera se expresan normalmente los números enteros?`, correct_answer: "notación binaria", trial_name: "a_Computationalcomplexitytheory_1_qa_3"} 
};var a_Computationalcomplexitytheory_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿De qué manera se pueden codificar los gráficos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿De qué manera se pueden codificar los gráficos?`, correct_answer: "matrices de adyacencia", trial_name: "a_Computationalcomplexitytheory_1_qa_4"} 
};var a_Computationalcomplexitytheory_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Tener la idea de que los problemas de función pueden ser más enriquecedores que los problemas de decisión puede llegar a ser tentador. Sin embargo, la realidad es otra, ya que los problemas de función pueden reconvertirse en <span id="a_Computationalcomplexitytheory_2_qa_0">problemas de decisión</span>. Por ejemplo, la multiplicación de dos números enteros puede expresarse como un <span id="a_Computationalcomplexitytheory_2_qa_1">conjunto de triples</span> (a, b, c) de tal manera que se mantenga la relación a × b = c. Decidir si uno de esos triples dados pertenece o no al conjunto es algo que le corresponde a la solución del problema de multiplicar dos números.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo puede ser reformulado un problema de función?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo puede ser reformulado un problema de función?`, correct_answer: "problemas de decisión", trial_name: "a_Computationalcomplexitytheory_2_qa_0"} 
};var a_Computationalcomplexitytheory_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Si dos números enteros se multiplican y generan un valor, ¿qué nombre recibe ese conjunto?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Si dos números enteros se multiplican y generan un valor, ¿qué nombre recibe ese conjunto?`, correct_answer: "conjunto de triples", trial_name: "a_Computationalcomplexitytheory_2_qa_1"} 
};var a_Computationalcomplexitytheory_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Se sospecha, aunque no ha sido demostrado, que muchas clases de complejidad conocidas pueden ser <span id="a_Computationalcomplexitytheory_4_qa_0">desiguales</span>. Por ejemplo: <span id="a_Computationalcomplexitytheory_4_qa_1">P ⊆ NP ⊆ PP ⊆ PSPACE</span>, aunque es posible que P = PSPACE. En el caso de que P no sea igual a NP, entonces P tampoco será igual a PSPACE. Dada la existencia de tantas clases de complejidad conocidas <span id="a_Computationalcomplexitytheory_4_qa_2">entre P y PSPACE</span> como RP, BPP, PP, BQP, MA, PH, etc. es posible que todas estas clases converjan en una sola. <span id="a_Computationalcomplexitytheory_4_qa_3">Conseguir probar que alguna de estas clases es desigual</span> supondría un gran descubrimiento en la teoría de la complejidad.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es el supuesto no demostrado generalmente atribuido al valor de las clases de complejidad?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es el supuesto no demostrado generalmente atribuido al valor de las clases de complejidad?`, correct_answer: "desiguales", trial_name: "a_Computationalcomplexitytheory_4_qa_0"} 
};var a_Computationalcomplexitytheory_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es la secuencia que puede utilizarse para ilustrar esta sospechada desigualdad de las clases de complejidad?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es la secuencia que puede utilizarse para ilustrar esta sospechada desigualdad de las clases de complejidad?`, correct_answer: "P ⊆ NP ⊆ PP ⊆ PSPACE", trial_name: "a_Computationalcomplexitytheory_4_qa_1"} 
};var a_Computationalcomplexitytheory_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En dónde pueden ubicarse las clases de complejidad RP, BPP, PP, BQP, MA y PH?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En dónde pueden ubicarse las clases de complejidad RP, BPP, PP, BQP, MA y PH?`, correct_answer: "entre P y PSPACE", trial_name: "a_Computationalcomplexitytheory_4_qa_2"} 
};var a_Computationalcomplexitytheory_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es la demostración entre las clases de complejidad complejas que significaría un punto de inflexión en la teoría de la complejidad?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es la demostración entre las clases de complejidad complejas que significaría un punto de inflexión en la teoría de la complejidad?`, correct_answer: "Conseguir probar que alguna de estas clases es desigual", trial_name: "a_Computationalcomplexitytheory_4_qa_3"} 
};var a_Teacher_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">﻿En el pasado, el castigo físico (azotes en las nalgas, golpes, castigo físico o golpear con una vara al estudiante para causarle <span id="a_Teacher_0_qa_4">dolor físico</span>) era <span id="a_Teacher_0_qa_0">una de las formas más comunes</span> de disciplina escolar en gran parte del mundo. <span id="a_Teacher_0_qa_1">La mayoría de los países occidentales</span> y algunos otros lo han prohibido, pero sigue siendo legal en <span id="a_Teacher_0_qa_2">Estados Unidos</span> según una decisión del <span id="a_Teacher_0_qa_3">Tribunal Supremo de Estados Unidos</span> de 1977 que consideró que pegar no violaba la Constitución estadounidense.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cuán común era la forma de castigo físico en el pasado?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuán común era la forma de castigo físico en el pasado?`, correct_answer: "una de las formas más comunes", trial_name: "a_Teacher_0_qa_0"} 
};var a_Teacher_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Dónde ha dejado de practicarse el castigo físico?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Dónde ha dejado de practicarse el castigo físico?`, correct_answer: "La mayoría de los países occidentales", trial_name: "a_Teacher_0_qa_1"} 
};var a_Teacher_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué país occidental sigue permitiéndose el castigo físico?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué país occidental sigue permitiéndose el castigo físico?`, correct_answer: "Estados Unidos", trial_name: "a_Teacher_0_qa_2"} 
};var a_Teacher_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué entidad estadounidense dijo que el castigo físico era constitucional?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué entidad estadounidense dijo que el castigo físico era constitucional?`, correct_answer: "Tribunal Supremo de Estados Unidos", trial_name: "a_Teacher_0_qa_3"} 
};var a_Teacher_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué provoca el castigo físico en un estudiante?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué provoca el castigo físico en un estudiante?`, correct_answer: "dolor físico", trial_name: "a_Teacher_0_qa_4"} 
};var a_Teacher_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Los docentes de Gales pueden ser miembros registrados de <span id="a_Teacher_1_qa_0"><span id="a_Teacher_1_qa_3">sindicatos</span></span> como ATL, NUT o NASUWT, y los informes de los últimos años indican que la edad media de los docentes de Gales está <span id="a_Teacher_1_qa_1">reduciéndose</span> y que los docentes son más jóvenes que en años anteriores. Una causa creciente de <span id="a_Teacher_1_qa_4">preocupación</span> son los ataques a docentes en colegios galeses, que alcanzaron su máximo absoluto <span id="a_Teacher_1_qa_2">entre 2005 y 2010</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿En qué grupo pueden inscribirse los docentes en Gales?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué grupo pueden inscribirse los docentes en Gales?`, correct_answer: "sindicatos", trial_name: "a_Teacher_1_qa_0"} 
};var a_Teacher_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué está pasando con la edad media de los docentes de Gales?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué está pasando con la edad media de los docentes de Gales?`, correct_answer: "reduciéndose", trial_name: "a_Teacher_1_qa_1"} 
};var a_Teacher_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo alcanzaron su máximo los ataques a docentes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo alcanzaron su máximo los ataques a docentes?`, correct_answer: "entre 2005 y 2010", trial_name: "a_Teacher_1_qa_2"} 
};var a_Teacher_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué es la NASUWT?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué es la NASUWT?`, correct_answer: "sindicatos", trial_name: "a_Teacher_1_qa_3"} 
};var a_Teacher_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué están provocando los ataques a docentes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué están provocando los ataques a docentes?`, correct_answer: "preocupación", trial_name: "a_Teacher_1_qa_4"} 
};var a_Teacher_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">En el hinduismo, el maestro espiritual se conoce como <span id="a_Teacher_3_qa_0">gurú</span> y, en muchas tradiciones del hinduismo —especialmente las que son comunes en <span id="a_Teacher_3_qa_3">Occidente</span>— el énfasis en el acompañamiento espiritual es <span id="a_Teacher_3_qa_1">extremadamente importante</span>, y a menudo los gurús ejercen un gran control sobre la vida de <span id="a_Teacher_3_qa_2">sus discípulos</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se llama el maestro espiritual en el hinduismo?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se llama el maestro espiritual en el hinduismo?`, correct_answer: "gurú", trial_name: "a_Teacher_3_qa_0"} 
};var a_Teacher_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En el hinduismo se hace mucho o poco hincapié en el acompañamiento espiritual?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En el hinduismo se hace mucho o poco hincapié en el acompañamiento espiritual?`, correct_answer: "extremadamente importante", trial_name: "a_Teacher_3_qa_1"} 
};var a_Teacher_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A quién controlan los gurús?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A quién controlan los gurús?`, correct_answer: "sus discípulos", trial_name: "a_Teacher_3_qa_2"} 
};var a_Teacher_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué área es común que el acompañamiento espiritual sea extremadamente importante?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué área es común que el acompañamiento espiritual sea extremadamente importante?`, correct_answer: "Occidente", trial_name: "a_Teacher_3_qa_3"} 
};var a_Teacher_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">En el budismo tibetano normalmente se llama a los maestros del dharma del Tíbet <span id="a_Teacher_4_qa_0">lamas</span>. Un lama que ha decidido conscientemente <span id="a_Teacher_4_qa_1">renacer</span> a través del <span id="a_Teacher_4_qa_4">phowa y el siddhi</span>, frecuentemente <span id="a_Teacher_4_qa_3">muchas veces</span>, con el fin de continuar su voto del bodhisattva, se llama <span id="a_Teacher_4_qa_2">tulku</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se llama un maestro en el budismo tibetano?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se llama un maestro en el budismo tibetano?`, correct_answer: "lamas", trial_name: "a_Teacher_4_qa_0"} 
};var a_Teacher_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué ha decidido hacer un lama?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué ha decidido hacer un lama?`, correct_answer: "renacer", trial_name: "a_Teacher_4_qa_1"} 
};var a_Teacher_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se llama un voto bodhisattva?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se llama un voto bodhisattva?`, correct_answer: "tulku", trial_name: "a_Teacher_4_qa_2"} 
};var a_Teacher_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántas veces ha aceptado renacer un lama?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántas veces ha aceptado renacer un lama?`, correct_answer: "muchas veces", trial_name: "a_Teacher_4_qa_3"} 
};var a_Teacher_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué ayudó al lama a decidir renacer?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué ayudó al lama a decidir renacer?`, correct_answer: "phowa y el siddhi", trial_name: "a_Teacher_4_qa_4"} 
};var a_MartinLuther_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Los escritos de Lutero se difundieron ampliamente y llegaron a Francia, Inglaterra e Italia ya en <span id="a_MartinLuther_0_qa_0">1519</span>. <span id="a_MartinLuther_0_qa_1">Los estudiantes</span> acudían en masa a Wittenberg para escuchar hablar a Lutero. Este publicó un breve comentario sobre los gálatas y su obra sobre los Salmos. Esta parte <span id="a_MartinLuther_0_qa_2">temprana</span> de la carrera de Lutero fue una de las más creativas y productivas. Tres de sus obras más conocidas se publicaron en <span id="a_MartinLuther_0_qa_3">1520</span>: «A la nobleza cristiana de la nación alemana», «El cautiverio babilónico de la Iglesia» y <span id="a_MartinLuther_0_qa_4">«Sobre la libertad del cristiano»</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo se difundieron los escritos de Lutero en Francia, Inglaterra e Italia?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo se difundieron los escritos de Lutero en Francia, Inglaterra e Italia?`, correct_answer: "1519", trial_name: "a_MartinLuther_0_qa_0"} 
};var a_MartinLuther_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién fue a Wittenberg para escuchar hablar a Lutero?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién fue a Wittenberg para escuchar hablar a Lutero?`, correct_answer: "Los estudiantes", trial_name: "a_MartinLuther_0_qa_1"} 
};var a_MartinLuther_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué parte de la carrera de Lutero fue una de las más productivas?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué parte de la carrera de Lutero fue una de las más productivas?`, correct_answer: "temprana", trial_name: "a_MartinLuther_0_qa_2"} 
};var a_MartinLuther_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo se publicaron algunas de las obras más conocidas de Lutero?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo se publicaron algunas de las obras más conocidas de Lutero?`, correct_answer: "1520", trial_name: "a_MartinLuther_0_qa_3"} 
};var a_MartinLuther_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Además de publicar «A la nobleza cristiana de la nación alemana» y «El cautiverio babilónico de la Iglesia», ¿qué otras obras hizo Lutero en 1520?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Además de publicar «A la nobleza cristiana de la nación alemana» y «El cautiverio babilónico de la Iglesia», ¿qué otras obras hizo Lutero en 1520?`, correct_answer: "«Sobre la libertad del cristiano»", trial_name: "a_MartinLuther_0_qa_4"} 
};var a_MartinLuther_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Publicada en un momento de creciente demanda de <span id="a_MartinLuther_2_qa_0">publicaciones en alemán</span>, la versión de Lutero se convirtió rápidamente en una traducción popular e influyente de la <span id="a_MartinLuther_2_qa_1">Biblia</span>. Como tal, contribuyó de forma significativa a la <span id="a_MartinLuther_2_qa_2">evolución de la lengua y la literatura alemanas</span>. Con notas y prólogos de Lutero y grabados en madera de <span id="a_MartinLuther_2_qa_3">Lucas Cranach</span> que contenían imágenes antipapales, desempeñó un papel importante en la difusión de la doctrina de Lutero en Alemania. La Biblia de Lutero influyó en otras traducciones en lengua vernácula, como la Biblia inglesa de <span id="a_MartinLuther_2_qa_4">William Tyndale</span> (1525 en adelante), un precursor de la Biblia del rey Jacobo.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿En la época de Martín Lutero, qué tenía demanda?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En la época de Martín Lutero, qué tenía demanda?`, correct_answer: "publicaciones en alemán", trial_name: "a_MartinLuther_2_qa_0"} 
};var a_MartinLuther_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué obra de Lutero se hizo popular?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué obra de Lutero se hizo popular?`, correct_answer: "Biblia", trial_name: "a_MartinLuther_2_qa_1"} 
};var a_MartinLuther_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A qué contribuyó la popularidad de la traducción de Lutero?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A qué contribuyó la popularidad de la traducción de Lutero?`, correct_answer: "evolución de la lengua y la literatura alemanas", trial_name: "a_MartinLuther_2_qa_2"} 
};var a_MartinLuther_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué artista realizó los grabados en madera de la Biblia de Lutero?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué artista realizó los grabados en madera de la Biblia de Lutero?`, correct_answer: "Lucas Cranach", trial_name: "a_MartinLuther_2_qa_3"} 
};var a_MartinLuther_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué traducción al inglés de la Biblia influyó la Biblia de Lutero?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué traducción al inglés de la Biblia influyó la Biblia de Lutero?`, correct_answer: "William Tyndale", trial_name: "a_MartinLuther_2_qa_4"} 
};var a_MartinLuther_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_MartinLuther_3_qa_0">Determinados acontecimientos de la vida</span> de Lutero y la Reforma que tuvo lugar evocaban con frecuencia los himnos de Lutero. Esta conducta comenzó cuando se enteró de la ejecución de Johann Esch y Heinrich Voes, las primeras personas martirizadas por la Iglesia Católica Romana <span id="a_MartinLuther_3_qa_1">por tener opiniones luteranas</span>, lo cual motivó a Lutero a escribir el himno «<span id="a_MartinLuther_3_qa_2">Ein neues Lied wir heben an</span>» («Una nueva canción que elevamos»), que generalmente se conoce en inglés por la traducción de <span id="a_MartinLuther_3_qa_3">John C. Messenger</span> del título y el primer verso «<span id="a_MartinLuther_3_qa_4">Flung to the Heedless Winds</span>», cantado por Maria C. Tiddeman con la música que compuso Ibstone en 1875.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué motivó a Lutero a escribir himnos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué motivó a Lutero a escribir himnos?`, correct_answer: "Determinados acontecimientos de la vida", trial_name: "a_MartinLuther_3_qa_0"} 
};var a_MartinLuther_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Por qué ejecutó la Iglesia Católica a Johann Esch y Heinrich Voes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Por qué ejecutó la Iglesia Católica a Johann Esch y Heinrich Voes?`, correct_answer: "por tener opiniones luteranas", trial_name: "a_MartinLuther_3_qa_1"} 
};var a_MartinLuther_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué himno escribió Lutero después del martirio de Esch y Voes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué himno escribió Lutero después del martirio de Esch y Voes?`, correct_answer: "Ein neues Lied wir heben an", trial_name: "a_MartinLuther_3_qa_2"} 
};var a_MartinLuther_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién es el traductor inglés de ese himno?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién es el traductor inglés de ese himno?`, correct_answer: "John C. Messenger", trial_name: "a_MartinLuther_3_qa_3"} 
};var a_MartinLuther_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se conoce el himno en inglés?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se conoce el himno en inglés?`, correct_answer: "Flung to the Heedless Winds", trial_name: "a_MartinLuther_3_qa_4"} 
};var a_MartinLuther_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Después se encontró un trozo de papel en el que Lutero había escrito <span id="a_MartinLuther_4_qa_0">su última declaración</span>. La declaración estaba en <span id="a_MartinLuther_4_qa_1">latín</span>, aparte de <span id="a_MartinLuther_4_qa_2">«Somos mendigos»,</span> que estaba en alemán.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué se descubrió más tarde que había escrito Lutero?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué se descubrió más tarde que había escrito Lutero?`, correct_answer: "su última declaración", trial_name: "a_MartinLuther_4_qa_0"} 
};var a_MartinLuther_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué idioma estaba escrita la mayor parte de esta declaración? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué idioma estaba escrita la mayor parte de esta declaración? `, correct_answer: "latín", trial_name: "a_MartinLuther_4_qa_1"} 
};var a_MartinLuther_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué parte de la última declaración de Lutero estaba en alemán?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué parte de la última declaración de Lutero estaba en alemán?`, correct_answer: "«Somos mendigos»,", trial_name: "a_MartinLuther_4_qa_2"} 
};var a_SouthernCalifornia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Entre los equipos deportivos profesionales de California del Sur están los equipos de la <span id="a_SouthernCalifornia_3_qa_0">NFL</span> (Los Angeles Rams, San Diego Chargers); <span id="a_SouthernCalifornia_3_qa_1">la NBA</span> (Los Angeles Lakers, Los Angeles Clippers); <span id="a_SouthernCalifornia_3_qa_2">la MLB</span> (Los Angeles Dodgers, Los Angeles Angels of Anaheim, San Diego Padres); la NHL (<span id="a_SouthernCalifornia_3_qa_3">Los Angeles Kings</span>, Anaheim Ducks); y la MLS (<span id="a_SouthernCalifornia_3_qa_4">LA Galaxy</span>).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿De qué tipo de equipo deportivo son un ejemplo Los Angeles Rams?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿De qué tipo de equipo deportivo son un ejemplo Los Angeles Rams?`, correct_answer: "NFL", trial_name: "a_SouthernCalifornia_3_qa_0"} 
};var a_SouthernCalifornia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A qué deporte se dedica el equipo Los Angeles Clippers?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A qué deporte se dedica el equipo Los Angeles Clippers?`, correct_answer: "la NBA", trial_name: "a_SouthernCalifornia_3_qa_1"} 
};var a_SouthernCalifornia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A qué deporte se dedican Los Angeles Angels of Anaheim?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A qué deporte se dedican Los Angeles Angels of Anaheim?`, correct_answer: "la MLB", trial_name: "a_SouthernCalifornia_3_qa_2"} 
};var a_SouthernCalifornia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es el otro equipo de la NHL que reside en California del Sur aparte de los Anaheim Ducks?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es el otro equipo de la NHL que reside en California del Sur aparte de los Anaheim Ducks?`, correct_answer: "Los Angeles Kings", trial_name: "a_SouthernCalifornia_3_qa_3"} 
};var a_SouthernCalifornia_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es el único equipo de la MLS que pertenece a California del Sur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es el único equipo de la MLS que pertenece a California del Sur?`, correct_answer: "LA Galaxy", trial_name: "a_SouthernCalifornia_3_qa_4"} 
};var a_SouthernCalifornia_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">De 2005 a <span id="a_SouthernCalifornia_4_qa_2">2014</span> hubo <span id="a_SouthernCalifornia_4_qa_1">dos</span> equipos de las ligas mayores de fútbol en Los Ángeles: el LA Galaxy y el Chivas USA, que jugaron en el <span id="a_SouthernCalifornia_4_qa_3">StubHub Center</span> y fueron rivales locales. Sin embargo, tras la temporada 2014 de la MLS se expulsó temporalmente a los <span id="a_SouthernCalifornia_4_qa_0">Chivas</span>, y está previsto que regrese un segundo equipo de la MLS en <span id="a_SouthernCalifornia_4_qa_4">2018</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué equipo se expulsó temporalmente de la MLS?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué equipo se expulsó temporalmente de la MLS?`, correct_answer: "Chivas", trial_name: "a_SouthernCalifornia_4_qa_0"} 
};var a_SouthernCalifornia_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántos equipos había en Los Ángeles?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántos equipos había en Los Ángeles?`, correct_answer: "dos", trial_name: "a_SouthernCalifornia_4_qa_1"} 
};var a_SouthernCalifornia_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué año tuvo lugar la expulsión temporal de uno de los dos equipos de fútbol?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué año tuvo lugar la expulsión temporal de uno de los dos equipos de fútbol?`, correct_answer: "2014", trial_name: "a_SouthernCalifornia_4_qa_2"} 
};var a_SouthernCalifornia_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se llamaba el estadio en el que jugaron los equipos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se llamaba el estadio en el que jugaron los equipos?`, correct_answer: "StubHub Center", trial_name: "a_SouthernCalifornia_4_qa_3"} 
};var a_SouthernCalifornia_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo está previsto que regrese el equipo expulsado temporalmente?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo está previsto que regrese el equipo expulsado temporalmente?`, correct_answer: "2018", trial_name: "a_SouthernCalifornia_4_qa_4"} 
};var a_SkyUnitedKingdom_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Cuando se lanzó Sky Digital en <span id="a_SkyUnitedKingdom_1_qa_0">1998</span>, el nuevo servicio usaba el satélite <span id="a_SkyUnitedKingdom_1_qa_1">Astra 2A</span>, que estaba situado en la posición orbital 28.5°E, a diferencia del servicio analógico que se emitía a 19.2°E. Posteriormente hubo más satélites Astra, así como <span id="a_SkyUnitedKingdom_1_qa_2">el Eurobird 1 de Eutelsat</span> (ahora Eutelsat 33C) a 28.5°E, lo cual permitió a la empresa lanzar un nuevo servicio completamente digital, Sky, que podía incluir <span id="a_SkyUnitedKingdom_1_qa_3">cientos</span> de canales de televisión y radio. La antigua posición era compartida con canales de varios países europeos, mientras que la nueva posición en <span id="a_SkyUnitedKingdom_1_qa_4">28.5°E</span> pasó a ser usada casi exclusivamente por los canales que emiten en el Reino Unido.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_SkyUnitedKingdom_1_qa_0','#a_SkyUnitedKingdom_1_qa_1','#a_SkyUnitedKingdom_1_qa_2','#a_SkyUnitedKingdom_1_qa_3','#a_SkyUnitedKingdom_1_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_SkyUnitedKingdom_1_1280_720.png';
a.click();});}},data: { trial_name: "a_SkyUnitedKingdom_1"}
};
var a_SkyUnitedKingdom_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo se lanzó Sky Digital?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo se lanzó Sky Digital?`, correct_answer: "1998", trial_name: "a_SkyUnitedKingdom_1_qa_0"} 
};var a_SkyUnitedKingdom_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué satélite se usó cuando se lanzó Sky digital?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué satélite se usó cuando se lanzó Sky digital?`, correct_answer: "Astra 2A", trial_name: "a_SkyUnitedKingdom_1_qa_1"} 
};var a_SkyUnitedKingdom_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué satélite permitió a Sky Digital lanzar un nuevo servicio digital?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué satélite permitió a Sky Digital lanzar un nuevo servicio digital?`, correct_answer: "el Eurobird 1 de Eutelsat", trial_name: "a_SkyUnitedKingdom_1_qa_2"} 
};var a_SkyUnitedKingdom_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántos canales de radio y televisión podía tener el nuevo servicio digital?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántos canales de radio y televisión podía tener el nuevo servicio digital?`, correct_answer: "cientos", trial_name: "a_SkyUnitedKingdom_1_qa_3"} 
};var a_SkyUnitedKingdom_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es la posición del satélite que permitió a Sky emitir canales casi exclusivamente en el Reino Unido?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es la posición del satélite que permitió a Sky emitir canales casi exclusivamente en el Reino Unido?`, correct_answer: "28.5°E", trial_name: "a_SkyUnitedKingdom_1_qa_4"} 
};var a_SkyUnitedKingdom_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Los acuerdos incluyen tarifas anuales fijas de transporte de <span id="a_SkyUnitedKingdom_4_qa_0">30 millones de libras</span> para los canales si los dos proveedores de canales son capaces de garantizar pagos limitados adicionales si sus canales alcanzan determinados objetivos de rendimiento. Actualmente no hay <span id="a_SkyUnitedKingdom_4_qa_1">ninguna indicación</span> en cuanto a si el nuevo acuerdo incluye el vídeo bajo demanda adicional y el contenido de alta definición que anteriormente había ofrecido BSkyB. Como parte de los acuerdos, tanto <span id="a_SkyUnitedKingdom_4_qa_3">BSkyB</span> como <span id="a_SkyUnitedKingdom_4_qa_2">Virgin Media</span> decidieron poner fin a todas las actuaciones judiciales ante el tribunal superior relacionadas con el transporte de sus respectivos <span id="a_SkyUnitedKingdom_4_qa_4">canales básicos</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cuáles eran las tarifas anuales de transporte para los canales?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuáles eran las tarifas anuales de transporte para los canales?`, correct_answer: "30 millones de libras", trial_name: "a_SkyUnitedKingdom_4_qa_0"} 
};var a_SkyUnitedKingdom_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿El nuevo acuerdo incluye el vídeo bajo demanda y la alta definición?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿El nuevo acuerdo incluye el vídeo bajo demanda y la alta definición?`, correct_answer: "ninguna indicación", trial_name: "a_SkyUnitedKingdom_4_qa_1"} 
};var a_SkyUnitedKingdom_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué empresa acordó poner fin a las actuaciones judiciales contra BSkyB ante el tribunal superior?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué empresa acordó poner fin a las actuaciones judiciales contra BSkyB ante el tribunal superior?`, correct_answer: "Virgin Media", trial_name: "a_SkyUnitedKingdom_4_qa_2"} 
};var a_SkyUnitedKingdom_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué empresa acordó poner fin a las actuaciones judiciales contra Virgin Media ante el tribunal superior?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué empresa acordó poner fin a las actuaciones judiciales contra Virgin Media ante el tribunal superior?`, correct_answer: "BSkyB", trial_name: "a_SkyUnitedKingdom_4_qa_3"} 
};var a_SkyUnitedKingdom_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Por qué motivo se estaban celebrando actuaciones judiciales ante el tribunal superior?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Por qué motivo se estaban celebrando actuaciones judiciales ante el tribunal superior?`, correct_answer: "canales básicos", trial_name: "a_SkyUnitedKingdom_4_qa_4"} 
};var a_VictoriaAustralia_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Victoria tiene una constitución escrita promulgada en <span id="a_VictoriaAustralia_1_qa_0">1975</span>, pero basada en la <span id="a_VictoriaAustralia_1_qa_1">Constitución colonial de 1855</span>, aprobada por el Parlamento del Reino Unido como la <span id="a_VictoriaAustralia_1_qa_4">Ley Constitucional de Victoria de 1855</span>, que establece que el Parlamento es el órgano legislativo del estado en asuntos que sean responsabilidad del estado. El Parlamento de Victoria puede enmendar la <span id="a_VictoriaAustralia_1_qa_2">Constitución de Victoria</span>, excepto ciertas <span id="a_VictoriaAustralia_1_qa_3">disposiciones «arraigadas»</span> que requieren una mayoría absoluta de ambas cámaras, una mayoría de tres quintas partes en ambas cámaras o la aprobación del pueblo de Victoria en un referéndum, dependiendo de la disposición.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_VictoriaAustralia_1_qa_0','#a_VictoriaAustralia_1_qa_1','#a_VictoriaAustralia_1_qa_2','#a_VictoriaAustralia_1_qa_3','#a_VictoriaAustralia_1_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_VictoriaAustralia_1_1280_720.png';
a.click();});}},data: { trial_name: "a_VictoriaAustralia_1"}
};
var a_VictoriaAustralia_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuando promulgó Victoria su constitución?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuando promulgó Victoria su constitución?`, correct_answer: "1975", trial_name: "a_VictoriaAustralia_1_qa_0"} 
};var a_VictoriaAustralia_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué se basa la Constitución de Victoria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué se basa la Constitución de Victoria?`, correct_answer: "Constitución colonial de 1855", trial_name: "a_VictoriaAustralia_1_qa_1"} 
};var a_VictoriaAustralia_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué grupo puede enmendar la Constitución de Victoria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué grupo puede enmendar la Constitución de Victoria?`, correct_answer: "Constitución de Victoria", trial_name: "a_VictoriaAustralia_1_qa_2"} 
};var a_VictoriaAustralia_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuáles son las excepciones de la Constitución que requieren consideraciones especiales para ser enmendadas?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuáles son las excepciones de la Constitución que requieren consideraciones especiales para ser enmendadas?`, correct_answer: "disposiciones «arraigadas»", trial_name: "a_VictoriaAustralia_1_qa_3"} 
};var a_VictoriaAustralia_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué documento constituyó el Parlamento de Victoria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué documento constituyó el Parlamento de Victoria?`, correct_answer: "Ley Constitucional de Victoria de 1855", trial_name: "a_VictoriaAustralia_1_qa_4"} 
};var a_VictoriaAustralia_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Históricamente, Victoria ha sido la base de las plantas de fabricación de las <span id="a_VictoriaAustralia_2_qa_0">principales marcas de coches</span>, Ford, Toyota y Holden; sin embargo, los anuncios de cierre de estas tres empresas en el siglo XXI significarán que Australia ya no será una base de la industria automovilística mundial tras la declaración de Toyota de febrero de 2014 en la que se apuntaba a <span id="a_VictoriaAustralia_2_qa_1">2017</span> como año de cierre. El anuncio de Holden se produjo en <span id="a_VictoriaAustralia_2_qa_2">mayo de 2013</span>, seguido por la decisión de Ford de diciembre de ese mismo año (las plantas que tiene <span id="a_VictoriaAustralia_2_qa_4">Ford</span> en Victoria, situadas en Broadmeadows y Geelong, cerrarán el <span id="a_VictoriaAustralia_2_qa_3">de octubre de 2016</span>).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué tipo de planta de fabricación va a cerrar dentro de poco en Victoria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué tipo de planta de fabricación va a cerrar dentro de poco en Victoria?`, correct_answer: "principales marcas de coches", trial_name: "a_VictoriaAustralia_2_qa_0"} 
};var a_VictoriaAustralia_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo ha dicho Toyota que cerrará su planta de Victoria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo ha dicho Toyota que cerrará su planta de Victoria?`, correct_answer: "2017", trial_name: "a_VictoriaAustralia_2_qa_1"} 
};var a_VictoriaAustralia_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo anunció Holden que cerraría su planta de Victoria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo anunció Holden que cerraría su planta de Victoria?`, correct_answer: "mayo de 2013", trial_name: "a_VictoriaAustralia_2_qa_2"} 
};var a_VictoriaAustralia_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo cerrarán las plantas de fabricación de Ford?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo cerrarán las plantas de fabricación de Ford?`, correct_answer: "de octubre de 2016", trial_name: "a_VictoriaAustralia_2_qa_3"} 
};var a_VictoriaAustralia_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué marca de automóvil se fabrica en Broadmeadows?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué marca de automóvil se fabrica en Broadmeadows?`, correct_answer: "Ford", trial_name: "a_VictoriaAustralia_2_qa_4"} 
};var a_VictoriaAustralia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">También hay varios pequeños operadores de mercancías y numerosos ferrocarriles turísticos que operan a través de líneas que anteriormente formaron parte de un sistema de propiedad estatal. Las líneas de Victoria usan principalmente el <span id="a_VictoriaAustralia_3_qa_0">ancho de vía de 1600 mm</span>. Sin embargo, las rutas principales interestatales, así como una serie de líneas secundarias del oeste del estado se han convertido a un ancho de vía estándar de <span id="a_VictoriaAustralia_3_qa_1">1435 mm</span>. Hay dos ferrocarriles turísticos que circulan por <span id="a_VictoriaAustralia_3_qa_2">líneas de trocha angosta de 760 mm</span>, que son los restos de <span id="a_VictoriaAustralia_3_qa_4">5</span> líneas que anteriormente eran propiedad del gobierno y que se construyeron en <span id="a_VictoriaAustralia_3_qa_3">zonas montañosas</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es el ancho de vía de las líneas ferroviarias de Victoria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es el ancho de vía de las líneas ferroviarias de Victoria?`, correct_answer: "ancho de vía de 1600 mm", trial_name: "a_VictoriaAustralia_3_qa_0"} 
};var a_VictoriaAustralia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A qué ancho de vía se han adaptado algunas líneas del oeste de Victoria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A qué ancho de vía se han adaptado algunas líneas del oeste de Victoria?`, correct_answer: "1435 mm", trial_name: "a_VictoriaAustralia_3_qa_1"} 
};var a_VictoriaAustralia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué ancho de vía de ferrocarril utilizan dos líneas turísticas?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué ancho de vía de ferrocarril utilizan dos líneas turísticas?`, correct_answer: "líneas de trocha angosta de 760 mm", trial_name: "a_VictoriaAustralia_3_qa_2"} 
};var a_VictoriaAustralia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Dónde se construyeron las líneas ferroviarias de trocha angosta en Victoria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Dónde se construyeron las líneas ferroviarias de trocha angosta en Victoria?`, correct_answer: "zonas montañosas", trial_name: "a_VictoriaAustralia_3_qa_3"} 
};var a_VictoriaAustralia_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántas líneas de ferrocarril de trocha angosta eran antes propiedad del gobierno?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántas líneas de ferrocarril de trocha angosta eran antes propiedad del gobierno?`, correct_answer: "5", trial_name: "a_VictoriaAustralia_3_qa_4"} 
};var a_Huguenot_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">La reanudación de la guerra religiosa en la década de 1620 provocó la abolición de los privilegios políticos y militares de los hugonotes tras su derrota. Conservaron las disposiciones religiosas del Edicto de Nantes hasta el reinado de <span id="a_Huguenot_0_qa_2">Luis XIV</span>, que progresivamente aumentó su persecución hasta que declaró el <span id="a_Huguenot_0_qa_0">Edicto de Fontainebleau</span> (<span id="a_Huguenot_0_qa_1">1685</span>), que abolió todo reconocimiento legal del protestantismo en Francia, y obligó a los hugonotes a convertirse. Aunque casi tres cuartas partes de ellos fueron asesinados o sometidos, aproximadamente <span id="a_Huguenot_0_qa_3">500 000</span> hugonotes habían huido de Francia a principios del siglo XVIII [se necesita una cita].</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué proclamación abolió el protestantismo en Francia?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué proclamación abolió el protestantismo en Francia?`, correct_answer: "Edicto de Fontainebleau", trial_name: "a_Huguenot_0_qa_0"} 
};var a_Huguenot_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo fue declarado este edicto?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo fue declarado este edicto?`, correct_answer: "1685", trial_name: "a_Huguenot_0_qa_1"} 
};var a_Huguenot_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué clase de francés emitió esta declaración?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué clase de francés emitió esta declaración?`, correct_answer: "Luis XIV", trial_name: "a_Huguenot_0_qa_2"} 
};var a_Huguenot_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántos hugonotes habían huido de Francia a principios del siglo XVIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántos hugonotes habían huido de Francia a principios del siglo XVIII?`, correct_answer: "500 000", trial_name: "a_Huguenot_0_qa_3"} 
};var a_Steamengine_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">El calor necesario para hervir el agua y suministrar el vapor puede derivarse de varias fuentes, generalmente de <span id="a_Steamengine_0_qa_0">la quema de materiales combustibles</span> con un suministro adecuado de aire en un espacio cerrado (llamado de varias maneras: <span id="a_Steamengine_0_qa_1">cámara de combustión</span>, chimenea...). En algunos casos la fuente de calor es un reactor nuclear, energía geotérmica, <span id="a_Steamengine_0_qa_2">energía solar</span> o calor residual de un motor de combustión interna o proceso industrial. En el caso de modelos o motores de vapor de juguete, la fuente de calor puede ser un calentador <span id="a_Steamengine_0_qa_3">eléctrico</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es la fuente de calor habitual para hacer hervir el agua en la máquina de vapor?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es la fuente de calor habitual para hacer hervir el agua en la máquina de vapor?`, correct_answer: "la quema de materiales combustibles", trial_name: "a_Steamengine_0_qa_0"} 
};var a_Steamengine_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Aparte de cámara de combustión, ¿qué otro nombre que se le da al espacio en el que se quema el material combustible en el motor?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Aparte de cámara de combustión, ¿qué otro nombre que se le da al espacio en el que se quema el material combustible en el motor?`, correct_answer: "cámara de combustión", trial_name: "a_Steamengine_0_qa_1"} 
};var a_Steamengine_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Junto con el calor residual de la energía nuclear, geotérmica y de los motores de combustión interna, ¿qué tipo de energía podría suministrar el calor para una máquina de vapor?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Junto con el calor residual de la energía nuclear, geotérmica y de los motores de combustión interna, ¿qué tipo de energía podría suministrar el calor para una máquina de vapor?`, correct_answer: "energía solar", trial_name: "a_Steamengine_0_qa_2"} 
};var a_Steamengine_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué tipo de elemento calefactor se utiliza a menudo en las máquinas de vapor de juguete?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué tipo de elemento calefactor se utiliza a menudo en las máquinas de vapor de juguete?`, correct_answer: "eléctrico", trial_name: "a_Steamengine_0_qa_3"} 
};var a_Steamengine_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Aunque la máquina de vapor de pistón ya no es de uso comercial generalizado, varias empresas están explorando o explotando el potencial de la máquina como alternativa a las máquinas de combustión interna. La empresa <span id="a_Steamengine_3_qa_0">Energiprojekt AB</span> en <span id="a_Steamengine_3_qa_1">Suecia</span> ha progresado en el uso de materiales modernos para aprovechar la potencia del vapor. La eficiencia de la máquina de vapor de Energiprojekt alcanza un <span id="a_Steamengine_3_qa_4">27-30 %</span> en motores de alta presión. Es un motor de un solo paso y <span id="a_Steamengine_3_qa_2">5</span> cilindros (sin compuesto) con vapor sobrecalentado y consume aproximadamente 4 kg (<span id="a_Steamengine_3_qa_3">8,8</span> libras) de vapor por kWh.[no se proporciona cita]</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué empresa moderna lleva trabajando notablemente en una máquina de vapor con materiales modernos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué empresa moderna lleva trabajando notablemente en una máquina de vapor con materiales modernos?`, correct_answer: "Energiprojekt AB", trial_name: "a_Steamengine_3_qa_0"} 
};var a_Steamengine_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Dónde tiene su sede Energiprojekt AB?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Dónde tiene su sede Energiprojekt AB?`, correct_answer: "Suecia", trial_name: "a_Steamengine_3_qa_1"} 
};var a_Steamengine_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántos cilindros tiene el motor Energiprojekt AB?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántos cilindros tiene el motor Energiprojekt AB?`, correct_answer: "5", trial_name: "a_Steamengine_3_qa_2"} 
};var a_Steamengine_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántas libras de vapor por kilovatio hora utiliza el motor Energiprojekt AB?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántas libras de vapor por kilovatio hora utiliza el motor Energiprojekt AB?`, correct_answer: "8,8", trial_name: "a_Steamengine_3_qa_3"} 
};var a_Steamengine_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué porcentaje de la eficiencia de un motor de alta presión ha conseguido el motor Energiprojekt AB?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué porcentaje de la eficiencia de un motor de alta presión ha conseguido el motor Energiprojekt AB?`, correct_answer: "27-30 %", trial_name: "a_Steamengine_3_qa_4"} 
};var a_Oxygen_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">En <span id="a_Oxygen_1_qa_1">1891</span>, el químico escocés <span id="a_Oxygen_1_qa_0">James Dewar</span> fue capaz de producir suficiente oxígeno líquido para estudiar. El primer proceso comercialmente viable para producir oxígeno líquido fue desarrollado independientemente en <span id="a_Oxygen_1_qa_2">1895</span> por el ingeniero alemán Carl von Linde y el ingeniero británico William Hampson. Ambos bajaron la temperatura del aire hasta licuarse y luego destilaron los gases que lo componen, hirviéndolos uno por uno y recogiéndolos. Más tarde, en 1901, se demostró por primera vez la <span id="a_Oxygen_1_qa_3">soldadura oxiacetilénica</span> quemando una mezcla de acetileno y O2 comprimido. Este método de soldar y cortar el metal se volvió común más tarde.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Oxygen_1_qa_0','#a_Oxygen_1_qa_1','#a_Oxygen_1_qa_2','#a_Oxygen_1_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Oxygen_1_1280_720.png';
a.click();});}},data: { trial_name: "a_Oxygen_1"}
};
var a_Oxygen_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué químico logró producir suficiente oxígeno líquido para utilizarlo en el estudio?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué químico logró producir suficiente oxígeno líquido para utilizarlo en el estudio?`, correct_answer: "James Dewar", trial_name: "a_Oxygen_1_qa_0"} 
};var a_Oxygen_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué año experimentó Dewar con oxígeno líquido?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué año experimentó Dewar con oxígeno líquido?`, correct_answer: "1891", trial_name: "a_Oxygen_1_qa_1"} 
};var a_Oxygen_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo se desarrolló el oxígeno líquido para uso comercial?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo se desarrolló el oxígeno líquido para uso comercial?`, correct_answer: "1895", trial_name: "a_Oxygen_1_qa_2"} 
};var a_Oxygen_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué proceso de soldadura se demostró en 1901?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué proceso de soldadura se demostró en 1901?`, correct_answer: "soldadura oxiacetilénica", trial_name: "a_Oxygen_1_qa_3"} 
};var a_1973oilcrisis_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">En <span id="a_1973oilcrisis_2_qa_1">1973</span>, Nixon nombró a <span id="a_1973oilcrisis_2_qa_0">William E. Simon</span> primer Administrador de la Oficina Federal de Energía, una organización a corto plazo creada <span id="a_1973oilcrisis_2_qa_2">para coordinar la respuesta al embargo</span>. Simon asignó a los estados la misma cantidad de petróleo nacional para 1974 que cada uno había consumido en 1972, lo que funcionó para los estados cuyas poblaciones no estaban aumentando. En otros estados, las colas en las gasolineras eran frecuentes. La Asociación Americana del Automóvil informó que en la última semana de febrero de 1974, el <span id="a_1973oilcrisis_2_qa_3">20 %</span> de las gasolineras estadounidenses no tenían combustible.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Quién es el primer administrador de la Oficina Federal de Energía?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién es el primer administrador de la Oficina Federal de Energía?`, correct_answer: "William E. Simon", trial_name: "a_1973oilcrisis_2_qa_0"} 
};var a_1973oilcrisis_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo fue elegido por Nixon?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo fue elegido por Nixon?`, correct_answer: "1973", trial_name: "a_1973oilcrisis_2_qa_1"} 
};var a_1973oilcrisis_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Por qué se creó esta organización a corto plazo?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Por qué se creó esta organización a corto plazo?`, correct_answer: "para coordinar la respuesta al embargo", trial_name: "a_1973oilcrisis_2_qa_2"} 
};var a_1973oilcrisis_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Según la AAA, ¿cuál es el porcentaje de las gasolineras que se quedaron sin gasolina?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Según la AAA, ¿cuál es el porcentaje de las gasolineras que se quedaron sin gasolina?`, correct_answer: "20 %", trial_name: "a_1973oilcrisis_2_qa_3"} 
};var a_Apolloprogram_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Con un presupuesto de 230 000 $, los datos de transmisión lunar originales que sobrevivieron del Apolo 11 fueron compilados por <span id="a_Apolloprogram_4_qa_0">Nafzger</span> y asignados a <span id="a_Apolloprogram_4_qa_3">Lowry Digital</span> para su restauración. El vídeo se procesó para eliminar el ruido aleatorio y la vibración de la cámara <span id="a_Apolloprogram_4_qa_1">sin destruir la legitimidad histórica</span>. Las imágenes eran de cintas de Australia, del archivo de CBS News, y de grabaciones <span id="a_Apolloprogram_4_qa_2">de cinescopio</span> hechas en el Centro Espacial Johnson. El vídeo restaurado, que permanece en <span id="a_Apolloprogram_4_qa_4">blanco y negro</span>, contiene mejoras digitales conservadoras y no incluye mejoras en la calidad del sonido.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Quién recopiló los datos de aterrizaje originales del Apolo 11?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién recopiló los datos de aterrizaje originales del Apolo 11?`, correct_answer: "Nafzger", trial_name: "a_Apolloprogram_4_qa_0"} 
};var a_Apolloprogram_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Se pudieron restaurar y procesar las cintas sin destruir la legitimidad histórica o algunos aspectos de las cintas perdieron legitimidad?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Se pudieron restaurar y procesar las cintas sin destruir la legitimidad histórica o algunos aspectos de las cintas perdieron legitimidad?`, correct_answer: "sin destruir la legitimidad histórica", trial_name: "a_Apolloprogram_4_qa_1"} 
};var a_Apolloprogram_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué tipo de grabaciones en el Centro Espacial Johnson se usaron para ayudar a restaurar las cintas originales?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué tipo de grabaciones en el Centro Espacial Johnson se usaron para ayudar a restaurar las cintas originales?`, correct_answer: "de cinescopio", trial_name: "a_Apolloprogram_4_qa_2"} 
};var a_Apolloprogram_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A qué empresa se le encargó la tarea de restaurar las cintas originales?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A qué empresa se le encargó la tarea de restaurar las cintas originales?`, correct_answer: "Lowry Digital", trial_name: "a_Apolloprogram_4_qa_3"} 
};var a_Apolloprogram_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Se pudo añadir color a las cintas restauradas para mejorar la imagen o permanecieron en blanco y negro?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Se pudo añadir color a las cintas restauradas para mejorar la imagen o permanecieron en blanco y negro?`, correct_answer: "blanco y negro", trial_name: "a_Apolloprogram_4_qa_4"} 
};var a_Amazonrainforest_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Las necesidades de los agricultores de <span id="a_Amazonrainforest_2_qa_0">soja</span> se han utilizado para justificar muchos de los controvertidos proyectos de transporte que se están desarrollando actualmente en la Amazonía. Las primeras dos carreteras abrieron con éxito la selva tropical y causaron un <span id="a_Amazonrainforest_2_qa_1">aumento de asentamientos y de la deforestación</span>. La tasa media anual de deforestación de 2000 a 2005 (22 392 km2 o <span id="a_Amazonrainforest_2_qa_2">8646 millas cuadradas</span> al año) fue un <span id="a_Amazonrainforest_2_qa_4">18 %</span> más alta que en los cinco años anteriores (19 018 km2 o 7343 millas cuadradas por año). Aunque la deforestación ha <span id="a_Amazonrainforest_2_qa_3">disminuido significativamente</span> en la Amazonía brasileña entre 2004 y 2014, ha habido un aumento hasta la actualidad.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Para qué tipo de agricultores se construyeron las carreteras en la selva amazónica?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Para qué tipo de agricultores se construyeron las carreteras en la selva amazónica?`, correct_answer: "soja", trial_name: "a_Amazonrainforest_2_qa_0"} 
};var a_Amazonrainforest_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A qué dio lugar la creación de carreteras en la selva amazónica?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A qué dio lugar la creación de carreteras en la selva amazónica?`, correct_answer: "aumento de asentamientos y de la deforestación", trial_name: "a_Amazonrainforest_2_qa_1"} 
};var a_Amazonrainforest_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿De cuántas millas cuadradas por año fue la tasa de tala de bosques entre 2000 y 2005?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿De cuántas millas cuadradas por año fue la tasa de tala de bosques entre 2000 y 2005?`, correct_answer: "8646 millas cuadradas", trial_name: "a_Amazonrainforest_2_qa_2"} 
};var a_Amazonrainforest_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué pasó con la tasa de deforestación en la región amazónica de Brasil entre 2004 y 2014?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué pasó con la tasa de deforestación en la región amazónica de Brasil entre 2004 y 2014?`, correct_answer: "disminuido significativamente", trial_name: "a_Amazonrainforest_2_qa_3"} 
};var a_Amazonrainforest_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuánto más alta fue la tasa de deforestación de 2000 a 2005, en comparación con 1995 a 2000?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuánto más alta fue la tasa de deforestación de 2000 a 2005, en comparación con 1995 a 2000?`, correct_answer: "18 %", trial_name: "a_Amazonrainforest_2_qa_4"} 
};var a_Amazonrainforest_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Los ambientalistas están preocupados por la pérdida de <span id="a_Amazonrainforest_3_qa_0">biodiversidad</span> que se producirá como resultado de la <span id="a_Amazonrainforest_3_qa_1">destrucción del bosque</span>, y también por la liberación del <span id="a_Amazonrainforest_3_qa_2">carbono contenido en la vegetación</span>, que podría acelerar el calentamiento global. Los bosques perennes amazónicos representan alrededor del 10 % de la productividad primaria terrestre mundial y el <span id="a_Amazonrainforest_3_qa_3">10 %</span> de los depósitos de carbono en los ecosistemas, del orden de <span id="a_Amazonrainforest_3_qa_4">1,1 × 1011</span> toneladas métricas de carbono. Se estima que los bosques amazónicos han acumulado 0,62 ± 0,37 toneladas de carbono por hectárea y año entre 1975 y 1996.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué preocupa perder a los ambientalistas en la selva amazónica?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué preocupa perder a los ambientalistas en la selva amazónica?`, correct_answer: "biodiversidad", trial_name: "a_Amazonrainforest_3_qa_0"} 
};var a_Amazonrainforest_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿De qué se deriva la pérdida de biodiversidad, según los ambientalistas?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿De qué se deriva la pérdida de biodiversidad, según los ambientalistas?`, correct_answer: "destrucción del bosque", trial_name: "a_Amazonrainforest_3_qa_1"} 
};var a_Amazonrainforest_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué es lo que preocupa a los ambientalistas que se haya liberado de la región amazónica?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué es lo que preocupa a los ambientalistas que se haya liberado de la región amazónica?`, correct_answer: "carbono contenido en la vegetación", trial_name: "a_Amazonrainforest_3_qa_2"} 
};var a_Amazonrainforest_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué cantidad de carbono del mundo se almacena en la selva amazónica?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué cantidad de carbono del mundo se almacena en la selva amazónica?`, correct_answer: "10 %", trial_name: "a_Amazonrainforest_3_qa_3"} 
};var a_Amazonrainforest_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántas toneladas métricas de carbono se cree que están almacenadas en la selva amazónica?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántas toneladas métricas de carbono se cree que están almacenadas en la selva amazónica?`, correct_answer: "1,1 × 1011", trial_name: "a_Amazonrainforest_3_qa_4"} 
};var a_Amazonrainforest_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">En <span id="a_Amazonrainforest_4_qa_0">2010</span>, la selva amazónica sufrió otra severa sequía, en algunos aspectos más extrema que la sequía de 2005. La región afectada era de aproximadamente <span id="a_Amazonrainforest_4_qa_1">1 160 000 000</span> millas cuadradas (3 000 000 km2) de selva tropical, en comparación con 734 000 000 millas cuadradas (1 900 000 km2) en 2005. La sequía de 2010 tuvo <span id="a_Amazonrainforest_4_qa_2">tres epicentros</span> donde murió la vegetación, mientras que en <span id="a_Amazonrainforest_4_qa_3">2005</span> la sequía se concentró en la parte suroeste. Los estudios se publicaron en la revista Science. En un año normal, el Amazonas absorbe <span id="a_Amazonrainforest_4_qa_4">1,5 gigatoneladas</span> de dióxido de carbono; en 2005 se liberaron 5 gigatoneladas y en 2010 se liberaron 8 gigatoneladas.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Amazonrainforest_4_qa_0','#a_Amazonrainforest_4_qa_1','#a_Amazonrainforest_4_qa_2','#a_Amazonrainforest_4_qa_3','#a_Amazonrainforest_4_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Amazonrainforest_4_1280_720.png';
a.click();});}},data: { trial_name: "a_Amazonrainforest_4"}
};
var a_Amazonrainforest_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué año experimentó la Amazonia una sequía que puede haber sido más extrema que en 2005?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué año experimentó la Amazonia una sequía que puede haber sido más extrema que en 2005?`, correct_answer: "2010", trial_name: "a_Amazonrainforest_4_qa_0"} 
};var a_Amazonrainforest_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántas millas cuadradas tuvo la región afectada por la sequía de 2010?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántas millas cuadradas tuvo la región afectada por la sequía de 2010?`, correct_answer: "1 160 000 000", trial_name: "a_Amazonrainforest_4_qa_1"} 
};var a_Amazonrainforest_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántas áreas se vieron afectadas por la muerte de la vegetación en la sequía de 2010?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántas áreas se vieron afectadas por la muerte de la vegetación en la sequía de 2010?`, correct_answer: "tres epicentros", trial_name: "a_Amazonrainforest_4_qa_2"} 
};var a_Amazonrainforest_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué año la parte sur de la selva amazónica se vio afectada principalmente por la sequía?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué año la parte sur de la selva amazónica se vio afectada principalmente por la sequía?`, correct_answer: "2005", trial_name: "a_Amazonrainforest_4_qa_3"} 
};var a_Amazonrainforest_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántas toneladas de carbono se absorben en la Amazonía en un año normal?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántas toneladas de carbono se absorben en la Amazonía en un año normal?`, correct_answer: "1,5 gigatoneladas", trial_name: "a_Amazonrainforest_4_qa_4"} 
};var a_FresnoCalifornia_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">El "<span id="a_FresnoCalifornia_0_qa_4">West Side</span>" de Fresno, también llamado "<span id="a_FresnoCalifornia_0_qa_0">Southwest Fresno</span>", es uno de los barrios más antiguos de la ciudad. El vecindario se encuentra al <span id="a_FresnoCalifornia_0_qa_1">suroeste</span> de la autopista 99 (que lo divide desde el centro de Fresno), al oeste de la autopista 41 y al sur de la Avenida Nielsen (o la recién construida Autopista 180) y se extiende hasta los límites de la ciudad hacia el oeste y el sur. El barrio se considera tradicionalmente el centro de la comunidad <span id="a_FresnoCalifornia_0_qa_2">afroamericana</span> de Fresno. Es culturalmente diversa y también incluye importantes poblaciones mexicano-americanas y asiático-americanas (principalmente <span id="a_FresnoCalifornia_0_qa_3">Hmong o Laotian</span>).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es otro nombre para el West Side de Fresno?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es otro nombre para el West Side de Fresno?`, correct_answer: "Southwest Fresno", trial_name: "a_FresnoCalifornia_0_qa_0"} 
};var a_FresnoCalifornia_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué dirección se encuentra el barrio West Side de Fresno en la autopista 99?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué dirección se encuentra el barrio West Side de Fresno en la autopista 99?`, correct_answer: "suroeste", trial_name: "a_FresnoCalifornia_0_qa_1"} 
};var a_FresnoCalifornia_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿De qué comunidad étnica es centro West Side de Fresno?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿De qué comunidad étnica es centro West Side de Fresno?`, correct_answer: "afroamericana", trial_name: "a_FresnoCalifornia_0_qa_2"} 
};var a_FresnoCalifornia_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuáles son los dos principales grupos asiático-americanos que viven en el barrio West Side de Fresno?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuáles son los dos principales grupos asiático-americanos que viven en el barrio West Side de Fresno?`, correct_answer: "Hmong o Laotian", trial_name: "a_FresnoCalifornia_0_qa_3"} 
};var a_FresnoCalifornia_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué barrio se encuentra al oeste de la autopista 41?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué barrio se encuentra al oeste de la autopista 41?`, correct_answer: "West Side", trial_name: "a_FresnoCalifornia_0_qa_4"} 
};var a_FresnoCalifornia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">A Fresno se puede acceder por la <span id="a_FresnoCalifornia_3_qa_0">carretera estatal 99</span>, la principal autopista norte/sur que conecta los principales centros de población del Valle Central de California. La carretera estatal 168, la <span id="a_FresnoCalifornia_3_qa_1">autopista Sierra</span>, se dirige al este hacia la ciudad de Clovis y Huntington Lake. La <span id="a_FresnoCalifornia_3_qa_2">carretera estatal 41</span> (autopista Yosemite Freeway/autopista Eisenhower) llega a Fresno desde Atascadero en el sur, y luego se dirige al norte hacia Yosemite. La carretera estatal 180 (autopista de Kings Canyon) viene desde el <span id="a_FresnoCalifornia_3_qa_3">oeste</span> a través de Mendota, y desde el este en el Parque Nacional Kings Canyon en dirección a la ciudad de Reedley.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué ruta conecta Fresno con el Valle Central de California?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué ruta conecta Fresno con el Valle Central de California?`, correct_answer: "carretera estatal 99", trial_name: "a_FresnoCalifornia_3_qa_0"} 
};var a_FresnoCalifornia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es otro nombre para la carretera estatal 168?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es otro nombre para la carretera estatal 168?`, correct_answer: "autopista Sierra", trial_name: "a_FresnoCalifornia_3_qa_1"} 
};var a_FresnoCalifornia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es otro nombre para la autopista Yosemite?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es otro nombre para la autopista Yosemite?`, correct_answer: "carretera estatal 41", trial_name: "a_FresnoCalifornia_3_qa_2"} 
};var a_FresnoCalifornia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿De qué dirección viene la carretera estatal 180 a través de Mendota?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿De qué dirección viene la carretera estatal 180 a través de Mendota?`, correct_answer: "oeste", trial_name: "a_FresnoCalifornia_3_qa_3"} 
};var a_Geology_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Geology_4_qa_0">James Hutton</span> a menudo se considera el primer geólogo moderno. En 1785 presentó un documento titulado <span id="a_Geology_4_qa_1">Teoría de la Tierra</span> a la Sociedad Real de Edimburgo. En su artículo, explicó su teoría de que la Tierra <span id="a_Geology_4_qa_3">debe ser mucho más antigua de lo que se suponía</span> para que hubiera tiempo suficiente para que las montañas se erosionaran y los sedimentos formaran nuevas rocas en el fondo del mar, que a su vez se elevaron para convertirse en tierra seca. Hutton publicó una versión en dos volúmenes de sus ideas en <span id="a_Geology_4_qa_2">1795</span> (Vol. 1, Vol. 2).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿A quién se considera el primer geólogo moderno?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A quién se considera el primer geólogo moderno?`, correct_answer: "James Hutton", trial_name: "a_Geology_4_qa_0"} 
};var a_Geology_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué documento presentó James Hutton en 1785 a la Sociedad Real de Edimburgo?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué documento presentó James Hutton en 1785 a la Sociedad Real de Edimburgo?`, correct_answer: "Teoría de la Tierra", trial_name: "a_Geology_4_qa_1"} 
};var a_Geology_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué año publicó James Hutton una versión de dos volúmenes de sus teorías?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué año publicó James Hutton una versión de dos volúmenes de sus teorías?`, correct_answer: "1795", trial_name: "a_Geology_4_qa_2"} 
};var a_Geology_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál fue la idea principal del artículo de James Hutton?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál fue la idea principal del artículo de James Hutton?`, correct_answer: "debe ser mucho más antigua de lo que se suponía", trial_name: "a_Geology_4_qa_3"} 
};var a_AmericanBroadcastingCompany_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">En el año 2000, ABC lanzó una campaña de promoción en la web centrada en su <span id="a_AmericanBroadcastingCompany_0_qa_0">logotipo de círculo</span>, también llamado "<span id="a_AmericanBroadcastingCompany_0_qa_3">el punto</span>", en el que el personaje del cómic Little Dot incitaba a los visitantes a "descargar el punto", un programa que haría que el logotipo de ABC volara alrededor de la pantalla y se asentara en la esquina inferior derecha. La red contrató al <span id="a_AmericanBroadcastingCompany_0_qa_1">Troika Design Group</span> para diseñar y producir su identidad 2001-02, la cual continuó usando el <span id="a_AmericanBroadcastingCompany_0_qa_2">negro y amarillo</span> para colorear el logotipo e incluyó puntos y rayas en varios puntos promocionales y de identificación.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿En qué estaba enfocada la campaña centrada en Internet de ABC en el año 2000?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué estaba enfocada la campaña centrada en Internet de ABC en el año 2000?`, correct_answer: "logotipo de círculo", trial_name: "a_AmericanBroadcastingCompany_0_qa_0"} 
};var a_AmericanBroadcastingCompany_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién fue contratado para producir la identidad 2001-02 de ABC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién fue contratado para producir la identidad 2001-02 de ABC?`, correct_answer: "Troika Design Group", trial_name: "a_AmericanBroadcastingCompany_0_qa_1"} 
};var a_AmericanBroadcastingCompany_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿De qué colores fue el logotipo de ABC de 2001?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿De qué colores fue el logotipo de ABC de 2001?`, correct_answer: "negro y amarillo", trial_name: "a_AmericanBroadcastingCompany_0_qa_2"} 
};var a_AmericanBroadcastingCompany_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es el apodo del logotipo de la campaña de 2000 de ABC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es el apodo del logotipo de la campaña de 2000 de ABC?`, correct_answer: "el punto", trial_name: "a_AmericanBroadcastingCompany_0_qa_3"} 
};var a_Pharmacy_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">En la mayoría de los países, el dispensario está sujeto a <span id="a_Pharmacy_2_qa_0">legislación farmacéutica</span>; con requisitos para <span id="a_Pharmacy_2_qa_4">condiciones de almacenamiento, textos obligatorios, material, etc.</span>, especificados en la legislación. Aunque antes los farmacéuticos permanecían <span id="a_Pharmacy_2_qa_1">dentro del dispensario que componía/distribuía los medicamentos</span>, ha habido una tendencia creciente hacia el uso de técnicos farmacéuticos capacitados, mientras que el farmacéutico pasa más tiempo comunicándose con los pacientes. Los técnicos farmacéuticos ahora dependen más de la <span id="a_Pharmacy_2_qa_2">automatización</span> para ayudarles en su nuevo papel de tratar con <span id="a_Pharmacy_2_qa_3">las recetas de los pacientes y sus problemas de seguridad</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿A qué está sujeto el dispensario en la mayoría de los países?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A qué está sujeto el dispensario en la mayoría de los países?`, correct_answer: "legislación farmacéutica", trial_name: "a_Pharmacy_2_qa_0"} 
};var a_Pharmacy_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A qué responsabilidades se limitaban anteriormente los técnicos de farmacia?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A qué responsabilidades se limitaban anteriormente los técnicos de farmacia?`, correct_answer: "dentro del dispensario que componía/distribuía los medicamentos", trial_name: "a_Pharmacy_2_qa_1"} 
};var a_Pharmacy_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿De qué dependen cada vez más los técnicos farmacéuticos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿De qué dependen cada vez más los técnicos farmacéuticos?`, correct_answer: "automatización", trial_name: "a_Pharmacy_2_qa_2"} 
};var a_Pharmacy_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuáles son las nuevas responsabilidades de los técnicos de farmacia?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuáles son las nuevas responsabilidades de los técnicos de farmacia?`, correct_answer: "las recetas de los pacientes y sus problemas de seguridad", trial_name: "a_Pharmacy_2_qa_3"} 
};var a_Pharmacy_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué exige la legislación farmacéutica?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué exige la legislación farmacéutica?`, correct_answer: "condiciones de almacenamiento, textos obligatorios, material, etc.", trial_name: "a_Pharmacy_2_qa_4"} 
};var a_Construction_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">La <span id="a_Construction_0_qa_0">construcción</span> es el proceso de levantar un edificio o infraestructura. La construcción difiere de la fabricación en que la <span id="a_Construction_0_qa_1">fabricación</span> normalmente implica la producción en masa de artículos similares sin un comprador determinado, mientras que la construcción generalmente se lleva a cabo en un lugar determinado para <span id="a_Construction_0_qa_4">un cliente conocido</span>. La construcción como sector comprende del <span id="a_Construction_0_qa_2">seis al nueve por ciento</span> del producto interior bruto de los países desarrollados. La construcción comienza con la <span id="a_Construction_0_qa_3">planificación, el diseño [cita necesaria] y la financiación</span> y continúa hasta que el proyecto esté construido y listo para su uso.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es el proceso de construcción de un edificio o infraestructura?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es el proceso de construcción de un edificio o infraestructura?`, correct_answer: "construcción", trial_name: "a_Construction_0_qa_0"} 
};var a_Construction_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué implica normalmente la producción en masa de artículos similares sin un comprador determinado?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué implica normalmente la producción en masa de artículos similares sin un comprador determinado?`, correct_answer: "fabricación", trial_name: "a_Construction_0_qa_1"} 
};var a_Construction_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué porcentaje del producto interior bruto comprende la construcción?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué porcentaje del producto interior bruto comprende la construcción?`, correct_answer: "seis al nueve por ciento", trial_name: "a_Construction_0_qa_2"} 
};var a_Construction_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuáles son las tres cosas que se necesitan para que se lleve a cabo la construcción?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuáles son las tres cosas que se necesitan para que se lleve a cabo la construcción?`, correct_answer: "planificación, el diseño [cita necesaria] y la financiación", trial_name: "a_Construction_0_qa_3"} 
};var a_Construction_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">La construcción se lleva a cabo en un lugar determinado, ¿para quién?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `La construcción se lleva a cabo en un lugar determinado, ¿para quién?`, correct_answer: "un cliente conocido", trial_name: "a_Construction_0_qa_4"} 
};var a_Privateschool_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Las <span id="a_Privateschool_0_qa_0">Ergänzungsschulen</span> son escuelas secundarias o postsecundarias (no terciarias), que administran personas privadas, organizaciones privadas o en raras ocasiones, <span id="a_Privateschool_0_qa_3">grupos religiosos</span> y ofrecen un tipo de educación que no está disponible en las escuelas públicas. La mayoría de estas escuelas son escuelas <span id="a_Privateschool_0_qa_1">vocacionales</span>. Sin embargo, estas escuelas de formación profesional no forman parte del sistema educativo dual alemán. Las Ergänzungsschulen tienen la libertad de funcionar fuera de las normas gubernamentales y se financian en su totalidad cobrando a sus estudiantes tasas de <span id="a_Privateschool_0_qa_2">matrícula</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se llaman las escuelas secundarias privadas en Alemania?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se llaman las escuelas secundarias privadas en Alemania?`, correct_answer: "Ergänzungsschulen", trial_name: "a_Privateschool_0_qa_0"} 
};var a_Privateschool_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué tipo de escuelas son las más ergänzungsschulen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué tipo de escuelas son las más ergänzungsschulen?`, correct_answer: "vocacionales", trial_name: "a_Privateschool_0_qa_1"} 
};var a_Privateschool_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se financian las ergänzungsschulen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se financian las ergänzungsschulen?`, correct_answer: "matrícula", trial_name: "a_Privateschool_0_qa_2"} 
};var a_Privateschool_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Junto con los particulares y las organizaciones, ¿qué grupos a veces dirige ergänzungsschulen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Junto con los particulares y las organizaciones, ¿qué grupos a veces dirige ergänzungsschulen?`, correct_answer: "grupos religiosos", trial_name: "a_Privateschool_0_qa_3"} 
};var a_Privateschool_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Algunas de las escuelas más antiguas de Sudáfrica son escuelas eclesiásticas privadas que fueron establecidas por misioneros a principios del siglo <span id="a_Privateschool_2_qa_4">XIX</span>. El sector privado ha crecido desde entonces. Después de la abolición del apartheid, las leyes que rigen la educación privada en Sudáfrica cambiaron significativamente. La <span id="a_Privateschool_2_qa_0">Ley de Escuelas Sudafricanas</span> de <span id="a_Privateschool_2_qa_1">1996</span> reconoce dos categorías de escuelas: escuelas "públicas" (controladas por el estado) e "<span id="a_Privateschool_2_qa_2">independientes</span>" (que incluyen <span id="a_Privateschool_2_qa_3">escuelas privadas tradicionales</span> y escuelas que son administradas de forma privada [se necesitan aclaraciones].)</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué ley sudafricana reconoce dos tipos de escuelas?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué ley sudafricana reconoce dos tipos de escuelas?`, correct_answer: "Ley de Escuelas Sudafricanas", trial_name: "a_Privateschool_2_qa_0"} 
};var a_Privateschool_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué año se aprobó la Ley de Escuelas de Sudáfrica?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué año se aprobó la Ley de Escuelas de Sudáfrica?`, correct_answer: "1996", trial_name: "a_Privateschool_2_qa_1"} 
};var a_Privateschool_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Junto con las escuelas públicas, ¿qué tipo de escuela se reconoce en la Ley de Escuelas de Sudáfrica?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Junto con las escuelas públicas, ¿qué tipo de escuela se reconoce en la Ley de Escuelas de Sudáfrica?`, correct_answer: "independientes", trial_name: "a_Privateschool_2_qa_2"} 
};var a_Privateschool_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">En Sudáfrica, junto con las escuelas privadas, ¿qué escuelas están clasificadas como independientes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `En Sudáfrica, junto con las escuelas privadas, ¿qué escuelas están clasificadas como independientes?`, correct_answer: "escuelas privadas tradicionales", trial_name: "a_Privateschool_2_qa_3"} 
};var a_Privateschool_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué siglo establecieron los misioneros escuelas eclesiásticas en Sudáfrica?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué siglo establecieron los misioneros escuelas eclesiásticas en Sudáfrica?`, correct_answer: "XIX", trial_name: "a_Privateschool_2_qa_4"} 
};var a_HarvardUniversity_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">La admisión de estudiantes universitarios a Harvard es caracterizada por la Fundación Carnegie como "más selectiva, menos transferible". La Universidad de Harvard aceptó un <span id="a_HarvardUniversity_3_qa_0">5,3 %</span> de los solicitantes para la clase de 2019, una cifra récord y la segunda tasa de aceptación más baja entre todas las universidades nacionales. La Universidad de Harvard terminó su programa de admisión temprana en <span id="a_HarvardUniversity_3_qa_1">2007</span>, ya que se creía que el programa <span id="a_HarvardUniversity_3_qa_2">perjudicaba a los solicitantes de minorías de bajos ingresos e infrarrepresentados</span> que solicitaban admisión en universidades selectivas, pero para la clase de <span id="a_HarvardUniversity_3_qa_3">2016</span> se reintrodujo un programa de Acción Temprana.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es la tasa de admisión de los solicitantes para la clase de 2019?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es la tasa de admisión de los solicitantes para la clase de 2019?`, correct_answer: "5,3 %", trial_name: "a_HarvardUniversity_3_qa_0"} 
};var a_HarvardUniversity_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué año terminó Harvard su programa de admisión anticipada?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué año terminó Harvard su programa de admisión anticipada?`, correct_answer: "2007", trial_name: "a_HarvardUniversity_3_qa_1"} 
};var a_HarvardUniversity_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Por qué terminó Harvard su programa de admisión anticipada?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Por qué terminó Harvard su programa de admisión anticipada?`, correct_answer: "perjudicaba a los solicitantes de minorías de bajos ingresos e infrarrepresentados", trial_name: "a_HarvardUniversity_3_qa_2"} 
};var a_HarvardUniversity_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué año se reintrodujo un programa de admisión anticipada?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué año se reintrodujo un programa de admisión anticipada?`, correct_answer: "2016", trial_name: "a_HarvardUniversity_3_qa_3"} 
};var a_JacksonvilleFlorida_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_JacksonvilleFlorida_0_qa_0">Jacksonville</span> es la ciudad más grande por población del estado de Florida y la ciudad más grande por área en los Estados Unidos contiguos. Es la sede del <span id="a_JacksonvilleFlorida_0_qa_3">Condado de Duval</span>, con el cual el gobierno de la ciudad se consolidó en <span id="a_JacksonvilleFlorida_0_qa_4">1968</span>. La consolidación le otorgó a Jacksonville su gran tamaño y colocó a la mayoría de su población metropolitana dentro de los límites de la ciudad; con una población estimada de 853 382 habitantes en 2014, es la ciudad más poblada de Florida y el sureste, y la <span id="a_JacksonvilleFlorida_0_qa_2">12.ª</span> más poblada de Estados Unidos. Jacksonville es la principal ciudad del área metropolitana de Jacksonville, con una población de <span id="a_JacksonvilleFlorida_0_qa_1">1 345 596</span> en 2010.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué ciudad de Florida tiene la mayor población?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué ciudad de Florida tiene la mayor población?`, correct_answer: "Jacksonville", trial_name: "a_JacksonvilleFlorida_0_qa_0"} 
};var a_JacksonvilleFlorida_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál fue la población de la ciudad de Jacksonville en 2010?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál fue la población de la ciudad de Jacksonville en 2010?`, correct_answer: "1 345 596", trial_name: "a_JacksonvilleFlorida_0_qa_1"} 
};var a_JacksonvilleFlorida_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Teniendo en cuenta solo la población, ¿cuál es la clasificación de Jacksonville en Estados Unidos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Teniendo en cuenta solo la población, ¿cuál es la clasificación de Jacksonville en Estados Unidos?`, correct_answer: "12.ª", trial_name: "a_JacksonvilleFlorida_0_qa_2"} 
};var a_JacksonvilleFlorida_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué condado reside Jacksonville?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué condado reside Jacksonville?`, correct_answer: "Condado de Duval", trial_name: "a_JacksonvilleFlorida_0_qa_3"} 
};var a_JacksonvilleFlorida_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿En qué año la consolidación hizo que Jacksonville se integrara en el Condado de Duval?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿En qué año la consolidación hizo que Jacksonville se integrara en el Condado de Duval?`, correct_answer: "1968", trial_name: "a_JacksonvilleFlorida_0_qa_4"} 
};var a_Yuandynasty_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">El historiador <span id="a_Yuandynasty_4_qa_0">Frederick W. Mote</span> escribió que el uso del término "clases sociales" para este sistema era engañoso, y que la posición de las personas dentro del sistema de cuatro clases no era una indicación de su poder social y riqueza, sino que solo implicaba "<span id="a_Yuandynasty_4_qa_1">grados de privilegio</span>" a los que tenían derecho institucional y legal, por lo que la posición de una persona dentro de las clases no era una garantía de su posición, ya que había chinos <span id="a_Yuandynasty_4_qa_2">ricos y socialmente consolidados</span>, mientras que había menos mongoles y semu ricos que mongoles y semu que <span id="a_Yuandynasty_4_qa_3">vivieran en la pobreza y fueran maltratados</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Quién pensó que el sistema de clases sociales del Yuan no debería llamarse clases sociales?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién pensó que el sistema de clases sociales del Yuan no debería llamarse clases sociales?`, correct_answer: "Frederick W. Mote", trial_name: "a_Yuandynasty_4_qa_0"} 
};var a_Yuandynasty_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué pensaba Mote que representaba realmente el sistema de clases Yuan?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué pensaba Mote que representaba realmente el sistema de clases Yuan?`, correct_answer: "grados de privilegio", trial_name: "a_Yuandynasty_4_qa_1"} 
};var a_Yuandynasty_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Con qué estado inesperado había muchos chinos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Con qué estado inesperado había muchos chinos?`, correct_answer: "ricos y socialmente consolidados", trial_name: "a_Yuandynasty_4_qa_2"} 
};var a_Yuandynasty_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Con qué estado inesperado había muchos mongoles?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Con qué estado inesperado había muchos mongoles?`, correct_answer: "vivieran en la pobreza y fueran maltratados", trial_name: "a_Yuandynasty_4_qa_3"} 
};var a_Kenya_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Kenia ocupa <span id="a_Kenya_0_qa_0">un puesto bajo</span> en el Índice de Percepción de la Corrupción (IPC) de Transparencia Internacional, una medida que intenta medir la prevalencia de <span id="a_Kenya_0_qa_1">corrupción del sector público</span> en varios países. En 2012, la nación la colocó <span id="a_Kenya_0_qa_2">en el puesto número 139</span> de 176 países en total en el IPC, con una puntuación de 27/100. Sin embargo, hay varios desarrollos bastante significativos con respecto a frenar la corrupción del gobierno de Kenia, por ejemplo, <span id="a_Kenya_0_qa_3">el establecimiento de una nueva e independiente Comisión de Ética y Anticorrupción</span> (EACC).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué puesto ocupa Kenia en la escala del IPC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué puesto ocupa Kenia en la escala del IPC?`, correct_answer: "un puesto bajo", trial_name: "a_Kenya_0_qa_0"} 
};var a_Kenya_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué mide la escala del IPC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué mide la escala del IPC?`, correct_answer: "corrupción del sector público", trial_name: "a_Kenya_0_qa_1"} 
};var a_Kenya_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué puesto ocupa Kenia en la escala en 2012?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué puesto ocupa Kenia en la escala en 2012?`, correct_answer: "en el puesto número 139", trial_name: "a_Kenya_0_qa_2"} 
};var a_Kenya_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo controla Kenia la corrupción?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo controla Kenia la corrupción?`, correct_answer: "el establecimiento de una nueva e independiente Comisión de Ética y Anticorrupción", trial_name: "a_Kenya_0_qa_3"} 
};var a_Kenya_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">El <span id="a_Kenya_1_qa_0">28 de febrero de 2008</span>, Kibaki y Odinga firmaron un acuerdo sobre la formación de un gobierno de coalición en el que Odinga se convertiría en el segundo <span id="a_Kenya_1_qa_1">primer ministro</span> de Kenia. Según el acuerdo, el presidente nombraría ministros del gabinete de las facciones <span id="a_Kenya_1_qa_2">PNU y ODM</span> dependiendo de <span id="a_Kenya_1_qa_3">la fuerza de cada partido en el parlamento</span>. El acuerdo estipulaba que el gabinete incluiría un vicepresidente y dos viceprimeros ministros. Después de los debates, el parlamento aprobó que la coalición se mantendría <span id="a_Kenya_1_qa_4">hasta el final del parlamento actual o hasta que alguna de las partes se retirara</span>.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Kenya_1_qa_0','#a_Kenya_1_qa_1','#a_Kenya_1_qa_2','#a_Kenya_1_qa_3','#a_Kenya_1_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Kenya_1_1280_720.png';
a.click();});}},data: { trial_name: "a_Kenya_1"}
};
var a_Kenya_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo firmaron Kibaki y Odinga un acuerdo sobre la formación del gobierno?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo firmaron Kibaki y Odinga un acuerdo sobre la formación del gobierno?`, correct_answer: "28 de febrero de 2008", trial_name: "a_Kenya_1_qa_0"} 
};var a_Kenya_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál sería el papel de Odinga en el gobierno?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál sería el papel de Odinga en el gobierno?`, correct_answer: "primer ministro", trial_name: "a_Kenya_1_qa_1"} 
};var a_Kenya_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿De dónde nombró el presidente a los miembros del gabinete?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿De dónde nombró el presidente a los miembros del gabinete?`, correct_answer: "PNU y ODM", trial_name: "a_Kenya_1_qa_2"} 
};var a_Kenya_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se determinó cuántos se nombrarían de cada facción?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se determinó cuántos se nombrarían de cada facción?`, correct_answer: "la fuerza de cada partido en el parlamento", trial_name: "a_Kenya_1_qa_3"} 
};var a_Kenya_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuánto duraría esta coalición?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuánto duraría esta coalición?`, correct_answer: "hasta el final del parlamento actual o hasta que alguna de las partes se retirara", trial_name: "a_Kenya_1_qa_4"} 
};var a_Kenya_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Con <span id="a_Kenya_2_qa_0">las fechas de juicio de la corte penal internacional</span> en 2013 tanto para el presidente Kenyatta como para el vicepresidente William Ruto en relación con las secuelas de las elecciones de 2007, <span id="a_Kenya_2_qa_1">el presidente de EE. UU., Barack Obama</span> eligió no visitar el país a mediados de 2013 durante su viaje africano. Más tarde en el verano, Kenyatta visitó <span id="a_Kenya_2_qa_2">China</span> por invitación del presidente Xi Jinping después de una parada en Rusia y no haber visitado Estados Unidos como presidente. En <span id="a_Kenya_2_qa_3">julio de 2015</span> Obama visitó Kenia, como el primer presidente estadounidense en visitar el país mientras estaba en el cargo.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál fue el resultado de las elecciones de 2007?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál fue el resultado de las elecciones de 2007?`, correct_answer: "las fechas de juicio de la corte penal internacional", trial_name: "a_Kenya_2_qa_0"} 
};var a_Kenya_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién decidió no visitar el país en 2013?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién decidió no visitar el país en 2013?`, correct_answer: "el presidente de EE. UU., Barack Obama", trial_name: "a_Kenya_2_qa_1"} 
};var a_Kenya_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué visita realizó Kenyatta por invitación del presidente?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué visita realizó Kenyatta por invitación del presidente?`, correct_answer: "China", trial_name: "a_Kenya_2_qa_2"} 
};var a_Kenya_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo visitó Obama a Kenia finalmente?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo visitó Obama a Kenia finalmente?`, correct_answer: "julio de 2015", trial_name: "a_Kenya_2_qa_3"} 
};var a_IntergovernmentalPanelonClimateChange_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_IntergovernmentalPanelonClimateChange_0_qa_1">El economista coreano</span> <span id="a_IntergovernmentalPanelonClimateChange_0_qa_0">Hoesung Lee</span> es el presidente del IPCC desde el 8 de octubre de 2015, tras la elección de la nueva Mesa del IPCC. Antes de estas elecciones, el IPCC fue dirigido por su vicepresidente <span id="a_IntergovernmentalPanelonClimateChange_0_qa_2">Ismail El Gizouli</span>, quien fue designado presidente interino después de la renuncia de Rajendra K. Pachauri en <span id="a_IntergovernmentalPanelonClimateChange_0_qa_4">febrero de 2015</span>. Los presidentes anteriores fueron Rajendra K. Pachauri, elegido en mayo de 2002;,Robert Watson en 1997 y <span id="a_IntergovernmentalPanelonClimateChange_0_qa_3">Bert Bolin</span> en 1988. El presidente es asistido por una oficina elegida que incluye vicepresidentes, copresidentes de grupos de trabajo y una secretaría.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Quién es el presidente del IPCC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién es el presidente del IPCC?`, correct_answer: "Hoesung Lee", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_0"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿De qué nacionalidad es Hoesung Lee?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿De qué nacionalidad es Hoesung Lee?`, correct_answer: "El economista coreano", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_1"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién es el vicepresidente del IPCC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién es el vicepresidente del IPCC?`, correct_answer: "Ismail El Gizouli", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_2"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién fue el primer presidente del IPCC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién fue el primer presidente del IPCC?`, correct_answer: "Bert Bolin", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_3"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo renunció Pachauri como presidente del IPCC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo renunció Pachauri como presidente del IPCC?`, correct_answer: "febrero de 2015", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_4"} 
};var a_IntergovernmentalPanelonClimateChange_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Esta proyección no se incluyó en el resumen final de los legisladores. Desde entonces, el IPCC ha reconocido que <span id="a_IntergovernmentalPanelonClimateChange_2_qa_0">la fecha</span> es incorrecta, mientras reafirma que la conclusión en el resumen final fue sólida. Expresaron su pesar por <span id="a_IntergovernmentalPanelonClimateChange_2_qa_1">"la mala aplicación de los procedimientos bien establecidos por parte del IPCC en este caso"</span>. La fecha de 2035 ha sido citada correctamente por el IPCC desde <span id="a_IntergovernmentalPanelonClimateChange_2_qa_2">el informe WWF</span>, que ha citado erróneamente su propia fuente, un informe ICSI <span id="a_IntergovernmentalPanelonClimateChange_2_qa_3">"Variaciones de nieve y hielo en el pasado y en la actualidad a una escala global y regional”</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué dijo el IPCC que estaba equivocado?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué dijo el IPCC que estaba equivocado?`, correct_answer: "la fecha", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_0"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Por qué se disculpó el IPCC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Por qué se disculpó el IPCC?`, correct_answer: "la mala aplicación de los procedimientos bien establecidos por parte del IPCC en este caso", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_1"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál fue la fuente del error?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál fue la fuente del error?`, correct_answer: "el informe WWF", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_2"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué informe tenía la fecha correcta?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué informe tenía la fecha correcta?`, correct_answer: "Variaciones de nieve y hielo en el pasado y en la actualidad a una escala global y regional”", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_3"} 
};var a_Chloroplast_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Estos cloroplastos, que se remontan directamente a un ancestro cianobacteriano, se conocen como plastidios primarios ("plástido" en este contexto significa casi lo mismo que <span id="a_Chloroplast_1_qa_0">cloroplasto</span>). Todos los cloroplastos primarios pertenecen a uno de <span id="a_Chloroplast_1_qa_1">tres linajes de cloroplastos</span>: el linaje de cloroplastos de glaucofito, el rodófito o <span id="a_Chloroplast_1_qa_2">linaje de cloroplastos de algas rojas</span> o el cloroplástida o <span id="a_Chloroplast_1_qa_3">linaje de cloroplastos verdes</span>. Los dos segundos son los más grandes, y <span id="a_Chloroplast_1_qa_4">el linaje de cloroplasto verde</span> es el que contiene las plantas terrestres.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué significa 'plástido'?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué significa 'plástido'?`, correct_answer: "cloroplasto", trial_name: "a_Chloroplast_1_qa_0"} 
};var a_Chloroplast_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántos linajes de cloroplastos hay?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántos linajes de cloroplastos hay?`, correct_answer: "tres linajes de cloroplastos", trial_name: "a_Chloroplast_1_qa_1"} 
};var a_Chloroplast_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué significa rodófito?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué significa rodófito?`, correct_answer: "linaje de cloroplastos de algas rojas", trial_name: "a_Chloroplast_1_qa_2"} 
};var a_Chloroplast_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué significa cloroplástida?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué significa cloroplástida?`, correct_answer: "linaje de cloroplastos verdes", trial_name: "a_Chloroplast_1_qa_3"} 
};var a_Chloroplast_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué linaje incluye plantas terrestres?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué linaje incluye plantas terrestres?`, correct_answer: "el linaje de cloroplasto verde", trial_name: "a_Chloroplast_1_qa_4"} 
};var a_Chloroplast_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Hay algunas ideas falsas comunes sobre las membranas de cloroplasto exterior e interior. El hecho de que los cloroplastos estén <span id="a_Chloroplast_4_qa_0">rodeados por una membrana doble</span> a menudo se cita como evidencia de que son descendientes de cianobacterias endosimbióticas. Esto a menudo se interpreta como que la membrana externa de cloroplasto es <span id="a_Chloroplast_4_qa_1">el producto de la membrana celular del huésped que se pliega para formar una vesícula que rodea la cianobacteria ancestral</span>, lo cual no es cierto, ya que ambas membranas de cloroplasto son <span id="a_Chloroplast_4_qa_2">homólogas</span> a las membranas dobles originales de la cianobacteria.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué evidencia hay de que los cloroplastos descienden de las cianobacterias endosimbióticas?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué evidencia hay de que los cloroplastos descienden de las cianobacterias endosimbióticas?`, correct_answer: "rodeados por una membrana doble", trial_name: "a_Chloroplast_4_qa_0"} 
};var a_Chloroplast_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué se piensa incorrectamente sobre la membrana externa de cloroplasto?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué se piensa incorrectamente sobre la membrana externa de cloroplasto?`, correct_answer: "el producto de la membrana celular del huésped que se pliega para formar una vesícula que rodea la cianobacteria ancestral", trial_name: "a_Chloroplast_4_qa_1"} 
};var a_Chloroplast_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se comparan ambas membranas de cloroplasto con las membranas dobles originales de la cianobacteria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se comparan ambas membranas de cloroplasto con las membranas dobles originales de la cianobacteria?`, correct_answer: "homólogas", trial_name: "a_Chloroplast_4_qa_2"} 
};var a_Rhine_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Entre Bingen y Bonn, el <span id="a_Rhine_0_qa_0"><span id="a_Rhine_0_qa_4">Rin Medio</span></span> fluye a través de la <span id="a_Rhine_0_qa_1"><span id="a_Rhine_0_qa_5">garganta del Rin</span></span>, una formación que creó la <span id="a_Rhine_0_qa_2">erosión</span>. La tasa de erosión igualó el levantamiento en la región, de tal manera que el río quedó en su nivel original mientras las tierras circundantes se elevaban. La garganta es bastante profunda y es el tramo del río que se conoce por sus muchos <span id="a_Rhine_0_qa_6">castillos y viñedos</span>. Es Patrimonio de la Humanidad de la UNESCO (2002) y conocido como "<span id="a_Rhine_0_qa_3"><span id="a_Rhine_0_qa_7">el Rin Romántico</span></span>", con más de 40 castillos y fortalezas de la Edad Media y muchos pueblos pintorescos y encantadores.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué fluye entre Bingen y Bonn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué fluye entre Bingen y Bonn?`, correct_answer: "Rin Medio", trial_name: "a_Rhine_0_qa_0"} 
};var a_Rhine_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué garganta hay entre Bingen y Bonn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué garganta hay entre Bingen y Bonn?`, correct_answer: "garganta del Rin", trial_name: "a_Rhine_0_qa_1"} 
};var a_Rhine_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se formó la garganta del Rin?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se formó la garganta del Rin?`, correct_answer: "erosión", trial_name: "a_Rhine_0_qa_2"} 
};var a_Rhine_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se llama la zona cerca de la garganta del Rin con castillos de la Edad Media?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se llama la zona cerca de la garganta del Rin con castillos de la Edad Media?`, correct_answer: "el Rin Romántico", trial_name: "a_Rhine_0_qa_3"} 
};var a_Rhine_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué fluye entre Bingen y Bonn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué fluye entre Bingen y Bonn?`, correct_answer: "Rin Medio", trial_name: "a_Rhine_0_qa_4"} 
};var a_Rhine_0_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Dónde fluye el Rin Medio entre Bingen y Bonn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Dónde fluye el Rin Medio entre Bingen y Bonn?`, correct_answer: "garganta del Rin", trial_name: "a_Rhine_0_qa_5"} 
};var a_Rhine_0_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Por qué es conocida la garganta del Rin?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Por qué es conocida la garganta del Rin?`, correct_answer: "castillos y viñedos", trial_name: "a_Rhine_0_qa_6"} 
};var a_Rhine_0_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se llama la sección de la garganta del Rin reconocida por la UNESCO?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se llama la sección de la garganta del Rin reconocida por la UNESCO?`, correct_answer: "el Rin Romántico", trial_name: "a_Rhine_0_qa_7"} 
};var a_Rhine_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">El Delta del <span id="a_Rhine_1_qa_0">Rin-Mosa</span>, la región natural más importante de los Países Bajos, comienza <span id="a_Rhine_1_qa_1">cerca de Millingen aan de Rijn</span>, cerca de la frontera entre los Países Bajos y Alemania, con la división del Rhin en Waal y Nederrijn. Dado que el Rin aporta la mayor parte del agua, el término más corto <span id="a_Rhine_1_qa_2">Delta del Rin</span> se utiliza con frecuencia. Sin embargo, este nombre también se utiliza para el delta del río donde desemboca el Rin en el lago Constanza, por lo que es mejor llamar al delta más grande del Rin-Mosa, o incluso delta del Rin-Mosa-Escalda, ya que el Escalda termina en el mismo delta.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se llama el Delta en los Países Bajos? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se llama el Delta en los Países Bajos? `, correct_answer: "Rin-Mosa", trial_name: "a_Rhine_1_qa_0"} 
};var a_Rhine_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Dónde comienza el Delta en los Países Bajos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Dónde comienza el Delta en los Países Bajos?`, correct_answer: "cerca de Millingen aan de Rijn", trial_name: "a_Rhine_1_qa_1"} 
};var a_Rhine_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es el apodo para el Delta en los Países Bajos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es el apodo para el Delta en los Países Bajos?`, correct_answer: "Delta del Rin", trial_name: "a_Rhine_1_qa_2"} 
};var a_ScottishParliament_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">En virtud del Acta de Escocia de 1978, se crearía una asamblea electa en <span id="a_ScottishParliament_0_qa_0">Edimburgo</span> siempre que la <span id="a_ScottishParliament_0_qa_1">mayoría</span> del electorado escocés votara a favor en un referéndum que se celebraría el 1 de marzo de 1979 y que representara al menos al 40 % del electorado total. El referéndum escocés de 1979 para establecer una Asamblea escocesa descentralizada <span id="a_ScottishParliament_0_qa_3">fracasó</span>. Aunque el voto fue de un <span id="a_ScottishParliament_0_qa_2">51,6 %</span> a favor de una Asamblea Escocesa, esta cifra no igualó el 40 % del umbral total del electorado que se consideró necesario para aprobar la medida, ya que el <span id="a_ScottishParliament_0_qa_4">32,9 %</span> de la población con derecho a voto no votó o no pudo hacerlo.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Dónde se crearía una asamblea electa, en virtud de la Ley de Escocia de 1978?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Dónde se crearía una asamblea electa, en virtud de la Ley de Escocia de 1978?`, correct_answer: "Edimburgo", trial_name: "a_ScottishParliament_0_qa_0"} 
};var a_ScottishParliament_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuántos de los electores escoceses tendrían que votar a favor en el referéndum?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuántos de los electores escoceses tendrían que votar a favor en el referéndum?`, correct_answer: "mayoría", trial_name: "a_ScottishParliament_0_qa_1"} 
};var a_ScottishParliament_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué porcentaje votó a favor de una Asamblea escocesa?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué porcentaje votó a favor de una Asamblea escocesa?`, correct_answer: "51,6 %", trial_name: "a_ScottishParliament_0_qa_2"} 
};var a_ScottishParliament_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo fue en 1979 el intento de establecer una Asamblea escocesa descentralizada?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo fue en 1979 el intento de establecer una Asamblea escocesa descentralizada?`, correct_answer: "fracasó", trial_name: "a_ScottishParliament_0_qa_3"} 
};var a_ScottishParliament_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué porcentaje de la población con derecho a voto de Escocia no votó realmente?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué porcentaje de la población con derecho a voto de Escocia no votó realmente?`, correct_answer: "32,9 %", trial_name: "a_ScottishParliament_0_qa_4"} 
};var a_Islamism_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Los movimientos <span id="a_Islamism_1_qa_0">islamistas</span> como los Hermanos Musulmanes, "son bien conocidos por proporcionar <span id="a_Islamism_1_qa_2">refugios, asistencia educativa, clínicas médicas gratuitas o de bajo coste, asistencia de vivienda</span> a estudiantes de fuera de la ciudad, grupos de asesoramiento estudiantil, organización de ceremonias matrimoniales en masa de bajo coste, para <span id="a_Islamism_1_qa_4">evitar las prohibitivamente costosas demandas de dote</span>, asistencia legal, instalaciones deportivas, y grupos de mujeres". Todo esto se contrapone muy favorablemente a gobiernos <span id="a_Islamism_1_qa_1">incompetentes, ineficientes o negligentes</span> cuyo compromiso con la justicia social se limita a la <span id="a_Islamism_1_qa_3">retórica</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué tipo de movimiento son los Hermanos Musulmanes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué tipo de movimiento son los Hermanos Musulmanes?`, correct_answer: "islamistas", trial_name: "a_Islamism_1_qa_0"} 
};var a_Islamism_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Con qué tipo de gobiernos locales se compara bien la jurisdicción de los Hermanos Musulmanes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Con qué tipo de gobiernos locales se compara bien la jurisdicción de los Hermanos Musulmanes?`, correct_answer: "incompetentes, ineficientes o negligentes", trial_name: "a_Islamism_1_qa_1"} 
};var a_Islamism_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Por qué tipo de ayuda a los estudiantes de fuera de la ciudad son conocidos los Hermanos Musulmanes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Por qué tipo de ayuda a los estudiantes de fuera de la ciudad son conocidos los Hermanos Musulmanes?`, correct_answer: "refugios, asistencia educativa, clínicas médicas gratuitas o de bajo coste, asistencia de vivienda", trial_name: "a_Islamism_1_qa_2"} 
};var a_Islamism_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A qué se limita el compromiso de un gobierno incompetente con la justicia social?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A qué se limita el compromiso de un gobierno incompetente con la justicia social?`, correct_answer: "retórica", trial_name: "a_Islamism_1_qa_3"} 
};var a_Islamism_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Por qué los Hermanos Musulmanes han facilitado ceremonias de matrimonio en masa de bajo coste?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Por qué los Hermanos Musulmanes han facilitado ceremonias de matrimonio en masa de bajo coste?`, correct_answer: "evitar las prohibitivamente costosas demandas de dote", trial_name: "a_Islamism_1_qa_4"} 
};var a_Islamism_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Durante muchos años, Sudán tuvo un régimen <span id="a_Islamism_3_qa_0">islamista</span> bajo el liderazgo de <span id="a_Islamism_3_qa_1">Hassan al-Turabi</span>. Su <span id="a_Islamism_3_qa_2">Frente Nacional Islámico</span> ganó influencia por primera vez cuando el General Gaafar al-Nimeiry invitó a miembros a formar parte de su gobierno en 1979. Turabi construyó una poderosa base económica con el <span id="a_Islamism_3_qa_3">dinero de sistemas bancarios islamistas extranjeros</span>, especialmente los vinculados con Arabia Saudita. También reclutó y construyó un cuadro de leales influyentes al colocar estudiantes simpatizantes en la <span id="a_Islamism_3_qa_4">universidad y academia militar</span> mientras se desempeñaba como ministro de educación.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué tipo de régimen gobernó Sudán durante muchos años?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué tipo de régimen gobernó Sudán durante muchos años?`, correct_answer: "islamista", trial_name: "a_Islamism_3_qa_0"} 
};var a_Islamism_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Quién era el líder del régimen islamista en Sudán?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Quién era el líder del régimen islamista en Sudán?`, correct_answer: "Hassan al-Turabi", trial_name: "a_Islamism_3_qa_1"} 
};var a_Islamism_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿A qué organización invitó el general Gaafar al-Nimeiry a los miembros de su gobierno?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿A qué organización invitó el general Gaafar al-Nimeiry a los miembros de su gobierno?`, correct_answer: "Frente Nacional Islámico", trial_name: "a_Islamism_3_qa_2"} 
};var a_Islamism_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo construyó Turabi una base económica sólida?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo construyó Turabi una base económica sólida?`, correct_answer: "dinero de sistemas bancarios islamistas extranjeros", trial_name: "a_Islamism_3_qa_3"} 
};var a_Islamism_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Dónde colocó Turabi a los estudiantes que simpatizaban con sus puntos de vista?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Dónde colocó Turabi a los estudiantes que simpatizaban con sus puntos de vista?`, correct_answer: "universidad y academia militar", trial_name: "a_Islamism_3_qa_4"} 
};var a_Imperialism_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">La Royal Geographical Society de Londres y otras sociedades geográficas de Europa tuvieron gran influencia y pudieron <span id="a_Imperialism_0_qa_4">financiar</span> a los viajeros que regresaban con historias de sus descubrimientos. Estas sociedades también sirvieron como un espacio para que los viajeros compartieran estas historias. Geógrafos <span id="a_Imperialism_0_qa_2">políticos</span> como Friedrich Ratzel de <span id="a_Imperialism_0_qa_0">Alemania</span> y Halford Mackinder de <span id="a_Imperialism_0_qa_1">Gran Bretaña</span> también apoyaron al imperialismo. Ratzel creía que la expansión era <span id="a_Imperialism_0_qa_3">necesaria</span> para la supervivencia de un estado, mientras que Mackinder apoyaba la expansión imperial de Gran Bretaña; estos dos argumentos dominaron la disciplina durante décadas.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Imperialism_0_qa_0','#a_Imperialism_0_qa_1','#a_Imperialism_0_qa_2','#a_Imperialism_0_qa_3','#a_Imperialism_0_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Imperialism_0_1280_720.png';
a.click();});}},data: { trial_name: "a_Imperialism_0"}
};
var a_Imperialism_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Dónde nació Friedrich Ratzel?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Dónde nació Friedrich Ratzel?`, correct_answer: "Alemania", trial_name: "a_Imperialism_0_qa_0"} 
};var a_Imperialism_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Dónde nació Halford Mackinder?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Dónde nació Halford Mackinder?`, correct_answer: "Gran Bretaña", trial_name: "a_Imperialism_0_qa_1"} 
};var a_Imperialism_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué clase de geógrafos eran Halford Mackinder y Friedrich Ratzel?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué clase de geógrafos eran Halford Mackinder y Friedrich Ratzel?`, correct_answer: "políticos", trial_name: "a_Imperialism_0_qa_2"} 
};var a_Imperialism_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué pensaba Friedrich Ratzel que el imperialismo era para el país?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué pensaba Friedrich Ratzel que el imperialismo era para el país?`, correct_answer: "necesaria", trial_name: "a_Imperialism_0_qa_3"} 
};var a_Imperialism_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo apoyaban las sociedades geográficas de Europa a determinados viajeros?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo apoyaban las sociedades geográficas de Europa a determinados viajeros?`, correct_answer: "financiar", trial_name: "a_Imperialism_0_qa_4"} 
};var a_FrenchandIndianWar_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">En Europa, el escenario norteamericano de la Guerra de los Siete Años no suele recibir un nombre distinto. Todo el conflicto internacional se conoce como la Guerra de los Siete Años. "Siete años" se refiere a los acontecimientos en Europa, desde la declaración oficial de guerra en <span id="a_FrenchandIndianWar_0_qa_0">1756 hasta la firma del tratado de paz en 1763</span>. Estas fechas no se corresponden con las luchas en el continente norteamericano, donde la contienda entre las dos potencias coloniales concluyó en gran medida en <span id="a_FrenchandIndianWar_0_qa_1">seis años</span>, desde la <span id="a_FrenchandIndianWar_0_qa_3">Batalla de Jumonville Glen</span> en 1754 hasta la captura de Montreal en <span id="a_FrenchandIndianWar_0_qa_2">1760</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué marco temporal abarca la Guerra de los Siete Años?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué marco temporal abarca la Guerra de los Siete Años?`, correct_answer: "1756 hasta la firma del tratado de paz en 1763", trial_name: "a_FrenchandIndianWar_0_qa_0"} 
};var a_FrenchandIndianWar_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuánto duró la lucha en la Guerra de los Siete Años?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuánto duró la lucha en la Guerra de los Siete Años?`, correct_answer: "seis años", trial_name: "a_FrenchandIndianWar_0_qa_1"} 
};var a_FrenchandIndianWar_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuándo fue tomada Montreal?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuándo fue tomada Montreal?`, correct_answer: "1760", trial_name: "a_FrenchandIndianWar_0_qa_2"} 
};var a_FrenchandIndianWar_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál fue la primera batalla en 1754?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál fue la primera batalla en 1754?`, correct_answer: "Batalla de Jumonville Glen", trial_name: "a_FrenchandIndianWar_0_qa_3"} 
};var a_Force_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Mediante la combinación de la definición de <span id="a_Force_3_qa_0">corriente eléctrica</span> como la velocidad de cambio de la carga eléctrica, una regla de multiplicación vectorial llamada <span id="a_Force_3_qa_2">Ley de Lorentz</span> describe la fuerza sobre una carga que se mueve en un campo magnético. La conexión entre la electricidad y el magnetismo permite la descripción de una <span id="a_Force_3_qa_1">fuerza electromagnética unificada</span> que actúa sobre una carga. Esta fuerza se puede escribir como una suma de la <span id="a_Force_3_qa_3">fuerza electrostática</span> (debido al campo eléctrico) y la fuerza magnética (debido al campo magnético). En pocas palabras, esta es la ley:</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Cuál es el tiempo de cambio de carga eléctrica?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cuál es el tiempo de cambio de carga eléctrica?`, correct_answer: "corriente eléctrica", trial_name: "a_Force_3_qa_0"} 
};var a_Force_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué fuerza magnética y eléctrica actúan sobre una carga?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué fuerza magnética y eléctrica actúan sobre una carga?`, correct_answer: "fuerza electromagnética unificada", trial_name: "a_Force_3_qa_1"} 
};var a_Force_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Cómo se llama la ley que define una carga que se mueve a través de un campo magnético?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Cómo se llama la ley que define una carga que se mueve a través de un campo magnético?`, correct_answer: "Ley de Lorentz", trial_name: "a_Force_3_qa_2"} 
};var a_Force_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Como suma de qué se escribe la fuerza electrostática y magnética?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Como suma de qué se escribe la fuerza electrostática y magnética?`, correct_answer: "fuerza electrostática", trial_name: "a_Force_3_qa_3"} 
};var a_Force_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Donde es el área de la sección transversal relevante para el volumen para el que se calcula el tensor de esfuerzo. Este <span id="a_Force_4_qa_3">formalismo</span> incluye <span id="a_Force_4_qa_1"><span id="a_Force_4_qa_2">términos de presión</span></span> relacionados con fuerzas que actúan normalmente en el área de la sección transversal (las diagonales de la matriz del tensor), así como términos de cizallamiento relacionados con las fuerzas que actúan paralelamente al área de la sección transversal (los elementos fuera de la diagonal). El <span id="a_Force_4_qa_0">tensor de esfuerzo</span> tiene en cuenta las fuerzas que causan todas las deformaciones, incluso las tensiones de tracción y las compresiones.:133–134:38-1–38-11</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">¿Qué causa la tensión en las estructuras?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué causa la tensión en las estructuras?`, correct_answer: "tensor de esfuerzo", trial_name: "a_Force_4_qa_0"} 
};var a_Force_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué se utiliza para calcular el área de sección transversal en el volumen de un objeto?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué se utiliza para calcular el área de sección transversal en el volumen de un objeto?`, correct_answer: "términos de presión", trial_name: "a_Force_4_qa_1"} 
};var a_Force_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué se asocia con las fuerzas normales?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué se asocia con las fuerzas normales?`, correct_answer: "términos de presión", trial_name: "a_Force_4_qa_2"} 
};var a_Force_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">¿Qué incluye términos de presión cuando se calcula el área en volumen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `¿Qué incluye términos de presión cuando se calcula el área en volumen?`, correct_answer: "formalismo", trial_name: "a_Force_4_qa_3"} 
};var xquad_trials_array = [[a_SuperBowl50_1,[a_SuperBowl50_1_qa_0,a_SuperBowl50_1_qa_1,a_SuperBowl50_1_qa_2,a_SuperBowl50_1_qa_3,a_SuperBowl50_1_qa_4,a_SuperBowl50_1_qa_5,a_SuperBowl50_1_qa_6,a_SuperBowl50_1_qa_7,a_SuperBowl50_1_qa_8,a_SuperBowl50_1_qa_9,a_SuperBowl50_1_qa_10,a_SuperBowl50_1_qa_11,a_SuperBowl50_1_qa_12,a_SuperBowl50_1_qa_13,a_SuperBowl50_1_qa_14,a_SuperBowl50_1_qa_15]],[a_SuperBowl50_2,[a_SuperBowl50_2_qa_0,a_SuperBowl50_2_qa_1,a_SuperBowl50_2_qa_2,a_SuperBowl50_2_qa_3,a_SuperBowl50_2_qa_4,a_SuperBowl50_2_qa_5,a_SuperBowl50_2_qa_6,a_SuperBowl50_2_qa_7,a_SuperBowl50_2_qa_8,a_SuperBowl50_2_qa_9,a_SuperBowl50_2_qa_10,a_SuperBowl50_2_qa_11,a_SuperBowl50_2_qa_12,a_SuperBowl50_2_qa_13,a_SuperBowl50_2_qa_14,a_SuperBowl50_2_qa_15,a_SuperBowl50_2_qa_16]],[a_SuperBowl50_3,[a_SuperBowl50_3_qa_0,a_SuperBowl50_3_qa_1,a_SuperBowl50_3_qa_2,a_SuperBowl50_3_qa_3,a_SuperBowl50_3_qa_4,a_SuperBowl50_3_qa_5,a_SuperBowl50_3_qa_6,a_SuperBowl50_3_qa_7,a_SuperBowl50_3_qa_8,a_SuperBowl50_3_qa_9,a_SuperBowl50_3_qa_10,a_SuperBowl50_3_qa_11]],[a_Warsaw_0,[a_Warsaw_0_qa_0,a_Warsaw_0_qa_1,a_Warsaw_0_qa_2,a_Warsaw_0_qa_3,a_Warsaw_0_qa_4]],[a_Warsaw_1,[a_Warsaw_1_qa_0,a_Warsaw_1_qa_1,a_Warsaw_1_qa_2,a_Warsaw_1_qa_3,a_Warsaw_1_qa_4]],[a_Normans_4,[a_Normans_4_qa_0]],[a_NikolaTesla_1,[a_NikolaTesla_1_qa_0,a_NikolaTesla_1_qa_1,a_NikolaTesla_1_qa_2,a_NikolaTesla_1_qa_3,a_NikolaTesla_1_qa_4,a_NikolaTesla_1_qa_5,a_NikolaTesla_1_qa_6,a_NikolaTesla_1_qa_7,a_NikolaTesla_1_qa_8,a_NikolaTesla_1_qa_9]],[a_NikolaTesla_3,[a_NikolaTesla_3_qa_0,a_NikolaTesla_3_qa_1,a_NikolaTesla_3_qa_2]],[a_NikolaTesla_4,[a_NikolaTesla_4_qa_0,a_NikolaTesla_4_qa_1,a_NikolaTesla_4_qa_2]],[a_Computationalcomplexitytheory_0,[a_Computationalcomplexitytheory_0_qa_0,a_Computationalcomplexitytheory_0_qa_1,a_Computationalcomplexitytheory_0_qa_2]],[a_Computationalcomplexitytheory_1,[a_Computationalcomplexitytheory_1_qa_0,a_Computationalcomplexitytheory_1_qa_1,a_Computationalcomplexitytheory_1_qa_2,a_Computationalcomplexitytheory_1_qa_3,a_Computationalcomplexitytheory_1_qa_4]],[a_Computationalcomplexitytheory_2,[a_Computationalcomplexitytheory_2_qa_0,a_Computationalcomplexitytheory_2_qa_1]],[a_Computationalcomplexitytheory_4,[a_Computationalcomplexitytheory_4_qa_0,a_Computationalcomplexitytheory_4_qa_1,a_Computationalcomplexitytheory_4_qa_2,a_Computationalcomplexitytheory_4_qa_3]],[a_Teacher_0,[a_Teacher_0_qa_0,a_Teacher_0_qa_1,a_Teacher_0_qa_2,a_Teacher_0_qa_3,a_Teacher_0_qa_4]],[a_Teacher_1,[a_Teacher_1_qa_0,a_Teacher_1_qa_1,a_Teacher_1_qa_2,a_Teacher_1_qa_3,a_Teacher_1_qa_4]],[a_Teacher_3,[a_Teacher_3_qa_0,a_Teacher_3_qa_1,a_Teacher_3_qa_2,a_Teacher_3_qa_3]],[a_Teacher_4,[a_Teacher_4_qa_0,a_Teacher_4_qa_1,a_Teacher_4_qa_2,a_Teacher_4_qa_3,a_Teacher_4_qa_4]],[a_MartinLuther_0,[a_MartinLuther_0_qa_0,a_MartinLuther_0_qa_1,a_MartinLuther_0_qa_2,a_MartinLuther_0_qa_3,a_MartinLuther_0_qa_4]],[a_MartinLuther_2,[a_MartinLuther_2_qa_0,a_MartinLuther_2_qa_1,a_MartinLuther_2_qa_2,a_MartinLuther_2_qa_3,a_MartinLuther_2_qa_4]],[a_MartinLuther_3,[a_MartinLuther_3_qa_0,a_MartinLuther_3_qa_1,a_MartinLuther_3_qa_2,a_MartinLuther_3_qa_3,a_MartinLuther_3_qa_4]],[a_MartinLuther_4,[a_MartinLuther_4_qa_0,a_MartinLuther_4_qa_1,a_MartinLuther_4_qa_2]],[a_SouthernCalifornia_3,[a_SouthernCalifornia_3_qa_0,a_SouthernCalifornia_3_qa_1,a_SouthernCalifornia_3_qa_2,a_SouthernCalifornia_3_qa_3,a_SouthernCalifornia_3_qa_4]],[a_SouthernCalifornia_4,[a_SouthernCalifornia_4_qa_0,a_SouthernCalifornia_4_qa_1,a_SouthernCalifornia_4_qa_2,a_SouthernCalifornia_4_qa_3,a_SouthernCalifornia_4_qa_4]],[a_SkyUnitedKingdom_1,[a_SkyUnitedKingdom_1_qa_0,a_SkyUnitedKingdom_1_qa_1,a_SkyUnitedKingdom_1_qa_2,a_SkyUnitedKingdom_1_qa_3,a_SkyUnitedKingdom_1_qa_4]],[a_SkyUnitedKingdom_4,[a_SkyUnitedKingdom_4_qa_0,a_SkyUnitedKingdom_4_qa_1,a_SkyUnitedKingdom_4_qa_2,a_SkyUnitedKingdom_4_qa_3,a_SkyUnitedKingdom_4_qa_4]],[a_VictoriaAustralia_1,[a_VictoriaAustralia_1_qa_0,a_VictoriaAustralia_1_qa_1,a_VictoriaAustralia_1_qa_2,a_VictoriaAustralia_1_qa_3,a_VictoriaAustralia_1_qa_4]],[a_VictoriaAustralia_2,[a_VictoriaAustralia_2_qa_0,a_VictoriaAustralia_2_qa_1,a_VictoriaAustralia_2_qa_2,a_VictoriaAustralia_2_qa_3,a_VictoriaAustralia_2_qa_4]],[a_VictoriaAustralia_3,[a_VictoriaAustralia_3_qa_0,a_VictoriaAustralia_3_qa_1,a_VictoriaAustralia_3_qa_2,a_VictoriaAustralia_3_qa_3,a_VictoriaAustralia_3_qa_4]],[a_Huguenot_0,[a_Huguenot_0_qa_0,a_Huguenot_0_qa_1,a_Huguenot_0_qa_2,a_Huguenot_0_qa_3]],[a_Steamengine_0,[a_Steamengine_0_qa_0,a_Steamengine_0_qa_1,a_Steamengine_0_qa_2,a_Steamengine_0_qa_3]],[a_Steamengine_3,[a_Steamengine_3_qa_0,a_Steamengine_3_qa_1,a_Steamengine_3_qa_2,a_Steamengine_3_qa_3,a_Steamengine_3_qa_4]],[a_Oxygen_1,[a_Oxygen_1_qa_0,a_Oxygen_1_qa_1,a_Oxygen_1_qa_2,a_Oxygen_1_qa_3]],[a_1973oilcrisis_2,[a_1973oilcrisis_2_qa_0,a_1973oilcrisis_2_qa_1,a_1973oilcrisis_2_qa_2,a_1973oilcrisis_2_qa_3]],[a_Apolloprogram_4,[a_Apolloprogram_4_qa_0,a_Apolloprogram_4_qa_1,a_Apolloprogram_4_qa_2,a_Apolloprogram_4_qa_3,a_Apolloprogram_4_qa_4]],[a_Amazonrainforest_2,[a_Amazonrainforest_2_qa_0,a_Amazonrainforest_2_qa_1,a_Amazonrainforest_2_qa_2,a_Amazonrainforest_2_qa_3,a_Amazonrainforest_2_qa_4]],[a_Amazonrainforest_3,[a_Amazonrainforest_3_qa_0,a_Amazonrainforest_3_qa_1,a_Amazonrainforest_3_qa_2,a_Amazonrainforest_3_qa_3,a_Amazonrainforest_3_qa_4]],[a_Amazonrainforest_4,[a_Amazonrainforest_4_qa_0,a_Amazonrainforest_4_qa_1,a_Amazonrainforest_4_qa_2,a_Amazonrainforest_4_qa_3,a_Amazonrainforest_4_qa_4]],[a_FresnoCalifornia_0,[a_FresnoCalifornia_0_qa_0,a_FresnoCalifornia_0_qa_1,a_FresnoCalifornia_0_qa_2,a_FresnoCalifornia_0_qa_3,a_FresnoCalifornia_0_qa_4]],[a_FresnoCalifornia_3,[a_FresnoCalifornia_3_qa_0,a_FresnoCalifornia_3_qa_1,a_FresnoCalifornia_3_qa_2,a_FresnoCalifornia_3_qa_3]],[a_Geology_4,[a_Geology_4_qa_0,a_Geology_4_qa_1,a_Geology_4_qa_2,a_Geology_4_qa_3]],[a_AmericanBroadcastingCompany_0,[a_AmericanBroadcastingCompany_0_qa_0,a_AmericanBroadcastingCompany_0_qa_1,a_AmericanBroadcastingCompany_0_qa_2,a_AmericanBroadcastingCompany_0_qa_3]],[a_Pharmacy_2,[a_Pharmacy_2_qa_0,a_Pharmacy_2_qa_1,a_Pharmacy_2_qa_2,a_Pharmacy_2_qa_3,a_Pharmacy_2_qa_4]],[a_Construction_0,[a_Construction_0_qa_0,a_Construction_0_qa_1,a_Construction_0_qa_2,a_Construction_0_qa_3,a_Construction_0_qa_4]],[a_Privateschool_0,[a_Privateschool_0_qa_0,a_Privateschool_0_qa_1,a_Privateschool_0_qa_2,a_Privateschool_0_qa_3]],[a_Privateschool_2,[a_Privateschool_2_qa_0,a_Privateschool_2_qa_1,a_Privateschool_2_qa_2,a_Privateschool_2_qa_3,a_Privateschool_2_qa_4]],[a_HarvardUniversity_3,[a_HarvardUniversity_3_qa_0,a_HarvardUniversity_3_qa_1,a_HarvardUniversity_3_qa_2,a_HarvardUniversity_3_qa_3]],[a_JacksonvilleFlorida_0,[a_JacksonvilleFlorida_0_qa_0,a_JacksonvilleFlorida_0_qa_1,a_JacksonvilleFlorida_0_qa_2,a_JacksonvilleFlorida_0_qa_3,a_JacksonvilleFlorida_0_qa_4]],[a_Yuandynasty_4,[a_Yuandynasty_4_qa_0,a_Yuandynasty_4_qa_1,a_Yuandynasty_4_qa_2,a_Yuandynasty_4_qa_3]],[a_Kenya_0,[a_Kenya_0_qa_0,a_Kenya_0_qa_1,a_Kenya_0_qa_2,a_Kenya_0_qa_3]],[a_Kenya_1,[a_Kenya_1_qa_0,a_Kenya_1_qa_1,a_Kenya_1_qa_2,a_Kenya_1_qa_3,a_Kenya_1_qa_4]],[a_Kenya_2,[a_Kenya_2_qa_0,a_Kenya_2_qa_1,a_Kenya_2_qa_2,a_Kenya_2_qa_3]],[a_IntergovernmentalPanelonClimateChange_0,[a_IntergovernmentalPanelonClimateChange_0_qa_0,a_IntergovernmentalPanelonClimateChange_0_qa_1,a_IntergovernmentalPanelonClimateChange_0_qa_2,a_IntergovernmentalPanelonClimateChange_0_qa_3,a_IntergovernmentalPanelonClimateChange_0_qa_4]],[a_IntergovernmentalPanelonClimateChange_2,[a_IntergovernmentalPanelonClimateChange_2_qa_0,a_IntergovernmentalPanelonClimateChange_2_qa_1,a_IntergovernmentalPanelonClimateChange_2_qa_2,a_IntergovernmentalPanelonClimateChange_2_qa_3]],[a_Chloroplast_1,[a_Chloroplast_1_qa_0,a_Chloroplast_1_qa_1,a_Chloroplast_1_qa_2,a_Chloroplast_1_qa_3,a_Chloroplast_1_qa_4]],[a_Chloroplast_4,[a_Chloroplast_4_qa_0,a_Chloroplast_4_qa_1,a_Chloroplast_4_qa_2]],[a_Rhine_0,[a_Rhine_0_qa_0,a_Rhine_0_qa_1,a_Rhine_0_qa_2,a_Rhine_0_qa_3,a_Rhine_0_qa_4,a_Rhine_0_qa_5,a_Rhine_0_qa_6,a_Rhine_0_qa_7]],[a_Rhine_1,[a_Rhine_1_qa_0,a_Rhine_1_qa_1,a_Rhine_1_qa_2]],[a_ScottishParliament_0,[a_ScottishParliament_0_qa_0,a_ScottishParliament_0_qa_1,a_ScottishParliament_0_qa_2,a_ScottishParliament_0_qa_3,a_ScottishParliament_0_qa_4]],[a_Islamism_1,[a_Islamism_1_qa_0,a_Islamism_1_qa_1,a_Islamism_1_qa_2,a_Islamism_1_qa_3,a_Islamism_1_qa_4]],[a_Islamism_3,[a_Islamism_3_qa_0,a_Islamism_3_qa_1,a_Islamism_3_qa_2,a_Islamism_3_qa_3,a_Islamism_3_qa_4]],[a_Imperialism_0,[a_Imperialism_0_qa_0,a_Imperialism_0_qa_1,a_Imperialism_0_qa_2,a_Imperialism_0_qa_3,a_Imperialism_0_qa_4]],[a_FrenchandIndianWar_0,[a_FrenchandIndianWar_0_qa_0,a_FrenchandIndianWar_0_qa_1,a_FrenchandIndianWar_0_qa_2,a_FrenchandIndianWar_0_qa_3]],[a_Force_3,[a_Force_3_qa_0,a_Force_3_qa_1,a_Force_3_qa_2,a_Force_3_qa_3]],[a_Force_4,[a_Force_4_qa_0,a_Force_4_qa_1,a_Force_4_qa_2,a_Force_4_qa_3]]];
