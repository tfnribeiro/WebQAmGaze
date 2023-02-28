var a_SuperBowl50_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_SuperBowl50_1_qa_5">Broncos</span>, <span id="a_SuperBowl50_1_qa_6">23–16</span> arasındaki bölge turunda <span id="a_SuperBowl50_1_qa_0"><span id="a_SuperBowl50_1_qa_10"><span id="a_SuperBowl50_1_qa_13">Pittsburgh Steelers</span></span></span>'ı, maçın son üç dakikasında <span id="a_SuperBowl50_1_qa_1"><span id="a_SuperBowl50_1_qa_11">11</span></span> sayı alarak mağlup etti. Daha sonra, New England'ın 2 puanlık dönüşüm girişimini saat üzerinde <span id="a_SuperBowl50_1_qa_4"><span id="a_SuperBowl50_1_qa_8"><span id="a_SuperBowl50_1_qa_15">17</span></span> saniye</span> kala bir pası keserek, AFC Şampiyonluk Oyununda Super Bowl'u savunan XLIX şampiyonu <span id="a_SuperBowl50_1_qa_2"><span id="a_SuperBowl50_1_qa_7"><span id="a_SuperBowl50_1_qa_12"><span id="a_SuperBowl50_1_qa_14">New England Patriots</span></span></span></span>'u <span id="a_SuperBowl50_1_qa_3">20–18</span> yendi. <span id="a_SuperBowl50_1_qa_9">Manning</span>''in sezon boyunca topu kapmalarla ilgili sorunlarına rağmen, iki rövanş maçında hiç atmadı.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Broncos'a bölge turunda kim kaybetmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Broncos'a bölge turunda kim kaybetmiştir?`, correct_answer: "Pittsburgh Steelers", trial_name: "a_SuperBowl50_1_qa_0"} 
};var a_SuperBowl50_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Broncos, Pittsburgh karşısında maçın son üç dakikasında kaç puan almıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Broncos, Pittsburgh karşısında maçın son üç dakikasında kaç puan almıştır?`, correct_answer: "11", trial_name: "a_SuperBowl50_1_qa_1"} 
};var a_SuperBowl50_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Super Bowl XLIX'i kim kazanmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Super Bowl XLIX'i kim kazanmıştır?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_2"} 
};var a_SuperBowl50_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">AFC Şampiyonluk Oyunu final skoru neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `AFC Şampiyonluk Oyunu final skoru neydi?`, correct_answer: "20–18", trial_name: "a_SuperBowl50_1_qa_3"} 
};var a_SuperBowl50_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Broncos, AFC Şampiyonası maçını kökünden halleden top kapmayı yaptığı zaman saat üzerinde ne kadar süre kalmıştı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Broncos, AFC Şampiyonası maçını kökünden halleden top kapmayı yaptığı zaman saat üzerinde ne kadar süre kalmıştı?`, correct_answer: "17 saniye", trial_name: "a_SuperBowl50_1_qa_4"} 
};var a_SuperBowl50_1_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Broncos ve Steelers arasındaki bölge turu kazananı hangi takımdı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Broncos ve Steelers arasındaki bölge turu kazananı hangi takımdı?`, correct_answer: "Broncos", trial_name: "a_SuperBowl50_1_qa_5"} 
};var a_SuperBowl50_1_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Broncos ve Steelers arasındaki oyunun son skoru neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Broncos ve Steelers arasındaki oyunun son skoru neydi?`, correct_answer: "23–16", trial_name: "a_SuperBowl50_1_qa_6"} 
};var a_SuperBowl50_1_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Super Bowl XLIX'i kim kazanmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Super Bowl XLIX'i kim kazanmıştır?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_7"} 
};var a_SuperBowl50_1_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Broncos oyunu kazandıran pası kestiği zaman oyunun bitimine kaç saniye kalmıştı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Broncos oyunu kazandıran pası kestiği zaman oyunun bitimine kaç saniye kalmıştı?`, correct_answer: "17", trial_name: "a_SuperBowl50_1_qa_8"} 
};var a_SuperBowl50_1_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Broncos'un rövanş oyunları süresince kim hiç atmamıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Broncos'un rövanş oyunları süresince kim hiç atmamıştır?`, correct_answer: "Manning", trial_name: "a_SuperBowl50_1_qa_9"} 
};var a_SuperBowl50_1_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bölge turunda Broncos'u kim yenmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bölge turunda Broncos'u kim yenmiştir?`, correct_answer: "Pittsburgh Steelers", trial_name: "a_SuperBowl50_1_qa_10"} 
};var a_SuperBowl50_1_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Pittsburg oyununun son üç dakikasında Broncos kaç sayı yapmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Pittsburg oyununun son üç dakikasında Broncos kaç sayı yapmıştır?`, correct_answer: "11", trial_name: "a_SuperBowl50_1_qa_11"} 
};var a_SuperBowl50_1_qa_12 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">AFC Şampiyonluk oyununda Broncos'u kim yenmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `AFC Şampiyonluk oyununda Broncos'u kim yenmiştir?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_12"} 
};var a_SuperBowl50_1_qa_13 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">2015 yılında klasmanlarını kazanmak için Broncos'u kim yenmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `2015 yılında klasmanlarını kazanmak için Broncos'u kim yenmiştir?`, correct_answer: "Pittsburgh Steelers", trial_name: "a_SuperBowl50_1_qa_13"} 
};var a_SuperBowl50_1_qa_14 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">AFC şampiyonu olmak için Broncos'u kim yenmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `AFC şampiyonu olmak için Broncos'u kim yenmiştir?`, correct_answer: "New England Patriots", trial_name: "a_SuperBowl50_1_qa_14"} 
};var a_SuperBowl50_1_qa_15 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Patriots'un 2 puanlık dönüşümleri başarısız olduğunda oyunun bitimine kaç saniye kalmıştı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Patriots'un 2 puanlık dönüşümleri başarısız olduğunda oyunun bitimine kaç saniye kalmıştı?`, correct_answer: "17", trial_name: "a_SuperBowl50_1_qa_15"} 
};var a_SuperBowl50_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_SuperBowl50_2_qa_8"><span id="a_SuperBowl50_2_qa_11"><span id="a_SuperBowl50_2_qa_14">Peyton Manning</span></span></span>,<span id="a_SuperBowl50_2_qa_9"><span id="a_SuperBowl50_2_qa_10">iki</span></span> farklı takımı birden fazla Super Bowls'a gitmesinde önderlik eden ilk kilit oyuncu oldu. Ayrıca, <span id="a_SuperBowl50_2_qa_0"><span id="a_SuperBowl50_2_qa_15">39</span></span> yaşında bir Super Bowl'da oynayan en eski oyun kurucu oldu. Geçmiş rekor, <span id="a_SuperBowl50_2_qa_4"><span id="a_SuperBowl50_2_qa_5">Broncos</span></span>'u <span id="a_SuperBowl50_2_qa_2"><span id="a_SuperBowl50_2_qa_7">38</span></span> yaşında <span id="a_SuperBowl50_2_qa_13">Super Bowl XXXIII</span>'te galibiyete götüren ve şu anda Denver'ın <span id="a_SuperBowl50_2_qa_3">Futbol Operasyonları Başkan Yardımcısı ve Genel Müdür'ü</span> olan <span id="a_SuperBowl50_2_qa_1"><span id="a_SuperBowl50_2_qa_6"><span id="a_SuperBowl50_2_qa_12"><span id="a_SuperBowl50_2_qa_16">John Elway</span></span></span></span>'in ellerindeydi.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Peyton Manning, Super Bowl %0'de oynadığı zaman kaç yaşındaydı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Peyton Manning, Super Bowl %0'de oynadığı zaman kaç yaşındaydı?`, correct_answer: "39", trial_name: "a_SuperBowl50_2_qa_0"} 
};var a_SuperBowl50_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bir Super Bowl'da oynayan en yaşlı kilit oyuncu olma rekorunu daha önce kim elinde bulunduruyordu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bir Super Bowl'da oynayan en yaşlı kilit oyuncu olma rekorunu daha önce kim elinde bulunduruyordu?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_1"} 
};var a_SuperBowl50_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">John Elway, Super Bowl XXXIII'te oynadığında kaç yaşındaydı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `John Elway, Super Bowl XXXIII'te oynadığında kaç yaşındaydı?`, correct_answer: "38", trial_name: "a_SuperBowl50_2_qa_2"} 
};var a_SuperBowl50_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">John Elway'in şu anki Broncos üyeliğindeki rolü nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `John Elway'in şu anki Broncos üyeliğindeki rolü nedir?`, correct_answer: "Futbol Operasyonları Başkan Yardımcısı ve Genel Müdür'ü", trial_name: "a_SuperBowl50_2_qa_3"} 
};var a_SuperBowl50_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">John Elway Super Bowl XXXIII'te kimin için oynamıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `John Elway Super Bowl XXXIII'te kimin için oynamıştır?`, correct_answer: "Broncos", trial_name: "a_SuperBowl50_2_qa_4"} 
};var a_SuperBowl50_2_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Super Bowl XXXIII'ün kazananı hangi takımdı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Super Bowl XXXIII'ün kazananı hangi takımdı?`, correct_answer: "Broncos", trial_name: "a_SuperBowl50_2_qa_5"} 
};var a_SuperBowl50_2_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Broncos'un Genel Müdürü kimdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Broncos'un Genel Müdürü kimdir?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_6"} 
};var a_SuperBowl50_2_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Elway, Super Bowl XXXIII galibiyeti esnasında kaç yaşındadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Elway, Super Bowl XXXIII galibiyeti esnasında kaç yaşındadır?`, correct_answer: "38", trial_name: "a_SuperBowl50_2_qa_7"} 
};var a_SuperBowl50_2_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Herhangi bir Super Bowl oyununda en yaşlı kilit oyuncu rekoruna kim sahiptir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Herhangi bir Super Bowl oyununda en yaşlı kilit oyuncu rekoruna kim sahiptir?`, correct_answer: "Peyton Manning", trial_name: "a_SuperBowl50_2_qa_8"} 
};var a_SuperBowl50_2_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Manning Super Bowl'a ulaşmak için onların takımındayken kaç takımda oynamıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Manning Super Bowl'a ulaşmak için onların takımındayken kaç takımda oynamıştır?`, correct_answer: "iki", trial_name: "a_SuperBowl50_2_qa_9"} 
};var a_SuperBowl50_2_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Peyton Manning Super Bowl'a kaç farklı takımı götürmüştür?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Peyton Manning Super Bowl'a kaç farklı takımı götürmüştür?`, correct_answer: "iki", trial_name: "a_SuperBowl50_2_qa_10"} 
};var a_SuperBowl50_2_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bir Super Bowl'da oynayan en yaşlı kilit oyuncu kimdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bir Super Bowl'da oynayan en yaşlı kilit oyuncu kimdir?`, correct_answer: "Peyton Manning", trial_name: "a_SuperBowl50_2_qa_11"} 
};var a_SuperBowl50_2_qa_12 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Manning'den önce bir Super Bowl'da oynayan en yaşlı kilit oyuncu kimdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Manning'den önce bir Super Bowl'da oynayan en yaşlı kilit oyuncu kimdir?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_12"} 
};var a_SuperBowl50_2_qa_13 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Elway 38 yaşındayken hangi Super Bowl'u kazanmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Elway 38 yaşındayken hangi Super Bowl'u kazanmıştır?`, correct_answer: "Super Bowl XXXIII", trial_name: "a_SuperBowl50_2_qa_13"} 
};var a_SuperBowl50_2_qa_14 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İki takımı birden çok Super Bowl'a götüren ilk kilit oyuncu kimdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İki takımı birden çok Super Bowl'a götüren ilk kilit oyuncu kimdir?`, correct_answer: "Peyton Manning", trial_name: "a_SuperBowl50_2_qa_14"} 
};var a_SuperBowl50_2_qa_15 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Manning Super Bowl 50'de oynadığı zaman kaç yaşındaydı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Manning Super Bowl 50'de oynadığı zaman kaç yaşındaydı?`, correct_answer: "39", trial_name: "a_SuperBowl50_2_qa_15"} 
};var a_SuperBowl50_2_qa_16 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Super Bowl XXXIII'te 38 yaşında olan kilit oyuncunun adı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Super Bowl XXXIII'te 38 yaşında olan kilit oyuncunun adı nedir?`, correct_answer: "John Elway", trial_name: "a_SuperBowl50_2_qa_16"} 
};var a_SuperBowl50_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Akademi Ödülü kazananı <span id="a_SuperBowl50_3_qa_6"><span id="a_SuperBowl50_3_qa_8"><span id="a_SuperBowl50_3_qa_11">Marlee Matlin</span></span></span> <span id="a_SuperBowl50_3_qa_4">Amerikan İşaret Dili</span>(ASL) çevirisini yaparken <span id="a_SuperBowl50_3_qa_0"><span id="a_SuperBowl50_3_qa_10">altı</span></span> kez Grammy kazanan ve <span id="a_SuperBowl50_3_qa_2">Akademi Ödülü</span> adayı <span id="a_SuperBowl50_3_qa_5"><span id="a_SuperBowl50_3_qa_7"><span id="a_SuperBowl50_3_qa_9">Lady Gaga</span></span></span> <span id="a_SuperBowl50_3_qa_1"><span id="a_SuperBowl50_3_qa_3">ulusal marşı</span></span> söylemiştir. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Lady Gaga kaç Grammy kazanmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Lady Gaga kaç Grammy kazanmıştır?`, correct_answer: "altı", trial_name: "a_SuperBowl50_3_qa_0"} 
};var a_SuperBowl50_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Lady Gaga neyi söylemiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Lady Gaga neyi söylemiştir?`, correct_answer: "ulusal marşı", trial_name: "a_SuperBowl50_3_qa_1"} 
};var a_SuperBowl50_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Marlee Matlin hangi ödülü kazanmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Marlee Matlin hangi ödülü kazanmıştır?`, correct_answer: "Akademi Ödülü", trial_name: "a_SuperBowl50_3_qa_2"} 
};var a_SuperBowl50_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Marlee Matlin neyi çevirmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Marlee Matlin neyi çevirmiştir?`, correct_answer: "ulusal marşı", trial_name: "a_SuperBowl50_3_qa_3"} 
};var a_SuperBowl50_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Marlee Matlin ulusal marşın hangi dilde çevirisini yapmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Marlee Matlin ulusal marşın hangi dilde çevirisini yapmıştır?`, correct_answer: "Amerikan İşaret Dili", trial_name: "a_SuperBowl50_3_qa_4"} 
};var a_SuperBowl50_3_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ulusal marşı kim söylemiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ulusal marşı kim söylemiştir?`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_5"} 
};var a_SuperBowl50_3_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi sanatçı oyun için Amerikan İşaret Dili çevirisi yapmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi sanatçı oyun için Amerikan İşaret Dili çevirisi yapmıştır?`, correct_answer: "Marlee Matlin", trial_name: "a_SuperBowl50_3_qa_6"} 
};var a_SuperBowl50_3_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Super Bowl 50'de Ulusal Marş'ı kim yapmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Super Bowl 50'de Ulusal Marş'ı kim yapmıştır?`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_7"} 
};var a_SuperBowl50_3_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Super Bowl 50'de Ulusal Marş için hangi erkek oyuncu görevlendirilmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Super Bowl 50'de Ulusal Marş için hangi erkek oyuncu görevlendirilmiştir?`, correct_answer: "Marlee Matlin", trial_name: "a_SuperBowl50_3_qa_8"} 
};var a_SuperBowl50_3_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Super Bowl 50 Ulusal Marşını kim yapmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Super Bowl 50 Ulusal Marşını kim yapmıştır?`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_9"} 
};var a_SuperBowl50_3_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Metin, Lady Gaga'nın kaç Grammy Ödülü aldığını söylemektedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Metin, Lady Gaga'nın kaç Grammy Ödülü aldığını söylemektedir?`, correct_answer: "altı", trial_name: "a_SuperBowl50_3_qa_10"} 
};var a_SuperBowl50_3_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Super Bowl 50'de Ulusal Marşın dili için kim görevlendirilmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Super Bowl 50'de Ulusal Marşın dili için kim görevlendirilmiştir?`, correct_answer: "Marlee Matlin", trial_name: "a_SuperBowl50_3_qa_11"} 
};var a_Warsaw_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Yakınlarda, <span id="a_Warsaw_0_qa_0">Ogród Saski</span>'de (<span id="a_Warsaw_0_qa_1">Sakson Bahçesi</span>), Yaz Tiyatrosu <span id="a_Warsaw_0_qa_2">1870'ten 1939</span>'a kadar işletiliyordu ve savaşlar arası dönemde tiyatro kompleksi, Varşova'nın ilk edebi kabaresi <span id="a_Warsaw_0_qa_3">Momus</span> ve Leon Schiller'in müzik tiyatrosu Melodram'ı da içeriyordu. <span id="a_Warsaw_0_qa_4">Wojciech Bogusławski Tiyatrosu</span> (1922–26), "Polonya anıtsal tiyatrosunun" en iyi örneğiydi. 1930'ların ortalarından itibaren Büyük Tiyatro binası, oyunculuk departmanı ve sahne yönetmenliği departmanı ile devletin ilk yönettiği dramatik sanat akademisi olan Upati Dramatik Sanatlar Enstitüsü'nü barındırdı.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Sakson Bahçesi Lehçe'de nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Sakson Bahçesi Lehçe'de nedir?`, correct_answer: "Ogród Saski", trial_name: "a_Warsaw_0_qa_0"} 
};var a_Warsaw_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Yaz Tiyatrosu nerede bulunmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Yaz Tiyatrosu nerede bulunmaktadır?`, correct_answer: "Sakson Bahçesi", trial_name: "a_Warsaw_0_qa_1"} 
};var a_Warsaw_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Yaz Tiyatrosu ne kadar süre işletilmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Yaz Tiyatrosu ne kadar süre işletilmiştir?`, correct_answer: "1870'ten 1939", trial_name: "a_Warsaw_0_qa_2"} 
};var a_Warsaw_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Varşova'nın ilk edebi kabaresi nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Varşova'nın ilk edebi kabaresi nedir?`, correct_answer: "Momus", trial_name: "a_Warsaw_0_qa_3"} 
};var a_Warsaw_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">"Polonya anıtsal tiyatrosunun" en iyi örneği nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `"Polonya anıtsal tiyatrosunun" en iyi örneği nedir?`, correct_answer: "Wojciech Bogusławski Tiyatrosu", trial_name: "a_Warsaw_0_qa_4"} 
};var a_Warsaw_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Yerel rakipleri <span id="a_Warsaw_1_qa_0">Polonya Varşova</span>, daha az destekçiye sahip ancak 2000 yılında Ekstraklasa Şampiyonasını kazanmayı başardılar. Ayrıca <span id="a_Warsaw_1_qa_1">1946</span>'da ülke şampiyonluğunu kazandı ve ayrıca kupayı <span id="a_Warsaw_1_qa_2">iki kez</span> kazandı. Polonya'nın sahası <span id="a_Warsaw_1_qa_3">Konwiktorska Caddesi</span>'nde, Eski Kent'e 10 dakikalık yürüme mesafesinde yer almaktadır. Polonya, <span id="a_Warsaw_1_qa_4">feci finansal durumları</span> nedeniyle ülkenin en üst liginden 2013'te çekildi. Şu anda Ulusal - Polonya Futbol Federasyonu (PZPN) yapısındaki en alt profesyonel lig olan 4. ligde (Polonya'da 5. seviye) oynuyorlar.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">2000 yılında Ekstraklasa Şampiyonası'nı kim kazanmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `2000 yılında Ekstraklasa Şampiyonası'nı kim kazanmıştır?`, correct_answer: "Polonya Varşova", trial_name: "a_Warsaw_1_qa_0"} 
};var a_Warsaw_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Polonya Varşova, 2000'den önce ülke şampiyonluğunu ne zaman kazanmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Polonya Varşova, 2000'den önce ülke şampiyonluğunu ne zaman kazanmıştır?`, correct_answer: "1946", trial_name: "a_Warsaw_1_qa_1"} 
};var a_Warsaw_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Polonya kupayı kaç kez kazanmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Polonya kupayı kaç kez kazanmıştır?`, correct_answer: "iki kez", trial_name: "a_Warsaw_1_qa_2"} 
};var a_Warsaw_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Polonya'nın sahası nerede bulunmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Polonya'nın sahası nerede bulunmaktadır?`, correct_answer: "Konwiktorska Caddesi", trial_name: "a_Warsaw_1_qa_3"} 
};var a_Warsaw_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Polonya 2013 yılında ülkenin en üst liginden neden küme düşürülmüştür?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Polonya 2013 yılında ülkenin en üst liginden neden küme düşürülmüştür?`, correct_answer: "feci finansal durumları", trial_name: "a_Warsaw_1_qa_4"} 
};var a_Warsaw_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Varlığı süresince Varşova <span id="a_Warsaw_2_qa_0">çok kültürlü</span> bir şehir olmuştur. 1901 nüfus sayımına göre, <span id="a_Warsaw_2_qa_1">711.988</span> sayıdaki nüfusun <span id="a_Warsaw_2_qa_2">% 56,2</span>'si Katolikler, % 35,7'si Yahudi, % 5'i Yunan Ortodoks Hıristiyanları ve <span id="a_Warsaw_2_qa_3">%2,8</span>'i Protestanlardı. Sekiz yıl sonra 1909 yılında 281.754 Yahudi (% 36,9), 18.189 Protestan (% 2,4) ve 2.818 Mariavite (% 0,4) vardı. Bu, şehrin her yerinde yüzlerce dini ibadet yeri inşa edilmesine yol açtı. <span id="a_Warsaw_2_qa_4">1944</span>'teki Varşova İsyanı sonrasında çoğu tahrip edildi. Savaştan sonra, Polonya'nın yeni komünist otoriteleri kilise inşasını caydırdı ve sadece küçük bir sayıda yeniden inşa edildi.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Varşova, bir şehir olduğundan beri ne tür bir şehir olmuştur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Varşova, bir şehir olduğundan beri ne tür bir şehir olmuştur?`, correct_answer: "çok kültürlü", trial_name: "a_Warsaw_2_qa_0"} 
};var a_Warsaw_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">1901 yılında Varşova'nın nüfusu ne kadardır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1901 yılında Varşova'nın nüfusu ne kadardır?`, correct_answer: "711.988", trial_name: "a_Warsaw_2_qa_1"} 
};var a_Warsaw_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Varşova'nın 1901 yılındaki nüfusunun yüzde kaçı Katoliktir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Varşova'nın 1901 yılındaki nüfusunun yüzde kaçı Katoliktir?`, correct_answer: "% 56,2", trial_name: "a_Warsaw_2_qa_2"} 
};var a_Warsaw_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Varşova'nın 1901 yılındaki nüfusunun yüzde kaçı Protestandır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Varşova'nın 1901 yılındaki nüfusunun yüzde kaçı Protestandır?`, correct_answer: "%2,8", trial_name: "a_Warsaw_2_qa_3"} 
};var a_Warsaw_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Varşova'daki dini ibadet yerlerinin birçoğu ne zaman tahrip edilmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Varşova'daki dini ibadet yerlerinin birçoğu ne zaman tahrip edilmiştir?`, correct_answer: "1944", trial_name: "a_Warsaw_2_qa_4"} 
};var a_Warsaw_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Varşova'nın ilk borsası <span id="a_Warsaw_4_qa_0">1817</span>'de kuruldu ve <span id="a_Warsaw_4_qa_1">II. Dünya Savaşı</span>'na kadar ticaretine devam etti. Savaş sonrası ülkedeki komünist kontrolünün sona ermesinin ve serbest piyasa ekonomisinin yeniden başlatılmasının ardından <span id="a_Warsaw_4_qa_2">1991 Nisan</span> ayında yeniden kuruldu. Bugün Varşova Menkul Kıymetler Borsası (WSE), birçok göstergeye göre <span id="a_Warsaw_4_qa_3">374</span> şirketin listede bulunduğu ve 31 Ağustos 2009 itibariyle 162.584 milyon Avro tutarında toplam işletme sermayesi bulunan bölgedeki en büyük pazardır. Ne gariptir ki 1991'den 2000'e kadar daha önce <span id="a_Warsaw_4_qa_4">Polonya Birleşik İşçi Partisi</span>'nin (PZPR) genel merkezi olarak kullanılan binada bulunuyordu.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Varşova'nın ilk borsası ne zaman kurulmuştur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Varşova'nın ilk borsası ne zaman kurulmuştur?`, correct_answer: "1817", trial_name: "a_Warsaw_4_qa_0"} 
};var a_Warsaw_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Varşova borsasına ne durdurmuştur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Varşova borsasına ne durdurmuştur?`, correct_answer: "II. Dünya Savaşı", trial_name: "a_Warsaw_4_qa_1"} 
};var a_Warsaw_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Varşova borsasının yeniden açılması ne zamandır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Varşova borsasının yeniden açılması ne zamandır?`, correct_answer: "1991 Nisan", trial_name: "a_Warsaw_4_qa_2"} 
};var a_Warsaw_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">2009 Ağustos ayında WSE'de kaç tane şirket listelenmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `2009 Ağustos ayında WSE'de kaç tane şirket listelenmiştir?`, correct_answer: "374", trial_name: "a_Warsaw_4_qa_3"} 
};var a_Warsaw_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">WSE'nin 2000 yılına kadar bulunduğu yer daha önce kimin genel merkeziydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `WSE'nin 2000 yılına kadar bulunduğu yer daha önce kimin genel merkeziydi?`, correct_answer: "Polonya Birleşik İşçi Partisi", trial_name: "a_Warsaw_4_qa_4"} 
};var a_Normans_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">1402 ve 1405 yılları arasında Norman soylusu Jean de Bethencourt ve Poitevine Gadifer de la Salle önderliğindeki sefer, <span id="a_Normans_4_qa_0">Afrika</span>'nın Atlantik kıyılarındaki El Hierro, Fuerteventura ve Lanzarote'nin Kanarya adalarını ele geçirdi. Birlikleri Normandiya, Gascony'de toplandı ve daha sonra Kastilya kolonileri tarafından takviye edildi.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Kanarya Adaları kıyıları hangi kıtadadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kanarya Adaları kıyıları hangi kıtadadır?`, correct_answer: "Afrika", trial_name: "a_Normans_4_qa_0"} 
};var a_NikolaTesla_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_NikolaTesla_1_qa_9">Tesla</span>, Edison'un şirketinden ayrıldıktan sonra, Tesla'nın adına <span id="a_NikolaTesla_1_qa_1"><span id="a_NikolaTesla_1_qa_7">Tesla Elektrik Işığı ve İmalat</span></span> ismiyle bir elektrikli aydınlatma şirketini finanse etmeyi kabul eden <span id="a_NikolaTesla_1_qa_0"><span id="a_NikolaTesla_1_qa_5">Benjamin Vail ve Robert Lane</span></span> isminde iki iş adamıyla <span id="a_NikolaTesla_1_qa_6">1886</span> yılında ortaklık kurdu. Şirket, <span id="a_NikolaTesla_1_qa_2">Tesla tarafından tasarlanan <span id="a_NikolaTesla_1_qa_4">elektrik ark ışık tabanlı aydınlatma sistemlerini</span> kurdu</span> ve ABD'de Tesla'ya verilen ilk <span id="a_NikolaTesla_1_qa_3">patentler</span> olan dinamo elektrikli makine komütatörleri için tasarımlar yaptı.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">1886 yılında kim Tesla ile ortaktı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1886 yılında kim Tesla ile ortaktı?`, correct_answer: "Benjamin Vail ve Robert Lane", trial_name: "a_NikolaTesla_1_qa_0"} 
};var a_NikolaTesla_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Lane ve Vail neyi finanse ettiler?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Lane ve Vail neyi finanse ettiler?`, correct_answer: "Tesla Elektrik Işığı ve İmalat", trial_name: "a_NikolaTesla_1_qa_1"} 
};var a_NikolaTesla_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Tesla Elektrik Işığı ve İmalat ne yapmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Tesla Elektrik Işığı ve İmalat ne yapmıştır?`, correct_answer: "Tesla tarafından tasarlanan elektrik ark ışık tabanlı aydınlatma sistemlerini kurdu", trial_name: "a_NikolaTesla_1_qa_2"} 
};var a_NikolaTesla_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Tesla şirketini başlattığında ilk olarak ne yapmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Tesla şirketini başlattığında ilk olarak ne yapmıştır?`, correct_answer: "patentler", trial_name: "a_NikolaTesla_1_qa_3"} 
};var a_NikolaTesla_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Tesla'nın şirketinde ne üretilmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Tesla'nın şirketinde ne üretilmiştir?`, correct_answer: "elektrik ark ışık tabanlı aydınlatma sistemlerini", trial_name: "a_NikolaTesla_1_qa_4"} 
};var a_NikolaTesla_1_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Tesla'nın yeni ortaklarının isimleri nelerdi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Tesla'nın yeni ortaklarının isimleri nelerdi?`, correct_answer: "Benjamin Vail ve Robert Lane", trial_name: "a_NikolaTesla_1_qa_5"} 
};var a_NikolaTesla_1_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Tesla ile Lane ve Vail arasındaki ortaklık ne zaman vücut bulmuştur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Tesla ile Lane ve Vail arasındaki ortaklık ne zaman vücut bulmuştur?`, correct_answer: "1886", trial_name: "a_NikolaTesla_1_qa_6"} 
};var a_NikolaTesla_1_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İşadamlarının finanse ettiği şirketin adı neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İşadamlarının finanse ettiği şirketin adı neydi?`, correct_answer: "Tesla Elektrik Işığı ve İmalat", trial_name: "a_NikolaTesla_1_qa_7"} 
};var a_NikolaTesla_1_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Tesla Elektrik Işığı ve İmalat ne yapmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Tesla Elektrik Işığı ve İmalat ne yapmıştır?`, correct_answer: "elektrik ark ışık tabanlı aydınlatma sistemlerini kurdu", trial_name: "a_NikolaTesla_1_qa_8"} 
};var a_NikolaTesla_1_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Tesla Elektrik Işığı ve İmalat'ın kurduğu aydınlatma sistemini kim tasarlamıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Tesla Elektrik Işığı ve İmalat'ın kurduğu aydınlatma sistemini kim tasarlamıştır?`, correct_answer: "Tesla", trial_name: "a_NikolaTesla_1_qa_9"} 
};var a_NikolaTesla_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Bu söylentilerden sonraki yıllarda ne Tesla ne de <span id="a_NikolaTesla_3_qa_1">Edison</span> ödülü kazandı (Gerçi Edison 1915 yılında <span id="a_NikolaTesla_3_qa_0">38</span> oydan birini ve Tesla <span id="a_NikolaTesla_3_qa_2">1937</span> yılında 38 oydan birini aldı.)</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">1915 yılında ödül için ne kadar olası oy vardı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1915 yılında ödül için ne kadar olası oy vardı?`, correct_answer: "38", trial_name: "a_NikolaTesla_3_qa_0"} 
};var a_NikolaTesla_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">1915 yılında kim bir oy almıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1915 yılında kim bir oy almıştır?`, correct_answer: "Edison", trial_name: "a_NikolaTesla_3_qa_1"} 
};var a_NikolaTesla_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Tesla hangi yıl Nobel Ödülü için bir oy almıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Tesla hangi yıl Nobel Ödülü için bir oy almıştır?`, correct_answer: "1937", trial_name: "a_NikolaTesla_3_qa_2"} 
};var a_NikolaTesla_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Ancak yaptığı diğer açıklamalardan dolayı dini görüşleri <span id="a_NikolaTesla_4_qa_1">belirsizliğini</span> koruyor. Örneğin, 1937'de yayınlanan <span id="a_NikolaTesla_4_qa_0">"<span id="a_NikolaTesla_4_qa_2">Savaşı</span> Bitirecek Bir Makine"</span> adlı makalesinde Tesla şunları belirtti:</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">1937 yılında hangi makale yayınlanmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1937 yılında hangi makale yayınlanmıştır?`, correct_answer: "Savaşı Bitirecek Bir Makine", trial_name: "a_NikolaTesla_4_qa_0"} 
};var a_NikolaTesla_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Belirli açıklamalarından dolayı dini görüşlerinda inanılan durum neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Belirli açıklamalarından dolayı dini görüşlerinda inanılan durum neydi?`, correct_answer: "belirsizliğini", trial_name: "a_NikolaTesla_4_qa_1"} 
};var a_NikolaTesla_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bu makalenin başlığında makine neyi durdurmayı ummaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bu makalenin başlığında makine neyi durdurmayı ummaktadır?`, correct_answer: "Savaşı", trial_name: "a_NikolaTesla_4_qa_2"} 
};var a_Computationalcomplexitytheory_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Computationalcomplexitytheory_0_qa_0">Hesaplamalı karmaşıklık teorisi</span>, <span id="a_Computationalcomplexitytheory_0_qa_2">hesaplama problemlerini</span> <span id="a_Computationalcomplexitytheory_0_qa_1">kendi zorluklarına</span> göre sınıflandırmaya ve bu sınıfları birbirleriyle ilişkilendirmeye odaklanan teorik bilgisayar bilimlerinde hesaplama teorisinin bir dalıdır. Hesaplamalı bir problemin, bir algoritma gibi matematiksel adımların mekanik uygulamalar tarafından çözülebileceğini saptamaya eşdeğer bir bilgisayar tarafından problemin çözülmeye elverişli bir görev olduğu anlaşılmaktadır.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Teorik bilgisayar biliminin hangi dalı, hesaplama problemlerini zorluklarına ve ilişki sınıflarına göre sınıflandırabilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Teorik bilgisayar biliminin hangi dalı, hesaplama problemlerini zorluklarına ve ilişki sınıflarına göre sınıflandırabilir?`, correct_answer: "Hesaplamalı karmaşıklık teorisi", trial_name: "a_Computationalcomplexitytheory_0_qa_0"} 
};var a_Computationalcomplexitytheory_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hesaplamalı problemler hangi ana niteliklere göre hesaplamalı karmaşıklık teorisi kullanılarak sınıflandırılır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hesaplamalı problemler hangi ana niteliklere göre hesaplamalı karmaşıklık teorisi kullanılarak sınıflandırılır?`, correct_answer: "kendi zorluklarına", trial_name: "a_Computationalcomplexitytheory_0_qa_1"} 
};var a_Computationalcomplexitytheory_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Genellikle bir bilgisayar tarafından çözülmesine katkıda bulunan görevin terimi nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Genellikle bir bilgisayar tarafından çözülmesine katkıda bulunan görevin terimi nedir?`, correct_answer: "hesaplama problemlerini", trial_name: "a_Computationalcomplexitytheory_0_qa_2"} 
};var a_Computationalcomplexitytheory_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Hesaplamalı problemler göz önüne alındığında, bir <span id="a_Computationalcomplexitytheory_1_qa_0">problem örneği</span> bir alfabe üzerindeki bir dizidir. Genellikle, alfabe <span id="a_Computationalcomplexitytheory_1_qa_1">ikili</span> alfabe olarak alınır (yani, {0,1} kümesi) ve böylece diziler <span id="a_Computationalcomplexitytheory_1_qa_2">bit dizisi</span> olur. Gerçek dünyadaki bir bilgisayarda olduğu gibi, bit dizileri dışındaki matematiksel nesnelerin uygun şekilde kodlanması gerekir. Örneğin, tam sayılar <span id="a_Computationalcomplexitytheory_1_qa_3">ikili düzen gösterimiyle</span> gösterilebilir ve grafikler doğrudan <span id="a_Computationalcomplexitytheory_1_qa_4">bitişiklik matrisleriyle</span> veya bitişiklik listelerini ikili olarak kodlayarak kodlanabilir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Hesaplamalı bir problemde, bir alfabe üzerindeki bir dizi olarak ne tanımlanabilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hesaplamalı bir problemde, bir alfabe üzerindeki bir dizi olarak ne tanımlanabilir?`, correct_answer: "problem örneği", trial_name: "a_Computationalcomplexitytheory_1_qa_0"} 
};var a_Computationalcomplexitytheory_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bir problem örneğinde en sık kullanılan alfabenin adı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bir problem örneğinde en sık kullanılan alfabenin adı nedir?`, correct_answer: "ikili", trial_name: "a_Computationalcomplexitytheory_1_qa_1"} 
};var a_Computationalcomplexitytheory_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bir problem örneği dizisi için başka bir terim nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bir problem örneği dizisi için başka bir terim nedir?`, correct_answer: "bit dizisi", trial_name: "a_Computationalcomplexitytheory_1_qa_2"} 
};var a_Computationalcomplexitytheory_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Matematiksel nesnelerin kodlanmasında, tamsayıların sıkça ifade edilme şekli nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Matematiksel nesnelerin kodlanmasında, tamsayıların sıkça ifade edilme şekli nedir?`, correct_answer: "ikili düzen gösterimiyle", trial_name: "a_Computationalcomplexitytheory_1_qa_3"} 
};var a_Computationalcomplexitytheory_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Grafiklerin kodlanabilmesinin tek yolu nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Grafiklerin kodlanabilmesinin tek yolu nedir?`, correct_answer: "bitişiklik matrisleriyle", trial_name: "a_Computationalcomplexitytheory_1_qa_4"} 
};var a_Computationalcomplexitytheory_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Fonksiyon problemleri kavramının <span id="a_Computationalcomplexitytheory_2_qa_0">karar problemleri</span> kavramından daha zengin olduğunu düşünmek caziptir. Ancak, durum gerçekte böyle değildir, çünkü fonksiyon problemleri karar problemi olarak yeniden ortaya çıkabilir. Örneğin, iki tamsayının çarpımı, a x b = c ilişkisini koruyacak şekilde <span id="a_Computationalcomplexitytheory_2_qa_1">üçlü kümesi</span>(a, b, c) olarak ifade edilebilir. Belirli bir üçlünün bu setin bir üyesi olup olmadığına karar vermek, iki sayının çarpılması probleminin çözümüne karşılık gelir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Fonksiyon problemleri tipik olarak nasıl yeniden düzenlenebilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Fonksiyon problemleri tipik olarak nasıl yeniden düzenlenebilir?`, correct_answer: "karar problemleri", trial_name: "a_Computationalcomplexitytheory_2_qa_0"} 
};var a_Computationalcomplexitytheory_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İki tamsayı çarpılırsa ve bir değer çıkarsa, bu ifade kümesi ne olarak adlandırılır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İki tamsayı çarpılırsa ve bir değer çıkarsa, bu ifade kümesi ne olarak adlandırılır?`, correct_answer: "üçlü kümesi", trial_name: "a_Computationalcomplexitytheory_2_qa_1"} 
};var a_Computationalcomplexitytheory_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Bilinen birçok karmaşıklık sınıfının <span id="a_Computationalcomplexitytheory_4_qa_0">eşit olmadığından şüphelenilmektedir</span>, ancak bu kanıtlanmamıştır. Örneğin <span id="a_Computationalcomplexitytheory_4_qa_1">P ⊆ NP ⊆ PP ⊆ PSPACE</span>, ancak P = PSPACE olabilir. P, NP'ye eşit değilse, P de PSPACE'e eşit değildir. <span id="a_Computationalcomplexitytheory_4_qa_2">P ve PSPACE arasında</span> RP, BPP, PP, BQP, MA, PH, vb. gibi bilinen birçok karmaşıklık sınıfı olduğundan, tüm bu karmaşıklık sınıflarını bir sınıfa daraltması mümkündür. <span id="a_Computationalcomplexitytheory_4_qa_3">Bu sınıfların herhangi birinin eşit olmadığını kanıtlamak</span>, karmaşıklık teorisinde önemli bir atılım olacaktır.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Genellikle karmaşıklık sınıflarının değerine atfedilen kanıtlanmamış varsayım nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Genellikle karmaşıklık sınıflarının değerine atfedilen kanıtlanmamış varsayım nedir?`, correct_answer: "eşit olmadığından şüphelenilmektedir", trial_name: "a_Computationalcomplexitytheory_4_qa_0"} 
};var a_Computationalcomplexitytheory_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Karmaşıklık sınıflarının şüpheli eşitsizliğini örneklemek için kullanılabilecek bir ifade nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Karmaşıklık sınıflarının şüpheli eşitsizliğini örneklemek için kullanılabilecek bir ifade nedir?`, correct_answer: "P ⊆ NP ⊆ PP ⊆ PSPACE", trial_name: "a_Computationalcomplexitytheory_4_qa_1"} 
};var a_Computationalcomplexitytheory_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">RP, BPP, PP, BQP, MA ve PH karmaşıklık sınıfları nerede bulunabilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `RP, BPP, PP, BQP, MA ve PH karmaşıklık sınıfları nerede bulunabilir?`, correct_answer: "P ve PSPACE arasında", trial_name: "a_Computationalcomplexitytheory_4_qa_2"} 
};var a_Computationalcomplexitytheory_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Karmaşıklık sınıfları arasındaki ve içindeki hangi kanıtlar, karmaşıklık teorisi için teorik bir havzayı işaret edecektir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Karmaşıklık sınıfları arasındaki ve içindeki hangi kanıtlar, karmaşıklık teorisi için teorik bir havzayı işaret edecektir?`, correct_answer: "Bu sınıfların herhangi birinin eşit olmadığını kanıtlamak", trial_name: "a_Computationalcomplexitytheory_4_qa_3"} 
};var a_Teacher_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">﻿Geçmiş zamanlarda bedensel ceza (<span id="a_Teacher_0_qa_4">fiziksel acıya</span> yol açmak üzere öğrenciye tokat atma veya şaplak atma veya sopayla vurma veya kemerle dövme veya öğrenciyi falakaya yatırma), dünyanın çoğu bölgesinde <span id="a_Teacher_0_qa_0">en yaygın okul disiplini biçimlerinden biriydi</span>. <span id="a_Teacher_0_qa_1">Çoğu Batılı ülke</span> ve bazı diğer ülkeler, artık bedensel cezayı yasaklamış olsa da, şaplak atmanın ABD Anayasası'nı ihlal etmediğini karara bağlayan 1977 tarihli bir <span id="a_Teacher_0_qa_3">ABD Anayasa Mahkemesi</span> kararını takiben bedensel ceza <span id="a_Teacher_0_qa_2">Amerika Birleşik Devletleri'nde</span> yasal olarak kalmıştır.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Bedensel ceza geçmişte ne kadar yaygındı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bedensel ceza geçmişte ne kadar yaygındı?`, correct_answer: "en yaygın okul disiplini biçimlerinden biriydi", trial_name: "a_Teacher_0_qa_0"} 
};var a_Teacher_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bedensel ceza nerede artık uygulanmamaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bedensel ceza nerede artık uygulanmamaktadır?`, correct_answer: "Çoğu Batılı ülke", trial_name: "a_Teacher_0_qa_1"} 
};var a_Teacher_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi Batılı ülkede bedensel cezaya hâlâ izin verilmektedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi Batılı ülkede bedensel cezaya hâlâ izin verilmektedir?`, correct_answer: "Amerika Birleşik Devletleri'nde", trial_name: "a_Teacher_0_qa_2"} 
};var a_Teacher_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi ABD kurumu bedensel cezanın anayasaya uygun olduğunu söylemiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi ABD kurumu bedensel cezanın anayasaya uygun olduğunu söylemiştir?`, correct_answer: "ABD Anayasa Mahkemesi", trial_name: "a_Teacher_0_qa_3"} 
};var a_Teacher_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bedensel ceza bir öğrencide neye neden olur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bedensel ceza bir öğrencide neye neden olur?`, correct_answer: "fiziksel acıya", trial_name: "a_Teacher_0_qa_4"} 
};var a_Teacher_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Galler'deki öğretmenler ATL, NUT veya NASUWT gibi <span id="a_Teacher_1_qa_0"><span id="a_Teacher_1_qa_3">sendikaların</span></span> kayıtlı üyesidir ve son yıllardaki raporlar, öğretmenlerin geçen yıllardan daha genç olmasıyla Galler'deki öğretmenlerin ortalama yaşının <span id="a_Teacher_1_qa_1">düştüğünü</span> ileri sürmektedir. Galler okullarında öğretmenlere yapılan saldırılar <span id="a_Teacher_1_qa_2">2005 ve 2010</span> arasında tüm zamanların en yüksek düzeyine ulaşarak giderek daha fazla <span id="a_Teacher_1_qa_4">endişeye</span> sebep olmaktadır.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Galler'deki öğretmenler hangi gruba kaydolabilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Galler'deki öğretmenler hangi gruba kaydolabilir?`, correct_answer: "sendikaların", trial_name: "a_Teacher_1_qa_0"} 
};var a_Teacher_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Galler'deki öğretmenlerin ortalama yaşında nasıl bir değişiklik olmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Galler'deki öğretmenlerin ortalama yaşında nasıl bir değişiklik olmaktadır?`, correct_answer: "düştüğünü", trial_name: "a_Teacher_1_qa_1"} 
};var a_Teacher_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Öğretmenlere yapılan saldırılar en yüksek seviyeye ne zaman ulaştı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Öğretmenlere yapılan saldırılar en yüksek seviyeye ne zaman ulaştı?`, correct_answer: "2005 ve 2010", trial_name: "a_Teacher_1_qa_2"} 
};var a_Teacher_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">NASUWT nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `NASUWT nedir?`, correct_answer: "sendikaların", trial_name: "a_Teacher_1_qa_3"} 
};var a_Teacher_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Öğretmenlere yapılan saldırılar neye sebep olmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Öğretmenlere yapılan saldırılar neye sebep olmaktadır?`, correct_answer: "endişeye", trial_name: "a_Teacher_1_qa_4"} 
};var a_Teacher_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Hinduizm'de ruhsal öğretmen <span id="a_Teacher_3_qa_0">guru</span> olarak bilinir ve Hinduizmin çoğu geleneğinde, özellikle de <span id="a_Teacher_3_qa_3">Batı'da</span> yaygın olanlarda ruhsal akıl hocalığına yapılan vurgu <span id="a_Teacher_3_qa_1">son derece yüksektir</span> ve gurular sıklıkla <span id="a_Teacher_3_qa_2">talebelerinin</span> yaşamlarında epey kontrole sahiptir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Hinduizm'de ruhsal öğretmenin adı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hinduizm'de ruhsal öğretmenin adı nedir?`, correct_answer: "guru", trial_name: "a_Teacher_3_qa_0"} 
};var a_Teacher_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hinduizm'de ruhasl akıl hocalığına yapılan vurgu çok mudur, az mıdır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hinduizm'de ruhasl akıl hocalığına yapılan vurgu çok mudur, az mıdır?`, correct_answer: "son derece yüksektir", trial_name: "a_Teacher_3_qa_1"} 
};var a_Teacher_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Gurular kimleri kontrol eder?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Gurular kimleri kontrol eder?`, correct_answer: "talebelerinin", trial_name: "a_Teacher_3_qa_2"} 
};var a_Teacher_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi bölgede ruhsal akıl hocalığının son derece yüksek olması yaygındır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi bölgede ruhsal akıl hocalığının son derece yüksek olması yaygındır?`, correct_answer: "Batı'da", trial_name: "a_Teacher_3_qa_3"} 
};var a_Teacher_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Tibet Budizmi'nde Tibet'teki Dharma hocaları en yaygın biçimde <span id="a_Teacher_4_qa_0">Lama</span> olarak adlandırılır. Bodhisattva yeminlerini sürdürmek için <span id="a_Teacher_4_qa_4">Phowa ve siddhi</span> üzerinden bilinçli olarak çoğu zaman <span id="a_Teacher_4_qa_3">birçok kez</span> <span id="a_Teacher_4_qa_1">yeniden doğmaya</span> kararlı olan Lama'ya <span id="a_Teacher_4_qa_2">Tulku</span> adı verilir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Tibet Budizmi'nde öğretmenin adı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Tibet Budizmi'nde öğretmenin adı nedir?`, correct_answer: "Lama", trial_name: "a_Teacher_4_qa_0"} 
};var a_Teacher_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bir Lama ne yapmaya kararlıdır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bir Lama ne yapmaya kararlıdır?`, correct_answer: "yeniden doğmaya", trial_name: "a_Teacher_4_qa_1"} 
};var a_Teacher_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bodhisattva yemininin adı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bodhisattva yemininin adı nedir?`, correct_answer: "Tulku", trial_name: "a_Teacher_4_qa_2"} 
};var a_Teacher_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bir Lama kaç kez yeniden doğmayı kabul etmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bir Lama kaç kez yeniden doğmayı kabul etmiştir?`, correct_answer: "birçok kez", trial_name: "a_Teacher_4_qa_3"} 
};var a_Teacher_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Lama'nın yeniden doğmaya azmetmesine ne yardımcı olmuştur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Lama'nın yeniden doğmaya azmetmesine ne yardımcı olmuştur?`, correct_answer: "Phowa ve siddhi", trial_name: "a_Teacher_4_qa_4"} 
};var a_MartinLuther_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_MartinLuther_2_qa_0">Almanca yayınlara</span> olan talebin artmakta olduğu bir zamanda yayınlanan Luther'in İncil'i, hızlı biçimde popüler ve etkili bir <span id="a_MartinLuther_2_qa_1">İncil</span> çevirisi hâline geldi. Öyle ki, <span id="a_MartinLuther_2_qa_2">Alman dili ve edebiyatının evrimine</span> kaydadeğer bir katkıda bulundu. Luther tarafından yazılan notlar, önsözler ve papalık karşıtı imgeler içeren, <span id="a_MartinLuther_2_qa_3">Lucas Cranach</span> tarafından yapılan gravürlerle bezeli bu İncil, Luther'in doktrininin Almanya genelinde yayılmasında büyük çaplı bir rol oynadı. Luther İncili, Kral James İncili'nin bir öncüsü olan <span id="a_MartinLuther_2_qa_4">William Tyndale</span>'in İngilizce İncil'i (1525'ten itibaren) gibi diğer yerel dildeki çevirileri etkiledi.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Martin Luther'in zamanında revaçta olan neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Martin Luther'in zamanında revaçta olan neydi?`, correct_answer: "Almanca yayınlara", trial_name: "a_MartinLuther_2_qa_0"} 
};var a_MartinLuther_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Luther'in hangi eseri popüler oldu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Luther'in hangi eseri popüler oldu?`, correct_answer: "İncil", trial_name: "a_MartinLuther_2_qa_1"} 
};var a_MartinLuther_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Luther'in çevirisinin popüler olması neye katkıda bulunmuştur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Luther'in çevirisinin popüler olması neye katkıda bulunmuştur?`, correct_answer: "Alman dili ve edebiyatının evrimine", trial_name: "a_MartinLuther_2_qa_2"} 
};var a_MartinLuther_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Luther'in İncili'nin gravürlerini hangi sanatçı sağlamıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Luther'in İncili'nin gravürlerini hangi sanatçı sağlamıştır?`, correct_answer: "Lucas Cranach", trial_name: "a_MartinLuther_2_qa_3"} 
};var a_MartinLuther_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Luther İncili kimin İngilizce İncil çevirisini etkilemiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Luther İncili kimin İngilizce İncil çevirisini etkilemiştir?`, correct_answer: "William Tyndale", trial_name: "a_MartinLuther_2_qa_4"} 
};var a_MartinLuther_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Luther'in <span id="a_MartinLuther_4_qa_0">son cümlesini</span> yazdığı bir kâğıt parçası daha sonra bulunmuştur. Cümle, Almanca olan <span id="a_MartinLuther_4_qa_2">"Biz dilencileriz"</span> parçası dışında <span id="a_MartinLuther_4_qa_1">Latincedir</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Daha sonra Luther tarafından yazıldığı keşfedilen şey nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Daha sonra Luther tarafından yazıldığı keşfedilen şey nedir?`, correct_answer: "son cümlesini", trial_name: "a_MartinLuther_4_qa_0"} 
};var a_MartinLuther_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Cümlenin çoğunluğu hangi dilde yazılmıştır? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Cümlenin çoğunluğu hangi dilde yazılmıştır? `, correct_answer: "Latincedir", trial_name: "a_MartinLuther_4_qa_1"} 
};var a_MartinLuther_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Luther'in son cümlesinin hangi kısmı Almancaydı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Luther'in son cümlesinin hangi kısmı Almancaydı?`, correct_answer: "Biz dilencileriz", trial_name: "a_MartinLuther_4_qa_2"} 
};var a_SouthernCalifornia_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Güney Kaliforniya, Amerika Birleşik Devletleri'ndeki <span id="a_SouthernCalifornia_2_qa_1">yolcu hacmi</span> bakımından en yoğun ikinci (yolcu trafiği bakımından dünyanın en yoğun havalimanlarına bakın) ve uluslararası yolcu hacmi bakımından <span id="a_SouthernCalifornia_2_qa_2">üçüncü</span> havalimanı olan <span id="a_SouthernCalifornia_2_qa_0">Los Angeles Uluslararası Havalimanı</span>'na; dünyadaki en yoğun tek pistli havalimanı olan <span id="a_SouthernCalifornia_2_qa_3">San Diego Uluslararası Havalimanı</span>'na; dünyanın en yoğun genel havacılık havalimanı olan <span id="a_SouthernCalifornia_2_qa_4">Van Nuys Havalimanı</span>'na; Orange County, Bakersfield, Ontario, Burbank ve Long Beach'de büyük çaplı ticari havalimanlarına ve çok sayıda daha küçük ticari ve genel havacılık havalimanına ev sahipliği yapar.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Amerika Birleşik Devletleri'ndeki en yoğun ikinci havalimanı hangi havalimanıdır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Amerika Birleşik Devletleri'ndeki en yoğun ikinci havalimanı hangi havalimanıdır?`, correct_answer: "Los Angeles Uluslararası Havalimanı", trial_name: "a_SouthernCalifornia_2_qa_0"} 
};var a_SouthernCalifornia_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Havalimanlarının ne kadar yoğun olduğunu belirlemekte kullandıkları ölçü nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Havalimanlarının ne kadar yoğun olduğunu belirlemekte kullandıkları ölçü nedir?`, correct_answer: "yolcu hacmi", trial_name: "a_SouthernCalifornia_2_qa_1"} 
};var a_SouthernCalifornia_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Los Angeles Uluslararası Havalimanı uluslararası yolcu hacmi bakımından en yoğun kaçıncı havalimanıdır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Los Angeles Uluslararası Havalimanı uluslararası yolcu hacmi bakımından en yoğun kaçıncı havalimanıdır?`, correct_answer: "üçüncü", trial_name: "a_SouthernCalifornia_2_qa_2"} 
};var a_SouthernCalifornia_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi havalimanı dünyadaki en yoğun tek piste ev sahipliği yapar?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi havalimanı dünyadaki en yoğun tek piste ev sahipliği yapar?`, correct_answer: "San Diego Uluslararası Havalimanı", trial_name: "a_SouthernCalifornia_2_qa_3"} 
};var a_SouthernCalifornia_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Dünyanın en yoğun genel havacılık havalimanı hangi havalimanıdır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Dünyanın en yoğun genel havacılık havalimanı hangi havalimanıdır?`, correct_answer: "Van Nuys Havalimanı", trial_name: "a_SouthernCalifornia_2_qa_4"} 
};var a_SouthernCalifornia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Güney Kaliforniya'daki profesyonel spor takımları arasında <span id="a_SouthernCalifornia_3_qa_0">NFL</span>'den (Los Angeles Rams, San Diego Chargers); <span id="a_SouthernCalifornia_3_qa_1">NBA</span>'den (Los Angeles Lakers, Los Angeles Clippers); <span id="a_SouthernCalifornia_3_qa_2">MLB</span>'den (Los Angeles Dodgers, Los Angeles Angels of Anaheim, San Diego Padres); NHL'den (<span id="a_SouthernCalifornia_3_qa_3">Los Angeles Kings</span>, Anaheim Ducks) ve MLS'ten (<span id="a_SouthernCalifornia_3_qa_4">LA Galaxy</span>) takımlar bulunur.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Los Angeles Rams, hangi türdeki bir spor takımının örneğidir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Los Angeles Rams, hangi türdeki bir spor takımının örneğidir?`, correct_answer: "NFL", trial_name: "a_SouthernCalifornia_3_qa_0"} 
};var a_SouthernCalifornia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Los Angeles Clippers hangi spor dalına ait bir takımdır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Los Angeles Clippers hangi spor dalına ait bir takımdır?`, correct_answer: "NBA", trial_name: "a_SouthernCalifornia_3_qa_1"} 
};var a_SouthernCalifornia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Los Angeles Angels of Anaheim takımı hangi spor dalındandır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Los Angeles Angels of Anaheim takımı hangi spor dalındandır?`, correct_answer: "MLB", trial_name: "a_SouthernCalifornia_3_qa_2"} 
};var a_SouthernCalifornia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Anaheim Ducks dışında Güney Kaliforniya'da yerleşik olan diğer NHL takımı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Anaheim Ducks dışında Güney Kaliforniya'da yerleşik olan diğer NHL takımı nedir?`, correct_answer: "Los Angeles Kings", trial_name: "a_SouthernCalifornia_3_qa_3"} 
};var a_SouthernCalifornia_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Güney Kaliforniya'ya ait olan tek MLS takımı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Güney Kaliforniya'ya ait olan tek MLS takımı nedir?`, correct_answer: "LA Galaxy", trial_name: "a_SouthernCalifornia_3_qa_4"} 
};var a_SouthernCalifornia_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">2005'ten <span id="a_SouthernCalifornia_4_qa_2">2014</span>'e kadar, Los Angeles'ta <span id="a_SouthernCalifornia_4_qa_1">iki</span> Major League Soccer takımı vardı: LA Galaxy ve Chivas USA. Her iki takım da maçlarını <span id="a_SouthernCalifornia_4_qa_3">StubHub Center</span>'da oynardı ve yerel rakiplerdi. Ancak <span id="a_SouthernCalifornia_4_qa_0">Chivas</span>, 2014 MLS sezonunun ardından uzaklaştırıldı ve ikinci bir MLS takımının <span id="a_SouthernCalifornia_4_qa_4">2018</span>'de dönmesi programlandı.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Hangi takım MLS'den uzaklaştırıldı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi takım MLS'den uzaklaştırıldı?`, correct_answer: "Chivas", trial_name: "a_SouthernCalifornia_4_qa_0"} 
};var a_SouthernCalifornia_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Los Angeles'ın önceden kaç takımı vardı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Los Angeles'ın önceden kaç takımı vardı?`, correct_answer: "iki", trial_name: "a_SouthernCalifornia_4_qa_1"} 
};var a_SouthernCalifornia_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi yıl iki futbol takımından birinin uzaklaştırılmasıyla sonuçlandı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi yıl iki futbol takımından birinin uzaklaştırılmasıyla sonuçlandı?`, correct_answer: "2014", trial_name: "a_SouthernCalifornia_4_qa_2"} 
};var a_SouthernCalifornia_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Takımların maçlarını oynadığı stadyumun adı neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Takımların maçlarını oynadığı stadyumun adı neydi?`, correct_answer: "StubHub Center", trial_name: "a_SouthernCalifornia_4_qa_3"} 
};var a_SouthernCalifornia_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Uzaklaştırılan takımın ne zaman dönmesi programlanmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Uzaklaştırılan takımın ne zaman dönmesi programlanmıştır?`, correct_answer: "2018", trial_name: "a_SouthernCalifornia_4_qa_4"} 
};var a_SkyUnitedKingdom_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">BSkyB'nin standart tanımlı yayınları, <span id="a_SkyUnitedKingdom_0_qa_0">DVB uyumlu MPEG-2</span> biçimindeyken Sky Movies ve Sky Box Office kanalları isteğe bağlı olarak son filmler için <span id="a_SkyUnitedKingdom_0_qa_1">Dolby Digital</span> film müzikleri içerir. Ancak bunlara yalnızca bir Sky+ kutusuyla erişilebilir. Sky+ HD içerikleri <span id="a_SkyUnitedKingdom_0_qa_2">MPEG-4</span> kullanılarak yayınlanır ve HD içeriklerin çoğu <span id="a_SkyUnitedKingdom_0_qa_4">DVB-S2</span> standardını kullanır. Etkileşimli hizmetler ve 7 günlük EPG, dönüş yolu için modemler içeren set-üstü kutulara sahip kişiye özel <span id="a_SkyUnitedKingdom_0_qa_3">OpenTV</span> sistemini kullanır. Diğer kanalların arasında Sky News, döngülü video akışları yayınlayarak sözde video isteğe bağlı etkileşimli hizmeti sunar.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">BSkyB'nin standart tanımlı yayınları neyle uyumludur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `BSkyB'nin standart tanımlı yayınları neyle uyumludur?`, correct_answer: "DVB uyumlu MPEG-2", trial_name: "a_SkyUnitedKingdom_0_qa_0"} 
};var a_SkyUnitedKingdom_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Sky Movies ve Sky Box ayrıca hangi isteğe bağlı film müziklerini içerir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Sky Movies ve Sky Box ayrıca hangi isteğe bağlı film müziklerini içerir?`, correct_answer: "Dolby Digital", trial_name: "a_SkyUnitedKingdom_0_qa_1"} 
};var a_SkyUnitedKingdom_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Sky+ HD içerik yayını ne kullanır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Sky+ HD içerik yayını ne kullanır?`, correct_answer: "MPEG-4", trial_name: "a_SkyUnitedKingdom_0_qa_2"} 
};var a_SkyUnitedKingdom_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Sky+HD'nin kullandığı kişiye özel sistem nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Sky+HD'nin kullandığı kişiye özel sistem nedir?`, correct_answer: "OpenTV", trial_name: "a_SkyUnitedKingdom_0_qa_3"} 
};var a_SkyUnitedKingdom_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">HD içeriğin çoğu standart olarak neyi kullanır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `HD içeriğin çoğu standart olarak neyi kullanır?`, correct_answer: "DVB-S2", trial_name: "a_SkyUnitedKingdom_0_qa_4"} 
};var a_SkyUnitedKingdom_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Sky Digital <span id="a_SkyUnitedKingdom_1_qa_0">1998</span>'de ilk kurulduğunda yeni hizmet 19.2Â°E yörünge konumundan yayınlanan analog hizmetin aksine 28.5Â°E yörünge konumunda bulunan <span id="a_SkyUnitedKingdom_1_qa_1">Astra 2A</span> uydusunu kullanıyordu. Bunu sonradan daha fazla Astra uydusu ve yanı sıra <span id="a_SkyUnitedKingdom_1_qa_2">Eutelsat'ın Eurobird 1</span> uydusu (artık 28.5Â°E yörünge konumundaki Eutelsat 33C) takip ederek şirketin yeni, <span id="a_SkyUnitedKingdom_1_qa_3">yüzlerce</span> televizyon ve radyo kanalı taşıma potansiyeline sahip, tamamıyla dijital bir hizmeti faaliyete geçirmesini olanaklı kıldı. Eski konum birçok Avrupa ülkesinden yayıncılarla paylaşılırken <span id="a_SkyUnitedKingdom_1_qa_4">28.5Â°E</span>'da bulunan yeni konum, neredeyse yalnızca Birleşik Krallık'a yayın yapan kanallar için kullanılır oldu.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Sky Digital ne zaman faaliyete geçmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Sky Digital ne zaman faaliyete geçmiştir?`, correct_answer: "1998", trial_name: "a_SkyUnitedKingdom_1_qa_0"} 
};var a_SkyUnitedKingdom_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Sky Digital faaliyete geçirildiğinde hangi uydu kullanılmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Sky Digital faaliyete geçirildiğinde hangi uydu kullanılmıştır?`, correct_answer: "Astra 2A", trial_name: "a_SkyUnitedKingdom_1_qa_1"} 
};var a_SkyUnitedKingdom_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi uydu Sky Digital'ın tamamıyla yeni bir dijital hizmeti faaliyete sokmasını olanaklı kılmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi uydu Sky Digital'ın tamamıyla yeni bir dijital hizmeti faaliyete sokmasını olanaklı kılmıştır?`, correct_answer: "Eutelsat'ın Eurobird 1", trial_name: "a_SkyUnitedKingdom_1_qa_2"} 
};var a_SkyUnitedKingdom_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Yeni dijital hizmet kaç televizyon ve radyo kanalını taşıyabiliyordu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Yeni dijital hizmet kaç televizyon ve radyo kanalını taşıyabiliyordu?`, correct_answer: "yüzlerce", trial_name: "a_SkyUnitedKingdom_1_qa_3"} 
};var a_SkyUnitedKingdom_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Sky'ın kanalları neredeyse Birleşik Krallık'a özel olarak yayınlamasına olanak tanıyan uydunun konumu nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Sky'ın kanalları neredeyse Birleşik Krallık'a özel olarak yayınlamasına olanak tanıyan uydunun konumu nedir?`, correct_answer: "28.5Â°E", trial_name: "a_SkyUnitedKingdom_1_qa_4"} 
};var a_SkyUnitedKingdom_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Her iki kanal sağlayıcısının kanallarının belirli performansa ilişkin hedefleri gerçekleştirmeleri durumunda ek üst sınırlı ödemeleri güvence altına alabilecekleri anlaşmalar, <span id="a_SkyUnitedKingdom_4_qa_0">30 milyon £</span> tutarında sabit yıllık taşıma ücretlerini içerir. Şu anda, yeni anlaşmanın önceden BSkyB tarafından sunulan ek İsteğe Bağlı Video ve Yüksek Tanımlı içeriği kapsayıp kapsamayacağına ilişkin <span id="a_SkyUnitedKingdom_4_qa_1">bir emare</span> bulunmamaktadır. Anlaşmaların bir parçası olarak hem <span id="a_SkyUnitedKingdom_4_qa_3">BSkyB</span> hem de <span id="a_SkyUnitedKingdom_4_qa_2">Virgin Media</span> kendi <span id="a_SkyUnitedKingdom_4_qa_4">temel kanallarınının</span> taşınmasına ilişkin olarak birbirlerine karşı açtıkları Yüksek Mahkeme davalarını sonlandırmayı kabul etti.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Kanallar için yıllık taşıma ücretleri neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kanallar için yıllık taşıma ücretleri neydi?`, correct_answer: "30 milyon £", trial_name: "a_SkyUnitedKingdom_4_qa_0"} 
};var a_SkyUnitedKingdom_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Yeni anlaşma isteğe bağlı video ve Yüksek Tanımlı içeriği içerir mi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Yeni anlaşma isteğe bağlı video ve Yüksek Tanımlı içeriği içerir mi?`, correct_answer: "bir emare", trial_name: "a_SkyUnitedKingdom_4_qa_1"} 
};var a_SkyUnitedKingdom_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi şirket BSkyB ile yüksek mahkeme davalarını sonlandırmayı kabul etmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi şirket BSkyB ile yüksek mahkeme davalarını sonlandırmayı kabul etmiştir?`, correct_answer: "Virgin Media", trial_name: "a_SkyUnitedKingdom_4_qa_2"} 
};var a_SkyUnitedKingdom_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi şirket Virgin Media ile yüksek mahkeme davalarını sonlandırmayı kabul etmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi şirket Virgin Media ile yüksek mahkeme davalarını sonlandırmayı kabul etmiştir?`, correct_answer: "BSkyB", trial_name: "a_SkyUnitedKingdom_4_qa_3"} 
};var a_SkyUnitedKingdom_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Yüksek mahkeme davaları ne hakkında yürütülüyordu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Yüksek mahkeme davaları ne hakkında yürütülüyordu?`, correct_answer: "temel kanallarınının", trial_name: "a_SkyUnitedKingdom_4_qa_4"} 
};var a_VictoriaAustralia_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Victoria, <span id="a_VictoriaAustralia_1_qa_0">1975</span>'te yürürlüğe giren, ancak Parlamento'yu eyaletin sorumluluk alanına giren meselelerde eyaletin yasa yapıcı organı olarak tesis eden, Birleşik Krallık Parlamentosu tarafından <span id="a_VictoriaAustralia_1_qa_4">Victoria Anayasası Kanunu 1855</span> olarak geçirilen <span id="a_VictoriaAustralia_1_qa_1">1855 koloni anayasası</span>'nı temel alan yazılı bir anayasaya sahiptir. Victoria Anayasası, <span id="a_VictoriaAustralia_1_qa_2">Victoria Parlamentosu</span> tarafından değiştirilebilir. Bunun istisnası, hükme dayalı olarak ya her iki parlamentoda mutlak çoğunluk, her iki parlamentoda dörtte üçlük bir çoğunluk veya referandumda Victoria halkının onayını gerektiren belirli <span id="a_VictoriaAustralia_1_qa_3">"değişmez" hükümler</span>dir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Victoria anayasasını ne zaman yürürlüğe sokmuştur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Victoria anayasasını ne zaman yürürlüğe sokmuştur?`, correct_answer: "1975", trial_name: "a_VictoriaAustralia_1_qa_0"} 
};var a_VictoriaAustralia_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Victoria'nın anayasası neye dayanmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Victoria'nın anayasası neye dayanmaktadır?`, correct_answer: "1855 koloni anayasası", trial_name: "a_VictoriaAustralia_1_qa_1"} 
};var a_VictoriaAustralia_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi grup Victoria anayasasını değiştirebilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi grup Victoria anayasasını değiştirebilir?`, correct_answer: "Victoria Parlamentosu", trial_name: "a_VictoriaAustralia_1_qa_2"} 
};var a_VictoriaAustralia_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Anayasada değiştirilmesi özel hususlar gerektiren istisnalar nelerdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Anayasada değiştirilmesi özel hususlar gerektiren istisnalar nelerdir?`, correct_answer: "değişmez hükümler", trial_name: "a_VictoriaAustralia_1_qa_3"} 
};var a_VictoriaAustralia_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Victoria Parlamentosu'nu hangi belge oluşturmuştur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Victoria Parlamentosu'nu hangi belge oluşturmuştur?`, correct_answer: "Victoria Anayasası Kanunu 1855", trial_name: "a_VictoriaAustralia_1_qa_4"} 
};var a_VictoriaAustralia_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Tarihsel olarak Victoria, <span id="a_VictoriaAustralia_2_qa_0">belli başlı araba markaları</span> olan Ford, Toyota ve Holden'in fabrikaları için bir merkez olagelmiştir; ancak Toyota'nın kapatma yılı olarak <span id="a_VictoriaAustralia_2_qa_1">2017</span> yılını belirlediği Şubat 2014'teki açıklamasıyla birlikte 21. yüzyılda üç şirketin tümünün fabrika kapatma ilanları, Avustralya'nın artık küresel araba endüstrisi için artık bir merkez olmayacağı anlamına gelecektir. Holden'ın duyurusu <span id="a_VictoriaAustralia_2_qa_2">Mayıs 2013</span>'te gerçekleşmiş ve bunu Ford'un aynı yılın Aralık ayındaki kararı izlemişti (<span id="a_VictoriaAustralia_2_qa_4">Ford</span>'un Broadmeadows and Geelong'daki Victoria fabrikaları <span id="a_VictoriaAustralia_2_qa_3">Ekim 2016</span>'da kapanacak).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Victoria yakında ne tür bir fabrikayı kaybedecek?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Victoria yakında ne tür bir fabrikayı kaybedecek?`, correct_answer: "belli başlı araba markaları", trial_name: "a_VictoriaAustralia_2_qa_0"} 
};var a_VictoriaAustralia_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Toyota Victoria fabrikasını kapatacağını ne zaman söylemiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Toyota Victoria fabrikasını kapatacağını ne zaman söylemiştir?`, correct_answer: "2017", trial_name: "a_VictoriaAustralia_2_qa_1"} 
};var a_VictoriaAustralia_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Holden Victoria fabrikasını kapatacağını ne zaman duyurmuştur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Holden Victoria fabrikasını kapatacağını ne zaman duyurmuştur?`, correct_answer: "Mayıs 2013", trial_name: "a_VictoriaAustralia_2_qa_2"} 
};var a_VictoriaAustralia_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ford'un fabrikaları ne zaman kapanacak?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ford'un fabrikaları ne zaman kapanacak?`, correct_answer: "Ekim 2016", trial_name: "a_VictoriaAustralia_2_qa_3"} 
};var a_VictoriaAustralia_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Broadmeadows'da hangi marka araba üretilmektedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Broadmeadows'da hangi marka araba üretilmektedir?`, correct_answer: "Ford", trial_name: "a_VictoriaAustralia_2_qa_4"} 
};var a_VictoriaAustralia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Ayrıca bir zamanlar devletin sahibi olduğu sistemin parçaları olan hat üzerinde faaliyet gösteren birçok küçük yük treni operatörü ve çok sayıda turistik demir yolu da bulunmaktadır. Victoria hatları çoğunlukla <span id="a_VictoriaAustralia_3_qa_0">1.600 mm (5 ft 3 in) geniş hatlı demir yolu</span> kullanır. Ancak, eyaletler arası ana hatlar ve bunun yanı sıra eyaletin batısındaki bir dizi iltisak hattı <span id="a_VictoriaAustralia_3_qa_1">1.435 mm (4 ft 8 1â„2 in) standart demir yoluna</span> dönüştürülmüştür. İki turistik demir yolu, <span id="a_VictoriaAustralia_3_qa_3">dağlık bölgelerde</span> inşa edilmiş, önceden devlete ait olan <span id="a_VictoriaAustralia_3_qa_4">beş</span> hattın kalıntıları olan <span id="a_VictoriaAustralia_3_qa_2">760 mm (2 ft 6 in) dar demir yolu</span> üzerinde faaliyet göstermektedir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Victoria demir yolu hatlarının ray açıklığı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Victoria demir yolu hatlarının ray açıklığı nedir?`, correct_answer: "1.600 mm (5 ft 3 in) geniş hatlı demir yolu", trial_name: "a_VictoriaAustralia_3_qa_0"} 
};var a_VictoriaAustralia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Victoria'nın batısında bazı hatlar hangi ray açıklığına değiştirilmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Victoria'nın batısında bazı hatlar hangi ray açıklığına değiştirilmiştir?`, correct_answer: "1.435 mm (4 ft 8 1â„2 in) standart demir yoluna", trial_name: "a_VictoriaAustralia_3_qa_1"} 
};var a_VictoriaAustralia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İki turistik hat hangi demir yolu ray açıklığını kullanmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İki turistik hat hangi demir yolu ray açıklığını kullanmaktadır?`, correct_answer: "760 mm (2 ft 6 in) dar demir yolu", trial_name: "a_VictoriaAustralia_3_qa_2"} 
};var a_VictoriaAustralia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Victoria'da dar ray açıklıklı demir yolları nerede inşa edilmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Victoria'da dar ray açıklıklı demir yolları nerede inşa edilmiştir?`, correct_answer: "dağlık bölgelerde", trial_name: "a_VictoriaAustralia_3_qa_3"} 
};var a_VictoriaAustralia_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kaç adet dar ray açıklıklı demir yolu önceden devlete aitti?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kaç adet dar ray açıklıklı demir yolu önceden devlete aitti?`, correct_answer: "beş", trial_name: "a_VictoriaAustralia_3_qa_4"} 
};var a_Huguenot_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">﻿1620'lerde tekrarlanan dini savaş, yenilgilerinin ardından Fransız Protestanlarının siyasi ve askeri ayrıcalıklarının kaldırılmasına neden oldu. Fransa'daki Protestanlığın yasal olarak tanınmasını tamamen kaldıran ve Fransız Protestanları dönüşmeye zorlayan <span id="a_Huguenot_0_qa_0">Fontainebleau Fermanı’nı</span> (<span id="a_Huguenot_0_qa_1">1685</span>) yayınlayana kadar, zulmünü giderek arttıran <span id="a_Huguenot_0_qa_2">XIV. Louis</span> yönetimine kadar, Nantes Fermanı'nın dini hükümlerini muhafaza ettiler. Neredeyse dörtte üçü sonunda öldürülür veya boyun eğerken, kabaca <span id="a_Huguenot_0_qa_3">500.000</span> Fransız Protestanı 18. yüzyılın başlarında Fransa'dan kaçtı [kaynak belirtilmeli].</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Hangi bildiri Fransa'da protestanlığı ortadan kaldırdı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi bildiri Fransa'da protestanlığı ortadan kaldırdı?`, correct_answer: "Fontainebleau Fermanı’nı", trial_name: "a_Huguenot_0_qa_0"} 
};var a_Huguenot_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bu ferman ne zaman ilan edildi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bu ferman ne zaman ilan edildi?`, correct_answer: "1685", trial_name: "a_Huguenot_0_qa_1"} 
};var a_Huguenot_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bu bildirimi hangi soydan Fransızlar yayımladı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bu bildirimi hangi soydan Fransızlar yayımladı?`, correct_answer: "XIV. Louis", trial_name: "a_Huguenot_0_qa_2"} 
};var a_Huguenot_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">1700'lerde kaç Fransız Protestanı Fransa'dan kaçtı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1700'lerde kaç Fransız Protestanı Fransa'dan kaçtı?`, correct_answer: "500.000", trial_name: "a_Huguenot_0_qa_3"} 
};var a_Steamengine_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Suyu kaynatmak ve buhar sağlamak için gereken ısı, genellikle kapalı bir alanda (<span id="a_Steamengine_0_qa_1">yanma odası</span>, ateşleme odası gibi isimlerle adlandırılan) uygun bir hava beslemesi ile <span id="a_Steamengine_0_qa_0">yanıcı maddelerin yakılması</span> ile elde edilir. Bazı durumlarda, ısı kaynağı bir nükleer reaktör, jeotermal enerji, <span id="a_Steamengine_0_qa_2">güneş</span> enerjisi veya içten yanmalı bir motordan veya endüstriyel işlemden elde edilen atık ısıdır. Model veya oyuncak buhar motorlarında, ısı kaynağı bir <span id="a_Steamengine_0_qa_3">elektrikli</span> ısıtma elemanı olabilir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Buhar motorunda kaynamış su için alışılagelmiş ısı kaynağı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Buhar motorunda kaynamış su için alışılagelmiş ısı kaynağı nedir?`, correct_answer: "yanıcı maddelerin yakılması", trial_name: "a_Steamengine_0_qa_0"} 
};var a_Steamengine_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Yanma odasının dışında, yanıcı maddelerin motorda yakıldığı alanın diğer adı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Yanma odasının dışında, yanıcı maddelerin motorda yakıldığı alanın diğer adı nedir?`, correct_answer: "yanma odası", trial_name: "a_Steamengine_0_qa_1"} 
};var a_Steamengine_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Nükleer, jeotermal ve içten yanmalı motor atık ısısı ile birlikte, bir buhar motoru için nasıl bir enerji kaynağı ısı sağlayabilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Nükleer, jeotermal ve içten yanmalı motor atık ısısı ile birlikte, bir buhar motoru için nasıl bir enerji kaynağı ısı sağlayabilir?`, correct_answer: "güneş", trial_name: "a_Steamengine_0_qa_2"} 
};var a_Steamengine_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Oyuncak buhar motorlarında hangi tip ısıtma elemanı kullanılır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Oyuncak buhar motorlarında hangi tip ısıtma elemanı kullanılır?`, correct_answer: "elektrikli", trial_name: "a_Steamengine_0_qa_3"} 
};var a_Steamengine_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Pistonlu buhar motorunun artık yaygın ticari kullanımda olmamasına rağmen, çeşitli şirketler motorun potansiyelini içten yanmalı motorlara bir alternatif olarak araştırmakta veya kullanmaktadır. <span id="a_Steamengine_3_qa_1">İsveç'teki</span> <span id="a_Steamengine_3_qa_0">Energiprojekt AB</span> şirketi, buharın gücünden yararlanmak için modern malzemelerin kullanılmasında ilerleme kaydetmiştir. Energiprojekt'in buhar motorunun verimliliği, yüksek basınçlı motorlarda <span id="a_Steamengine_3_qa_4">%27-30'a</span> ulaşmaktadır. Kızgın buharlı tek adımlı, <span id="a_Steamengine_3_qa_2">5</span> silindirli bir motordur (kademesiz) ve yaklaşık KWh başına 4 kg (<span id="a_Steamengine_3_qa_3">8,8</span> lb) buhar tüketmektedir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Hangi modern şirket özellikle modern malzemeler kullanarak bir buhar motoru üzerinde çalışıyordu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi modern şirket özellikle modern malzemeler kullanarak bir buhar motoru üzerinde çalışıyordu?`, correct_answer: "Energiprojekt AB", trial_name: "a_Steamengine_3_qa_0"} 
};var a_Steamengine_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Energiprojekt AB nerededir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Energiprojekt AB nerededir?`, correct_answer: "İsveç'teki", trial_name: "a_Steamengine_3_qa_1"} 
};var a_Steamengine_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Energiprojekt AB motorunda kaç silindir vardır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Energiprojekt AB motorunda kaç silindir vardır?`, correct_answer: "5", trial_name: "a_Steamengine_3_qa_2"} 
};var a_Steamengine_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Energiprojekt AB'nin motoru kilowatt saatte kaç pound buhar kullanır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Energiprojekt AB'nin motoru kilowatt saatte kaç pound buhar kullanır?`, correct_answer: "8,8", trial_name: "a_Steamengine_3_qa_3"} 
};var a_Steamengine_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Energiprojekt AB motorunun eriştiği yüksek basınçlı motor verimi yüzde kaçtır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Energiprojekt AB motorunun eriştiği yüksek basınçlı motor verimi yüzde kaçtır?`, correct_answer: "%27-30'a", trial_name: "a_Steamengine_3_qa_4"} 
};var a_Oxygen_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Oxygen_1_qa_1">1891'de</span> İskoç kimyager <span id="a_Oxygen_1_qa_0">James Dewar</span> çalışmak için yeterince sıvı oksijen üretmeyi başardı. Sıvı oksijen üretmek için ticari olarak uygulanabilir ilk süreç, <span id="a_Oxygen_1_qa_2">1895</span> yılında Alman mühendis Carl von Linde ve İngiliz mühendis William Hampson tarafından bağımsız olarak geliştirildi. Her iki adam da havanın ısısını sıvılaşana kadar düşürdü ve ardından bileşen gazların her seferde birini kaynatıp yakalayarak damıttı. Daha sonra, 1901'de, ilk kez asetilen ve sıkıştırılmış O
2 karışımının yakılmasıyla <span id="a_Oxygen_1_qa_3">oksiasetilen kaynağı</span> bulundu. Bu kaynak ve metal kesme yöntemi daha sonra yaygın hale geldi.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Hangi kimyager çalışma amacıyla kullanmak için yeterince sıvı oksijen üretmeyi başardı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi kimyager çalışma amacıyla kullanmak için yeterince sıvı oksijen üretmeyi başardı?`, correct_answer: "James Dewar", trial_name: "a_Oxygen_1_qa_0"} 
};var a_Oxygen_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Dewar hangi yılda sıvı oksijen üzerinde deney yaptı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Dewar hangi yılda sıvı oksijen üzerinde deney yaptı?`, correct_answer: "1891'de", trial_name: "a_Oxygen_1_qa_1"} 
};var a_Oxygen_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ticari kullanım için ne zaman sıvı oksijen geliştirildi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ticari kullanım için ne zaman sıvı oksijen geliştirildi?`, correct_answer: "1895", trial_name: "a_Oxygen_1_qa_2"} 
};var a_Oxygen_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">1901'de hangi kaynak işlemi bulundu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1901'de hangi kaynak işlemi bulundu?`, correct_answer: "oksiasetilen kaynağı", trial_name: "a_Oxygen_1_qa_3"} 
};var a_Oxygen_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Oksijen, <span id="a_Oxygen_3_qa_0">687 ve 760nm</span> dalga boylarında zirveye çıkan iki spektrofotometrik soğurum kuşağı sunar. Bazı <span id="a_Oxygen_3_qa_4">uzaktan</span> algılamacı bilim adamları, bitki örtüsü tepe çatılarından gelen ışığın bu kuşaklarının ölçümünü <span id="a_Oxygen_3_qa_2">bir uydu platformundan</span> yaparak bitki sağlığı durumunu tanımlamak için kullanmayı teklif ettiler. Bu yaklaşım, bu kuşaklarda, bitki örtüsünün yansımasını, çok daha zayıf olan ışınımından ayırt etmenin mümkün olduğu gerçeğini kullanır. Düşük sinyal-gürültü oranı ve bitki örtüsünün fiziksel yapısı nedeniyle ölçüm teknik olarak zordur; ancak <span id="a_Oxygen_3_qa_3">küresel</span> ölçekte uydulardan <span id="a_Oxygen_3_qa_1">karbon döngüsünü</span> izlemek için olası bir yöntem olarak önerilmiştir.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Oxygen_3_qa_0','#a_Oxygen_3_qa_1','#a_Oxygen_3_qa_2','#a_Oxygen_3_qa_3','#a_Oxygen_3_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Oxygen_3_1280_720.png';
a.click();});}},data: { trial_name: "a_Oxygen_3"}
};
var a_Oxygen_3_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Spektrofotometrik kuşlaklar hangi dalga boyunda zirve yapar?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Spektrofotometrik kuşlaklar hangi dalga boyunda zirve yapar?`, correct_answer: "687 ve 760nm", trial_name: "a_Oxygen_3_qa_0"} 
};var a_Oxygen_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bitki örtüsünden kaynaklanan ışınımı ölçmek hangi olayları izlemek için bilgi sağlar?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bitki örtüsünden kaynaklanan ışınımı ölçmek hangi olayları izlemek için bilgi sağlar?`, correct_answer: "karbon döngüsünü", trial_name: "a_Oxygen_3_qa_1"} 
};var a_Oxygen_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bilim adamları, bitki örtüsü ışınımını nereden ölçmek ister?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bilim adamları, bitki örtüsü ışınımını nereden ölçmek ister?`, correct_answer: "bir uydu platformundan", trial_name: "a_Oxygen_3_qa_2"} 
};var a_Oxygen_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bilim adamları, bitki örtüsü ölçümlerini hangi ölçekte gösterir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bilim adamları, bitki örtüsü ölçümlerini hangi ölçekte gösterir?`, correct_answer: "küresel", trial_name: "a_Oxygen_3_qa_3"} 
};var a_Oxygen_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bilim adamları, küresel ışınımı ölçmek için nasıl bir algılama biçimi kullanır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bilim adamları, küresel ışınımı ölçmek için nasıl bir algılama biçimi kullanır?`, correct_answer: "uzaktan", trial_name: "a_Oxygen_3_qa_4"} 
};var a_1973oilcrisis_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_1973oilcrisis_1_qa_0">Ambargo</span>, ABD enerji güvenliği üzerindeki tehditleri ele almak için acil taleplere neden olarak ABD ekonomisini olumsuz etkilemiştir. Uluslararası düzeyde, fiyat artışları <span id="a_1973oilcrisis_1_qa_1">otomobil</span> gibi birçok sektörde rekabetçi konumları değiştirdi. <span id="a_1973oilcrisis_1_qa_2">Makroekonomik</span> problemler hem enflasyonist hem de deflasyonist etkilerden oluştu. Ambargo petrol şirketlerini, <span id="a_1973oilcrisis_1_qa_3">Kuzey Kutbu</span> gibi engebeli arazilerde bile, petrol kaynaklarını artırmak için yeni yollar aramak zorunda bıraktı. Önemli derecede üretime başlamak için petrol bulmak ve yeni alanları geliştirmek <span id="a_1973oilcrisis_1_qa_4">beş ila on</span> yıl sürmekteydi. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Neyin ABD ekonomisi üzerinde olumsuz etkisi olmuştur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Neyin ABD ekonomisi üzerinde olumsuz etkisi olmuştur?`, correct_answer: "Ambargo", trial_name: "a_1973oilcrisis_1_qa_0"} 
};var a_1973oilcrisis_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Uluslararası düzeyde, hangi endüstrinin rekabetçi konumları etkilenmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Uluslararası düzeyde, hangi endüstrinin rekabetçi konumları etkilenmiştir?`, correct_answer: "otomobil", trial_name: "a_1973oilcrisis_1_qa_1"} 
};var a_1973oilcrisis_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi sorun hem enflasyonist hem de deflasyonist etkilerden oluşmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi sorun hem enflasyonist hem de deflasyonist etkilerden oluşmaktadır?`, correct_answer: "Makroekonomik", trial_name: "a_1973oilcrisis_1_qa_2"} 
};var a_1973oilcrisis_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Petrol krizi, petrol şirketlerinin hangi bölgede petrol arzını artırmasına neden oldu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Petrol krizi, petrol şirketlerinin hangi bölgede petrol arzını artırmasına neden oldu?`, correct_answer: "Kuzey Kutbu", trial_name: "a_1973oilcrisis_1_qa_3"} 
};var a_1973oilcrisis_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Yeni alanların önemli miktarda petrol üretimine sahip olması ne kadar sürer?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Yeni alanların önemli miktarda petrol üretimine sahip olması ne kadar sürer?`, correct_answer: "beş ila on", trial_name: "a_1973oilcrisis_1_qa_4"} 
};var a_1973oilcrisis_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_1973oilcrisis_2_qa_1">1973</span> yılında Nixon, <span id="a_1973oilcrisis_2_qa_2">ambargoya verilen yanıtı koordine etmek için</span> oluşturulan kısa vadeli bir organizasyon olan Federal Enerji Ofisinin ilk Yöneticisi olarak <span id="a_1973oilcrisis_2_qa_0">William E. Simon'ı</span> seçti. Simon, 1974 yılında her bir eyalete 1972'de tükettikleri kadar yerel petrol tahsis etti, bu nüfusu artmayan eyaletler için işe yaradı. Diğer eyaletlerde, benzin istasyonlarında kuyruklar yaygındı. Amerikan Otomobil Birliği, 1974 yılının Şubat ayının son haftasında, Amerikan benzin istasyonlarının <span id="a_1973oilcrisis_2_qa_3">%20'sinde</span> yakıt olmadığını bildirdi.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Federal Enerji Ofisinin ilk yöneticisi kimdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Federal Enerji Ofisinin ilk yöneticisi kimdir?`, correct_answer: "William E. Simon'ı", trial_name: "a_1973oilcrisis_2_qa_0"} 
};var a_1973oilcrisis_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Nixon tarafından ne zaman seçildi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Nixon tarafından ne zaman seçildi?`, correct_answer: "1973", trial_name: "a_1973oilcrisis_2_qa_1"} 
};var a_1973oilcrisis_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bu kısa süreli organizasyon neden oluşturuldu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bu kısa süreli organizasyon neden oluşturuldu?`, correct_answer: "ambargoya verilen yanıtı koordine etmek için", trial_name: "a_1973oilcrisis_2_qa_2"} 
};var a_1973oilcrisis_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">AAA'ya göre, yakıtı tükenen benzin istasyonlarının yüzdesi nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `AAA'ya göre, yakıtı tükenen benzin istasyonlarının yüzdesi nedir?`, correct_answer: "%20'sinde", trial_name: "a_1973oilcrisis_2_qa_3"} 
};var a_1973oilcrisis_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_1973oilcrisis_3_qa_0">Enerji krizi</span>, yenilenebilir enerji, nükleer enerji ve yerel fosil yakıtlara daha fazla ilgi duyulmasına neden oldu. Krizden bu yana Amerikan enerji politikalarına kriz-zihniyeti düşüncesinin egemen olduğuna, pahalı hızlı düzeltmelerin ve <span id="a_1973oilcrisis_3_qa_1">piyasa ve teknoloji gerçekliklerini</span> görmezden gelen tek seferlik çözümlerin teşvik edildiğine dair eleştiriler bulunmakta. Girişimcilik ve inovasyon için çok fazla alan bırakırken, temel araştırmaları destekleyen istikrarlı kurallar sunmak yerine, <span id="a_1973oilcrisis_3_qa_2">kongreler ve başkanlar</span> tekrar tekrar siyasi olarak uygun, ancak başarı şansları şüpheli olan çözümler vaat eden politikaları desteklediler.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Yenilenebilir kaynaklara büyük ilgi gösterilmesini sağlayan katalizör neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Yenilenebilir kaynaklara büyük ilgi gösterilmesini sağlayan katalizör neydi?`, correct_answer: "Enerji krizi", trial_name: "a_1973oilcrisis_3_qa_0"} 
};var a_1973oilcrisis_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Enerji politikalarının, pahalı hızlı düzeltmeler yaparak hangi gerçekleri görmezden geldiğine dair eleştiriler yapılıyordu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Enerji politikalarının, pahalı hızlı düzeltmeler yaparak hangi gerçekleri görmezden geldiğine dair eleştiriler yapılıyordu?`, correct_answer: "piyasa ve teknoloji gerçekliklerini", trial_name: "a_1973oilcrisis_3_qa_1"} 
};var a_1973oilcrisis_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kulağa iyi gelen ancak başarı şansları zayıf olan politikaları kimler destekledi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kulağa iyi gelen ancak başarı şansları zayıf olan politikaları kimler destekledi?`, correct_answer: "kongreler ve başkanlar", trial_name: "a_1973oilcrisis_3_qa_2"} 
};var a_Apolloprogram_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Apolloprogram_1_qa_0">İnsansız</span> bir AS-206 LM test uçuşundan sonra, bir ekip, ilk Blok II CSM’i ve LM'yi AS-207/208 veya AS-278 olarak bilinen ikili bir görevde uçuracaktı (her uzay aracı ayrı bir Saturn IB'den fırlatılacaktı). Block II ekip pozisyonları Komutan (CDR) Komuta Modülü Pilotu (CMP) ve <span id="a_Apolloprogram_1_qa_4">Ay Modülü Pilotu</span> (LMP) olarak adlandırıldı. Astronotlar, aydaki araç dışı aktiviteye (EVA) uyum sağlamak için tasarlanmış <span id="a_Apolloprogram_1_qa_1">yeni bir Apollo uzay giysisi</span> giymeye başlayacaktı. Geleneksel <span id="a_Apolloprogram_1_qa_2">vizör kask</span>, daha fazla görünürlük için sayfam bir "fanus" tipiyle değiştirildi ve ay yüzeyi EVA elbisesi <span id="a_Apolloprogram_1_qa_3">su soğutmalı iç çamaşırı</span> içerecekti.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">AS-206'nın test uçuşunda kaç kişi vardı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `AS-206'nın test uçuşunda kaç kişi vardı?`, correct_answer: "İnsansız", trial_name: "a_Apolloprogram_1_qa_0"} 
};var a_Apolloprogram_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">AS-278 ikili görevinde astronotlar ne giyiyordu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `AS-278 ikili görevinde astronotlar ne giyiyordu?`, correct_answer: "yeni bir Apollo uzay giysisi", trial_name: "a_Apolloprogram_1_qa_1"} 
};var a_Apolloprogram_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Saydam "fanus" kaskından önce uzay giysisinde ne bulunuyordu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Saydam "fanus" kaskından önce uzay giysisinde ne bulunuyordu?`, correct_answer: "vizör kask", trial_name: "a_Apolloprogram_1_qa_2"} 
};var a_Apolloprogram_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Eğer varsa, Apollo uzay giysisine ne tür bir iç çamaşırı dahil edildi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Eğer varsa, Apollo uzay giysisine ne tür bir iç çamaşırı dahil edildi?`, correct_answer: "su soğutmalı iç çamaşırı", trial_name: "a_Apolloprogram_1_qa_3"} 
};var a_Apolloprogram_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">LMP kısaltması, Blok II'nin fırlatma pozisyonları ile ilgili neyi temsil ediyordu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `LMP kısaltması, Blok II'nin fırlatma pozisyonları ile ilgili neyi temsil ediyordu?`, correct_answer: "Ay Modülü Pilotu", trial_name: "a_Apolloprogram_1_qa_4"} 
};var a_Apolloprogram_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Apolloprogram_2_qa_1">Grissom, White ve Chaffee</span> uçuşlarını, ilk insanlı uçuşta motivasyonel bir odak noktası olması için Apollo 1 olarak adlandırmaya karar verdiler. <span id="a_Apolloprogram_2_qa_3">Kuzey Amerika</span> ve Kennedy Uzay Merkezi'ndeki <span id="a_Apolloprogram_2_qa_0">irtifa odalarında</span> eğitim aldılar ve uzay araçlarının testlerini yaptılar. Ocak ayı için LC-34'te <span id="a_Apolloprogram_2_qa_2">fırlatma geri sayımını</span> simüle edecek ve uzay aracının rampa gücüncen dahili güce geçeceği bir “plugs-out” testi planlandı. Başarılı olursa, bunu, hem uzay aracı hem de fırlatma aracı yakıtlı iken, 21 Şubat fırlatmasına daha yakın tarihte daha sıkı bir geri sayım simülasyon testi izleyecekti.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Apollo 1'in ekibi, Kennedy Uzay Merkezi'nde testlerini nerede yaptı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Apollo 1'in ekibi, Kennedy Uzay Merkezi'nde testlerini nerede yaptı?`, correct_answer: "irtifa odalarında", trial_name: "a_Apolloprogram_2_qa_0"} 
};var a_Apolloprogram_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Apollo 1’e adını kendileri veren ana ekip kimlerden oluşuyordu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Apollo 1’e adını kendileri veren ana ekip kimlerden oluşuyordu?`, correct_answer: "Grissom, White ve Chaffee", trial_name: "a_Apolloprogram_2_qa_1"} 
};var a_Apolloprogram_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">LC-34'te yapılacak plugs-out testi neyi simüle edecekti?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `LC-34'te yapılacak plugs-out testi neyi simüle edecekti?`, correct_answer: "fırlatma geri sayımını", trial_name: "a_Apolloprogram_2_qa_2"} 
};var a_Apolloprogram_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Apollo 1, Kennedy Uzay Merkezi dışında başka hangi yerde test edildi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Apollo 1, Kennedy Uzay Merkezi dışında başka hangi yerde test edildi?`, correct_answer: "Kuzey Amerika", trial_name: "a_Apolloprogram_2_qa_3"} 
};var a_Apolloprogram_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Plugs-out testi <span id="a_Apolloprogram_3_qa_1">27 Ocak 1967</span> sabahı başladı ve derhal sorunlarla karşı karşıya kalındı. İlk önce mürettebat <span id="a_Apolloprogram_3_qa_0">uzay giysilerinde garip bir koku</span> fark etti ve bu da geçitin kapatılmasını geciktirdi. Ardından, iletişim sorunları astronotlara engel oldu ve simüle edilen geri sayımı beklemeye zorladı. Bu bekletme sırasında, kabinde <span id="a_Apolloprogram_3_qa_2">elektrik yangını</span> başladı ve yüksek basınçlı <span id="a_Apolloprogram_3_qa_4">%100 oksijen</span> ortamında hızla yayıldı. Yangından kaynaklanan basınç kabini patlatacak kadar yükseldi ve yangın rampa alanına püskürerek mürettebatı kurtarma çalışmalarını boşa çıkardı. Kapak açılana kadar astronotlar <span id="a_Apolloprogram_3_qa_3">oksijensiz kalarak</span> boğuldu.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Plugs-out testi sırasında astronotların karşılaştığı ilk problem neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Plugs-out testi sırasında astronotların karşılaştığı ilk problem neydi?`, correct_answer: "uzay giysilerinde garip bir koku", trial_name: "a_Apolloprogram_3_qa_0"} 
};var a_Apolloprogram_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İlk plugs-out testi ne zaman gerçekleşti?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İlk plugs-out testi ne zaman gerçekleşti?`, correct_answer: "27 Ocak 1967", trial_name: "a_Apolloprogram_3_qa_1"} 
};var a_Apolloprogram_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Plugs-out testinde uzay giysisi kokusu nedeniyle gerçekleşen gecikme sırasında ne oldu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Plugs-out testinde uzay giysisi kokusu nedeniyle gerçekleşen gecikme sırasında ne oldu?`, correct_answer: "elektrik yangını", trial_name: "a_Apolloprogram_3_qa_2"} 
};var a_Apolloprogram_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Plugs-out testi sırasında gemideki mürettebata ne oldu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Plugs-out testi sırasında gemideki mürettebata ne oldu?`, correct_answer: "oksijensiz kalarak", trial_name: "a_Apolloprogram_3_qa_3"} 
};var a_Apolloprogram_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ne tür bir ortam kabin içindeki yangını körüklemeye yardımcı oldu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ne tür bir ortam kabin içindeki yangını körüklemeye yardımcı oldu?`, correct_answer: "%100 oksijen", trial_name: "a_Apolloprogram_3_qa_4"} 
};var a_Apolloprogram_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">230.000$ bütçeyle, Apollo 11'den kalan orijinal ay yayın verileri, <span id="a_Apolloprogram_4_qa_0">Nafzgerand</span> tarafından derlendi ve restorasyon için <span id="a_Apolloprogram_4_qa_3">Lowry Digital</span> görevlendirildi. Video, <span id="a_Apolloprogram_4_qa_1">tarihi meşruiyeti bozmadan</span>, rastgele gürültüyü ve kamera sarsıntısını gidermek için işlendi. Görüntüler Avustralya'daki kasetler, CBS News arşivi ve Johnson Space Center'da yapılan <span id="a_Apolloprogram_4_qa_2">kinescope kayıtlarını</span> içeriyordu. Restore edilen video, <span id="a_Apolloprogram_4_qa_4">siyah beyaz olarak kalmış</span>, muhafazakar dijital geliştirmeler içermekte ve ses kalitesi iyileştirmeleri içermemektedir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Kalan orijinal Apollo 11 iniş verilerini kim derledi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kalan orijinal Apollo 11 iniş verilerini kim derledi?`, correct_answer: "Nafzgerand", trial_name: "a_Apolloprogram_4_qa_0"} 
};var a_Apolloprogram_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kasetler, tarihsel meşruiyete zarar vermeden restore edilip işlenebildi mi ya da kasetlerin bazı yönleri meşruiyetini yitirdi mi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kasetler, tarihsel meşruiyete zarar vermeden restore edilip işlenebildi mi ya da kasetlerin bazı yönleri meşruiyetini yitirdi mi?`, correct_answer: "tarihi meşruiyeti bozmadan", trial_name: "a_Apolloprogram_4_qa_1"} 
};var a_Apolloprogram_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Orijinal kasetleri geri yüklemek için Johnson Space Center'daki ne tür kayıtlar kullanılmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Orijinal kasetleri geri yüklemek için Johnson Space Center'daki ne tür kayıtlar kullanılmıştır?`, correct_answer: "kinescope kayıtlarını", trial_name: "a_Apolloprogram_4_qa_2"} 
};var a_Apolloprogram_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Orijinal kasetleri geri yüklemek için hangi şirket görev aldı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Orijinal kasetleri geri yüklemek için hangi şirket görev aldı?`, correct_answer: "Lowry Digital", trial_name: "a_Apolloprogram_4_qa_3"} 
};var a_Apolloprogram_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Restore edilen kasetlerdeki görselleri geliştirmek için onlara renk eklendi mi yoksa siyah beyaz mı kaldılar?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Restore edilen kasetlerdeki görselleri geliştirmek için onlara renk eklendi mi yoksa siyah beyaz mı kaldılar?`, correct_answer: "siyah beyaz olarak kalmış", trial_name: "a_Apolloprogram_4_qa_4"} 
};var a_Amazonrainforest_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Amazonrainforest_2_qa_0">Soya</span> çiftçilerinin ihtiyaçları, şu anda Amazon'da geliştirilmekte olan birçok tartışmalı ulaşım projesini gerekçelendirmek için kullanılmıştır. İlk iki otoban başarılı biçimde yağmur ormanında açılmış ve <span id="a_Amazonrainforest_2_qa_1">daha fazla yerleşime ve orman kaybına</span> sebep olmuştur. 2000 ile 2005 yılları arasında ortalama yıllık orman kaybı oranı (yıllık 22,392 km2 veya <span id="a_Amazonrainforest_2_qa_2">8,646 mil kare</span>), önceki beş yıla kıyasla <span id="a_Amazonrainforest_2_qa_4">%18</span> daha yüksektir (yıllık 19,018 km2 veya 7,343 mil kare). Orman kaybı 2004 ve 2014 yılları ararsında Brezilya Amazonu'nda <span id="a_Amazonrainforest_2_qa_3">önemli biçimde azalsa da</span> günümüze kadar bir artış olmuştur.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Amazon yağmur ormanında inşa edilen otobanlar öncelikli olarak hangi tür çiftçiler için yapılmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Amazon yağmur ormanında inşa edilen otobanlar öncelikli olarak hangi tür çiftçiler için yapılmıştır?`, correct_answer: "Soya", trial_name: "a_Amazonrainforest_2_qa_0"} 
};var a_Amazonrainforest_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Amazon yağmur ormanında otobanların yapılması neye yol açmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Amazon yağmur ormanında otobanların yapılması neye yol açmıştır?`, correct_answer: "daha fazla yerleşime ve orman kaybına", trial_name: "a_Amazonrainforest_2_qa_1"} 
};var a_Amazonrainforest_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">2000 ile 2005 yılları arasında orman kaybı oranı yıllık kaç mil karedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `2000 ile 2005 yılları arasında orman kaybı oranı yıllık kaç mil karedir?`, correct_answer: "8,646 mil kare", trial_name: "a_Amazonrainforest_2_qa_2"} 
};var a_Amazonrainforest_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">2004 ile 2014 yılları arasında Brezilya'nın Amazon bölgesindeki orman kaybı oranına ne olmuştur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `2004 ile 2014 yılları arasında Brezilya'nın Amazon bölgesindeki orman kaybı oranına ne olmuştur?`, correct_answer: "önemli biçimde azalsa da", trial_name: "a_Amazonrainforest_2_qa_3"} 
};var a_Amazonrainforest_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">2000 ile 2005 yılları arasındaki orman kaybı oranı 1995 ile 2000 yılları arasındakine kıyasla ne kadar yüksektir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `2000 ile 2005 yılları arasındaki orman kaybı oranı 1995 ile 2000 yılları arasındakine kıyasla ne kadar yüksektir?`, correct_answer: "%18", trial_name: "a_Amazonrainforest_2_qa_4"} 
};var a_Amazonrainforest_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Çevreciler hem <span id="a_Amazonrainforest_3_qa_1">ormanın yok edilmesinin</span> yol açacağı <span id="a_Amazonrainforest_3_qa_0">biyoçeşitlilik</span> kaybından hem de küresel ısınmayı hızlandırabilecek olan <span id="a_Amazonrainforest_3_qa_2">bitki örtüsü içinde yer alan karbonun</span> salınımından endişe duymaktadırlar. Amazon yaprak dökmeyen ormanları dünyanın karasal birincil üretkenliğine ve ekosistemlerdeki karbon stoğunun <span id="a_Amazonrainforest_3_qa_3">%10'una</span> sahiptir - bu da <span id="a_Amazonrainforest_3_qa_4">1,1 × 1011</span> metrik ton karbon etmektedir. Amazon ormanlarının 1975 ile 1996 yılları arasında yılda hektar başına 0,62 ± 0,37 ton karbon biriktirdiği tahmin edilmektedir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Çevreciler Amazon ormanında neyi kaybetmekten endişe duymaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Çevreciler Amazon ormanında neyi kaybetmekten endişe duymaktadır?`, correct_answer: "biyoçeşitlilik", trial_name: "a_Amazonrainforest_3_qa_0"} 
};var a_Amazonrainforest_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Çevrecilere göre biyoçeşitliliğin kaybı neyin sonucu olabilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Çevrecilere göre biyoçeşitliliğin kaybı neyin sonucu olabilir?`, correct_answer: "ormanın yok edilmesinin", trial_name: "a_Amazonrainforest_3_qa_1"} 
};var a_Amazonrainforest_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Çevreciler Amazon bölgesinde neyin salınımından endişe duymaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Çevreciler Amazon bölgesinde neyin salınımından endişe duymaktadır?`, correct_answer: "bitki örtüsü içinde yer alan karbonun", trial_name: "a_Amazonrainforest_3_qa_2"} 
};var a_Amazonrainforest_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Dünyanın karbonunun ne kadarı Amazon ormanında depolanmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Dünyanın karbonunun ne kadarı Amazon ormanında depolanmaktadır?`, correct_answer: "%10'una", trial_name: "a_Amazonrainforest_3_qa_3"} 
};var a_Amazonrainforest_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Amazon ormanında kaç metrik ton karbonun depolanmış olduğu tahmin edilmektedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Amazon ormanında kaç metrik ton karbonun depolanmış olduğu tahmin edilmektedir?`, correct_answer: "1,1 × 1011", trial_name: "a_Amazonrainforest_3_qa_4"} 
};var a_Amazonrainforest_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Amazonrainforest_4_qa_0">2010</span> yılında Amazon yağmur ormanı başka bir ciddi kuraklık yaşadı ve bu bazı yönleriyle 2005 kuraklığından daha da aşırıydı. Etkilenen bölge yağmur ormanının yaklaşık <span id="a_Amazonrainforest_4_qa_1">1.160.000</span> mil karesiydi (3.000.000 km2) ve bu sayı 2005'te 734.000 mil kareydi (1.900.000 km2). 2010 kuraklığının bitki örtüsünün öldüğü <span id="a_Amazonrainforest_4_qa_2">üç merkez üssü</span> vardı, <span id="a_Amazonrainforest_4_qa_3">2005'te</span> ise kuraklık güneybatı kısma odaklıydı. Bulgular Science dergisinde yayınlandı. Tipik bir yılda Amazon <span id="a_Amazonrainforest_4_qa_4">1,5 gigaton</span> karbondioksit emmektedir; 2005'te ise 5 gigaton salındı ve 2010'da 8 gigaton salındı.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Hangi yılda Amazon 2005'tekinden daha aşırı olabilecek bir kuraklık yaşadı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi yılda Amazon 2005'tekinden daha aşırı olabilecek bir kuraklık yaşadı?`, correct_answer: "2010", trial_name: "a_Amazonrainforest_4_qa_0"} 
};var a_Amazonrainforest_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">2010 kuraklığından etkilenen bölge kaç mil kare genişliğindeydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `2010 kuraklığından etkilenen bölge kaç mil kare genişliğindeydi?`, correct_answer: "1.160.000", trial_name: "a_Amazonrainforest_4_qa_1"} 
};var a_Amazonrainforest_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">2010 kuraklığında kaç bölge bitki örtüsü ölümünden etkilenmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `2010 kuraklığında kaç bölge bitki örtüsü ölümünden etkilenmiştir?`, correct_answer: "üç merkez üssü", trial_name: "a_Amazonrainforest_4_qa_2"} 
};var a_Amazonrainforest_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi yıldaki kuraklıkta Amazon ormanının özellikle güney kısmı etkilenmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi yıldaki kuraklıkta Amazon ormanının özellikle güney kısmı etkilenmiştir?`, correct_answer: "2005'te", trial_name: "a_Amazonrainforest_4_qa_3"} 
};var a_Amazonrainforest_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Amazon'da tipik bir yılda kaç ton karbon emilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Amazon'da tipik bir yılda kaç ton karbon emilir?`, correct_answer: "1,5 gigaton", trial_name: "a_Amazonrainforest_4_qa_4"} 
};var a_Ctenophora_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">1 milimetreden (0,039 in) 1,5 metreye (4,9 ft) kadar değişen boyutlarıyla taraklılar, ana <span id="a_Ctenophora_2_qa_1">hareket yöntemi</span> olarak <span id="a_Ctenophora_2_qa_0">siliya</span> ("kıl") kullanan en büyük kolonyal olmayan hayvanlardır. Çoğu türün tarak dizisi denen ve vücutları boyunca devam eden, <span id="a_Ctenophora_2_qa_2">ktene</span> adı verilen taraksı siliya grupları taşıyan sekiz dizisi vardır ve böylece siliya vurduğunda her bir tarak alttaki tarağa dokunur. "Ktenofor", Yunanca'da "tarak" anlamına gelen κτείς (kök biçimi κτεν-) ile "taşıyan" anlamına gelen Yunanca son ek -φορος'tan gelir ve "<span id="a_Ctenophora_2_qa_3">tarak taşıyan</span>" anlamına gelir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Taraklıların kıllarına ne denir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Taraklıların kıllarına ne denir?`, correct_answer: "siliya", trial_name: "a_Ctenophora_2_qa_0"} 
};var a_Ctenophora_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Siliya ne için kullanılır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Siliya ne için kullanılır?`, correct_answer: "hareket yöntemi", trial_name: "a_Ctenophora_2_qa_1"} 
};var a_Ctenophora_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Taraksı siliya gruplarına ne ad verilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Taraksı siliya gruplarına ne ad verilir?`, correct_answer: "ktene", trial_name: "a_Ctenophora_2_qa_2"} 
};var a_Ctenophora_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ktenofor Yunanca'da ne anlama gelir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ktenofor Yunanca'da ne anlama gelir?`, correct_answer: "tarak taşıyan", trial_name: "a_Ctenophora_2_qa_3"} 
};var a_FresnoCalifornia_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Fresno'nun <span id="a_FresnoCalifornia_0_qa_4">Batı Yakası</span>, başka bir deyişle <span id="a_FresnoCalifornia_0_qa_0">Güneybatı Fresno</span>, şehirdeki en eski mahallelerden biridir. Mahalle, (onu Fresno Merkezi'nden ayıran) 99 otobanının <span id="a_FresnoCalifornia_0_qa_1">güneybatısında</span>, 41 otobanının batısında ve Nielsen Bulvarı'nın (ya da yeni inşa edilen 180 otobanının) güneyinde yer alır ve batı ve güneye doğru şehir sınırlarına kadar devam eder. Mahalle, geleneksel olarak Fresno'nun <span id="a_FresnoCalifornia_0_qa_2">Afrikalı-Amerikalı</span> topluluğunun merkezi kabul edilir. Kültürel olarak çeşitliliğe sahiptir ve aynı zamanda önemli oranda Meksikalı-Amerikalı ve Asyalı-Amerikalı (öncelikli olarak <span id="a_FresnoCalifornia_0_qa_3">Hmong veya Laoslu</span>) nüfusuna da sahiptir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Fresno'nun batı yakasının diğer adı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Fresno'nun batı yakasının diğer adı nedir?`, correct_answer: "Güneybatı Fresno", trial_name: "a_FresnoCalifornia_0_qa_0"} 
};var a_FresnoCalifornia_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Fresno'nun batı yakası mahallesi 99 otobanının hangi yönünde yer almaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Fresno'nun batı yakası mahallesi 99 otobanının hangi yönünde yer almaktadır?`, correct_answer: "güneybatısında", trial_name: "a_FresnoCalifornia_0_qa_1"} 
};var a_FresnoCalifornia_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Fresno'nun batı yakası hangi etnik topluluğun merkezidir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Fresno'nun batı yakası hangi etnik topluluğun merkezidir?`, correct_answer: "Afrikalı-Amerikalı", trial_name: "a_FresnoCalifornia_0_qa_2"} 
};var a_FresnoCalifornia_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Fresno'nun batı yakası mahallesinde yaşayan iki öncelikli Asyalı-Amerikalı grup nelerdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Fresno'nun batı yakası mahallesinde yaşayan iki öncelikli Asyalı-Amerikalı grup nelerdir?`, correct_answer: "Hmong veya Laoslu", trial_name: "a_FresnoCalifornia_0_qa_3"} 
};var a_FresnoCalifornia_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">41 otobanının batısında hangi mahalle bulunmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `41 otobanının batısında hangi mahalle bulunmaktadır?`, correct_answer: "Batı Yakası", trial_name: "a_FresnoCalifornia_0_qa_4"} 
};var a_FresnoCalifornia_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Toplamda 158.349 hane bulunmaktadır, bunların <span id="a_FresnoCalifornia_2_qa_0">68.511'inde</span> (%43,3) 18 yaşın altında çocuklar yaşamaktadır, 69.284'ü (%43,8) birlikte yaşayan karşı cinsten evli çiftlerdir, 30.547'si (<span id="a_FresnoCalifornia_2_qa_1">%19,3</span>) kocanın olmadığı kadın aile reisidir, 11.698'i (%7,4) eşin olmadığı erkek aile reisidir. 12.843 (%8,1) evli olmayan karşı cins çift ve <span id="a_FresnoCalifornia_2_qa_2">1.388</span> (%0,9) aynı cins evli çift veya evli olmayan çift vardır. 35.064 hane (%22,1) bireylerden oluşmakta ve 12.344'ünde (%7,8) yalnız yaşayan 65 yaş ve üstü birey bulunmaktadır. Ortalama hane boyutu <span id="a_FresnoCalifornia_2_qa_4">3,07'dir</span>. 111.529 aile vardır (tüm hanelerin %70,4'ü); ortalama aile boyutu <span id="a_FresnoCalifornia_2_qa_3">3,62'dir</span>.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_FresnoCalifornia_2_qa_0','#a_FresnoCalifornia_2_qa_1','#a_FresnoCalifornia_2_qa_2','#a_FresnoCalifornia_2_qa_3','#a_FresnoCalifornia_2_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_FresnoCalifornia_2_1280_720.png';
a.click();});}},data: { trial_name: "a_FresnoCalifornia_2"}
};
var a_FresnoCalifornia_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kaç hanede yaşayan 18 yaş altı çocuklar bulunmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kaç hanede yaşayan 18 yaş altı çocuklar bulunmaktadır?`, correct_answer: "68.511'inde", trial_name: "a_FresnoCalifornia_2_qa_0"} 
};var a_FresnoCalifornia_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kocanın bulunmadığı kadın aile reislerinin yüzdesi kaçtır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kocanın bulunmadığı kadın aile reislerinin yüzdesi kaçtır?`, correct_answer: "%19,3", trial_name: "a_FresnoCalifornia_2_qa_1"} 
};var a_FresnoCalifornia_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kaç aynı cins evli ya da evli olmayan çift vardır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kaç aynı cins evli ya da evli olmayan çift vardır?`, correct_answer: "1.388", trial_name: "a_FresnoCalifornia_2_qa_2"} 
};var a_FresnoCalifornia_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ortalama aile büyüklüğü kaçtır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ortalama aile büyüklüğü kaçtır?`, correct_answer: "3,62'dir", trial_name: "a_FresnoCalifornia_2_qa_3"} 
};var a_FresnoCalifornia_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ortalama hane büyüklüğü kaçtır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ortalama hane büyüklüğü kaçtır?`, correct_answer: "3,07'dir", trial_name: "a_FresnoCalifornia_2_qa_4"} 
};var a_FresnoCalifornia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Fresno'ya Kaliforniya Orta Vadisi'nin büyük nüfus merkezlerini birleştiren ana kuzey/güney otobanı olan <span id="a_FresnoCalifornia_3_qa_0">Devlet Karayolu 99</span> hizmet etmektedir. Devlet Karayolu 168, <span id="a_FresnoCalifornia_3_qa_1">Sierra Otobanı</span> Clovis şehrine ve Huntington Gölü'ne doğru doğuya gider. <span id="a_FresnoCalifornia_3_qa_2">Devlet Karayolu 41</span> (Yosemite Otobanı/Eisenhower Otobanı) Fresno'ya güneydeki Atascadero'dan girer ve kuzeydeki Yosemite'a doğru gider. Devlet Karayolu 180 (Kings Canyon Otobanı) <span id="a_FresnoCalifornia_3_qa_3">batıdan</span> Mendota üzerinden ve doğudan Kings Canyon Ulusal Parkı'ndan gelir ve Reedley şehrine doğru gider.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Fresno'yu Kaliforniya Orta Vadisi'ne hangi yol bağlar?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Fresno'yu Kaliforniya Orta Vadisi'ne hangi yol bağlar?`, correct_answer: "Devlet Karayolu 99", trial_name: "a_FresnoCalifornia_3_qa_0"} 
};var a_FresnoCalifornia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Devlet Karayolu 168'in başka bir adı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Devlet Karayolu 168'in başka bir adı nedir?`, correct_answer: "Sierra Otobanı", trial_name: "a_FresnoCalifornia_3_qa_1"} 
};var a_FresnoCalifornia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Yosemite Otobanı'nın başka bir adı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Yosemite Otobanı'nın başka bir adı nedir?`, correct_answer: "Devlet Karayolu 41", trial_name: "a_FresnoCalifornia_3_qa_2"} 
};var a_FresnoCalifornia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Devlet Karayolu 180 Mendota üzerinden hangi yönden gelir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Devlet Karayolu 180 Mendota üzerinden hangi yönden gelir?`, correct_answer: "batıdan", trial_name: "a_FresnoCalifornia_3_qa_3"} 
};var a_Packetswitching_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">ARPANET ve SITA HLN <span id="a_Packetswitching_1_qa_0">1969</span> yılında faaliyete geçmiştir. 1973 yılında X.25'in çıkmasından önce yaklaşık yirmi farklı ağ teknolojisi geliştirilmiştir. <span id="a_Packetswitching_1_qa_1">İki temel farka ağ ucundaki ve ağ merkezindeki sunucular arasındaki işlev ve görevlerin bölümü dahildir</span>. Datagram sisteminde sunucular paketlerin düzgün teslimini sağlama sorumluluğuna sahiptirler. <span id="a_Packetswitching_1_qa_3">Kullanıcı Datagram Protokolü</span> (UDP), datagram protokolünün bir örneğidir. <span id="a_Packetswitching_1_qa_2">Sanal çağrı sisteminde ağ, verinin sunucuya düzgün teslimini garanti eder</span>. Bu, datagram modeline kıyasla daha az işlevselliğe sahip daha basit bir sunucu arayüzüne sebep olur. X.25 protokol paketi bu ağ tipini kullanır.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Packetswitching_1_qa_0','#a_Packetswitching_1_qa_1','#a_Packetswitching_1_qa_2','#a_Packetswitching_1_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Packetswitching_1_1280_720.png';
a.click();});}},data: { trial_name: "a_Packetswitching_1"}
};
var a_Packetswitching_1_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">ARPANET ve SITA ne zaman faaliyete geçmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `ARPANET ve SITA ne zaman faaliyete geçmiştir?`, correct_answer: "1969", trial_name: "a_Packetswitching_1_qa_0"} 
};var a_Packetswitching_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">X.25 ve ARPANET SITA teknolojileri arasındaki 2 fark nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `X.25 ve ARPANET SITA teknolojileri arasındaki 2 fark nedir?`, correct_answer: "İki temel farka ağ ucundaki ve ağ merkezindeki sunucular arasındaki işlev ve görevlerin bölümü dahildir", trial_name: "a_Packetswitching_1_qa_1"} 
};var a_Packetswitching_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kullanıcı Datagram Protokolü neyi garanti eder?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kullanıcı Datagram Protokolü neyi garanti eder?`, correct_answer: "Sanal çağrı sisteminde ağ, verinin sunucuya düzgün teslimini garanti eder", trial_name: "a_Packetswitching_1_qa_2"} 
};var a_Packetswitching_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">X.25 ne tür ağ tipi kullanır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `X.25 ne tür ağ tipi kullanır?`, correct_answer: "Kullanıcı Datagram Protokolü", trial_name: "a_Packetswitching_1_qa_3"} 
};var a_BlackDeath_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">﻿Tıp bilgisi Ortaçağ'da duraksamıştı. O dönemlerdeki en yetkili rivayet, Paris'teki tıp fakültesinden, 1345'te "havada büyük bir öldürücü salgın"a neden olan üç gezegenin bir araya gelmesi şeklinde <span id="a_BlackDeath_0_qa_0">gökleri</span> suçlayan <span id="a_BlackDeath_0_qa_1">Fransa Kralı</span>'na  ait bir raporda geldi. Bu rapor, hastalara tavsiyelerde bulunmaya çalışan bir dizi veba hastalığının ilk ve en çok dağıtılanı oldu. <span id="a_BlackDeath_0_qa_2">Vebaya kötü havanın neden olduğu</span> en yaygın kabul gören teori haline geldi. Bugün, bu <span id="a_BlackDeath_0_qa_3">Miasma teorisi</span> olarak bilinir. 'Veba' sözcüğü şu anda özel bir öneme sahip değildi ve yalnızca Orta Çağ'da ortaya çıkan salgınların tekrarlanması ona tıbbi terim haline gelen adı verdi.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_BlackDeath_0_qa_0','#a_BlackDeath_0_qa_1','#a_BlackDeath_0_qa_2','#a_BlackDeath_0_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_BlackDeath_0_1280_720.png';
a.click();});}},data: { trial_name: "a_BlackDeath_0"}
};
var a_BlackDeath_0_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kara ölüm olarak suçlanan aslında neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kara ölüm olarak suçlanan aslında neydi?`, correct_answer: "gökleri", trial_name: "a_BlackDeath_0_qa_0"} 
};var a_BlackDeath_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Tıbbi rapor kimin için yazıldı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Tıbbi rapor kimin için yazıldı?`, correct_answer: "Fransa Kralı", trial_name: "a_BlackDeath_0_qa_1"} 
};var a_BlackDeath_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Veba yayılmasının ardındaki daha yeni, daha yaygın olarak kabul edilen teori nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Veba yayılmasının ardındaki daha yeni, daha yaygın olarak kabul edilen teori nedir?`, correct_answer: "Vebaya kötü havanın neden olduğu", trial_name: "a_BlackDeath_0_qa_2"} 
};var a_BlackDeath_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kötü hava teorisi resmiyette ne olarak bilinir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kötü hava teorisi resmiyette ne olarak bilinir?`, correct_answer: "Miasma teorisi", trial_name: "a_BlackDeath_0_qa_3"} 
};var a_BlackDeath_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Kara Ölüm, İslam dünyasının çoğunu vurdu. Veba, İslam dünyasında <span id="a_BlackDeath_4_qa_0">1500 ila 1850</span> arasında neredeyse her yıl en az bir yerde boy gösterdi. Veba defalarca Kuzey Afrika şehirlerini vurdu. Cezayirliler 1620–21 yıllarında <span id="a_BlackDeath_4_qa_1">30 ila 50 bin</span> kişi ve yine 1654–57, 1665, 1691 ve 1740–42 yıllarında kaybettiler. Veba, Osmanlı toplumunda  <span id="a_BlackDeath_4_qa_2">19. yüzyılın ikinci çeyreğine kadar</span> önemli bir olay olarak kaldı. 1701 ile 1750 arasında Konstantinopolis'te otuz yedi daha büyük ve daha küçük salgınlar ve 1751-1800 arasında ek otuz bir tane daha kaydedildi. Bağdat, veba felaketlerinden ciddi bir şekilde acı çekti ve bazen <span id="a_BlackDeath_4_qa_3">nüfusunun üçte ikisi</span> yok oldu.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_BlackDeath_4_qa_0','#a_BlackDeath_4_qa_1','#a_BlackDeath_4_qa_2','#a_BlackDeath_4_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_BlackDeath_4_1280_720.png';
a.click();});}},data: { trial_name: "a_BlackDeath_4"}
};
var a_BlackDeath_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Veba İslam ülkelerinde hangi yıllarda boy göstermiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Veba İslam ülkelerinde hangi yıllarda boy göstermiştir?`, correct_answer: "1500 ila 1850", trial_name: "a_BlackDeath_4_qa_0"} 
};var a_BlackDeath_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Cezayir'de 1620-21 yıllarında kaç kişi kaybedilmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Cezayir'de 1620-21 yıllarında kaç kişi kaybedilmiştir?`, correct_answer: "30 ila 50 bin", trial_name: "a_BlackDeath_4_qa_1"} 
};var a_BlackDeath_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Veba Osmanlı İmparatorluğu'nda ne kadar sürmüştür? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Veba Osmanlı İmparatorluğu'nda ne kadar sürmüştür? `, correct_answer: "19. yüzyılın ikinci çeyreğine kadar", trial_name: "a_BlackDeath_4_qa_2"} 
};var a_BlackDeath_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bağdat'ta en fazla kaç kişi vebadan ölmüştür?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bağdat'ta en fazla kaç kişi vebadan ölmüştür?`, correct_answer: "nüfusunun üçte ikisi", trial_name: "a_BlackDeath_4_qa_3"} 
};var a_Geology_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Geology_4_qa_0">James Hutton</span> genellikle ilk modern jeolog olarak görülür. 1785'te Edinburgh Kraliyet Cemiyeti'ne <span id="a_Geology_4_qa_1">Dünya Teorisi</span> başlıklı bir makale sundu. Yazısında, dağların aşınması ve ayrılarak kuru toprak haline gelecek olan deniz dibinde tortular açısından yeni kayaların oluşması için yeterli zamana ulaşmaları adına <span id="a_Geology_4_qa_3">dünyanın daha önce tahmin edilenden çok daha yaşlı olması gerektiği</span> teorisini anlattı. Hutton, <span id="a_Geology_4_qa_2">1795</span> yılında fikirlerinin iki ciltli bir sürümünü yayınladı (Cilt 1, Cilt 2).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Kim ilk modern jeolog olarak görülmektedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kim ilk modern jeolog olarak görülmektedir?`, correct_answer: "James Hutton", trial_name: "a_Geology_4_qa_0"} 
};var a_Geology_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">1785'te James Hutton, Edinburgh Kraliyet Cemiyeti'ne hangi makaleyi sunmuştur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1785'te James Hutton, Edinburgh Kraliyet Cemiyeti'ne hangi makaleyi sunmuştur?`, correct_answer: "Dünya Teorisi", trial_name: "a_Geology_4_qa_1"} 
};var a_Geology_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">James Hutton hangi yıl teorilerinin 2 ciltlik versiyonunu yayınlamıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `James Hutton hangi yıl teorilerinin 2 ciltlik versiyonunu yayınlamıştır?`, correct_answer: "1795", trial_name: "a_Geology_4_qa_2"} 
};var a_Geology_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">James Hutton'ın makalesinin ana fikri neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `James Hutton'ın makalesinin ana fikri neydi?`, correct_answer: "dünyanın daha önce tahmin edilenden çok daha yaşlı olması gerektiği", trial_name: "a_Geology_4_qa_3"} 
};var a_VictoriaandAlbertMuseum_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Kostüm koleksiyonu, çoğunlukla 1600'den günümüze kadar gelen <span id="a_VictoriaandAlbertMuseum_2_qa_0">14.000'den fazla</span> kıyafet artı aksesuarı içeren İngiltere'deki en kapsamlı olandır. Kostüm taslakları, tasarım defterleri ve kağıt üzerindeki diğer eserler genellikle <span id="a_VictoriaandAlbertMuseum_2_qa_1">Söz ve Şekil</span> departmanı tarafından düzenlenir. <span id="a_VictoriaandAlbertMuseum_2_qa_2">Önceki dönemlerden günlük giysiler genel olarak hayatta kalmadığından</span>, koleksiyonda özel günler için yapılan moda kıyafetler hakimdir. Kostümlerin ilk önemli armağanlarından biri <span id="a_VictoriaandAlbertMuseum_2_qa_3">1913</span> yılında Victoria Ve Albert Müzesi yakındaki mağazada sergilenmesini takiben <span id="a_VictoriaandAlbertMuseum_2_qa_4">Harrods</span>'tan 1.442 kostüm ve eşya içeren Talbot Hughes koleksiyonunu aldığında gelmiştir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Victoria Ve Albert Müzesi'nin kostüm koleksiyonunda yaklaşık kaç öğe bulunmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Victoria Ve Albert Müzesi'nin kostüm koleksiyonunda yaklaşık kaç öğe bulunmaktadır?`, correct_answer: "14.000'den fazla", trial_name: "a_VictoriaandAlbertMuseum_2_qa_0"} 
};var a_VictoriaandAlbertMuseum_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi departman kostüm koleksiyonunun kağıt üzerindeki eserlerine ev sahipliği yapmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi departman kostüm koleksiyonunun kağıt üzerindeki eserlerine ev sahipliği yapmaktadır?`, correct_answer: "Söz ve Şekil", trial_name: "a_VictoriaandAlbertMuseum_2_qa_1"} 
};var a_VictoriaandAlbertMuseum_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Koleksiyon neden özel günler için üretilen moda kıyafetlerin hakimiyetindedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Koleksiyon neden özel günler için üretilen moda kıyafetlerin hakimiyetindedir?`, correct_answer: "Önceki dönemlerden günlük giysiler genel olarak hayatta kalmadığından", trial_name: "a_VictoriaandAlbertMuseum_2_qa_2"} 
};var a_VictoriaandAlbertMuseum_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Victoria Ve Albert Müzesi hangi yılda Talbot Hughes koleksiyonunu almıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Victoria Ve Albert Müzesi hangi yılda Talbot Hughes koleksiyonunu almıştır?`, correct_answer: "1913", trial_name: "a_VictoriaandAlbertMuseum_2_qa_3"} 
};var a_VictoriaandAlbertMuseum_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Talbot Hughes koleksiyonu hangi şirketten hediye edilmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Talbot Hughes koleksiyonu hangi şirketten hediye edilmiştir?`, correct_answer: "Harrods", trial_name: "a_VictoriaandAlbertMuseum_2_qa_4"} 
};var a_AmericanBroadcastingCompany_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">ABC, 2000 yılında, "<span id="a_AmericanBroadcastingCompany_0_qa_3">nokta</span>" olarak da adlandırılan <span id="a_AmericanBroadcastingCompany_0_qa_0">çember logosu</span> etrafında odaklanmış, ayrıca çizgi roman karakteri Küçük Nokta'nın ziyaretçilerini ABC logosunun ekranın etrafında uçup ekranın sağ alt köşesine yerleşmesine neden olacak bir program olan "noktayı indir" melerini sağlayan web tabanlı bir tanıtım kampanyası başlattı. Ağ, logosunun <span id="a_AmericanBroadcastingCompany_0_qa_2">siyah ve sarı</span> rengini kullanmaya devam eden ve tanıtıcı ve kimlik belirleme yerlerinde çeşitli noktalar ve çizgiler içeren 2001–02 kimliğini tasarlamak ve üretmek için <span id="a_AmericanBroadcastingCompany_0_qa_1">Troika Design Group'u</span> işe aldı.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">ABC, 200 yılında, neye odaklanan internet tabanlı bir kampanya başlatmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `ABC, 200 yılında, neye odaklanan internet tabanlı bir kampanya başlatmıştır?`, correct_answer: "çember logosu", trial_name: "a_AmericanBroadcastingCompany_0_qa_0"} 
};var a_AmericanBroadcastingCompany_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">ABC'nin 2001-02 kimliğini üretmek için kim işe alınmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `ABC'nin 2001-02 kimliğini üretmek için kim işe alınmıştır?`, correct_answer: "Troika Design Group'u", trial_name: "a_AmericanBroadcastingCompany_0_qa_1"} 
};var a_AmericanBroadcastingCompany_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">2001 yılında ABC'nin logosu hangi renklerdeydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `2001 yılında ABC'nin logosu hangi renklerdeydi?`, correct_answer: "siyah ve sarı", trial_name: "a_AmericanBroadcastingCompany_0_qa_2"} 
};var a_AmericanBroadcastingCompany_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">2000 yılı kampanyasındaki ABC’nin logosunun takma adı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `2000 yılı kampanyasındaki ABC’nin logosunun takma adı nedir?`, correct_answer: "nokta", trial_name: "a_AmericanBroadcastingCompany_0_qa_3"} 
};var a_AmericanBroadcastingCompany_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_AmericanBroadcastingCompany_3_qa_0">1970'lerin</span> başında, <span id="a_AmericanBroadcastingCompany_3_qa_1">ABC</span> renge geçişini tamamladı; CBS ve NBCağda ilk sıraya yerleşmeye başlayacağından bir bütün olarak bu on yıl ABC için bir dönüm noktası olacaktı. Ayrıca, reklam alanlarının ne tür sponsorlara satılacağını daha iyi belirlemek için <span id="a_AmericanBroadcastingCompany_3_qa_2">davranışsal ve demografik</span> verileri kullanmaya ve belirli izleyicilere hitap edecek programlamayı sağlamaya başlamıştır. ABC'nin izleyici payındaki kazanımları, bazı daha küçük pazarların üç küçük ağın hepsinden tam zamanlı ilişkilere izin verecek genişlikte büyümesiyle önemli ölçüde desteklenmiştir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">ABC hangi on yılda renge geçişi tamamlamıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `ABC hangi on yılda renge geçişi tamamlamıştır?`, correct_answer: "1970'lerin", trial_name: "a_AmericanBroadcastingCompany_3_qa_0"} 
};var a_AmericanBroadcastingCompany_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">1970'ler, hangi ağın reytinglerde ilk sıraya yerleşmesine izin vermiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1970'ler, hangi ağın reytinglerde ilk sıraya yerleşmesine izin vermiştir?`, correct_answer: "ABC", trial_name: "a_AmericanBroadcastingCompany_3_qa_1"} 
};var a_AmericanBroadcastingCompany_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">ABC, 1970'lerde reklamları daha iyi hedeflemek ve belirli kitlelere yönelik programlama yapmak için ne tür veriler kullanmaya başlamıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `ABC, 1970'lerde reklamları daha iyi hedeflemek ve belirli kitlelere yönelik programlama yapmak için ne tür veriler kullanmaya başlamıştır?`, correct_answer: "davranışsal ve demografik", trial_name: "a_AmericanBroadcastingCompany_3_qa_2"} 
};var a_Pharmacy_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Çoğu ülkede dispanser, mevzuatta belirtilen <span id="a_Pharmacy_2_qa_4">depolama koşulları, zorunlu metinler, araç gereç vb.</span> gereksinimlerle <span id="a_Pharmacy_2_qa_0">eczane mevzuatına</span> tabidir. Bir zamanlar eczacılar <span id="a_Pharmacy_2_qa_1">dispanser ilaç birleşimi/dağıtımı içinde</span> kalınca, eczacı hastalarla iletişim kurmaya daha fazla zaman harcarken, eğitimli eczane teknisyenlerinin kullanımına yönelik artan bir eğilim olmuştur. Eczane teknisyenleri şimdi <span id="a_Pharmacy_2_qa_3">hastaların reçeteleri ve hasta güvenliği konuları</span> ile ilgilenirken yeni rollerinde onlara yardımcı olması için <span id="a_Pharmacy_2_qa_2">otomasyona</span> daha da bağımlılar.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ülkelerin çoğunda dispanser neye tabidir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ülkelerin çoğunda dispanser neye tabidir?`, correct_answer: "eczane mevzuatına", trial_name: "a_Pharmacy_2_qa_0"} 
};var a_Pharmacy_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Eczane teknisyenleri eskiden hangi sorumluluklarla sınırlıydı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Eczane teknisyenleri eskiden hangi sorumluluklarla sınırlıydı?`, correct_answer: "dispanser ilaç birleşimi/dağıtımı içinde", trial_name: "a_Pharmacy_2_qa_1"} 
};var a_Pharmacy_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Eczane teknisyenleri gittikçe neye daha fazla bağımlı hale gelmektedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Eczane teknisyenleri gittikçe neye daha fazla bağımlı hale gelmektedir?`, correct_answer: "otomasyona", trial_name: "a_Pharmacy_2_qa_2"} 
};var a_Pharmacy_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Eczane teknisyenlerinin şu anda karşılaştıkları yeni sorumluluklar nelerdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Eczane teknisyenlerinin şu anda karşılaştıkları yeni sorumluluklar nelerdir?`, correct_answer: "hastaların reçeteleri ve hasta güvenliği konuları", trial_name: "a_Pharmacy_2_qa_3"} 
};var a_Pharmacy_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Eczacılık mevzuatı neyi zorunlu kılmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Eczacılık mevzuatı neyi zorunlu kılmaktadır?`, correct_answer: "depolama koşulları, zorunlu metinler, araç gereç vb.", trial_name: "a_Pharmacy_2_qa_4"} 
};var a_Pharmacy_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Çoğu yetki alanında (ABD gibi) eczacılar, <span id="a_Pharmacy_4_qa_0">doktorlardan ayrı olarak</span> düzenlenir. Bu yetki alanları genellikle <span id="a_Pharmacy_4_qa_1">sadece eczacıların</span>  halka planlanmış ilaç tedarik edebildiğini ve eczacıların <span id="a_Pharmacy_4_qa_4">doktorlarla iş ortaklıkları kuramayacağını ya da "rüşvet" ödemeleri yapamayacağını</span> belirtmektedir. Bununla birlikte, <span id="a_Pharmacy_4_qa_2">Amerikan Tabipler Birliği (AMA)</span> Etik Kuralları, hekimlerin, hasta sömürüsü olmadığı ve hastaların başka bir yerde doldurulabilecekleri yazılı bir reçeteye sahip olmaları koşuluyla, ofis uygulamalarında ilaç dağıtmalarını sağlar. Amerikan doktorlarının <span id="a_Pharmacy_4_qa_3">%7 ila 10</span> 'unun ilaçları kendi başlarına dağıttıkları bildirildi.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Pharmacy_4_qa_0','#a_Pharmacy_4_qa_1','#a_Pharmacy_4_qa_2','#a_Pharmacy_4_qa_3','#a_Pharmacy_4_qa_4'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Pharmacy_4_1280_720.png';
a.click();});}},data: { trial_name: "a_Pharmacy_4"}
};
var a_Pharmacy_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Eczacılar, çoğu yetki alanlarında nasıl düzenlenir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Eczacılar, çoğu yetki alanlarında nasıl düzenlenir?`, correct_answer: "doktorlardan ayrı olarak", trial_name: "a_Pharmacy_4_qa_0"} 
};var a_Pharmacy_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Çoğu yetki alanına göre, planlanan ilaçları kim halka verebilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Çoğu yetki alanına göre, planlanan ilaçları kim halka verebilir?`, correct_answer: "sadece eczacıların", trial_name: "a_Pharmacy_4_qa_1"} 
};var a_Pharmacy_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi kurum doktorların belirli şartlar altında ilaç dağıtabileceğini belirtmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi kurum doktorların belirli şartlar altında ilaç dağıtabileceğini belirtmiştir?`, correct_answer: "Amerikan Tabipler Birliği (AMA)", trial_name: "a_Pharmacy_4_qa_2"} 
};var a_Pharmacy_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Tahmini olarak doktorların ne kadarı kendi kendine ilaç dağıtmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Tahmini olarak doktorların ne kadarı kendi kendine ilaç dağıtmaktadır?`, correct_answer: "%7 ila 10", trial_name: "a_Pharmacy_4_qa_3"} 
};var a_Pharmacy_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Eczacıların yapması yasaklanmış olan şeyler nelerdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Eczacıların yapması yasaklanmış olan şeyler nelerdir?`, correct_answer: "doktorlarla iş ortaklıkları kuramayacağını ya da rüşvet ödemeleri yapamayacağını", trial_name: "a_Pharmacy_4_qa_4"} 
};var a_Civildisobedience_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Yasa dışı boykotlar, <span id="a_Civildisobedience_2_qa_5">vergi ödemeyi reddetme</span>, askerden kaçma, dağıtılan hizmetleri engelleme saldırıları ve oturma eylemleri gibi bazı sivil itaatsizlik biçimleri,  <span id="a_Civildisobedience_2_qa_0">bir sistemin işlemesini</span> daha da zorlaştırır. Bu yönüyle <span id="a_Civildisobedience_2_qa_4">zorlayıcı</span> olarak kabul edilebilirler. Brownlee, "sivil itaatsizlikler, ahlaki diyaloglarda bulunmak gibi dürüst amaçlarla zor kullanmaya mecbur kalsalar da sorunlarını masaya yatırabilmek için <span id="a_Civildisobedience_2_qa_3">sınırlı miktarda zor kullanmayı</span> gerekli bulabilirler" demiştir. Plowshares örgütü, GCSB Waihopai'yi <span id="a_Civildisobedience_2_qa_1">kapılarına kilit vurarak</span> ve <span id="a_Civildisobedience_2_qa_2">iki uydu antenini kaplayan geniş kubbelerden birini boşaltmak için orak kullanarak</span> geçici olarak kapattı.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Civildisobedience_2_qa_0','#a_Civildisobedience_2_qa_1','#a_Civildisobedience_2_qa_2','#a_Civildisobedience_2_qa_3','#a_Civildisobedience_2_qa_4','#a_Civildisobedience_2_qa_5','#a_Civildisobedience_2_qa_6','#a_Civildisobedience_2_qa_7','#a_Civildisobedience_2_qa_8'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Civildisobedience_2_1280_720.png';
a.click();});}},data: { trial_name: "a_Civildisobedience_2"}
};
var a_Civildisobedience_2_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Boykot etme, vergi ödemeyi reddetme, oturma eylemi ve askerden kaçma eylemleri neyi zorlaştırır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Boykot etme, vergi ödemeyi reddetme, oturma eylemi ve askerden kaçma eylemleri neyi zorlaştırır?`, correct_answer: "bir sistemin işlemesini", trial_name: "a_Civildisobedience_2_qa_0"} 
};var a_Civildisobedience_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Plowshares örgütünün GCSB Waihopai'yi geçici olarak kapatmasının bir yolunu yazınız?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Plowshares örgütünün GCSB Waihopai'yi geçici olarak kapatmasının bir yolunu yazınız?`, correct_answer: "kapılarına kilit vurarak", trial_name: "a_Civildisobedience_2_qa_1"} 
};var a_Civildisobedience_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Plowshares örgütünün geçici olarak kapattığı diğer yolu yazınız?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Plowshares örgütünün geçici olarak kapattığı diğer yolu yazınız?`, correct_answer: "iki uydu antenini kaplayan geniş kubbelerden birini boşaltmak için orak kullanarak", trial_name: "a_Civildisobedience_2_qa_2"} 
};var a_Civildisobedience_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Brownlee, bazen insanların sorunlarını duyurmak için ne şekilde davrandıklarını iddia ediyor?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Brownlee, bazen insanların sorunlarını duyurmak için ne şekilde davrandıklarını iddia ediyor?`, correct_answer: "sınırlı miktarda zor kullanmayı", trial_name: "a_Civildisobedience_2_qa_3"} 
};var a_Civildisobedience_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Büyük bir grup insanın tümü bir sistemi boykot etmesi veya vergi ödememesi, ne olarak düşünülebilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Büyük bir grup insanın tümü bir sistemi boykot etmesi veya vergi ödememesi, ne olarak düşünülebilir?`, correct_answer: "zorlayıcı", trial_name: "a_Civildisobedience_2_qa_4"} 
};var a_Civildisobedience_2_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Federal hükümete karşı yapılan itaatsizlik türü nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Federal hükümete karşı yapılan itaatsizlik türü nedir?`, correct_answer: "vergi ödemeyi reddetme", trial_name: "a_Civildisobedience_2_qa_5"} 
};var a_Civildisobedience_2_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bu tür protestoların hangi yan etkisi uygunsuzdur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bu tür protestoların hangi yan etkisi uygunsuzdur?`, correct_answer: "bir sistemin işlemesini daha da zorlaştırır", trial_name: "a_Civildisobedience_2_qa_6"} 
};var a_Civildisobedience_2_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bu protestoların çoğunun amacı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bu protestoların çoğunun amacı nedir?`, correct_answer: "sorunlarını masaya yatırabilmek", trial_name: "a_Civildisobedience_2_qa_7"} 
};var a_Civildisobedience_2_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Büyük şirketleri şiddetsiz bir şekilde nasıl protesto edebilirsiniz?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Büyük şirketleri şiddetsiz bir şekilde nasıl protesto edebilirsiniz?`, correct_answer: "kapılarına kilit vurarak", trial_name: "a_Civildisobedience_2_qa_8"} 
};var a_Construction_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Construction_0_qa_0">İnşaat</span> bir yapı ya da altyapı inşa etme sürecidir. <span id="a_Construction_0_qa_1">imalat</span> genel anlamda belirlenmiş bir alıcı olmadan benzer ürünlerin seri üretimini içerirken, inşaat ise genel olarak <span id="a_Construction_0_qa_4">belirli bir müşteri</span> için konumda gerçekleşmesi yönüyle imalattan farklılaşır. Endüstri olarak inşaat, gelişmiş ülkelerin gayri safi yurt içi hasılasının <span id="a_Construction_0_qa_2">%6-9’unu</span> kapsar. İnşaat; <span id="a_Construction_0_qa_3">planlama, [alıntı gerekli] tasarım ve sermaye</span> ile başlar ve proje inşa edilip kullanıma hazır hale gelene kadar devam eder. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Bir bina veya yapı inşa etme süreci nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bir bina veya yapı inşa etme süreci nedir?`, correct_answer: "İnşaat", trial_name: "a_Construction_0_qa_0"} 
};var a_Construction_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Genel olarak belirli bir alıcı olmadan benzer ürünlerin seri üretimini içeren nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Genel olarak belirli bir alıcı olmadan benzer ürünlerin seri üretimini içeren nedir?`, correct_answer: "imalat", trial_name: "a_Construction_0_qa_1"} 
};var a_Construction_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İnşaat, gayri safi yurt içi hasılanın yüzde kaçını oluşturur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İnşaat, gayri safi yurt içi hasılanın yüzde kaçını oluşturur?`, correct_answer: "%6-9’unu", trial_name: "a_Construction_0_qa_2"} 
};var a_Construction_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İnşaat’ın meydana gelmesi için hangi üç şeye ihtiyaç vardır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İnşaat’ın meydana gelmesi için hangi üç şeye ihtiyaç vardır?`, correct_answer: "planlama, [alıntı gerekli] tasarım ve sermaye", trial_name: "a_Construction_0_qa_3"} 
};var a_Construction_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İnşaat, kim için konumda gerçekleşir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İnşaat, kim için konumda gerçekleşir?`, correct_answer: "belirli bir müşteri", trial_name: "a_Construction_0_qa_4"} 
};var a_Construction_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Construction_2_qa_2">Standart Endüstriyel Sınıflandırma ve daha yeni olan Kuzey Amerika Endüstri Sınıflandırma Sistemi</span>, inşaat yapan veya başka şekilde inşaatla ilgilenen şirketler için sınıflandırma sistemine sahiptir. Bu sektördeki şirketlerin farklılıklarını teşhiş etmek için, üç alt sektöre ayrılmıştır: <span id="a_Construction_2_qa_0">bina inşaatı, ağır büyük inşaat ve inşaat mühendisliği yapımı, alanında uzman ticari müteahhitler.</span> Aynı zamanda <span id="a_Construction_2_qa_1">yapı hizmet firmaları(örneğin mühendislik, mimarlik) ve inşaat yöneticileri</span>( <span id="a_Construction_2_qa_3">yapı projesinin tamamlanmasında direkt finansal sorumluluğu olduğunu varsaymadan yapı yönetimine dahil olan firmalar</span>)  için de kategoriler vardır.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">İnşaatın üç alt sektörü nelerdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İnşaatın üç alt sektörü nelerdir?`, correct_answer: "bina inşaatı, ağır büyük inşaat ve inşaat mühendisliği yapımı, alanında uzman ticari müteahhitler.", trial_name: "a_Construction_2_qa_0"} 
};var a_Construction_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Neler için başka kategoriler vardır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Neler için başka kategoriler vardır?`, correct_answer: "yapı hizmet firmaları(örneğin mühendislik, mimarlik) ve inşaat yöneticileri", trial_name: "a_Construction_2_qa_1"} 
};var a_Construction_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İnşaat şirketleri için sınıflandırma sistemine sahip olan nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İnşaat şirketleri için sınıflandırma sistemine sahip olan nedir?`, correct_answer: "Standart Endüstriyel Sınıflandırma ve daha yeni olan Kuzey Amerika Endüstri Sınıflandırma Sistemi", trial_name: "a_Construction_2_qa_2"} 
};var a_Construction_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İnşaat yöneticleri nelerdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İnşaat yöneticleri nelerdir?`, correct_answer: "yapı projesinin tamamlanmasında direkt finansal sorumluluğu olduğunu varsaymadan yapı yönetimine dahil olan firmalar", trial_name: "a_Construction_2_qa_3"} 
};var a_Privateschool_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Privateschool_0_qa_0">Ergänzungsschulen</span>, özel şahıslar, özel kuruluşlar veya nadiren <span id="a_Privateschool_0_qa_3">dini</span> gruplar tarafından işletilen ve devlet okullarında bulunmayan bir tür eğitim sunan ortaokul veya ortaokul sonrası (üçüncü dereceden olmayan) okullardır. Bu okulların çoğu <span id="a_Privateschool_0_qa_1">meslek</span> okullarıdır. Ancak, bu meslek okulları, Alman ikili eğitim sisteminin bir parçası  değildir. Ergänzungsschulen, hükümet düzenlemeleri dışında faaliyet gösterme özgürlüğüne  sahip ve öğrencilerinden <span id="a_Privateschool_0_qa_2">öğrenim</span> ücretlerini tahsil etmek suretiyle finanse ediliyor. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Almanya'daki özel orta öğretim okulları nasıl adlandırılır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Almanya'daki özel orta öğretim okulları nasıl adlandırılır?`, correct_answer: "Ergänzungsschulen", trial_name: "a_Privateschool_0_qa_0"} 
};var a_Privateschool_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">En çok ne tür okullar ergänzungsschulendir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `En çok ne tür okullar ergänzungsschulendir?`, correct_answer: "meslek", trial_name: "a_Privateschool_0_qa_1"} 
};var a_Privateschool_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ergänzungsschulen nasıl finanse edilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ergänzungsschulen nasıl finanse edilir?`, correct_answer: "öğrenim", trial_name: "a_Privateschool_0_qa_2"} 
};var a_Privateschool_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Özel şahıslar ve kuruluşlarla birlikte, hangi gruplar bazen ergänzungsschulen işletir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Özel şahıslar ve kuruluşlarla birlikte, hangi gruplar bazen ergänzungsschulen işletir?`, correct_answer: "dini", trial_name: "a_Privateschool_0_qa_3"} 
};var a_Privateschool_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Güney Afrika'daki en eski okullardan bazıları <span id="a_Privateschool_2_qa_4">on dokuzuncu yüzyılın</span> başlarında misyonerler tarafından kurulan özel kilise okullarıdır. Özel sektör o zamandan beri büyüdü. Irkçılığın ortadan kaldırılmasının ardından Güney Afrika’da özel eğitimi düzenleyen yasalar önemli ölçüde değişti. <span id="a_Privateschool_2_qa_1">1996</span> <span id="a_Privateschool_2_qa_0">Güney Afrika Okulları Yasası</span> iki okul kategorisini tanır: "kamu" (devlet kontrollü) ve "<span id="a_Privateschool_2_qa_2">bağımsız</span>" (<span id="a_Privateschool_2_qa_3">geleneksel özel</span> okulları ve özel olarak yönetilen okulları içeren[açıklama gerekli].)</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Hangi Güney Afrika yasası iki tür okulu tanıdı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi Güney Afrika yasası iki tür okulu tanıdı?`, correct_answer: "Güney Afrika Okulları Yasası", trial_name: "a_Privateschool_2_qa_0"} 
};var a_Privateschool_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Güney Afrika Okulları Kanunu hangi yıl geçti?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Güney Afrika Okulları Kanunu hangi yıl geçti?`, correct_answer: "1996", trial_name: "a_Privateschool_2_qa_1"} 
};var a_Privateschool_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Devlet okullarıyla birlikte, Güney Afrika Okulları Kanunu kapsamında ne tür bir okul tanındı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Devlet okullarıyla birlikte, Güney Afrika Okulları Kanunu kapsamında ne tür bir okul tanındı?`, correct_answer: "bağımsız", trial_name: "a_Privateschool_2_qa_2"} 
};var a_Privateschool_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Güney Afrika'da, özel olarak yönetilen okullarla birlikte, hangi okullar bağımsız olarak sınıflandırılır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Güney Afrika'da, özel olarak yönetilen okullarla birlikte, hangi okullar bağımsız olarak sınıflandırılır?`, correct_answer: "geleneksel özel", trial_name: "a_Privateschool_2_qa_3"} 
};var a_Privateschool_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Misyonerler hangi yüzyılda özellikle Güney Afrika'da kilise okulları kurdular?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Misyonerler hangi yüzyılda özellikle Güney Afrika'da kilise okulları kurdular?`, correct_answer: "on dokuzuncu yüzyılın", trial_name: "a_Privateschool_2_qa_4"} 
};var a_HarvardUniversity_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Üniversite Boston metropol bölgesi boyunca kampüsleri olan, <span id="a_HarvardUniversity_0_qa_3">on bir</span> ayrı akademik birim—on fakülte ve Radcliffe İleri Araştırma Enstitüsü— halinde düzenlenmiştir: 209 dönümlük (85 hektarlık) ana kampüsü, Cambridge'deki <span id="a_HarvardUniversity_0_qa_4">Harvard Yard'da</span>, Boston'ın yaklaşık 3 mil (5 km) kuzeybatısında bulunmaktadır; Harvard Stadyumu da dahil olmak üzere işletme okulu ve atletizm tesisleri, <span id="a_HarvardUniversity_0_qa_0">Boston'un</span> Allston semtindeki <span id="a_HarvardUniversity_0_qa_2">Charles Nehri'nin</span> karşısındadır ve tıp, dişhekimliği ve halk sağlığı okulları Longwood Tıp Bölgesi'ndedir. Harvard'ın <span id="a_HarvardUniversity_0_qa_1">37.6 milyar</span> dolarlık finansal desteği herhangi bir akademik kurumun en büyüğüdür.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Üniversitenin bulunduğu büyük ABD şehri nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Üniversitenin bulunduğu büyük ABD şehri nedir?`, correct_answer: "Boston'un", trial_name: "a_HarvardUniversity_0_qa_0"} 
};var a_HarvardUniversity_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Okulun bağışının büyüklüğü nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Okulun bağışının büyüklüğü nedir?`, correct_answer: "37.6 milyar", trial_name: "a_HarvardUniversity_0_qa_1"} 
};var a_HarvardUniversity_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Okulun yakınında hangi nehir bulunmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Okulun yakınında hangi nehir bulunmaktadır?`, correct_answer: "Charles Nehri'nin", trial_name: "a_HarvardUniversity_0_qa_2"} 
};var a_HarvardUniversity_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Okulu ne kadar akademik birim oluşturuyor?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Okulu ne kadar akademik birim oluşturuyor?`, correct_answer: "on bir", trial_name: "a_HarvardUniversity_0_qa_3"} 
};var a_HarvardUniversity_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ana kampüsün Cambridge'de merkezli olduğu alanın adı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ana kampüsün Cambridge'de merkezli olduğu alanın adı nedir?`, correct_answer: "Harvard Yard'da", trial_name: "a_HarvardUniversity_0_qa_4"} 
};var a_HarvardUniversity_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Harvard Business School ve Harvard Stadyumu da dahil olmak üzere üniversitenin atletizm tesislerinin çoğu, <span id="a_HarvardUniversity_1_qa_0">Allston'daki</span> Cambridge kampüsünün karşısındaki 358 dönümlük (145 hektar) kampüste yer almaktadır. <span id="a_HarvardUniversity_1_qa_1">John W. Weeks Köprüsü</span>, her iki kampüsü birbirine bağlayan Charles Nehri üzerindeki yaya köprüsüdür. Harvard Tıp Okulu, Harvard Diş Hekimliği Okulu ve Harvard Halk Sağlığı Okulu, Boston şehir merkezinin yaklaşık 3,3 mil (5.3 km) güneybatısında ve Cambridge kampüsünün 3,3 mil (5,3 km) güneyinde, <span id="a_HarvardUniversity_1_qa_2">Longwood Tıp ve Akademik Alanında</span> 21 dönümlük (8,5 hektarlık) bir kampüste konumlanmaktadır.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Harvard Stadyumu nerededir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Harvard Stadyumu nerededir?`, correct_answer: "Allston'daki", trial_name: "a_HarvardUniversity_1_qa_0"} 
};var a_HarvardUniversity_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Charles Nehri kampüsündeki bazı bölümlerine katılan köprünün adı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Charles Nehri kampüsündeki bazı bölümlerine katılan köprünün adı nedir?`, correct_answer: "John W. Weeks Köprüsü", trial_name: "a_HarvardUniversity_1_qa_1"} 
};var a_HarvardUniversity_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Harvard tıp, dişçilik ve halk sağlığı okulu nerede bulunur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Harvard tıp, dişçilik ve halk sağlığı okulu nerede bulunur?`, correct_answer: "Longwood Tıp ve Akademik Alanında", trial_name: "a_HarvardUniversity_1_qa_2"} 
};var a_HarvardUniversity_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_HarvardUniversity_2_qa_0">1980'lerin</span>, sonlarında Güney Afrika hareketinden ayrılırken, öğrenci aktivistleri Harvard Yard'da sembolik bir "gecekondu mahallesi" kurdular ve Güney Afrika Başkonsolos Yardımcısı <span id="a_HarvardUniversity_2_qa_1">Duke Kent-Brown</span> tarafından verilen  konuşmayı engellediler. Harvard Yönetim Şirketi defalarca elden çıkarmayı "işletme  giderleri finansal olarak gerçekçi olmayan kısıtlamalara tabi olmamalıdır,  deneyimsiz veya özel çıkar grupları tarafından karşılanmamalıdır” diyerek reddetti. Bununla birlikte, üniversite nihayetinde baskıya cevaben Güney  Afrika'daki varlıklarını 400 milyon dolardan <span id="a_HarvardUniversity_2_qa_2">230 milyon</span> dolara düşürdü.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Güney Afrika hareketinden yoksun bırakma ne zamandı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Güney Afrika hareketinden yoksun bırakma ne zamandı?`, correct_answer: "1980'lerin", trial_name: "a_HarvardUniversity_2_qa_0"} 
};var a_HarvardUniversity_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Harvard öğrencileri hangi Güney Afrika Konsolos Yardımcısı'nın konuşmasını ablukaya aldı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Harvard öğrencileri hangi Güney Afrika Konsolos Yardımcısı'nın konuşmasını ablukaya aldı?`, correct_answer: "Duke Kent-Brown", trial_name: "a_HarvardUniversity_2_qa_1"} 
};var a_HarvardUniversity_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Harvard yönetimi, baskıya cevap olarak Güney Afrika'daki varlıklarını ne kadar düşürdü?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Harvard yönetimi, baskıya cevap olarak Güney Afrika'daki varlıklarını ne kadar düşürdü?`, correct_answer: "230 milyon", trial_name: "a_HarvardUniversity_2_qa_2"} 
};var a_HarvardUniversity_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Harvard'a lisans kabulü, Carnegie Vakfı tarafından "daha seçici, daha düşük geçiş" olarak tanımlanır. Harvard Koleji 2019 sınıfı için başvuranların <span id="a_HarvardUniversity_3_qa_0">%5,3'ünü</span>  kabul etmiştir, tüm ulusal üniversiteler arasında rekor düşük ve ikinci en düşük kabul oranı. Harvard College, seçmeli üniversitelere başvuran <span id="a_HarvardUniversity_3_qa_2">düşük gelirli ve az temsil edilen azınlık başvuru sahiplerinin dezavantajı olduğuna inanıldığından,</span> <span id="a_HarvardUniversity_3_qa_1">2007</span> yılında erken kabul programına son verdi, fakat <span id="a_HarvardUniversity_3_qa_3">2016</span> sınıfı için bir Erken Eylem programı yeniden tanıtıldı.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">2019 sınıfı için başvuru kabul oranı nedir? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `2019 sınıfı için başvuru kabul oranı nedir? `, correct_answer: "%5,3'ünü", trial_name: "a_HarvardUniversity_3_qa_0"} 
};var a_HarvardUniversity_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Harvard hangi yıl erken kabul programına son verdi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Harvard hangi yıl erken kabul programına son verdi?`, correct_answer: "2007", trial_name: "a_HarvardUniversity_3_qa_1"} 
};var a_HarvardUniversity_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Harvard neden erken kabul programına son verdi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Harvard neden erken kabul programına son verdi?`, correct_answer: "düşük gelirli ve az temsil edilen azınlık başvuru sahiplerinin dezavantajı olduğuna inanıldığından,", trial_name: "a_HarvardUniversity_3_qa_2"} 
};var a_HarvardUniversity_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi yılda erken bir kabul programı yeniden başlatıldı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi yılda erken bir kabul programı yeniden başlatıldı?`, correct_answer: "2016", trial_name: "a_HarvardUniversity_3_qa_3"} 
};var a_JacksonvilleFlorida_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_JacksonvilleFlorida_0_qa_0">Jacksonville</span>, nüfusa göre, ABD'de Florida eyaletinde en büyük şehirdir ve yüzölçümü olarak Bitişik ABD'deki bölgelere göre en büyük şehirdir. <span id="a_JacksonvilleFlorida_0_qa_4">1968</span> yılında şehir yönetiminin birleştiği <span id="a_JacksonvilleFlorida_0_qa_3">Duval Vilayetinin</span>, vilayet merkezidir. Konsolidasyon, Jacksonville'e büyük boyutunu verdi ve büyükşehir nüfusunun çoğunu şehir sınırları içerisine yerleştirdi; 2014 yılında tahmini 853.382 nüfusla, Florida ve Güneydoğu’daki en kalabalık şehir ve Birleşik Devletler'deki en kalabalık <span id="a_JacksonvilleFlorida_0_qa_2">12.</span> kenttir. Jacksonville, 2010 yılında <span id="a_JacksonvilleFlorida_0_qa_1">1,345,596</span> nüfusuyla Jacksonville Büyükşehir bölgesindeki başlıca şehirdir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Hangi Florida şehri en çok nüfusa sahip?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi Florida şehri en çok nüfusa sahip?`, correct_answer: "Jacksonville", trial_name: "a_JacksonvilleFlorida_0_qa_0"} 
};var a_JacksonvilleFlorida_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">2010 itibariyle Jacksonville şehrinin nüfusu ne kadardı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `2010 itibariyle Jacksonville şehrinin nüfusu ne kadardı?`, correct_answer: "1,345,596", trial_name: "a_JacksonvilleFlorida_0_qa_1"} 
};var a_JacksonvilleFlorida_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Sadece nüfusa dayanarak, Jacksonville'nin ABD'deki sıralaması nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Sadece nüfusa dayanarak, Jacksonville'nin ABD'deki sıralaması nedir?`, correct_answer: "12.", trial_name: "a_JacksonvilleFlorida_0_qa_2"} 
};var a_JacksonvilleFlorida_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Jacksonville hangi vilayete bağlı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Jacksonville hangi vilayete bağlı?`, correct_answer: "Duval Vilayetinin", trial_name: "a_JacksonvilleFlorida_0_qa_3"} 
};var a_JacksonvilleFlorida_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Konsolidasyon hangi yıl Jacksonville'in Duval Vilayetinin bir parçası olmasına neden oldu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Konsolidasyon hangi yıl Jacksonville'in Duval Vilayetinin bir parçası olmasına neden oldu?`, correct_answer: "1968", trial_name: "a_JacksonvilleFlorida_0_qa_4"} 
};var a_Economicinequality_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Gelir eşitsizliği ve büyüme üzerine yapılan çalışmalar, bazen ekonomik gelişme ile birlikte,  eşitsizliğin <span id="a_Economicinequality_2_qa_1">önce arttığını</span>, sonra azaldığını ifade eden <span id="a_Economicinequality_2_qa_0">Kuznets'in eğri hipotezini</span> doğrulayan kanıtlar buldu. <span id="a_Economicinequality_2_qa_3">Ekonomist</span> <span id="a_Economicinequality_2_qa_2">Thomas Piketty</span>, 1914'ten 1945'e kadar <span id="a_Economicinequality_2_qa_4">savaşların ve “şiddetli ekonomik ve politik şokların”</span> eşitsizliği azalttığını iddia ederek bu görüşe meydan okuyor. Dahası, Piketty, uzun vadede ekonomik büyümenin dengelenmesi üzerinde durmasıyla "büyülü" Kuznets eğrisi hipotezinin 1970'lerden bu yana gelişmiş dünyadaki ekonomik eşitsizlikteki önemli artışı hesaba katamayacağını savunuyor.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Gelir eşitsizliği ile ilgili çalışmalar bazen hangi doğrulayan kanıtları buldu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Gelir eşitsizliği ile ilgili çalışmalar bazen hangi doğrulayan kanıtları buldu?`, correct_answer: "Kuznets'in eğri hipotezini", trial_name: "a_Economicinequality_2_qa_0"} 
};var a_Economicinequality_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kuznets eğrisi, ekonomik gelişme ile neyden sonra eşitsizlik azalacak diyor?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kuznets eğrisi, ekonomik gelişme ile neyden sonra eşitsizlik azalacak diyor?`, correct_answer: "önce arttığını", trial_name: "a_Economicinequality_2_qa_1"} 
};var a_Economicinequality_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kuznets eğrisi hipotezi kavramına kim meydan okuyor?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kuznets eğrisi hipotezi kavramına kim meydan okuyor?`, correct_answer: "Thomas Piketty", trial_name: "a_Economicinequality_2_qa_2"} 
};var a_Economicinequality_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Thomas Piketty'nin işi nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Thomas Piketty'nin işi nedir?`, correct_answer: "Ekonomist", trial_name: "a_Economicinequality_2_qa_3"} 
};var a_Economicinequality_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Piketty, 1914-1945 arasındaki eşitsizliği azaltmada en büyük etkenlerin neler olduğunu düşünüyor?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Piketty, 1914-1945 arasındaki eşitsizliği azaltmada en büyük etkenlerin neler olduğunu düşünüyor?`, correct_answer: "savaşların ve “şiddetli ekonomik ve politik şokların”", trial_name: "a_Economicinequality_2_qa_4"} 
};var a_DoctorWho_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">İlk 15 yıl boyunca en sık müzikal katkı yapan kişi, aynı zamanda Blake's 7 için tema ve özgü müziğiyle ve akıldan çıkmayan tema müzikleri ve 1970'lerin Yarının İnsanları'ın orjinal versiyonunun skoru ile tanınan <span id="a_DoctorWho_3_qa_0">Dudley Simpson'dı</span>. Simpson'ın ilk Doktor Kim Puanı <span id="a_DoctorWho_3_qa_1">Devlerin Gezegeni</span> (1964)'tü ve <span id="a_DoctorWho_3_qa_2">1960'lı ve 1970'li</span>, yılların Jon Pertwee/Tom Baker dönemlerinin hikayelerinin çoğunu içeren, <span id="a_DoctorWho_3_qa_3">Nimon’un Boynuzları</span> ile biten (1979) birçok maceraları için müzik yazmaya devam etti. Ayrıca <span id="a_DoctorWho_3_qa_4">The Talons of Weng-Chiang'da</span> bir minyatür görünümü (Müzik salonu şefi olarak) yaptı.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Gösterinin ilk 15 yılında Doktor Kim'e en çok müzikal katkı yapan kimdi? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Gösterinin ilk 15 yılında Doktor Kim'e en çok müzikal katkı yapan kimdi? `, correct_answer: "Dudley Simpson'dı", trial_name: "a_DoctorWho_3_qa_0"} 
};var a_DoctorWho_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Simpson'ın ilk Doktor Kim Skoru bölümünün adı neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Simpson'ın ilk Doktor Kim Skoru bölümünün adı neydi?`, correct_answer: "Devlerin Gezegeni", trial_name: "a_DoctorWho_3_qa_1"} 
};var a_DoctorWho_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi yıllarda, Dudley Simpson, Doctor Who'ya katkıda bulunmak konusunda en aktifti? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi yıllarda, Dudley Simpson, Doctor Who'ya katkıda bulunmak konusunda en aktifti? `, correct_answer: "1960'lı ve 1970'li", trial_name: "a_DoctorWho_3_qa_2"} 
};var a_DoctorWho_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Dudley Simpson'ın müzik yazdığı son Doktor Kim hangisiydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Dudley Simpson'ın müzik yazdığı son Doktor Kim hangisiydi?`, correct_answer: "Nimon’un Boynuzları", trial_name: "a_DoctorWho_3_qa_3"} 
};var a_DoctorWho_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Dudley Simpson hangi bölümde müzik şefi olarak çaldı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Dudley Simpson hangi bölümde müzik şefi olarak çaldı?`, correct_answer: "The Talons of Weng-Chiang'da", trial_name: "a_DoctorWho_3_qa_4"} 
};var a_DoctorWho_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Doktor Kim sayısız kez sahneye çıkmıştır. 1970'lerin başında, <span id="a_DoctorWho_4_qa_0">Trevor Martin</span>, <span id="a_DoctorWho_4_qa_3">Seven Keys to Doomsday'da Dalekler ve Doktor Kim'de</span> rol aldı. 1980'lerin sonunda, Jon Pertwee ve Colin Baker, her ikisi de doktoru <span id="a_DoctorWho_4_qa_1">Doktor Kim - Son Macera</span> adlı oyun sırasında farklı zamanlarda oynadılar. İki performans için, Pertwee hasta iken <span id="a_DoctorWho_4_qa_4">David Banks</span> (Daha çok siberadamı oynamasıyla bilinir) Doktoru oynadı. Terry Nation, 1960'ların sonlarına takılmış bir sahne oyunu, ama doktor olmadan, olan <span id="a_DoctorWho_4_qa_2">Daleklerin Laneti'ni</span> yazarken, diğer orijinal oyunlar, Doktor'u oynayan diğer oyuncularla amatör yapımlar olarak sahnelendi.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Doktor Kim'i 70lerde sahnede kim oynadı?   `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Doktor Kim'i 70lerde sahnede kim oynadı?   `, correct_answer: "Trevor Martin", trial_name: "a_DoctorWho_4_qa_0"} 
};var a_DoctorWho_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Doktor Kim'i 1980'lerden oynayan kimdi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Doktor Kim'i 1980'lerden oynayan kimdi?`, correct_answer: "Doktor Kim - Son Macera", trial_name: "a_DoctorWho_4_qa_1"} 
};var a_DoctorWho_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi Doktor Kim İçinde Doktor olmadan yazılmıştır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi Doktor Kim İçinde Doktor olmadan yazılmıştır?`, correct_answer: "Daleklerin Laneti'ni", trial_name: "a_DoctorWho_4_qa_2"} 
};var a_DoctorWho_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">1970'lerde oynanan oyunun adı neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1970'lerde oynanan oyunun adı neydi?`, correct_answer: "Seven Keys to Doomsday'da Dalekler ve Doktor Kim'de", trial_name: "a_DoctorWho_4_qa_3"} 
};var a_DoctorWho_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi oyuncu, asıl aktörün hastalığından dolayı Doktor Kim'in yerine geçti?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi oyuncu, asıl aktörün hastalığından dolayı Doktor Kim'in yerine geçti?`, correct_answer: "David Banks", trial_name: "a_DoctorWho_4_qa_4"} 
};var a_UniversityofChicago_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">İş yaşamında ileri gelen mezunlar arasında Microsoft CEOsu <span id="a_UniversityofChicago_3_qa_0">Satya Nadella</span>, Oracle kurucusu ve Amerika'nın en zengin üçüncü adamı <span id="a_UniversityofChicago_3_qa_1"><span id="a_UniversityofChicago_3_qa_2">Larry Ellison</span></span>, Goldman Sachs ve MF Global CEOsu ve aynı zamanda eski New Jersey Valisi <span id="a_UniversityofChicago_3_qa_3">Jon Corzine</span>, Mckinsey & Company kurucusu ve ilk yönetim muhasebesi ders kitabının yazarı <span id="a_UniversityofChicago_3_qa_4">James O. Mckinsey</span>, Arley D. Cathey, Bloomberg L.P. CEOsu Daniel Doctoroff, Credit Suisse CEOsu Brady Dougan, Morningstar, A.Ş. kurucusu ve CEOsu Joe Mansueto, Chicago Cubs sahibi ve başkanı Thomas S. Ricketts ve NBA delegesi Adam Silver yer almaktadır.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Hangi Microsoft CEOsu aynı zamanda Chicago Üniversitesi'nin bir mezunudur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi Microsoft CEOsu aynı zamanda Chicago Üniversitesi'nin bir mezunudur?`, correct_answer: "Satya Nadella", trial_name: "a_UniversityofChicago_3_qa_0"} 
};var a_UniversityofChicago_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Oracle'ın kurucusu kimdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Oracle'ın kurucusu kimdir?`, correct_answer: "Larry Ellison", trial_name: "a_UniversityofChicago_3_qa_1"} 
};var a_UniversityofChicago_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Amerika'nın en zengin üçüncü adamı kimdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Amerika'nın en zengin üçüncü adamı kimdir?`, correct_answer: "Larry Ellison", trial_name: "a_UniversityofChicago_3_qa_2"} 
};var a_UniversityofChicago_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi Goldman Sachs CEOsu aynı zamanda Chicago Üniversitesi'nin bir mezunudur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi Goldman Sachs CEOsu aynı zamanda Chicago Üniversitesi'nin bir mezunudur?`, correct_answer: "Jon Corzine", trial_name: "a_UniversityofChicago_3_qa_3"} 
};var a_UniversityofChicago_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">McKinsey & Company kurucusu kimdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `McKinsey & Company kurucusu kimdir?`, correct_answer: "James O. Mckinsey", trial_name: "a_UniversityofChicago_3_qa_4"} 
};var a_Yuandynasty_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Tarihçi <span id="a_Yuandynasty_4_qa_0">Frederick W. Mote</span> bu sistem için "sosyal sınıflar" teriminin kullanılmasının yanıltıcı olduğunu ve dört sınıflı sistemdeki insanların konumlarının onların gerçek sosyal gücü ve zenginliğinin göstergesi değil, yalnızca geleneksel ve yasal olarak yetkilendirildikleri, kendilerine vakfedilmiş "<span id="a_Yuandynasty_4_qa_1">ayrıcalık derecesi</span>" olduğunu, yani sınıfı içerisinde bir kişinin konumunun, o kişinin konumunun bir garantisi olmadığını, çünkü <span id="a_Yuandynasty_4_qa_3">yokluk içinde yaşayan ve kötü davranılan</span> Moğol ve Semu'lardan daha az sayıda zengin Moğol ve Semu varken, <span id="a_Yuandynasty_4_qa_2">zengin ve sosyal konumu iyi</span> Çinlilerin var olduğunu yazmıştır.  </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Yuan'nın sosyal sınıf sisteminin sosyal sınıf olarak adlandırılmaması gerektiğini kim düşünmüştür?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Yuan'nın sosyal sınıf sisteminin sosyal sınıf olarak adlandırılmaması gerektiğini kim düşünmüştür?`, correct_answer: "Frederick W. Mote", trial_name: "a_Yuandynasty_4_qa_0"} 
};var a_Yuandynasty_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Mote, Yuan sınıf sisteminin gerçekte neyi temsil ettiğini düşünmüştür?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Mote, Yuan sınıf sisteminin gerçekte neyi temsil ettiğini düşünmüştür?`, correct_answer: "ayrıcalık derecesi", trial_name: "a_Yuandynasty_4_qa_1"} 
};var a_Yuandynasty_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi beklenmedik durumda birçok Çinli vardı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi beklenmedik durumda birçok Çinli vardı?`, correct_answer: "zengin ve sosyal konumu iyi", trial_name: "a_Yuandynasty_4_qa_2"} 
};var a_Yuandynasty_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi beklenmedik durumda birçok Moğol vardı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi beklenmedik durumda birçok Moğol vardı?`, correct_answer: "yokluk içinde yaşayan ve kötü davranılan", trial_name: "a_Yuandynasty_4_qa_3"} 
};var a_Kenya_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Çeşitli ülkelerde <span id="a_Kenya_0_qa_1">kamu sektörü yolsuzluğu</span> yaygınlığını ölçmeye çalışan bir ölçü olan Uluslararası Şeffaflık Örgütü'nün Yolsuzluk Algısı Endeksi'nde (YAE) Kenya <span id="a_Kenya_0_qa_0">düşük</span> sıralardadır. Ülke 2012'de, 27/100 puanla, YAE'de yer alan toplam 176 ülke içinde <span id="a_Kenya_0_qa_2">139.</span> sırada yer almıştır. Bununla birlikte Kenya hükümeti tarafından yolsuzluğu frenlemek adına birçok kayda değer gelişmeler mevcuttur, örneğin <span id="a_Kenya_0_qa_3">yeni ve bağımsız bir Etik ve Anti-Yolsuzluk Komisyonu kurulması</span> gibi.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Kenya YAE ölçeğinde nerede yer alır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kenya YAE ölçeğinde nerede yer alır?`, correct_answer: "düşük", trial_name: "a_Kenya_0_qa_0"} 
};var a_Kenya_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">YAE neyi ölçer? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `YAE neyi ölçer? `, correct_answer: "kamu sektörü yolsuzluğu", trial_name: "a_Kenya_0_qa_1"} 
};var a_Kenya_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kenya 2012'de ölçeğin neresinde yer almaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kenya 2012'de ölçeğin neresinde yer almaktadır?`, correct_answer: "139.", trial_name: "a_Kenya_0_qa_2"} 
};var a_Kenya_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kenya yolsuzluğu nasıl frenler?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kenya yolsuzluğu nasıl frenler?`, correct_answer: "yeni ve bağımsız bir Etik ve Anti-Yolsuzluk Komisyonu kurulması", trial_name: "a_Kenya_0_qa_3"} 
};var a_Kenya_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Kenya_1_qa_0">28 Şubat 2008</span> tarihinde Kibaki ve Odinga, Kibaki'nin Kenya'nın ikinci <span id="a_Kenya_1_qa_1">Başbakanı</span> olacağı bir koalisyon hükümeti kurulması için bir anlaşma imzaladı. Teklife göre, başkan kabine bakanlarını <span id="a_Kenya_1_qa_3">her partinin meclisteki güçlerine</span> göre <span id="a_Kenya_1_qa_2">PNU ve ODM kamplarının</span> her ikisinden de atar.  Anlaşma, kabinenin bir başkan yardımcısı ile iki Başbakan yardımcısı içermesini şart koşuyordu. Tartışmalardan sonra anlaşma Meclisten geçti ve koalisyon <span id="a_Kenya_1_qa_4">mevcut Meclisin sonuna kadar veya partilerden biri daha öncesinde tekliften çekilene kadar</span> devam edecek.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Hükümet kurulması konusunda Kibaki ve Odinga ne zaman bir anlaşma imzaladı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hükümet kurulması konusunda Kibaki ve Odinga ne zaman bir anlaşma imzaladı?`, correct_answer: "28 Şubat 2008", trial_name: "a_Kenya_1_qa_0"} 
};var a_Kenya_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Odinga'nın hükümetteki rolü ne olacaktı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Odinga'nın hükümetteki rolü ne olacaktı?`, correct_answer: "Başbakanı", trial_name: "a_Kenya_1_qa_1"} 
};var a_Kenya_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Başkan kabine üyelerini nereden atadı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Başkan kabine üyelerini nereden atadı?`, correct_answer: "PNU ve ODM kamplarının", trial_name: "a_Kenya_1_qa_2"} 
};var a_Kenya_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Her kamptan kaç tanesinin atanacağı nasıl belirlendi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Her kamptan kaç tanesinin atanacağı nasıl belirlendi?`, correct_answer: "her partinin meclisteki güçlerine", trial_name: "a_Kenya_1_qa_3"} 
};var a_Kenya_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Koalisyon ne zamana kadar sürecek?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Koalisyon ne zamana kadar sürecek?`, correct_answer: "mevcut Meclisin sonuna kadar veya partilerden biri daha öncesinde tekliften çekilene kadar", trial_name: "a_Kenya_1_qa_4"} 
};var a_Kenya_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">2007 seçimi sonrasıyla ilgili hem Başkan Kenyatta hem de Başkan Yardımcısı William Ruto için <span id="a_Kenya_2_qa_0">Uluslararası Ceza Mahkemesi dava tarihleri</span> 2013'de iken, 2013 ortası Afrika turu sırasında <span id="a_Kenya_2_qa_1">ABD Başkanı Barack Obama</span> ülkeyi ziyaret etmemeyi tercih etti. Sonrasında yazın, Kenyatta başkan olarak ABD'yi ziyaret etmemişken, Rusya'ya bir uğradıktan sonra Başkan Xi Jinping'in davetiyle <span id="a_Kenya_2_qa_2">Çin'i</span> ziyaret etti. <span id="a_Kenya_2_qa_3">Temmuz 2015</span> tarihinde, görevdeyken ülkeyi ziyaret eden ilk Amerikan başkanı olarak Obama Kenya'yı ziyaret etti. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">2007 seçiminin sonucu neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `2007 seçiminin sonucu neydi?`, correct_answer: "Uluslararası Ceza Mahkemesi dava tarihleri", trial_name: "a_Kenya_2_qa_0"} 
};var a_Kenya_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ülkeyi 2013'de kim ziyaret etmemeyi tercih etti?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ülkeyi 2013'de kim ziyaret etmemeyi tercih etti?`, correct_answer: "ABD Başkanı Barack Obama", trial_name: "a_Kenya_2_qa_1"} 
};var a_Kenya_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Başkanın davetiyle Kenyatta nereyi ziyaret etti?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Başkanın davetiyle Kenyatta nereyi ziyaret etti?`, correct_answer: "Çin'i", trial_name: "a_Kenya_2_qa_2"} 
};var a_Kenya_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Obama sonunda ne zaman Kenya'yı ziyaret etti?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Obama sonunda ne zaman Kenya'yı ziyaret etti?`, correct_answer: "Temmuz 2015", trial_name: "a_Kenya_2_qa_3"} 
};var a_Kenya_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Çocuk işçiliği Kenya'da yaygın. Çalışan çocukların çoğu <span id="a_Kenya_3_qa_0">tarım</span> alanında aktif. UNICEF'in 2016 tahminlerine göre, Malindi, Mombasa, Kilifi ve Diani kıyı bölgelerindeki kız çocukların <span id="a_Kenya_3_qa_1">%30'a yakını</span> fuhuşa maruz kalmakta. Kenya'daki fahişelerin çoğu <span id="a_Kenya_3_qa_2">9–18</span> yaş arasında. Cinsiyet ve Çocuk İşleri Bakanlığı, 2009'da 400 çocuk koruma memurunu işe aldı. Çocuk işçiliğinin sebepleri arasında <span id="a_Kenya_3_qa_3">fakirlik, eğitime erişimin eksik olması ve zayıf devlet kurumları</span> yer alıyor. Kenya, sanayide işgücü denetlemesiyle ilgili 81 Numaralı Sözleşmeyi ve tarımda işgücü denetlemesiyle ilgili 129 Numaralı Sözleşmeyi kabul etmiştir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Çalışan çocukların çoğu nerede çalışmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Çalışan çocukların çoğu nerede çalışmaktadır?`, correct_answer: "tarım", trial_name: "a_Kenya_3_qa_0"} 
};var a_Kenya_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kenya'nın kıyı bölgelerinde kız çocukların yüzde kaçı fuhuş yapmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kenya'nın kıyı bölgelerinde kız çocukların yüzde kaçı fuhuş yapmaktadır?`, correct_answer: "%30'a yakını", trial_name: "a_Kenya_3_qa_1"} 
};var a_Kenya_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kenya'daki fahişelerin çoğunun yaş aralığı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kenya'daki fahişelerin çoğunun yaş aralığı nedir?`, correct_answer: "9–18", trial_name: "a_Kenya_3_qa_2"} 
};var a_Kenya_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Çocuk işçiliğinin bazı sebepleri nelerdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Çocuk işçiliğinin bazı sebepleri nelerdir?`, correct_answer: "fakirlik, eğitime erişimin eksik olması ve zayıf devlet kurumları", trial_name: "a_Kenya_3_qa_3"} 
};var a_IntergovernmentalPanelonClimateChange_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_IntergovernmentalPanelonClimateChange_0_qa_1">Koreli</span> ekonomist <span id="a_IntergovernmentalPanelonClimateChange_0_qa_0">Hoesung Lee</span>, yeni IPCC Büro seçimlerini takiben 8 Ekim 2015'den beri IPCC başkanıdır. Bu seçimden önce IPCC, Rajendra K. Pachauri'nin <span id="a_IntergovernmentalPanelonClimateChange_0_qa_4">Şubat 2015</span> tarihinde istifasından sonra kararlaştırılmış vekil Başkan olan IPCC başkan yardımcısı <span id="a_IntergovernmentalPanelonClimateChange_0_qa_2">İsmail El Gizouli</span> tarafından yönetiliyordu. Önceki başkanlar, Mayıs 2002'de seçilen Rajendra K. Pachauri; 1997'de seçilen Robert Watson ve 1988'de seçilen <span id="a_IntergovernmentalPanelonClimateChange_0_qa_3">Bert Bolin</span> idi. Başkan, başkan yardımcıları, çalışma grubu eş başkanları ve bir sekreterin olduğu seçilmiş bir büro tarafından desteklenir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">IPCC başkanı kimdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `IPCC başkanı kimdir?`, correct_answer: "Hoesung Lee", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_0"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hoesung Lee hangi millettendir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hoesung Lee hangi millettendir?`, correct_answer: "Koreli", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_1"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">IPCC başkan yardımcısı kimdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `IPCC başkan yardımcısı kimdir?`, correct_answer: "İsmail El Gizouli", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_2"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">IPCC'nin ilk başkanı kimdi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `IPCC'nin ilk başkanı kimdi?`, correct_answer: "Bert Bolin", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_3"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Pachauri IPCC başkanlığından ne zaman istifa etmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Pachauri IPCC başkanlığından ne zaman istifa etmiştir?`, correct_answer: "Şubat 2015", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_4"} 
};var a_IntergovernmentalPanelonClimateChange_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Bu tahmin politika üreticileri için olan son özete dahil edilmedi. IPCC o zamandan beri <span id="a_IntergovernmentalPanelonClimateChange_2_qa_0">tarihin</span> yanlış olduğunu kabul ederken aynı zamanda da son özetteki sonucun dayanıklı olduğunu tekrar teyit etti. <span id="a_IntergovernmentalPanelonClimateChange_2_qa_1">"Oturmuş IPCC prosedürlerinin bu örnekte kötü uygulanışı"</span> için pişmanlıklarını ifade ettiler. 2035 tarihi <span id="a_IntergovernmentalPanelonClimateChange_2_qa_2">WWF raporu</span> üzerinden IPCC tarafından doğru şekilde alıntılandı ancak WWF kendi kaynağını, bir ICSI raporu olan <span id="a_IntergovernmentalPanelonClimateChange_2_qa_3">"Küresel ve Bölgesel Ölçekte geçmişte ve günümüzde Kar ve Buz Farklılıkları"</span> raporunu yanlış şekilde alıntılamıştı.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">IPCC neyin hatalı olduğunu söyledi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `IPCC neyin hatalı olduğunu söyledi?`, correct_answer: "tarihin", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_0"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">IPCC ne için özür diledi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `IPCC ne için özür diledi?`, correct_answer: "Oturmuş IPCC prosedürlerinin bu örnekte kötü uygulanışı", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_1"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hatanın kaynağı neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hatanın kaynağı neydi?`, correct_answer: "WWF raporu", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_2"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi rapor doğru tarihi içeriyordu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi rapor doğru tarihi içeriyordu?`, correct_answer: "Küresel ve Bölgesel Ölçekte geçmişte ve günümüzde Kar ve Buz Farklılıkları", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_3"} 
};var a_Chloroplast_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Siyanobakteri bir ataya izi sürülebilen bu kloroplastlar birincil plastidler olarak bilinir (bu bağlamda "plastid" <span id="a_Chloroplast_1_qa_0">kloroplast</span> ile neredeyse aynı şey demektir). Tüm birincil kloroplastlar, <span id="a_Chloroplast_1_qa_1">üç</span> kloroplast soyundan birine aittir—glokofit kloroplast soyu, rodofit, veya <span id="a_Chloroplast_1_qa_2">kırmızı alg kloroplast soyu</span>, veya kloroplastidan, veya <span id="a_Chloroplast_1_qa_3">yeşil kloroplast soyu</span>. İkinci ikili en büyükleridir ve <span id="a_Chloroplast_1_qa_4">yeşil kloroplast soyu</span> kara bitkilerini içeren soydur.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">'Plastid' ne anlama gelmektedir? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `'Plastid' ne anlama gelmektedir? `, correct_answer: "kloroplast", trial_name: "a_Chloroplast_1_qa_0"} 
};var a_Chloroplast_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kaç tane kloroplast soyu vardır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kaç tane kloroplast soyu vardır?`, correct_answer: "üç", trial_name: "a_Chloroplast_1_qa_1"} 
};var a_Chloroplast_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Rodofit ne anlama gelmektedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Rodofit ne anlama gelmektedir?`, correct_answer: "kırmızı alg kloroplast soyu", trial_name: "a_Chloroplast_1_qa_2"} 
};var a_Chloroplast_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kloroplastidan ne anlama gelmektedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kloroplastidan ne anlama gelmektedir?`, correct_answer: "yeşil kloroplast soyu", trial_name: "a_Chloroplast_1_qa_3"} 
};var a_Chloroplast_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi soy kara bitkilerini içermektedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi soy kara bitkilerini içermektedir?`, correct_answer: "yeşil kloroplast soyu", trial_name: "a_Chloroplast_1_qa_4"} 
};var a_Chloroplast_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Kloroplastların, sıklıkla <span id="a_Chloroplast_2_qa_0">ctDNA veya cp DNA</span> olarak kısaltılan kendi DNA'ları vardır. Bu aynı zamanda <span id="a_Chloroplast_2_qa_1">plastom</span> olarak da bilinir. Varlığı ilk olarak <span id="a_Chloroplast_2_qa_2">1962</span> yılında kanıtlanmıştır ve <span id="a_Chloroplast_2_qa_4">iki Japon araştırma ekibinin</span> ciğerotu ve tütünün kloroplast DNA'sını dizilediği <span id="a_Chloroplast_2_qa_3">1986</span> yılında ilk defa dizilenmiştir. O zamandan beri farklı türlerden yüzlerce kloroplast DNA'sı dizilenmiştir ama bunların çoğu kara bitkileri ve yeşil alglere aittir—glokofitler, kırmızı algler ve diğer alg grupları son derece az temsil edilmektedir ve "tipik" kloroplast DNA yapısı ve içeriği ile ilgili görüşlerde potansiyel olarak bir miktar yanlılık ortaya çıkarmaktadır. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Kloroplast DNA'sı ne olarak kısaltılır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kloroplast DNA'sı ne olarak kısaltılır?`, correct_answer: "ctDNA veya cp DNA", trial_name: "a_Chloroplast_2_qa_0"} 
};var a_Chloroplast_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Kloroplast DNA'sının eşanlamlısı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kloroplast DNA'sının eşanlamlısı nedir?`, correct_answer: "plastom", trial_name: "a_Chloroplast_2_qa_1"} 
};var a_Chloroplast_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Plastom ne zaman keşfedilmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Plastom ne zaman keşfedilmiştir?`, correct_answer: "1962", trial_name: "a_Chloroplast_2_qa_2"} 
};var a_Chloroplast_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İlk plastom ne zaman dizilenmiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İlk plastom ne zaman dizilenmiştir?`, correct_answer: "1986", trial_name: "a_Chloroplast_2_qa_3"} 
};var a_Chloroplast_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İlk plastomu kim dizilemiştir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İlk plastomu kim dizilemiştir?`, correct_answer: "iki Japon araştırma ekibinin", trial_name: "a_Chloroplast_2_qa_4"} 
};var a_Chloroplast_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Birçok kromalveolat soyundaki kayıp kloroplastları <span id="a_Chloroplast_3_qa_0">endosimbiyotik gen transferi</span> yoluyla bilebiliyoruz. Bir kloroplast sonunda kaybolsa bile, eski konağın çekirdeğine bağışladığı genler varlığını sürdürür ve <span id="a_Chloroplast_3_qa_1">kayıp kloroplastın varlığı</span> konusunda kanıt sağlar. Örneğin, diatomlar (bir heterokontofit) şu an <span id="a_Chloroplast_3_qa_2">kırmızı alg kökenli kloroplast</span> sahibiyken, diatom çekirdeğindeki birçok yeşil alg geni diatom atasının (muhtemelen tüm kromalveolatların da atası) bir noktada <span id="a_Chloroplast_3_qa_3">yeşil alg kökenli kloroplast</span> sahibi olduğu ve yerine sonradan kırmızı kloroplastın geçtiği konusunda kanıt sağlar. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Bize kayıp kloroplastları ne gösterir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bize kayıp kloroplastları ne gösterir?`, correct_answer: "endosimbiyotik gen transferi", trial_name: "a_Chloroplast_3_qa_0"} 
};var a_Chloroplast_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bağışlanan genler neye kanıt sağlar?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bağışlanan genler neye kanıt sağlar?`, correct_answer: "kayıp kloroplastın varlığı", trial_name: "a_Chloroplast_3_qa_1"} 
};var a_Chloroplast_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Diatomlar ne çeşit bir kloroplasta sahiptir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Diatomlar ne çeşit bir kloroplasta sahiptir?`, correct_answer: "kırmızı alg kökenli kloroplast", trial_name: "a_Chloroplast_3_qa_2"} 
};var a_Chloroplast_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Diatomlar ne çeşit bir kloroplasta sahipti ancak kaybetti?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Diatomlar ne çeşit bir kloroplasta sahipti ancak kaybetti?`, correct_answer: "yeşil alg kökenli kloroplast", trial_name: "a_Chloroplast_3_qa_3"} 
};var a_Chloroplast_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Dış ve iç kloroplast zarları ile ilgili bazı yaygın yanlış kanılar bulunmaktadır. Kloroplastların <span id="a_Chloroplast_4_qa_0">çift bir zarla çevrelendiği</span> gerçeği sıklıkla onların endosimbiyotik siyanobakterinin soyundan geldiğinin kanıtı olarak gösterilir. Bu durum sıklıkla dış kloroplast zarının <span id="a_Chloroplast_4_qa_1">ata siyanobakteriyi çevrelemek amacıyla bir vezikül oluşturacak şekilde katlanan konak hücre zarının ürünü</span> anlamına geldiği şeklinde yorumlanır—ki bu yanlıştır—iki kloroplast zarı da siyanobakterinin orijinal çift zarıyla <span id="a_Chloroplast_4_qa_2">homologdur</span>. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Kloroplastların endosimbiyotik siyanobakterinin soyundan geldiğinin kanıtı nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Kloroplastların endosimbiyotik siyanobakterinin soyundan geldiğinin kanıtı nedir?`, correct_answer: "çift bir zarla çevrelendiği", trial_name: "a_Chloroplast_4_qa_0"} 
};var a_Chloroplast_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Dış kloroplast zarı hakkında yanlış olarak düşünülen şey nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Dış kloroplast zarı hakkında yanlış olarak düşünülen şey nedir?`, correct_answer: "ata siyanobakteriyi çevrelemek amacıyla bir vezikül oluşturacak şekilde katlanan konak hücre zarının ürünü", trial_name: "a_Chloroplast_4_qa_1"} 
};var a_Chloroplast_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İki kloroplast zarı da siyanobakterinin orijinal çift zarına nasıl benzemektedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İki kloroplast zarı da siyanobakterinin orijinal çift zarına nasıl benzemektedir?`, correct_answer: "homologdur", trial_name: "a_Chloroplast_4_qa_2"} 
};var a_Primenumber_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Özellikle, bu norm, olağan mutlak değere (sonsuz asal olarak da ifade edilir) tam bir zıtlık içinde bir sayı p ile çarpıldığında <span id="a_Primenumber_4_qa_0">küçülür</span>. <span id="a_Primenumber_4_qa_2">Mutlak değer</span> bakımından Q’yu tamamlamak (genel hatlarıyla boşlukları doldurmak) gerçek sayılar alanını oluştursa da p-sel |−|p normu bakımından tamamlamak, p-sel sayılar alanını oluşturur. Ostrowski teoremine göre, bunlar temelde Q’yu tamamlamanın olası tüm yöntemleridir. Q veya daha genel küresel alanlarla ile ilgili bazı aritmetik sorular <span id="a_Primenumber_4_qa_1">tamamlanan (veya yerel) alanlara</span> ileri ve geri olacak şekilde aktarılabilir. Bu <span id="a_Primenumber_4_qa_3">yerel-küresel prensip</span> asalların sayılar teorisindeki öneminin tekrar altını çizmektedir.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_Primenumber_4_qa_0','#a_Primenumber_4_qa_1','#a_Primenumber_4_qa_2','#a_Primenumber_4_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_Primenumber_4_1280_720.png';
a.click();});}},data: { trial_name: "a_Primenumber_4"}
};
var a_Primenumber_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bir sayı p ile çarpıldığında norma ne olur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bir sayı p ile çarpıldığında norma ne olur?`, correct_answer: "küçülür", trial_name: "a_Primenumber_4_qa_0"} 
};var a_Primenumber_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Genel küresel alanlar nereye veya nereden aktarılabilirler?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Genel küresel alanlar nereye veya nereden aktarılabilirler?`, correct_answer: "tamamlanan (veya yerel) alanlara", trial_name: "a_Primenumber_4_qa_1"} 
};var a_Primenumber_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Q’yu hangi bakımdan tamamlamak gerçek sayıların alanını oluşturur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Q’yu hangi bakımdan tamamlamak gerçek sayıların alanını oluşturur?`, correct_answer: "Mutlak değer", trial_name: "a_Primenumber_4_qa_2"} 
};var a_Primenumber_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi prensip, asalların sayılar teorisindeki önemini vurgular?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi prensip, asalların sayılar teorisindeki önemini vurgular?`, correct_answer: "yerel-küresel prensip", trial_name: "a_Primenumber_4_qa_3"} 
};var a_Rhine_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Bingen ve Bonn arasında, <span id="a_Rhine_0_qa_0"><span id="a_Rhine_0_qa_4">Orta Ren</span></span> nehri, <span id="a_Rhine_0_qa_2">erozyon</span> tarafından meydana getirilmiş bir oluşum olan <span id="a_Rhine_0_qa_1"><span id="a_Rhine_0_qa_5">Ren Vadisi</span></span> içinden akar. Erozyon hızı bölgedeki zemin yükselmesiyle eşit derecedeydi, öyle ki, nehir başlangıç seviyesine yakın kalırken çevreleyen topraklar yükseldi. Vadi oldukça derin olup, birçok <span id="a_Rhine_0_qa_6">kale ve üzüm bağı</span> ile bilinen nehrin yatağıdır. Bölge, bir UNESCO Dünya Miras Alanı olup, Orta Çağ’dan kalan 40’dan fazla kale ve hisarlar ve birçok ilgi çekici ve hoş köyleriyle “<span id="a_Rhine_0_qa_3"><span id="a_Rhine_0_qa_7">Romantik Ren</span></span>” olarak bilinmektedir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Bingen ve Bonn içinden hangi nehir akar?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bingen ve Bonn içinden hangi nehir akar?`, correct_answer: "Orta Ren", trial_name: "a_Rhine_0_qa_0"} 
};var a_Rhine_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bingen ve Bonn arasındaki vadi nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bingen ve Bonn arasındaki vadi nedir?`, correct_answer: "Ren Vadisi", trial_name: "a_Rhine_0_qa_1"} 
};var a_Rhine_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ren Vadisi nasıl oluşmuştur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ren Vadisi nasıl oluşmuştur?`, correct_answer: "erozyon", trial_name: "a_Rhine_0_qa_2"} 
};var a_Rhine_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ren Vadisi yakınındaki Orta Çağ’dan kalma kaleleri bulunan bölgeye ne ad verilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ren Vadisi yakınındaki Orta Çağ’dan kalma kaleleri bulunan bölgeye ne ad verilir?`, correct_answer: "Romantik Ren", trial_name: "a_Rhine_0_qa_3"} 
};var a_Rhine_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bingen ve Bonn içinden hangi nehir akar?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bingen ve Bonn içinden hangi nehir akar?`, correct_answer: "Orta Ren", trial_name: "a_Rhine_0_qa_4"} 
};var a_Rhine_0_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Orta Ren Nehri, Bingen ve Bonn içinden nereye akar?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Orta Ren Nehri, Bingen ve Bonn içinden nereye akar?`, correct_answer: "Ren Vadisi", trial_name: "a_Rhine_0_qa_5"} 
};var a_Rhine_0_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ren Vadisi ne ile tanınır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ren Vadisi ne ile tanınır?`, correct_answer: "kale ve üzüm bağı", trial_name: "a_Rhine_0_qa_6"} 
};var a_Rhine_0_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ren Vadisi’nin UNESCO tarafından tanınan bölümüne ne ad verilir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ren Vadisi’nin UNESCO tarafından tanınan bölümüne ne ad verilir?`, correct_answer: "Romantik Ren", trial_name: "a_Rhine_0_qa_7"} 
};var a_Rhine_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Hollanda’nın en önemli doğal alanı <span id="a_Rhine_1_qa_0">Rhine-Meuse</span> Deltası, Ren Nehri’nin Waal ve Nederrijn’e ayrılmasıyla, Hollanda-Almanya sınırına yakın <span id="a_Rhine_1_qa_1">Millingen aan de Rijn civarında</span> başlar. Ren Nehri suyun çoğunluğuna katkı sağladığı için, daha kısa terim olan <span id="a_Rhine_1_qa_2">Ren Deltası</span> yaygın olarak kullanılır. Bununla birlikte, bu isim Ren Nehri’nin Konstanz Gölü’ne döküldüğü nehir deltası için de kullanıldığından, daha büyük olanı Ren-Meuse deltası veya hatta Schelde Nehri de aynı deltaya döküldüğü için, Ren-Meuse-Schelde deltası olarak adlandırmak daha da net olacaktır.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Hollanda’daki deltanın adı nedir? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hollanda’daki deltanın adı nedir? `, correct_answer: "Rhine-Meuse", trial_name: "a_Rhine_1_qa_0"} 
};var a_Rhine_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hollanda’daki delta nerede başlar?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hollanda’daki delta nerede başlar?`, correct_answer: "Millingen aan de Rijn civarında", trial_name: "a_Rhine_1_qa_1"} 
};var a_Rhine_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hollanda’daki delta için kullanılan takma isim nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hollanda’daki delta için kullanılan takma isim nedir?`, correct_answer: "Ren Deltası", trial_name: "a_Rhine_1_qa_2"} 
};var a_Rhine_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Kuzeybatı Avrupa <span id="a_Rhine_3_qa_0">22.000 yıl önce</span> yavaşça ısınmaya başladı, donmuş alt topraklar ve genleşen alpin buzulları <span id="a_Rhine_3_qa_1">erimeye</span> başladı ve sonbahar-kış kar örtüleri baharda erimeye başladı. Ortaya çıkan suyun çoğu <span id="a_Rhine_3_qa_2">Ren</span> Nehri ve aşağı akım uzantısına yöneldi. Hızlı ısınma ve bitki örtüsü değişiklikleri ve ormanlar <span id="a_Rhine_3_qa_3">13.000 yıl</span> önce oluşmaya başladı. <span id="a_Rhine_3_qa_4">9000 yıl</span> öncesi itibarıyla Avrupa tamamen ağaçlandırılmış haldeydi. Küresel olarak çekilen buz örtüsüyle birlikte, okyanus su seviyeleri yükseldi, Manş Denizi ve Kuzey Denizi tekrar su ile kaplandı. Erime suyu, okyanusa ve toprak çökmesine katkıda bulunarak, Avrupa’nın önceki sahillerini sular altında bıraktı. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Son Buzul Çağı’nda Avrupa ne zaman yavaş yavaş ısınmaya başladı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Son Buzul Çağı’nda Avrupa ne zaman yavaş yavaş ısınmaya başladı?`, correct_answer: "22.000 yıl önce", trial_name: "a_Rhine_3_qa_0"} 
};var a_Rhine_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Donmuş alt topraklar ve genleşmiş alpin buzullarına ne olmaya başladı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Donmuş alt topraklar ve genleşmiş alpin buzullarına ne olmaya başladı?`, correct_answer: "erimeye", trial_name: "a_Rhine_3_qa_1"} 
};var a_Rhine_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Son Buzul Çağı’nda Avrupa’da buzullardan ortaya sıkan su nereye gitti?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Son Buzul Çağı’nda Avrupa’da buzullardan ortaya sıkan su nereye gitti?`, correct_answer: "Ren", trial_name: "a_Rhine_3_qa_2"} 
};var a_Rhine_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hızlı ısınma ne zaman başladı ve bitki örtüsü gelişimine yardım etti?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hızlı ısınma ne zaman başladı ve bitki örtüsü gelişimine yardım etti?`, correct_answer: "13.000 yıl", trial_name: "a_Rhine_3_qa_3"} 
};var a_Rhine_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Avrupa ne zaman tamamen ağaçlık bir hale geldi ve son Buzul Çağı’ndan kurtuldu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Avrupa ne zaman tamamen ağaçlık bir hale geldi ve son Buzul Çağı’ndan kurtuldu?`, correct_answer: "9000 yıl", trial_name: "a_Rhine_3_qa_4"} 
};var a_ScottishParliament_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">1978 İskoçya Yasası’nın koşullarına göre, toplam seçmenin en az %40’ını temsil eden 1 Mart 1979’da yapılacak referandumda İskoç seçmenlerinin <span id="a_ScottishParliament_0_qa_1">çoğunluğunun</span> oy vermesi şartıyla seçilmiş bir meclis <span id="a_ScottishParliament_0_qa_0">Edinburgh</span> şehrinde açılacaktı. Devrolan bir İskoç Meclisini kurmak için yapılan 1979 İskoçya Referandumu <span id="a_ScottishParliament_0_qa_3">başarısız</span> oldu. Oy oranı İskoç Meclisinin lehine <span id="a_ScottishParliament_0_qa_2">51.6%</span> olsa bile bu oran, kanuna geçmesi için gerekli görülen, toplam seçmenin %40 barajına eşit değildi zira oy kullanma hakkına sahip nüfusun <span id="a_ScottishParliament_0_qa_4">%32.9</span> oranındaki kısmı oy vermedi veya veremedi. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">1978 İskoçya Yasası’nın koşullarına göre seçilmiş meclis nerede açılacaktı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1978 İskoçya Yasası’nın koşullarına göre seçilmiş meclis nerede açılacaktı?`, correct_answer: "Edinburgh", trial_name: "a_ScottishParliament_0_qa_0"} 
};var a_ScottishParliament_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Referandumun geçerli olması için İskoç seçmeninin yüzde kaçı gerekiyordu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Referandumun geçerli olması için İskoç seçmeninin yüzde kaçı gerekiyordu?`, correct_answer: "çoğunluğunun", trial_name: "a_ScottishParliament_0_qa_1"} 
};var a_ScottishParliament_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İskoç Meclisi lehine olan oy oranı neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İskoç Meclisi lehine olan oy oranı neydi?`, correct_answer: "51.6%", trial_name: "a_ScottishParliament_0_qa_2"} 
};var a_ScottishParliament_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">1979’da bağımsız bir İskoç Meclisi açmaya çalışmak nasıl sonuçlandı?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1979’da bağımsız bir İskoç Meclisi açmaya çalışmak nasıl sonuçlandı?`, correct_answer: "başarısız", trial_name: "a_ScottishParliament_0_qa_3"} 
};var a_ScottishParliament_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İskoçya’nın oy kullanma hakkına sahip nüfusunun yüzde kaçı oy kullanmakta başarısız oldu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İskoçya’nın oy kullanma hakkına sahip nüfusunun yüzde kaçı oy kullanmakta başarısız oldu?`, correct_answer: "%32.9", trial_name: "a_ScottishParliament_0_qa_4"} 
};var a_ScottishParliament_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">İskoç Parlamentosu’nun görevlerinin çoğu <span id="a_ScottishParliament_1_qa_0">komitede</span> yapılır. Komitelerin, İskoç Parlamentosundaki rolü, diğer parlamenter sistemlerden daha <span id="a_ScottishParliament_1_qa_1">güçlüdür</span> bu kısmen, muhalif parlamento üyelerinin hükümeti denetleme rolünü daha güçlü kılmak ve kısmen de <span id="a_ScottishParliament_1_qa_2">yeniden görüşme odasının olmaması</span> gerçeğini telafi etmek sebebinden kaynaklanmaktadır. İskoç Parlamentosu’ndaki komitelerin <span id="a_ScottishParliament_1_qa_3">ana rolü</span> şahitlerden kanıt toplamak, soruşturmalarda bulunmak ve yasamayı denetlemektir. Komite toplantıları, Parlamento oturumları sırasında Salı, Çarşamba ve Perşembe sabahları gerçekleşir. Komiteler ayrıca <span id="a_ScottishParliament_1_qa_4">İskoçya’da dört ayrı yerde</span> toplanabilir. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">İskoç Parlamentosu’nun işlerinin çoğu nerede görülür?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İskoç Parlamentosu’nun işlerinin çoğu nerede görülür?`, correct_answer: "komitede", trial_name: "a_ScottishParliament_1_qa_0"} 
};var a_ScottishParliament_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İskoç Parlamentosu’ndaki komiteler diğer sistemlerle kıyaslandığında ne durumdadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İskoç Parlamentosu’ndaki komiteler diğer sistemlerle kıyaslandığında ne durumdadır?`, correct_answer: "güçlüdür", trial_name: "a_ScottishParliament_1_qa_1"} 
};var a_ScottishParliament_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Böylesine büyük bir rol üstlenen komitelere sahip olarak neyin telafi edilmesi amaçlanmaktadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Böylesine büyük bir rol üstlenen komitelere sahip olarak neyin telafi edilmesi amaçlanmaktadır?`, correct_answer: "yeniden görüşme odasının olmaması", trial_name: "a_ScottishParliament_1_qa_2"} 
};var a_ScottishParliament_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Şahitlerden kanıt toplamak komitelerin hangi durumlarından bir tanesidir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Şahitlerden kanıt toplamak komitelerin hangi durumlarından bir tanesidir?`, correct_answer: "ana rolü", trial_name: "a_ScottishParliament_1_qa_3"} 
};var a_ScottishParliament_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Komiteler Parlamento dışında nerede toplanabilirler?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Komiteler Parlamento dışında nerede toplanabilirler?`, correct_answer: "İskoçya’da dört ayrı yerde", trial_name: "a_ScottishParliament_1_qa_4"} 
};var a_ScottishParliament_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Başka bir <span id="a_ScottishParliament_2_qa_0">komite</span> türü, İskoç Parlamentosu’nun veya <span id="a_ScottishParliament_2_qa_2">İskoç Hükümetinin</span> bir üyesi olmayan, genellikle dış bir parti veya düzenleyiciler tarafından İskoç Parlamentosu’na sunulan özel kanun tekliflerinin tetkiki için oluşturulan komitelerdir. Özel kanun teklifleri çoğunlukla toprak veya mülk kullanımını gerektiren altyapı projeleri gibi <span id="a_ScottishParliament_2_qa_1">büyük çaplı kalkınma projeleri</span> ile ilgilidir. <span id="a_ScottishParliament_2_qa_3">Özel Kanun</span> Komiteleri, Edinburgh Tramvay Ağı, Glasgow Havaalanı Demiryolu Bağlantısı, Airdrie-Bathgate Demiryolu Bağlantısı ve İskoçya Ulusal Galerisi uzantıları gibi gelişimler hakkındaki sorunlarda yasamayı göz önünde bulundurmak için kurulmuştur. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Parti harici tarafların sunduğu özel kanun tekliflerini incelemek için ne kurulur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Parti harici tarafların sunduğu özel kanun tekliflerini incelemek için ne kurulur?`, correct_answer: "komite", trial_name: "a_ScottishParliament_2_qa_0"} 
};var a_ScottishParliament_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Özel kanun teklifleri genel olarak hangi konulara sahiptir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Özel kanun teklifleri genel olarak hangi konulara sahiptir?`, correct_answer: "büyük çaplı kalkınma projeleri", trial_name: "a_ScottishParliament_2_qa_1"} 
};var a_ScottishParliament_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Toprağın ya da mülkün kullanım iznine kim karar verir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Toprağın ya da mülkün kullanım iznine kim karar verir?`, correct_answer: "İskoç Hükümetinin", trial_name: "a_ScottishParliament_2_qa_2"} 
};var a_ScottishParliament_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Edinburgh Tramvay Ağı’nın gelişiminde ne tür bir komite yasamayı göz önünde bulundurmuştur?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Edinburgh Tramvay Ağı’nın gelişiminde ne tür bir komite yasamayı göz önünde bulundurmuştur?`, correct_answer: "Özel Kanun", trial_name: "a_ScottishParliament_2_qa_3"} 
};var a_Islamism_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Müslüman Kardeşler gibi <span id="a_Islamism_1_qa_0">İslamcı</span> hareketler “şehir dışındaki öğrencilere, öğrenci danışmanlık gruplarına, <span id="a_Islamism_1_qa_4">maliyet bakımından yüksek çeyiz taleplerinden kaçınmak</span> için ucuz toplu evlilik törenlerinin yapılması, yasal yardım, spor tesisleri ve kadın gruplarına <span id="a_Islamism_1_qa_2">barınaklar, eğitimsel yardım, ücretsiz veya düşük tutarlı medikal klinikleri, konut yardımı</span> sunmak konusunda iyi bilinirler.” Tüm bunlar, sosyal adalete bağlılığı yalnızca <span id="a_Islamism_1_qa_3">hitabet</span> ile sınırlı <span id="a_Islamism_1_qa_1">yetersiz, etkisiz ve umursamaz</span> hükümetlerle karşılaştırıldığında oldukça olumlu görülmektedir.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Müslüman Kardeşler ne tür bir harekettir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Müslüman Kardeşler ne tür bir harekettir?`, correct_answer: "İslamcı", trial_name: "a_Islamism_1_qa_0"} 
};var a_Islamism_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Müslüman Kardeşler’in kabiliyeti ne tür yerel hükümetlere karşı olumlu bir durumdadır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Müslüman Kardeşler’in kabiliyeti ne tür yerel hükümetlere karşı olumlu bir durumdadır?`, correct_answer: "yetersiz, etkisiz ve umursamaz", trial_name: "a_Islamism_1_qa_1"} 
};var a_Islamism_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Müslüman Kardeşler, şehir dışındaki öğrencilere ettikleri ne tür bir yardımla bilinirler?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Müslüman Kardeşler, şehir dışındaki öğrencilere ettikleri ne tür bir yardımla bilinirler?`, correct_answer: "barınaklar, eğitimsel yardım, ücretsiz veya düşük tutarlı medikal klinikleri, konut yardımı", trial_name: "a_Islamism_1_qa_2"} 
};var a_Islamism_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Yetersiz hükümetlerin sosyal adalete bağlılığı ne ile sınırlıdır?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Yetersiz hükümetlerin sosyal adalete bağlılığı ne ile sınırlıdır?`, correct_answer: "hitabet", trial_name: "a_Islamism_1_qa_3"} 
};var a_Islamism_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Müslüman Kardeşler neden ucuz toplu evlilik törenleri düzenlemişlerdir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Müslüman Kardeşler neden ucuz toplu evlilik törenleri düzenlemişlerdir?`, correct_answer: "maliyet bakımından yüksek çeyiz taleplerinden kaçınmak", trial_name: "a_Islamism_1_qa_4"} 
};var a_Islamism_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Sudan, yıllar boyunca <span id="a_Islamism_3_qa_1">Hassan al-Turabi</span> önderliğinde <span id="a_Islamism_3_qa_0">İslamcı</span> bir rejimin yönetimi altındaydı. Hassan al Turabi’nin <span id="a_Islamism_3_qa_2">Ulusal İslami Cephe</span> partisi, diktatör General Gaafar al-Nimeiry 1979’da üyeleri hükümetinde görev yapmaya davet edince ilk nüfuzunu kazandı. Turabi, <span id="a_Islamism_3_qa_3">İslamcı bankacılık sistemlerinden gelen para ile</span> özellikle de Suudi Arabistan ile bağlantıları olan güçlü bir ekonomik temel oluşturdu. Ayrıca, eğitim bakanı olarak görev yaparken <span id="a_Islamism_3_qa_4">üniversiteye ve askeri akademiye</span> kendilerine sempati duyan öğrencileri yerleştirerek nüfuzlu bir sadık kadrosu yetiştirdi ve oluşturdu.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Sudan’da yıllar boyunca ne tür bir rejim hüküm sürdü?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Sudan’da yıllar boyunca ne tür bir rejim hüküm sürdü?`, correct_answer: "İslamcı", trial_name: "a_Islamism_3_qa_0"} 
};var a_Islamism_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Sudan’daki İslamcı rejimin lideri kimdi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Sudan’daki İslamcı rejimin lideri kimdi?`, correct_answer: "Hassan al-Turabi", trial_name: "a_Islamism_3_qa_1"} 
};var a_Islamism_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">General Gaafar el-Nimeiry üyelerine hükümetinde hizmet vermek için hangi organizasyona davet etti?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `General Gaafar el-Nimeiry üyelerine hükümetinde hizmet vermek için hangi organizasyona davet etti?`, correct_answer: "Ulusal İslami Cephe", trial_name: "a_Islamism_3_qa_2"} 
};var a_Islamism_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Turabi güçlü bir ekonomik temeli nasıl oluşturdu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Turabi güçlü bir ekonomik temeli nasıl oluşturdu?`, correct_answer: "İslamcı bankacılık sistemlerinden gelen para ile", trial_name: "a_Islamism_3_qa_3"} 
};var a_Islamism_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Turabi, kendi görüşlerine sempati duyan öğrencileri nereye yerleştirdi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Turabi, kendi görüşlerine sempati duyan öğrencileri nereye yerleştirdi?`, correct_answer: "üniversiteye ve askeri akademiye", trial_name: "a_Islamism_3_qa_4"} 
};var a_Imperialism_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Londra Kraliyet Coğrafya Derneği ve Avrupa'daki diğer coğrafi topluluklar büyük etkiye sahipti ve keşiflerinin hikayeleriyle geri dönecek olangezginleri <span id="a_Imperialism_0_qa_4">finanse</span> edebildi. Bu topluluklar aynı zamanda gezginlerin bu hikayeleri paylaşması için bir alan olarak hizmet etti. <span id="a_Imperialism_0_qa_0">Almanya'dan</span> Friedrich Ratzel ve <span id="a_Imperialism_0_qa_1">İngiltere'den</span> Halford Mackinder gibi <span id="a_Imperialism_0_qa_2">siyasi</span> coğrafyacılar da emperyalizmi desteklediler. Ratzel, bir devletin hayatta kalabilmesi için genişlemenin <span id="a_Imperialism_0_qa_3">gerekli</span> olduğuna inanırken Mackinder, İngiltere’nin emperyal genişlemesini destekledi; Bu iki argüman on yıllarca disipline egemen oldu.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Friedrich Ratzel nerede doğdu?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Friedrich Ratzel nerede doğdu?`, correct_answer: "Almanya'dan", trial_name: "a_Imperialism_0_qa_0"} 
};var a_Imperialism_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Halford Mackinder nerede doğdu? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Halford Mackinder nerede doğdu? `, correct_answer: "İngiltere'den", trial_name: "a_Imperialism_0_qa_1"} 
};var a_Imperialism_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Halford Mackinder ve Friedrich Ratzel ne tür coğrafyacılardı? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Halford Mackinder ve Friedrich Ratzel ne tür coğrafyacılardı? `, correct_answer: "siyasi", trial_name: "a_Imperialism_0_qa_2"} 
};var a_Imperialism_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Friedrich Ratzel emperyalizmin ülke için ne olduğunu düşündü? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Friedrich Ratzel emperyalizmin ülke için ne olduğunu düşündü? `, correct_answer: "gerekli", trial_name: "a_Imperialism_0_qa_3"} 
};var a_Imperialism_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Avrupa'daki coğrafi topluluklar bazı gezginleri nasıl destekler?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Avrupa'daki coğrafi topluluklar bazı gezginleri nasıl destekler?`, correct_answer: "finanse", trial_name: "a_Imperialism_0_qa_4"} 
};var a_FrenchandIndianWar_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Avrupa'da, Yedi Yıl Savaşının Kuzey Amerika tiyatrosuna genellikle ayrı bir isim verilmez. Bütün uluslararası çatışmalar Yedi Yıl Savaşları olarak bilinir. "Yedi Yıl", <span id="a_FrenchandIndianWar_0_qa_0">1756'daki resmi savaş ilanından, 1763'teki barış anlaşmasının imzalanmasına kadar</span>, Avrupa'daki olaylara atıfta bulunuyor. Bu tarihler, iki sömürgeci güç arasındaki savaşın büyük ölçüde, 1754'teki <span id="a_FrenchandIndianWar_0_qa_3">Jumonville Glen Muharebesi'nden</span> <span id="a_FrenchandIndianWar_0_qa_2">1760'ta</span> Montreal'in ele geçirilmesine kadar olan <span id="a_FrenchandIndianWar_0_qa_1">6 yılda</span> sonuçlandığı anakara Kuzey Amerika'daki savaş ile uyuşmuyor. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Yedi Yıl Savaşı hangi zaman dilimini kapsıyor? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Yedi Yıl Savaşı hangi zaman dilimini kapsıyor? `, correct_answer: "1756'daki resmi savaş ilanından, 1763'teki barış anlaşmasının imzalanmasına kadar", trial_name: "a_FrenchandIndianWar_0_qa_0"} 
};var a_FrenchandIndianWar_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Yedi Yıl Savaşı'nda çatışma ne kadar sürdü? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Yedi Yıl Savaşı'nda çatışma ne kadar sürdü? `, correct_answer: "6 yılda", trial_name: "a_FrenchandIndianWar_0_qa_1"} 
};var a_FrenchandIndianWar_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Montreal ne zaman ele geçirildi? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Montreal ne zaman ele geçirildi? `, correct_answer: "1760'ta", trial_name: "a_FrenchandIndianWar_0_qa_2"} 
};var a_FrenchandIndianWar_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">1754 yılında ilk savaş neydi?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1754 yılında ilk savaş neydi?`, correct_answer: "Jumonville Glen Muharebesi'nden", trial_name: "a_FrenchandIndianWar_0_qa_3"} 
};var a_FrenchandIndianWar_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Washington geri dönmeden önce bile, Dinwiddie William Trent'in emri altındaki <span id="a_FrenchandIndianWar_2_qa_0">40</span> kişilik bir topluluğu, <span id="a_FrenchandIndianWar_2_qa_1">1754'ün</span> ilk aylarında etrafı kazıklarla çevrili küçük bir kalenin inşasına başladıkları yere göndermişti. Vali Duquesne aynı dönemde Saint-Pierre'yi rahatlatmak için Claude-Pierre Pecaudy de Contreoeur'un emri altında ek olarak Fransız kuvvetler gönderdi ve Conreoeur 5 Nisan 1754'te 500 kişiye Fort Venango'dan güneye önderlik etti. 16 Nisan'da bu kuvvetler kaleye ulaştıklarında, Contreoeur Trent'in küçük topluluğunun çekilmesine izin verdi. <span id="a_FrenchandIndianWar_2_qa_2">Duquesne Kalesi</span> olan yapıyı inşa etmeye devam etmek için onların inşaat aletlerini satın aldı. </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Saint-Pierre’i rahatlatmak için Duquesne kaç adam gönderdi? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Saint-Pierre’i rahatlatmak için Duquesne kaç adam gönderdi? `, correct_answer: "40", trial_name: "a_FrenchandIndianWar_2_qa_0"} 
};var a_FrenchandIndianWar_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İngilizler, William Trent'in emri altında kale inşa etmeye ne zaman başladı? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İngilizler, William Trent'in emri altında kale inşa etmeye ne zaman başladı? `, correct_answer: "1754'ün", trial_name: "a_FrenchandIndianWar_2_qa_1"} 
};var a_FrenchandIndianWar_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İnşa edilmekte olan kale ne olarak isimlendirildi? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İnşa edilmekte olan kale ne olarak isimlendirildi? `, correct_answer: "Duquesne Kalesi", trial_name: "a_FrenchandIndianWar_2_qa_2"} 
};var a_FrenchandIndianWar_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Newcastle onu Ocak 1756'da ikinci amir olarak <span id="a_FrenchandIndianWar_4_qa_0">Büyük General James Abercrombie</span> ile, Lord Loudon'la değiştirdi. Bu adamların hiçbiri Fransa'nın Kuzey Amerika'ya gönderdiği üçlü subay kadar sefer deneyimine sahip değildi. Fransa'nın düzenli ordu takviyeleri, hepsi Avusturya Vekalet Savaşı'ndan tecrübeli generaller olan Chevalier de Levis ve Colonel François-Charles de Bourlemaque tarafından desteklenen <span id="a_FrenchandIndianWar_4_qa_1">Büyük General Louis-Joseph de Montcalm</span> önderliğindeki Yeni Fransa'ya vardı. Avrupada bu süre zarfında, <span id="a_FrenchandIndianWar_4_qa_2">18 Mayıs 1756'da</span> İngiltere Fransa'ya savaş ilan etti ki bu savaşı Avrupa'ya kadar genişletti, daha sonra Yedi Yıl Savaşı olarak bilinecekti. </p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#a_FrenchandIndianWar_4_qa_0','#a_FrenchandIndianWar_4_qa_1','#a_FrenchandIndianWar_4_qa_2'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'a_FrenchandIndianWar_4_1280_720.png';
a.click();});}},data: { trial_name: "a_FrenchandIndianWar_4"}
};
var a_FrenchandIndianWar_4_qa_0 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">1756'da Lord Loudoun'a yardımcı amir olarak kim atandı? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1756'da Lord Loudoun'a yardımcı amir olarak kim atandı? `, correct_answer: "Büyük General James Abercrombie", trial_name: "a_FrenchandIndianWar_4_qa_0"} 
};var a_FrenchandIndianWar_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">1756'da Yeni Fransa takviyelerine kim öncülük etti? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `1756'da Yeni Fransa takviyelerine kim öncülük etti? `, correct_answer: "Büyük General Louis-Joseph de Montcalm", trial_name: "a_FrenchandIndianWar_4_qa_1"} 
};var a_FrenchandIndianWar_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">İngiltere resmen Fransa'ya ne zaman savaş ilan etti ?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `İngiltere resmen Fransa'ya ne zaman savaş ilan etti ?`, correct_answer: "18 Mayıs 1756'da", trial_name: "a_FrenchandIndianWar_4_qa_2"} 
};var a_Force_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Force_3_qa_0">Elektrik akımı</span> tanımını, elektrik yükünün değişim zamanının oranı olarak birleştirerek, <span id="a_Force_3_qa_2">Lorentz Yasası</span> adlı bir vektör çarpma kuralı, manyetik alanda hareket eden bir yük üzerindeki kuvveti tanımlar. Elektrik ve manyetizma arasındaki bağlantı, yüke etki eden <span id="a_Force_3_qa_1">birleşik bir elektromanyetik kuvvet</span> tanımlamasına izin verir. Bu kuvvet, <span id="a_Force_3_qa_3">elektrostatik kuvvetin</span> (elektrik alan nedeniyle) ve manyetik kuvvetin (manyetik alan nedeniyle) toplamı olarak yazılabilir. Tamamen belirtilmiş, yasa budur: </p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Elektrik yükünün değişme zaman oranı nedir? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Elektrik yükünün değişme zaman oranı nedir? `, correct_answer: "Elektrik akımı", trial_name: "a_Force_3_qa_0"} 
};var a_Force_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hangi manyetik ve elektrik gücü bir yüke etki eder?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hangi manyetik ve elektrik gücü bir yüke etki eder?`, correct_answer: "birleşik bir elektromanyetik kuvvet", trial_name: "a_Force_3_qa_1"} 
};var a_Force_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Manyetik alanda ilerleyen bir yükü tanımlayan yasa nedir? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Manyetik alanda ilerleyen bir yükü tanımlayan yasa nedir? `, correct_answer: "Lorentz Yasası", trial_name: "a_Force_3_qa_2"} 
};var a_Force_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Elektrostatik ve manyetik kuvvetin toplamı olarak yazılı olan nedir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Elektrostatik ve manyetik kuvvetin toplamı olarak yazılı olan nedir?`, correct_answer: "elektrostatik kuvvetin", trial_name: "a_Force_3_qa_3"} 
};var a_Force_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Gerilme tensörünün hesaplandığı hacim için ilgili kesit alanı nerededir. Bu <span id="a_Force_4_qa_3">biçimcilik</span>, enine kesit alanına normal olarak etki eden kuvvetlerle (basınç tensörünün matris köşegenleri) ilgili <span id="a_Force_4_qa_1"><span id="a_Force_4_qa_2">basınç terimlerini</span></span> ve enine kesit alanına paralel hareket eden kuvvetlerle (kayma dışı elemanlar) ilişkili terimleri içerir. <span id="a_Force_4_qa_0">Gerilme tensörü</span>, çekme gerilmeleri ve kompresyonları da dahil olmak üzere tüm suşlara (deformasyonlara) neden olan kuvvetlerden sorumludur .:133–134:38-1–38-11</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Yapılarda zorlanma nedenleri nelerdir? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Yapılarda zorlanma nedenleri nelerdir? `, correct_answer: "Gerilme tensörü", trial_name: "a_Force_4_qa_0"} 
};var a_Force_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Bir nesnenin hacmindeki kesit alanını hesaplamak için ne kullanılır? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Bir nesnenin hacmindeki kesit alanını hesaplamak için ne kullanılır? `, correct_answer: "basınç terimlerini", trial_name: "a_Force_4_qa_1"} 
};var a_Force_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Normal kuvvetlerle ne ilişkilendirilir? `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Normal kuvvetlerle ne ilişkilendirilir? `, correct_answer: "basınç terimlerini", trial_name: "a_Force_4_qa_2"} 
};var a_Force_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Hacimdeki alanı hesaplarken basınç terimlerini neler içerir?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Hacimdeki alanı hesaplarken basınç terimlerini neler içerir?`, correct_answer: "biçimcilik", trial_name: "a_Force_4_qa_3"} 
};var xquad_trials_array = [[a_SuperBowl50_1,[a_SuperBowl50_1_qa_0,a_SuperBowl50_1_qa_1,a_SuperBowl50_1_qa_2,a_SuperBowl50_1_qa_3,a_SuperBowl50_1_qa_4,a_SuperBowl50_1_qa_5,a_SuperBowl50_1_qa_6,a_SuperBowl50_1_qa_7,a_SuperBowl50_1_qa_8,a_SuperBowl50_1_qa_9,a_SuperBowl50_1_qa_10,a_SuperBowl50_1_qa_11,a_SuperBowl50_1_qa_12,a_SuperBowl50_1_qa_13,a_SuperBowl50_1_qa_14,a_SuperBowl50_1_qa_15]],[a_SuperBowl50_2,[a_SuperBowl50_2_qa_0,a_SuperBowl50_2_qa_1,a_SuperBowl50_2_qa_2,a_SuperBowl50_2_qa_3,a_SuperBowl50_2_qa_4,a_SuperBowl50_2_qa_5,a_SuperBowl50_2_qa_6,a_SuperBowl50_2_qa_7,a_SuperBowl50_2_qa_8,a_SuperBowl50_2_qa_9,a_SuperBowl50_2_qa_10,a_SuperBowl50_2_qa_11,a_SuperBowl50_2_qa_12,a_SuperBowl50_2_qa_13,a_SuperBowl50_2_qa_14,a_SuperBowl50_2_qa_15,a_SuperBowl50_2_qa_16]],[a_SuperBowl50_3,[a_SuperBowl50_3_qa_0,a_SuperBowl50_3_qa_1,a_SuperBowl50_3_qa_2,a_SuperBowl50_3_qa_3,a_SuperBowl50_3_qa_4,a_SuperBowl50_3_qa_5,a_SuperBowl50_3_qa_6,a_SuperBowl50_3_qa_7,a_SuperBowl50_3_qa_8,a_SuperBowl50_3_qa_9,a_SuperBowl50_3_qa_10,a_SuperBowl50_3_qa_11]],[a_Warsaw_0,[a_Warsaw_0_qa_0,a_Warsaw_0_qa_1,a_Warsaw_0_qa_2,a_Warsaw_0_qa_3,a_Warsaw_0_qa_4]],[a_Warsaw_1,[a_Warsaw_1_qa_0,a_Warsaw_1_qa_1,a_Warsaw_1_qa_2,a_Warsaw_1_qa_3,a_Warsaw_1_qa_4]],[a_Warsaw_2,[a_Warsaw_2_qa_0,a_Warsaw_2_qa_1,a_Warsaw_2_qa_2,a_Warsaw_2_qa_3,a_Warsaw_2_qa_4]],[a_Warsaw_4,[a_Warsaw_4_qa_0,a_Warsaw_4_qa_1,a_Warsaw_4_qa_2,a_Warsaw_4_qa_3,a_Warsaw_4_qa_4]],[a_Normans_4,[a_Normans_4_qa_0]],[a_NikolaTesla_1,[a_NikolaTesla_1_qa_0,a_NikolaTesla_1_qa_1,a_NikolaTesla_1_qa_2,a_NikolaTesla_1_qa_3,a_NikolaTesla_1_qa_4,a_NikolaTesla_1_qa_5,a_NikolaTesla_1_qa_6,a_NikolaTesla_1_qa_7,a_NikolaTesla_1_qa_8,a_NikolaTesla_1_qa_9]],[a_NikolaTesla_3,[a_NikolaTesla_3_qa_0,a_NikolaTesla_3_qa_1,a_NikolaTesla_3_qa_2]],[a_NikolaTesla_4,[a_NikolaTesla_4_qa_0,a_NikolaTesla_4_qa_1,a_NikolaTesla_4_qa_2]],[a_Computationalcomplexitytheory_0,[a_Computationalcomplexitytheory_0_qa_0,a_Computationalcomplexitytheory_0_qa_1,a_Computationalcomplexitytheory_0_qa_2]],[a_Computationalcomplexitytheory_1,[a_Computationalcomplexitytheory_1_qa_0,a_Computationalcomplexitytheory_1_qa_1,a_Computationalcomplexitytheory_1_qa_2,a_Computationalcomplexitytheory_1_qa_3,a_Computationalcomplexitytheory_1_qa_4]],[a_Computationalcomplexitytheory_2,[a_Computationalcomplexitytheory_2_qa_0,a_Computationalcomplexitytheory_2_qa_1]],[a_Computationalcomplexitytheory_4,[a_Computationalcomplexitytheory_4_qa_0,a_Computationalcomplexitytheory_4_qa_1,a_Computationalcomplexitytheory_4_qa_2,a_Computationalcomplexitytheory_4_qa_3]],[a_Teacher_0,[a_Teacher_0_qa_0,a_Teacher_0_qa_1,a_Teacher_0_qa_2,a_Teacher_0_qa_3,a_Teacher_0_qa_4]],[a_Teacher_1,[a_Teacher_1_qa_0,a_Teacher_1_qa_1,a_Teacher_1_qa_2,a_Teacher_1_qa_3,a_Teacher_1_qa_4]],[a_Teacher_3,[a_Teacher_3_qa_0,a_Teacher_3_qa_1,a_Teacher_3_qa_2,a_Teacher_3_qa_3]],[a_Teacher_4,[a_Teacher_4_qa_0,a_Teacher_4_qa_1,a_Teacher_4_qa_2,a_Teacher_4_qa_3,a_Teacher_4_qa_4]],[a_MartinLuther_2,[a_MartinLuther_2_qa_0,a_MartinLuther_2_qa_1,a_MartinLuther_2_qa_2,a_MartinLuther_2_qa_3,a_MartinLuther_2_qa_4]],[a_MartinLuther_4,[a_MartinLuther_4_qa_0,a_MartinLuther_4_qa_1,a_MartinLuther_4_qa_2]],[a_SouthernCalifornia_2,[a_SouthernCalifornia_2_qa_0,a_SouthernCalifornia_2_qa_1,a_SouthernCalifornia_2_qa_2,a_SouthernCalifornia_2_qa_3,a_SouthernCalifornia_2_qa_4]],[a_SouthernCalifornia_3,[a_SouthernCalifornia_3_qa_0,a_SouthernCalifornia_3_qa_1,a_SouthernCalifornia_3_qa_2,a_SouthernCalifornia_3_qa_3,a_SouthernCalifornia_3_qa_4]],[a_SouthernCalifornia_4,[a_SouthernCalifornia_4_qa_0,a_SouthernCalifornia_4_qa_1,a_SouthernCalifornia_4_qa_2,a_SouthernCalifornia_4_qa_3,a_SouthernCalifornia_4_qa_4]],[a_SkyUnitedKingdom_0,[a_SkyUnitedKingdom_0_qa_0,a_SkyUnitedKingdom_0_qa_1,a_SkyUnitedKingdom_0_qa_2,a_SkyUnitedKingdom_0_qa_3,a_SkyUnitedKingdom_0_qa_4]],[a_SkyUnitedKingdom_1,[a_SkyUnitedKingdom_1_qa_0,a_SkyUnitedKingdom_1_qa_1,a_SkyUnitedKingdom_1_qa_2,a_SkyUnitedKingdom_1_qa_3,a_SkyUnitedKingdom_1_qa_4]],[a_SkyUnitedKingdom_4,[a_SkyUnitedKingdom_4_qa_0,a_SkyUnitedKingdom_4_qa_1,a_SkyUnitedKingdom_4_qa_2,a_SkyUnitedKingdom_4_qa_3,a_SkyUnitedKingdom_4_qa_4]],[a_VictoriaAustralia_1,[a_VictoriaAustralia_1_qa_0,a_VictoriaAustralia_1_qa_1,a_VictoriaAustralia_1_qa_2,a_VictoriaAustralia_1_qa_3,a_VictoriaAustralia_1_qa_4]],[a_VictoriaAustralia_2,[a_VictoriaAustralia_2_qa_0,a_VictoriaAustralia_2_qa_1,a_VictoriaAustralia_2_qa_2,a_VictoriaAustralia_2_qa_3,a_VictoriaAustralia_2_qa_4]],[a_VictoriaAustralia_3,[a_VictoriaAustralia_3_qa_0,a_VictoriaAustralia_3_qa_1,a_VictoriaAustralia_3_qa_2,a_VictoriaAustralia_3_qa_3,a_VictoriaAustralia_3_qa_4]],[a_Huguenot_0,[a_Huguenot_0_qa_0,a_Huguenot_0_qa_1,a_Huguenot_0_qa_2,a_Huguenot_0_qa_3]],[a_Steamengine_0,[a_Steamengine_0_qa_0,a_Steamengine_0_qa_1,a_Steamengine_0_qa_2,a_Steamengine_0_qa_3]],[a_Steamengine_3,[a_Steamengine_3_qa_0,a_Steamengine_3_qa_1,a_Steamengine_3_qa_2,a_Steamengine_3_qa_3,a_Steamengine_3_qa_4]],[a_Oxygen_1,[a_Oxygen_1_qa_0,a_Oxygen_1_qa_1,a_Oxygen_1_qa_2,a_Oxygen_1_qa_3]],[a_Oxygen_3,[a_Oxygen_3_qa_0,a_Oxygen_3_qa_1,a_Oxygen_3_qa_2,a_Oxygen_3_qa_3,a_Oxygen_3_qa_4]],[a_1973oilcrisis_1,[a_1973oilcrisis_1_qa_0,a_1973oilcrisis_1_qa_1,a_1973oilcrisis_1_qa_2,a_1973oilcrisis_1_qa_3,a_1973oilcrisis_1_qa_4]],[a_1973oilcrisis_2,[a_1973oilcrisis_2_qa_0,a_1973oilcrisis_2_qa_1,a_1973oilcrisis_2_qa_2,a_1973oilcrisis_2_qa_3]],[a_1973oilcrisis_3,[a_1973oilcrisis_3_qa_0,a_1973oilcrisis_3_qa_1,a_1973oilcrisis_3_qa_2]],[a_Apolloprogram_1,[a_Apolloprogram_1_qa_0,a_Apolloprogram_1_qa_1,a_Apolloprogram_1_qa_2,a_Apolloprogram_1_qa_3,a_Apolloprogram_1_qa_4]],[a_Apolloprogram_2,[a_Apolloprogram_2_qa_0,a_Apolloprogram_2_qa_1,a_Apolloprogram_2_qa_2,a_Apolloprogram_2_qa_3]],[a_Apolloprogram_3,[a_Apolloprogram_3_qa_0,a_Apolloprogram_3_qa_1,a_Apolloprogram_3_qa_2,a_Apolloprogram_3_qa_3,a_Apolloprogram_3_qa_4]],[a_Apolloprogram_4,[a_Apolloprogram_4_qa_0,a_Apolloprogram_4_qa_1,a_Apolloprogram_4_qa_2,a_Apolloprogram_4_qa_3,a_Apolloprogram_4_qa_4]],[a_Amazonrainforest_2,[a_Amazonrainforest_2_qa_0,a_Amazonrainforest_2_qa_1,a_Amazonrainforest_2_qa_2,a_Amazonrainforest_2_qa_3,a_Amazonrainforest_2_qa_4]],[a_Amazonrainforest_3,[a_Amazonrainforest_3_qa_0,a_Amazonrainforest_3_qa_1,a_Amazonrainforest_3_qa_2,a_Amazonrainforest_3_qa_3,a_Amazonrainforest_3_qa_4]],[a_Amazonrainforest_4,[a_Amazonrainforest_4_qa_0,a_Amazonrainforest_4_qa_1,a_Amazonrainforest_4_qa_2,a_Amazonrainforest_4_qa_3,a_Amazonrainforest_4_qa_4]],[a_Ctenophora_2,[a_Ctenophora_2_qa_0,a_Ctenophora_2_qa_1,a_Ctenophora_2_qa_2,a_Ctenophora_2_qa_3]],[a_FresnoCalifornia_0,[a_FresnoCalifornia_0_qa_0,a_FresnoCalifornia_0_qa_1,a_FresnoCalifornia_0_qa_2,a_FresnoCalifornia_0_qa_3,a_FresnoCalifornia_0_qa_4]],[a_FresnoCalifornia_2,[a_FresnoCalifornia_2_qa_0,a_FresnoCalifornia_2_qa_1,a_FresnoCalifornia_2_qa_2,a_FresnoCalifornia_2_qa_3,a_FresnoCalifornia_2_qa_4]],[a_FresnoCalifornia_3,[a_FresnoCalifornia_3_qa_0,a_FresnoCalifornia_3_qa_1,a_FresnoCalifornia_3_qa_2,a_FresnoCalifornia_3_qa_3]],[a_Packetswitching_1,[a_Packetswitching_1_qa_0,a_Packetswitching_1_qa_1,a_Packetswitching_1_qa_2,a_Packetswitching_1_qa_3]],[a_BlackDeath_0,[a_BlackDeath_0_qa_0,a_BlackDeath_0_qa_1,a_BlackDeath_0_qa_2,a_BlackDeath_0_qa_3]],[a_BlackDeath_4,[a_BlackDeath_4_qa_0,a_BlackDeath_4_qa_1,a_BlackDeath_4_qa_2,a_BlackDeath_4_qa_3]],[a_Geology_4,[a_Geology_4_qa_0,a_Geology_4_qa_1,a_Geology_4_qa_2,a_Geology_4_qa_3]],[a_VictoriaandAlbertMuseum_2,[a_VictoriaandAlbertMuseum_2_qa_0,a_VictoriaandAlbertMuseum_2_qa_1,a_VictoriaandAlbertMuseum_2_qa_2,a_VictoriaandAlbertMuseum_2_qa_3,a_VictoriaandAlbertMuseum_2_qa_4]],[a_AmericanBroadcastingCompany_0,[a_AmericanBroadcastingCompany_0_qa_0,a_AmericanBroadcastingCompany_0_qa_1,a_AmericanBroadcastingCompany_0_qa_2,a_AmericanBroadcastingCompany_0_qa_3]],[a_AmericanBroadcastingCompany_3,[a_AmericanBroadcastingCompany_3_qa_0,a_AmericanBroadcastingCompany_3_qa_1,a_AmericanBroadcastingCompany_3_qa_2]],[a_Pharmacy_2,[a_Pharmacy_2_qa_0,a_Pharmacy_2_qa_1,a_Pharmacy_2_qa_2,a_Pharmacy_2_qa_3,a_Pharmacy_2_qa_4]],[a_Pharmacy_4,[a_Pharmacy_4_qa_0,a_Pharmacy_4_qa_1,a_Pharmacy_4_qa_2,a_Pharmacy_4_qa_3,a_Pharmacy_4_qa_4]],[a_Civildisobedience_2,[a_Civildisobedience_2_qa_0,a_Civildisobedience_2_qa_1,a_Civildisobedience_2_qa_2,a_Civildisobedience_2_qa_3,a_Civildisobedience_2_qa_4,a_Civildisobedience_2_qa_5,a_Civildisobedience_2_qa_6,a_Civildisobedience_2_qa_7,a_Civildisobedience_2_qa_8]],[a_Construction_0,[a_Construction_0_qa_0,a_Construction_0_qa_1,a_Construction_0_qa_2,a_Construction_0_qa_3,a_Construction_0_qa_4]],[a_Construction_2,[a_Construction_2_qa_0,a_Construction_2_qa_1,a_Construction_2_qa_2,a_Construction_2_qa_3]],[a_Privateschool_0,[a_Privateschool_0_qa_0,a_Privateschool_0_qa_1,a_Privateschool_0_qa_2,a_Privateschool_0_qa_3]],[a_Privateschool_2,[a_Privateschool_2_qa_0,a_Privateschool_2_qa_1,a_Privateschool_2_qa_2,a_Privateschool_2_qa_3,a_Privateschool_2_qa_4]],[a_HarvardUniversity_0,[a_HarvardUniversity_0_qa_0,a_HarvardUniversity_0_qa_1,a_HarvardUniversity_0_qa_2,a_HarvardUniversity_0_qa_3,a_HarvardUniversity_0_qa_4]],[a_HarvardUniversity_1,[a_HarvardUniversity_1_qa_0,a_HarvardUniversity_1_qa_1,a_HarvardUniversity_1_qa_2]],[a_HarvardUniversity_2,[a_HarvardUniversity_2_qa_0,a_HarvardUniversity_2_qa_1,a_HarvardUniversity_2_qa_2]],[a_HarvardUniversity_3,[a_HarvardUniversity_3_qa_0,a_HarvardUniversity_3_qa_1,a_HarvardUniversity_3_qa_2,a_HarvardUniversity_3_qa_3]],[a_JacksonvilleFlorida_0,[a_JacksonvilleFlorida_0_qa_0,a_JacksonvilleFlorida_0_qa_1,a_JacksonvilleFlorida_0_qa_2,a_JacksonvilleFlorida_0_qa_3,a_JacksonvilleFlorida_0_qa_4]],[a_Economicinequality_2,[a_Economicinequality_2_qa_0,a_Economicinequality_2_qa_1,a_Economicinequality_2_qa_2,a_Economicinequality_2_qa_3,a_Economicinequality_2_qa_4]],[a_DoctorWho_3,[a_DoctorWho_3_qa_0,a_DoctorWho_3_qa_1,a_DoctorWho_3_qa_2,a_DoctorWho_3_qa_3,a_DoctorWho_3_qa_4]],[a_DoctorWho_4,[a_DoctorWho_4_qa_0,a_DoctorWho_4_qa_1,a_DoctorWho_4_qa_2,a_DoctorWho_4_qa_3,a_DoctorWho_4_qa_4]],[a_UniversityofChicago_3,[a_UniversityofChicago_3_qa_0,a_UniversityofChicago_3_qa_1,a_UniversityofChicago_3_qa_2,a_UniversityofChicago_3_qa_3,a_UniversityofChicago_3_qa_4]],[a_Yuandynasty_4,[a_Yuandynasty_4_qa_0,a_Yuandynasty_4_qa_1,a_Yuandynasty_4_qa_2,a_Yuandynasty_4_qa_3]],[a_Kenya_0,[a_Kenya_0_qa_0,a_Kenya_0_qa_1,a_Kenya_0_qa_2,a_Kenya_0_qa_3]],[a_Kenya_1,[a_Kenya_1_qa_0,a_Kenya_1_qa_1,a_Kenya_1_qa_2,a_Kenya_1_qa_3,a_Kenya_1_qa_4]],[a_Kenya_2,[a_Kenya_2_qa_0,a_Kenya_2_qa_1,a_Kenya_2_qa_2,a_Kenya_2_qa_3]],[a_Kenya_3,[a_Kenya_3_qa_0,a_Kenya_3_qa_1,a_Kenya_3_qa_2,a_Kenya_3_qa_3]],[a_IntergovernmentalPanelonClimateChange_0,[a_IntergovernmentalPanelonClimateChange_0_qa_0,a_IntergovernmentalPanelonClimateChange_0_qa_1,a_IntergovernmentalPanelonClimateChange_0_qa_2,a_IntergovernmentalPanelonClimateChange_0_qa_3,a_IntergovernmentalPanelonClimateChange_0_qa_4]],[a_IntergovernmentalPanelonClimateChange_2,[a_IntergovernmentalPanelonClimateChange_2_qa_0,a_IntergovernmentalPanelonClimateChange_2_qa_1,a_IntergovernmentalPanelonClimateChange_2_qa_2,a_IntergovernmentalPanelonClimateChange_2_qa_3]],[a_Chloroplast_1,[a_Chloroplast_1_qa_0,a_Chloroplast_1_qa_1,a_Chloroplast_1_qa_2,a_Chloroplast_1_qa_3,a_Chloroplast_1_qa_4]],[a_Chloroplast_2,[a_Chloroplast_2_qa_0,a_Chloroplast_2_qa_1,a_Chloroplast_2_qa_2,a_Chloroplast_2_qa_3,a_Chloroplast_2_qa_4]],[a_Chloroplast_3,[a_Chloroplast_3_qa_0,a_Chloroplast_3_qa_1,a_Chloroplast_3_qa_2,a_Chloroplast_3_qa_3]],[a_Chloroplast_4,[a_Chloroplast_4_qa_0,a_Chloroplast_4_qa_1,a_Chloroplast_4_qa_2]],[a_Primenumber_4,[a_Primenumber_4_qa_0,a_Primenumber_4_qa_1,a_Primenumber_4_qa_2,a_Primenumber_4_qa_3]],[a_Rhine_0,[a_Rhine_0_qa_0,a_Rhine_0_qa_1,a_Rhine_0_qa_2,a_Rhine_0_qa_3,a_Rhine_0_qa_4,a_Rhine_0_qa_5,a_Rhine_0_qa_6,a_Rhine_0_qa_7]],[a_Rhine_1,[a_Rhine_1_qa_0,a_Rhine_1_qa_1,a_Rhine_1_qa_2]],[a_Rhine_3,[a_Rhine_3_qa_0,a_Rhine_3_qa_1,a_Rhine_3_qa_2,a_Rhine_3_qa_3,a_Rhine_3_qa_4]],[a_ScottishParliament_0,[a_ScottishParliament_0_qa_0,a_ScottishParliament_0_qa_1,a_ScottishParliament_0_qa_2,a_ScottishParliament_0_qa_3,a_ScottishParliament_0_qa_4]],[a_ScottishParliament_1,[a_ScottishParliament_1_qa_0,a_ScottishParliament_1_qa_1,a_ScottishParliament_1_qa_2,a_ScottishParliament_1_qa_3,a_ScottishParliament_1_qa_4]],[a_ScottishParliament_2,[a_ScottishParliament_2_qa_0,a_ScottishParliament_2_qa_1,a_ScottishParliament_2_qa_2,a_ScottishParliament_2_qa_3]],[a_Islamism_1,[a_Islamism_1_qa_0,a_Islamism_1_qa_1,a_Islamism_1_qa_2,a_Islamism_1_qa_3,a_Islamism_1_qa_4]],[a_Islamism_3,[a_Islamism_3_qa_0,a_Islamism_3_qa_1,a_Islamism_3_qa_2,a_Islamism_3_qa_3,a_Islamism_3_qa_4]],[a_Imperialism_0,[a_Imperialism_0_qa_0,a_Imperialism_0_qa_1,a_Imperialism_0_qa_2,a_Imperialism_0_qa_3,a_Imperialism_0_qa_4]],[a_FrenchandIndianWar_0,[a_FrenchandIndianWar_0_qa_0,a_FrenchandIndianWar_0_qa_1,a_FrenchandIndianWar_0_qa_2,a_FrenchandIndianWar_0_qa_3]],[a_FrenchandIndianWar_2,[a_FrenchandIndianWar_2_qa_0,a_FrenchandIndianWar_2_qa_1,a_FrenchandIndianWar_2_qa_2]],[a_FrenchandIndianWar_4,[a_FrenchandIndianWar_4_qa_0,a_FrenchandIndianWar_4_qa_1,a_FrenchandIndianWar_4_qa_2]],[a_Force_3,[a_Force_3_qa_0,a_Force_3_qa_1,a_Force_3_qa_2,a_Force_3_qa_3]],[a_Force_4,[a_Force_4_qa_0,a_Force_4_qa_1,a_Force_4_qa_2,a_Force_4_qa_3]]];
