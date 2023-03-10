var a_SuperBowl50_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The <span id="a_SuperBowl50_1_qa_5">Broncos</span> defeated the <span id="a_SuperBowl50_1_qa_0"><span id="a_SuperBowl50_1_qa_10"><span id="a_SuperBowl50_1_qa_13">Pittsburgh Steelers</span></span></span> in the divisional round, <span id="a_SuperBowl50_1_qa_6">23–16</span>, by scoring <span id="a_SuperBowl50_1_qa_1"><span id="a_SuperBowl50_1_qa_11">11</span></span> points in the final three minutes of the game. They then beat the defending Super Bowl XLIX champion <span id="a_SuperBowl50_1_qa_2"><span id="a_SuperBowl50_1_qa_7"><span id="a_SuperBowl50_1_qa_12"><span id="a_SuperBowl50_1_qa_14">New England Patriots</span></span></span></span> in the AFC Championship Game, <span id="a_SuperBowl50_1_qa_3">20–18</span>, by intercepting a pass on New England's 2-point conversion attempt with <span id="a_SuperBowl50_1_qa_4"><span id="a_SuperBowl50_1_qa_8"><span id="a_SuperBowl50_1_qa_15">17</span></span> seconds</span> left on the clock. Despite <span id="a_SuperBowl50_1_qa_9">Manning</span>'s problems with interceptions during the season, he didn't throw any in their two playoff games.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Who lost to the Broncos in the divisional round?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who lost to the Broncos in the divisional round?`, correct_answer: "Pittsburgh Steelers", trial_name: "a_SuperBowl50_1_qa_0"} 
};var a_SuperBowl50_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many points did the Broncos score in the last three minutes of the game versus Pittsburgh?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many points did the Broncos score in the last three minutes of the game versus Pittsburgh?`, correct_answer: "11", trial_name: "a_SuperBowl50_1_qa_1"} 
};var a_SuperBowl50_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who won Super Bowl XLIX?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who won Super Bowl XLIX?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_2"} 
};var a_SuperBowl50_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the final score of the AFC Championship Game?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the final score of the AFC Championship Game?`, correct_answer: "20–18", trial_name: "a_SuperBowl50_1_qa_3"} 
};var a_SuperBowl50_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How much time remained on the clock when the Broncos made the interception that clinched the AFC Championship Game?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How much time remained on the clock when the Broncos made the interception that clinched the AFC Championship Game?`, correct_answer: "17 seconds", trial_name: "a_SuperBowl50_1_qa_4"} 
};var a_SuperBowl50_1_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What team was the divisional round winner between the Broncos and Steelers?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What team was the divisional round winner between the Broncos and Steelers?`, correct_answer: "Broncos", trial_name: "a_SuperBowl50_1_qa_5"} 
};var a_SuperBowl50_1_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the final score of the game between the Broncos and Steelers?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the final score of the game between the Broncos and Steelers?`, correct_answer: "23–16", trial_name: "a_SuperBowl50_1_qa_6"} 
};var a_SuperBowl50_1_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who won Super Bowl XLIX?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who won Super Bowl XLIX?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_7"} 
};var a_SuperBowl50_1_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many seconds were left in the game when the Broncos intercepted the pass that won the game?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many seconds were left in the game when the Broncos intercepted the pass that won the game?`, correct_answer: "17", trial_name: "a_SuperBowl50_1_qa_8"} 
};var a_SuperBowl50_1_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">During the Bronco's playoff games, who did not throw at all?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `During the Bronco's playoff games, who did not throw at all?`, correct_answer: "Manning", trial_name: "a_SuperBowl50_1_qa_9"} 
};var a_SuperBowl50_1_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who did the Broncos beat in the divisional game?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who did the Broncos beat in the divisional game?`, correct_answer: "Pittsburgh Steelers", trial_name: "a_SuperBowl50_1_qa_10"} 
};var a_SuperBowl50_1_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many points did the Broncos score in the final three minutes of the Pittsburgh game?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many points did the Broncos score in the final three minutes of the Pittsburgh game?`, correct_answer: "11", trial_name: "a_SuperBowl50_1_qa_11"} 
};var a_SuperBowl50_1_qa_12 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who did the Broncos defeat in the AFC Championship game?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who did the Broncos defeat in the AFC Championship game?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_12"} 
};var a_SuperBowl50_1_qa_13 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who did the Broncos beat to win their division in 2015?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who did the Broncos beat to win their division in 2015?`, correct_answer: "Pittsburgh Steelers", trial_name: "a_SuperBowl50_1_qa_13"} 
};var a_SuperBowl50_1_qa_14 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who did the Broncos beat tp become the AFC champions?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who did the Broncos beat tp become the AFC champions?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_14"} 
};var a_SuperBowl50_1_qa_15 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many seconds were left in the game when the Patriots failed their 2-point conversion?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many seconds were left in the game when the Patriots failed their 2-point conversion?`, correct_answer: "17", trial_name: "a_SuperBowl50_1_qa_15"} 
};var a_SuperBowl50_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_SuperBowl50_2_qa_8"><span id="a_SuperBowl50_2_qa_11"><span id="a_SuperBowl50_2_qa_14">Peyton Manning</span></span></span> became the first quarterback ever to lead <span id="a_SuperBowl50_2_qa_9"><span id="a_SuperBowl50_2_qa_10">two</span></span> different teams to multiple Super Bowls. He is also the oldest quarterback ever to play in a Super Bowl at age <span id="a_SuperBowl50_2_qa_0"><span id="a_SuperBowl50_2_qa_15">39</span></span>. The past record was held by <span id="a_SuperBowl50_2_qa_1"><span id="a_SuperBowl50_2_qa_6"><span id="a_SuperBowl50_2_qa_12"><span id="a_SuperBowl50_2_qa_16">John Elway</span></span></span></span>, who led the <span id="a_SuperBowl50_2_qa_4"><span id="a_SuperBowl50_2_qa_5">Broncos</span></span> to victory in <span id="a_SuperBowl50_2_qa_13">Super Bowl XXXIII</span> at age <span id="a_SuperBowl50_2_qa_2"><span id="a_SuperBowl50_2_qa_7">38</span></span> and is currently Denver's <span id="a_SuperBowl50_2_qa_3">Executive Vice President of Football Operations and General Manager</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">How old was Peyton Manning when he played in Super Bowl 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How old was Peyton Manning when he played in Super Bowl 50?`, correct_answer: "39", trial_name: "a_SuperBowl50_2_qa_0"} 
};var a_SuperBowl50_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who previously held the record for being the oldest quarterback to play in a Super Bowl?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who previously held the record for being the oldest quarterback to play in a Super Bowl?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_1"} 
};var a_SuperBowl50_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How old was John Elway when he played in Super Bowl XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How old was John Elway when he played in Super Bowl XXXIII?`, correct_answer: "38", trial_name: "a_SuperBowl50_2_qa_2"} 
};var a_SuperBowl50_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What role does John Elway currently have in the Broncos franchise?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What role does John Elway currently have in the Broncos franchise?`, correct_answer: "Executive Vice President of Football Operations and General Manager", trial_name: "a_SuperBowl50_2_qa_3"} 
};var a_SuperBowl50_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who did John Elway play for in Super Bowl XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who did John Elway play for in Super Bowl XXXIII?`, correct_answer: "Broncos", trial_name: "a_SuperBowl50_2_qa_4"} 
};var a_SuperBowl50_2_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What team was the winner of Super Bowl XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What team was the winner of Super Bowl XXXIII?`, correct_answer: "Broncos", trial_name: "a_SuperBowl50_2_qa_5"} 
};var a_SuperBowl50_2_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who is the General Manager for the Broncos?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who is the General Manager for the Broncos?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_6"} 
};var a_SuperBowl50_2_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How old was Elway during his Super Bowl XXXIII win?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How old was Elway during his Super Bowl XXXIII win?`, correct_answer: "38", trial_name: "a_SuperBowl50_2_qa_7"} 
};var a_SuperBowl50_2_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who has the record of being the oldest quarter back in any Super Bowl game?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who has the record of being the oldest quarter back in any Super Bowl game?`, correct_answer: "Peyton Manning", trial_name: "a_SuperBowl50_2_qa_8"} 
};var a_SuperBowl50_2_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many teams has Manning played for that reached the Super Bowl, while he was on their team?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many teams has Manning played for that reached the Super Bowl, while he was on their team?`, correct_answer: "two", trial_name: "a_SuperBowl50_2_qa_9"} 
};var a_SuperBowl50_2_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Peyton Manning took how many different teams to the Super Bowl?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Peyton Manning took how many different teams to the Super Bowl?`, correct_answer: "two", trial_name: "a_SuperBowl50_2_qa_10"} 
};var a_SuperBowl50_2_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who is the oldest quarterback to play in a Super Bowl?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who is the oldest quarterback to play in a Super Bowl?`, correct_answer: "Peyton Manning", trial_name: "a_SuperBowl50_2_qa_11"} 
};var a_SuperBowl50_2_qa_12 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Prior to Manning, who was the oldest quarterback to play in a Super Bowl?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Prior to Manning, who was the oldest quarterback to play in a Super Bowl?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_12"} 
};var a_SuperBowl50_2_qa_13 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Which Super Bowl did Elway win at 38 years old?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Which Super Bowl did Elway win at 38 years old?`, correct_answer: "Super Bowl XXXIII", trial_name: "a_SuperBowl50_2_qa_13"} 
};var a_SuperBowl50_2_qa_14 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who was the first quarterback to take two teams to more than one Super Bowl?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who was the first quarterback to take two teams to more than one Super Bowl?`, correct_answer: "Peyton Manning", trial_name: "a_SuperBowl50_2_qa_14"} 
};var a_SuperBowl50_2_qa_15 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How old was Manning when he played Super Bowl 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How old was Manning when he played Super Bowl 50?`, correct_answer: "39", trial_name: "a_SuperBowl50_2_qa_15"} 
};var a_SuperBowl50_2_qa_16 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the name of the quarterback who was 38 in Super Bowl XXXIII?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the name of the quarterback who was 38 in Super Bowl XXXIII?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_16"} 
};var a_SuperBowl50_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_SuperBowl50_3_qa_0"><span id="a_SuperBowl50_3_qa_10">Six</span></span>-time Grammy winner and <span id="a_SuperBowl50_3_qa_2">Academy Award</span> nominee <span id="a_SuperBowl50_3_qa_5"><span id="a_SuperBowl50_3_qa_7"><span id="a_SuperBowl50_3_qa_9">Lady Gaga</span></span></span> performed <span id="a_SuperBowl50_3_qa_1"><span id="a_SuperBowl50_3_qa_3">the national anthem</span></span>, while Academy Award winner <span id="a_SuperBowl50_3_qa_6"><span id="a_SuperBowl50_3_qa_8"><span id="a_SuperBowl50_3_qa_11">Marlee Matlin</span></span></span> provided <span id="a_SuperBowl50_3_qa_4">American Sign Language</span> (ASL) translation.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">How many Grammys has Lady Gaga won?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many Grammys has Lady Gaga won?`, correct_answer: "Six", trial_name: "a_SuperBowl50_3_qa_0"} 
};var a_SuperBowl50_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What did Lady Gaga sing?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did Lady Gaga sing?`, correct_answer: "the national anthem", trial_name: "a_SuperBowl50_3_qa_1"} 
};var a_SuperBowl50_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What award has Marlee Matlin won?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What award has Marlee Matlin won?`, correct_answer: "Academy Award", trial_name: "a_SuperBowl50_3_qa_2"} 
};var a_SuperBowl50_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What did Marlee Matlin translate?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did Marlee Matlin translate?`, correct_answer: "the national anthem", trial_name: "a_SuperBowl50_3_qa_3"} 
};var a_SuperBowl50_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Into what language did Marlee Matlin translate the national anthem?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Into what language did Marlee Matlin translate the national anthem?`, correct_answer: "American Sign Language", trial_name: "a_SuperBowl50_3_qa_4"} 
};var a_SuperBowl50_3_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who sang the national anthem?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who sang the national anthem?`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_5"} 
};var a_SuperBowl50_3_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What actress did the ASL translation for the game?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What actress did the ASL translation for the game?`, correct_answer: "Marlee Matlin", trial_name: "a_SuperBowl50_3_qa_6"} 
};var a_SuperBowl50_3_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who did the National Anthem at Super Bowl 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who did the National Anthem at Super Bowl 50?`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_7"} 
};var a_SuperBowl50_3_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What actor did sign language for the National Anthem at Superbowl 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What actor did sign language for the National Anthem at Superbowl 50?`, correct_answer: "Marlee Matlin", trial_name: "a_SuperBowl50_3_qa_8"} 
};var a_SuperBowl50_3_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who did the Super Bowl 50 National Anthem?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who did the Super Bowl 50 National Anthem?`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_9"} 
};var a_SuperBowl50_3_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many Grammy Award's does the text say Lady Gaga has won?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many Grammy Award's does the text say Lady Gaga has won?`, correct_answer: "Six", trial_name: "a_SuperBowl50_3_qa_10"} 
};var a_SuperBowl50_3_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who did the sign language of the National Anthem at Super Bowl 50?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who did the sign language of the National Anthem at Super Bowl 50?`, correct_answer: "Marlee Matlin", trial_name: "a_SuperBowl50_3_qa_11"} 
};var a_Warsaw_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Nearby, in <span id="a_Warsaw_0_qa_0">Ogród Saski</span> (the <span id="a_Warsaw_0_qa_1">Saxon Garden</span>), the Summer Theatre was in operation from <span id="a_Warsaw_0_qa_2">1870 to 1939</span>, and in the inter-war period, the theatre complex also included <span id="a_Warsaw_0_qa_3">Momus</span>, Warsaw's first literary cabaret, and Leon Schiller's musical theatre Melodram. The <span id="a_Warsaw_0_qa_4">Wojciech Bogusławski Theatre</span> (1922–26), was the best example of "Polish monumental theatre". From the mid-1930s, the Great Theatre building housed the Upati Institute of Dramatic Arts – the first state-run academy of dramatic art, with an acting department and a stage directing department.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What is the Saxon Garden in Polish?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the Saxon Garden in Polish?`, correct_answer: "Ogród Saski", trial_name: "a_Warsaw_0_qa_0"} 
};var a_Warsaw_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where was the Summer Theatre located?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where was the Summer Theatre located?`, correct_answer: "Saxon Garden", trial_name: "a_Warsaw_0_qa_1"} 
};var a_Warsaw_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How long was the Summer Theatre in operation?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How long was the Summer Theatre in operation?`, correct_answer: "1870 to 1939", trial_name: "a_Warsaw_0_qa_2"} 
};var a_Warsaw_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was Warsaw's first literary cabaret?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was Warsaw's first literary cabaret?`, correct_answer: "Momus", trial_name: "a_Warsaw_0_qa_3"} 
};var a_Warsaw_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What theatre was the best example of "Polish monumental theatre"?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What theatre was the best example of "Polish monumental theatre"?`, correct_answer: "Wojciech Bogusławski Theatre", trial_name: "a_Warsaw_0_qa_4"} 
};var a_Warsaw_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Their local rivals, <span id="a_Warsaw_1_qa_0">Polonia Warsaw</span>, have significantly fewer supporters, yet they managed to win Ekstraklasa Championship in 2000. They also won the country’s championship in <span id="a_Warsaw_1_qa_1">1946</span>, and won the cup <span id="a_Warsaw_1_qa_2">twice</span> as well. Polonia's home venue is located at <span id="a_Warsaw_1_qa_3">Konwiktorska Street</span>, a ten-minute walk north from the Old Town. Polonia was relegated from the country's top flight in 2013 because of their <span id="a_Warsaw_1_qa_4">disastrous financial situation</span>. They are now playing in the 4th league (5th tier in Poland) -the bottom professional league in the National – Polish Football Association (PZPN) structure.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Who won the Ekstraklasa Championship in 2000?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who won the Ekstraklasa Championship in 2000?`, correct_answer: "Polonia Warsaw", trial_name: "a_Warsaw_1_qa_0"} 
};var a_Warsaw_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When did Polonia Warsaw win the country's championship prior to 2000?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When did Polonia Warsaw win the country's championship prior to 2000?`, correct_answer: "1946", trial_name: "a_Warsaw_1_qa_1"} 
};var a_Warsaw_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many times has Polonia won the cup?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many times has Polonia won the cup?`, correct_answer: "twice", trial_name: "a_Warsaw_1_qa_2"} 
};var a_Warsaw_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where is Polonia's home venue located?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where is Polonia's home venue located?`, correct_answer: "Konwiktorska Street", trial_name: "a_Warsaw_1_qa_3"} 
};var a_Warsaw_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Why was Polonia relegated from the country's top flight in 2013?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Why was Polonia relegated from the country's top flight in 2013?`, correct_answer: "disastrous financial situation", trial_name: "a_Warsaw_1_qa_4"} 
};var a_Warsaw_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Throughout its existence, Warsaw has been a <span id="a_Warsaw_2_qa_0">multi-cultural</span> city. According to the 1901 census, out of <span id="a_Warsaw_2_qa_1">711,988</span> inhabitants <span id="a_Warsaw_2_qa_2">56.2%</span> were Catholics, 35.7% Jews, 5% Greek orthodox Christians and <span id="a_Warsaw_2_qa_3">2.8%</span> Protestants. Eight years later, in 1909, there were 281,754 Jews (36.9%), 18,189 Protestants (2.4%) and 2,818 Mariavites (0.4%). This led to construction of hundreds of places of religious worship in all parts of the town. Most of them were destroyed in the aftermath of the Warsaw Uprising of <span id="a_Warsaw_2_qa_4">1944</span>. After the war, the new communist authorities of Poland discouraged church construction and only a small number were rebuilt.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What type of city has Warsaw been for as long as it's been a city?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What type of city has Warsaw been for as long as it's been a city?`, correct_answer: "multi-cultural", trial_name: "a_Warsaw_2_qa_0"} 
};var a_Warsaw_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was Warsaw's population in 1901?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was Warsaw's population in 1901?`, correct_answer: "711,988", trial_name: "a_Warsaw_2_qa_1"} 
};var a_Warsaw_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Of Warsaw's inhabitants in 1901, what percentage was Catholic?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Of Warsaw's inhabitants in 1901, what percentage was Catholic?`, correct_answer: "56.2%", trial_name: "a_Warsaw_2_qa_2"} 
};var a_Warsaw_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What percentage of Warsaw's population was Protestant in 1901?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What percentage of Warsaw's population was Protestant in 1901?`, correct_answer: "2.8%", trial_name: "a_Warsaw_2_qa_3"} 
};var a_Warsaw_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When were most of the places of religious worship destroyed in Warsaw?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When were most of the places of religious worship destroyed in Warsaw?`, correct_answer: "1944", trial_name: "a_Warsaw_2_qa_4"} 
};var a_Warsaw_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Warsaw's first stock exchange was established in <span id="a_Warsaw_4_qa_0">1817</span> and continued trading until <span id="a_Warsaw_4_qa_1">World War II</span>. It was re-established in <span id="a_Warsaw_4_qa_2">April 1991</span>, following the end of the post-war communist control of the country and the reintroduction of a free-market economy. Today, the Warsaw Stock Exchange (WSE) is, according to many indicators, the largest market in the region, with <span id="a_Warsaw_4_qa_3">374</span> companies listed and total capitalization of 162 584 mln EUR as of 31 August 2009. From 1991 until 2000, the stock exchange was, ironically, located in the building previously used as the headquarters of the <span id="a_Warsaw_4_qa_4">Polish United Workers' Party</span> (PZPR).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">When was Warsaw's first stock exchange established?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When was Warsaw's first stock exchange established?`, correct_answer: "1817", trial_name: "a_Warsaw_4_qa_0"} 
};var a_Warsaw_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What brought Warsaw's stock exchange to a stop?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What brought Warsaw's stock exchange to a stop?`, correct_answer: "World War II", trial_name: "a_Warsaw_4_qa_1"} 
};var a_Warsaw_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When was Warsaw's stock exchange brought back to life?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When was Warsaw's stock exchange brought back to life?`, correct_answer: "April 1991", trial_name: "a_Warsaw_4_qa_2"} 
};var a_Warsaw_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many companies were listed on the WSE on August 2009?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many companies were listed on the WSE on August 2009?`, correct_answer: "374", trial_name: "a_Warsaw_4_qa_3"} 
};var a_Warsaw_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Whose former headquarters was the WSE located in until 2000?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Whose former headquarters was the WSE located in until 2000?`, correct_answer: "Polish United Workers' Party", trial_name: "a_Warsaw_4_qa_4"} 
};var a_Normans_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Between 1402 and 1405, the expedition led by the Norman noble Jean de Bethencourt and the Poitevine Gadifer de la Salle conquered the Canarian islands of Lanzarote, Fuerteventura and El Hierro off the Atlantic coast of <span id="a_Normans_4_qa_0">Africa</span>. Their troops were gathered in Normandy, Gascony and were later reinforced by Castilian colonists.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What continent are the Canarian Islands off the coast of?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What continent are the Canarian Islands off the coast of?`, correct_answer: "Africa", trial_name: "a_Normans_4_qa_0"} 
};var a_NikolaTesla_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">After leaving Edison's company <span id="a_NikolaTesla_1_qa_9">Tesla</span> partnered with two businessmen in <span id="a_NikolaTesla_1_qa_6">1886</span>, <span id="a_NikolaTesla_1_qa_0"><span id="a_NikolaTesla_1_qa_5">Robert Lane and Benjamin Vail</span></span>, who agreed to finance an electric lighting company in Tesla's name, <span id="a_NikolaTesla_1_qa_1"><span id="a_NikolaTesla_1_qa_7">Tesla Electric Light & Manufacturing</span></span>. The company <span id="a_NikolaTesla_1_qa_2">installed <span id="a_NikolaTesla_1_qa_4">electrical arc light based illumination systems</span> designed by Tesla</span> and also had designs for dynamo electric machine commutators, the first <span id="a_NikolaTesla_1_qa_3">patents</span> issued to Tesla in the US.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Who did Tesla partner with in 1886?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who did Tesla partner with in 1886?`, correct_answer: "Robert Lane and Benjamin Vail", trial_name: "a_NikolaTesla_1_qa_0"} 
};var a_NikolaTesla_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What did lane and vail finance?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did lane and vail finance?`, correct_answer: "Tesla Electric Light & Manufacturing", trial_name: "a_NikolaTesla_1_qa_1"} 
};var a_NikolaTesla_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What did Tesla Electric Light & Manufacturing do?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did Tesla Electric Light & Manufacturing do?`, correct_answer: "installed electrical arc light based illumination systems designed by Tesla", trial_name: "a_NikolaTesla_1_qa_2"} 
};var a_NikolaTesla_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What did Tesla first receive after starting his company?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did Tesla first receive after starting his company?`, correct_answer: "patents", trial_name: "a_NikolaTesla_1_qa_3"} 
};var a_NikolaTesla_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was produced at tesla's company? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was produced at tesla's company? `, correct_answer: "electrical arc light based illumination systems", trial_name: "a_NikolaTesla_1_qa_4"} 
};var a_NikolaTesla_1_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What were the names of Tesla's new partners?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What were the names of Tesla's new partners?`, correct_answer: "Robert Lane and Benjamin Vail", trial_name: "a_NikolaTesla_1_qa_5"} 
};var a_NikolaTesla_1_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When did the partnership between Tesla, Lane and Vail form?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When did the partnership between Tesla, Lane and Vail form?`, correct_answer: "1886", trial_name: "a_NikolaTesla_1_qa_6"} 
};var a_NikolaTesla_1_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the name of the company the businessmen financed? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the name of the company the businessmen financed? `, correct_answer: "Tesla Electric Light & Manufacturing", trial_name: "a_NikolaTesla_1_qa_7"} 
};var a_NikolaTesla_1_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What did Tesla Electric Light & Manufacturing do?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did Tesla Electric Light & Manufacturing do?`, correct_answer: "installed electrical arc light based illumination systems", trial_name: "a_NikolaTesla_1_qa_8"} 
};var a_NikolaTesla_1_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who designed the illumination systems that Tesla Electric Light & Manufacturing installed?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who designed the illumination systems that Tesla Electric Light & Manufacturing installed?`, correct_answer: "Tesla", trial_name: "a_NikolaTesla_1_qa_9"} 
};var a_NikolaTesla_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In the years after these rumors, neither Tesla nor <span id="a_NikolaTesla_3_qa_1">Edison</span> won the prize (although Edison did receive one of <span id="a_NikolaTesla_3_qa_0">38</span> possible bids in 1915 and Tesla did receive one of 38 possible bids in <span id="a_NikolaTesla_3_qa_2">1937</span>).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">How many possible bids for the prize were there in 1915?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many possible bids for the prize were there in 1915?`, correct_answer: "38", trial_name: "a_NikolaTesla_3_qa_0"} 
};var a_NikolaTesla_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who received a bid in 1915?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who received a bid in 1915?`, correct_answer: "Edison", trial_name: "a_NikolaTesla_3_qa_1"} 
};var a_NikolaTesla_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In what year did Tesla receive a Nobel Prize bid?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In what year did Tesla receive a Nobel Prize bid?`, correct_answer: "1937", trial_name: "a_NikolaTesla_3_qa_2"} 
};var a_NikolaTesla_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">However, his religious views remain <span id="a_NikolaTesla_4_qa_1">uncertain</span> due to other statements that he made. For example, in his article, <span id="a_NikolaTesla_4_qa_0">"A Machine to End <span id="a_NikolaTesla_4_qa_2">War</span>"</span>, published in 1937, Tesla stated:</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What article was published in 1937?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What article was published in 1937?`, correct_answer: "A Machine to End War", trial_name: "a_NikolaTesla_4_qa_0"} 
};var a_NikolaTesla_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Because of certain statements what was the believed state of his religious views?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Because of certain statements what was the believed state of his religious views?`, correct_answer: "uncertain", trial_name: "a_NikolaTesla_4_qa_1"} 
};var a_NikolaTesla_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In the article's title, what did the machine hope to end?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In the article's title, what did the machine hope to end?`, correct_answer: "War", trial_name: "a_NikolaTesla_4_qa_2"} 
};var a_Computationalcomplexitytheory_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Computationalcomplexitytheory_0_qa_0">Computational complexity theory</span> is a branch of the theory of computation in theoretical computer science that focuses on classifying <span id="a_Computationalcomplexitytheory_0_qa_2">computational problems</span> according to their <span id="a_Computationalcomplexitytheory_0_qa_1">inherent difficulty</span>, and relating those classes to each other. A computational problem is understood to be a task that is in principle amenable to being solved by a computer, which is equivalent to stating that the problem may be solved by mechanical application of mathematical steps, such as an algorithm.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What branch of theoretical computer science deals with broadly classifying computational problems by difficulty and class of relationship?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What branch of theoretical computer science deals with broadly classifying computational problems by difficulty and class of relationship?`, correct_answer: "Computational complexity theory", trial_name: "a_Computationalcomplexitytheory_0_qa_0"} 
};var a_Computationalcomplexitytheory_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">By what main attribute are computational problems classified utilizing computational complexity theory? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `By what main attribute are computational problems classified utilizing computational complexity theory? `, correct_answer: "inherent difficulty", trial_name: "a_Computationalcomplexitytheory_0_qa_1"} 
};var a_Computationalcomplexitytheory_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the term for a task that generally lends itself to being solved by a computer?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the term for a task that generally lends itself to being solved by a computer?`, correct_answer: "computational problems", trial_name: "a_Computationalcomplexitytheory_0_qa_2"} 
};var a_Computationalcomplexitytheory_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">When considering computational problems, a <span id="a_Computationalcomplexitytheory_1_qa_0">problem instance</span> is a string over an alphabet. Usually, the alphabet is taken to be the <span id="a_Computationalcomplexitytheory_1_qa_1">binary</span> alphabet (i.e., the set {0,1}), and thus the strings are <span id="a_Computationalcomplexitytheory_1_qa_2">bitstrings</span>. As in a real-world computer, mathematical objects other than bitstrings must be suitably encoded. For example, integers can be represented in <span id="a_Computationalcomplexitytheory_1_qa_3">binary notation</span>, and graphs can be encoded directly via their <span id="a_Computationalcomplexitytheory_1_qa_4">adjacency matrices</span>, or by encoding their adjacency lists in binary.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">In a computational problem, what can be described as a string over an alphabet?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In a computational problem, what can be described as a string over an alphabet?`, correct_answer: "problem instance", trial_name: "a_Computationalcomplexitytheory_1_qa_0"} 
};var a_Computationalcomplexitytheory_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the name of the alphabet is most commonly used in a problem instance?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the name of the alphabet is most commonly used in a problem instance?`, correct_answer: "binary", trial_name: "a_Computationalcomplexitytheory_1_qa_1"} 
};var a_Computationalcomplexitytheory_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is another term for the string of a problem instance?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is another term for the string of a problem instance?`, correct_answer: "bitstrings", trial_name: "a_Computationalcomplexitytheory_1_qa_2"} 
};var a_Computationalcomplexitytheory_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In the encoding of mathematical objects, what is the way in which integers are commonly expressed?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In the encoding of mathematical objects, what is the way in which integers are commonly expressed?`, correct_answer: "binary notation", trial_name: "a_Computationalcomplexitytheory_1_qa_3"} 
};var a_Computationalcomplexitytheory_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is one way in which graphs can be encoded? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is one way in which graphs can be encoded? `, correct_answer: "adjacency matrices", trial_name: "a_Computationalcomplexitytheory_1_qa_4"} 
};var a_Computationalcomplexitytheory_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">It is tempting to think that the notion of function problems is much richer than the notion of decision problems. However, this is not really the case, since function problems can be recast <span id="a_Computationalcomplexitytheory_2_qa_0">as decision problems</span>. For example, the multiplication of two integers can be expressed as the <span id="a_Computationalcomplexitytheory_2_qa_1">set of triples</span> (a, b, c) such that the relation a × b = c holds. Deciding whether a given triple is a member of this set corresponds to solving the problem of multiplying two numbers.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">How can function problems typically be restated?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How can function problems typically be restated?`, correct_answer: "as decision problems", trial_name: "a_Computationalcomplexitytheory_2_qa_0"} 
};var a_Computationalcomplexitytheory_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">If two integers are multiplied and output a value, what is this expression set called?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `If two integers are multiplied and output a value, what is this expression set called?`, correct_answer: "set of triples", trial_name: "a_Computationalcomplexitytheory_2_qa_1"} 
};var a_Computationalcomplexitytheory_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Many known complexity classes are <span id="a_Computationalcomplexitytheory_4_qa_0">suspected to be unequal</span>, but this has not been proved. For instance <span id="a_Computationalcomplexitytheory_4_qa_1">P ⊆ NP ⊆ PP ⊆ PSPACE</span>, but it is possible that P = PSPACE. If P is not equal to NP, then P is not equal to PSPACE either. Since there are many known complexity classes <span id="a_Computationalcomplexitytheory_4_qa_2">between P and PSPACE</span>, such as RP, BPP, PP, BQP, MA, PH, etc., it is possible that all these complexity classes collapse to one class. <span id="a_Computationalcomplexitytheory_4_qa_3">Proving that any of these classes are unequal</span> would be a major breakthrough in complexity theory.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What is the unproven assumption generally ascribed to the value of complexity classes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the unproven assumption generally ascribed to the value of complexity classes?`, correct_answer: "suspected to be unequal", trial_name: "a_Computationalcomplexitytheory_4_qa_0"} 
};var a_Computationalcomplexitytheory_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is an expression that can be used to illustrate the suspected inequality of complexity classes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is an expression that can be used to illustrate the suspected inequality of complexity classes?`, correct_answer: "P ⊆ NP ⊆ PP ⊆ PSPACE", trial_name: "a_Computationalcomplexitytheory_4_qa_1"} 
};var a_Computationalcomplexitytheory_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where can the complexity classes RP, BPP, PP, BQP, MA, and PH be located?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where can the complexity classes RP, BPP, PP, BQP, MA, and PH be located?`, correct_answer: "between P and PSPACE", trial_name: "a_Computationalcomplexitytheory_4_qa_2"} 
};var a_Computationalcomplexitytheory_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What evidence between and among complexity classes would signify a theoretical watershed for complexity theory?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What evidence between and among complexity classes would signify a theoretical watershed for complexity theory?`, correct_answer: "Proving that any of these classes are unequal", trial_name: "a_Computationalcomplexitytheory_4_qa_3"} 
};var a_Teacher_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In past times, corporal punishment (spanking or paddling or caning or strapping or birching the student in order to cause <span id="a_Teacher_0_qa_4">physical pain</span>) was <span id="a_Teacher_0_qa_0">one of the most common</span> forms of school discipline throughout much of the world. <span id="a_Teacher_0_qa_1">Most Western countries</span>, and some others, have now banned it, but it remains lawful in the <span id="a_Teacher_0_qa_2">United States</span> following a <span id="a_Teacher_0_qa_3">US Supreme Court</span> decision in 1977 which held that paddling did not violate the US Constitution.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">How common was the form of corporal punishment in the past?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How common was the form of corporal punishment in the past?`, correct_answer: "one of the most common", trial_name: "a_Teacher_0_qa_0"} 
};var a_Teacher_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where is corporal punishment no longer practiced?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where is corporal punishment no longer practiced?`, correct_answer: "Most Western countries", trial_name: "a_Teacher_0_qa_1"} 
};var a_Teacher_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What Western country is corporal punishment still allowed?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What Western country is corporal punishment still allowed?`, correct_answer: "United States", trial_name: "a_Teacher_0_qa_2"} 
};var a_Teacher_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What U.S. entity said that corporal punishment was Constitutional?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What U.S. entity said that corporal punishment was Constitutional?`, correct_answer: "US Supreme Court", trial_name: "a_Teacher_0_qa_3"} 
};var a_Teacher_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What does corporal punishment cause a student?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What does corporal punishment cause a student?`, correct_answer: "physical pain", trial_name: "a_Teacher_0_qa_4"} 
};var a_Teacher_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Teachers in Wales can be registered members of <span id="a_Teacher_1_qa_0"><span id="a_Teacher_1_qa_3">trade unions</span></span> such as ATL, NUT or NASUWT and reports in recent years suggest that the average age of teachers in Wales is <span id="a_Teacher_1_qa_1">falling</span> with teachers being younger than in previous years. A growing cause of <span id="a_Teacher_1_qa_4">concern</span> are that attacks on teachers in Welsh schools which reached an all-time high <span id="a_Teacher_1_qa_2">between 2005 and 2010</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What group can teachers in Wales register with?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What group can teachers in Wales register with?`, correct_answer: "trade unions", trial_name: "a_Teacher_1_qa_0"} 
};var a_Teacher_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is happening to the average age of teachers in Wales?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is happening to the average age of teachers in Wales?`, correct_answer: "falling", trial_name: "a_Teacher_1_qa_1"} 
};var a_Teacher_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When were attacks on teachers the highest?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When were attacks on teachers the highest?`, correct_answer: "between 2005 and 2010", trial_name: "a_Teacher_1_qa_2"} 
};var a_Teacher_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the NASUWT?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the NASUWT?`, correct_answer: "trade unions", trial_name: "a_Teacher_1_qa_3"} 
};var a_Teacher_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What are the attacks on teachers causing?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are the attacks on teachers causing?`, correct_answer: "concern", trial_name: "a_Teacher_1_qa_4"} 
};var a_Teacher_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In Hinduism the spiritual teacher is known as a <span id="a_Teacher_3_qa_0">guru</span>, and, in many traditions of Hinduism - especially those common in <span id="a_Teacher_3_qa_3">the West</span> - the emphasis on spiritual mentorship is <span id="a_Teacher_3_qa_1">extremely high</span>, with gurus often exercising a great deal of control over the lives of <span id="a_Teacher_3_qa_2">their disciples</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What is the name of the spiritual teacher in Hinduism?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the name of the spiritual teacher in Hinduism?`, correct_answer: "guru", trial_name: "a_Teacher_3_qa_0"} 
};var a_Teacher_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Is the focus on spiritual mentorship in Hinduism high or low?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Is the focus on spiritual mentorship in Hinduism high or low?`, correct_answer: "extremely high", trial_name: "a_Teacher_3_qa_1"} 
};var a_Teacher_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who do gurus control?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who do gurus control?`, correct_answer: "their disciples", trial_name: "a_Teacher_3_qa_2"} 
};var a_Teacher_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In what area is it common for spiritual mentorship to be extremely high?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In what area is it common for spiritual mentorship to be extremely high?`, correct_answer: "the West", trial_name: "a_Teacher_3_qa_3"} 
};var a_Teacher_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In Tibetan Buddhism the teachers of Dharma in Tibet are most commonly called a <span id="a_Teacher_4_qa_0">Lama</span>. A Lama who has through <span id="a_Teacher_4_qa_4">phowa and siddhi</span> consciously determined to <span id="a_Teacher_4_qa_1">be reborn</span>, often <span id="a_Teacher_4_qa_3">many times</span>, in order to continue their Bodhisattva vow is called a <span id="a_Teacher_4_qa_2">Tulku</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What is the name of a teacher in Tibetan Buddhism?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the name of a teacher in Tibetan Buddhism?`, correct_answer: "Lama", trial_name: "a_Teacher_4_qa_0"} 
};var a_Teacher_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What has a Lama determined to do?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What has a Lama determined to do?`, correct_answer: "be reborn", trial_name: "a_Teacher_4_qa_1"} 
};var a_Teacher_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the name of a Bodhisattva vow?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the name of a Bodhisattva vow?`, correct_answer: "Tulku", trial_name: "a_Teacher_4_qa_2"} 
};var a_Teacher_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How much has a Lama agreed to be reborn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How much has a Lama agreed to be reborn?`, correct_answer: "many times", trial_name: "a_Teacher_4_qa_3"} 
};var a_Teacher_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What helped the Lama determine to be reborn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What helped the Lama determine to be reborn?`, correct_answer: "phowa and siddhi", trial_name: "a_Teacher_4_qa_4"} 
};var a_MartinLuther_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Luther's writings circulated widely, reaching France, England, and Italy as early as <span id="a_MartinLuther_0_qa_0">1519</span>. <span id="a_MartinLuther_0_qa_1">Students</span> thronged to Wittenberg to hear Luther speak. He published a short commentary on Galatians and his Work on the Psalms. This <span id="a_MartinLuther_0_qa_2">early</span> part of Luther's career was one of his most creative and productive. Three of his best-known works were published in <span id="a_MartinLuther_0_qa_3">1520</span>: To the Christian Nobility of the German Nation, On the Babylonian Captivity of the Church, and <span id="a_MartinLuther_0_qa_4">On the Freedom of a Christian</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">When did Luther's writings to spread to France, England and Italy?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When did Luther's writings to spread to France, England and Italy?`, correct_answer: "1519", trial_name: "a_MartinLuther_0_qa_0"} 
};var a_MartinLuther_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who went to Wittenberg to hear Luther speak?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who went to Wittenberg to hear Luther speak?`, correct_answer: "Students", trial_name: "a_MartinLuther_0_qa_1"} 
};var a_MartinLuther_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What part of Luther's career was one of his most productive?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What part of Luther's career was one of his most productive?`, correct_answer: "early", trial_name: "a_MartinLuther_0_qa_2"} 
};var a_MartinLuther_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When were some of Luther's best-known works published?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When were some of Luther's best-known works published?`, correct_answer: "1520", trial_name: "a_MartinLuther_0_qa_3"} 
};var a_MartinLuther_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Besides publishing To the Christian Nobility of the German Nation and On the Babylonian Captivity of the Church, what other work did Luther produce in 1520?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Besides publishing To the Christian Nobility of the German Nation and On the Babylonian Captivity of the Church, what other work did Luther produce in 1520?`, correct_answer: "On the Freedom of a Christian", trial_name: "a_MartinLuther_0_qa_4"} 
};var a_MartinLuther_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Published at a time of rising demand for <span id="a_MartinLuther_2_qa_0">German-language publications</span>, Luther's version quickly became a popular and influential <span id="a_MartinLuther_2_qa_1">Bible</span> translation. As such, it made a significant contribution to the <span id="a_MartinLuther_2_qa_2">evolution of the German language and literature</span>. Furnished with notes and prefaces by Luther, and with woodcuts by <span id="a_MartinLuther_2_qa_3">Lucas Cranach</span> that contained anti-papal imagery, it played a major role in the spread of Luther's doctrine throughout Germany. The Luther Bible influenced other vernacular translations, such as <span id="a_MartinLuther_2_qa_4">William Tyndale</span>'s English Bible (1525 forward), a precursor of the King James Bible.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">At the time of Martin Luther what was in demand?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `At the time of Martin Luther what was in demand?`, correct_answer: "German-language publications", trial_name: "a_MartinLuther_2_qa_0"} 
};var a_MartinLuther_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What work of Luther's became popular?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What work of Luther's became popular?`, correct_answer: "Bible", trial_name: "a_MartinLuther_2_qa_1"} 
};var a_MartinLuther_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What did the popularity of Luther's translation contribute to?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did the popularity of Luther's translation contribute to?`, correct_answer: "evolution of the German language and literature", trial_name: "a_MartinLuther_2_qa_2"} 
};var a_MartinLuther_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What artist provided the woodcuts for Luther's Bible?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What artist provided the woodcuts for Luther's Bible?`, correct_answer: "Lucas Cranach", trial_name: "a_MartinLuther_2_qa_3"} 
};var a_MartinLuther_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Whose English translation of the Bible did the Luther Bible influence?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Whose English translation of the Bible did the Luther Bible influence?`, correct_answer: "William Tyndale", trial_name: "a_MartinLuther_2_qa_4"} 
};var a_MartinLuther_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Luther's hymns were frequently evoked by particular <span id="a_MartinLuther_3_qa_0">events in his life</span> and the unfolding Reformation. This behavior started with his learning of the execution of Johann Esch and Heinrich Voes, the first individuals to be martyred by the Roman Catholic Church <span id="a_MartinLuther_3_qa_1">for Lutheran views</span>, prompting Luther to write the hymn "<span id="a_MartinLuther_3_qa_2">Ein neues Lied wir heben an</span>" ("A new song we raise"), which is generally known in English by <span id="a_MartinLuther_3_qa_3">John C. Messenger</span>'s translation by the title and first line "<span id="a_MartinLuther_3_qa_4">Flung to the Heedless Winds</span>" and sung to the tune Ibstone composed in 1875 by Maria C. Tiddeman.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What caused Luther to write hymns?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What caused Luther to write hymns?`, correct_answer: "events in his life", trial_name: "a_MartinLuther_3_qa_0"} 
};var a_MartinLuther_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Why were Johann Esch and Heinrich Voes executed by the Catholic Church?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Why were Johann Esch and Heinrich Voes executed by the Catholic Church?`, correct_answer: "for Lutheran views", trial_name: "a_MartinLuther_3_qa_1"} 
};var a_MartinLuther_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What hymn did Luther write after the martyrdom of Esch and Voes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What hymn did Luther write after the martyrdom of Esch and Voes?`, correct_answer: "Ein neues Lied wir heben an", trial_name: "a_MartinLuther_3_qa_2"} 
};var a_MartinLuther_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who is the English translator of this hymn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who is the English translator of this hymn?`, correct_answer: "John C. Messenger", trial_name: "a_MartinLuther_3_qa_3"} 
};var a_MartinLuther_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the hymn known as in English?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the hymn known as in English?`, correct_answer: "Flung to the Heedless Winds", trial_name: "a_MartinLuther_3_qa_4"} 
};var a_MartinLuther_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">A piece of paper was later found on which Luther had written <span id="a_MartinLuther_4_qa_0">his last statement</span>. The statement was in <span id="a_MartinLuther_4_qa_1">Latin</span>, apart from <span id="a_MartinLuther_4_qa_2">"We are beggars,"</span> which was in German.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What was later discovered written by Luther?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was later discovered written by Luther?`, correct_answer: "his last statement", trial_name: "a_MartinLuther_4_qa_0"} 
};var a_MartinLuther_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In what language was most of the statement written? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In what language was most of the statement written? `, correct_answer: "Latin", trial_name: "a_MartinLuther_4_qa_1"} 
};var a_MartinLuther_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What portion of Luther's last statement was in German?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What portion of Luther's last statement was in German?`, correct_answer: "We are beggars,", trial_name: "a_MartinLuther_4_qa_2"} 
};var a_SouthernCalifornia_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Southern California is home to <span id="a_SouthernCalifornia_2_qa_0">Los Angeles International Airport</span>, the second-busiest airport in the United States by <span id="a_SouthernCalifornia_2_qa_1">passenger volume</span> (see World's busiest airports by passenger traffic) and the <span id="a_SouthernCalifornia_2_qa_2">third</span> by international passenger volume (see Busiest airports in the United States by international passenger traffic); <span id="a_SouthernCalifornia_2_qa_3">San Diego International Airport</span> the busiest single runway airport in the world; <span id="a_SouthernCalifornia_2_qa_4">Van Nuys Airport</span>, the world's busiest general aviation airport; major commercial airports at Orange County, Bakersfield, Ontario, Burbank and Long Beach; and numerous smaller commercial and general aviation airports.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_SouthernCalifornia_2_qa_0','#a_SouthernCalifornia_2_qa_1','#a_SouthernCalifornia_2_qa_2','#a_SouthernCalifornia_2_qa_3','#a_SouthernCalifornia_2_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_SouthernCalifornia_2_1280_720.png';
a.click();});}},data: { trial_name: "a_SouthernCalifornia_2"}
};
var a_SouthernCalifornia_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the second busiest airport in the United States?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the second busiest airport in the United States?`, correct_answer: "Los Angeles International Airport", trial_name: "a_SouthernCalifornia_2_qa_0"} 
};var a_SouthernCalifornia_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the metric they use to determine how busy airports are?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the metric they use to determine how busy airports are?`, correct_answer: "passenger volume", trial_name: "a_SouthernCalifornia_2_qa_1"} 
};var a_SouthernCalifornia_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What ranking in terms of busiest airports from international passenger volume is the Los Angeles International Airport?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What ranking in terms of busiest airports from international passenger volume is the Los Angeles International Airport?`, correct_answer: "third", trial_name: "a_SouthernCalifornia_2_qa_2"} 
};var a_SouthernCalifornia_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Which airport is home to the busiest single runway in the world?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Which airport is home to the busiest single runway in the world?`, correct_answer: "San Diego International Airport", trial_name: "a_SouthernCalifornia_2_qa_3"} 
};var a_SouthernCalifornia_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the world's busiest general aviation airport?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the world's busiest general aviation airport?`, correct_answer: "Van Nuys Airport", trial_name: "a_SouthernCalifornia_2_qa_4"} 
};var a_SouthernCalifornia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Professional sports teams in Southern California include teams from the <span id="a_SouthernCalifornia_3_qa_0">NFL</span> (Los Angeles Rams, San Diego Chargers); <span id="a_SouthernCalifornia_3_qa_1">NBA</span> (Los Angeles Lakers, Los Angeles Clippers); <span id="a_SouthernCalifornia_3_qa_2">MLB</span> (Los Angeles Dodgers, Los Angeles Angels of Anaheim, San Diego Padres); NHL (<span id="a_SouthernCalifornia_3_qa_3">Los Angeles Kings</span>, Anaheim Ducks); and MLS (<span id="a_SouthernCalifornia_3_qa_4">LA Galaxy</span>).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">The Los Angeles Rams are an example of what kind of sports team?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `The Los Angeles Rams are an example of what kind of sports team?`, correct_answer: "NFL", trial_name: "a_SouthernCalifornia_3_qa_0"} 
};var a_SouthernCalifornia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">The Los Angeles Clippers are a team belonging to which sport?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `The Los Angeles Clippers are a team belonging to which sport?`, correct_answer: "NBA", trial_name: "a_SouthernCalifornia_3_qa_1"} 
};var a_SouthernCalifornia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">The Los Angeles Angels of Anaheim are from which sport?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `The Los Angeles Angels of Anaheim are from which sport?`, correct_answer: "MLB", trial_name: "a_SouthernCalifornia_3_qa_2"} 
};var a_SouthernCalifornia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the other NHL team aside from the Anaheim Ducks to reside in Southern California?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the other NHL team aside from the Anaheim Ducks to reside in Southern California?`, correct_answer: "Los Angeles Kings", trial_name: "a_SouthernCalifornia_3_qa_3"} 
};var a_SouthernCalifornia_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the lone MLS team that belongs to southern California?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the lone MLS team that belongs to southern California?`, correct_answer: "LA Galaxy", trial_name: "a_SouthernCalifornia_3_qa_4"} 
};var a_SouthernCalifornia_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">From 2005 to <span id="a_SouthernCalifornia_4_qa_2">2014</span>, there were <span id="a_SouthernCalifornia_4_qa_1">two</span> Major League Soccer teams in Los Angeles — the LA Galaxy and Chivas USA — that both played at the <span id="a_SouthernCalifornia_4_qa_3">StubHub Center</span> and were local rivals. However, <span id="a_SouthernCalifornia_4_qa_0">Chivas</span> were suspended following the 2014 MLS season, with a second MLS team scheduled to return in <span id="a_SouthernCalifornia_4_qa_4">2018</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Which team was suspended from the MLS?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Which team was suspended from the MLS?`, correct_answer: "Chivas", trial_name: "a_SouthernCalifornia_4_qa_0"} 
};var a_SouthernCalifornia_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many teams did Los Angeles used to have?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many teams did Los Angeles used to have?`, correct_answer: "two", trial_name: "a_SouthernCalifornia_4_qa_1"} 
};var a_SouthernCalifornia_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Which year resulted in the suspension of one of the two soccer teams?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Which year resulted in the suspension of one of the two soccer teams?`, correct_answer: "2014", trial_name: "a_SouthernCalifornia_4_qa_2"} 
};var a_SouthernCalifornia_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the name of the stadium that the teams played in?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the name of the stadium that the teams played in?`, correct_answer: "StubHub Center", trial_name: "a_SouthernCalifornia_4_qa_3"} 
};var a_SouthernCalifornia_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When is the suspended team scheduled to return?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When is the suspended team scheduled to return?`, correct_answer: "2018", trial_name: "a_SouthernCalifornia_4_qa_4"} 
};var a_SkyUnitedKingdom_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">BSkyB's standard definition broadcasts are in <span id="a_SkyUnitedKingdom_0_qa_0">DVB-compliant MPEG-2</span>, with the Sky Movies and Sky Box Office channels including optional <span id="a_SkyUnitedKingdom_0_qa_1">Dolby Digital</span> soundtracks for recent films, although these are only accessible with a Sky+ box. Sky+ HD material is broadcast using <span id="a_SkyUnitedKingdom_0_qa_2">MPEG-4</span> and most of the HD material uses the <span id="a_SkyUnitedKingdom_0_qa_4">DVB-S2</span> standard. Interactive services and 7-day EPG use the proprietary <span id="a_SkyUnitedKingdom_0_qa_3">OpenTV</span> system, with set-top boxes including modems for a return path. Sky News, amongst other channels, provides a pseudo-video on demand interactive service by broadcasting looping video streams.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_SkyUnitedKingdom_0_qa_0','#a_SkyUnitedKingdom_0_qa_1','#a_SkyUnitedKingdom_0_qa_2','#a_SkyUnitedKingdom_0_qa_3','#a_SkyUnitedKingdom_0_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_SkyUnitedKingdom_0_1280_720.png';
a.click();});}},data: { trial_name: "a_SkyUnitedKingdom_0"}
};
var a_SkyUnitedKingdom_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What are BSkyB's standard definition broadcasts compliant with?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are BSkyB's standard definition broadcasts compliant with?`, correct_answer: "DVB-compliant MPEG-2", trial_name: "a_SkyUnitedKingdom_0_qa_0"} 
};var a_SkyUnitedKingdom_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Sky Movies and Sky Box office also include what optional soundtracks?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Sky Movies and Sky Box office also include what optional soundtracks?`, correct_answer: "Dolby Digital", trial_name: "a_SkyUnitedKingdom_0_qa_1"} 
};var a_SkyUnitedKingdom_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is Sky+ HD material broadcast using?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is Sky+ HD material broadcast using?`, correct_answer: "MPEG-4", trial_name: "a_SkyUnitedKingdom_0_qa_2"} 
};var a_SkyUnitedKingdom_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the proprietary system that Sky+HD uses?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the proprietary system that Sky+HD uses?`, correct_answer: "OpenTV", trial_name: "a_SkyUnitedKingdom_0_qa_3"} 
};var a_SkyUnitedKingdom_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What does most of the HD material use as a standard?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What does most of the HD material use as a standard?`, correct_answer: "DVB-S2", trial_name: "a_SkyUnitedKingdom_0_qa_4"} 
};var a_SkyUnitedKingdom_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">When Sky Digital was launched in <span id="a_SkyUnitedKingdom_1_qa_0">1998</span> the new service used the <span id="a_SkyUnitedKingdom_1_qa_1">Astra 2A</span> satellite which was located at the 28.5°E orbital position, unlike the analogue service which was broadcast from 19.2°E. This was subsequently followed by more Astra satellites as well as <span id="a_SkyUnitedKingdom_1_qa_2">Eutelsat's Eurobird 1</span> (now Eutelsat 33C) at 28.5°E), enabled the company to launch a new all-digital service, Sky, with the potential to carry <span id="a_SkyUnitedKingdom_1_qa_3">hundreds</span> of television and radio channels. The old position was shared with broadcasters from several European countries, while the new position at <span id="a_SkyUnitedKingdom_1_qa_4">28.5°E</span> came to be used almost exclusively for channels that broadcast to the United Kingdom.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">When was Sky Digital launched?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When was Sky Digital launched?`, correct_answer: "1998", trial_name: "a_SkyUnitedKingdom_1_qa_0"} 
};var a_SkyUnitedKingdom_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What satellite was used when Sky digital was launched?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What satellite was used when Sky digital was launched?`, correct_answer: "Astra 2A", trial_name: "a_SkyUnitedKingdom_1_qa_1"} 
};var a_SkyUnitedKingdom_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What satellite enabled Sky Digital to launch an all new digital service?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What satellite enabled Sky Digital to launch an all new digital service?`, correct_answer: "Eutelsat's Eurobird 1", trial_name: "a_SkyUnitedKingdom_1_qa_2"} 
};var a_SkyUnitedKingdom_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many television and radio channels could the new digital service carry?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many television and radio channels could the new digital service carry?`, correct_answer: "hundreds", trial_name: "a_SkyUnitedKingdom_1_qa_3"} 
};var a_SkyUnitedKingdom_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the position of the satellite that allowed sky to broadcast channels almost elclusively for the United Kingdom?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the position of the satellite that allowed sky to broadcast channels almost elclusively for the United Kingdom?`, correct_answer: "28.5°E", trial_name: "a_SkyUnitedKingdom_1_qa_4"} 
};var a_SkyUnitedKingdom_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The agreements include fixed annual carriage fees of <span id="a_SkyUnitedKingdom_4_qa_0">£30m</span> for the channels with both channel suppliers able to secure additional capped payments if their channels meet certain performance-related targets. Currently there is <span id="a_SkyUnitedKingdom_4_qa_1">no indication</span> as to whether the new deal includes the additional Video On Demand and High Definition content which had previously been offered by BSkyB. As part of the agreements, both <span id="a_SkyUnitedKingdom_4_qa_3">BSkyB</span> and <span id="a_SkyUnitedKingdom_4_qa_2">Virgin Media</span> agreed to terminate all High Court proceedings against each other relating to the carriage of their respective <span id="a_SkyUnitedKingdom_4_qa_4">basic channels</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What were the annual carriage fees for the channels?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What were the annual carriage fees for the channels?`, correct_answer: "£30m", trial_name: "a_SkyUnitedKingdom_4_qa_0"} 
};var a_SkyUnitedKingdom_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Does the new deal include Video on demand and High Definition?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Does the new deal include Video on demand and High Definition?`, correct_answer: "no indication", trial_name: "a_SkyUnitedKingdom_4_qa_1"} 
};var a_SkyUnitedKingdom_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What company agreed to terminate high court proceedings with BSkyB?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What company agreed to terminate high court proceedings with BSkyB?`, correct_answer: "Virgin Media", trial_name: "a_SkyUnitedKingdom_4_qa_2"} 
};var a_SkyUnitedKingdom_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What company agreed to terminate high court proceedings with Virgin Media?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What company agreed to terminate high court proceedings with Virgin Media?`, correct_answer: "BSkyB", trial_name: "a_SkyUnitedKingdom_4_qa_3"} 
};var a_SkyUnitedKingdom_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What were high court proceedings being held about?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What were high court proceedings being held about?`, correct_answer: "basic channels", trial_name: "a_SkyUnitedKingdom_4_qa_4"} 
};var a_VictoriaAustralia_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Victoria has a written constitution enacted in <span id="a_VictoriaAustralia_1_qa_0">1975</span>, but based on the <span id="a_VictoriaAustralia_1_qa_1">1855 colonial constitution</span>, passed by the United Kingdom Parliament as the <span id="a_VictoriaAustralia_1_qa_4">Victoria Constitution Act 1855</span>, which establishes the Parliament as the state's law-making body for matters coming under state responsibility. The Victorian Constitution can be amended by the <span id="a_VictoriaAustralia_1_qa_2">Parliament of Victoria</span>, except for certain <span id="a_VictoriaAustralia_1_qa_3">"entrenched" provisions</span> that require either an absolute majority in both houses, a three-fifths majority in both houses, or the approval of the Victorian people in a referendum, depending on the provision.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">When did Victoria enact its constitution?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When did Victoria enact its constitution?`, correct_answer: "1975", trial_name: "a_VictoriaAustralia_1_qa_0"} 
};var a_VictoriaAustralia_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">On what is Victoria's constitution based ?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `On what is Victoria's constitution based ?`, correct_answer: "1855 colonial constitution", trial_name: "a_VictoriaAustralia_1_qa_1"} 
};var a_VictoriaAustralia_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What group can amend the Victorian constitution?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What group can amend the Victorian constitution?`, correct_answer: "Parliament of Victoria", trial_name: "a_VictoriaAustralia_1_qa_2"} 
};var a_VictoriaAustralia_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What are the exceptions in the constitution  that require special considerations to amend?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are the exceptions in the constitution  that require special considerations to amend?`, correct_answer: "entrenched provisions", trial_name: "a_VictoriaAustralia_1_qa_3"} 
};var a_VictoriaAustralia_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What document formed the Parliament of Victoria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What document formed the Parliament of Victoria?`, correct_answer: "Victoria Constitution Act 1855", trial_name: "a_VictoriaAustralia_1_qa_4"} 
};var a_VictoriaAustralia_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Historically, Victoria has been the base for the manufacturing plants of the <span id="a_VictoriaAustralia_2_qa_0">major car brands</span> Ford, Toyota and Holden; however, closure announcements by all three companies in the 21st century will mean that Australia will no longer be a base for the global car industry, with Toyota's statement in February 2014 outlining a closure year of <span id="a_VictoriaAustralia_2_qa_1">2017</span>. Holden's announcement occurred in <span id="a_VictoriaAustralia_2_qa_2">May 2013</span>, followed by Ford's decision in December of the same year (<span id="a_VictoriaAustralia_2_qa_4">Ford</span>'s Victorian plants—in Broadmeadows and Geelong—will close in <span id="a_VictoriaAustralia_2_qa_3">October 2016</span>).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What type of manufacturing plant is Victoria soon losing?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What type of manufacturing plant is Victoria soon losing?`, correct_answer: "major car brands", trial_name: "a_VictoriaAustralia_2_qa_0"} 
};var a_VictoriaAustralia_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When has Toyota said it will close its Victoria plant?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When has Toyota said it will close its Victoria plant?`, correct_answer: "2017", trial_name: "a_VictoriaAustralia_2_qa_1"} 
};var a_VictoriaAustralia_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When did Holden announce that it will close its Victoria plant?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When did Holden announce that it will close its Victoria plant?`, correct_answer: "May 2013", trial_name: "a_VictoriaAustralia_2_qa_2"} 
};var a_VictoriaAustralia_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When will Ford's manufacturing plants close?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When will Ford's manufacturing plants close?`, correct_answer: "October 2016", trial_name: "a_VictoriaAustralia_2_qa_3"} 
};var a_VictoriaAustralia_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What brand of car is manufactured in Broadmeadows?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What brand of car is manufactured in Broadmeadows?`, correct_answer: "Ford", trial_name: "a_VictoriaAustralia_2_qa_4"} 
};var a_VictoriaAustralia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">There are also several smaller freight operators and numerous tourist railways operating over lines which were once parts of a state-owned system. Victorian lines mainly use the <span id="a_VictoriaAustralia_3_qa_0">1,600 mm (5 ft 3 in) broad gauge</span>. However, the interstate trunk routes, as well as a number of branch lines in the west of the state have been converted to <span id="a_VictoriaAustralia_3_qa_1">1,435 mm (4 ft 8 1⁄2 in) standard gauge</span>. Two tourist railways operate over <span id="a_VictoriaAustralia_3_qa_2">760 mm (2 ft 6 in) narrow gauge lines</span>, which are the remnants of <span id="a_VictoriaAustralia_3_qa_4">five</span> formerly government-owned lines which were built in <span id="a_VictoriaAustralia_3_qa_3">mountainous areas</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What is the gauge of the Victorian rail lines?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the gauge of the Victorian rail lines?`, correct_answer: "1,600 mm (5 ft 3 in) broad gauge", trial_name: "a_VictoriaAustralia_3_qa_0"} 
};var a_VictoriaAustralia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">To what gauge have some lines been changed in the west of Victoria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `To what gauge have some lines been changed in the west of Victoria?`, correct_answer: "1,435 mm (4 ft 8 1⁄2 in) standard gauge", trial_name: "a_VictoriaAustralia_3_qa_1"} 
};var a_VictoriaAustralia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What gauge of rail lines do two tourist lines use?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What gauge of rail lines do two tourist lines use?`, correct_answer: "760 mm (2 ft 6 in) narrow gauge lines", trial_name: "a_VictoriaAustralia_3_qa_2"} 
};var a_VictoriaAustralia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where were the narrow gauge rail lines built in Victoria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where were the narrow gauge rail lines built in Victoria?`, correct_answer: "mountainous areas", trial_name: "a_VictoriaAustralia_3_qa_3"} 
};var a_VictoriaAustralia_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many narrow gauge rail lines were previously government owned?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many narrow gauge rail lines were previously government owned?`, correct_answer: "five", trial_name: "a_VictoriaAustralia_3_qa_4"} 
};var a_Huguenot_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Renewed religious warfare in the 1620s caused the political and military privileges of the Huguenots to be abolished following their defeat. They retained the religious provisions of the Edict of Nantes until the rule of <span id="a_Huguenot_0_qa_2">Louis XIV</span>, who progressively increased persecution of them until he issued the <span id="a_Huguenot_0_qa_0">Edict of Fontainebleau</span> (<span id="a_Huguenot_0_qa_1">1685</span>), which abolished all legal recognition of Protestantism in France, and forced the Huguenots to convert. While nearly three-quarters eventually were killed  or submitted, roughly <span id="a_Huguenot_0_qa_3">500,000</span> Huguenots had fled France by the early 18th century[citation needed].</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What proclamation abolished protestantism in France?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What proclamation abolished protestantism in France?`, correct_answer: "Edict of Fontainebleau", trial_name: "a_Huguenot_0_qa_0"} 
};var a_Huguenot_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When was this edict declared?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When was this edict declared?`, correct_answer: "1685", trial_name: "a_Huguenot_0_qa_1"} 
};var a_Huguenot_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Which French kind issued this declaration?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Which French kind issued this declaration?`, correct_answer: "Louis XIV", trial_name: "a_Huguenot_0_qa_2"} 
};var a_Huguenot_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many Huguenots fled France by the 1700s?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many Huguenots fled France by the 1700s?`, correct_answer: "500,000", trial_name: "a_Huguenot_0_qa_3"} 
};var a_Steamengine_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The heat required for boiling the water and supplying the steam can be derived from various sources, most commonly from <span id="a_Steamengine_0_qa_0">burning combustible materials</span> with an appropriate supply of air in a closed space (called variously <span id="a_Steamengine_0_qa_1">combustion chamber</span>, firebox). In some cases the heat source is a nuclear reactor, geothermal energy, <span id="a_Steamengine_0_qa_2">solar</span> energy or waste heat from an internal combustion engine or industrial process. In the case of model or toy steam engines, the heat source can be an <span id="a_Steamengine_0_qa_3">electric</span> heating element.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What is the usual source of heat for boiling water in the steam engine?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the usual source of heat for boiling water in the steam engine?`, correct_answer: "burning combustible materials", trial_name: "a_Steamengine_0_qa_0"} 
};var a_Steamengine_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Aside from firebox, what is another name for the space in which combustible material is burned in the engine?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Aside from firebox, what is another name for the space in which combustible material is burned in the engine?`, correct_answer: "combustion chamber", trial_name: "a_Steamengine_0_qa_1"} 
};var a_Steamengine_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Along with nuclear, geothermal and internal combustion engine waste heat, what sort of energy might supply the heat for a steam engine?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Along with nuclear, geothermal and internal combustion engine waste heat, what sort of energy might supply the heat for a steam engine?`, correct_answer: "solar", trial_name: "a_Steamengine_0_qa_2"} 
};var a_Steamengine_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What type of heating element is often used in toy steam engines?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What type of heating element is often used in toy steam engines?`, correct_answer: "electric", trial_name: "a_Steamengine_0_qa_3"} 
};var a_Steamengine_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Although the reciprocating steam engine is no longer in widespread commercial use, various companies are exploring or exploiting the potential of the engine as an alternative to internal combustion engines. The company <span id="a_Steamengine_3_qa_0">Energiprojekt AB</span> in <span id="a_Steamengine_3_qa_1">Sweden</span> has made progress in using modern materials for harnessing the power of steam. The efficiency of Energiprojekt's steam engine reaches some <span id="a_Steamengine_3_qa_4">27-30%</span> on high-pressure engines. It is a single-step, <span id="a_Steamengine_3_qa_2">5</span>-cylinder engine (no compound) with superheated steam and consumes approx. 4 kg (<span id="a_Steamengine_3_qa_3">8.8</span> lb) of steam per kWh.[not in citation given]</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What modern company has been notably working on a steam engine using modern materials?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What modern company has been notably working on a steam engine using modern materials?`, correct_answer: "Energiprojekt AB", trial_name: "a_Steamengine_3_qa_0"} 
};var a_Steamengine_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where is Energiprojekt AB based?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where is Energiprojekt AB based?`, correct_answer: "Sweden", trial_name: "a_Steamengine_3_qa_1"} 
};var a_Steamengine_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many cylinders does the Energiprojekt AB engine have?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many cylinders does the Energiprojekt AB engine have?`, correct_answer: "5", trial_name: "a_Steamengine_3_qa_2"} 
};var a_Steamengine_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many pounds of steam per kilowatt hour does the Energiprojekt AB engine use?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many pounds of steam per kilowatt hour does the Energiprojekt AB engine use?`, correct_answer: "8.8", trial_name: "a_Steamengine_3_qa_3"} 
};var a_Steamengine_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What percentage of a high pressure engine's efficiency has the Energiprojekt AB engine achieved?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What percentage of a high pressure engine's efficiency has the Energiprojekt AB engine achieved?`, correct_answer: "27-30%", trial_name: "a_Steamengine_3_qa_4"} 
};var a_Oxygen_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In <span id="a_Oxygen_1_qa_1">1891</span> Scottish chemist <span id="a_Oxygen_1_qa_0">James Dewar</span> was able to produce enough liquid oxygen to study. The first commercially viable process for producing liquid oxygen was independently developed in <span id="a_Oxygen_1_qa_2">1895</span> by German engineer Carl von Linde and British engineer William Hampson. Both men lowered the temperature of air until it liquefied and then distilled the component gases by boiling them off one at a time and capturing them. Later, in 1901, <span id="a_Oxygen_1_qa_3">oxyacetylene welding</span> was demonstrated for the first time by burning a mixture of acetylene and compressed O
2. This method of welding and cutting metal later became common.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What chemist managed to make enough liquid oxygen to use for study?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What chemist managed to make enough liquid oxygen to use for study?`, correct_answer: "James Dewar", trial_name: "a_Oxygen_1_qa_0"} 
};var a_Oxygen_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In what year did Dewar experiment on liquid oxygen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In what year did Dewar experiment on liquid oxygen?`, correct_answer: "1891", trial_name: "a_Oxygen_1_qa_1"} 
};var a_Oxygen_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When was liquid oxygen developed for commercial use?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When was liquid oxygen developed for commercial use?`, correct_answer: "1895", trial_name: "a_Oxygen_1_qa_2"} 
};var a_Oxygen_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What welding process was demonstrated in 1901?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What welding process was demonstrated in 1901?`, correct_answer: "oxyacetylene welding", trial_name: "a_Oxygen_1_qa_3"} 
};var a_1973oilcrisis_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_1973oilcrisis_1_qa_0">The embargo</span> had a negative influence on the US economy by causing immediate demands to address the threats to U.S. energy security. On an international level, the price increases changed competitive positions in many industries, such as <span id="a_1973oilcrisis_1_qa_1">automobiles</span>. <span id="a_1973oilcrisis_1_qa_2">Macroeconomic</span> problems consisted of both inflationary and deflationary impacts. The embargo left oil companies searching for new ways to increase oil supplies, even in rugged terrain such as the <span id="a_1973oilcrisis_1_qa_3">Arctic</span>. Finding oil and developing new fields usually required <span id="a_1973oilcrisis_1_qa_4">five to ten years</span> before significant production.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What has a negative influence over the US economy?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What has a negative influence over the US economy?`, correct_answer: "The embargo", trial_name: "a_1973oilcrisis_1_qa_0"} 
};var a_1973oilcrisis_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">On an international level, which industry's competitive positions is affected? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `On an international level, which industry's competitive positions is affected? `, correct_answer: "automobiles", trial_name: "a_1973oilcrisis_1_qa_1"} 
};var a_1973oilcrisis_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Which problem consists of both  inflationary and deflationary impacts?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Which problem consists of both  inflationary and deflationary impacts?`, correct_answer: "Macroeconomic", trial_name: "a_1973oilcrisis_1_qa_2"} 
};var a_1973oilcrisis_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">The oil crisis caused oil companies to increase oil supplies in which area?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `The oil crisis caused oil companies to increase oil supplies in which area?`, correct_answer: "Arctic", trial_name: "a_1973oilcrisis_1_qa_3"} 
};var a_1973oilcrisis_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How long does it take for new areas to have significant oil production?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How long does it take for new areas to have significant oil production?`, correct_answer: "five to ten years", trial_name: "a_1973oilcrisis_1_qa_4"} 
};var a_1973oilcrisis_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In <span id="a_1973oilcrisis_2_qa_1">1973</span>, Nixon named <span id="a_1973oilcrisis_2_qa_0">William E. Simon</span> as the first Administrator of the Federal Energy Office, a short-term organization created <span id="a_1973oilcrisis_2_qa_2">to coordinate the response to the embargo</span>. Simon allocated states the same amount of domestic oil for 1974 that each had consumed in 1972, which worked for states whose populations were not increasing. In other states, lines at gasoline stations were common. The American Automobile Association reported that in the last week of February 1974, <span id="a_1973oilcrisis_2_qa_3">20%</span> of American gasoline stations had no fuel.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Who is the first administrator of the Federal Energy Office?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who is the first administrator of the Federal Energy Office?`, correct_answer: "William E. Simon", trial_name: "a_1973oilcrisis_2_qa_0"} 
};var a_1973oilcrisis_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When was he elected by Nixon?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When was he elected by Nixon?`, correct_answer: "1973", trial_name: "a_1973oilcrisis_2_qa_1"} 
};var a_1973oilcrisis_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Why was this short termed organization created?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Why was this short termed organization created?`, correct_answer: "to coordinate the response to the embargo", trial_name: "a_1973oilcrisis_2_qa_2"} 
};var a_1973oilcrisis_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">According to the AAA, what is the percentage of the gas stations that ran out of gasoline?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `According to the AAA, what is the percentage of the gas stations that ran out of gasoline?`, correct_answer: "20%", trial_name: "a_1973oilcrisis_2_qa_3"} 
};var a_1973oilcrisis_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The <span id="a_1973oilcrisis_3_qa_0">energy crisis</span> led to greater interest in renewable energy, nuclear power and domestic fossil fuels. There is criticism that American energy policies since the crisis have been dominated by crisis-mentality thinking, promoting expensive quick fixes and single-shot solutions that ignore <span id="a_1973oilcrisis_3_qa_1">market and technology realities</span>. Instead of providing stable rules that support basic research while leaving plenty of scope for entrepreneurship and innovation, <span id="a_1973oilcrisis_3_qa_2">congresses and presidents</span> have repeatedly backed policies which promise solutions that are politically expedient, but whose prospects are doubtful.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_1973oilcrisis_3_qa_0','#a_1973oilcrisis_3_qa_1','#a_1973oilcrisis_3_qa_2'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_1973oilcrisis_3_1280_720.png';
a.click();});}},data: { trial_name: "a_1973oilcrisis_3"}
};
var a_1973oilcrisis_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the catalyst that created greater interest in renewable resources?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the catalyst that created greater interest in renewable resources?`, correct_answer: "energy crisis", trial_name: "a_1973oilcrisis_3_qa_0"} 
};var a_1973oilcrisis_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">There is criticism that the energy policies are expensive quick fixes that ignore which facts?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `There is criticism that the energy policies are expensive quick fixes that ignore which facts?`, correct_answer: "market and technology realities", trial_name: "a_1973oilcrisis_3_qa_1"} 
};var a_1973oilcrisis_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who backed policies that have solutions that sound good but have poor prospects?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who backed policies that have solutions that sound good but have poor prospects?`, correct_answer: "congresses and presidents", trial_name: "a_1973oilcrisis_3_qa_2"} 
};var a_Apolloprogram_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">After an <span id="a_Apolloprogram_1_qa_0">unmanned</span> LM test flight AS-206, a crew would fly the first Block II CSM and LM in a dual mission known as AS-207/208, or AS-278 (each spacecraft would be launched on a separate Saturn IB.) The Block II crew positions were titled Commander (CDR) Command Module Pilot (CMP) and <span id="a_Apolloprogram_1_qa_4">Lunar Module Pilot</span> (LMP). The astronauts would begin wearing a <span id="a_Apolloprogram_1_qa_1">new Apollo spacesuit</span>, designed to accommodate lunar extravehicular activity (EVA). The traditional <span id="a_Apolloprogram_1_qa_2">visor helmet</span> was replaced with a clear "fishbowl" type for greater visibility, and the lunar surface EVA suit would include a <span id="a_Apolloprogram_1_qa_3">water-cooled undergarment.</span></p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Apolloprogram_1_qa_0','#a_Apolloprogram_1_qa_1','#a_Apolloprogram_1_qa_2','#a_Apolloprogram_1_qa_3','#a_Apolloprogram_1_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Apolloprogram_1_1280_720.png';
a.click();});}},data: { trial_name: "a_Apolloprogram_1"}
};
var a_Apolloprogram_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many people were on the test flight of the AS-206?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many people were on the test flight of the AS-206?`, correct_answer: "unmanned", trial_name: "a_Apolloprogram_1_qa_0"} 
};var a_Apolloprogram_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What were the astronauts wearing during the dual mission AS-278?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What were the astronauts wearing during the dual mission AS-278?`, correct_answer: "new Apollo spacesuit", trial_name: "a_Apolloprogram_1_qa_1"} 
};var a_Apolloprogram_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was originally on the spacesuits prior to the clear "fishbowl" helmet?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was originally on the spacesuits prior to the clear "fishbowl" helmet?`, correct_answer: "visor helmet", trial_name: "a_Apolloprogram_1_qa_2"} 
};var a_Apolloprogram_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What type of undergarment, if any, was included into the Apollo spacesuit?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What type of undergarment, if any, was included into the Apollo spacesuit?`, correct_answer: "water-cooled undergarment.", trial_name: "a_Apolloprogram_1_qa_3"} 
};var a_Apolloprogram_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What did the LMP acronym stand for regarding the Block II launch positions?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did the LMP acronym stand for regarding the Block II launch positions?`, correct_answer: "Lunar Module Pilot", trial_name: "a_Apolloprogram_1_qa_4"} 
};var a_Apolloprogram_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Apolloprogram_2_qa_1">Grissom, White, and Chaffee</span> decided to name their flight Apollo 1 as a motivational focus on the first manned flight. They trained and conducted tests of their spacecraft at <span id="a_Apolloprogram_2_qa_3">North American</span>, and in the <span id="a_Apolloprogram_2_qa_0">altitude chamber</span> at the Kennedy Space Center. A "plugs-out" test was planned for January, which would simulate a <span id="a_Apolloprogram_2_qa_2">launch countdown</span> on LC-34 with the spacecraft transferring from pad-supplied to internal power. If successful, this would be followed by a more rigorous countdown simulation test closer to the February 21 launch, with both spacecraft and launch vehicle fueled.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Where did Apollo 1's crew conduct tests at Kennedy Space Center?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where did Apollo 1's crew conduct tests at Kennedy Space Center?`, correct_answer: "altitude chamber", trial_name: "a_Apolloprogram_2_qa_0"} 
};var a_Apolloprogram_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who was the main crew of Apollo 1, of which they named themselves?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who was the main crew of Apollo 1, of which they named themselves?`, correct_answer: "Grissom, White, and Chaffee", trial_name: "a_Apolloprogram_2_qa_1"} 
};var a_Apolloprogram_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was a plugs-out test done to simulate on the LC-34?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was a plugs-out test done to simulate on the LC-34?`, correct_answer: "launch countdown", trial_name: "a_Apolloprogram_2_qa_2"} 
};var a_Apolloprogram_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What other location did Apollo 1 test at besides Kennedy Space Center?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What other location did Apollo 1 test at besides Kennedy Space Center?`, correct_answer: "North American", trial_name: "a_Apolloprogram_2_qa_3"} 
};var a_Apolloprogram_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The plugs-out test began on the morning of <span id="a_Apolloprogram_3_qa_1">January 27, 1967</span>, and immediately was plagued with problems. First the crew noticed a <span id="a_Apolloprogram_3_qa_0">strange odor in their spacesuits</span>, which delayed the sealing of the hatch. Then, communications problems frustrated the astronauts and forced a hold in the simulated countdown. During this hold, an <span id="a_Apolloprogram_3_qa_2">electrical fire</span> began in the cabin, and spread quickly in the high pressure, <span id="a_Apolloprogram_3_qa_4">100% oxygen</span> atmosphere. Pressure rose high enough from the fire that the cabin burst and the fire erupted onto the pad area, frustrating attempts to rescue the crew. The astronauts were <span id="a_Apolloprogram_3_qa_3">asphyxiated</span> before the hatch could be opened.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Apolloprogram_3_qa_0','#a_Apolloprogram_3_qa_1','#a_Apolloprogram_3_qa_2','#a_Apolloprogram_3_qa_3','#a_Apolloprogram_3_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Apolloprogram_3_1280_720.png';
a.click();});}},data: { trial_name: "a_Apolloprogram_3"}
};
var a_Apolloprogram_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the first problem astronauts encountered during the plugs-out test?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the first problem astronauts encountered during the plugs-out test?`, correct_answer: "strange odor in their spacesuits", trial_name: "a_Apolloprogram_3_qa_0"} 
};var a_Apolloprogram_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When did the very first plugs-out test occur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When did the very first plugs-out test occur?`, correct_answer: "January 27, 1967", trial_name: "a_Apolloprogram_3_qa_1"} 
};var a_Apolloprogram_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What happened during the plugs-out test during the delay for the spacesuit odor? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What happened during the plugs-out test during the delay for the spacesuit odor? `, correct_answer: "electrical fire", trial_name: "a_Apolloprogram_3_qa_2"} 
};var a_Apolloprogram_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What happened to the crew onboard during the plugs-out test?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What happened to the crew onboard during the plugs-out test?`, correct_answer: "asphyxiated", trial_name: "a_Apolloprogram_3_qa_3"} 
};var a_Apolloprogram_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What type of atmosphere helped fuel the fire throughout the cabin?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What type of atmosphere helped fuel the fire throughout the cabin?`, correct_answer: "100% oxygen", trial_name: "a_Apolloprogram_3_qa_4"} 
};var a_Apolloprogram_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">With a budget of $230,000, the surviving original lunar broadcast data from Apollo 11 was compiled by <span id="a_Apolloprogram_4_qa_0">Nafzger</span> and assigned to <span id="a_Apolloprogram_4_qa_3">Lowry Digital</span> for restoration. The video was processed to remove random noise and camera shake <span id="a_Apolloprogram_4_qa_1">without destroying historical legitimacy</span>. The images were from tapes in Australia, the CBS News archive, and <span id="a_Apolloprogram_4_qa_2">kinescope recordings</span> made at Johnson Space Center. The restored video, remaining in <span id="a_Apolloprogram_4_qa_4">black and white</span>, contains conservative digital enhancements and did not include sound quality improvements.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Who compiled the original surviving Apollo 11 landing data?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who compiled the original surviving Apollo 11 landing data?`, correct_answer: "Nafzger", trial_name: "a_Apolloprogram_4_qa_0"} 
};var a_Apolloprogram_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Were the tapes able to be restored and processed without destroying historical legitimacy or did some aspects of the tapes lose legitimacy?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Were the tapes able to be restored and processed without destroying historical legitimacy or did some aspects of the tapes lose legitimacy?`, correct_answer: "without destroying historical legitimacy", trial_name: "a_Apolloprogram_4_qa_1"} 
};var a_Apolloprogram_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What types of recordings at Johnson Space Center were used to help restore the original tapes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What types of recordings at Johnson Space Center were used to help restore the original tapes?`, correct_answer: "kinescope recordings", trial_name: "a_Apolloprogram_4_qa_2"} 
};var a_Apolloprogram_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Which company was tasked with trying to restore the original tapes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Which company was tasked with trying to restore the original tapes?`, correct_answer: "Lowry Digital", trial_name: "a_Apolloprogram_4_qa_3"} 
};var a_Apolloprogram_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Were the restored tapes able to have color added to them to enhance the picture or did they remain black and white?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Were the restored tapes able to have color added to them to enhance the picture or did they remain black and white?`, correct_answer: "black and white", trial_name: "a_Apolloprogram_4_qa_4"} 
};var a_Amazonrainforest_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The needs of <span id="a_Amazonrainforest_2_qa_0">soy</span> farmers have been used to justify many of the controversial transportation projects that are currently developing in the Amazon. The first two highways successfully opened up the rainforest and led to <span id="a_Amazonrainforest_2_qa_1">increased settlement and deforestation</span>. The mean annual deforestation rate from 2000 to 2005 (22,392 km2 or <span id="a_Amazonrainforest_2_qa_2">8,646 sq mi</span> per year) was <span id="a_Amazonrainforest_2_qa_4">18%</span> higher than in the previous five years (19,018 km2 or 7,343 sq mi per year). Although deforestation has <span id="a_Amazonrainforest_2_qa_3">declined significantly</span> in the Brazilian Amazon between 2004 and 2014, there has been an increase to the present day.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Highways built in the Amazon rainforest were built primarily for what kind of farmers?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Highways built in the Amazon rainforest were built primarily for what kind of farmers?`, correct_answer: "soy", trial_name: "a_Amazonrainforest_2_qa_0"} 
};var a_Amazonrainforest_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What did creating highways in the Amazon rainforest lead to?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did creating highways in the Amazon rainforest lead to?`, correct_answer: "increased settlement and deforestation", trial_name: "a_Amazonrainforest_2_qa_1"} 
};var a_Amazonrainforest_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">The rate of clearing of forest from 2000 to 2005 was how many square miles per year?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `The rate of clearing of forest from 2000 to 2005 was how many square miles per year?`, correct_answer: "8,646 sq mi", trial_name: "a_Amazonrainforest_2_qa_2"} 
};var a_Amazonrainforest_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What happened to the rate of deforestation in the Amazon region of Brazil between 2004 and 2014?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What happened to the rate of deforestation in the Amazon region of Brazil between 2004 and 2014?`, correct_answer: "declined significantly", trial_name: "a_Amazonrainforest_2_qa_3"} 
};var a_Amazonrainforest_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How much higher was the rate of deforestation in 2000, to 2005 compared to 1995 to 2000?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How much higher was the rate of deforestation in 2000, to 2005 compared to 1995 to 2000?`, correct_answer: "18%", trial_name: "a_Amazonrainforest_2_qa_4"} 
};var a_Amazonrainforest_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Environmentalists are concerned about loss of <span id="a_Amazonrainforest_3_qa_0">biodiversity</span> that will result from <span id="a_Amazonrainforest_3_qa_1">destruction of the forest</span>, and also about the release of the <span id="a_Amazonrainforest_3_qa_2">carbon contained within the vegetation</span>, which could accelerate global warming. Amazonian evergreen forests account for about 10% of the world's terrestrial primary productivity and <span id="a_Amazonrainforest_3_qa_3">10%</span> of the carbon stores in ecosystems—of the order of <span id="a_Amazonrainforest_3_qa_4">1.1 × 1011</span> metric tonnes of carbon. Amazonian forests are estimated to have accumulated 0.62 ± 0.37 tons of carbon per hectare per year between 1975 and 1996.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What are environmentalists concerned about losing in the Amazon forest?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are environmentalists concerned about losing in the Amazon forest?`, correct_answer: "biodiversity", trial_name: "a_Amazonrainforest_3_qa_0"} 
};var a_Amazonrainforest_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">The loss of biodiversity may be the result of what, according to environmentalists?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `The loss of biodiversity may be the result of what, according to environmentalists?`, correct_answer: "destruction of the forest", trial_name: "a_Amazonrainforest_3_qa_1"} 
};var a_Amazonrainforest_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What are environmentalists concerned about having released from the Amazon region?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are environmentalists concerned about having released from the Amazon region?`, correct_answer: "carbon contained within the vegetation", trial_name: "a_Amazonrainforest_3_qa_2"} 
};var a_Amazonrainforest_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What amount of the worlds carbon is stored in the Amazon forest?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What amount of the worlds carbon is stored in the Amazon forest?`, correct_answer: "10%", trial_name: "a_Amazonrainforest_3_qa_3"} 
};var a_Amazonrainforest_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many metric tons of carbon are believed to be stored in the Amazon forest?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many metric tons of carbon are believed to be stored in the Amazon forest?`, correct_answer: "1.1 × 1011", trial_name: "a_Amazonrainforest_3_qa_4"} 
};var a_Amazonrainforest_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In <span id="a_Amazonrainforest_4_qa_0">2010</span> the Amazon rainforest experienced another severe drought, in some ways more extreme than the 2005 drought. The affected region was approximate <span id="a_Amazonrainforest_4_qa_1">1,160,000</span> square miles (3,000,000 km2) of rainforest, compared to 734,000 square miles (1,900,000 km2) in 2005. The 2010 drought had <span id="a_Amazonrainforest_4_qa_2">three epicenters</span> where vegetation died off, whereas in <span id="a_Amazonrainforest_4_qa_3">2005</span> the drought was focused on the southwestern part. The findings were published in the journal Science. In a typical year the Amazon absorbs <span id="a_Amazonrainforest_4_qa_4">1.5 gigatons</span> of carbon dioxide; during 2005 instead 5 gigatons were released and in 2010 8 gigatons were released.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">In what year did the Amazon experience a drought that may have been more extreme than in 2005?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In what year did the Amazon experience a drought that may have been more extreme than in 2005?`, correct_answer: "2010", trial_name: "a_Amazonrainforest_4_qa_0"} 
};var a_Amazonrainforest_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many square miles large was the region impacted by the 2010 drought?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many square miles large was the region impacted by the 2010 drought?`, correct_answer: "1,160,000", trial_name: "a_Amazonrainforest_4_qa_1"} 
};var a_Amazonrainforest_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many areas were impacted by the the death of vegetation in the 2010 drought?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many areas were impacted by the the death of vegetation in the 2010 drought?`, correct_answer: "three epicenters", trial_name: "a_Amazonrainforest_4_qa_2"} 
};var a_Amazonrainforest_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">The southern part of the Amazon forest was mainly impacted by drought in what year?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `The southern part of the Amazon forest was mainly impacted by drought in what year?`, correct_answer: "2005", trial_name: "a_Amazonrainforest_4_qa_3"} 
};var a_Amazonrainforest_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many tons of carbon are absorbed the Amazon in a typical year?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many tons of carbon are absorbed the Amazon in a typical year?`, correct_answer: "1.5 gigatons", trial_name: "a_Amazonrainforest_4_qa_4"} 
};var a_Ctenophora_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Ranging from about 1 millimeter (0.039 in) to 1.5 meters (4.9 ft) in size, ctenophores are the largest non-colonial animals that use <span id="a_Ctenophora_2_qa_0">cilia</span> ("hairs") as their main <span id="a_Ctenophora_2_qa_1">method of locomotion</span>. Most species have eight strips, called comb rows, that run the length of their bodies and bear comb-like bands of cilia, called "<span id="a_Ctenophora_2_qa_2">ctenes</span>," stacked along the comb rows so that when the cilia beat, those of each comb touch the comb below. The name "ctenophora" means "<span id="a_Ctenophora_2_qa_3">comb-bearing</span>", from the Greek κτείς (stem-form κτεν-) meaning "comb" and the Greek suffix -φορος meaning "carrying".</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What are the hairs on ctenophores called?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are the hairs on ctenophores called?`, correct_answer: "cilia", trial_name: "a_Ctenophora_2_qa_0"} 
};var a_Ctenophora_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What are cilia used for?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are cilia used for?`, correct_answer: "method of locomotion", trial_name: "a_Ctenophora_2_qa_1"} 
};var a_Ctenophora_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Comb like bands of cilia are called what?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Comb like bands of cilia are called what?`, correct_answer: "ctenes", trial_name: "a_Ctenophora_2_qa_2"} 
};var a_Ctenophora_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What does ctenophore mean in Greek?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What does ctenophore mean in Greek?`, correct_answer: "comb-bearing", trial_name: "a_Ctenophora_2_qa_3"} 
};var a_FresnoCalifornia_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The "<span id="a_FresnoCalifornia_0_qa_4">West Side</span>" of Fresno, also often called "<span id="a_FresnoCalifornia_0_qa_0">Southwest Fresno</span>", is one of the oldest neighborhoods in the city. The neighborhood lies <span id="a_FresnoCalifornia_0_qa_1">southwest</span> of the 99 freeway (which divides it from Downtown Fresno), west of the 41 freeway and south of Nielsen Ave (or the newly constructed 180 Freeway), and extends to the city limits to the west and south. The neighborhood is traditionally considered to be the center of Fresno's <span id="a_FresnoCalifornia_0_qa_2">African-American</span> community. It is culturally diverse and also includes significant Mexican-American and Asian-American (principally <span id="a_FresnoCalifornia_0_qa_3">Hmong or Laotian</span>) populations.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What is another name for the west side of Fresno?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is another name for the west side of Fresno?`, correct_answer: "Southwest Fresno", trial_name: "a_FresnoCalifornia_0_qa_0"} 
};var a_FresnoCalifornia_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In which direction does the west side of Fresno neighborhood lie to the 99 freeway?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In which direction does the west side of Fresno neighborhood lie to the 99 freeway?`, correct_answer: "southwest", trial_name: "a_FresnoCalifornia_0_qa_1"} 
};var a_FresnoCalifornia_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">The west side of Fresno is the center of which ethnic community?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `The west side of Fresno is the center of which ethnic community?`, correct_answer: "African-American", trial_name: "a_FresnoCalifornia_0_qa_2"} 
};var a_FresnoCalifornia_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What are the two principal Asian-American groups living in the west side neighborhood of Fresno?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are the two principal Asian-American groups living in the west side neighborhood of Fresno?`, correct_answer: "Hmong or Laotian", trial_name: "a_FresnoCalifornia_0_qa_3"} 
};var a_FresnoCalifornia_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Which neighborhood lies west of the 41 freeway?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Which neighborhood lies west of the 41 freeway?`, correct_answer: "West Side", trial_name: "a_FresnoCalifornia_0_qa_4"} 
};var a_FresnoCalifornia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Fresno is served by <span id="a_FresnoCalifornia_3_qa_0">State Route 99</span>, the main north/south freeway that connects the major population centers of the California Central Valley. State Route 168, the <span id="a_FresnoCalifornia_3_qa_1">Sierra Freeway</span>, heads east to the city of Clovis and Huntington Lake. <span id="a_FresnoCalifornia_3_qa_2">State Route 41</span> (Yosemite Freeway/Eisenhower Freeway) comes into Fresno from Atascadero in the south, and then heads north to Yosemite. State Route 180 (Kings Canyon Freeway) comes from the <span id="a_FresnoCalifornia_3_qa_3">west</span> via Mendota, and from the east in Kings Canyon National Park going towards the city of Reedley.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What route connects Fresno with the California Central Valley?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What route connects Fresno with the California Central Valley?`, correct_answer: "State Route 99", trial_name: "a_FresnoCalifornia_3_qa_0"} 
};var a_FresnoCalifornia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is another name for State Route 168?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is another name for State Route 168?`, correct_answer: "Sierra Freeway", trial_name: "a_FresnoCalifornia_3_qa_1"} 
};var a_FresnoCalifornia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is another name for the Yosemite Freeway?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is another name for the Yosemite Freeway?`, correct_answer: "State Route 41", trial_name: "a_FresnoCalifornia_3_qa_2"} 
};var a_FresnoCalifornia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">State Route 180 comes from which direction via Mendota?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `State Route 180 comes from which direction via Mendota?`, correct_answer: "west", trial_name: "a_FresnoCalifornia_3_qa_3"} 
};var a_Packetswitching_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">DECnet is <span id="a_Packetswitching_2_qa_0">a suite of network protocols created by Digital Equipment Corporation</span>, originally released in 1975 in order to <span id="a_Packetswitching_2_qa_1">connect two PDP-11 minicomputers</span>. It evolved into one of the first peer-to-peer network architectures, thus transforming DEC into a networking powerhouse in the 1980s. Initially built with three layers, it later (1982) evolved into a <span id="a_Packetswitching_2_qa_2">seven</span>-layer OSI-compliant networking protocol. The DECnet protocols were designed entirely by Digital Equipment Corporation. However, DECnet Phase II (and later) <span id="a_Packetswitching_2_qa_3">were open standards with published specifications, and several implementations were developed outside DEC, including one for Linux</span>.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Packetswitching_2_qa_0','#a_Packetswitching_2_qa_1','#a_Packetswitching_2_qa_2','#a_Packetswitching_2_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Packetswitching_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Packetswitching_2"}
};
var a_Packetswitching_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is  DECnet`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is  DECnet`, correct_answer: "a suite of network protocols created by Digital Equipment Corporation", trial_name: "a_Packetswitching_2_qa_0"} 
};var a_Packetswitching_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What did DECnet originally do `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did DECnet originally do `, correct_answer: "connect two PDP-11 minicomputers", trial_name: "a_Packetswitching_2_qa_1"} 
};var a_Packetswitching_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">DEC originally had 3 layers but evolved into how many layers `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `DEC originally had 3 layers but evolved into how many layers `, correct_answer: "seven", trial_name: "a_Packetswitching_2_qa_2"} 
};var a_Packetswitching_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What did DECnet phase 2 become `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did DECnet phase 2 become `, correct_answer: "were open standards with published specifications, and several implementations were developed outside DEC, including one for Linux", trial_name: "a_Packetswitching_2_qa_3"} 
};var a_Packetswitching_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Internet2 is <span id="a_Packetswitching_4_qa_0">a not-for-profit United States computer networking consortium led by members from the research and education communities, industry, and government</span>. The Internet2 community, in partnership with <span id="a_Packetswitching_4_qa_1">Qwest</span>, built the first Internet2 Network, called <span id="a_Packetswitching_4_qa_2">Abilene</span>, in 1998 and was a prime investor in the National LambdaRail (NLR) project. In 2006, Internet2 announced <span id="a_Packetswitching_4_qa_3">a partnership with Level 3 Communications to launch a brand new nationwide network</span>, boosting its capacity from 10 Gbit/s to 100 Gbit/s. In October, 2007, Internet2 officially retired Abilene and now refers to its new, higher capacity network as the <span id="a_Packetswitching_4_qa_4">Internet2 Network</span>.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Packetswitching_4_qa_0','#a_Packetswitching_4_qa_1','#a_Packetswitching_4_qa_2','#a_Packetswitching_4_qa_3','#a_Packetswitching_4_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Packetswitching_4_1280_720.png';
a.click();});}},data: { trial_name: "a_Packetswitching_4"}
};
var a_Packetswitching_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question"> what is Internet2`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: ` what is Internet2`, correct_answer: "a not-for-profit United States computer networking consortium led by members from the research and education communities, industry, and government", trial_name: "a_Packetswitching_4_qa_0"} 
};var a_Packetswitching_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who did internet2 partner with`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who did internet2 partner with`, correct_answer: "Qwest", trial_name: "a_Packetswitching_4_qa_1"} 
};var a_Packetswitching_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the first internet2 network named`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the first internet2 network named`, correct_answer: "Abilene", trial_name: "a_Packetswitching_4_qa_2"} 
};var a_Packetswitching_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who did internet2 partner with `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who did internet2 partner with `, correct_answer: "a partnership with Level 3 Communications to launch a brand new nationwide network", trial_name: "a_Packetswitching_4_qa_3"} 
};var a_Packetswitching_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">ableine was retired and the new platform is called `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `ableine was retired and the new platform is called `, correct_answer: "Internet2 Network", trial_name: "a_Packetswitching_4_qa_4"} 
};var a_Geology_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In the laboratory, <span id="a_Geology_2_qa_0">stratigraphers</span> analyze samples of stratigraphic sections that can be returned from the field, such as those from drill cores. Stratigraphers also analyze data from <span id="a_Geology_2_qa_1">geophysical</span> surveys that show the locations of stratigraphic units in the subsurface. Geophysical data and <span id="a_Geology_2_qa_2">well logs</span> can be combined to produce a better view of the subsurface, and stratigraphers often use <span id="a_Geology_2_qa_3">computer programs</span> to do this in three dimensions. Stratigraphers can then use these data to reconstruct ancient processes occurring on the surface of the Earth, interpret past environments, and locate areas for water, coal, and <span id="a_Geology_2_qa_4">hydrocarbon</span> extraction.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Geology_2_qa_0','#a_Geology_2_qa_1','#a_Geology_2_qa_2','#a_Geology_2_qa_3','#a_Geology_2_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Geology_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Geology_2"}
};
var a_Geology_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">The analysis of stratigraphic sections such as drill cores is done by who?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `The analysis of stratigraphic sections such as drill cores is done by who?`, correct_answer: "stratigraphers", trial_name: "a_Geology_2_qa_0"} 
};var a_Geology_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What type of surveys show the location of stratigraphic units in the subsurface?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What type of surveys show the location of stratigraphic units in the subsurface?`, correct_answer: "geophysical", trial_name: "a_Geology_2_qa_1"} 
};var a_Geology_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What can be combined with geophysical data to produce a better view of the subsurface?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What can be combined with geophysical data to produce a better view of the subsurface?`, correct_answer: "well logs", trial_name: "a_Geology_2_qa_2"} 
};var a_Geology_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What tool do stratigraphers use to see their data in three dimensions?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What tool do stratigraphers use to see their data in three dimensions?`, correct_answer: "computer programs", trial_name: "a_Geology_2_qa_3"} 
};var a_Geology_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Stratigraphers try to locate areas for what types of extraction? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Stratigraphers try to locate areas for what types of extraction? `, correct_answer: "hydrocarbon", trial_name: "a_Geology_2_qa_4"} 
};var a_Geology_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Geology_4_qa_0">James Hutton</span> is often viewed as the first modern geologist. In 1785 he presented a paper entitled <span id="a_Geology_4_qa_1">Theory of the Earth</span> to the Royal Society of Edinburgh. In his paper, he explained his theory that the <span id="a_Geology_4_qa_3">Earth must be much older than had previously been supposed</span> in order to allow enough time for mountains to be eroded and for sediments to form new rocks at the bottom of the sea, which in turn were raised up to become dry land. Hutton published a two-volume version of his ideas in <span id="a_Geology_4_qa_2">1795</span> (Vol. 1, Vol. 2).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Who is viewed as the first modern geologist?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who is viewed as the first modern geologist?`, correct_answer: "James Hutton", trial_name: "a_Geology_4_qa_0"} 
};var a_Geology_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In 1785 James Hutton presented what paper to the Royal Society of Edinburgh?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In 1785 James Hutton presented what paper to the Royal Society of Edinburgh?`, correct_answer: "Theory of the Earth", trial_name: "a_Geology_4_qa_1"} 
};var a_Geology_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">James Hutton published a 2 volume version of his theories in what year?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `James Hutton published a 2 volume version of his theories in what year?`, correct_answer: "1795", trial_name: "a_Geology_4_qa_2"} 
};var a_Geology_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the main idea of James Hutton's paper?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the main idea of James Hutton's paper?`, correct_answer: "Earth must be much older than had previously been supposed", trial_name: "a_Geology_4_qa_3"} 
};var a_VictoriaandAlbertMuseum_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The costume collection is the most comprehensive in Britain, containing <span id="a_VictoriaandAlbertMuseum_2_qa_0">over 14,000</span> outfits plus accessories, mainly dating from 1600 to the present. Costume sketches, design notebooks, and other works on paper are typically held by the <span id="a_VictoriaandAlbertMuseum_2_qa_1">Word and Image</span> department. <span id="a_VictoriaandAlbertMuseum_2_qa_2">Because everyday clothing from previous eras has not generally survived</span>, the collection is dominated by fashionable clothes made for special occasions. One of the first significant gifts of costume came in <span id="a_VictoriaandAlbertMuseum_2_qa_3">1913</span> when the V&A received the Talbot Hughes collection containing 1,442 costumes and items as a gift from <span id="a_VictoriaandAlbertMuseum_2_qa_4">Harrods</span> following its display at the nearby department store.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Approximately how many items are in the costume collection of the V&A?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Approximately how many items are in the costume collection of the V&A?`, correct_answer: "over 14,000", trial_name: "a_VictoriaandAlbertMuseum_2_qa_0"} 
};var a_VictoriaandAlbertMuseum_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Which department houses the works on paper of the costume collection?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Which department houses the works on paper of the costume collection?`, correct_answer: "Word and Image", trial_name: "a_VictoriaandAlbertMuseum_2_qa_1"} 
};var a_VictoriaandAlbertMuseum_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Why is the collection dominated by fashionable clothes made for special occasions?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Why is the collection dominated by fashionable clothes made for special occasions?`, correct_answer: "Because everyday clothing from previous eras has not generally survived", trial_name: "a_VictoriaandAlbertMuseum_2_qa_2"} 
};var a_VictoriaandAlbertMuseum_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In which year did the V&A received the Talbot Hughes collection?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In which year did the V&A received the Talbot Hughes collection?`, correct_answer: "1913", trial_name: "a_VictoriaandAlbertMuseum_2_qa_3"} 
};var a_VictoriaandAlbertMuseum_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">The Talbot Hughes collection was a gift from which company?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `The Talbot Hughes collection was a gift from which company?`, correct_answer: "Harrods", trial_name: "a_VictoriaandAlbertMuseum_2_qa_4"} 
};var a_AmericanBroadcastingCompany_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In 2000, ABC launched a web-based promotional campaign focused around its <span id="a_AmericanBroadcastingCompany_0_qa_0">circle logo</span>, also called "<span id="a_AmericanBroadcastingCompany_0_qa_3">the dot</span>", in which comic book character Little Dot prompted visitors to "download the dot", a program which would cause the ABC logo to fly around the screen and settle in the bottom-right corner. The network hired the <span id="a_AmericanBroadcastingCompany_0_qa_1">Troika Design Group</span> to design and produce its 2001–02 identity, which continued using the <span id="a_AmericanBroadcastingCompany_0_qa_2">black-and-yellow</span> coloring of the logo and featured dots and stripes in various promotional and identification spots.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">In 2000, ABC started an internet based campaign focused on what?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In 2000, ABC started an internet based campaign focused on what?`, correct_answer: "circle logo", trial_name: "a_AmericanBroadcastingCompany_0_qa_0"} 
};var a_AmericanBroadcastingCompany_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who was hired to produce ABC's 2001-02 identity?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who was hired to produce ABC's 2001-02 identity?`, correct_answer: "Troika Design Group", trial_name: "a_AmericanBroadcastingCompany_0_qa_1"} 
};var a_AmericanBroadcastingCompany_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What colors was the 2001 ABC logo?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What colors was the 2001 ABC logo?`, correct_answer: "black-and-yellow", trial_name: "a_AmericanBroadcastingCompany_0_qa_2"} 
};var a_AmericanBroadcastingCompany_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the nickname for ABC's logo from the 2000 campaign?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the nickname for ABC's logo from the 2000 campaign?`, correct_answer: "the dot", trial_name: "a_AmericanBroadcastingCompany_0_qa_3"} 
};var a_AmericanBroadcastingCompany_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In the early <span id="a_AmericanBroadcastingCompany_3_qa_0">1970s</span>, ABC completed its transition to color; the decade as a whole would mark a turning point for <span id="a_AmericanBroadcastingCompany_3_qa_1">ABC</span>, as it began to pass CBS and NBC in the ratings to become the first place network. It also began to use <span id="a_AmericanBroadcastingCompany_3_qa_2">behavioral and demographic</span> data to better determine what types of sponsors to sell advertising slots to and provide programming that would appeal towards certain audiences. ABC's gains in audience share were greatly helped by the fact that several smaller markets had grown large enough to allow full-time affiliations from all three networks.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">In what decade did ABC finish transitioning to color?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In what decade did ABC finish transitioning to color?`, correct_answer: "1970s", trial_name: "a_AmericanBroadcastingCompany_3_qa_0"} 
};var a_AmericanBroadcastingCompany_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">The 1970s allowed which network to move in to first place in the ratings?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `The 1970s allowed which network to move in to first place in the ratings?`, correct_answer: "ABC", trial_name: "a_AmericanBroadcastingCompany_3_qa_1"} 
};var a_AmericanBroadcastingCompany_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What kind of data did ABC begin using in the 1970s to better target ads and programming for certain audiences?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What kind of data did ABC begin using in the 1970s to better target ads and programming for certain audiences?`, correct_answer: "behavioral and demographic", trial_name: "a_AmericanBroadcastingCompany_3_qa_2"} 
};var a_GenghisKhan_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">As previously arranged by his father, Temüjin married Börte of <span id="a_GenghisKhan_0_qa_0">the Onggirat</span> tribe when he was around 16 in order to cement alliances between their respective tribes. Soon after Börte's marriage to Temüjin, she was kidnapped by <span id="a_GenghisKhan_0_qa_1">the Merkits</span> and reportedly given away as a wife. Temüjin rescued her with the help of his friend and future rival, <span id="a_GenghisKhan_0_qa_2">Jamukha, and his protector, Toghrul Khan</span> of the Keraite tribe. She gave birth to a son, <span id="a_GenghisKhan_0_qa_3">Jochi</span> (<span id="a_GenghisKhan_0_qa_4">1185</span>–1226), nine months later, clouding the issue of his parentage. Despite speculation over Jochi, Börte would be Temüjin's only empress, though he did follow tradition by taking several morganatic wives.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_GenghisKhan_0_qa_0','#a_GenghisKhan_0_qa_1','#a_GenghisKhan_0_qa_2','#a_GenghisKhan_0_qa_3','#a_GenghisKhan_0_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_GenghisKhan_0_1280_720.png';
a.click();});}},data: { trial_name: "a_GenghisKhan_0"}
};
var a_GenghisKhan_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the tribe of the woman Temüjin married when he was around 16 years old?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the tribe of the woman Temüjin married when he was around 16 years old?`, correct_answer: "the Onggirat", trial_name: "a_GenghisKhan_0_qa_0"} 
};var a_GenghisKhan_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who kidnapped Temüjin's first wife soon after they were married?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who kidnapped Temüjin's first wife soon after they were married?`, correct_answer: "the Merkits", trial_name: "a_GenghisKhan_0_qa_1"} 
};var a_GenghisKhan_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who helped Temüjin rescue his wife from the Merkits?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who helped Temüjin rescue his wife from the Merkits?`, correct_answer: "Jamukha, and his protector, Toghrul Khan", trial_name: "a_GenghisKhan_0_qa_2"} 
};var a_GenghisKhan_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the name of Temüjin's wife Börte's first son?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the name of Temüjin's wife Börte's first son?`, correct_answer: "Jochi", trial_name: "a_GenghisKhan_0_qa_3"} 
};var a_GenghisKhan_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What year did Börte's give birth to Jochi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What year did Börte's give birth to Jochi?`, correct_answer: "1185", trial_name: "a_GenghisKhan_0_qa_4"} 
};var a_Pharmacy_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In most countries, the dispensary is subject to <span id="a_Pharmacy_2_qa_0">pharmacy legislation</span>; with requirements for <span id="a_Pharmacy_2_qa_4">storage conditions, compulsory texts, equipment, etc.</span>, specified in legislation. Where it was once the case that pharmacists stayed <span id="a_Pharmacy_2_qa_1">within the dispensary compounding/dispensing medications</span>, there has been an increasing trend towards the use of trained pharmacy technicians while the pharmacist spends more time communicating with patients. Pharmacy technicians are now more dependent upon <span id="a_Pharmacy_2_qa_2">automation</span> to assist them in their new role dealing with <span id="a_Pharmacy_2_qa_3">patients' prescriptions and patient safety issues</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What is the dispensary subject to in a majority of countries?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the dispensary subject to in a majority of countries?`, correct_answer: "pharmacy legislation", trial_name: "a_Pharmacy_2_qa_0"} 
};var a_Pharmacy_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What responsibilities were pharmacy technicians formerly limited to?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What responsibilities were pharmacy technicians formerly limited to?`, correct_answer: "within the dispensary compounding/dispensing medications", trial_name: "a_Pharmacy_2_qa_1"} 
};var a_Pharmacy_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What do pharmacy technicians depend on more and more?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What do pharmacy technicians depend on more and more?`, correct_answer: "automation", trial_name: "a_Pharmacy_2_qa_2"} 
};var a_Pharmacy_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What are new responsibilities pharmacy technicians now deal with?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are new responsibilities pharmacy technicians now deal with?`, correct_answer: "patients' prescriptions and patient safety issues", trial_name: "a_Pharmacy_2_qa_3"} 
};var a_Pharmacy_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What does pharmacy legislation mandate?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What does pharmacy legislation mandate?`, correct_answer: "storage conditions, compulsory texts, equipment, etc.", trial_name: "a_Pharmacy_2_qa_4"} 
};var a_Construction_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Construction_0_qa_0">Construction</span> is the process of constructing a building or infrastructure. Construction differs from manufacturing in that <span id="a_Construction_0_qa_1">manufacturing</span> typically involves mass production of similar items without a designated purchaser, while construction typically takes place on location for <span id="a_Construction_0_qa_4">a known client</span>. Construction as an industry comprises <span id="a_Construction_0_qa_2">six to nine percent</span> of the gross domestic product of developed countries. Construction starts with <span id="a_Construction_0_qa_3">planning,[citation needed] design, and financing</span> and continues until the project is built and ready for use.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What is the process of constructing a building or infrastructure?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the process of constructing a building or infrastructure?`, correct_answer: "Construction", trial_name: "a_Construction_0_qa_0"} 
};var a_Construction_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What typically involves mass production of similar items without a designated purchaser?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What typically involves mass production of similar items without a designated purchaser?`, correct_answer: "manufacturing", trial_name: "a_Construction_0_qa_1"} 
};var a_Construction_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What percentile of gross domestic product is construction comprised of?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What percentile of gross domestic product is construction comprised of?`, correct_answer: "six to nine percent", trial_name: "a_Construction_0_qa_2"} 
};var a_Construction_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What three things are needed for construction to take place?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What three things are needed for construction to take place?`, correct_answer: "planning,[citation needed] design, and financing", trial_name: "a_Construction_0_qa_3"} 
};var a_Construction_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Construction takes place on location for who?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Construction takes place on location for who?`, correct_answer: "a known client", trial_name: "a_Construction_0_qa_4"} 
};var a_Construction_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Construction_2_qa_2">The Standard Industrial Classification and the newer North American Industry Classification System</span> have a classification system for companies that perform or otherwise engage in construction. To recognize the differences of companies in this sector, it is divided into three subsectors: <span id="a_Construction_2_qa_0">building construction, heavy and civil engineering construction, and specialty trade contractors</span>. There are also categories for <span id="a_Construction_2_qa_1">construction service firms (e.g., engineering, architecture) and construction managers</span> (<span id="a_Construction_2_qa_3">firms engaged in managing construction projects without assuming direct financial responsibility for completion of the construction project</span>).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What are the three construction subsectors?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are the three construction subsectors?`, correct_answer: "building construction, heavy and civil engineering construction, and specialty trade contractors", trial_name: "a_Construction_2_qa_0"} 
};var a_Construction_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">There are other categories for what?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `There are other categories for what?`, correct_answer: "construction service firms (e.g., engineering, architecture) and construction managers", trial_name: "a_Construction_2_qa_1"} 
};var a_Construction_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What has a classification system for construction companies?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What has a classification system for construction companies?`, correct_answer: "The Standard Industrial Classification and the newer North American Industry Classification System", trial_name: "a_Construction_2_qa_2"} 
};var a_Construction_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What are construction managers?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are construction managers?`, correct_answer: "firms engaged in managing construction projects without assuming direct financial responsibility for completion of the construction project", trial_name: "a_Construction_2_qa_3"} 
};var a_Privateschool_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Privateschool_0_qa_0">Ergänzungsschulen</span> are secondary or post-secondary (non-tertiary) schools, which are run by private individuals, private organizations or rarely, <span id="a_Privateschool_0_qa_3">religious</span> groups and offer a type of education which is not available at public schools. Most of these schools are <span id="a_Privateschool_0_qa_1">vocational</span> schools. However, these vocational schools are not part of the German dual education system. Ergänzungsschulen have the freedom to operate outside of government regulation and are funded in whole by charging their students <span id="a_Privateschool_0_qa_2">tuition</span> fees.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What are private secondary schools in Germany called?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are private secondary schools in Germany called?`, correct_answer: "Ergänzungsschulen", trial_name: "a_Privateschool_0_qa_0"} 
};var a_Privateschool_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What types of schools are most ergänzungsschulen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What types of schools are most ergänzungsschulen?`, correct_answer: "vocational", trial_name: "a_Privateschool_0_qa_1"} 
};var a_Privateschool_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How are ergänzungsschulen funded?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How are ergänzungsschulen funded?`, correct_answer: "tuition", trial_name: "a_Privateschool_0_qa_2"} 
};var a_Privateschool_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Along with private individuals and organizations, what groups sometimes runs ergänzungsschulen?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Along with private individuals and organizations, what groups sometimes runs ergänzungsschulen?`, correct_answer: "religious", trial_name: "a_Privateschool_0_qa_3"} 
};var a_Privateschool_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Some of the oldest schools in South Africa are private church schools that were established by missionaries in the early <span id="a_Privateschool_2_qa_4">nineteenth</span> century. The private sector has grown ever since. After the abolition of apartheid, the laws governing private education in South Africa changed significantly. The <span id="a_Privateschool_2_qa_0">South African Schools Act</span> of <span id="a_Privateschool_2_qa_1">1996</span> recognises two categories of schools: "public" (state-controlled) and "<span id="a_Privateschool_2_qa_2">independent</span>" (which includes <span id="a_Privateschool_2_qa_3">traditional private</span> schools and schools which are privately governed[clarification needed].)</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What South African law recognized two types of schools?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What South African law recognized two types of schools?`, correct_answer: "South African Schools Act", trial_name: "a_Privateschool_2_qa_0"} 
};var a_Privateschool_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In what year was the South African Schools Act passed?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In what year was the South African Schools Act passed?`, correct_answer: "1996", trial_name: "a_Privateschool_2_qa_1"} 
};var a_Privateschool_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Along with public schools, what type of school was recognized under the South African Schools Act?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Along with public schools, what type of school was recognized under the South African Schools Act?`, correct_answer: "independent", trial_name: "a_Privateschool_2_qa_2"} 
};var a_Privateschool_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In South Africa, along with privately governed schools, what schools are classified as independent?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In South Africa, along with privately governed schools, what schools are classified as independent?`, correct_answer: "traditional private", trial_name: "a_Privateschool_2_qa_3"} 
};var a_Privateschool_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In what century did missionaries notably establish church schools in South Africa?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In what century did missionaries notably establish church schools in South Africa?`, correct_answer: "nineteenth", trial_name: "a_Privateschool_2_qa_4"} 
};var a_HarvardUniversity_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The University is organized into <span id="a_HarvardUniversity_0_qa_3">eleven</span> separate academic units—ten faculties and the Radcliffe Institute for Advanced Study—with campuses throughout the <span id="a_HarvardUniversity_0_qa_0">Boston</span> metropolitan area: its 209-acre (85 ha) main campus is centered on <span id="a_HarvardUniversity_0_qa_4">Harvard Yard</span> in Cambridge, approximately 3 miles (5 km) northwest of Boston; the business school and athletics facilities, including Harvard Stadium, are located across the <span id="a_HarvardUniversity_0_qa_2">Charles</span> River in the Allston neighborhood of Boston and the medical, dental, and public health schools are in the Longwood Medical Area. Harvard's <span id="a_HarvardUniversity_0_qa_1">$37.6 billion</span> financial endowment is the largest of any academic institution.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_HarvardUniversity_0_qa_0','#a_HarvardUniversity_0_qa_1','#a_HarvardUniversity_0_qa_2','#a_HarvardUniversity_0_qa_3','#a_HarvardUniversity_0_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_HarvardUniversity_0_1280_720.png';
a.click();});}},data: { trial_name: "a_HarvardUniversity_0"}
};
var a_HarvardUniversity_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the major US city that the is the university located?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the major US city that the is the university located?`, correct_answer: "Boston", trial_name: "a_HarvardUniversity_0_qa_0"} 
};var a_HarvardUniversity_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the size of the school's endowment?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the size of the school's endowment?`, correct_answer: "$37.6 billion", trial_name: "a_HarvardUniversity_0_qa_1"} 
};var a_HarvardUniversity_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What river is located in the vicinity of the school?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What river is located in the vicinity of the school?`, correct_answer: "Charles", trial_name: "a_HarvardUniversity_0_qa_2"} 
};var a_HarvardUniversity_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many academic units make up the school?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many academic units make up the school?`, correct_answer: "eleven", trial_name: "a_HarvardUniversity_0_qa_3"} 
};var a_HarvardUniversity_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the name of the area that the main campus is centered in Cambridge?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the name of the area that the main campus is centered in Cambridge?`, correct_answer: "Harvard Yard", trial_name: "a_HarvardUniversity_0_qa_4"} 
};var a_HarvardUniversity_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The Harvard Business School and many of the university's athletics facilities, including Harvard Stadium, are located on a 358-acre (145 ha) campus opposite the Cambridge campus in <span id="a_HarvardUniversity_1_qa_0">Allston</span>. The <span id="a_HarvardUniversity_1_qa_1">John W. Weeks Bridge</span> is a pedestrian bridge over the Charles River connecting both campuses. The Harvard Medical School, Harvard School of Dental Medicine, and the Harvard School of Public Health are located on a 21-acre (8.5 ha) campus in the <span id="a_HarvardUniversity_1_qa_2">Longwood Medical and Academic Area</span> approximately 3.3 miles (5.3 km) southwest of downtown Boston and 3.3 miles (5.3 km) south of the Cambridge campus.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Where is Harvard stadium located?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where is Harvard stadium located?`, correct_answer: "Allston", trial_name: "a_HarvardUniversity_1_qa_0"} 
};var a_HarvardUniversity_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the name of the bridge that joins parts of the campus of the Charles River?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the name of the bridge that joins parts of the campus of the Charles River?`, correct_answer: "John W. Weeks Bridge", trial_name: "a_HarvardUniversity_1_qa_1"} 
};var a_HarvardUniversity_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where are the Harvard medical, Dental and school of Public Health located?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where are the Harvard medical, Dental and school of Public Health located?`, correct_answer: "Longwood Medical and Academic Area", trial_name: "a_HarvardUniversity_1_qa_2"} 
};var a_HarvardUniversity_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">During the divestment from South Africa movement in the <span id="a_HarvardUniversity_2_qa_0">late 1980s</span>, student activists erected a symbolic "shantytown" on Harvard Yard and blockaded a speech given by South African Vice Consul <span id="a_HarvardUniversity_2_qa_1">Duke Kent-Brown</span>. The Harvard Management Company repeatedly refused to divest, stating that "operating expenses must not be subject to financially unrealistic strictures or carping by the unsophisticated or by special interest groups." However, the university did eventually reduce its South African holdings by <span id="a_HarvardUniversity_2_qa_2">$230 million</span> (out of $400 million) in response to the pressure.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_HarvardUniversity_2_qa_0','#a_HarvardUniversity_2_qa_1','#a_HarvardUniversity_2_qa_2'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_HarvardUniversity_2_1280_720.png';
a.click();});}},data: { trial_name: "a_HarvardUniversity_2"}
};
var a_HarvardUniversity_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When was the divestment from South Africa movement? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When was the divestment from South Africa movement? `, correct_answer: "late 1980s", trial_name: "a_HarvardUniversity_2_qa_0"} 
};var a_HarvardUniversity_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What South African Vice Consul did Harvard students blockade the speech of? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What South African Vice Consul did Harvard students blockade the speech of? `, correct_answer: "Duke Kent-Brown", trial_name: "a_HarvardUniversity_2_qa_1"} 
};var a_HarvardUniversity_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">By how much did Harvard management reduce its South Africa holdings in response to pressure?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `By how much did Harvard management reduce its South Africa holdings in response to pressure?`, correct_answer: "$230 million", trial_name: "a_HarvardUniversity_2_qa_2"} 
};var a_HarvardUniversity_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Undergraduate admission to Harvard is characterized by the Carnegie Foundation as "more selective, lower transfer-in". Harvard College accepted <span id="a_HarvardUniversity_3_qa_0">5.3%</span> of applicants for the class of 2019, a record low and the second lowest acceptance rate among all national universities. Harvard College ended its early admissions program in <span id="a_HarvardUniversity_3_qa_1">2007</span> as the program was <span id="a_HarvardUniversity_3_qa_2">believed to disadvantage low-income and under-represented minority applicants</span> applying to selective universities, yet for the class of <span id="a_HarvardUniversity_3_qa_3">2016</span> an Early Action program was reintroduced.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What is the applicant admission rate for class of 2019?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the applicant admission rate for class of 2019?`, correct_answer: "5.3%", trial_name: "a_HarvardUniversity_3_qa_0"} 
};var a_HarvardUniversity_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In what year did Harvard end its early admission program?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In what year did Harvard end its early admission program?`, correct_answer: "2007", trial_name: "a_HarvardUniversity_3_qa_1"} 
};var a_HarvardUniversity_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Why did Harvard end its early admission program?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Why did Harvard end its early admission program?`, correct_answer: "believed to disadvantage low-income and under-represented minority applicants", trial_name: "a_HarvardUniversity_3_qa_2"} 
};var a_HarvardUniversity_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In what year was an early admission program reintroduced?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In what year was an early admission program reintroduced?`, correct_answer: "2016", trial_name: "a_HarvardUniversity_3_qa_3"} 
};var a_JacksonvilleFlorida_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_JacksonvilleFlorida_0_qa_0">Jacksonville</span> is the largest city by population in the U.S. state of Florida, and the largest city by area in the contiguous United States. It is the county seat of <span id="a_JacksonvilleFlorida_0_qa_3">Duval County</span>, with which the city government consolidated in <span id="a_JacksonvilleFlorida_0_qa_4">1968</span>. Consolidation gave Jacksonville its great size and placed most of its metropolitan population within the city limits; with an estimated population of 853,382 in 2014, it is the most populous city proper in Florida and the Southeast, and the <span id="a_JacksonvilleFlorida_0_qa_2">12th</span> most populous in the United States. Jacksonville is the principal city in the Jacksonville metropolitan area, with a population of <span id="a_JacksonvilleFlorida_0_qa_1">1,345,596</span> in 2010.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Which Florida city has the biggest population?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Which Florida city has the biggest population?`, correct_answer: "Jacksonville", trial_name: "a_JacksonvilleFlorida_0_qa_0"} 
};var a_JacksonvilleFlorida_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the population Jacksonville city as of 2010?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the population Jacksonville city as of 2010?`, correct_answer: "1,345,596", trial_name: "a_JacksonvilleFlorida_0_qa_1"} 
};var a_JacksonvilleFlorida_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Based on population alone, what is Jacksonville's ranking in the United States?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Based on population alone, what is Jacksonville's ranking in the United States?`, correct_answer: "12th", trial_name: "a_JacksonvilleFlorida_0_qa_2"} 
};var a_JacksonvilleFlorida_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In which county does Jacksonville reside?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In which county does Jacksonville reside?`, correct_answer: "Duval County", trial_name: "a_JacksonvilleFlorida_0_qa_3"} 
};var a_JacksonvilleFlorida_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What year did consolidation cause Jacksonville to become part of Duval County?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What year did consolidation cause Jacksonville to become part of Duval County?`, correct_answer: "1968", trial_name: "a_JacksonvilleFlorida_0_qa_4"} 
};var a_Economicinequality_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Studies on income inequality and growth have sometimes found evidence confirming the <span id="a_Economicinequality_2_qa_0">Kuznets curve hypothesis</span>, which states that with economic development, inequality <span id="a_Economicinequality_2_qa_1">first increases</span>, then decreases. <span id="a_Economicinequality_2_qa_3">Economist</span> <span id="a_Economicinequality_2_qa_2">Thomas Piketty</span> challenges this notion, claiming that from 1914 to 1945 <span id="a_Economicinequality_2_qa_4">wars and "violent economic and political shocks"</span> reduced inequality. Moreover, Piketty argues that the "magical" Kuznets curve hypothesis, with its emphasis on the balancing of economic growth in the long run, cannot account for the significant increase in economic inequality throughout the developed world since the 1970s.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Economicinequality_2_qa_0','#a_Economicinequality_2_qa_1','#a_Economicinequality_2_qa_2','#a_Economicinequality_2_qa_3','#a_Economicinequality_2_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Economicinequality_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Economicinequality_2"}
};
var a_Economicinequality_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What have studies on income inequality sometimes found evidence confirming?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What have studies on income inequality sometimes found evidence confirming?`, correct_answer: "Kuznets curve hypothesis", trial_name: "a_Economicinequality_2_qa_0"} 
};var a_Economicinequality_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">The Kuznets curve says with economic development, inequality will decrease after what?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `The Kuznets curve says with economic development, inequality will decrease after what?`, correct_answer: "first increases", trial_name: "a_Economicinequality_2_qa_1"} 
};var a_Economicinequality_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who challenges the notion of the Kuznets curve hypothesis?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who challenges the notion of the Kuznets curve hypothesis?`, correct_answer: "Thomas Piketty", trial_name: "a_Economicinequality_2_qa_2"} 
};var a_Economicinequality_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What's Thomas Piketty's job?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What's Thomas Piketty's job?`, correct_answer: "Economist", trial_name: "a_Economicinequality_2_qa_3"} 
};var a_Economicinequality_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What does Piketty feel was the biggest factors in reducing inequality between 1914 to 1945?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What does Piketty feel was the biggest factors in reducing inequality between 1914 to 1945?`, correct_answer: "wars and violent economic and political shocks", trial_name: "a_Economicinequality_2_qa_4"} 
};var a_DoctorWho_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The most frequent musical contributor during the first 15 years was <span id="a_DoctorWho_3_qa_0">Dudley Simpson</span>, who is also well known for his theme and incidental music for Blake's 7, and for his haunting theme music and score for the original 1970s version of The Tomorrow People. Simpson's first Doctor Who score was <span id="a_DoctorWho_3_qa_1">Planet of Giants</span> (1964) and he went on to write music for many adventures of <span id="a_DoctorWho_3_qa_2">the 1960s and 1970s</span>, including most of the stories of the Jon Pertwee/Tom Baker periods, ending with <span id="a_DoctorWho_3_qa_3">The Horns of Nimon</span> (1979). He also made a cameo appearance in <span id="a_DoctorWho_3_qa_4">The Talons of Weng-Chiang</span> (as a Music hall conductor).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Who was the most frequent musical contributor to Doctor Who in the first 15 years of the show?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who was the most frequent musical contributor to Doctor Who in the first 15 years of the show?`, correct_answer: "Dudley Simpson", trial_name: "a_DoctorWho_3_qa_0"} 
};var a_DoctorWho_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the episode name of Simpson's first Doctor Who score?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the episode name of Simpson's first Doctor Who score?`, correct_answer: "Planet of Giants", trial_name: "a_DoctorWho_3_qa_1"} 
};var a_DoctorWho_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In what decades was Dudley Simpson most active in contributing to Doctor Who?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In what decades was Dudley Simpson most active in contributing to Doctor Who?`, correct_answer: "the 1960s and 1970s", trial_name: "a_DoctorWho_3_qa_2"} 
};var a_DoctorWho_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the last Doctor Who episode that Dudley Simpson wrote music for?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the last Doctor Who episode that Dudley Simpson wrote music for?`, correct_answer: "The Horns of Nimon", trial_name: "a_DoctorWho_3_qa_3"} 
};var a_DoctorWho_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">In what episode did Dudley Simpson play a music conductor?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `In what episode did Dudley Simpson play a music conductor?`, correct_answer: "The Talons of Weng-Chiang", trial_name: "a_DoctorWho_3_qa_4"} 
};var a_DoctorWho_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Doctor Who has appeared on stage numerous times. In the early 1970s, <span id="a_DoctorWho_4_qa_0">Trevor Martin</span> played the role in <span id="a_DoctorWho_4_qa_3">Doctor Who and the Daleks in the Seven Keys to Doomsday</span>. In the late 1980s, Jon Pertwee and Colin Baker both played the Doctor at different times during the run of a play titled <span id="a_DoctorWho_4_qa_1">Doctor Who – The Ultimate Adventure</span>. For two performances, while Pertwee was ill, <span id="a_DoctorWho_4_qa_4">David Banks</span> (better known for playing Cybermen) played the Doctor. Other original plays have been staged as amateur productions, with other actors playing the Doctor, while Terry Nation wrote <span id="a_DoctorWho_4_qa_2">The Curse of the Daleks</span>, a stage play mounted in the late 1960s, but without the Doctor.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Who played Doctor Who on stage in the 70's?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who played Doctor Who on stage in the 70's?`, correct_answer: "Trevor Martin", trial_name: "a_DoctorWho_4_qa_0"} 
};var a_DoctorWho_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the name of the Doctor Who play from the 1980's?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the name of the Doctor Who play from the 1980's?`, correct_answer: "Doctor Who – The Ultimate Adventure", trial_name: "a_DoctorWho_4_qa_1"} 
};var a_DoctorWho_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What Doctor Who was written without Doctor Who in it?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What Doctor Who was written without Doctor Who in it?`, correct_answer: "The Curse of the Daleks", trial_name: "a_DoctorWho_4_qa_2"} 
};var a_DoctorWho_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the name of the play performed in the 1970's?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the name of the play performed in the 1970's?`, correct_answer: "Doctor Who and the Daleks in the Seven Keys to Doomsday", trial_name: "a_DoctorWho_4_qa_3"} 
};var a_DoctorWho_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Which actor was a replacement for Doctor Who due to the illness of the main actor?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Which actor was a replacement for Doctor Who due to the illness of the main actor?`, correct_answer: "David Banks", trial_name: "a_DoctorWho_4_qa_4"} 
};var a_UniversityofChicago_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In business, notable alumni include Microsoft CEO <span id="a_UniversityofChicago_3_qa_0">Satya Nadella</span>, Oracle Corporation founder and the third richest man in America <span id="a_UniversityofChicago_3_qa_1"><span id="a_UniversityofChicago_3_qa_2">Larry Ellison</span></span>, Goldman Sachs and MF Global CEO as well as former Governor of New Jersey <span id="a_UniversityofChicago_3_qa_3">Jon Corzine</span>, McKinsey & Company founder and author of the first management accounting textbook <span id="a_UniversityofChicago_3_qa_4">James O. McKinsey</span>, Arley D. Cathey, Bloomberg L.P. CEO Daniel Doctoroff, Credit Suisse CEO Brady Dougan, Morningstar, Inc. founder and CEO Joe Mansueto, Chicago Cubs owner and chairman Thomas S. Ricketts, and NBA commissioner Adam Silver.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What Microsoft CEO is also an alumni of the University of Chicago?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What Microsoft CEO is also an alumni of the University of Chicago?`, correct_answer: "Satya Nadella", trial_name: "a_UniversityofChicago_3_qa_0"} 
};var a_UniversityofChicago_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who was the founder of the Oracle Corporation?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who was the founder of the Oracle Corporation?`, correct_answer: "Larry Ellison", trial_name: "a_UniversityofChicago_3_qa_1"} 
};var a_UniversityofChicago_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who is the third riches man in America?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who is the third riches man in America?`, correct_answer: "Larry Ellison", trial_name: "a_UniversityofChicago_3_qa_2"} 
};var a_UniversityofChicago_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What Goldman Sachs CEO is also an alumni of the University of Chicago?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What Goldman Sachs CEO is also an alumni of the University of Chicago?`, correct_answer: "Jon Corzine", trial_name: "a_UniversityofChicago_3_qa_3"} 
};var a_UniversityofChicago_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who founded McKinsey & Company?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who founded McKinsey & Company?`, correct_answer: "James O. McKinsey", trial_name: "a_UniversityofChicago_3_qa_4"} 
};var a_Yuandynasty_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The historian <span id="a_Yuandynasty_4_qa_0">Frederick W. Mote</span> wrote that the usage of the term "social classes" for this system was misleading and that the position of people within the four-class system was not an indication of their actual social power and wealth, but just entailed "<span id="a_Yuandynasty_4_qa_1">degrees of privilege</span>" to which they were entitled institutionally and legally, so a person's standing within the classes was not a guarantee of their standing, since there were <span id="a_Yuandynasty_4_qa_2">rich and well socially standing</span> Chinese while there were less rich Mongol and Semu than there were Mongol and Semu who <span id="a_Yuandynasty_4_qa_3">lived in poverty and were ill treated</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Who thought that the Yuan's social class system shouldn't be called social classes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who thought that the Yuan's social class system shouldn't be called social classes?`, correct_answer: "Frederick W. Mote", trial_name: "a_Yuandynasty_4_qa_0"} 
};var a_Yuandynasty_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What did Mote think the Yuan class system really represented?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did Mote think the Yuan class system really represented?`, correct_answer: "degrees of privilege", trial_name: "a_Yuandynasty_4_qa_1"} 
};var a_Yuandynasty_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">There were many Chinese with what unexpected status?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `There were many Chinese with what unexpected status?`, correct_answer: "rich and well socially standing", trial_name: "a_Yuandynasty_4_qa_2"} 
};var a_Yuandynasty_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">There were many Mongols with what unexpected status?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `There were many Mongols with what unexpected status?`, correct_answer: "lived in poverty and were ill treated", trial_name: "a_Yuandynasty_4_qa_3"} 
};var a_Kenya_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Kenya ranks <span id="a_Kenya_0_qa_0">low</span> on Transparency International's Corruption Perception Index (CPI), a metric which attempts to gauge the prevalence of <span id="a_Kenya_0_qa_1">public sector corruption</span> in various countries. In 2012, the nation placed <span id="a_Kenya_0_qa_2">139th</span> out of 176 total countries in the CPI, with a score of 27/100. However, there are several rather significant developments with regards to curbing corruption from the Kenyan government, for instance, <span id="a_Kenya_0_qa_3">the establishment of a new and independent Ethics and Anti-Corruption Commission</span> (EACC).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Where does Kenya rang on the CPI scale?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where does Kenya rang on the CPI scale?`, correct_answer: "low", trial_name: "a_Kenya_0_qa_0"} 
};var a_Kenya_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What does the CPI scale measure?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What does the CPI scale measure?`, correct_answer: "public sector corruption", trial_name: "a_Kenya_0_qa_1"} 
};var a_Kenya_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where is Kenya place on the scale in 2012?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where is Kenya place on the scale in 2012?`, correct_answer: "139th", trial_name: "a_Kenya_0_qa_2"} 
};var a_Kenya_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How does Kenya curb coruption?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How does Kenya curb coruption?`, correct_answer: "the establishment of a new and independent Ethics and Anti-Corruption Commission", trial_name: "a_Kenya_0_qa_3"} 
};var a_Kenya_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">On <span id="a_Kenya_1_qa_0">28 February 2008</span>, Kibaki and Odinga signed an agreement on the formation of a coalition government in which Odinga would become Kenya's second <span id="a_Kenya_1_qa_1">Prime Minister</span>. Under the deal, the president would appoint cabinet ministers from both <span id="a_Kenya_1_qa_2">PNU and ODM camps</span> depending on <span id="a_Kenya_1_qa_3">each party's strength in Parliament</span>. The agreement stipulated that the cabinet would include a vice-president and two deputy Prime Ministers. After debates, it was passed by Parliament, the coalition would hold <span id="a_Kenya_1_qa_4">until the end of the current Parliament or if either of the parties withdraws from the deal before then</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">When did Kibaki and Odinga sing an agreement on the formation of government?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When did Kibaki and Odinga sing an agreement on the formation of government?`, correct_answer: "28 February 2008", trial_name: "a_Kenya_1_qa_0"} 
};var a_Kenya_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What would be Odinga's role in the government?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What would be Odinga's role in the government?`, correct_answer: "Prime Minister", trial_name: "a_Kenya_1_qa_1"} 
};var a_Kenya_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where did the president appoint cabinet members from?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where did the president appoint cabinet members from?`, correct_answer: "PNU and ODM camps", trial_name: "a_Kenya_1_qa_2"} 
};var a_Kenya_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How was it determined how many from each camp would be appointed?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How was it determined how many from each camp would be appointed?`, correct_answer: "each party's strength in Parliament", trial_name: "a_Kenya_1_qa_3"} 
};var a_Kenya_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How long would this coalition last?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How long would this coalition last?`, correct_answer: "until the end of the current Parliament or if either of the parties withdraws from the deal before then", trial_name: "a_Kenya_1_qa_4"} 
};var a_Kenya_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">With <span id="a_Kenya_2_qa_0">International Criminal Court trial dates</span> in 2013 for both President Kenyatta and Deputy President William Ruto related to the 2007 election aftermath, <span id="a_Kenya_2_qa_1">US President Barack Obama</span> chose not to visit the country during his mid-2013 African trip. Later in the summer, Kenyatta visited <span id="a_Kenya_2_qa_2">China</span> at the invitation of President Xi Jinping after a stop in Russia and not having visited the United States as president. In <span id="a_Kenya_2_qa_3">July 2015</span> Obama visited Kenya, as the first American president to visit the country while in office.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What was the result of the 2007 election? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the result of the 2007 election? `, correct_answer: "International Criminal Court trial dates", trial_name: "a_Kenya_2_qa_0"} 
};var a_Kenya_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who decided not to come visit the country in 2013?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who decided not to come visit the country in 2013?`, correct_answer: "US President Barack Obama", trial_name: "a_Kenya_2_qa_1"} 
};var a_Kenya_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where did Kenyatta visit at the invitation of the President?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where did Kenyatta visit at the invitation of the President?`, correct_answer: "China", trial_name: "a_Kenya_2_qa_2"} 
};var a_Kenya_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When did Obama finally visit Kenya?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When did Obama finally visit Kenya?`, correct_answer: "July 2015", trial_name: "a_Kenya_2_qa_3"} 
};var a_Kenya_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Child labour is common in Kenya. Most working children are active in <span id="a_Kenya_3_qa_0">agriculture</span>. In 2006, UNICEF estimated that <span id="a_Kenya_3_qa_1">up to 30%</span> of girls in the coastal areas of Malindi, Mombasa, Kilifi, and Diani were subject to prostitution. Most of the prostitutes in Kenya are aged <span id="a_Kenya_3_qa_2">9–18</span>. The Ministry of Gender and Child Affairs employed 400 child protection officers in 2009. The causes of child labour include <span id="a_Kenya_3_qa_3">poverty, the lack of access to education and weak government institutions</span>. Kenya has ratified Convention No. 81 on labour inspection in industries and Convention No. 129 on labour inspection in agriculture.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Kenya_3_qa_0','#a_Kenya_3_qa_1','#a_Kenya_3_qa_2','#a_Kenya_3_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Kenya_3_1280_720.png';
a.click();});}},data: { trial_name: "a_Kenya_3"}
};
var a_Kenya_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where are most working children working?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where are most working children working?`, correct_answer: "agriculture", trial_name: "a_Kenya_3_qa_0"} 
};var a_Kenya_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What percent of girls are in prostution in Kenyas coastal areas?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What percent of girls are in prostution in Kenyas coastal areas?`, correct_answer: "up to 30%", trial_name: "a_Kenya_3_qa_1"} 
};var a_Kenya_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the age range of most prostitutes in Kenya?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the age range of most prostitutes in Kenya?`, correct_answer: "9–18", trial_name: "a_Kenya_3_qa_2"} 
};var a_Kenya_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What are some of the causes of child labor?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are some of the causes of child labor?`, correct_answer: "poverty, the lack of access to education and weak government institutions", trial_name: "a_Kenya_3_qa_3"} 
};var a_IntergovernmentalPanelonClimateChange_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_IntergovernmentalPanelonClimateChange_0_qa_1">Korean</span> economist <span id="a_IntergovernmentalPanelonClimateChange_0_qa_0">Hoesung Lee</span> is the chair of the IPCC since October 8, 2015, following the election of the new IPCC Bureau. Before this election, the IPCC was led by his vice-Chair <span id="a_IntergovernmentalPanelonClimateChange_0_qa_2">Ismail El Gizouli</span>, who was designated acting Chair after the resignation of Rajendra K. Pachauri in <span id="a_IntergovernmentalPanelonClimateChange_0_qa_4">February 2015</span>. The previous chairs were Rajendra K. Pachauri, elected in May 2002; Robert Watson in 1997; and <span id="a_IntergovernmentalPanelonClimateChange_0_qa_3">Bert Bolin</span> in 1988. The chair is assisted by an elected bureau including vice-chairs, working group co-chairs, and a secretariat.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Who is the chair of the IPCC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who is the chair of the IPCC?`, correct_answer: "Hoesung Lee", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_0"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What nationality is Hoesung Lee?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What nationality is Hoesung Lee?`, correct_answer: "Korean", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_1"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who is the vice-chair of the IPCC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who is the vice-chair of the IPCC?`, correct_answer: "Ismail El Gizouli", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_2"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who was the first chair of the IPCC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who was the first chair of the IPCC?`, correct_answer: "Bert Bolin", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_3"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When did Pachauri resign as chair of the IPCC?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When did Pachauri resign as chair of the IPCC?`, correct_answer: "February 2015", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_4"} 
};var a_IntergovernmentalPanelonClimateChange_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">This projection was not included in the final summary for policymakers. The IPCC has since acknowledged that <span id="a_IntergovernmentalPanelonClimateChange_2_qa_0">the date</span> is incorrect, while reaffirming that the conclusion in the final summary was robust. They expressed regret for <span id="a_IntergovernmentalPanelonClimateChange_2_qa_1">"the poor application of well-established IPCC procedures in this instance"</span>. The date of 2035 has been correctly quoted by the IPCC from <span id="a_IntergovernmentalPanelonClimateChange_2_qa_2">the WWF report</span>, which has misquoted its own source, an ICSI report <span id="a_IntergovernmentalPanelonClimateChange_2_qa_3">"Variations of Snow and Ice in the past and at present on a Global and Regional Scale"</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What did the IPCC say was mistaken?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did the IPCC say was mistaken?`, correct_answer: "the date", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_0"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What did the IPCC apologize for?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did the IPCC apologize for?`, correct_answer: "the poor application of well-established IPCC procedures in this instance", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_1"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the source of the mistake?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the source of the mistake?`, correct_answer: "the WWF report", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_2"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What report had the correct date?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What report had the correct date?`, correct_answer: "Variations of Snow and Ice in the past and at present on a Global and Regional Scale", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_3"} 
};var a_Chloroplast_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">These chloroplasts, which can be traced back directly to a cyanobacterial ancestor, are known as primary plastids ("plastid" in this context means almost the same thing as <span id="a_Chloroplast_1_qa_0">chloroplast</span>). All primary chloroplasts belong to one of <span id="a_Chloroplast_1_qa_1">three</span> chloroplast lineages—the glaucophyte chloroplast lineage, the rhodophyte, or <span id="a_Chloroplast_1_qa_2">red algal chloroplast lineage</span>, or the chloroplastidan, or <span id="a_Chloroplast_1_qa_3">green chloroplast lineage</span>. The second two are the largest, and <span id="a_Chloroplast_1_qa_4">the green chloroplast lineage</span> is the one that contains the land plants.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What does 'plastid' mean?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What does 'plastid' mean?`, correct_answer: "chloroplast", trial_name: "a_Chloroplast_1_qa_0"} 
};var a_Chloroplast_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many chloroplast lineages are there?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many chloroplast lineages are there?`, correct_answer: "three", trial_name: "a_Chloroplast_1_qa_1"} 
};var a_Chloroplast_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What does rhodophyte mean?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What does rhodophyte mean?`, correct_answer: "red algal chloroplast lineage", trial_name: "a_Chloroplast_1_qa_2"} 
};var a_Chloroplast_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What does chloroplastidan mean?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What does chloroplastidan mean?`, correct_answer: "green chloroplast lineage", trial_name: "a_Chloroplast_1_qa_3"} 
};var a_Chloroplast_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Which lineage includes land plants?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Which lineage includes land plants?`, correct_answer: "the green chloroplast lineage", trial_name: "a_Chloroplast_1_qa_4"} 
};var a_Chloroplast_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Chloroplasts have their own DNA, often abbreviated as <span id="a_Chloroplast_2_qa_0">ctDNA, or cpDNA</span>. It is also known as <span id="a_Chloroplast_2_qa_1">the plastome</span>. Its existence was first proved in <span id="a_Chloroplast_2_qa_2">1962</span>, and first sequenced in <span id="a_Chloroplast_2_qa_3">1986</span>—when <span id="a_Chloroplast_2_qa_4">two Japanese research teams</span> sequenced the chloroplast DNA of liverwort and tobacco. Since then, hundreds of chloroplast DNAs from various species have been sequenced, but they're mostly those of land plants and green algae—glaucophytes, red algae, and other algal groups are extremely underrepresented, potentially introducing some bias in views of "typical" chloroplast DNA structure and content.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What is chloroplast DNA abbreviated as?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is chloroplast DNA abbreviated as?`, correct_answer: "ctDNA, or cpDNA", trial_name: "a_Chloroplast_2_qa_0"} 
};var a_Chloroplast_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is a synonym for chloroplast DNA?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is a synonym for chloroplast DNA?`, correct_answer: "the plastome", trial_name: "a_Chloroplast_2_qa_1"} 
};var a_Chloroplast_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When was the plastome discovered?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When was the plastome discovered?`, correct_answer: "1962", trial_name: "a_Chloroplast_2_qa_2"} 
};var a_Chloroplast_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When was the first plastome sequenced?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When was the first plastome sequenced?`, correct_answer: "1986", trial_name: "a_Chloroplast_2_qa_3"} 
};var a_Chloroplast_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who sequenced the first plastome?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who sequenced the first plastome?`, correct_answer: "two Japanese research teams", trial_name: "a_Chloroplast_2_qa_4"} 
};var a_Chloroplast_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Chloroplast_3_qa_0">Endosymbiotic gene transfer</span> is how we know about the lost chloroplasts in many chromalveolate lineages. Even if a chloroplast is eventually lost, the genes it donated to the former host's nucleus persist, providing evidence for <span id="a_Chloroplast_3_qa_1">the lost chloroplast's existence</span>. For example, while diatoms (a heterokontophyte) now have <span id="a_Chloroplast_3_qa_2">a red algal derived chloroplast</span>, the presence of many green algal genes in the diatom nucleus provide evidence that the diatom ancestor (probably the ancestor of all chromalveolates too) had a <span id="a_Chloroplast_3_qa_3">green algal derived chloroplast</span> at some point, which was subsequently replaced by the red chloroplast.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Chloroplast_3_qa_0','#a_Chloroplast_3_qa_1','#a_Chloroplast_3_qa_2','#a_Chloroplast_3_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Chloroplast_3_1280_720.png';
a.click();});}},data: { trial_name: "a_Chloroplast_3"}
};
var a_Chloroplast_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What shows us lost chloroplasts?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What shows us lost chloroplasts?`, correct_answer: "Endosymbiotic gene transfer", trial_name: "a_Chloroplast_3_qa_0"} 
};var a_Chloroplast_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What do donated genes give evidence of?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What do donated genes give evidence of?`, correct_answer: "the lost chloroplast's existence", trial_name: "a_Chloroplast_3_qa_1"} 
};var a_Chloroplast_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What kind of chloroplasts do diatoms have?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What kind of chloroplasts do diatoms have?`, correct_answer: "a red algal derived chloroplast", trial_name: "a_Chloroplast_3_qa_2"} 
};var a_Chloroplast_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What kind of chloroplasts did diatoms have but lost?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What kind of chloroplasts did diatoms have but lost?`, correct_answer: "green algal derived chloroplast", trial_name: "a_Chloroplast_3_qa_3"} 
};var a_Chloroplast_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">There are some common misconceptions about the outer and inner chloroplast membranes. The fact that chloroplasts are <span id="a_Chloroplast_4_qa_0">surrounded by a double membrane</span> is often cited as evidence that they are the descendants of endosymbiotic cyanobacteria. This is often interpreted as meaning the outer chloroplast membrane is <span id="a_Chloroplast_4_qa_1">the product of the host's cell membrane infolding to form a vesicle to surround the ancestral cyanobacterium</span>—which is not true—both chloroplast membranes are <span id="a_Chloroplast_4_qa_2">homologous</span> to the cyanobacterium's original double membranes.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What is evidence chloroplasts descended from endosymbiotic cyanobacteria?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is evidence chloroplasts descended from endosymbiotic cyanobacteria?`, correct_answer: "surrounded by a double membrane", trial_name: "a_Chloroplast_4_qa_0"} 
};var a_Chloroplast_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is incorrectly thought about the outer chloroplast membrane?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is incorrectly thought about the outer chloroplast membrane?`, correct_answer: "the product of the host's cell membrane infolding to form a vesicle to surround the ancestral cyanobacterium", trial_name: "a_Chloroplast_4_qa_1"} 
};var a_Chloroplast_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How do both chloroplast membranes compare to cyanobacterium's original double membranes?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How do both chloroplast membranes compare to cyanobacterium's original double membranes?`, correct_answer: "homologous", trial_name: "a_Chloroplast_4_qa_2"} 
};var a_Rhine_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Between Bingen and Bonn, the <span id="a_Rhine_0_qa_0"><span id="a_Rhine_0_qa_4">Middle Rhine</span></span> flows through the <span id="a_Rhine_0_qa_1"><span id="a_Rhine_0_qa_5">Rhine Gorge</span></span>, a formation which was created by <span id="a_Rhine_0_qa_2">erosion</span>. The rate of erosion equaled the uplift in the region, such that the river was left at about its original level while the surrounding lands raised. The gorge is quite deep and is the stretch of the river which is known for its many <span id="a_Rhine_0_qa_6">castles and vineyards</span>. It is a UNESCO World Heritage Site (2002) and known as "<span id="a_Rhine_0_qa_3"><span id="a_Rhine_0_qa_7">the Romantic Rhine</span></span>", with more than 40 castles and fortresses from the Middle Ages and many quaint and lovely country villages.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What flows between the Bingen and Bonn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What flows between the Bingen and Bonn?`, correct_answer: "Middle Rhine", trial_name: "a_Rhine_0_qa_0"} 
};var a_Rhine_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What gorge is between the Bingen and Bonn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What gorge is between the Bingen and Bonn?`, correct_answer: "Rhine Gorge", trial_name: "a_Rhine_0_qa_1"} 
};var a_Rhine_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How was the Rhine Gorge formed?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How was the Rhine Gorge formed?`, correct_answer: "erosion", trial_name: "a_Rhine_0_qa_2"} 
};var a_Rhine_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the area called near the Rhine Gorge with castles from the middle ages?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the area called near the Rhine Gorge with castles from the middle ages?`, correct_answer: "the Romantic Rhine", trial_name: "a_Rhine_0_qa_3"} 
};var a_Rhine_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What flows between Bingen and Bonn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What flows between Bingen and Bonn?`, correct_answer: "Middle Rhine", trial_name: "a_Rhine_0_qa_4"} 
};var a_Rhine_0_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where does the Middle Rhine flow between Bingen and Bonn?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where does the Middle Rhine flow between Bingen and Bonn?`, correct_answer: "Rhine Gorge", trial_name: "a_Rhine_0_qa_5"} 
};var a_Rhine_0_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the Rhine Gorge known for?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the Rhine Gorge known for?`, correct_answer: "castles and vineyards", trial_name: "a_Rhine_0_qa_6"} 
};var a_Rhine_0_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the section of the Rhine Gorge recognized by UNESCO called?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the section of the Rhine Gorge recognized by UNESCO called?`, correct_answer: "the Romantic Rhine", trial_name: "a_Rhine_0_qa_7"} 
};var a_Rhine_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The <span id="a_Rhine_1_qa_0">Rhine-Meuse</span> Delta, the most important natural region of the Netherlands begins <span id="a_Rhine_1_qa_1">near Millingen aan de Rijn</span>, close to the Dutch-German border with the division of the Rhine into Waal and Nederrijn. Since the Rhine contributes most of the water, the shorter term <span id="a_Rhine_1_qa_2">Rhine Delta</span> is commonly used. However, this name is also used for the river delta where the Rhine flows into Lake Constance, so it is clearer to call the larger one Rhine-Meuse delta, or even Rhine–Meuse–Scheldt delta, as the Scheldt ends in the same delta.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What is the name of the Delta in the Netherlands? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the name of the Delta in the Netherlands? `, correct_answer: "Rhine-Meuse", trial_name: "a_Rhine_1_qa_0"} 
};var a_Rhine_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where does the Delta in the Netherlands begin?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where does the Delta in the Netherlands begin?`, correct_answer: "near Millingen aan de Rijn", trial_name: "a_Rhine_1_qa_1"} 
};var a_Rhine_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the nickname for the Delta in the Netherlands?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the nickname for the Delta in the Netherlands?`, correct_answer: "Rhine Delta", trial_name: "a_Rhine_1_qa_2"} 
};var a_Rhine_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The last glacial ran from <span id="a_Rhine_2_qa_0">~74,000 (BP = Before Present)</span>, until the end of the Pleistocene (~<span id="a_Rhine_2_qa_1">11,600 BP</span>). In northwest Europe, it saw two very cold phases, peaking around 70,000 BP and around 29,000–24,000 BP. The last phase slightly predates the global last ice age maximum (Last Glacial Maximum). During this time, the lower Rhine flowed roughly <span id="a_Rhine_2_qa_2">west</span> through the Netherlands and extended to the southwest, through the English Channel and finally, to the Atlantic Ocean. The <span id="a_Rhine_2_qa_4">English Channel</span>, the Irish Channel and most of the North Sea were dry land, mainly because sea level was approximately <span id="a_Rhine_2_qa_3">120 m</span> (390 ft) lower than today.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Rhine_2_qa_0','#a_Rhine_2_qa_1','#a_Rhine_2_qa_2','#a_Rhine_2_qa_3','#a_Rhine_2_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Rhine_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Rhine_2"}
};
var a_Rhine_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When did the last glacial start?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When did the last glacial start?`, correct_answer: "~74,000 (BP = Before Present)", trial_name: "a_Rhine_2_qa_0"} 
};var a_Rhine_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When did the last glacial end?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When did the last glacial end?`, correct_answer: "11,600 BP", trial_name: "a_Rhine_2_qa_1"} 
};var a_Rhine_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Which direction did the Rhine flow during the last cold phase?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Which direction did the Rhine flow during the last cold phase?`, correct_answer: "west", trial_name: "a_Rhine_2_qa_2"} 
};var a_Rhine_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How much lower was the North Sea in the last cold phase than it is today?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How much lower was the North Sea in the last cold phase than it is today?`, correct_answer: "120 m", trial_name: "a_Rhine_2_qa_3"} 
};var a_Rhine_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Besides the North Sea and the Irish Channel, what else was lowered in the last cold phase?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Besides the North Sea and the Irish Channel, what else was lowered in the last cold phase?`, correct_answer: "English Channel", trial_name: "a_Rhine_2_qa_4"} 
};var a_Rhine_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">As northwest Europe slowly began to warm up from <span id="a_Rhine_3_qa_0">22,000 years ago</span> onward, frozen subsoil and expanded alpine glaciers began to <span id="a_Rhine_3_qa_1">thaw</span> and fall-winter snow covers melted in spring. Much of the discharge was routed to the <span id="a_Rhine_3_qa_2">Rhine</span> and its downstream extension. Rapid warming and changes of vegetation, to open forest, began about <span id="a_Rhine_3_qa_3">13,000 BP</span>. By <span id="a_Rhine_3_qa_4">9000 BP</span>, Europe was fully forested. With globally shrinking ice-cover, ocean water levels rose and the English Channel and North Sea re-inundated. Meltwater, adding to the ocean and land subsidence, drowned the former coasts of Europe transgressionally.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Rhine_3_qa_0','#a_Rhine_3_qa_1','#a_Rhine_3_qa_2','#a_Rhine_3_qa_3','#a_Rhine_3_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Rhine_3_1280_720.png';
a.click();});}},data: { trial_name: "a_Rhine_3"}
};
var a_Rhine_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When did Europe slowly begin to warm up from the last Ice Age?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When did Europe slowly begin to warm up from the last Ice Age?`, correct_answer: "22,000 years ago", trial_name: "a_Rhine_3_qa_0"} 
};var a_Rhine_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What did frozen subsoil and expanded alpine glaciers begin to do?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What did frozen subsoil and expanded alpine glaciers begin to do?`, correct_answer: "thaw", trial_name: "a_Rhine_3_qa_1"} 
};var a_Rhine_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where did the discharge from glaciers go in Europe in the last Ice Age?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where did the discharge from glaciers go in Europe in the last Ice Age?`, correct_answer: "Rhine", trial_name: "a_Rhine_3_qa_2"} 
};var a_Rhine_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When did rapid warming begin and help vegetation?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When did rapid warming begin and help vegetation?`, correct_answer: "13,000 BP", trial_name: "a_Rhine_3_qa_3"} 
};var a_Rhine_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When was Europe fully forested and recovered from the last Ice Age?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When was Europe fully forested and recovered from the last Ice Age?`, correct_answer: "9000 BP", trial_name: "a_Rhine_3_qa_4"} 
};var a_ScottishParliament_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Under the terms of the Scotland Act 1978, an elected assembly would be set up in <span id="a_ScottishParliament_0_qa_0">Edinburgh</span> provided that the <span id="a_ScottishParliament_0_qa_1">majority</span> of the Scottish electorate voted for it in a referendum to be held on 1 March 1979 that represented at least 40% of the total electorate. The 1979 Scottish devolution referendum to establish a devolved Scottish Assembly <span id="a_ScottishParliament_0_qa_3">failed</span>. Although the vote was <span id="a_ScottishParliament_0_qa_2">51.6%</span> in favour of a Scottish Assembly, this figure did not equal the 40% of the total electorate threshold deemed necessary to pass the measure, as <span id="a_ScottishParliament_0_qa_4">32.9%</span> of the eligible voting population did not, or had been unable to, vote.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Where was an elected assembly to be set up, under the terms of the Scotland Act of 1978?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where was an elected assembly to be set up, under the terms of the Scotland Act of 1978?`, correct_answer: "Edinburgh", trial_name: "a_ScottishParliament_0_qa_0"} 
};var a_ScottishParliament_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How many of the Scottish electorate would need to for it on the referendum?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many of the Scottish electorate would need to for it on the referendum?`, correct_answer: "majority", trial_name: "a_ScottishParliament_0_qa_1"} 
};var a_ScottishParliament_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What percentage of the vote for a Scottish Assembly in favor of it?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What percentage of the vote for a Scottish Assembly in favor of it?`, correct_answer: "51.6%", trial_name: "a_ScottishParliament_0_qa_2"} 
};var a_ScottishParliament_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How did trying to establish a devolved Scottish Assembly go in 1979?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How did trying to establish a devolved Scottish Assembly go in 1979?`, correct_answer: "failed", trial_name: "a_ScottishParliament_0_qa_3"} 
};var a_ScottishParliament_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What percentage of Scotland's voting population failed to actually vote?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What percentage of Scotland's voting population failed to actually vote?`, correct_answer: "32.9%", trial_name: "a_ScottishParliament_0_qa_4"} 
};var a_ScottishParliament_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Much of the work of the Scottish Parliament is done in <span id="a_ScottishParliament_1_qa_0">committee</span>. The role of committees is <span id="a_ScottishParliament_1_qa_1">stronger</span> in the Scottish Parliament than in other parliamentary systems, partly as a means of strengthening the role of backbenchers in their scrutiny of the government and partly to compensate for the fact that there is <span id="a_ScottishParliament_1_qa_2">no revising chamber</span>. The <span id="a_ScottishParliament_1_qa_3">principal role</span> of committees in the Scottish Parliament is to take evidence from witnesses, conduct inquiries and scrutinise legislation. Committee meetings take place on Tuesday, Wednesday and Thursday morning when Parliament is sitting. Committees can also meet at <span id="a_ScottishParliament_1_qa_4">other locations throughout Scotland</span>.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_ScottishParliament_1_qa_0','#a_ScottishParliament_1_qa_1','#a_ScottishParliament_1_qa_2','#a_ScottishParliament_1_qa_3','#a_ScottishParliament_1_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_ScottishParliament_1_1280_720.png';
a.click();});}},data: { trial_name: "a_ScottishParliament_1"}
};
var a_ScottishParliament_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where is much of the work of the Scottish Parliament done?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where is much of the work of the Scottish Parliament done?`, correct_answer: "committee", trial_name: "a_ScottishParliament_1_qa_0"} 
};var a_ScottishParliament_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What are committees in the Scottish Parliament compared to other systems?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are committees in the Scottish Parliament compared to other systems?`, correct_answer: "stronger", trial_name: "a_ScottishParliament_1_qa_1"} 
};var a_ScottishParliament_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is one avenue being compensated for by having committees serve such a large role?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is one avenue being compensated for by having committees serve such a large role?`, correct_answer: "no revising chamber", trial_name: "a_ScottishParliament_1_qa_2"} 
};var a_ScottishParliament_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Taking evidence from witnesses is one of committees' what?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Taking evidence from witnesses is one of committees' what?`, correct_answer: "principal role", trial_name: "a_ScottishParliament_1_qa_3"} 
};var a_ScottishParliament_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where might committees meet outside of Parliament?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where might committees meet outside of Parliament?`, correct_answer: "other locations throughout Scotland", trial_name: "a_ScottishParliament_1_qa_4"} 
};var a_ScottishParliament_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">A further type of <span id="a_ScottishParliament_2_qa_0">committee</span> is normally set up to scrutinise private bills submitted to the Scottish Parliament by an outside party or promoter who is not a member of the Scottish Parliament or <span id="a_ScottishParliament_2_qa_2">Scottish Government.</span> Private bills normally relate to <span id="a_ScottishParliament_2_qa_1">large-scale development projects</span> such as infrastructure projects that require the use of land or property. <span id="a_ScottishParliament_2_qa_3">Private Bill</span> Committees have been set up to consider legislation on issues such as the development of the Edinburgh Tram Network, the Glasgow Airport Rail Link, the Airdrie-Bathgate Rail Link and extensions to the National Gallery of Scotland.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_ScottishParliament_2_qa_0','#a_ScottishParliament_2_qa_1','#a_ScottishParliament_2_qa_2','#a_ScottishParliament_2_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_ScottishParliament_2_1280_720.png';
a.click();});}},data: { trial_name: "a_ScottishParliament_2"}
};
var a_ScottishParliament_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is set up to scrutinize private bills submitted by party outsiders?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is set up to scrutinize private bills submitted by party outsiders?`, correct_answer: "committee", trial_name: "a_ScottishParliament_2_qa_0"} 
};var a_ScottishParliament_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What topic do private bills typically have?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What topic do private bills typically have?`, correct_answer: "large-scale development projects", trial_name: "a_ScottishParliament_2_qa_1"} 
};var a_ScottishParliament_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who decides how land or property is allowed to be used?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who decides how land or property is allowed to be used?`, correct_answer: "Scottish Government.", trial_name: "a_ScottishParliament_2_qa_2"} 
};var a_ScottishParliament_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What kind of committee considered legislation on the development of the Edinburgh Tram Network?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What kind of committee considered legislation on the development of the Edinburgh Tram Network?`, correct_answer: "Private Bill", trial_name: "a_ScottishParliament_2_qa_3"} 
};var a_Islamism_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Islamism is a controversial concept not just because it posits a <span id="a_Islamism_0_qa_0">political</span> role for Islam but also because <span id="a_Islamism_0_qa_2">its supporters</span> believe their views merely reflect <span id="a_Islamism_0_qa_1">Islam</span>, while the contrary idea that Islam is, or can be, apolitical is an error. Scholars and observers who do not believe that Islam is merely a political ideology include Fred Halliday, John Esposito and Muslim intellectuals like Javed Ahmad Ghamidi. Hayri Abaza argues the failure to distinguish between Islam and Islamism leads many in the West to support <span id="a_Islamism_0_qa_3">illiberal Islamic regimes</span>, to the detriment of progressive moderates who seek to separate <span id="a_Islamism_0_qa_4">religion from politics</span>.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Islamism_0_qa_0','#a_Islamism_0_qa_1','#a_Islamism_0_qa_2','#a_Islamism_0_qa_3','#a_Islamism_0_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Islamism_0_1280_720.png';
a.click();});}},data: { trial_name: "a_Islamism_0"}
};
var a_Islamism_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What type of role that Islamism seeks makes it a somewhat controversial concept?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What type of role that Islamism seeks makes it a somewhat controversial concept?`, correct_answer: "political", trial_name: "a_Islamism_0_qa_0"} 
};var a_Islamism_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What do supporters of Islamism believe their views reflect?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What do supporters of Islamism believe their views reflect?`, correct_answer: "Islam", trial_name: "a_Islamism_0_qa_1"} 
};var a_Islamism_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">The idea that Islam can be apolitical isn't able to be embraced by whom?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `The idea that Islam can be apolitical isn't able to be embraced by whom?`, correct_answer: "its supporters", trial_name: "a_Islamism_0_qa_2"} 
};var a_Islamism_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What does the inability to separate Islam from Islamism lead many in the West to support?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What does the inability to separate Islam from Islamism lead many in the West to support?`, correct_answer: "illiberal Islamic regimes", trial_name: "a_Islamism_0_qa_3"} 
};var a_Islamism_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What do progressive moderates of Islam seek to separate?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What do progressive moderates of Islam seek to separate?`, correct_answer: "religion from politics", trial_name: "a_Islamism_0_qa_4"} 
};var a_Islamism_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Islamism_1_qa_0">Islamist</span> movements such as the Muslim Brotherhood, "are well known for providing <span id="a_Islamism_1_qa_2">shelters, educational assistance, free or low cost medical clinics, housing assistance</span> to students from out of town, student advisory groups, facilitation of inexpensive mass marriage ceremonies to <span id="a_Islamism_1_qa_4">avoid prohibitively costly dowry demands</span>, legal assistance, sports facilities, and women's groups." All this compares very favourably against <span id="a_Islamism_1_qa_1">incompetent, inefficient, or neglectful</span> governments whose commitment to social justice is limited to <span id="a_Islamism_1_qa_3">rhetoric</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What type of movement is the Muslim Brotherhood?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What type of movement is the Muslim Brotherhood?`, correct_answer: "Islamist", trial_name: "a_Islamism_1_qa_0"} 
};var a_Islamism_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">The Muslim Brotherhood's competence compares well against what type of local governments?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `The Muslim Brotherhood's competence compares well against what type of local governments?`, correct_answer: "incompetent, inefficient, or neglectful", trial_name: "a_Islamism_1_qa_1"} 
};var a_Islamism_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What type of assistance to out of town students is the Muslim Brotherhood known for?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What type of assistance to out of town students is the Muslim Brotherhood known for?`, correct_answer: "shelters, educational assistance, free or low cost medical clinics, housing assistance", trial_name: "a_Islamism_1_qa_2"} 
};var a_Islamism_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What are incompetent government's commitment to social justice limited to?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are incompetent government's commitment to social justice limited to?`, correct_answer: "rhetoric", trial_name: "a_Islamism_1_qa_3"} 
};var a_Islamism_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Why has the Muslim Brotherhood facilitated inexpensive mass marriage ceremonies?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Why has the Muslim Brotherhood facilitated inexpensive mass marriage ceremonies?`, correct_answer: "avoid prohibitively costly dowry demands", trial_name: "a_Islamism_1_qa_4"} 
};var a_Islamism_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">For many years, Sudan had an <span id="a_Islamism_3_qa_0">Islamist</span> regime under the leadership of <span id="a_Islamism_3_qa_1">Hassan al-Turabi</span>. His <span id="a_Islamism_3_qa_2">National Islamic Front</span> first gained influence when strongman General Gaafar al-Nimeiry invited members to serve in his government in 1979. Turabi built a powerful economic base with <span id="a_Islamism_3_qa_3">money from foreign Islamist banking systems</span>, especially those linked with Saudi Arabia. He also recruited and built a cadre of influential loyalists by placing sympathetic students in the <span id="a_Islamism_3_qa_4">university and military academy</span> while serving as minister of education.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What type of regime ruled over Sudan for many years?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What type of regime ruled over Sudan for many years?`, correct_answer: "Islamist", trial_name: "a_Islamism_3_qa_0"} 
};var a_Islamism_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Who was the leader of the Islamist regime in Sudan?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Who was the leader of the Islamist regime in Sudan?`, correct_answer: "Hassan al-Turabi", trial_name: "a_Islamism_3_qa_1"} 
};var a_Islamism_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What organization did General Gaafar al-Nimeiry invite members of to serve in his government?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What organization did General Gaafar al-Nimeiry invite members of to serve in his government?`, correct_answer: "National Islamic Front", trial_name: "a_Islamism_3_qa_2"} 
};var a_Islamism_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How did Turabi build a strong economic base?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How did Turabi build a strong economic base?`, correct_answer: "money from foreign Islamist banking systems", trial_name: "a_Islamism_3_qa_3"} 
};var a_Islamism_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where did Turabi place students sympathetic to his views?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where did Turabi place students sympathetic to his views?`, correct_answer: "university and military academy", trial_name: "a_Islamism_3_qa_4"} 
};var a_Imperialism_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">The Royal Geographical Society of London and other geographical societies in Europe had great influence and were able to <span id="a_Imperialism_0_qa_4">fund</span> travelers who would come back with tales of their discoveries. These societies also served as a space for travellers to share these stories.<span id="a_Imperialism_0_qa_2">Political</span> geographers such as Friedrich Ratzel of <span id="a_Imperialism_0_qa_0">Germany</span> and Halford Mackinder of <span id="a_Imperialism_0_qa_1">Britain</span> also supported imperialism. Ratzel believed expansion was <span id="a_Imperialism_0_qa_3">necessary</span> for a state’s survival while Mackinder supported Britain’s imperial expansion; these two arguments dominated the discipline for decades.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Where was Friedrich Ratzel born?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where was Friedrich Ratzel born?`, correct_answer: "Germany", trial_name: "a_Imperialism_0_qa_0"} 
};var a_Imperialism_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Where was Halford Mackinder born?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Where was Halford Mackinder born?`, correct_answer: "Britain", trial_name: "a_Imperialism_0_qa_1"} 
};var a_Imperialism_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Halford Mackinder and Friedrich Ratzel where what kind of geographers?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Halford Mackinder and Friedrich Ratzel where what kind of geographers?`, correct_answer: "Political", trial_name: "a_Imperialism_0_qa_2"} 
};var a_Imperialism_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Friedrich Ratzel thought imperialism was what for the country?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Friedrich Ratzel thought imperialism was what for the country?`, correct_answer: "necessary", trial_name: "a_Imperialism_0_qa_3"} 
};var a_Imperialism_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How would the geographical societies in Europe support certain travelers?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How would the geographical societies in Europe support certain travelers?`, correct_answer: "fund", trial_name: "a_Imperialism_0_qa_4"} 
};var a_FrenchandIndianWar_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">In Europe, the North American theater of the Seven Years' War usually is not given a separate name. The entire international conflict is known as the Seven Years' War. "Seven Years" refers to events in Europe, from the official declaration of war in <span id="a_FrenchandIndianWar_0_qa_0">1756 to the signing of the peace treaty in 1763</span>. These dates do not correspond with the fighting on mainland North America, where the fighting between the two colonial powers was largely concluded in <span id="a_FrenchandIndianWar_0_qa_1">six years</span>, from the <span id="a_FrenchandIndianWar_0_qa_3">Battle of Jumonville Glen</span> in 1754 to the capture of Montreal in <span id="a_FrenchandIndianWar_0_qa_2">1760</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What time framd does the Seven Years War cover?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What time framd does the Seven Years War cover?`, correct_answer: "1756 to the signing of the peace treaty in 1763", trial_name: "a_FrenchandIndianWar_0_qa_0"} 
};var a_FrenchandIndianWar_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">How long did the fighting last in Seven Years War?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How long did the fighting last in Seven Years War?`, correct_answer: "six years", trial_name: "a_FrenchandIndianWar_0_qa_1"} 
};var a_FrenchandIndianWar_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When was Montreal captured?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When was Montreal captured?`, correct_answer: "1760", trial_name: "a_FrenchandIndianWar_0_qa_2"} 
};var a_FrenchandIndianWar_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was first battle in 1754?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was first battle in 1754?`, correct_answer: "Battle of Jumonville Glen", trial_name: "a_FrenchandIndianWar_0_qa_3"} 
};var a_FrenchandIndianWar_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Even before Washington returned, Dinwiddie had sent a company of <span id="a_FrenchandIndianWar_2_qa_0">40</span> men under William Trent to that point, where in the early months of <span id="a_FrenchandIndianWar_2_qa_1">1754</span> they began construction of a small stockaded fort. Governor Duquesne sent additional French forces under Claude-Pierre Pecaudy de Contrecœur to relieve Saint-Pierre during the same period, and Contrecœur led 500 men south from Fort Venango on April 5, 1754. When these forces arrived at the fort on April 16, Contrecœur generously allowed Trent's small company to withdraw. He purchased their construction tools to continue building what became <span id="a_FrenchandIndianWar_2_qa_2">Fort Duquesne</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">How many men did Duquesne send to relieve  Saint-Pierre ?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `How many men did Duquesne send to relieve  Saint-Pierre ?`, correct_answer: "40", trial_name: "a_FrenchandIndianWar_2_qa_0"} 
};var a_FrenchandIndianWar_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">When did British begin to build fort under William Trent?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `When did British begin to build fort under William Trent?`, correct_answer: "1754", trial_name: "a_FrenchandIndianWar_2_qa_1"} 
};var a_FrenchandIndianWar_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What was the fort that was being built to be named?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What was the fort that was being built to be named?`, correct_answer: "Fort Duquesne", trial_name: "a_FrenchandIndianWar_2_qa_2"} 
};var a_Force_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Through combining the definition of <span id="a_Force_3_qa_0">electric current</span> as the time rate of change of electric charge, a rule of vector multiplication called <span id="a_Force_3_qa_2">Lorentz's Law</span> describes the force on a charge moving in a magnetic field. The connection between electricity and magnetism allows for the description of a <span id="a_Force_3_qa_1">unified electromagnetic force</span> that acts on a charge. This force can be written as a sum of the <span id="a_Force_3_qa_3">electrostatic force</span> (due to the electric field) and the magnetic force (due to the magnetic field). Fully stated, this is the law:</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What is  the time rate of change of electric charge?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is  the time rate of change of electric charge?`, correct_answer: "electric current", trial_name: "a_Force_3_qa_0"} 
};var a_Force_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What magnetic and electric force acts on a charge?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What magnetic and electric force acts on a charge?`, correct_answer: "unified electromagnetic force", trial_name: "a_Force_3_qa_1"} 
};var a_Force_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is the law named that defines a charge moving through a magnetic field?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is the law named that defines a charge moving through a magnetic field?`, correct_answer: "Lorentz's Law", trial_name: "a_Force_3_qa_2"} 
};var a_Force_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Whatare the electrostatic and magnetic force awritten as the sum of?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Whatare the electrostatic and magnetic force awritten as the sum of?`, correct_answer: "electrostatic force", trial_name: "a_Force_3_qa_3"} 
};var a_Force_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">where  is the relevant cross-sectional area for the volume for which the stress-tensor is being calculated. This <span id="a_Force_4_qa_3">formalism</span> includes <span id="a_Force_4_qa_1"><span id="a_Force_4_qa_2">pressure terms</span></span> associated with forces that act normal to the cross-sectional area (the matrix diagonals of the tensor) as well as shear terms associated with forces that act parallel to the cross-sectional area (the off-diagonal elements). The <span id="a_Force_4_qa_0">stress tensor</span> accounts for forces that cause all strains (deformations) including also tensile stresses and compressions.:133–134:38-1–38-11</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">What causes strain in structures?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What causes strain in structures?`, correct_answer: "stress tensor", trial_name: "a_Force_4_qa_0"} 
};var a_Force_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What is used to calculate cross section area in the volume of an object?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What is used to calculate cross section area in the volume of an object?`, correct_answer: "pressure terms", trial_name: "a_Force_4_qa_1"} 
};var a_Force_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What are associated with normal forces?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What are associated with normal forces?`, correct_answer: "pressure terms", trial_name: "a_Force_4_qa_2"} 
};var a_Force_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">What includes pressure terms when calculating area in volume?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `What includes pressure terms when calculating area in volume?`, correct_answer: "formalism", trial_name: "a_Force_4_qa_3"} 
};var xquad_trials_array = [[a_SuperBowl50_1,[a_SuperBowl50_1_qa_0,a_SuperBowl50_1_qa_1,a_SuperBowl50_1_qa_2,a_SuperBowl50_1_qa_3,a_SuperBowl50_1_qa_4,a_SuperBowl50_1_qa_5,a_SuperBowl50_1_qa_6,a_SuperBowl50_1_qa_7,a_SuperBowl50_1_qa_8,a_SuperBowl50_1_qa_9,a_SuperBowl50_1_qa_10,a_SuperBowl50_1_qa_11,a_SuperBowl50_1_qa_12,a_SuperBowl50_1_qa_13,a_SuperBowl50_1_qa_14,a_SuperBowl50_1_qa_15]],[a_SuperBowl50_2,[a_SuperBowl50_2_qa_0,a_SuperBowl50_2_qa_1,a_SuperBowl50_2_qa_2,a_SuperBowl50_2_qa_3,a_SuperBowl50_2_qa_4,a_SuperBowl50_2_qa_5,a_SuperBowl50_2_qa_6,a_SuperBowl50_2_qa_7,a_SuperBowl50_2_qa_8,a_SuperBowl50_2_qa_9,a_SuperBowl50_2_qa_10,a_SuperBowl50_2_qa_11,a_SuperBowl50_2_qa_12,a_SuperBowl50_2_qa_13,a_SuperBowl50_2_qa_14,a_SuperBowl50_2_qa_15,a_SuperBowl50_2_qa_16]],[a_SuperBowl50_3,[a_SuperBowl50_3_qa_0,a_SuperBowl50_3_qa_1,a_SuperBowl50_3_qa_2,a_SuperBowl50_3_qa_3,a_SuperBowl50_3_qa_4,a_SuperBowl50_3_qa_5,a_SuperBowl50_3_qa_6,a_SuperBowl50_3_qa_7,a_SuperBowl50_3_qa_8,a_SuperBowl50_3_qa_9,a_SuperBowl50_3_qa_10,a_SuperBowl50_3_qa_11]],[a_Warsaw_0,[a_Warsaw_0_qa_0,a_Warsaw_0_qa_1,a_Warsaw_0_qa_2,a_Warsaw_0_qa_3,a_Warsaw_0_qa_4]],[a_Warsaw_1,[a_Warsaw_1_qa_0,a_Warsaw_1_qa_1,a_Warsaw_1_qa_2,a_Warsaw_1_qa_3,a_Warsaw_1_qa_4]],[a_Warsaw_2,[a_Warsaw_2_qa_0,a_Warsaw_2_qa_1,a_Warsaw_2_qa_2,a_Warsaw_2_qa_3,a_Warsaw_2_qa_4]],[a_Warsaw_4,[a_Warsaw_4_qa_0,a_Warsaw_4_qa_1,a_Warsaw_4_qa_2,a_Warsaw_4_qa_3,a_Warsaw_4_qa_4]],[a_Normans_4,[a_Normans_4_qa_0]],[a_NikolaTesla_1,[a_NikolaTesla_1_qa_0,a_NikolaTesla_1_qa_1,a_NikolaTesla_1_qa_2,a_NikolaTesla_1_qa_3,a_NikolaTesla_1_qa_4,a_NikolaTesla_1_qa_5,a_NikolaTesla_1_qa_6,a_NikolaTesla_1_qa_7,a_NikolaTesla_1_qa_8,a_NikolaTesla_1_qa_9]],[a_NikolaTesla_3,[a_NikolaTesla_3_qa_0,a_NikolaTesla_3_qa_1,a_NikolaTesla_3_qa_2]],[a_NikolaTesla_4,[a_NikolaTesla_4_qa_0,a_NikolaTesla_4_qa_1,a_NikolaTesla_4_qa_2]],[a_Computationalcomplexitytheory_0,[a_Computationalcomplexitytheory_0_qa_0,a_Computationalcomplexitytheory_0_qa_1,a_Computationalcomplexitytheory_0_qa_2]],[a_Computationalcomplexitytheory_1,[a_Computationalcomplexitytheory_1_qa_0,a_Computationalcomplexitytheory_1_qa_1,a_Computationalcomplexitytheory_1_qa_2,a_Computationalcomplexitytheory_1_qa_3,a_Computationalcomplexitytheory_1_qa_4]],[a_Computationalcomplexitytheory_2,[a_Computationalcomplexitytheory_2_qa_0,a_Computationalcomplexitytheory_2_qa_1]],[a_Computationalcomplexitytheory_4,[a_Computationalcomplexitytheory_4_qa_0,a_Computationalcomplexitytheory_4_qa_1,a_Computationalcomplexitytheory_4_qa_2,a_Computationalcomplexitytheory_4_qa_3]],[a_Teacher_0,[a_Teacher_0_qa_0,a_Teacher_0_qa_1,a_Teacher_0_qa_2,a_Teacher_0_qa_3,a_Teacher_0_qa_4]],[a_Teacher_1,[a_Teacher_1_qa_0,a_Teacher_1_qa_1,a_Teacher_1_qa_2,a_Teacher_1_qa_3,a_Teacher_1_qa_4]],[a_Teacher_3,[a_Teacher_3_qa_0,a_Teacher_3_qa_1,a_Teacher_3_qa_2,a_Teacher_3_qa_3]],[a_Teacher_4,[a_Teacher_4_qa_0,a_Teacher_4_qa_1,a_Teacher_4_qa_2,a_Teacher_4_qa_3,a_Teacher_4_qa_4]],[a_MartinLuther_0,[a_MartinLuther_0_qa_0,a_MartinLuther_0_qa_1,a_MartinLuther_0_qa_2,a_MartinLuther_0_qa_3,a_MartinLuther_0_qa_4]],[a_MartinLuther_2,[a_MartinLuther_2_qa_0,a_MartinLuther_2_qa_1,a_MartinLuther_2_qa_2,a_MartinLuther_2_qa_3,a_MartinLuther_2_qa_4]],[a_MartinLuther_3,[a_MartinLuther_3_qa_0,a_MartinLuther_3_qa_1,a_MartinLuther_3_qa_2,a_MartinLuther_3_qa_3,a_MartinLuther_3_qa_4]],[a_MartinLuther_4,[a_MartinLuther_4_qa_0,a_MartinLuther_4_qa_1,a_MartinLuther_4_qa_2]],[a_SouthernCalifornia_2,[a_SouthernCalifornia_2_qa_0,a_SouthernCalifornia_2_qa_1,a_SouthernCalifornia_2_qa_2,a_SouthernCalifornia_2_qa_3,a_SouthernCalifornia_2_qa_4]],[a_SouthernCalifornia_3,[a_SouthernCalifornia_3_qa_0,a_SouthernCalifornia_3_qa_1,a_SouthernCalifornia_3_qa_2,a_SouthernCalifornia_3_qa_3,a_SouthernCalifornia_3_qa_4]],[a_SouthernCalifornia_4,[a_SouthernCalifornia_4_qa_0,a_SouthernCalifornia_4_qa_1,a_SouthernCalifornia_4_qa_2,a_SouthernCalifornia_4_qa_3,a_SouthernCalifornia_4_qa_4]],[a_SkyUnitedKingdom_0,[a_SkyUnitedKingdom_0_qa_0,a_SkyUnitedKingdom_0_qa_1,a_SkyUnitedKingdom_0_qa_2,a_SkyUnitedKingdom_0_qa_3,a_SkyUnitedKingdom_0_qa_4]],[a_SkyUnitedKingdom_1,[a_SkyUnitedKingdom_1_qa_0,a_SkyUnitedKingdom_1_qa_1,a_SkyUnitedKingdom_1_qa_2,a_SkyUnitedKingdom_1_qa_3,a_SkyUnitedKingdom_1_qa_4]],[a_SkyUnitedKingdom_4,[a_SkyUnitedKingdom_4_qa_0,a_SkyUnitedKingdom_4_qa_1,a_SkyUnitedKingdom_4_qa_2,a_SkyUnitedKingdom_4_qa_3,a_SkyUnitedKingdom_4_qa_4]],[a_VictoriaAustralia_1,[a_VictoriaAustralia_1_qa_0,a_VictoriaAustralia_1_qa_1,a_VictoriaAustralia_1_qa_2,a_VictoriaAustralia_1_qa_3,a_VictoriaAustralia_1_qa_4]],[a_VictoriaAustralia_2,[a_VictoriaAustralia_2_qa_0,a_VictoriaAustralia_2_qa_1,a_VictoriaAustralia_2_qa_2,a_VictoriaAustralia_2_qa_3,a_VictoriaAustralia_2_qa_4]],[a_VictoriaAustralia_3,[a_VictoriaAustralia_3_qa_0,a_VictoriaAustralia_3_qa_1,a_VictoriaAustralia_3_qa_2,a_VictoriaAustralia_3_qa_3,a_VictoriaAustralia_3_qa_4]],[a_Huguenot_0,[a_Huguenot_0_qa_0,a_Huguenot_0_qa_1,a_Huguenot_0_qa_2,a_Huguenot_0_qa_3]],[a_Steamengine_0,[a_Steamengine_0_qa_0,a_Steamengine_0_qa_1,a_Steamengine_0_qa_2,a_Steamengine_0_qa_3]],[a_Steamengine_3,[a_Steamengine_3_qa_0,a_Steamengine_3_qa_1,a_Steamengine_3_qa_2,a_Steamengine_3_qa_3,a_Steamengine_3_qa_4]],[a_Oxygen_1,[a_Oxygen_1_qa_0,a_Oxygen_1_qa_1,a_Oxygen_1_qa_2,a_Oxygen_1_qa_3]],[a_1973oilcrisis_1,[a_1973oilcrisis_1_qa_0,a_1973oilcrisis_1_qa_1,a_1973oilcrisis_1_qa_2,a_1973oilcrisis_1_qa_3,a_1973oilcrisis_1_qa_4]],[a_1973oilcrisis_2,[a_1973oilcrisis_2_qa_0,a_1973oilcrisis_2_qa_1,a_1973oilcrisis_2_qa_2,a_1973oilcrisis_2_qa_3]],[a_1973oilcrisis_3,[a_1973oilcrisis_3_qa_0,a_1973oilcrisis_3_qa_1,a_1973oilcrisis_3_qa_2]],[a_Apolloprogram_1,[a_Apolloprogram_1_qa_0,a_Apolloprogram_1_qa_1,a_Apolloprogram_1_qa_2,a_Apolloprogram_1_qa_3,a_Apolloprogram_1_qa_4]],[a_Apolloprogram_2,[a_Apolloprogram_2_qa_0,a_Apolloprogram_2_qa_1,a_Apolloprogram_2_qa_2,a_Apolloprogram_2_qa_3]],[a_Apolloprogram_3,[a_Apolloprogram_3_qa_0,a_Apolloprogram_3_qa_1,a_Apolloprogram_3_qa_2,a_Apolloprogram_3_qa_3,a_Apolloprogram_3_qa_4]],[a_Apolloprogram_4,[a_Apolloprogram_4_qa_0,a_Apolloprogram_4_qa_1,a_Apolloprogram_4_qa_2,a_Apolloprogram_4_qa_3,a_Apolloprogram_4_qa_4]],[a_Amazonrainforest_2,[a_Amazonrainforest_2_qa_0,a_Amazonrainforest_2_qa_1,a_Amazonrainforest_2_qa_2,a_Amazonrainforest_2_qa_3,a_Amazonrainforest_2_qa_4]],[a_Amazonrainforest_3,[a_Amazonrainforest_3_qa_0,a_Amazonrainforest_3_qa_1,a_Amazonrainforest_3_qa_2,a_Amazonrainforest_3_qa_3,a_Amazonrainforest_3_qa_4]],[a_Amazonrainforest_4,[a_Amazonrainforest_4_qa_0,a_Amazonrainforest_4_qa_1,a_Amazonrainforest_4_qa_2,a_Amazonrainforest_4_qa_3,a_Amazonrainforest_4_qa_4]],[a_Ctenophora_2,[a_Ctenophora_2_qa_0,a_Ctenophora_2_qa_1,a_Ctenophora_2_qa_2,a_Ctenophora_2_qa_3]],[a_FresnoCalifornia_0,[a_FresnoCalifornia_0_qa_0,a_FresnoCalifornia_0_qa_1,a_FresnoCalifornia_0_qa_2,a_FresnoCalifornia_0_qa_3,a_FresnoCalifornia_0_qa_4]],[a_FresnoCalifornia_3,[a_FresnoCalifornia_3_qa_0,a_FresnoCalifornia_3_qa_1,a_FresnoCalifornia_3_qa_2,a_FresnoCalifornia_3_qa_3]],[a_Packetswitching_2,[a_Packetswitching_2_qa_0,a_Packetswitching_2_qa_1,a_Packetswitching_2_qa_2,a_Packetswitching_2_qa_3]],[a_Packetswitching_4,[a_Packetswitching_4_qa_0,a_Packetswitching_4_qa_1,a_Packetswitching_4_qa_2,a_Packetswitching_4_qa_3,a_Packetswitching_4_qa_4]],[a_Geology_2,[a_Geology_2_qa_0,a_Geology_2_qa_1,a_Geology_2_qa_2,a_Geology_2_qa_3,a_Geology_2_qa_4]],[a_Geology_4,[a_Geology_4_qa_0,a_Geology_4_qa_1,a_Geology_4_qa_2,a_Geology_4_qa_3]],[a_VictoriaandAlbertMuseum_2,[a_VictoriaandAlbertMuseum_2_qa_0,a_VictoriaandAlbertMuseum_2_qa_1,a_VictoriaandAlbertMuseum_2_qa_2,a_VictoriaandAlbertMuseum_2_qa_3,a_VictoriaandAlbertMuseum_2_qa_4]],[a_AmericanBroadcastingCompany_0,[a_AmericanBroadcastingCompany_0_qa_0,a_AmericanBroadcastingCompany_0_qa_1,a_AmericanBroadcastingCompany_0_qa_2,a_AmericanBroadcastingCompany_0_qa_3]],[a_AmericanBroadcastingCompany_3,[a_AmericanBroadcastingCompany_3_qa_0,a_AmericanBroadcastingCompany_3_qa_1,a_AmericanBroadcastingCompany_3_qa_2]],[a_GenghisKhan_0,[a_GenghisKhan_0_qa_0,a_GenghisKhan_0_qa_1,a_GenghisKhan_0_qa_2,a_GenghisKhan_0_qa_3,a_GenghisKhan_0_qa_4]],[a_Pharmacy_2,[a_Pharmacy_2_qa_0,a_Pharmacy_2_qa_1,a_Pharmacy_2_qa_2,a_Pharmacy_2_qa_3,a_Pharmacy_2_qa_4]],[a_Construction_0,[a_Construction_0_qa_0,a_Construction_0_qa_1,a_Construction_0_qa_2,a_Construction_0_qa_3,a_Construction_0_qa_4]],[a_Construction_2,[a_Construction_2_qa_0,a_Construction_2_qa_1,a_Construction_2_qa_2,a_Construction_2_qa_3]],[a_Privateschool_0,[a_Privateschool_0_qa_0,a_Privateschool_0_qa_1,a_Privateschool_0_qa_2,a_Privateschool_0_qa_3]],[a_Privateschool_2,[a_Privateschool_2_qa_0,a_Privateschool_2_qa_1,a_Privateschool_2_qa_2,a_Privateschool_2_qa_3,a_Privateschool_2_qa_4]],[a_HarvardUniversity_0,[a_HarvardUniversity_0_qa_0,a_HarvardUniversity_0_qa_1,a_HarvardUniversity_0_qa_2,a_HarvardUniversity_0_qa_3,a_HarvardUniversity_0_qa_4]],[a_HarvardUniversity_1,[a_HarvardUniversity_1_qa_0,a_HarvardUniversity_1_qa_1,a_HarvardUniversity_1_qa_2]],[a_HarvardUniversity_2,[a_HarvardUniversity_2_qa_0,a_HarvardUniversity_2_qa_1,a_HarvardUniversity_2_qa_2]],[a_HarvardUniversity_3,[a_HarvardUniversity_3_qa_0,a_HarvardUniversity_3_qa_1,a_HarvardUniversity_3_qa_2,a_HarvardUniversity_3_qa_3]],[a_JacksonvilleFlorida_0,[a_JacksonvilleFlorida_0_qa_0,a_JacksonvilleFlorida_0_qa_1,a_JacksonvilleFlorida_0_qa_2,a_JacksonvilleFlorida_0_qa_3,a_JacksonvilleFlorida_0_qa_4]],[a_Economicinequality_2,[a_Economicinequality_2_qa_0,a_Economicinequality_2_qa_1,a_Economicinequality_2_qa_2,a_Economicinequality_2_qa_3,a_Economicinequality_2_qa_4]],[a_DoctorWho_3,[a_DoctorWho_3_qa_0,a_DoctorWho_3_qa_1,a_DoctorWho_3_qa_2,a_DoctorWho_3_qa_3,a_DoctorWho_3_qa_4]],[a_DoctorWho_4,[a_DoctorWho_4_qa_0,a_DoctorWho_4_qa_1,a_DoctorWho_4_qa_2,a_DoctorWho_4_qa_3,a_DoctorWho_4_qa_4]],[a_UniversityofChicago_3,[a_UniversityofChicago_3_qa_0,a_UniversityofChicago_3_qa_1,a_UniversityofChicago_3_qa_2,a_UniversityofChicago_3_qa_3,a_UniversityofChicago_3_qa_4]],[a_Yuandynasty_4,[a_Yuandynasty_4_qa_0,a_Yuandynasty_4_qa_1,a_Yuandynasty_4_qa_2,a_Yuandynasty_4_qa_3]],[a_Kenya_0,[a_Kenya_0_qa_0,a_Kenya_0_qa_1,a_Kenya_0_qa_2,a_Kenya_0_qa_3]],[a_Kenya_1,[a_Kenya_1_qa_0,a_Kenya_1_qa_1,a_Kenya_1_qa_2,a_Kenya_1_qa_3,a_Kenya_1_qa_4]],[a_Kenya_2,[a_Kenya_2_qa_0,a_Kenya_2_qa_1,a_Kenya_2_qa_2,a_Kenya_2_qa_3]],[a_Kenya_3,[a_Kenya_3_qa_0,a_Kenya_3_qa_1,a_Kenya_3_qa_2,a_Kenya_3_qa_3]],[a_IntergovernmentalPanelonClimateChange_0,[a_IntergovernmentalPanelonClimateChange_0_qa_0,a_IntergovernmentalPanelonClimateChange_0_qa_1,a_IntergovernmentalPanelonClimateChange_0_qa_2,a_IntergovernmentalPanelonClimateChange_0_qa_3,a_IntergovernmentalPanelonClimateChange_0_qa_4]],[a_IntergovernmentalPanelonClimateChange_2,[a_IntergovernmentalPanelonClimateChange_2_qa_0,a_IntergovernmentalPanelonClimateChange_2_qa_1,a_IntergovernmentalPanelonClimateChange_2_qa_2,a_IntergovernmentalPanelonClimateChange_2_qa_3]],[a_Chloroplast_1,[a_Chloroplast_1_qa_0,a_Chloroplast_1_qa_1,a_Chloroplast_1_qa_2,a_Chloroplast_1_qa_3,a_Chloroplast_1_qa_4]],[a_Chloroplast_2,[a_Chloroplast_2_qa_0,a_Chloroplast_2_qa_1,a_Chloroplast_2_qa_2,a_Chloroplast_2_qa_3,a_Chloroplast_2_qa_4]],[a_Chloroplast_3,[a_Chloroplast_3_qa_0,a_Chloroplast_3_qa_1,a_Chloroplast_3_qa_2,a_Chloroplast_3_qa_3]],[a_Chloroplast_4,[a_Chloroplast_4_qa_0,a_Chloroplast_4_qa_1,a_Chloroplast_4_qa_2]],[a_Rhine_0,[a_Rhine_0_qa_0,a_Rhine_0_qa_1,a_Rhine_0_qa_2,a_Rhine_0_qa_3,a_Rhine_0_qa_4,a_Rhine_0_qa_5,a_Rhine_0_qa_6,a_Rhine_0_qa_7]],[a_Rhine_1,[a_Rhine_1_qa_0,a_Rhine_1_qa_1,a_Rhine_1_qa_2]],[a_Rhine_2,[a_Rhine_2_qa_0,a_Rhine_2_qa_1,a_Rhine_2_qa_2,a_Rhine_2_qa_3,a_Rhine_2_qa_4]],[a_Rhine_3,[a_Rhine_3_qa_0,a_Rhine_3_qa_1,a_Rhine_3_qa_2,a_Rhine_3_qa_3,a_Rhine_3_qa_4]],[a_ScottishParliament_0,[a_ScottishParliament_0_qa_0,a_ScottishParliament_0_qa_1,a_ScottishParliament_0_qa_2,a_ScottishParliament_0_qa_3,a_ScottishParliament_0_qa_4]],[a_ScottishParliament_1,[a_ScottishParliament_1_qa_0,a_ScottishParliament_1_qa_1,a_ScottishParliament_1_qa_2,a_ScottishParliament_1_qa_3,a_ScottishParliament_1_qa_4]],[a_ScottishParliament_2,[a_ScottishParliament_2_qa_0,a_ScottishParliament_2_qa_1,a_ScottishParliament_2_qa_2,a_ScottishParliament_2_qa_3]],[a_Islamism_0,[a_Islamism_0_qa_0,a_Islamism_0_qa_1,a_Islamism_0_qa_2,a_Islamism_0_qa_3,a_Islamism_0_qa_4]],[a_Islamism_1,[a_Islamism_1_qa_0,a_Islamism_1_qa_1,a_Islamism_1_qa_2,a_Islamism_1_qa_3,a_Islamism_1_qa_4]],[a_Islamism_3,[a_Islamism_3_qa_0,a_Islamism_3_qa_1,a_Islamism_3_qa_2,a_Islamism_3_qa_3,a_Islamism_3_qa_4]],[a_Imperialism_0,[a_Imperialism_0_qa_0,a_Imperialism_0_qa_1,a_Imperialism_0_qa_2,a_Imperialism_0_qa_3,a_Imperialism_0_qa_4]],[a_FrenchandIndianWar_0,[a_FrenchandIndianWar_0_qa_0,a_FrenchandIndianWar_0_qa_1,a_FrenchandIndianWar_0_qa_2,a_FrenchandIndianWar_0_qa_3]],[a_FrenchandIndianWar_2,[a_FrenchandIndianWar_2_qa_0,a_FrenchandIndianWar_2_qa_1,a_FrenchandIndianWar_2_qa_2]],[a_Force_3,[a_Force_3_qa_0,a_Force_3_qa_1,a_Force_3_qa_2,a_Force_3_qa_3]],[a_Force_4,[a_Force_4_qa_0,a_Force_4_qa_1,a_Force_4_qa_2,a_Force_4_qa_3]]];
