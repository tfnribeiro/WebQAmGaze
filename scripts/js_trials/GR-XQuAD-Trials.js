var a_SuperBowl50_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Οι <span id="a_SuperBowl50_1_qa_5">Ντένβερ Μπρόνκος</span> νίκησαν τους <span id="a_SuperBowl50_1_qa_0"><span id="a_SuperBowl50_1_qa_10"><span id="a_SuperBowl50_1_qa_13">Πίτσμπεργκ Στίλερς</span></span></span> στο divisional round με σκορ <span id="a_SuperBowl50_1_qa_6">23-16</span>, κερδίζοντας <span id="a_SuperBowl50_1_qa_1"><span id="a_SuperBowl50_1_qa_11">11</span></span> πόντους στα τελευταία τρία λεπτά του παιχνιδιού. Στη συνέχεια, νίκησαν τους υπερασπιστές του τίτλου Super Bowl XLIX  <span id="a_SuperBowl50_1_qa_2"><span id="a_SuperBowl50_1_qa_7"><span id="a_SuperBowl50_1_qa_12"><span id="a_SuperBowl50_1_qa_14">Νιου Ίνγκλαντ Πάτριοτς</span></span></span></span> στο AFC Championship Game με <span id="a_SuperBowl50_1_qa_3">20-18</span>, με interception σε προσπάθεια για 2-point conversion από την πλευρά των Νιου Ίνγκλαντ Πάτριοτς, μόλις <span id="a_SuperBowl50_1_qa_4"><span id="a_SuperBowl50_1_qa_8"><span id="a_SuperBowl50_1_qa_15">17</span></span> δευτερόλεπτα</span> πριν τη λήξη του χρόνου. Παρά τα προβλήματα του <span id="a_SuperBowl50_1_qa_9">Μάνινγκ</span> στα interceptions κατά τη διάρκεια της σεζόν, δεν έχασε κανένα στα δύο τους παιχνίδια στα πλέι-οφ.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιος έχασε από τους Μπρόνκος στο divisional round;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος έχασε από τους Μπρόνκος στο divisional round;`, correct_answer: "Πίτσμπεργκ Στίλερς", trial_name: "a_SuperBowl50_1_qa_0"} 
};var a_SuperBowl50_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσους πόντους σκόραραν οι Μπρόνκος τα τελευταία τρία λεπτά του παιχνιδιού εναντίον της Πίτσμπουργκ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσους πόντους σκόραραν οι Μπρόνκος τα τελευταία τρία λεπτά του παιχνιδιού εναντίον της Πίτσμπουργκ;`, correct_answer: "11", trial_name: "a_SuperBowl50_1_qa_1"} 
};var a_SuperBowl50_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος κέρδισε το Super Bowl XLIX;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος κέρδισε το Super Bowl XLIX;`, correct_answer: "Νιου Ίνγκλαντ Πάτριοτς", trial_name: "a_SuperBowl50_1_qa_2"} 
};var a_SuperBowl50_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια ήταν η τελική βαθμολογία του πρωταθλήματος AFC;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια ήταν η τελική βαθμολογία του πρωταθλήματος AFC;`, correct_answer: "20-18", trial_name: "a_SuperBowl50_1_qa_3"} 
};var a_SuperBowl50_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσος χρόνος έμενε στο ρολόι όταν οι Μπρόνκος έκαναν το interception που έκλεισε τον αγώνα του Πρωταθλήματος AFC;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσος χρόνος έμενε στο ρολόι όταν οι Μπρόνκος έκαναν το interception που έκλεισε τον αγώνα του Πρωταθλήματος AFC;`, correct_answer: "17 δευτερόλεπτα", trial_name: "a_SuperBowl50_1_qa_4"} 
};var a_SuperBowl50_1_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια ομάδα ήταν η νικήτρια στο divisional round μεταξύ των Μπρόνκος και των Στίλερς;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια ομάδα ήταν η νικήτρια στο divisional round μεταξύ των Μπρόνκος και των Στίλερς;`, correct_answer: "Ντένβερ Μπρόνκος", trial_name: "a_SuperBowl50_1_qa_5"} 
};var a_SuperBowl50_1_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια ήταν το τελικό σκορ του παιχνιδιού μεταξύ Μπρόνκος και Στίλερς;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια ήταν το τελικό σκορ του παιχνιδιού μεταξύ Μπρόνκος και Στίλερς;`, correct_answer: "23-16", trial_name: "a_SuperBowl50_1_qa_6"} 
};var a_SuperBowl50_1_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος κέρδισε το Super Bowl XLIX;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος κέρδισε το Super Bowl XLIX;`, correct_answer: "Νιου Ίνγκλαντ Πάτριοτς", trial_name: "a_SuperBowl50_1_qa_7"} 
};var a_SuperBowl50_1_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσα δευτερόλεπτα έμεναν στο παιχνίδι όταν οι Μπρόνκος έκλεψαν την πάσα που κέρδισε το παιχνίδι;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσα δευτερόλεπτα έμεναν στο παιχνίδι όταν οι Μπρόνκος έκλεψαν την πάσα που κέρδισε το παιχνίδι;`, correct_answer: "17", trial_name: "a_SuperBowl50_1_qa_8"} 
};var a_SuperBowl50_1_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Κατά τη διάρκεια των παιχνιδιών πλέι-οφ των Μπρόνκος, ποιος δεν έριξε καθόλου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Κατά τη διάρκεια των παιχνιδιών πλέι-οφ των Μπρόνκος, ποιος δεν έριξε καθόλου;`, correct_answer: "Μάνινγκ", trial_name: "a_SuperBowl50_1_qa_9"} 
};var a_SuperBowl50_1_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιον κέρδισαν οι Μπρόνκος στο divisional game;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιον κέρδισαν οι Μπρόνκος στο divisional game;`, correct_answer: "Πίτσμπεργκ Στίλερς", trial_name: "a_SuperBowl50_1_qa_10"} 
};var a_SuperBowl50_1_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσοι πόντοι σκόραραν οι Μπρόνκος στα τρία τελευταία λεπτά του αγώνα με το Πίτσμπουργκ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσοι πόντοι σκόραραν οι Μπρόνκος στα τρία τελευταία λεπτά του αγώνα με το Πίτσμπουργκ;`, correct_answer: "11", trial_name: "a_SuperBowl50_1_qa_11"} 
};var a_SuperBowl50_1_qa_12 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιον νίκησαν οι Μπρόνκος στο παιχνίδι για το Πρωτάθλημα AFC;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιον νίκησαν οι Μπρόνκος στο παιχνίδι για το Πρωτάθλημα AFC;`, correct_answer: "Νιου Ίνγκλαντ Πάτριοτς", trial_name: "a_SuperBowl50_1_qa_12"} 
};var a_SuperBowl50_1_qa_13 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιον νίκησαν οι Μπρόνκος για να κερδίσουν στο division τους το 2015;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιον νίκησαν οι Μπρόνκος για να κερδίσουν στο division τους το 2015;`, correct_answer: "Πίτσμπεργκ Στίλερς", trial_name: "a_SuperBowl50_1_qa_13"} 
};var a_SuperBowl50_1_qa_14 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιους νίκησαν οι Μπρόνκος για να γίνουν πρωταθλητές AFC;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιους νίκησαν οι Μπρόνκος για να γίνουν πρωταθλητές AFC;`, correct_answer: "Νιου Ίνγκλαντ Πάτριοτς", trial_name: "a_SuperBowl50_1_qa_14"} 
};var a_SuperBowl50_1_qa_15 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσα δευτερόλεπτα έμεναν στο παιχνίδι όταν οι Πάτριοτς απέτυχαν στο 2-point conversion;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσα δευτερόλεπτα έμεναν στο παιχνίδι όταν οι Πάτριοτς απέτυχαν στο 2-point conversion;`, correct_answer: "17", trial_name: "a_SuperBowl50_1_qa_15"} 
};var a_SuperBowl50_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">* O <span id="a_SuperBowl50_2_qa_8"><span id="a_SuperBowl50_2_qa_11"><span id="a_SuperBowl50_2_qa_14">Πέιτον Μάνινγκ</span></span></span> έγινε ο πρώτος κουόρτερμπακ που οδήγησε <span id="a_SuperBowl50_2_qa_9"><span id="a_SuperBowl50_2_qa_10">δύο</span></span> διαφορετικές ομάδες σε πολλαπλά Σούπερ Μπόουλ. Είναι επίσης ο παλαιότερος πασαδόρος που έπαιξε ποτέ σε Σούπερ Μπόουλ σε ηλικία <span id="a_SuperBowl50_2_qa_0"><span id="a_SuperBowl50_2_qa_15">39</span></span> ετών. Το προηγούμενο ρεκόρ κατείχε ο <span id="a_SuperBowl50_2_qa_1"><span id="a_SuperBowl50_2_qa_6"><span id="a_SuperBowl50_2_qa_12"><span id="a_SuperBowl50_2_qa_16">Τζον Έλγουεϊ</span></span></span></span>, που οδήγησε τους <span id="a_SuperBowl50_2_qa_4"><span id="a_SuperBowl50_2_qa_5">Broncos</span></span> στη νίκη στο <span id="a_SuperBowl50_2_qa_13">Super Bowl XLIII</span> σε ηλικία <span id="a_SuperBowl50_2_qa_2"><span id="a_SuperBowl50_2_qa_7">38</span></span> και είναι αυτήν τη στιγμή <span id="a_SuperBowl50_2_qa_3">Εκτελεστικός Αντιπρόεδρος Ποδοσφαίρου και Γενικός Διευθυντής</span> των Ντένβερ.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Πόσο χρονών ήταν ο Πέιτον Μάνινγκ όταν έπαιζε στο Super Bowl 50;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσο χρονών ήταν ο Πέιτον Μάνινγκ όταν έπαιζε στο Super Bowl 50;`, correct_answer: "39", trial_name: "a_SuperBowl50_2_qa_0"} 
};var a_SuperBowl50_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος είχε στο παρελθόν το ρεκόρ του μεγαλύτερου σε ηλικία κουόρτερμπακ που έπαιξε σε Σούπερ Μπόουλ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος είχε στο παρελθόν το ρεκόρ του μεγαλύτερου σε ηλικία κουόρτερμπακ που έπαιξε σε Σούπερ Μπόουλ;`, correct_answer: "Τζον Έλγουεϊ", trial_name: "a_SuperBowl50_2_qa_1"} 
};var a_SuperBowl50_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσο χρονών ήταν ο Τζον Έλγουεϊ όταν έπαιζε στο Super Bowl XXXIII;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσο χρονών ήταν ο Τζον Έλγουεϊ όταν έπαιζε στο Super Bowl XXXIII;`, correct_answer: "38", trial_name: "a_SuperBowl50_2_qa_2"} 
};var a_SuperBowl50_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι ρόλο έχει σήμερα ο Τζον Έλγουεϊ στο franchise των Μπρόνκος;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι ρόλο έχει σήμερα ο Τζον Έλγουεϊ στο franchise των Μπρόνκος;`, correct_answer: "Εκτελεστικός Αντιπρόεδρος Ποδοσφαίρου και Γενικός Διευθυντής", trial_name: "a_SuperBowl50_2_qa_3"} 
};var a_SuperBowl50_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πού έπαιζε ο Τζον Έλγουεϊ στο Super Bowl XXXIII;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πού έπαιζε ο Τζον Έλγουεϊ στο Super Bowl XXXIII;`, correct_answer: "Broncos", trial_name: "a_SuperBowl50_2_qa_4"} 
};var a_SuperBowl50_2_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια ομάδα ήταν η νικήτρια του Super Bowl XXXIII;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια ομάδα ήταν η νικήτρια του Super Bowl XXXIII;`, correct_answer: "Broncos", trial_name: "a_SuperBowl50_2_qa_5"} 
};var a_SuperBowl50_2_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος είναι ο Γενικός Διευθυντής των Μπρόνκος;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος είναι ο Γενικός Διευθυντής των Μπρόνκος;`, correct_answer: "Τζον Έλγουεϊ", trial_name: "a_SuperBowl50_2_qa_6"} 
};var a_SuperBowl50_2_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσο χρονών ήταν ο Έλγουεϊ όταν κέρδισε το Σούπερ Μπόουλ XXXIII;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσο χρονών ήταν ο Έλγουεϊ όταν κέρδισε το Σούπερ Μπόουλ XXXIII;`, correct_answer: "38", trial_name: "a_SuperBowl50_2_qa_7"} 
};var a_SuperBowl50_2_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος έχει το ρεκόρ του μεγαλύτερου ηλικιακά κουόρτερμπακ στην ιστορία του Σούπερ Μπόουλ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος έχει το ρεκόρ του μεγαλύτερου ηλικιακά κουόρτερμπακ στην ιστορία του Σούπερ Μπόουλ;`, correct_answer: "Πέιτον Μάνινγκ", trial_name: "a_SuperBowl50_2_qa_8"} 
};var a_SuperBowl50_2_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Σε πόσες ομάδες έχει παίξει ο Μάνινγκ που έφτασαν στο Σούπερ Μπόουλ όσο εκείνος ήταν στην ομάδα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε πόσες ομάδες έχει παίξει ο Μάνινγκ που έφτασαν στο Σούπερ Μπόουλ όσο εκείνος ήταν στην ομάδα;`, correct_answer: "δύο", trial_name: "a_SuperBowl50_2_qa_9"} 
};var a_SuperBowl50_2_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ο Πέιτον Μάνινγκ με πόσες διαφορετικές ομάδες πήγε στο Σούπερ Μπόουλ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ο Πέιτον Μάνινγκ με πόσες διαφορετικές ομάδες πήγε στο Σούπερ Μπόουλ;`, correct_answer: "δύο", trial_name: "a_SuperBowl50_2_qa_10"} 
};var a_SuperBowl50_2_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος είναι ο μεγαλύτερος σε ηλικία κουόρτερμπακ που έπαιξε σε Σούπερ Μπόουλ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος είναι ο μεγαλύτερος σε ηλικία κουόρτερμπακ που έπαιξε σε Σούπερ Μπόουλ;`, correct_answer: "Πέιτον Μάνινγκ", trial_name: "a_SuperBowl50_2_qa_11"} 
};var a_SuperBowl50_2_qa_12 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πριν από τον Μάνινγκ, ποιος ήταν ο μεγαλύτερος σε ηλικία κουόρτερμπακ που έπαιξε σε Σούπερ Μπόουλ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πριν από τον Μάνινγκ, ποιος ήταν ο μεγαλύτερος σε ηλικία κουόρτερμπακ που έπαιξε σε Σούπερ Μπόουλ;`, correct_answer: "Τζον Έλγουεϊ", trial_name: "a_SuperBowl50_2_qa_12"} 
};var a_SuperBowl50_2_qa_13 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο Σούπερ Μπόουλ κέρδισε ο Έλγουεϊ στα 38 του;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο Σούπερ Μπόουλ κέρδισε ο Έλγουεϊ στα 38 του;`, correct_answer: "Super Bowl XLIII", trial_name: "a_SuperBowl50_2_qa_13"} 
};var a_SuperBowl50_2_qa_14 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος ήταν ο πρώτος κουόρτερμπακ που πήγε με δύο ομάδες σε περισσότερα από ένα Σούπερ Μπόουλ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος ήταν ο πρώτος κουόρτερμπακ που πήγε με δύο ομάδες σε περισσότερα από ένα Σούπερ Μπόουλ;`, correct_answer: "Πέιτον Μάνινγκ", trial_name: "a_SuperBowl50_2_qa_14"} 
};var a_SuperBowl50_2_qa_15 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσο χρονών ήταν ο Μάνινγκ όταν έπαιζε στο Super Bowl 50;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσο χρονών ήταν ο Μάνινγκ όταν έπαιζε στο Super Bowl 50;`, correct_answer: "39", trial_name: "a_SuperBowl50_2_qa_15"} 
};var a_SuperBowl50_2_qa_16 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο είναι το όνομα του κουόρτερμπακ που ήταν 38 ετών στο Super Bowl XXXIII;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο είναι το όνομα του κουόρτερμπακ που ήταν 38 ετών στο Super Bowl XXXIII;`, correct_answer: "Τζον Έλγουεϊ", trial_name: "a_SuperBowl50_2_qa_16"} 
};var a_SuperBowl50_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Η <span id="a_SuperBowl50_3_qa_0"><span id="a_SuperBowl50_3_qa_10">έξι</span></span> φορές βραβευμένη με Γκράμι και υποψήφια για <span id="a_SuperBowl50_3_qa_2">Όσκαρ</span> <span id="a_SuperBowl50_3_qa_5"><span id="a_SuperBowl50_3_qa_7"><span id="a_SuperBowl50_3_qa_9">Lady Gaga</span></span></span> ερμήνευσε <span id="a_SuperBowl50_3_qa_1"><span id="a_SuperBowl50_3_qa_3">τον εθνικό ύμνο</span></span>, ενώ η βραβευμένη με Όσκαρ <span id="a_SuperBowl50_3_qa_6"><span id="a_SuperBowl50_3_qa_8"><span id="a_SuperBowl50_3_qa_11">Μάρλι Μάτλιν</span></span></span> έκανε τη μετάφραση στην <span id="a_SuperBowl50_3_qa_4">Αμερικανική Νοηματική Γλώσσα</span> (ASL).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Πόσα Γκράμι κέρδισε η Lady Gaga;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσα Γκράμι κέρδισε η Lady Gaga;`, correct_answer: "έξι", trial_name: "a_SuperBowl50_3_qa_0"} 
};var a_SuperBowl50_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι τραγούδησε η Lady Gaga;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι τραγούδησε η Lady Gaga;`, correct_answer: "τον εθνικό ύμνο", trial_name: "a_SuperBowl50_3_qa_1"} 
};var a_SuperBowl50_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι βραβείο έχει κερδίσει η Μάρλι Μάτλιν;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι βραβείο έχει κερδίσει η Μάρλι Μάτλιν;`, correct_answer: "Όσκαρ", trial_name: "a_SuperBowl50_3_qa_2"} 
};var a_SuperBowl50_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι μετέφρασε η Μάρλι Μάτλιν;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι μετέφρασε η Μάρλι Μάτλιν;`, correct_answer: "τον εθνικό ύμνο", trial_name: "a_SuperBowl50_3_qa_3"} 
};var a_SuperBowl50_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Σε ποια γλώσσα μετέφρασε η Μάρλι Μάτλιν τον εθνικό ύμνο;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε ποια γλώσσα μετέφρασε η Μάρλι Μάτλιν τον εθνικό ύμνο;`, correct_answer: "Αμερικανική Νοηματική Γλώσσα", trial_name: "a_SuperBowl50_3_qa_4"} 
};var a_SuperBowl50_3_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια τραγούδησε τον εθνικό ύμνο;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια τραγούδησε τον εθνικό ύμνο;`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_5"} 
};var a_SuperBowl50_3_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια ηθοποιός έκανε τη μετάφραση στη νοηματική γλώσσα για το παιχνίδι;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια ηθοποιός έκανε τη μετάφραση στη νοηματική γλώσσα για το παιχνίδι;`, correct_answer: "Μάρλι Μάτλιν", trial_name: "a_SuperBowl50_3_qa_6"} 
};var a_SuperBowl50_3_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια τραγούδησε τον Εθνικό Ύμνο στο Super Bowl 50;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια τραγούδησε τον Εθνικό Ύμνο στο Super Bowl 50;`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_7"} 
};var a_SuperBowl50_3_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια ηθοποιός έκανε τον Εθνικό Ύμνο στη νοηματική γλώσσα στο Superbowl 50;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια ηθοποιός έκανε τον Εθνικό Ύμνο στη νοηματική γλώσσα στο Superbowl 50;`, correct_answer: "Μάρλι Μάτλιν", trial_name: "a_SuperBowl50_3_qa_8"} 
};var a_SuperBowl50_3_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια τραγούδησε τον Εθνικό Ύμνο του Super Bowl 50;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια τραγούδησε τον Εθνικό Ύμνο του Super Bowl 50;`, correct_answer: "Lady Gaga", trial_name: "a_SuperBowl50_3_qa_9"} 
};var a_SuperBowl50_3_qa_10 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσα βραβεία Γκράμι λέει το κείμενο ότι κέρδισε η Lady Gaga;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσα βραβεία Γκράμι λέει το κείμενο ότι κέρδισε η Lady Gaga;`, correct_answer: "έξι", trial_name: "a_SuperBowl50_3_qa_10"} 
};var a_SuperBowl50_3_qa_11 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος έκανε τη μετάφραση στη νοηματική γλώσσα για τον Εθνικό ύμνο στο Super Bowl 50;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος έκανε τη μετάφραση στη νοηματική γλώσσα για τον Εθνικό ύμνο στο Super Bowl 50;`, correct_answer: "Μάρλι Μάτλιν", trial_name: "a_SuperBowl50_3_qa_11"} 
};var a_Warsaw_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Σε κοντινή απόσταση, στο <span id="a_Warsaw_0_qa_0">Ogród Saski</span> (το <span id="a_Warsaw_0_qa_1">Πάρκο της Σαξονίας</span>), το Θερινό Θέατρο ήταν σε λειτουργία από το <span id="a_Warsaw_0_qa_2">1870 έως το 1939</span> και στη μεσοπολεμική περίοδο το θεατρικό συγκρότημα περιελάμβανε επίσης το πρώτο λογοτεχνικό καμπαρέ της Βαρσοβίας, το <span id="a_Warsaw_0_qa_3">Momus</span>, και το μουσικό θέατρο του Λεόν Σίλλερ, Melodram. Το θέατρο <span id="a_Warsaw_0_qa_4">Wojciech Bogusławski</span> (1922-26), ήταν το καλύτερο παράδειγμα «μνημειώδους θεάτρου της Πολωνίας». Από τα μέσα της δεκαετίας του 1930, το κτίριο του Great Theatre στεγάζει το Ίνστιτούτο Δραματικών Τεχνών Upati —την πρώτη Κρατική Ακαδημία Δραματικής Τέχνης, με τμήμα ηθοποιίας και τμήμα σκηνοθεσίας.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Πώς λέγεται το Πάρκο της Σαξονίας στα Πολωνικά;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς λέγεται το Πάρκο της Σαξονίας στα Πολωνικά;`, correct_answer: "Ogród Saski", trial_name: "a_Warsaw_0_qa_0"} 
};var a_Warsaw_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πού βρισκόταν το Θερινό Θέατρο;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πού βρισκόταν το Θερινό Θέατρο;`, correct_answer: "Πάρκο της Σαξονίας", trial_name: "a_Warsaw_0_qa_1"} 
};var a_Warsaw_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο διάστημα λειτουργούσε το Θερινό Θέατρο;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο διάστημα λειτουργούσε το Θερινό Θέατρο;`, correct_answer: "1870 έως το 1939", trial_name: "a_Warsaw_0_qa_2"} 
};var a_Warsaw_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο ήταν το πρώτο λογοτεχνικό καμπαρέ της Βαρσοβίας;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο ήταν το πρώτο λογοτεχνικό καμπαρέ της Βαρσοβίας;`, correct_answer: "Momus", trial_name: "a_Warsaw_0_qa_3"} 
};var a_Warsaw_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο θέατρο ήταν το καλύτερο παράδειγμα «μνημειώδους πολωνικού θεάτρου»;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο θέατρο ήταν το καλύτερο παράδειγμα «μνημειώδους πολωνικού θεάτρου»;`, correct_answer: "Wojciech Bogusławski", trial_name: "a_Warsaw_0_qa_4"} 
};var a_Warsaw_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Οι τοπικοί αντίπαλοί τους, <span id="a_Warsaw_1_qa_0">Πολόνια Βαρσοβίας</span>, έχουν πολύ λιγότερους υποστηρικτές, αν και κατάφεραν να κερδίσουν το πρωτάθλημα της Πολωνίας (Ekstraklasa) το 2000. Κέρδισαν επίσης το εθνικό πρωτάθλημα το <span id="a_Warsaw_1_qa_1">1946</span> και κατέκτησαν το Κύπελλο <span id="a_Warsaw_1_qa_2">δύο φορές</span>. Η έδρα της Πολόνια βρίσκεται στην <span id="a_Warsaw_1_qa_3">Konwiktorska Street</span>, σε απόσταση δέκα λεπτών με τα πόδια, βόρεια της Παλιάς Πόλης. Η Πολόνια υποβιβάστηκε από την κορυφαία εθνική κατηγορία το 2013 λόγω <span id="a_Warsaw_1_qa_4">οικονομικής κατάρρευσης</span>. Τώρα παίζουν στην 4η λίγκα (5η βαθμίδα στην Πολωνία) – την κατώτερη επαγγελματική λίγκα της Πολωνικής Ομοσπονδίας Ποδοσφαίρου (PZPN).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιος κέρδισε το πρωτάθλημα Ekstraklasa το 2000;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος κέρδισε το πρωτάθλημα Ekstraklasa το 2000;`, correct_answer: "Πολόνια Βαρσοβίας", trial_name: "a_Warsaw_1_qa_0"} 
};var a_Warsaw_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πότε κέρδισε η Πολόνια Βαρσοβίας το πρωτάθλημα της χώρας πριν το 2000;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε κέρδισε η Πολόνια Βαρσοβίας το πρωτάθλημα της χώρας πριν το 2000;`, correct_answer: "1946", trial_name: "a_Warsaw_1_qa_1"} 
};var a_Warsaw_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσες φορές κέρδισε η Πολόνια το κύπελλο;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσες φορές κέρδισε η Πολόνια το κύπελλο;`, correct_answer: "δύο φορές", trial_name: "a_Warsaw_1_qa_2"} 
};var a_Warsaw_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πού βρίσκεται η έδρα της Πολόνια;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πού βρίσκεται η έδρα της Πολόνια;`, correct_answer: "Konwiktorska Street", trial_name: "a_Warsaw_1_qa_3"} 
};var a_Warsaw_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Γιατί η Πολόνια υποβιβάστηκε από την κορυφαία κατηγορία της χώρας το 2013;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Γιατί η Πολόνια υποβιβάστηκε από την κορυφαία κατηγορία της χώρας το 2013;`, correct_answer: "οικονομικής κατάρρευσης", trial_name: "a_Warsaw_1_qa_4"} 
};var a_Normans_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Μεταξύ 1402 και το 1405, η εκστρατεία του Νορμανδού ευγενή Jean de Bethencourt και του Poitevine Gadifer de la Salle οδήγησε στην κατάκτηση των Κανάριων Νήσων Lanzarote, Fuerteventura και El Hierro ανοιχτά των ακτών του Ατλαντικού στην <span id="a_Normans_4_qa_0">Αφρική</span>. Τα στρατεύματα συγκεντρώθηκαν στη Νορμανδία, τη Γασκωνία και αργότερα ενισχύθηκαν από Καστιλιάνους αποίκους.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ανοιχτά των ακτών ποιας ηπείρου βρίσκονται τα Κανάρια Νησιά;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ανοιχτά των ακτών ποιας ηπείρου βρίσκονται τα Κανάρια Νησιά;`, correct_answer: "Αφρική", trial_name: "a_Normans_4_qa_0"} 
};var a_NikolaTesla_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Μετά την αποχώρηση του από την εταιρεία του Έντισον, ο <span id="a_NikolaTesla_1_qa_9">Τέσλα</span> συνεργάστηκε με δύο επιχειρηματίες το <span id="a_NikolaTesla_1_qa_6">1886</span>, τους <span id="a_NikolaTesla_1_qa_0"><span id="a_NikolaTesla_1_qa_5">Ρόμπερτ Λέιν και ο Μπέντζαμιν Βέιλ</span></span>, οι οποίοι συμφώνησαν να χρηματοδοτήσουν μια εταιρεία ηλεκτρικού φωτισμού με το όνομα του Τέσλα, την <span id="a_NikolaTesla_1_qa_1"><span id="a_NikolaTesla_1_qa_7">Tesla Electric Light & Manufacturing</span></span>. Η εταιρεία <span id="a_NikolaTesla_1_qa_2">εγκατέστησε <span id="a_NikolaTesla_1_qa_4">συστήματα φωτισμού με βάση λαμπτήρες τόξου</span> που σχεδιάστηκαν από τον Τέσλα</span> και, επίσης, είχε σχέδια για δυναμό - μετατροπείς μηχανικής σε ηλεκτρική ενέργεια, που είναι και τα πρώτα <span id="a_NikolaTesla_1_qa_3">διπλώματα ευρεσιτεχνίας</span> που έλαβε ο Τέσλα στις ΗΠΑ.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Με ποιον συνεργάστηκε ο Τέσλα το 1886;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Με ποιον συνεργάστηκε ο Τέσλα το 1886;`, correct_answer: "Ρόμπερτ Λέιν και ο Μπέντζαμιν Βέιλ", trial_name: "a_NikolaTesla_1_qa_0"} 
};var a_NikolaTesla_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι χρηματοδότησαν οι Λέιν και Βέιλ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι χρηματοδότησαν οι Λέιν και Βέιλ;`, correct_answer: "Tesla Electric Light & Manufacturing", trial_name: "a_NikolaTesla_1_qa_1"} 
};var a_NikolaTesla_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι έκανε το Tesla Electric Light & Manufacturing;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι έκανε το Tesla Electric Light & Manufacturing;`, correct_answer: "εγκατέστησε συστήματα φωτισμού με βάση λαμπτήρες τόξου που σχεδιάστηκαν από τον Τέσλα", trial_name: "a_NikolaTesla_1_qa_2"} 
};var a_NikolaTesla_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι έλαβε πρώτα ο Τέσλα μετά την έναρξη της εταιρείας του;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι έλαβε πρώτα ο Τέσλα μετά την έναρξη της εταιρείας του;`, correct_answer: "διπλώματα ευρεσιτεχνίας", trial_name: "a_NikolaTesla_1_qa_3"} 
};var a_NikolaTesla_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι παρήγαγε η εταιρεία του Τέσλα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι παρήγαγε η εταιρεία του Τέσλα;`, correct_answer: "συστήματα φωτισμού με βάση λαμπτήρες τόξου", trial_name: "a_NikolaTesla_1_qa_4"} 
};var a_NikolaTesla_1_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια ήταν τα ονόματα των νέων συνεργατών του Τέσλα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια ήταν τα ονόματα των νέων συνεργατών του Τέσλα;`, correct_answer: "Ρόμπερτ Λέιν και ο Μπέντζαμιν Βέιλ", trial_name: "a_NikolaTesla_1_qa_5"} 
};var a_NikolaTesla_1_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πότε έγινε η συνεργασία μεταξύ Τέσλα, Λέιν και Βέιλ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε έγινε η συνεργασία μεταξύ Τέσλα, Λέιν και Βέιλ;`, correct_answer: "1886", trial_name: "a_NikolaTesla_1_qa_6"} 
};var a_NikolaTesla_1_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο ήταν το όνομα της εταιρείας που χρηματοδότησαν οι επιχειρηματίες;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο ήταν το όνομα της εταιρείας που χρηματοδότησαν οι επιχειρηματίες;`, correct_answer: "Tesla Electric Light & Manufacturing", trial_name: "a_NikolaTesla_1_qa_7"} 
};var a_NikolaTesla_1_qa_8 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι έκανε το Tesla Electric Light & Manufacturing;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι έκανε το Tesla Electric Light & Manufacturing;`, correct_answer: "εγκατέστησε συστήματα φωτισμού με βάση λαμπτήρες τόξου", trial_name: "a_NikolaTesla_1_qa_8"} 
};var a_NikolaTesla_1_qa_9 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος σχεδίασε τα συστήματα φωτισμού που εγκατέστησε η Tesla Electric Light & Manufacturing;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος σχεδίασε τα συστήματα φωτισμού που εγκατέστησε η Tesla Electric Light & Manufacturing;`, correct_answer: "Τέσλα", trial_name: "a_NikolaTesla_1_qa_9"} 
};var a_NikolaTesla_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Στα χρόνια που ακολούθησαν μετά από αυτές τις φήμες, ούτε ο Τέσλα ούτε ο <span id="a_NikolaTesla_3_qa_1">Έντισον</span> κέρδισε το βραβείο (αν και ο Έντισον έλαβε μία από τις <span id="a_NikolaTesla_3_qa_0">38</span> υποψηφιότητες το 1915 και ο Tesla έλαβε μία από τις 38 υποψηφιότητες το <span id="a_NikolaTesla_3_qa_2">1937</span>).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Πόσες υποψηφιότητες υπήρχαν για το βραβείο το 1915;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσες υποψηφιότητες υπήρχαν για το βραβείο το 1915;`, correct_answer: "38", trial_name: "a_NikolaTesla_3_qa_0"} 
};var a_NikolaTesla_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος έλαβε μια υποψηφιότητα το 1915;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος έλαβε μια υποψηφιότητα το 1915;`, correct_answer: "Έντισον", trial_name: "a_NikolaTesla_3_qa_1"} 
};var a_NikolaTesla_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια χρονιά πήρε ο Τέσλα βραβείο Νόμπελ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια χρονιά πήρε ο Τέσλα βραβείο Νόμπελ;`, correct_answer: "1937", trial_name: "a_NikolaTesla_3_qa_2"} 
};var a_NikolaTesla_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Ωστόσο, οι θρησκευτικές του απόψεις παραμένουν <span id="a_NikolaTesla_4_qa_1">αβέβαιες</span> λόγω άλλων δηλώσεων που έκανε. Για παράδειγμα, στο άρθρο του, <span id="a_NikolaTesla_4_qa_0">"Α Machine to End <span id="a_NikolaTesla_4_qa_2">War</span>"</span>,  που δημοσιεύθηκε το 1937, ο Tesla δήλωσε:</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιο άρθρο δημοσιεύθηκε το 1937;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο άρθρο δημοσιεύθηκε το 1937;`, correct_answer: "Α Machine to End War", trial_name: "a_NikolaTesla_4_qa_0"} 
};var a_NikolaTesla_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Λόγω ορισμένων δηλώσεων, ποια πιστεύεται ότι ήταν η κατάσταση των θρησκευτικών του απόψεων;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Λόγω ορισμένων δηλώσεων, ποια πιστεύεται ότι ήταν η κατάσταση των θρησκευτικών του απόψεων;`, correct_answer: "αβέβαιες", trial_name: "a_NikolaTesla_4_qa_1"} 
};var a_NikolaTesla_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Στον τίτλο του άρθρου, τι ήλπιζε να τελειώσει η μηχανή;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Στον τίτλο του άρθρου, τι ήλπιζε να τελειώσει η μηχανή;`, correct_answer: "War", trial_name: "a_NikolaTesla_4_qa_2"} 
};var a_Computationalcomplexitytheory_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Computationalcomplexitytheory_0_qa_0">Η θεωρία πολυπλοκότητας</span> είναι ένας κλάδος της θεωρίας υπολογισμού στην θεωρητική επιστήμη των υπολογιστών που επικεντρώνεται στην ταξινόμηση <span id="a_Computationalcomplexitytheory_0_qa_2">υπολογιστικών προβλημάτων</span> με βάση την <span id="a_Computationalcomplexitytheory_0_qa_1">εγγενή δυσκολία</span> τους και στον συσχετισμό αυτών των κλάσεων μεταξύ τους. Ένα υπολογιστικό πρόβλημα ορίζεται ως η εργασία που κατά βάση μπορεί να εκτελεστεί ή να λυθεί από έναν υπολογιστή. Αυτό με άλλα λόγια σημαίνει ότι ένα υπολογιστικό πρόβλημα μπορεί να λυθεί με μηχανική εφαρμογή μαθηματικών βημάτων, όπως με έναν αλγόριθμο.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιος κλάδος της θεωρητικής επιστήμης των υπολογιστών ασχολείται ευρέως με την ταξινόμηση των υπολογιστικών προβλημάτων με βάση τη δυσκολία και την κλάση ισοδυναμίας;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος κλάδος της θεωρητικής επιστήμης των υπολογιστών ασχολείται ευρέως με την ταξινόμηση των υπολογιστικών προβλημάτων με βάση τη δυσκολία και την κλάση ισοδυναμίας;`, correct_answer: "Η θεωρία πολυπλοκότητας", trial_name: "a_Computationalcomplexitytheory_0_qa_0"} 
};var a_Computationalcomplexitytheory_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Με βάση ποιο κύριο χαρακτηριστικό ταξινομούνται τα υπολογιστικά προβλήματα κατά την υπολογιστική θεωρία πολυπλοκότητας;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Με βάση ποιο κύριο χαρακτηριστικό ταξινομούνται τα υπολογιστικά προβλήματα κατά την υπολογιστική θεωρία πολυπλοκότητας;`, correct_answer: "εγγενή δυσκολία", trial_name: "a_Computationalcomplexitytheory_0_qa_1"} 
};var a_Computationalcomplexitytheory_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος όρος χρησιμοποιείται για μια εργασία που γενικά μπορεί να επιλυθεί από έναν υπολογιστή;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος όρος χρησιμοποιείται για μια εργασία που γενικά μπορεί να επιλυθεί από έναν υπολογιστή;`, correct_answer: "υπολογιστικών προβλημάτων", trial_name: "a_Computationalcomplexitytheory_0_qa_2"} 
};var a_Computationalcomplexitytheory_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Κατά την εξέταση υπολογιστικών προβλημάτων, ένα <span id="a_Computationalcomplexitytheory_1_qa_0">στιγμιότυπο του προβλήματος</span> είναι μια συμβολοσειρά πάνω σε ένα αλφάβητο. Συνήθως, ως αλφάβητο ορίζεται το <span id="a_Computationalcomplexitytheory_1_qa_1">δυαδικό</span> αλφάβητο (δηλαδή, το σύνολο {0,1}), και έτσι οι συμβολοσειρές είναι <span id="a_Computationalcomplexitytheory_1_qa_2">συμβολοσειρές μπιτ</span>. Όπως και σε έναν πραγματικό υπολογιστή, τα μαθηματικά αντικείμενα εκτός των συμβολοσειρών μπιτ πρέπει να είναι κατάλληλα κωδικοποιημένα. Για παράδειγμα, οι ακέραιοι μπορούν να αναπαρασταθούν σε <span id="a_Computationalcomplexitytheory_1_qa_3">δυαδικό σύστημα</span> και τα γραφήματα μπορούν να κωδικοποιηθούν απευθείας μέσω των <span id="a_Computationalcomplexitytheory_1_qa_4">πινάκων γειτνίασής τους</span> ή κωδικοποιώντας τις λίστες γειτνίασης σε δυαδικό σύστημα.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Σε ένα υπολογιστικό πρόβλημα, τι μπορεί να περιγραφεί ως μια συμβολοσειρά πάνω σε ένα αλφάβητο;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε ένα υπολογιστικό πρόβλημα, τι μπορεί να περιγραφεί ως μια συμβολοσειρά πάνω σε ένα αλφάβητο;`, correct_answer: "στιγμιότυπο του προβλήματος", trial_name: "a_Computationalcomplexitytheory_1_qa_0"} 
};var a_Computationalcomplexitytheory_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο είναι το όνομα του αλφάβητου που χρησιμοποιείται πιο συχνά σε ένα στιγμιότυπο προβλήματος;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο είναι το όνομα του αλφάβητου που χρησιμοποιείται πιο συχνά σε ένα στιγμιότυπο προβλήματος;`, correct_answer: "δυαδικό", trial_name: "a_Computationalcomplexitytheory_1_qa_1"} 
};var a_Computationalcomplexitytheory_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος είναι ο άλλος όρος που χρησιμοποιείται για την συμβολοσειρά ενός στιγμιότυπου προβλήματος;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος είναι ο άλλος όρος που χρησιμοποιείται για την συμβολοσειρά ενός στιγμιότυπου προβλήματος;`, correct_answer: "συμβολοσειρές μπιτ", trial_name: "a_Computationalcomplexitytheory_1_qa_2"} 
};var a_Computationalcomplexitytheory_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Στην κωδικοποίηση των μαθηματικών αντικειμένων, με ποιον τρόπο εκφράζονται συνήθως οι ακέραιοι;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Στην κωδικοποίηση των μαθηματικών αντικειμένων, με ποιον τρόπο εκφράζονται συνήθως οι ακέραιοι;`, correct_answer: "δυαδικό σύστημα", trial_name: "a_Computationalcomplexitytheory_1_qa_3"} 
};var a_Computationalcomplexitytheory_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος είναι ο ένας τρόπος με τον οποίον μπορούν να κωδικοποιηθούν τα γραφήματα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος είναι ο ένας τρόπος με τον οποίον μπορούν να κωδικοποιηθούν τα γραφήματα;`, correct_answer: "πινάκων γειτνίασής τους", trial_name: "a_Computationalcomplexitytheory_1_qa_4"} 
};var a_Computationalcomplexitytheory_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Είναι δελεαστικό να σκεφτούμε ότι η έννοια των προβλημάτων συνάρτησης είναι πολύ πιο πλούσια από την έννοια των προβλημάτων απόφασης. Ωστόσο, αυτό δεν συμβαίνει στην πραγματικότητα, αφού τα προβλήματα συνάρτησης μπορούν να αναδιατυπωθούν <span id="a_Computationalcomplexitytheory_2_qa_0">ως προβλήματα απόφασης</span>. Για παράδειγμα, ο πολλαπλασιασμός δύο ακέραιων μπορεί να εκφραστεί ως ένα <span id="a_Computationalcomplexitytheory_2_qa_1">σύνολο τριών στοιχείων</span> (α, β, γ), ώστε να ισχύει η σχέση α × β = γ. Η απόφαση για το αν μια δεδομένη τριάδα είναι μέρος αυτού του συνόλου αντιστοιχεί στην επίλυση του προβλήματος του πολλαπλασιασμού δύο αριθμών.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Πώς μπορούν να επαναδιατυπωθούν τα προβλήματα συνάρτησης;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς μπορούν να επαναδιατυπωθούν τα προβλήματα συνάρτησης;`, correct_answer: "ως προβλήματα απόφασης", trial_name: "a_Computationalcomplexitytheory_2_qa_0"} 
};var a_Computationalcomplexitytheory_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Εάν δύο ακέραιοι πολλαπλασιαστούν και εξάγουν μια τιμή, πώς ονομάζεται αυτό το σύνολο;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Εάν δύο ακέραιοι πολλαπλασιαστούν και εξάγουν μια τιμή, πώς ονομάζεται αυτό το σύνολο;`, correct_answer: "σύνολο τριών στοιχείων", trial_name: "a_Computationalcomplexitytheory_2_qa_1"} 
};var a_Computationalcomplexitytheory_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Για πολλές γνωστές κατηγορίες πολυπλοκότητας υπάρχει η υποψία <span id="a_Computationalcomplexitytheory_4_qa_0">ότι είναι άνισες</span>, αλλά αυτό δεν έχει αποδειχθεί. Για παράδειγμα ,<span id="a_Computationalcomplexitytheory_4_qa_1">P ⊆ NP ⊆ PP ⊆ PSPACE</span>, αλλά είναι πιθανό ότι P = PSPACE. Εάν το P δεν είναι ίσο με το NP, τότε το P δεν ισούται ούτε με το PSPACE. Δεδομένου ότι υπάρχουν πολλές γνωστές κατηγορίες πολυπλοκότητας <span id="a_Computationalcomplexitytheory_4_qa_2">μεταξύ των P και PSPACE</span>, όπως RP, BPP, PP, BQP, MA, PH, κλπ., είναι πιθανό όλες αυτές οι κατηγορίες πολυπλοκότητας να συμπεριληφθούν σε μία κατηγορία. <span id="a_Computationalcomplexitytheory_4_qa_3">Αν αποδειχτεί ότι οποιαδήποτε από αυτές τις κλάσεις είναι άνιση</span>, αυτό θα ήταν μια σημαντική ανακάλυψη στη θεωρία πολυπλοκότητας.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποια είναι η αναπόδεικτη υπόθεση που αποδίδεται γενικά στην αξία των τάξεων πολυπλοκότητας;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια είναι η αναπόδεικτη υπόθεση που αποδίδεται γενικά στην αξία των τάξεων πολυπλοκότητας;`, correct_answer: "ότι είναι άνισες", trial_name: "a_Computationalcomplexitytheory_4_qa_0"} 
};var a_Computationalcomplexitytheory_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια έκφραση μπορεί να χρησιμοποιηθεί για να απεικονίσει την υποψία ανισότητας στις κλάσεις πολυπλοκότητας;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια έκφραση μπορεί να χρησιμοποιηθεί για να απεικονίσει την υποψία ανισότητας στις κλάσεις πολυπλοκότητας;`, correct_answer: "P ⊆ NP ⊆ PP ⊆ PSPACE", trial_name: "a_Computationalcomplexitytheory_4_qa_1"} 
};var a_Computationalcomplexitytheory_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πού μπορούν να εντοπιστούν οι κατηγορίες πολυπλοκότητας RP, BPP, PP, BQP, MA και PH;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πού μπορούν να εντοπιστούν οι κατηγορίες πολυπλοκότητας RP, BPP, PP, BQP, MA και PH;`, correct_answer: "μεταξύ των P και PSPACE", trial_name: "a_Computationalcomplexitytheory_4_qa_2"} 
};var a_Computationalcomplexitytheory_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια απόδειξη σχετικά με τις τάξεις πολυπλοκότητας θα προκαλούσε μια θεωρητική καμπή στη θεωρία της πολυπλοκότητας;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια απόδειξη σχετικά με τις τάξεις πολυπλοκότητας θα προκαλούσε μια θεωρητική καμπή στη θεωρία της πολυπλοκότητας;`, correct_answer: "Αν αποδειχτεί ότι οποιαδήποτε από αυτές τις κλάσεις είναι άνιση", trial_name: "a_Computationalcomplexitytheory_4_qa_3"} 
};var a_Teacher_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">﻿Σε προηγούμενες εποχές, η σωματική τιμωρία (χτυπώντας ή δέρνοντας ή το χτύπημα με βίτσα ή με βούρδουλα ή με βέργα, τον μαθητή για να προκληθεί <span id="a_Teacher_0_qa_4">σωματικός πόνος</span>) ήταν <span id="a_Teacher_0_qa_0">ένας από τους πιο κοινούς</span> τρόπους σχολικής πειθαρχίας σε ολόκληρο τον κόσμο. <span id="a_Teacher_0_qa_1">Οι περισσότερες δυτικές χώρες</span>, και μερικές άλλες, έχουν τώρα πια απαγορεύσει αυτή τη μέθοδο, η οποία όμως συνεχίζει να είναι νόμιμη στις <span id="a_Teacher_0_qa_2">Ηνωμένες Πολιτείες</span> ακολουθώντας μία απόφαση <span id="a_Teacher_0_qa_3">του Ανώτατου Δικαστηρίου των ΗΠΑ</span> από το  1977, το οποίο έκρινε ότι το ξύλο δεν παραβιάζει το Σύνταγμα των ΗΠΑ.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Πόσο συνηθισμένη ήταν η μορφή της σωματικής τιμωρίας στο παρελθόν;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσο συνηθισμένη ήταν η μορφή της σωματικής τιμωρίας στο παρελθόν;`, correct_answer: "ένας από τους πιο κοινούς", trial_name: "a_Teacher_0_qa_0"} 
};var a_Teacher_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πού δεν εφαρμόζεται πλέον η σωματική τιμωρία;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πού δεν εφαρμόζεται πλέον η σωματική τιμωρία;`, correct_answer: "Οι περισσότερες δυτικές χώρες", trial_name: "a_Teacher_0_qa_1"} 
};var a_Teacher_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Σε ποια δυτική χώρα επιτρέπεται ακόμα η σωματική τιμωρία;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε ποια δυτική χώρα επιτρέπεται ακόμα η σωματική τιμωρία;`, correct_answer: "Ηνωμένες Πολιτείες", trial_name: "a_Teacher_0_qa_2"} 
};var a_Teacher_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος φορέας των ΗΠΑ ανέφερε ότι η σωματική τιμωρία ήταν συνταγματική;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος φορέας των ΗΠΑ ανέφερε ότι η σωματική τιμωρία ήταν συνταγματική;`, correct_answer: "του Ανώτατου Δικαστηρίου των ΗΠΑ", trial_name: "a_Teacher_0_qa_3"} 
};var a_Teacher_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι προκαλεί η σωματική τιμωρία σε έναν μαθητή;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι προκαλεί η σωματική τιμωρία σε έναν μαθητή;`, correct_answer: "σωματικός πόνος", trial_name: "a_Teacher_0_qa_4"} 
};var a_Teacher_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Οι δάσκαλοι στην Ουαλία μπορούν να είναι εγγεγραμμένα μέλη <span id="a_Teacher_1_qa_0"><span id="a_Teacher_1_qa_3">συνδικαλιστικών οργανώσεων</span></span> όπως είναι η ATL, η NUT ή η NASUWT και οι αναφορές τα τελευταία χρόνια δείχνουν ότι ο μέσος όρος ηλικίας των δασκάλων στην Ουαλία <span id="a_Teacher_1_qa_1">μειώνεται</span> με τους δασκάλους να είναι νεότεροι σε σχέση με τα προηγούμενα χρόνια. Ο λόγος <span id="a_Teacher_1_qa_4">ανησυχίας</span> η οποία μεγαλώνει όλο και πιο πολύ είναι οι επιθέσεις σε δασκάλους στα σχολεία της Ουαλίας οι οποίες έφτασαν το υψηλότερο επίπεδο <span id="a_Teacher_1_qa_2">μεταξύ του 2005 και του 2010</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Σε ποια ομάδα μπορούν να εγγραφούν οι δάσκαλοι της Ουαλίας;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε ποια ομάδα μπορούν να εγγραφούν οι δάσκαλοι της Ουαλίας;`, correct_answer: "συνδικαλιστικών οργανώσεων", trial_name: "a_Teacher_1_qa_0"} 
};var a_Teacher_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι συμβαίνει στον μέσο όρο ηλικίας των δασκάλων στην Ουαλία;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι συμβαίνει στον μέσο όρο ηλικίας των δασκάλων στην Ουαλία;`, correct_answer: "μειώνεται", trial_name: "a_Teacher_1_qa_1"} 
};var a_Teacher_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πότε οι επιθέσεις σε δασκάλους ήταν περισσότερες;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε οι επιθέσεις σε δασκάλους ήταν περισσότερες;`, correct_answer: "μεταξύ του 2005 και του 2010", trial_name: "a_Teacher_1_qa_2"} 
};var a_Teacher_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι είναι η NASUWT;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι είναι η NASUWT;`, correct_answer: "συνδικαλιστικών οργανώσεων", trial_name: "a_Teacher_1_qa_3"} 
};var a_Teacher_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι προκαλούν οι επιθέσεις σε δασκάλους;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι προκαλούν οι επιθέσεις σε δασκάλους;`, correct_answer: "ανησυχίας", trial_name: "a_Teacher_1_qa_4"} 
};var a_Teacher_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Στον Ινδουισμό ο πνευματικός δάσκαλος είναι γνωστός ως <span id="a_Teacher_3_qa_0">γκουρού</span>, και, σε πολλές παραδόσεις του Ινδουισμού – ειδικά εκείνες που είναι γνωστές στην <span id="a_Teacher_3_qa_3">Δύση</span>, η έμφαση στην πνευματική καθοδήγηση είναι <span id="a_Teacher_3_qa_1">εξαιρετικά μεγάλη</span>, με τους γκουρού να ασκούν συχνά πολύ έλεγχο στις ζωές των <span id="a_Teacher_3_qa_2">μαθητών τους</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιο είναι το όνομα του πνευματικού δασκάλου στον Ινδουισμό;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο είναι το όνομα του πνευματικού δασκάλου στον Ινδουισμό;`, correct_answer: "γκουρού", trial_name: "a_Teacher_3_qa_0"} 
};var a_Teacher_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Υπάρχει μεγάλη ή μικρή συγκέντρωση στην πνευματική καθοδήγηση στον Ινδουισμό;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Υπάρχει μεγάλη ή μικρή συγκέντρωση στην πνευματική καθοδήγηση στον Ινδουισμό;`, correct_answer: "εξαιρετικά μεγάλη", trial_name: "a_Teacher_3_qa_1"} 
};var a_Teacher_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιον ελέγχουν οι γκουρού;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιον ελέγχουν οι γκουρού;`, correct_answer: "μαθητών τους", trial_name: "a_Teacher_3_qa_2"} 
};var a_Teacher_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Σε ποιο τομέα συνηθίζεται να είναι εξαιρετικά μεγάλη η πνευματική καθοδήγηση;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε ποιο τομέα συνηθίζεται να είναι εξαιρετικά μεγάλη η πνευματική καθοδήγηση;`, correct_answer: "Δύση", trial_name: "a_Teacher_3_qa_3"} 
};var a_Teacher_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Στον Θιβετιανό Βουδισμό οι δάσκαλοι του Ντάρμα στο Θιβέτ ονομάζονται συνήθως <span id="a_Teacher_4_qa_0">Λάμα</span>. Ένας Λάμα που μέσω <span id="a_Teacher_4_qa_4">της τελετής phowa και του siddhi</span> είναι συνειδητά αποφασισμένος να <span id="a_Teacher_4_qa_1">αναγεννηθεί</span>, συχνά <span id="a_Teacher_4_qa_3">πολλές φορές</span>, για να συνεχίσει τον όρκο Bodhisattva ονομάζεται <span id="a_Teacher_4_qa_2">Tulku</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιο είναι το όνομα ενός δασκάλου στον Θιβετιανό Βουδισμό;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο είναι το όνομα ενός δασκάλου στον Θιβετιανό Βουδισμό;`, correct_answer: "Λάμα", trial_name: "a_Teacher_4_qa_0"} 
};var a_Teacher_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι έχει αποφασίσει ο Λάμα να κάνει;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι έχει αποφασίσει ο Λάμα να κάνει;`, correct_answer: "αναγεννηθεί", trial_name: "a_Teacher_4_qa_1"} 
};var a_Teacher_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο είναι το όνομα ενός όρκου Bodhisattva;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο είναι το όνομα ενός όρκου Bodhisattva;`, correct_answer: "Tulku", trial_name: "a_Teacher_4_qa_2"} 
};var a_Teacher_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσο έχει συμφωνήσει ο Λάμα να αναγεννηθεί;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσο έχει συμφωνήσει ο Λάμα να αναγεννηθεί;`, correct_answer: "πολλές φορές", trial_name: "a_Teacher_4_qa_3"} 
};var a_Teacher_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι βοήθησε τον Λάμα να αποφασίσει να αναγεννηθεί;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι βοήθησε τον Λάμα να αποφασίσει να αναγεννηθεί;`, correct_answer: "της τελετής phowa και του siddhi", trial_name: "a_Teacher_4_qa_4"} 
};var a_MartinLuther_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Τα γραπτά του Λούθερ κυκλοφόρησαν ευρέως, φθάνοντας στη Γαλλία, την Αγγλία και την Ιταλία ήδη από το <span id="a_MartinLuther_0_qa_0">1519</span>. <span id="a_MartinLuther_0_qa_1">Οι μαθητές</span> μαζεύτηκαν στο Wittenberg για να ακούσουν τον Λούθερ να μιλάει. Δημοσίευσε έναν σύντομο σχολιασμό για τους Γαλάτες και το έργο του με θέμα τους Ψαλμούς. Αυτό το <span id="a_MartinLuther_0_qa_2">πρώιμο</span> μέρος της καριέρας του Λούθερ ήταν ένα από τα πιο δημιουργικά και παραγωγικά του. Τρία από τα πιο γνωστά έργα του δημοσιεύθηκαν το <span id="a_MartinLuther_0_qa_3">1520</span>: Για τη χριστιανική αριστοκρατία του γερμανικού έθνους, για την αιχμαλωσία της εκκλησίας της Βαβυλώνας, και <span id="a_MartinLuther_0_qa_4">για την ελευθερία ενός χριστιανού</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Πότε τα γραπτά του Λούθερ εξαπλώθηκαν στη Γαλλία, την Αγγλία και την Ιταλία;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε τα γραπτά του Λούθερ εξαπλώθηκαν στη Γαλλία, την Αγγλία και την Ιταλία;`, correct_answer: "1519", trial_name: "a_MartinLuther_0_qa_0"} 
};var a_MartinLuther_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος πήγε στο Wittenberg για να ακούσει τον Λούθερ να μιλά;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος πήγε στο Wittenberg για να ακούσει τον Λούθερ να μιλά;`, correct_answer: "Οι μαθητές", trial_name: "a_MartinLuther_0_qa_1"} 
};var a_MartinLuther_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο μέρος της καριέρας του Λούθερ ήταν ένα από τα πιο παραγωγικά του;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο μέρος της καριέρας του Λούθερ ήταν ένα από τα πιο παραγωγικά του;`, correct_answer: "πρώιμο", trial_name: "a_MartinLuther_0_qa_2"} 
};var a_MartinLuther_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πότε δημοσιεύθηκαν κάποια από τα πιο γνωστά έργα του Λούθερ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε δημοσιεύθηκαν κάποια από τα πιο γνωστά έργα του Λούθερ;`, correct_answer: "1520", trial_name: "a_MartinLuther_0_qa_3"} 
};var a_MartinLuther_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Εκτός από τη δημοσίευση του έργου «για χριστιανική αριστοκρατία του γερμανικού έθνους» και του έργου «για την αιχμαλωσία της εκκλησίας της Βαβυλώνας», ποια άλλη δουλειά έκανε ο Λούθερ το 1520;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Εκτός από τη δημοσίευση του έργου «για χριστιανική αριστοκρατία του γερμανικού έθνους» και του έργου «για την αιχμαλωσία της εκκλησίας της Βαβυλώνας», ποια άλλη δουλειά έκανε ο Λούθερ το 1520;`, correct_answer: "για την ελευθερία ενός χριστιανού", trial_name: "a_MartinLuther_0_qa_4"} 
};var a_MartinLuther_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Δημοσιεύθηκε σε μια εποχή αυξανόμενης ζήτησης για <span id="a_MartinLuther_2_qa_0">εκδόσεις γερμανικής γλώσσας</span>, η έκδοση του Λούθερ έγινε γρήγορα μία δημοφιλής μετάφραση της <span id="a_MartinLuther_2_qa_1">Βίβλου</span> και ασκούσε επιρροή. Ως εκ τούτου, συνέβαλε σημαντικά στην <span id="a_MartinLuther_2_qa_2">εξέλιξη της γερμανικής γλώσσας και της λογοτεχνίας</span>. Γεμάτη με σημειώσεις και προλόγους από τον Λούθερ και με ξυλογραφίες από τον <span id="a_MartinLuther_2_qa_3">Lucas Cranach</span> που συμπεριελάμβανε εικόνες κατά του Πάπα, έπαιξε σημαντικό ρόλο στην εξάπλωση του δόγματος του Λούθερ σε όλη τη Γερμανία. Η Βίβλος του Λούθερ επηρέασε άλλες μεταφράσεις, όπως την Αγγλική Βίβλο του <span id="a_MartinLuther_2_qa_4">William Tyndale</span>  (1525 και μετά),  που ήταν ο προάγγελος της Βίβλου του Βασιλέα Τζέιμς.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Την εποχή του Μάρτιν Λούθερ, τι είχε ζήτηση;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Την εποχή του Μάρτιν Λούθερ, τι είχε ζήτηση;`, correct_answer: "εκδόσεις γερμανικής γλώσσας", trial_name: "a_MartinLuther_2_qa_0"} 
};var a_MartinLuther_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο έργο του Λούθερ έγινε δημοφιλές;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο έργο του Λούθερ έγινε δημοφιλές;`, correct_answer: "Βίβλου", trial_name: "a_MartinLuther_2_qa_1"} 
};var a_MartinLuther_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Σε τι συνέβαλε η δημοτικότητα της μετάφρασης του Λούθερ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε τι συνέβαλε η δημοτικότητα της μετάφρασης του Λούθερ;`, correct_answer: "εξέλιξη της γερμανικής γλώσσας και της λογοτεχνίας", trial_name: "a_MartinLuther_2_qa_2"} 
};var a_MartinLuther_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος καλλιτέχνης έδωσε τις ξυλογραφίες για τη Βίβλο του Λούθερ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος καλλιτέχνης έδωσε τις ξυλογραφίες για τη Βίβλο του Λούθερ;`, correct_answer: "Lucas Cranach", trial_name: "a_MartinLuther_2_qa_3"} 
};var a_MartinLuther_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιανού ήταν η αγγλική μετάφραση της Βίβλου που επηρέασε η Βίβλος του Λούθερ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιανού ήταν η αγγλική μετάφραση της Βίβλου που επηρέασε η Βίβλος του Λούθερ;`, correct_answer: "William Tyndale", trial_name: "a_MartinLuther_2_qa_4"} 
};var a_MartinLuther_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Οι ύμνοι του Λούθερ είχαν πολλές φορές εμπνευστεί από συγκεκριμένα γεγονότα <span id="a_MartinLuther_3_qa_0">στη ζωή του</span> και την Μεταρρύθμιση που εξελίσσονταν. Αυτή η συμπεριφορά ξεκίνησε με την εκμάθηση της εκτέλεσης του Johann Esch και του Heinrich Voes, των πρώτων ατόμων που έγιναν μάρτυρες από τη Ρωμαιοκαθολική Εκκλησία <span id="a_MartinLuther_3_qa_1">για τις Λουθηρανικές απόψεις</span>, παρακινώντας τον Λούθερ να γράψει τον ύμνο «<span id="a_MartinLuther_3_qa_2">Ein neues Lied wir heben a</span>», ο οποίος είναι γενικά γνωστός στα αγγλικά με την μετάφραση του <span id="a_MartinLuther_3_qa_3">John C. Messenger</span> με τον τίτλο και την πρώτη γραμμή «<span id="a_MartinLuther_3_qa_4">Πέταξα στους αδιάφορους ανέμους</span>» και τραγουδούσε το τραγούδι Ibstone που συνέθεσε το 1875 η Maria C. Tiddeman.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Τι παρακίνησε τον Λούθερ να γράψει ύμνους;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι παρακίνησε τον Λούθερ να γράψει ύμνους;`, correct_answer: "στη ζωή του", trial_name: "a_MartinLuther_3_qa_0"} 
};var a_MartinLuther_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Γιατί ο Johann Esch και ο Heinrich Voes εκτελέστηκαν από την Καθολική Εκκλησία;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Γιατί ο Johann Esch και ο Heinrich Voes εκτελέστηκαν από την Καθολική Εκκλησία;`, correct_answer: "για τις Λουθηρανικές απόψεις", trial_name: "a_MartinLuther_3_qa_1"} 
};var a_MartinLuther_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιον ύμνο έγραψε ο Λούθερ μετά το μαρτύριο του Esch και των Voes;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιον ύμνο έγραψε ο Λούθερ μετά το μαρτύριο του Esch και των Voes;`, correct_answer: "Ein neues Lied wir heben a", trial_name: "a_MartinLuther_3_qa_2"} 
};var a_MartinLuther_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος είναι ο αγγλικός μεταφραστής αυτού του ύμνου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος είναι ο αγγλικός μεταφραστής αυτού του ύμνου;`, correct_answer: "John C. Messenger", trial_name: "a_MartinLuther_3_qa_3"} 
};var a_MartinLuther_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος είναι ο ύμνος που είναι γνωστός στα αγγλικά;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος είναι ο ύμνος που είναι γνωστός στα αγγλικά;`, correct_answer: "Πέταξα στους αδιάφορους ανέμους", trial_name: "a_MartinLuther_3_qa_4"} 
};var a_MartinLuther_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Αργότερα βρέθηκε ένα κομμάτι χαρτί στο οποίο ο Λούθερ είχε γράψει <span id="a_MartinLuther_4_qa_0">την τελευταία του δήλωση</span>. Η δήλωση ήταν στα <span id="a_MartinLuther_4_qa_1">λατινικά</span>, εκτός από το <span id="a_MartinLuther_4_qa_2">«Είμαστε ζητιάνοι»,</span> που ήταν στα γερμανικά.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Τι ανακαλύφθηκε αργότερα που γράφτηκε από τον Λούθερ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι ανακαλύφθηκε αργότερα που γράφτηκε από τον Λούθερ;`, correct_answer: "την τελευταία του δήλωση", trial_name: "a_MartinLuther_4_qa_0"} 
};var a_MartinLuther_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Σε ποια γλώσσα γράφτηκε το μεγαλύτερο μέρος της δήλωσης;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε ποια γλώσσα γράφτηκε το μεγαλύτερο μέρος της δήλωσης;`, correct_answer: "λατινικά", trial_name: "a_MartinLuther_4_qa_1"} 
};var a_MartinLuther_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο τμήμα της τελευταίας δήλωσης του Λούθερ ήταν στη γερμανική γλώσσα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο τμήμα της τελευταίας δήλωσης του Λούθερ ήταν στη γερμανική γλώσσα;`, correct_answer: "«Είμαστε ζητιάνοι»,", trial_name: "a_MartinLuther_4_qa_2"} 
};var a_SouthernCalifornia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Οι επαγγελματικές αθλητικές ομάδες στη Νότια Καλιφόρνια είναι από το <span id="a_SouthernCalifornia_3_qa_0">NFL</span> (Los Angeles Rams, San Diego Chargers), το <span id="a_SouthernCalifornia_3_qa_1">NBA</span> (Los Angeles Lakers, Los Angeles Clippers), το <span id="a_SouthernCalifornia_3_qa_2">MLB</span> (Los Angeles Dodgers, Los Angeles Angels of Anaheim, San Diego Padres), το NHL (<span id="a_SouthernCalifornia_3_qa_3">Los Angeles Kings</span>, Anaheim Ducks) και το MLS (<span id="a_SouthernCalifornia_3_qa_4">LA Galaxy</span>).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Η Los Angeles Rams τι άθλημα εκπροσωπεί;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Η Los Angeles Rams τι άθλημα εκπροσωπεί;`, correct_answer: "NFL", trial_name: "a_SouthernCalifornia_3_qa_0"} 
};var a_SouthernCalifornia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Η Los Angeles Clippers σε ποιο άθλημα ανήκει;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Η Los Angeles Clippers σε ποιο άθλημα ανήκει;`, correct_answer: "NBA", trial_name: "a_SouthernCalifornia_3_qa_1"} 
};var a_SouthernCalifornia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Η Los Angeles του Anaheim από ποιο άθλημα είναι;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Η Los Angeles του Anaheim από ποιο άθλημα είναι;`, correct_answer: "MLB", trial_name: "a_SouthernCalifornia_3_qa_2"} 
};var a_SouthernCalifornia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια είναι η άλλη ομάδα του NHL εκτός από την Anaheim Ducks με έδρα τη Νότια Καλιφόρνια;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια είναι η άλλη ομάδα του NHL εκτός από την Anaheim Ducks με έδρα τη Νότια Καλιφόρνια;`, correct_answer: "Los Angeles Kings", trial_name: "a_SouthernCalifornia_3_qa_3"} 
};var a_SouthernCalifornia_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια είναι η μοναδική ομάδα MLS που ανήκει στη νότια Καλιφόρνια;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια είναι η μοναδική ομάδα MLS που ανήκει στη νότια Καλιφόρνια;`, correct_answer: "LA Galaxy", trial_name: "a_SouthernCalifornia_3_qa_4"} 
};var a_SouthernCalifornia_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Από το 2005 έως το <span id="a_SouthernCalifornia_4_qa_2">2014</span>, υπήρχαν <span id="a_SouthernCalifornia_4_qa_1">δύο</span> ομάδες ποδοσφαίρου του πρωταθλήματος MLS στο Λος Άντζελες, η LA Galaxy και η Chivas USA που και οι δύο έπαιξαν στο <span id="a_SouthernCalifornia_4_qa_3">StubHub Center</span> και ήταν τοπικοί αντίπαλοι. Ωστόσο, η <span id="a_SouthernCalifornia_4_qa_0">Chivas</span> αποβλήθηκε από το MLS του 2014, με μια δεύτερη ομάδα MLS που είχε προγραμματιστεί να επιστρέψει το <span id="a_SouthernCalifornia_4_qa_4">2018</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποια ομάδα αποβλήθηκε από το MLS;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια ομάδα αποβλήθηκε από το MLS;`, correct_answer: "Chivas", trial_name: "a_SouthernCalifornia_4_qa_0"} 
};var a_SouthernCalifornia_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσες ομάδες είχε το Λος Άντζελες;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσες ομάδες είχε το Λος Άντζελες;`, correct_answer: "δύο", trial_name: "a_SouthernCalifornia_4_qa_1"} 
};var a_SouthernCalifornia_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο έτος αποβλήθηκε μια από τις δύο ομάδες ποδοσφαίρου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο έτος αποβλήθηκε μια από τις δύο ομάδες ποδοσφαίρου;`, correct_answer: "2014", trial_name: "a_SouthernCalifornia_4_qa_2"} 
};var a_SouthernCalifornia_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο ήταν το όνομα του σταδίου που έπαιξαν οι ομάδες;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο ήταν το όνομα του σταδίου που έπαιξαν οι ομάδες;`, correct_answer: "StubHub Center", trial_name: "a_SouthernCalifornia_4_qa_3"} 
};var a_SouthernCalifornia_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πότε πρόκειται να επιστρέψει η ομάδα που είχε αποβληθεί;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε πρόκειται να επιστρέψει η ομάδα που είχε αποβληθεί;`, correct_answer: "2018", trial_name: "a_SouthernCalifornia_4_qa_4"} 
};var a_VictoriaAustralia_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Η Victoria έχει ένα γραπτό σύνταγμα που θεσπίστηκε το <span id="a_VictoriaAustralia_1_qa_0">1975</span>, αλλά με βάση το <span id="a_VictoriaAustralia_1_qa_1">αποικιακό σύνταγμα του 1855</span>, που εγκρίθηκε από το βρετανικό κοινοβούλιο ως <span id="a_VictoriaAustralia_1_qa_4">Νομοθεσία της Victoria 1855</span>, που θεσπίζει το Κοινοβούλιο ως νομοθέτη του κράτους για θέματα που εμπίπτουν στην αρμοδιότητα του κράτους. Το Βικτοριανό Σύνταγμα μπορεί να τροποποιηθεί από τη <span id="a_VictoriaAustralia_1_qa_2">Βουλή της Victoria</span>, με εξαίρεση ορισμένες <span id="a_VictoriaAustralia_1_qa_3">«καθιερωμένες» διατάξεις</span> οι οποίες απαιτούν απόλυτη πλειοψηφία και στα δύο κοινοβούλια, με πλειοψηφία τριών πέμπτων και στα δύο κοινοβούλια, ή την έγκριση του βικτωριανού λαού με δημοψήφισμα, ανάλογα με τη διάταξη.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Πότε έλαβε η Victoria το σύνταγμά της;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε έλαβε η Victoria το σύνταγμά της;`, correct_answer: "1975", trial_name: "a_VictoriaAustralia_1_qa_0"} 
};var a_VictoriaAustralia_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Σε τι βασίζεται το σύνταγμα της Victoria;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε τι βασίζεται το σύνταγμα της Victoria;`, correct_answer: "αποικιακό σύνταγμα του 1855", trial_name: "a_VictoriaAustralia_1_qa_1"} 
};var a_VictoriaAustralia_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια ομάδα μπορεί να τροποποιήσει το βικτοριανό σύνταγμα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια ομάδα μπορεί να τροποποιήσει το βικτοριανό σύνταγμα;`, correct_answer: "Βουλή της Victoria", trial_name: "a_VictoriaAustralia_1_qa_2"} 
};var a_VictoriaAustralia_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιες είναι οι εξαιρέσεις στο Σύνταγμα που απαιτούν ειδικές τροποποιήσεις;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιες είναι οι εξαιρέσεις στο Σύνταγμα που απαιτούν ειδικές τροποποιήσεις;`, correct_answer: "«καθιερωμένες» διατάξεις", trial_name: "a_VictoriaAustralia_1_qa_3"} 
};var a_VictoriaAustralia_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι έγγραφο σχημάτισε το Κοινοβούλιο της Victoria;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι έγγραφο σχημάτισε το Κοινοβούλιο της Victoria;`, correct_answer: "Νομοθεσία της Victoria 1855", trial_name: "a_VictoriaAustralia_1_qa_4"} 
};var a_VictoriaAustralia_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Ιστορικά, η Victoria ήταν η βάση για τα εργοστάσια παραγωγής των <span id="a_VictoriaAustralia_2_qa_0">μεγαλύτερων εταιρειών αυτοκινήτων</span> Ford, Toyota και Holden. Ωστόσο, οι ανακοινώσεις κλεισίματος και από τις τρεις εταιρείες τον 21ο αιώνα θα σημαίνουν ότι η Αυστραλία δεν θα αποτελεί πλέον βάση για την παγκόσμια αυτοκινητοβιομηχανία, με τη δήλωση της Toyota τον Φεβρουάριο του 2014 να ανακοινώνει ως έτος κλεισίματος το <span id="a_VictoriaAustralia_2_qa_1">2017</span>. Η ανακοίνωση της Holden έγινε τον <span id="a_VictoriaAustralia_2_qa_2">Μάιο του 2013</span>, ακολουθούμενη από την απόφαση της Ford τον Δεκέμβριο του ίδιου έτους (οι βικτοριανές εγκαταστάσεις της <span id="a_VictoriaAustralia_2_qa_4">Ford</span> στο Broadmeadows και το Geelong θα κλείσουν τον <span id="a_VictoriaAustralia_2_qa_3">Οκτώβριο του 2016</span>).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Τι τύπο εργοστασίου η Victoria σύντομα να χάσει;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι τύπο εργοστασίου η Victoria σύντομα να χάσει;`, correct_answer: "μεγαλύτερων εταιρειών αυτοκινήτων", trial_name: "a_VictoriaAustralia_2_qa_0"} 
};var a_VictoriaAustralia_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πότε έχει πει η Toyota ότι θα κλείσει το εργοστάσιό της στη Victoria;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε έχει πει η Toyota ότι θα κλείσει το εργοστάσιό της στη Victoria;`, correct_answer: "2017", trial_name: "a_VictoriaAustralia_2_qa_1"} 
};var a_VictoriaAustralia_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πότε ανακοίνωσε η Holden ότι θα κλείσει το εργοστάσιό της στη Victoria;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε ανακοίνωσε η Holden ότι θα κλείσει το εργοστάσιό της στη Victoria;`, correct_answer: "Μάιο του 2013", trial_name: "a_VictoriaAustralia_2_qa_2"} 
};var a_VictoriaAustralia_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πότε θα κλείσουν τα εργοστάσια παραγωγής της Ford;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε θα κλείσουν τα εργοστάσια παραγωγής της Ford;`, correct_answer: "Οκτώβριο του 2016", trial_name: "a_VictoriaAustralia_2_qa_3"} 
};var a_VictoriaAustralia_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια μάρκα αυτοκινήτου κατασκευάζεται στο Broadmeadows;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια μάρκα αυτοκινήτου κατασκευάζεται στο Broadmeadows;`, correct_answer: "Ford", trial_name: "a_VictoriaAustralia_2_qa_4"} 
};var a_VictoriaAustralia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Υπάρχουν επίσης αρκετοί μικρότεροι μεταφορείς εμπορευμάτων και πολυάριθμοι τουριστικοί σιδηρόδρομοι που εκμεταλλεύονται γραμμές οι οποίες ήταν κάποτε τμήμα ενός κρατικού συστήματος. Οι βικτοριανές γραμμές είναι κυρίως <span id="a_VictoriaAustralia_3_qa_0">μεγάλου πλάτους 1.600 χιλιοστών (5 ft 3 in)</span>. Ωστόσο, οι διαπολιτειακές γραμμές, καθώς και αρκετές παρακαμπτήριες γραμμές στα δυτικά της πολιτείας, έχουν μετατραπεί σε <span id="a_VictoriaAustralia_3_qa_1">γραμμές κανονικού πλάτους 1,435 χιλιοστών (4 ft 8 1 β "2 in)</span>. Δύο τουριστικοί σιδηρόδρομοι λειτουργούν πάνω σε <span id="a_VictoriaAustralia_3_qa_2">στενές γραμμές 760 χιλιοστών (2 ft 6 in)</span>, οι οποίες είναι τα απομεινάρια <span id="a_VictoriaAustralia_3_qa_4">πέντε</span> πρώην κρατικών γραμμών που χτίστηκαν σε <span id="a_VictoriaAustralia_3_qa_3">ορεινές περιοχές</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιο είναι το πλάτος των βικτοριανών σιδηροδρομικών γραμμών;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο είναι το πλάτος των βικτοριανών σιδηροδρομικών γραμμών;`, correct_answer: "μεγάλου πλάτους 1.600 χιλιοστών (5 ft 3 in)", trial_name: "a_VictoriaAustralia_3_qa_0"} 
};var a_VictoriaAustralia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Σε τι πλάτος έχουν μετατραπεί κάποιες γραμμές στα δυτικά της Victoria;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε τι πλάτος έχουν μετατραπεί κάποιες γραμμές στα δυτικά της Victoria;`, correct_answer: "γραμμές κανονικού πλάτους 1,435 χιλιοστών (4 ft 8 1 β 2 in)", trial_name: "a_VictoriaAustralia_3_qa_1"} 
};var a_VictoriaAustralia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι πλάτος έχουν οι δύο τουριστικές γραμμές;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι πλάτος έχουν οι δύο τουριστικές γραμμές;`, correct_answer: "στενές γραμμές 760 χιλιοστών (2 ft 6 in)", trial_name: "a_VictoriaAustralia_3_qa_2"} 
};var a_VictoriaAustralia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πού ήταν οι στενές σιδηροδρομικές γραμμές που χτίστηκαν στη Victoria;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πού ήταν οι στενές σιδηροδρομικές γραμμές που χτίστηκαν στη Victoria;`, correct_answer: "ορεινές περιοχές", trial_name: "a_VictoriaAustralia_3_qa_3"} 
};var a_VictoriaAustralia_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσες στενές σιδηροδρομικές γραμμές αποτελούσαν προηγουμένως κρατική ιδιοκτησία;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσες στενές σιδηροδρομικές γραμμές αποτελούσαν προηγουμένως κρατική ιδιοκτησία;`, correct_answer: "πέντε", trial_name: "a_VictoriaAustralia_3_qa_4"} 
};var a_Huguenot_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">﻿O νέος θρησκευτικός πόλεμος του 1620 προκάλεσε την κατάργηση των πολιτικών και στρατιωτικών προνομίων των Ουγενότων μετά την ήττα τους. Διατήρησαν τις θρησκευτικές διατάξεις του διατάγματος της Νάντης μέχρι την εξουσία του <span id="a_Huguenot_0_qa_2">Λουδοβίκου ΙΔ΄</span>, ο οποίος σταδιακά ενίσχυσε τη δίωξή τους μέχρι να εκδώσει το <span id="a_Huguenot_0_qa_0">Διάταγμα του Φονταινεμπλώ</span> (<span id="a_Huguenot_0_qa_1">1685</span> ), που κατήργησε κάθε νόμιμη αναγνώριση του Προτεσταντισμού στη Γαλλία και ανάγκασε τους Ουγενότους να αλλαξοπιστήσουν. Ενώ σχεδόν τα τρία τέταρτα τελικά σκοτώθηκαν ή υποτάχθηκαν, περίπου <span id="a_Huguenot_0_qa_3">500.000</span> Ουγενότοι είχαν εγκαταλείψει τη Γαλλία από τις αρχές του 18ου αιώνα [απαιτείται παραπομπή].</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποια διακήρυξη κατήργησε τον προτεσταντισμό στη Γαλλία; `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια διακήρυξη κατήργησε τον προτεσταντισμό στη Γαλλία; `, correct_answer: "Διάταγμα του Φονταινεμπλώ", trial_name: "a_Huguenot_0_qa_0"} 
};var a_Huguenot_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πότε δηλώθηκε αυτό το διάταγμα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε δηλώθηκε αυτό το διάταγμα;`, correct_answer: "1685", trial_name: "a_Huguenot_0_qa_1"} 
};var a_Huguenot_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος Γάλλος ευγενής εξέδωσε αυτή τη δήλωση;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος Γάλλος ευγενής εξέδωσε αυτή τη δήλωση;`, correct_answer: "Λουδοβίκου ΙΔ΄", trial_name: "a_Huguenot_0_qa_2"} 
};var a_Huguenot_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσοι Ουγενότοι εγκατέλειψαν τη Γαλλία το 1700;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσοι Ουγενότοι εγκατέλειψαν τη Γαλλία το 1700;`, correct_answer: "500.000", trial_name: "a_Huguenot_0_qa_3"} 
};var a_Steamengine_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Η θερμότητα που απαιτείται για το βρασμό του νερού και την παροχή ατμού μπορεί να παραχθεί από διάφορες πηγές, συνηθέστερα από <span id="a_Steamengine_0_qa_0">την καύση εύφλεκτων υλικών</span> με κατάλληλη παροχή αέρα σε κλειστό χώρο (που ονομάζεται ποικιλοτρόπως <span id="a_Steamengine_0_qa_1">θάλαμος καύσης</span>, καυστήρας). Σε ορισμένες περιπτώσεις, η πηγή θερμότητας είναι ένας πυρηνικός αντιδραστήρας, η γεωθερμική ενέργεια, η <span id="a_Steamengine_0_qa_2">ηλιακή</span> ενέργεια ή ενέργεια που χάνεται ως θερμότητα από μια μηχανή εσωτερικής καύσης ή τη βιομηχανική διαδικασία. Στην περίπτωση μοντέλων ή παιχνιδιών ατμομηχανών, η πηγή θερμότητας μπορεί να είναι ένα <span id="a_Steamengine_0_qa_3">ηλεκτρικό</span> θερμαντικό στοιχείο.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποια είναι η συνηθισμένη πηγή θερμότητας για βραστό νερό στη μηχανή ατμού;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια είναι η συνηθισμένη πηγή θερμότητας για βραστό νερό στη μηχανή ατμού;`, correct_answer: "την καύση εύφλεκτων υλικών", trial_name: "a_Steamengine_0_qa_0"} 
};var a_Steamengine_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Εκτός από τον καυστήρα, ποιο είναι το άλλο όνομα για το χώρο στο οποίο καίγεται καύσιμο στη μηχανή;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Εκτός από τον καυστήρα, ποιο είναι το άλλο όνομα για το χώρο στο οποίο καίγεται καύσιμο στη μηχανή;`, correct_answer: "θάλαμος καύσης", trial_name: "a_Steamengine_0_qa_1"} 
};var a_Steamengine_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Μαζί με την πυρηνική, τη γεωθερμική και την ενέργεια που χάνεται ως θερμότητα από τις μηχανές εσωτερικής καύσης, ποιο άλλο είδος ενέργειας μπορεί να παρέχει τη θερμότητα για μια ατμομηχανή;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Μαζί με την πυρηνική, τη γεωθερμική και την ενέργεια που χάνεται ως θερμότητα από τις μηχανές εσωτερικής καύσης, ποιο άλλο είδος ενέργειας μπορεί να παρέχει τη θερμότητα για μια ατμομηχανή;`, correct_answer: "ηλιακή", trial_name: "a_Steamengine_0_qa_2"} 
};var a_Steamengine_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο είδος θερμαντικού στοιχείου χρησιμοποιείται συχνά σε παιχνίδια ατμομηχανές;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο είδος θερμαντικού στοιχείου χρησιμοποιείται συχνά σε παιχνίδια ατμομηχανές;`, correct_answer: "ηλεκτρικό", trial_name: "a_Steamengine_0_qa_3"} 
};var a_Steamengine_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Παρόλο που η παλινδρομική ατμομηχανή δεν είναι πλέον σε ευρεία εμπορική χρήση, διάφορες εταιρείες διερευνούν ή εκμεταλλεύονται τις δυνατότητες του κινητήρα ως εναλλακτική λύση για τους κινητήρες εσωτερικής καύσης. Η εταιρεία <span id="a_Steamengine_3_qa_0">Energiprojekt AB</span> στη <span id="a_Steamengine_3_qa_1">Σουηδία</span> έχει σημειώσει πρόοδο στη χρήση σύγχρονων υλικών για την αξιοποίηση της δύναμης του ατμού. Η αποδοτικότητα της ατμομηχανής της Energiprojekt φτάνει περίπου το <span id="a_Steamengine_3_qa_4">27-30%</span> σε μηχανές υψηλής πίεσης. Είναι ένας μονού βήματος, <span id="a_Steamengine_3_qa_2">5</span> κυλίνδρων κινητήρας με υπέρθερμο ατμό και καταναλώνει περίπου 4 kg (<span id="a_Steamengine_3_qa_3">8,8</span>  lb) ατμού ανά kWh [δεν αναφέρεται στην παραπομπή]</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποια σύγχρονη εταιρεία έχει ασχοληθεί ιδιαίτερα με ατμομηχανή που χρησιμοποιεί σύγχρονα υλικά;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια σύγχρονη εταιρεία έχει ασχοληθεί ιδιαίτερα με ατμομηχανή που χρησιμοποιεί σύγχρονα υλικά;`, correct_answer: "Energiprojekt AB", trial_name: "a_Steamengine_3_qa_0"} 
};var a_Steamengine_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πού εδρεύει η Energiprojekt AB;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πού εδρεύει η Energiprojekt AB;`, correct_answer: "Σουηδία", trial_name: "a_Steamengine_3_qa_1"} 
};var a_Steamengine_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσους κυλίνδρους έχει ο κινητήρας Energiprojekt AB;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσους κυλίνδρους έχει ο κινητήρας Energiprojekt AB;`, correct_answer: "5", trial_name: "a_Steamengine_3_qa_2"} 
};var a_Steamengine_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσα κιλά ατμού ανά κιλοβατώρα χρησιμοποιεί ο κινητήρας Energiprojekt AB;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσα κιλά ατμού ανά κιλοβατώρα χρησιμοποιεί ο κινητήρας Energiprojekt AB;`, correct_answer: "8,8", trial_name: "a_Steamengine_3_qa_3"} 
};var a_Steamengine_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι ποσοστό απόδοσης της μηχανής υψηλής πίεσης έχει επιτύχει ο κινητήρας Energiprojekt AB;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι ποσοστό απόδοσης της μηχανής υψηλής πίεσης έχει επιτύχει ο κινητήρας Energiprojekt AB;`, correct_answer: "27-30%", trial_name: "a_Steamengine_3_qa_4"} 
};var a_1973oilcrisis_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_1973oilcrisis_1_qa_0">Το εμπάργκο</span> είχε αρνητική επίδραση στην οικονομία των ΗΠΑ προκαλώντας άμεση ανάγκη για αντιμετώπιση των απειλών προς την ενεργειακή ασφάλεια των ΗΠΑ. Σε διεθνές επίπεδο, οι αυξήσεις των τιμών άλλαξαν ανταγωνιστικές θέσεις σε πολλές βιομηχανίες, όπως <span id="a_1973oilcrisis_1_qa_1">στα αυτοκίνητα</span>. <span id="a_1973oilcrisis_1_qa_2">Τα προβλήματα μακροοικονομικής</span> ήταν τόσο πληθωριστικές όσο και αποπληθωριστικές επιπτώσεις. Το εμπάργκο οδήγησε τις πετρελαϊκές εταιρείες να αναζητήσουν νέους τρόπους για να αυξήσουν τις προμήθειες πετρελαίου, ακόμη και σε ανώμαλο έδαφος όπως το <span id="a_1973oilcrisis_1_qa_3">Αρκτικό</span>. Για την  εύρεση πετρελαίου και την ανάπτυξη νέων πεδίων συνήθως απαιτούνταν <span id="a_1973oilcrisis_1_qa_4">πέντε έως δέκα χρόνια</span> πριν από την κύρια παραγωγή.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Τι επηρεάζει αρνητικά την αμερικανική οικονομία;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι επηρεάζει αρνητικά την αμερικανική οικονομία;`, correct_answer: "Το εμπάργκο", trial_name: "a_1973oilcrisis_1_qa_0"} 
};var a_1973oilcrisis_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Σε διεθνές επίπεδο, ποιες ανταγωνιστικές θέσεις της βιομηχανίας επηρεάζονται;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε διεθνές επίπεδο, ποιες ανταγωνιστικές θέσεις της βιομηχανίας επηρεάζονται;`, correct_answer: "στα αυτοκίνητα", trial_name: "a_1973oilcrisis_1_qa_1"} 
};var a_1973oilcrisis_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο πρόβλημα συνίσταται τόσο από τις πληθωριστικές όσο και από τις αποπληθωριστικές επιπτώσεις;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο πρόβλημα συνίσταται τόσο από τις πληθωριστικές όσο και από τις αποπληθωριστικές επιπτώσεις;`, correct_answer: "Τα προβλήματα μακροοικονομικής", trial_name: "a_1973oilcrisis_1_qa_2"} 
};var a_1973oilcrisis_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Σε ποια περιοχή η πετρελαϊκή κρίση οδήγησε τις πετρελαϊκές εταιρείες να αυξήσουν τις προμήθειες πετρελαίου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε ποια περιοχή η πετρελαϊκή κρίση οδήγησε τις πετρελαϊκές εταιρείες να αυξήσουν τις προμήθειες πετρελαίου;`, correct_answer: "Αρκτικό", trial_name: "a_1973oilcrisis_1_qa_3"} 
};var a_1973oilcrisis_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσος καιρός χρειάζεται για τις νέες περιοχές, ώστε να έχουν σημαντική παραγωγή πετρελαίου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσος καιρός χρειάζεται για τις νέες περιοχές, ώστε να έχουν σημαντική παραγωγή πετρελαίου;`, correct_answer: "πέντε έως δέκα χρόνια", trial_name: "a_1973oilcrisis_1_qa_4"} 
};var a_1973oilcrisis_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Το <span id="a_1973oilcrisis_2_qa_1">1973</span>, ο Νίξον διόρισε τον <span id="a_1973oilcrisis_2_qa_0">William E. Simon</span> ως τον πρώτο διαχειριστή του Ομοσπονδιακού Γραφείου Ενέργειας, μιας οργάνωσης μικρής διάρκειας, που δημιουργήθηκε <span id="a_1973oilcrisis_2_qa_2">για να συντονίσει την απάντηση στο εμπάργκο</span> . Ο Simon κατένειμε στις πολιτείες ποσότητα εγχώριου πετρελαίου για το 1974, ίση με την κατανάλωση του καθενός το 1972. Το γεγονός αυτό συνέφερε τα κράτη των οποίων ο πληθυσμός δεν αυξανόταν. Σε άλλες πολιτείες, οι ουρές στα βενζινάδικα ήταν συνηθισμένο φαινόμενο. Η Αμερικανική Ένωση Αυτοκινήτου ανέφερε ότι την τελευταία εβδομάδα του Φεβρουαρίου του 1974, <span id="a_1973oilcrisis_2_qa_3">το 20%</span> των αμερικανικών βενζινάδικων δεν είχαν καύσιμα.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιος είναι ο πρώτος διαχειριστής του Ομοσπονδιακού Γραφείου Ενέργειας;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος είναι ο πρώτος διαχειριστής του Ομοσπονδιακού Γραφείου Ενέργειας;`, correct_answer: "William E. Simon", trial_name: "a_1973oilcrisis_2_qa_0"} 
};var a_1973oilcrisis_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πότε εκλέχτηκε από τον Νίξον;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε εκλέχτηκε από τον Νίξον;`, correct_answer: "1973", trial_name: "a_1973oilcrisis_2_qa_1"} 
};var a_1973oilcrisis_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Γιατί δημιουργήθηκε αυτή η μικρής διάρκειας οργάνωση;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Γιατί δημιουργήθηκε αυτή η μικρής διάρκειας οργάνωση;`, correct_answer: "για να συντονίσει την απάντηση στο εμπάργκο", trial_name: "a_1973oilcrisis_2_qa_2"} 
};var a_1973oilcrisis_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Σύμφωνα με την Αμερικανική Ένωση Αυτοκινήτου, ποιο είναι το ποσοστό των βενζινάδικων που έμειναν χωρίς καύσιμα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σύμφωνα με την Αμερικανική Ένωση Αυτοκινήτου, ποιο είναι το ποσοστό των βενζινάδικων που έμειναν χωρίς καύσιμα;`, correct_answer: "το 20%", trial_name: "a_1973oilcrisis_2_qa_3"} 
};var a_1973oilcrisis_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Η <span id="a_1973oilcrisis_3_qa_0">ενεργειακή κρίση</span> αύξησε το ενδιαφέρον για την ανανεώσιμη ενέργεια, την πυρηνική ενέργεια και τα εγχώρια ορυκτά καύσιμα. Υπάρχει η κριτική ότι οι αμερικανικές ενεργειακές πολιτικές μετά την κρίση κυριαρχούνται από τη νοοτροπία της κρίσης, προωθώντας ακριβές γρήγορες διορθώσεις και εύκολες λύσεις που αγνοούσαν την <span id="a_1973oilcrisis_3_qa_1">αγορά και τις τεχνολογικές πραγματικότητες</span>. Αντί να εφαρμόσουν ένα σταθερό κανονιστικό πλαίσιο που να υποστηρίζει την έρευνα αφήνοντας παράλληλα περιθώρια για επιχειρηματικότητα και καινοτομία, το <span id="a_1973oilcrisis_3_qa_2">κογκρέσο και οι πρόεδροι</span> υποστήριξαν επανειλημμένα πολιτικές που υπόσχονταν πολιτικά συμφέρουσες λύσεις με αμφίβολες προοπτικές.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιος ήταν ο καταλύτης που αύξησε το ενδιαφέρον για τους ανανεώσιμους πόρους;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος ήταν ο καταλύτης που αύξησε το ενδιαφέρον για τους ανανεώσιμους πόρους;`, correct_answer: "ενεργειακή κρίση", trial_name: "a_1973oilcrisis_3_qa_0"} 
};var a_1973oilcrisis_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Υπάρχει η κριτική ότι οι ενεργειακές πολιτικές στηρίζονται σε ακριβές, γρήγορες λύσεις που αγνοούν ποια γεγονότα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Υπάρχει η κριτική ότι οι ενεργειακές πολιτικές στηρίζονται σε ακριβές, γρήγορες λύσεις που αγνοούν ποια γεγονότα;`, correct_answer: "αγορά και τις τεχνολογικές πραγματικότητες", trial_name: "a_1973oilcrisis_3_qa_1"} 
};var a_1973oilcrisis_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιοι υποστήριξαν πολιτικές με λύσεις που ακούγονται καλές, αλλά έχουν κακές προοπτικές;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιοι υποστήριξαν πολιτικές με λύσεις που ακούγονται καλές, αλλά έχουν κακές προοπτικές;`, correct_answer: "κογκρέσο και οι πρόεδροι", trial_name: "a_1973oilcrisis_3_qa_2"} 
};var a_Apolloprogram_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Με προϋπολογισμό 230.000 δολαρίων, τα αρχικά δεδομένα της σεληνιακής μετάδοσης που διασώθηκαν από το Απόλλων 11, συντάχθηκαν από τον <span id="a_Apolloprogram_4_qa_0">Nafzger</span> και ανατέθηκαν στη <span id="a_Apolloprogram_4_qa_3">Lowry Digital</span> για αποκατάσταση. Το βίντεο υποβλήθηκε σε επεξεργασία για να αφαιρεθεί ο τυχαίος θόρυβος και το κούνημα της κάμερας <span id="a_Apolloprogram_4_qa_1">χωρίς να αλλοιωθεί η ιστορική αξιοπιστία</span>. Οι εικόνες προέρχονται από κασέτες στην Αυστραλία, το αρχείο του CBS News και <span id="a_Apolloprogram_4_qa_2">κινηματογραφικές εγγραφές</span> που έγιναν στο Διαστημικό Κέντρο Τζόνσον. Το αποκατεστημένο βίντεο, που παραμένει σε <span id="a_Apolloprogram_4_qa_4">ασπρόμαυρη εικόνα</span>, περιέχει συντηρητικές ψηφιακές βελτιώσεις και δεν περιλαμβάνει βελτιώσεις στην ποιότητα ήχου.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιος συνέταξε τα αρχικά δεδομένα της απογείωσης του Απόλλων 11;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος συνέταξε τα αρχικά δεδομένα της απογείωσης του Απόλλων 11;`, correct_answer: "Nafzger", trial_name: "a_Apolloprogram_4_qa_0"} 
};var a_Apolloprogram_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ήταν δυνατή η αποκατάσταση και επεξεργασία των ταινιών χωρίς να αλλοιωθεί η ιστορική αξιοπιστία ή κάποιες πτυχές των ταινιών την έχασαν;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ήταν δυνατή η αποκατάσταση και επεξεργασία των ταινιών χωρίς να αλλοιωθεί η ιστορική αξιοπιστία ή κάποιες πτυχές των ταινιών την έχασαν;`, correct_answer: "χωρίς να αλλοιωθεί η ιστορική αξιοπιστία", trial_name: "a_Apolloprogram_4_qa_1"} 
};var a_Apolloprogram_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι είδους εγγραφές από το Διαστημικό Κέντρο Τζόνσον χρησιμοποιήθηκαν για να βοηθήσουν στην αποκατάσταση των αρχικών κασετών;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι είδους εγγραφές από το Διαστημικό Κέντρο Τζόνσον χρησιμοποιήθηκαν για να βοηθήσουν στην αποκατάσταση των αρχικών κασετών;`, correct_answer: "κινηματογραφικές εγγραφές", trial_name: "a_Apolloprogram_4_qa_2"} 
};var a_Apolloprogram_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Σε ποια εταιρεία ανατέθηκε η προσπάθεια αποκατάστασης των αρχικών κασετών;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε ποια εταιρεία ανατέθηκε η προσπάθεια αποκατάστασης των αρχικών κασετών;`, correct_answer: "Lowry Digital", trial_name: "a_Apolloprogram_4_qa_3"} 
};var a_Apolloprogram_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Στις αποκατεστημένες κασέτες μπόρεσε να προστεθεί χρώμα για τη βελτίωση της εικόνας ή παραμένουν ασπρόμαυρες;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Στις αποκατεστημένες κασέτες μπόρεσε να προστεθεί χρώμα για τη βελτίωση της εικόνας ή παραμένουν ασπρόμαυρες;`, correct_answer: "ασπρόμαυρη εικόνα", trial_name: "a_Apolloprogram_4_qa_4"} 
};var a_Amazonrainforest_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Οι περιβαλλοντολόγοι ανησυχούν για την απώλεια της <span id="a_Amazonrainforest_3_qa_0">βιοποικιλότητας</span> που θα προκύψει ως αποτέλεσμα της <span id="a_Amazonrainforest_3_qa_1">καταστροφής του δάσους</span>, καθώς και για την απελευθέρωση <span id="a_Amazonrainforest_3_qa_2">άνθρακα που εμπεριέχεται στη βλάστηση</span>, η οποία θα μπορούσε να επιταχύνει την παγκόσμια υπερθέρμανση. Τα αειθαλή δάση του Αμαζονίου αντιπροσωπεύουν περίπου το 10% της παγκόσμιας πρωτογενούς παραγωγικότητας και <span id="a_Amazonrainforest_3_qa_3">10%</span> των αποθεμάτων άνθρακα σε οικοσυστήματα - της τάξης <span id="a_Amazonrainforest_3_qa_4">1,1 × 1011</span> μετρικοί τόνοι άνθρακα. Στα δάση του Αμαζονίου εκτιμάται ότι συσσωρεύτηκαν 0,62 ± 0,37 τόνοι άνθρακα ανά εκτάριο κάθε χρόνο, μεταξύ του 1975 και του 1996.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Τι ανησυχούν οι περιβαλλοντολόγοι ότι θα χαθεί στο δάσος του Αμαζονίου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι ανησυχούν οι περιβαλλοντολόγοι ότι θα χαθεί στο δάσος του Αμαζονίου;`, correct_answer: "βιοποικιλότητας", trial_name: "a_Amazonrainforest_3_qa_0"} 
};var a_Amazonrainforest_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Η απώλεια της βιοποικιλότητας μπορεί να είναι αποτέλεσμα ποιανού γεγονότος, σύμφωνα με τους περιβαλλοντολόγους;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Η απώλεια της βιοποικιλότητας μπορεί να είναι αποτέλεσμα ποιανού γεγονότος, σύμφωνα με τους περιβαλλοντολόγους;`, correct_answer: "καταστροφής του δάσους", trial_name: "a_Amazonrainforest_3_qa_1"} 
};var a_Amazonrainforest_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι ακριβώς ανησυχούν οι περιβαλλοντολόγοι ότι απελευθερώνεται στην περιοχή του Αμαζονίου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι ακριβώς ανησυχούν οι περιβαλλοντολόγοι ότι απελευθερώνεται στην περιοχή του Αμαζονίου;`, correct_answer: "άνθρακα που εμπεριέχεται στη βλάστηση", trial_name: "a_Amazonrainforest_3_qa_2"} 
};var a_Amazonrainforest_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια ποσότητα του παγκόσμιου άνθρακα είναι αποθηκευμένη στο δάσος του Αμαζονίου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια ποσότητα του παγκόσμιου άνθρακα είναι αποθηκευμένη στο δάσος του Αμαζονίου;`, correct_answer: "10%", trial_name: "a_Amazonrainforest_3_qa_3"} 
};var a_Amazonrainforest_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσοι μετρικοί τόνοι άνθρακα πιστεύεται ότι είναι αποθηκευμένοι στο δάσος του Αμαζονίου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσοι μετρικοί τόνοι άνθρακα πιστεύεται ότι είναι αποθηκευμένοι στο δάσος του Αμαζονίου;`, correct_answer: "1,1 × 1011", trial_name: "a_Amazonrainforest_3_qa_4"} 
};var a_Amazonrainforest_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Το <span id="a_Amazonrainforest_4_qa_0">2010</span> το τροπικό δάσος του Αμαζονίου γνώρισε ακόμη μια σοβαρή ξηρασία, κατά κάποιον τρόπο πιο ακραία από την ξηρασία του 2005. Η πληγείσα περιοχή ήταν κατά προσέγγιση <span id="a_Amazonrainforest_4_qa_1">1.160.000</span> τετραγωνικά μίλια τροπικού δάσους, σε σύγκριση με 734.000 τετραγωνικά μίλια (1.900.000 τετραγωνικά χιλιόμετρα) το 2005. Η ξηρασία του 2010 είχε <span id="a_Amazonrainforest_4_qa_2">3 επίκεντρα</span> όπου η βλάστηση πέθανε, ενώ το <span id="a_Amazonrainforest_4_qa_3">2005</span> η ξηρασία επικεντρώθηκε στο νοτιοδυτικό τμήμα. Τα ευρήματα δημοσιεύθηκαν στο περιοδικό Science. Ένα τυπικό έτος ο Αμαζόνιος απορροφά <span id="a_Amazonrainforest_4_qa_4">1,5 γιγατόνους</span> διοξειδίου του άνθρακα. Αντίθετα, κατά τη διάρκεια του 2005 απελευθερώθηκαν 5 γιγατόνοι και το 2010 απελευθερώθηκαν 8 γιγατόνοι.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιο έτος βίωσε ο Αμαζόνιος μια ξηρασία που μπορεί να ήταν πιο ακραία από ό,τι το 2005;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο έτος βίωσε ο Αμαζόνιος μια ξηρασία που μπορεί να ήταν πιο ακραία από ό,τι το 2005;`, correct_answer: "2010", trial_name: "a_Amazonrainforest_4_qa_0"} 
};var a_Amazonrainforest_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσα τετραγωνικά μίλια ήταν η περιοχή που επηρεάστηκε από την ξηρασία του 2010;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσα τετραγωνικά μίλια ήταν η περιοχή που επηρεάστηκε από την ξηρασία του 2010;`, correct_answer: "1.160.000", trial_name: "a_Amazonrainforest_4_qa_1"} 
};var a_Amazonrainforest_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσες περιοχές επηρεάστηκαν από τον θάνατο της βλάστησης κατά την ξηρασία του 2010;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσες περιοχές επηρεάστηκαν από τον θάνατο της βλάστησης κατά την ξηρασία του 2010;`, correct_answer: "3 επίκεντρα", trial_name: "a_Amazonrainforest_4_qa_2"} 
};var a_Amazonrainforest_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο έτος επηρεάστηκε από την ξηρασία κυρίως το νότιο τμήμα του δάσους του Αμαζονίου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο έτος επηρεάστηκε από την ξηρασία κυρίως το νότιο τμήμα του δάσους του Αμαζονίου;`, correct_answer: "2005", trial_name: "a_Amazonrainforest_4_qa_3"} 
};var a_Amazonrainforest_4_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσοι τόνοι άνθρακα απορροφούνται στον Αμαζόνιο κατά τη διάρκεια ενός τυπικού έτους;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσοι τόνοι άνθρακα απορροφούνται στον Αμαζόνιο κατά τη διάρκεια ενός τυπικού έτους;`, correct_answer: "1,5 γιγατόνους", trial_name: "a_Amazonrainforest_4_qa_4"} 
};var a_Ctenophora_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Κυμαίνονται από περίπου 1 χιλιοστόμετρο (0,039 ίντσες) έως 1,5 μέτρα (4,9 πόδια) σε μέγεθος, τα κτενοφόρα είναι τα μεγαλύτερα μη αποικιακά ζώα που χρησιμοποιούν <span id="a_Ctenophora_2_qa_0">cilia</span> ("τρίχες") ως κύρια μέθοδο <span id="a_Ctenophora_2_qa_1">μετακίνησης</span>. Τα περισσότερα είδη έχουν οκτώ λωρίδες, που ονομάζονται σειρές χτένων, διατρέχουν το μήκος του σώματός τους και φέρουν λωρίδες κτενών με κρόσια, που ονομάζονται <span id="a_Ctenophora_2_qa_2">ctenes</span>", στοιβαγμένες κατά μήκος γραμμών έτσι ώστε κάθε μια κτένα να αγγίζει την κτένα παρακάτω. Το όνομα "κτενοφόρα" σημαίνει "<span id="a_Ctenophora_2_qa_3">τα φέροντα κτένες</span>", από το ελληνικό κτείς και το επίθεμα -φορος που σημαίνει "μεταφορά".</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Πώς ονομάζονται οι τρίχες στα κτενοφόρα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς ονομάζονται οι τρίχες στα κτενοφόρα;`, correct_answer: "cilia", trial_name: "a_Ctenophora_2_qa_0"} 
};var a_Ctenophora_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Για ποιο σκοπό χρησιμοποιούνται τα τριχίδια;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Για ποιο σκοπό χρησιμοποιούνται τα τριχίδια;`, correct_answer: "μετακίνησης", trial_name: "a_Ctenophora_2_qa_1"} 
};var a_Ctenophora_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πώς αποκαλούνται οι σειρές από τριχίδια που μοιάζουν με τσατσάρα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς αποκαλούνται οι σειρές από τριχίδια που μοιάζουν με τσατσάρα;`, correct_answer: "ctenes", trial_name: "a_Ctenophora_2_qa_2"} 
};var a_Ctenophora_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι σημαίνει κτενοφόρα στα ελληνικά;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι σημαίνει κτενοφόρα στα ελληνικά;`, correct_answer: "τα φέροντα κτένες", trial_name: "a_Ctenophora_2_qa_3"} 
};var a_FresnoCalifornia_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Η "<span id="a_FresnoCalifornia_0_qa_4">Δυτική Πλευρά</span>" του Φρέσνο, επίσης συχνά αποκαλούμενη ως "<span id="a_FresnoCalifornia_0_qa_0">Νότιο Φρέσνο</span>", είναι μία από τις παλαιότερες γειτονιές της πόλης. Η γειτονιά βρίσκεται <span id="a_FresnoCalifornia_0_qa_1">νοτιοδυτικά</span> από τον αυτοκινητόδρομο 99 (που την χωρίζει από το κέντρο του Φρέσνο), δυτικά του αυτοκινητόδρομου 41 και νότια της λεωφόρου Νίλσεν (ή του νέου αυτοκινητόδρομου 180) και εκτείνεται στα όρια της πόλης δυτικά και νότια. Η γειτονιά θεωρείται παραδοσιακά ως το κέντρο της κοινότητας των <span id="a_FresnoCalifornia_0_qa_2">αφροαμερικανών</span> του Φρέσνο. Είναι ποικίλη πολιτιστικά και περιλαμβάνει επίσης σημαντικούς πληθυσμούς μεξικανοαμερικανών και αμερικανών ασιατικής καταγωγής (κυρίως πληθυσμούς <span id="a_FresnoCalifornia_0_qa_3">Hmong και Lao</span>).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιο είναι το άλλο όνομα για τη δυτική πλευρά του Φρέσνο;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο είναι το άλλο όνομα για τη δυτική πλευρά του Φρέσνο;`, correct_answer: "Νότιο Φρέσνο", trial_name: "a_FresnoCalifornia_0_qa_0"} 
};var a_FresnoCalifornia_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Προς ποια κατεύθυνση βρίσκεται η δυτική πλευρά της γειτονιάς του Φρέσνο σε σχέση με τον αυτοκινητόδρομο 99;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Προς ποια κατεύθυνση βρίσκεται η δυτική πλευρά της γειτονιάς του Φρέσνο σε σχέση με τον αυτοκινητόδρομο 99;`, correct_answer: "νοτιοδυτικά", trial_name: "a_FresnoCalifornia_0_qa_1"} 
};var a_FresnoCalifornia_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Η δυτική πλευρά του Φρέσνο είναι το κέντρο ποιας εθνικής κοινότητας;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Η δυτική πλευρά του Φρέσνο είναι το κέντρο ποιας εθνικής κοινότητας;`, correct_answer: "αφροαμερικανών", trial_name: "a_FresnoCalifornia_0_qa_2"} 
};var a_FresnoCalifornia_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιες είναι οι δύο βασικές ασιατικές-αμερικανικές ομάδες που ζουν στη δυτική πλευρά του Φρέσνο;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιες είναι οι δύο βασικές ασιατικές-αμερικανικές ομάδες που ζουν στη δυτική πλευρά του Φρέσνο;`, correct_answer: "Hmong και Lao", trial_name: "a_FresnoCalifornia_0_qa_3"} 
};var a_FresnoCalifornia_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια γειτονιά βρίσκεται δυτικά του αυτοκινητόδρομου 41;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια γειτονιά βρίσκεται δυτικά του αυτοκινητόδρομου 41;`, correct_answer: "Δυτική Πλευρά", trial_name: "a_FresnoCalifornia_0_qa_4"} 
};var a_FresnoCalifornia_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Το Fresno εξυπηρετείται από το <span id="a_FresnoCalifornia_3_qa_0">State Route 99</span>, τον κύριο αυτοκινητόδρομο Βορρά / Νότου που συνδέει τα μεγάλα κέντρα πληθυσμού της Κεντρικής Κοιλάδας της Καλιφόρνια. Το State Route 168, το <span id="a_FresnoCalifornia_3_qa_1">Sierra Freeway</span>, κατευθύνεται ανατολικά προς την πόλη Clovis και τη λίμνη Huntington. Το <span id="a_FresnoCalifornia_3_qa_2">State Route 41</span> (Yosemite Freeway/Eisenhower Freeway) φτάνει στο Φρέσνο από το Atascadero στον νότο, και στη συνέχεια κατευθύνεται βόρεια προς Yosemite. Το State Route 180,(Kings Canyon Freeway) έρχεται προς τα <span id="a_FresnoCalifornia_3_qa_3">δυτικά</span> μέσω Mendota και από τα ανατολικά στο εθνικό πάρκο Kings Canyon και πηγαίνει προς την πόλη Reedley.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιος δρόμος συνδέει το Φρέσνο με την Κεντρική Κοιλάδα της Καλιφόρνια;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος δρόμος συνδέει το Φρέσνο με την Κεντρική Κοιλάδα της Καλιφόρνια;`, correct_answer: "State Route 99", trial_name: "a_FresnoCalifornia_3_qa_0"} 
};var a_FresnoCalifornia_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια είναι η άλλη ονομασία του State Route 168;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια είναι η άλλη ονομασία του State Route 168;`, correct_answer: "Sierra Freeway", trial_name: "a_FresnoCalifornia_3_qa_1"} 
};var a_FresnoCalifornia_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια είναι η άλλη ονομασία του Yosemite Freeway?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια είναι η άλλη ονομασία του Yosemite Freeway?`, correct_answer: "State Route 41", trial_name: "a_FresnoCalifornia_3_qa_2"} 
};var a_FresnoCalifornia_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Το State Route 180 έρχεται από ποια κατεύθυνση μέσω της Mendota?`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Το State Route 180 έρχεται από ποια κατεύθυνση μέσω της Mendota?`, correct_answer: "δυτικά", trial_name: "a_FresnoCalifornia_3_qa_3"} 
};var a_Geology_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Ο <span id="a_Geology_4_qa_0">Τζέιμς Χάτον</span> θεωρείται συχνά ως ο πρώτος σύγχρονος γεωλόγος. Το 1785 παρουσίασε μια εργασία με τίτλο <span id="a_Geology_4_qa_1">Θεωρία της Γης</span> στη Βασιλική Εταιρεία του Εδιμβούργου. Στην εργασία, εξηγούσε τη θεωρία του ότι <span id="a_Geology_4_qa_3">η Γη πρέπει να είναι πολύ παλαιότερη από ό,τι είχε προηγουμένως υποτεθεί</span> προκειμένου να δοθεί αρκετός χρόνος για να διαβρωθούν τα βουνά και για να σχηματίσουν τα ιζήματα νέους βράχους στον βυθό της θάλασσας , τα οποία με τη σειρά τους ανεγέρθηκαν για να γίνουν η ξηρά. Ο Χάτον δημοσίευσε μια δίτομη έκδοση των ιδεών του το <span id="a_Geology_4_qa_2">1795</span> (Τόμος 1, Τόμος 2).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιος θεωρείται ο πρώτος σύγχρονος γεωλόγος;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος θεωρείται ο πρώτος σύγχρονος γεωλόγος;`, correct_answer: "Τζέιμς Χάτον", trial_name: "a_Geology_4_qa_0"} 
};var a_Geology_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια εργασία παρουσίασε το 1785 ο Τζέιμς Χάτον στη Βασιλική Εταιρεία του Εδιμβούργου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια εργασία παρουσίασε το 1785 ο Τζέιμς Χάτον στη Βασιλική Εταιρεία του Εδιμβούργου;`, correct_answer: "Θεωρία της Γης", trial_name: "a_Geology_4_qa_1"} 
};var a_Geology_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο έτος δημοσίευσε ο Τζέιμς Χάτον μια δίτομη έκδοση των θεωριών του;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο έτος δημοσίευσε ο Τζέιμς Χάτον μια δίτομη έκδοση των θεωριών του;`, correct_answer: "1795", trial_name: "a_Geology_4_qa_2"} 
};var a_Geology_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια ήταν η κύρια ιδέα της εργασίας του Τζέιμς Χάτον;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια ήταν η κύρια ιδέα της εργασίας του Τζέιμς Χάτον;`, correct_answer: "η Γη πρέπει να είναι πολύ παλαιότερη από ό,τι είχε προηγουμένως υποτεθεί", trial_name: "a_Geology_4_qa_3"} 
};var a_Pharmacy_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Στις περισσότερες χώρες, το φαρμακείο υπόκειται στη <span id="a_Pharmacy_2_qa_0">νομοθεσία περί φαρμακείων</span>, με απαιτήσεις για <span id="a_Pharmacy_2_qa_4">συνθήκες αποθήκευσης, υποχρεωτικά κείμενα, εξοπλισμό κλπ.</span>, όπως ορίζονται στη νομοθεσία. Αν και παλαιότερα οι φαρμακοποιοί περιορίζονταν στην <span id="a_Pharmacy_2_qa_1">εντός του φαρμακείου παρασκευή/διανομή φαρμάκων</span>, υπήρξε μια αυξανόμενη τάση προς τη χρήση εκπαιδευμένων τεχνικών φαρμακείου, ενώ ο φαρμακοποιός ξοδεύει περισσότερο χρόνο επικοινωνώντας με τους ασθενείς. Οι τεχνικοί φαρμακείου εξαρτώνται πλέον περισσότερο από τον <span id="a_Pharmacy_2_qa_2">αυτοματισμό</span> για να τους βοηθήσει στον νέο τους ρόλο της ενασχόλησης με <span id="a_Pharmacy_2_qa_3">τις συνταγές των ασθενών και τα θέματα ασφαλείας των ασθενών</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Σε τι υπόκειται το φαρμακείο στις περισσότερες χώρες;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε τι υπόκειται το φαρμακείο στις περισσότερες χώρες;`, correct_answer: "νομοθεσία περί φαρμακείων", trial_name: "a_Pharmacy_2_qa_0"} 
};var a_Pharmacy_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Σε ποιες αρμοδιότητες περιορίζονταν προηγουμένως οι τεχνικοί φαρμακείου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε ποιες αρμοδιότητες περιορίζονταν προηγουμένως οι τεχνικοί φαρμακείου;`, correct_answer: "εντός του φαρμακείου παρασκευή/διανομή φαρμάκων", trial_name: "a_Pharmacy_2_qa_1"} 
};var a_Pharmacy_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Από τι εξαρτώνται οι τεχνικοί φαρμακείου όλο και περισσότερο;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Από τι εξαρτώνται οι τεχνικοί φαρμακείου όλο και περισσότερο;`, correct_answer: "αυτοματισμό", trial_name: "a_Pharmacy_2_qa_2"} 
};var a_Pharmacy_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιες είναι σήμερα οι νέες αρμοδιότητες των τεχνικών φαρμακείου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιες είναι σήμερα οι νέες αρμοδιότητες των τεχνικών φαρμακείου;`, correct_answer: "τις συνταγές των ασθενών και τα θέματα ασφαλείας των ασθενών", trial_name: "a_Pharmacy_2_qa_3"} 
};var a_Pharmacy_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι επιβάλλει η νομοθεσία περί φαρμακείων;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι επιβάλλει η νομοθεσία περί φαρμακείων;`, correct_answer: "συνθήκες αποθήκευσης, υποχρεωτικά κείμενα, εξοπλισμό κλπ.", trial_name: "a_Pharmacy_2_qa_4"} 
};var a_Construction_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph"><span id="a_Construction_0_qa_0">Κατασκευή</span> είναι η διαδικασία κατασκευής ενός κτιρίου ή υποδομής. Η κατασκευή διαφέρει από την παραγωγή στο ότι η <span id="a_Construction_0_qa_1">παραγωγή</span> συνήθως περιλαμβάνει τη μαζική παραγωγή παρόμοιων αντικειμένων χωρίς προκαθορισμένο αγοραστή, ενώ η κατασκευή συνήθως πραγματοποιείται επιτόπου για <span id="a_Construction_0_qa_4">έναν γνωστό πελάτη</span>. Η κατασκευή ως βιομηχανία αποτελεί το <span id="a_Construction_0_qa_2">έξι έως εννέα τοις εκατό</span> του ακαθάριστου εγχώριου προϊόντος των ανεπτυγμένων χωρών. Η κατασκευή αρχίζει με <span id="a_Construction_0_qa_3">προγραμματισμό, σχεδιασμό και χρηματοδότηση</span> και συνεχίζεται μέχρι να κατασκευαστεί το έργο και να είναι έτοιμο προς χρήση.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποια είναι η διαδικασία κατασκευής ενός κτιρίου ή μιας υποδομής;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια είναι η διαδικασία κατασκευής ενός κτιρίου ή μιας υποδομής;`, correct_answer: "Κατασκευή", trial_name: "a_Construction_0_qa_0"} 
};var a_Construction_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι συνιστά συνήθως η μαζική παραγωγή παρόμοιων ειδών χωρίς προκαθορισμένο αγοραστή;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι συνιστά συνήθως η μαζική παραγωγή παρόμοιων ειδών χωρίς προκαθορισμένο αγοραστή;`, correct_answer: "παραγωγή", trial_name: "a_Construction_0_qa_1"} 
};var a_Construction_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι ποσοστό του ακαθάριστου εγχώριου προϊόντος αντιπροσωπεύει η κατασκευή;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι ποσοστό του ακαθάριστου εγχώριου προϊόντος αντιπροσωπεύει η κατασκευή;`, correct_answer: "έξι έως εννέα τοις εκατό", trial_name: "a_Construction_0_qa_2"} 
};var a_Construction_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια είναι τα τρία πράγματα που χρειάζονται για να γίνει η κατασκευή;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια είναι τα τρία πράγματα που χρειάζονται για να γίνει η κατασκευή;`, correct_answer: "προγραμματισμό, σχεδιασμό και χρηματοδότηση", trial_name: "a_Construction_0_qa_3"} 
};var a_Construction_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Η κατασκευή πραγματοποιείται επιτόπου για ποιον;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Η κατασκευή πραγματοποιείται επιτόπου για ποιον;`, correct_answer: "έναν γνωστό πελάτη", trial_name: "a_Construction_0_qa_4"} 
};var a_Privateschool_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">﻿Τα <span id="a_Privateschool_0_qa_0">Ergänzungsschulen</span> είναι δευτεροβάθμιες ή μεταδευτεροβάθμιες (όχι τριτοβάθμιες) σχολές, οι οποίες διευθύνονται από ιδιώτες, ιδιωτικούς οργανισμούς ή σπάνια, από <span id="a_Privateschool_0_qa_3">θρησκευτικές ομάδες</span> και προσφέρουν ένα είδος εκπαίδευσης που δεν είναι διαθέσιμη στα δημόσια σχολεία. Τα περισσότερα απ' αυτά τα σχολεία είναι <span id="a_Privateschool_0_qa_1">επαγγελματικές</span> σχολές. Ωστόσο, αυτές οι επαγγελματικές σχολές δεν αποτελούν μέρος του γερμανικού διττού εκπαιδευτικού συστήματος. Τα Ergänzungsschulen είναι ελεύθερα να λειτουργούν εκτός κυβερνητικών ρυθμίσεων και χρηματοδοτούνται στο σύνολό τους χρεώνοντας τους φοιτητές  με <span id="a_Privateschool_0_qa_2">δίδακτρα</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Πώς λέγονται τα ιδιωτικά σχολεία δευτεροβάθμιας εκπαίδευσης στη Γερμανία;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς λέγονται τα ιδιωτικά σχολεία δευτεροβάθμιας εκπαίδευσης στη Γερμανία;`, correct_answer: "Ergänzungsschulen", trial_name: "a_Privateschool_0_qa_0"} 
};var a_Privateschool_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι είδος σχολής είναι τα περισσότερα ergänzungsschulen;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι είδος σχολής είναι τα περισσότερα ergänzungsschulen;`, correct_answer: "επαγγελματικές", trial_name: "a_Privateschool_0_qa_1"} 
};var a_Privateschool_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πώς χρηματοδοτούνται τα ergänzungsschulen;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς χρηματοδοτούνται τα ergänzungsschulen;`, correct_answer: "δίδακτρα", trial_name: "a_Privateschool_0_qa_2"} 
};var a_Privateschool_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι ομάδες διευθύνουν μερικές φορές ergänzungsschulen παράλληλα με ιδιώτες και οργανισμούς;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι ομάδες διευθύνουν μερικές φορές ergänzungsschulen παράλληλα με ιδιώτες και οργανισμούς;`, correct_answer: "θρησκευτικές ομάδες", trial_name: "a_Privateschool_0_qa_3"} 
};var a_Privateschool_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Μερικά από τα παλαιότερα σχολεία στη Νότιο Αφρική είναι ιδιωτικές εκκλησιαστικές σχολές που ιδρύθηκαν από ιεραπόστολους στις αρχές του <span id="a_Privateschool_2_qa_4">δέκατου ένατου</span> αιώνα. Από τότε, ο ιδιωτικός τομέας έχει αυξηθεί. Μετά την κατάργηση του απαρτχάιντ, οι νόμοι που διέπουν την ιδιωτική εκπαίδευση στη Νότιο Αφρική άλλαξαν σημαντικά. Ο <span id="a_Privateschool_2_qa_0">Νόμος περί Νοτιοαφρικανικών Σχολείων</span> του <span id="a_Privateschool_2_qa_1">1996</span> αναγνωρίζει δύο κατηγορίες σχολείων: Τα «δημόσια» (ελεγχόμενα από το κράτος) και τα «<span id="a_Privateschool_2_qa_2">ανεξάρτητα</span>» (στα οποία περιλαμβάνονται τα <span id="a_Privateschool_2_qa_3">παραδοσιακά ιδιωτικά</span> σχολεία και τα σχολεία τα οποία λειτουργούν από ιδιώτες.)</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιος νόμος της Νότιας Αφρικής αναγνώριζε δύο τύπους σχολείων;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος νόμος της Νότιας Αφρικής αναγνώριζε δύο τύπους σχολείων;`, correct_answer: "Νόμος περί Νοτιοαφρικανικών Σχολείων", trial_name: "a_Privateschool_2_qa_0"} 
};var a_Privateschool_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο έτος ψηφίστηκε ο Νόμος περί Νοτιοαφρικανικών Σχολείων;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο έτος ψηφίστηκε ο Νόμος περί Νοτιοαφρικανικών Σχολείων;`, correct_answer: "1996", trial_name: "a_Privateschool_2_qa_1"} 
};var a_Privateschool_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Μαζί με τα δημόσια σχολεία, ποιο είδος σχολείου αναγνωρίστηκε με τον Νόμο περί Νοτιοαφρικανικών Σχολείων;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Μαζί με τα δημόσια σχολεία, ποιο είδος σχολείου αναγνωρίστηκε με τον Νόμο περί Νοτιοαφρικανικών Σχολείων;`, correct_answer: "ανεξάρτητα", trial_name: "a_Privateschool_2_qa_2"} 
};var a_Privateschool_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια σχολεία χαρακτηρίζονται ως ανεξάρτητα στη Νότιο Αφρική, παράλληλα με τα λειτουργούντα από ιδιώτες σχολεία;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια σχολεία χαρακτηρίζονται ως ανεξάρτητα στη Νότιο Αφρική, παράλληλα με τα λειτουργούντα από ιδιώτες σχολεία;`, correct_answer: "παραδοσιακά ιδιωτικά", trial_name: "a_Privateschool_2_qa_3"} 
};var a_Privateschool_2_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιον αιώνα κυρίως ίδρυσαν οι ιεραπόστολοι εκκλησιαστικές σχολές στη Νότιο Αφρική;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιον αιώνα κυρίως ίδρυσαν οι ιεραπόστολοι εκκλησιαστικές σχολές στη Νότιο Αφρική;`, correct_answer: "δέκατου ένατου", trial_name: "a_Privateschool_2_qa_4"} 
};var a_HarvardUniversity_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Η προπτυχιακή εισαγωγή στο Χάρβαρντ χαρακτηρίζεται από το Ίδρυμα Κάρνεγκι ως «η πιο επιλεκτική, με τη χαμηλότερη αποδοχή». Το Κολλέγιο Χάρβαρντ δέχτηκε <span id="a_HarvardUniversity_3_qa_0">5,3%</span> των υποψηφίων για την τάξη του 2019, ένα ιστορικό χαμηλό και το δεύτερο χαμηλότερο ποσοστό αποδοχής από όλα τα εθνικά πανεπιστήμια. Το Κολλέγιο του Χάρβαρντ σταμάτησε το πρόγραμμα πρόωρης αποδοχής του το <span id="a_HarvardUniversity_3_qa_1">2007</span> δεδομένου ότι το πρόγραμμα <span id="a_HarvardUniversity_3_qa_2">εθεωρείτο ότι αδικούσε υποψήφιους της μειοψηφίας με χαμηλό εισόδημα και υποεκπροσώπηση</span> που απευθύνονταν σε επιλεγμένα πανεπιστήμια, παρ' όλα αυτά επαναφέρθηκε ένα πρόγραμμα Πρόωρης Δράσης το <span id="a_HarvardUniversity_3_qa_3">2016</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιο είναι το ποσοστό αποδοχής υποψηφίων για την τάξη του 2019;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο είναι το ποσοστό αποδοχής υποψηφίων για την τάξη του 2019;`, correct_answer: "5,3%", trial_name: "a_HarvardUniversity_3_qa_0"} 
};var a_HarvardUniversity_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο έτος έβαλε τέλος το Χάρβαρντ στο πρόγραμμα πρόωρης αποδοχής;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο έτος έβαλε τέλος το Χάρβαρντ στο πρόγραμμα πρόωρης αποδοχής;`, correct_answer: "2007", trial_name: "a_HarvardUniversity_3_qa_1"} 
};var a_HarvardUniversity_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Γιατί έβαλε τέλος το Χάρβαρντ στο πρόγραμμα πρόωρης αποδοχής του;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Γιατί έβαλε τέλος το Χάρβαρντ στο πρόγραμμα πρόωρης αποδοχής του;`, correct_answer: "εθεωρείτο ότι αδικούσε υποψήφιους της μειοψηφίας με χαμηλό εισόδημα και υποεκπροσώπηση", trial_name: "a_HarvardUniversity_3_qa_2"} 
};var a_HarvardUniversity_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο έτος επαναφέρθηκε ένα πρόγραμμα πρόωρης δράσης;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο έτος επαναφέρθηκε ένα πρόγραμμα πρόωρης δράσης;`, correct_answer: "2016", trial_name: "a_HarvardUniversity_3_qa_3"} 
};var a_Yuandynasty_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Ο ιστορικός <span id="a_Yuandynasty_4_qa_0">Frederick W. Mote</span> έγραψε ότι η χρήση του όρου "κοινωνικές τάξεις" για αυτό το σύστημα ήταν παραπλανητική και ότι η θέση των ανθρώπων στο σύστημα των τεσσάρων κατηγοριών δεν ήταν ένδειξη της πραγματικής κοινωνικής εξουσίας τους αλλά απλώς συνεπαγόταν «<span id="a_Yuandynasty_4_qa_1">βαθμούς προνομίων</span>» στους οποίους είχαν θεσμικά και νομικά δικαιώματα, οπότε η στάση ενός ατόμου μέσα στις κατηγορίες δεν αποτελούσε εγγύηση για τη θέση τους, αφού υπήρχαν <span id="a_Yuandynasty_4_qa_2">πλούσιοι και δυνατοί κοινωνικά</span> Κινέζοι ενώ υπήρχαν λιγότερο πλούσιοι Μογγόλοι και Σέμου από τους Μογγόλους και Σέμου, <span id="a_Yuandynasty_4_qa_3">που ζούσαν στη φτώχεια και δέχονταν μια κακομεταχείριση</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιος πίστευε ότι το σύστημα κοινωνικής τάξης του Yuan δεν έπρεπε να ονομάζεται «κοινωνικές τάξεις»;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος πίστευε ότι το σύστημα κοινωνικής τάξης του Yuan δεν έπρεπε να ονομάζεται «κοινωνικές τάξεις»;`, correct_answer: "Frederick W. Mote", trial_name: "a_Yuandynasty_4_qa_0"} 
};var a_Yuandynasty_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι πίστευε  ο Mote ότι το σύστημα κατηγοριών Yuan αντιπροσώπευε πραγματικά;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι πίστευε  ο Mote ότι το σύστημα κατηγοριών Yuan αντιπροσώπευε πραγματικά;`, correct_answer: "βαθμούς προνομίων", trial_name: "a_Yuandynasty_4_qa_1"} 
};var a_Yuandynasty_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Με ποιο απροσδόκητο καθεστώς υπήρχαν πολλοί Κινέζοι;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Με ποιο απροσδόκητο καθεστώς υπήρχαν πολλοί Κινέζοι;`, correct_answer: "πλούσιοι και δυνατοί κοινωνικά", trial_name: "a_Yuandynasty_4_qa_2"} 
};var a_Yuandynasty_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Με ποιο απροσδόκητο καθεστώς υπήρχαν πολλοί Μογγόλοι;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Με ποιο απροσδόκητο καθεστώς υπήρχαν πολλοί Μογγόλοι;`, correct_answer: "που ζούσαν στη φτώχεια και δέχονταν μια κακομεταχείριση", trial_name: "a_Yuandynasty_4_qa_3"} 
};var a_Kenya_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Η Κένυα κατατάσσεται <span id="a_Kenya_0_qa_0">χαμηλά</span> από τον Δείκτη Μέτρησης της Διαφθοράς της Διεθνούς Διαφάνειας (CPI), μια μέτρηση η οποία επιχειρεί να μετρήσει την επικράτηση της <span id="a_Kenya_0_qa_1">διαφθοράς του δημόσιου τομέα</span> σε διάφορες χώρες. Το 2012, το έθνος ήταν στην <span id="a_Kenya_0_qa_2">139η</span> από 176 συνολικά χώρες στο CPI, με σκορ 27/100. Ωστόσο, υπάρχουν αρκετές μάλλον σημαντικές εξελίξεις όσον αφορά τον περιορισμό της διαφθοράς από την κυβέρνηση της Κένυας, για παράδειγμα, <span id="a_Kenya_0_qa_3">η δημιουργία μιας νέας και ανεξάρτητης επιτροπής δεοντολογίας και καταπολέμησης της διαφθοράς</span> (EACC).</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Πού κλίνει η Κένυα στην κλίμακα του CPI;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πού κλίνει η Κένυα στην κλίμακα του CPI;`, correct_answer: "χαμηλά", trial_name: "a_Kenya_0_qa_0"} 
};var a_Kenya_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι μετράει η κλίμακα CPI;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι μετράει η κλίμακα CPI;`, correct_answer: "διαφθοράς του δημόσιου τομέα", trial_name: "a_Kenya_0_qa_1"} 
};var a_Kenya_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πού βρίσκεται η Κένυα στην κλίμακα το 2012;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πού βρίσκεται η Κένυα στην κλίμακα το 2012;`, correct_answer: "139η", trial_name: "a_Kenya_0_qa_2"} 
};var a_Kenya_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πώς η Κένυα εμποδίζει τη διαφθορά;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς η Κένυα εμποδίζει τη διαφθορά;`, correct_answer: "η δημιουργία μιας νέας και ανεξάρτητης επιτροπής δεοντολογίας και καταπολέμησης της διαφθοράς", trial_name: "a_Kenya_0_qa_3"} 
};var a_Kenya_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Στις <span id="a_Kenya_1_qa_0">28 Φεβρουαρίου 2008</span>, οι Kibaki και η Odinga υπέγραψαν συμφωνία για τη σύσταση κυβέρνησης συνασπισμού στην οποία ο Odinga θα γίνει ο δεύτερος <span id="a_Kenya_1_qa_1">πρωθυπουργός</span> της Κένυας. Με τη συμφωνία αυτή, ο πρόεδρος θα ορίσει τους υπουργούς του υπουργικού συμβουλίου από τα  δύο στρατόπεδα <span id="a_Kenya_1_qa_2">PNU και ODM</span> ανάλογα με το <span id="a_Kenya_1_qa_3">δύναμη κάθε κόμματος στο Κοινοβούλιο</span>. Η συμφωνία προέβλεπε ότι το υπουργικό συμβούλιο θα περιλάμβανε έναν αντιπρόεδρο και δύο αναπληρωτές πρωθυπουργούς. Μετά τις συζητήσεις, εγκρίθηκε από το Κοινοβούλιο, ότι ο συνασπισμός θα κατέχει <span id="a_Kenya_1_qa_4">μέχρι το τέλος του τρέχοντος κοινοβουλίου ή εάν οποιοδήποτε από τα μέρη αποσυρθεί από τη συμφωνία από πριν</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Πότε οι Kibaki και Odinga υπέγραψαν μια συμφωνία για το σχηματισμό κυβέρνησης;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε οι Kibaki και Odinga υπέγραψαν μια συμφωνία για το σχηματισμό κυβέρνησης;`, correct_answer: "28 Φεβρουαρίου 2008", trial_name: "a_Kenya_1_qa_0"} 
};var a_Kenya_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος θα είναι ο ρόλος του Odinga στην κυβέρνηση;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος θα είναι ο ρόλος του Odinga στην κυβέρνηση;`, correct_answer: "πρωθυπουργός", trial_name: "a_Kenya_1_qa_1"} 
};var a_Kenya_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Από πού ο πρόεδρος ορίζει μέλη του υπουργικού συμβουλίου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Από πού ο πρόεδρος ορίζει μέλη του υπουργικού συμβουλίου;`, correct_answer: "PNU και ODM", trial_name: "a_Kenya_1_qa_2"} 
};var a_Kenya_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πώς καθορίστηκε πόσοι από κάθε στρατόπεδο θα διοριστούν;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς καθορίστηκε πόσοι από κάθε στρατόπεδο θα διοριστούν;`, correct_answer: "δύναμη κάθε κόμματος στο Κοινοβούλιο", trial_name: "a_Kenya_1_qa_3"} 
};var a_Kenya_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσο καιρό θα είχε διάρκεια αυτός ο συνασπισμός;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσο καιρό θα είχε διάρκεια αυτός ο συνασπισμός;`, correct_answer: "μέχρι το τέλος του τρέχοντος κοινοβουλίου ή εάν οποιοδήποτε από τα μέρη αποσυρθεί από τη συμφωνία από πριν", trial_name: "a_Kenya_1_qa_4"} 
};var a_Kenya_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Με την <span id="a_Kenya_2_qa_0">διαδικασία του Διεθνούς Ποινικού Δικαστηρίου, η οποία διεξήχθη</span> το 2013, για τον Πρόεδρο Kenyatta και τον αντιπρόεδρο William Ruto σχετικά με τα επακόλουθα των εκλογών του 2007, <span id="a_Kenya_2_qa_1">ο Αμερικανός πρόεδρος Μπαράκ Ομπάμα</span> αρνήθηκε να επισκεφθεί τη χώρα κατά τη διάρκεια, του ταξιδιού του στην Αφρική το 2013. Αργότερα το καλοκαίρι, ο Kenyatta επισκέφθηκε την <span id="a_Kenya_2_qa_2">Κίνα</span> μετά από πρόσκληση του προέδρου Xi Jinping μετά από μια στάση στη Ρωσία και δεν επισκέφθηκε τις Ηνωμένες Πολιτείες ως πρόεδρος. Τον <span id="a_Kenya_2_qa_3">Ιούλιο 2015</span> ο Ομπάμα επισκέφθηκε την Κένυα, ως ο πρώτος Αμερικανός πρόεδρος που επισκέφθηκε τη χώρα ενώ βρισκόταν στο αξίωμα.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιο ήταν το αποτέλεσμα των εκλογών του 2007;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο ήταν το αποτέλεσμα των εκλογών του 2007;`, correct_answer: "διαδικασία του Διεθνούς Ποινικού Δικαστηρίου, η οποία διεξήχθη", trial_name: "a_Kenya_2_qa_0"} 
};var a_Kenya_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος αποφάσισε να μην επισκεφθεί τη χώρα το 2013;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος αποφάσισε να μην επισκεφθεί τη χώρα το 2013;`, correct_answer: "ο Αμερικανός πρόεδρος Μπαράκ Ομπάμα", trial_name: "a_Kenya_2_qa_1"} 
};var a_Kenya_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πού πήγε ο Kenyatta  μετά από πρόσκληση του Προέδρου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πού πήγε ο Kenyatta  μετά από πρόσκληση του Προέδρου;`, correct_answer: "Κίνα", trial_name: "a_Kenya_2_qa_2"} 
};var a_Kenya_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πότε ο Ομπάμα επισκέφθηκε τελικά την Κένυα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε ο Ομπάμα επισκέφθηκε τελικά την Κένυα;`, correct_answer: "Ιούλιο 2015", trial_name: "a_Kenya_2_qa_3"} 
};var a_IntergovernmentalPanelonClimateChange_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Ο <span id="a_IntergovernmentalPanelonClimateChange_0_qa_1">Κορεάτης</span> οικονομολόγος <span id="a_IntergovernmentalPanelonClimateChange_0_qa_0">Hoesung Lee</span> είναι ο πρόεδρος της IPCC από τις 8 Οκτωβρίου 2015, μετά την εκλογή του νέου Προεδρείου της IPCC. Πριν από αυτές τις εκλογές, η IPCC διοικείται από τον αντιπρόεδρο <span id="a_IntergovernmentalPanelonClimateChange_0_qa_2">Ismail El Gizouli</span>, ο οποίος διορίστηκε πρόεδρος μετά την παραίτηση της Rajendra K. Pachauri τον <span id="a_IntergovernmentalPanelonClimateChange_0_qa_4">Φεβρουάριο του 2015</span>. Οι προηγούμενες προεδρίες ήταν της Rajendra K. Pachauri, η οποία εξελέγη τον Μάιο του 2002, του Robert Watson το 1997, και του <span id="a_IntergovernmentalPanelonClimateChange_0_qa_3">Bert Bolin</span> το 1988. Την προεδρία επικουρεί ένα εκλεγμένο διοικητικό γραφείο, συμπεριλαμβανομένων των αντιπροέδρων, των συμπροέδρων των ομάδων εργασίας και μιας γραμματείας.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιος είναι ο πρόεδρος της IPCC;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος είναι ο πρόεδρος της IPCC;`, correct_answer: "Hoesung Lee", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_0"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιας εθνικότητα είναι ο Hoesung Lee;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιας εθνικότητα είναι ο Hoesung Lee;`, correct_answer: "Κορεάτης", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_1"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος είναι ο αντιπρόεδρος της IPCC;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος είναι ο αντιπρόεδρος της IPCC;`, correct_answer: "Ismail El Gizouli", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_2"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος ήταν ο πρώτος πρόεδρος της IPCC;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος ήταν ο πρώτος πρόεδρος της IPCC;`, correct_answer: "Bert Bolin", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_3"} 
};var a_IntergovernmentalPanelonClimateChange_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πότε παραιτήθηκε ο Pachauri από πρόεδρος της IPCC;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε παραιτήθηκε ο Pachauri από πρόεδρος της IPCC;`, correct_answer: "Φεβρουάριο του 2015", trial_name: "a_IntergovernmentalPanelonClimateChange_0_qa_4"} 
};var a_IntergovernmentalPanelonClimateChange_2 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Αυτή η προβολή δεν συμπεριλήφθηκε στην τελική περίληψη για τους υπεύθυνους χάραξης πολιτικής. Η IPCC έχει από τότε αναγνωρίσει ότι <span id="a_IntergovernmentalPanelonClimateChange_2_qa_0">η ημερομηνία</span> είναι εσφαλμένη, ενώ επιβεβαιώνει ότι το συμπέρασμα στην τελική σύνοψη ήταν ισχυρό. Εξέφρασαν τη λύπη τους για την <span id="a_IntergovernmentalPanelonClimateChange_2_qa_1">"κακή εφαρμογή των καθιερωμένων διαδικασιών της IPCC στην προκειμένη περίπτωση"</span>. Η ημερομηνία του 2035 έχει σωστά αναφερθεί από την IPCC από την <span id="a_IntergovernmentalPanelonClimateChange_2_qa_2">έκθεση της WWF</span>, η οποία έχει ανέφερε επακριβώς την πηγή της, μια έκθεση της ICSI <span id="a_IntergovernmentalPanelonClimateChange_2_qa_3">"Παραλλαγές του χιονιού και του πάγου στο παρελθόν και επί του παρόντος σε μια Παγκόσμια και Περιφερειακή Κλίμακα"</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Τι λέει η IPCC ότι ήταν λάθος;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι λέει η IPCC ότι ήταν λάθος;`, correct_answer: "η ημερομηνία", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_0"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Για ποιο πράγμα ζήτησε να απολογηθεί η IPCC;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Για ποιο πράγμα ζήτησε να απολογηθεί η IPCC;`, correct_answer: "κακή εφαρμογή των καθιερωμένων διαδικασιών της IPCC στην προκειμένη περίπτωση", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_1"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια ήταν η πηγή του λάθους;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια ήταν η πηγή του λάθους;`, correct_answer: "έκθεση της WWF", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_2"} 
};var a_IntergovernmentalPanelonClimateChange_2_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια έκθεση είχε την σωστή ημερομηνία;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια έκθεση είχε την σωστή ημερομηνία;`, correct_answer: "Παραλλαγές του χιονιού και του πάγου στο παρελθόν και επί του παρόντος σε μια Παγκόσμια και Περιφερειακή Κλίμακα", trial_name: "a_IntergovernmentalPanelonClimateChange_2_qa_3"} 
};var a_Chloroplast_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Αυτοί οι χλωροπλάστες, οι οποίοι μπορούν να ανιχνευθούν κατευθείαν σε έναν κυανοβακτηριακό πρόγονο, είναι γνωστοί ως πρωτογενείς πλαστίδες («πλαστίδιο» σε αυτό το πλαίσιο σημαίνει σχεδόν το ίδιο πράγμα με τον <span id="a_Chloroplast_1_qa_0">χλωροπλάστη</span>). Όλοι οι πρωτογενείς χλωροπλάστες ανήκουν σε μία από τις <span id="a_Chloroplast_1_qa_1">τρεις</span> γενεαλογικές σειρές χλωροπλάστη, τη γενεαλογική σειρά των χλωροπλάστων γλαυκωφωτών, τη ροδοφυτική ή τη <span id="a_Chloroplast_1_qa_2">γενεαλογική σειρά χλωροπλάστου κόκκινου φυλλώματος</span> ή τη χλωροπλαστιδάνη ή τη <span id="a_Chloroplast_1_qa_3">γενεαλογική σειρά πράσινου χλωροπλάστη</span>. Τα δεύτερα είναι τα μεγαλύτερα, και <span id="a_Chloroplast_1_qa_4">η γενεαλογική σειρά πράσινου χλωροπλάστη</span> είναι εκείνη που περιέχει τα φυτά γης.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Τι σημαίνει «πλαστίτιδα»;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι σημαίνει «πλαστίτιδα»;`, correct_answer: "χλωροπλάστη", trial_name: "a_Chloroplast_1_qa_0"} 
};var a_Chloroplast_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσες σειρές χλωροπλαστών υπάρχουν;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσες σειρές χλωροπλαστών υπάρχουν;`, correct_answer: "τρεις", trial_name: "a_Chloroplast_1_qa_1"} 
};var a_Chloroplast_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι σημαίνει ροδόφυτο;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι σημαίνει ροδόφυτο;`, correct_answer: "γενεαλογική σειρά χλωροπλάστου κόκκινου φυλλώματος", trial_name: "a_Chloroplast_1_qa_2"} 
};var a_Chloroplast_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι σημαίνει χλωροπλαστιδά;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι σημαίνει χλωροπλαστιδά;`, correct_answer: "γενεαλογική σειρά πράσινου χλωροπλάστη", trial_name: "a_Chloroplast_1_qa_3"} 
};var a_Chloroplast_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια γενεαλογική σειρά περιλαμβάνει τα φυτά γης;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια γενεαλογική σειρά περιλαμβάνει τα φυτά γης;`, correct_answer: "η γενεαλογική σειρά πράσινου χλωροπλάστη", trial_name: "a_Chloroplast_1_qa_4"} 
};var a_Chloroplast_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Υπάρχουν κάποιες κοινές παρανοήσεις σχετικά με τις εξωτερικές και τις εσωτερικές μεμβράνες χλωροπλαστών. Το γεγονός ότι οι χλωροπλάστες <span id="a_Chloroplast_4_qa_0">περιβάλλονται από μια διπλή μεμβράνη</span> συχνά αναφέρεται ως απόδειξη ότι είναι οι απόγονοι των ενδοσμπιμωτικών κυανοβακτηρίων. Αυτό συχνά ερμηνεύεται πως σημαίνει ότι η εξωτερική μεμβράνη χλωροπλαστών αποτελεί <span id="a_Chloroplast_4_qa_1">προϊόν της κυτταρικής μεμβράνης του ξενιστή που σχηματίζει ένα κυστίδιο το οποίο περιβάλλει το προγονικό κυανοβακτήριο</span> , κάτι που δεν είναι αληθές, αλλά και οι δύο μεμβράνες χλωροπλαστών είναι <span id="a_Chloroplast_4_qa_2">ομόλογες</span> στις αρχικές διπλές μεμβράνες του κυανοβακτηρίου.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποια είναι τα αποδεικτικά στοιχεία ότι οι χλωροπλάστες προέρχονται από ενδοσμπιμωτικά κυανοβακτήρια;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια είναι τα αποδεικτικά στοιχεία ότι οι χλωροπλάστες προέρχονται από ενδοσμπιμωτικά κυανοβακτήρια;`, correct_answer: "περιβάλλονται από μια διπλή μεμβράνη", trial_name: "a_Chloroplast_4_qa_0"} 
};var a_Chloroplast_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι πιστεύεται λανθασμένα για την εξωτερική μεμβράνη των χλωροπλαστών;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι πιστεύεται λανθασμένα για την εξωτερική μεμβράνη των χλωροπλαστών;`, correct_answer: "προϊόν της κυτταρικής μεμβράνης του ξενιστή που σχηματίζει ένα κυστίδιο το οποίο περιβάλλει το προγονικό κυανοβακτήριο", trial_name: "a_Chloroplast_4_qa_1"} 
};var a_Chloroplast_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πώς οι δύο μεμβράνες των χλωροπλαστών συγκρίνονται με τις αρχικές διπλές μεμβράνες του κυανοβακτηρίου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς οι δύο μεμβράνες των χλωροπλαστών συγκρίνονται με τις αρχικές διπλές μεμβράνες του κυανοβακτηρίου;`, correct_answer: "ομόλογες", trial_name: "a_Chloroplast_4_qa_2"} 
};var a_Rhine_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Μεταξύ της Μπίνγκεν και της Βόννης, ρέει ο <span id="a_Rhine_0_qa_0"><span id="a_Rhine_0_qa_4">Μέσος Ρήνος</span></span> κατά μήκος του <span id="a_Rhine_0_qa_1"><span id="a_Rhine_0_qa_5">Φαραγγιού του Ρήνου</span></span>, ενός σχηματισμού που δημιουργήθηκε από τη <span id="a_Rhine_0_qa_2">διάβρωση του εδάφους</span>. Το ποσοστό διάβρωσης ήταν ίσο με την ανύψωση στην περιοχή, έτσι ώστε ο ποταμός έμεινε περίπου στο αρχικό του επίπεδο, ενώ τα περιβάλλοντα εδάφη ανυψώθηκαν. Το φαράγγι είναι αρκετά βαθύ και τα τμήματα του ποταμού είναι γνωστά για τα πολλά <span id="a_Rhine_0_qa_6">κάστρα και τους αμπελώνες</span>. Η περιοχή αποτελεί Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO (2002) και είναι γνωστή ως "<span id="a_Rhine_0_qa_3"><span id="a_Rhine_0_qa_7">ο Ρομαντικός Ρήνος</span></span>", με περισσότερα από 40 κάστρα και οχυρά από τον Μεσαίωνα και πολλά γραφικά και αξιολάτρευτα χωριουδάκια.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Τι ρέει μεταξύ της Μπίνγκεν και της Βόννης;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι ρέει μεταξύ της Μπίνγκεν και της Βόννης;`, correct_answer: "Μέσος Ρήνος", trial_name: "a_Rhine_0_qa_0"} 
};var a_Rhine_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο φαράγγι βρίσκεται μεταξύ της Μπίνγκεν και της Βόννης;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο φαράγγι βρίσκεται μεταξύ της Μπίνγκεν και της Βόννης;`, correct_answer: "Φαραγγιού του Ρήνου", trial_name: "a_Rhine_0_qa_1"} 
};var a_Rhine_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πώς δημιουργήθηκε το Φαράγγι του Ρήνου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς δημιουργήθηκε το Φαράγγι του Ρήνου;`, correct_answer: "διάβρωση του εδάφους", trial_name: "a_Rhine_0_qa_2"} 
};var a_Rhine_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πώς ονομάζεται η περιοχή κοντά στο Φαράγγι του Ρήνου με κάστρα του Μεσαίωνα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς ονομάζεται η περιοχή κοντά στο Φαράγγι του Ρήνου με κάστρα του Μεσαίωνα;`, correct_answer: "ο Ρομαντικός Ρήνος", trial_name: "a_Rhine_0_qa_3"} 
};var a_Rhine_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι ρέει μεταξύ Μπίνγκεν και Βόννης;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι ρέει μεταξύ Μπίνγκεν και Βόννης;`, correct_answer: "Μέσος Ρήνος", trial_name: "a_Rhine_0_qa_4"} 
};var a_Rhine_0_qa_5 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πού ρέει ο Μέσος Ρήνος μεταξύ της Μπίνγκεν και της Βόννης;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πού ρέει ο Μέσος Ρήνος μεταξύ της Μπίνγκεν και της Βόννης;`, correct_answer: "Φαραγγιού του Ρήνου", trial_name: "a_Rhine_0_qa_5"} 
};var a_Rhine_0_qa_6 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Για τι είναι γνωστό το Φαράγγι του Ρήνου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Για τι είναι γνωστό το Φαράγγι του Ρήνου;`, correct_answer: "κάστρα και τους αμπελώνες", trial_name: "a_Rhine_0_qa_6"} 
};var a_Rhine_0_qa_7 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πώς ονομάζεται το τμήμα του Φαραγγιού του Ρήνου που έχει αναγνωριστεί από την UNESCO;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς ονομάζεται το τμήμα του Φαραγγιού του Ρήνου που έχει αναγνωριστεί από την UNESCO;`, correct_answer: "ο Ρομαντικός Ρήνος", trial_name: "a_Rhine_0_qa_7"} 
};var a_Rhine_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Το δέλτα του <span id="a_Rhine_1_qa_0">Ρήνου-Μεύση</span> η πιο σημαντική φυσική περιοχή της Ολλανδίας, ξεκινάει <span id="a_Rhine_1_qa_1">κοντά στο Millingen aan de Rijn</span>, κοντά στα σύνορα Ολλανδίας και Γερμανίας με τον διαχωρισμό του Ρήνου στους παραπόταμους Waal και Nederrijn. Επειδή ο Ρήνος έχει τη μεγαλύτερη ποσότητα νερού, ο πιο σύντομος όρος <span id="a_Rhine_1_qa_2">Δέλτα του Ρήνου</span> χρησιμοποιείται συχνά. Παρ' όλα αυτά, το όνομα αυτό χρησιμοποιείται και για το δέλτα του ποταμού όπου ο Ρήνος εκβάλλει στη Λίμνη της Κωνσταντίας, οπότε είναι πιο ακριβές να ονομάζουμε το μεγαλύτερο δέλτα Ρήνου-Μεύση, ή ακόμα και Ρήνου-Μεύση-Σκάλδη, καθώς ο Σκάλδης εκβάλλει στο ίδιο δέλτα.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Πώς ονομάζεται το δέλτα στην Ολλανδία; `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς ονομάζεται το δέλτα στην Ολλανδία; `, correct_answer: "Ρήνου-Μεύση", trial_name: "a_Rhine_1_qa_0"} 
};var a_Rhine_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Από πού ξεκινάει το δέλτα στην Ολλανδία;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Από πού ξεκινάει το δέλτα στην Ολλανδία;`, correct_answer: "κοντά στο Millingen aan de Rijn", trial_name: "a_Rhine_1_qa_1"} 
};var a_Rhine_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιο είναι το παρατσούκλι που χρησιμοποιείται για το δέλτα στην Ολλανδία;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο είναι το παρατσούκλι που χρησιμοποιείται για το δέλτα στην Ολλανδία;`, correct_answer: "Δέλτα του Ρήνου", trial_name: "a_Rhine_1_qa_2"} 
};var a_ScottishParliament_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Υπό τους όρους των Νόμων της Σκωτίας 1978, μια αιρετή συνέλευση θα ιδρυόταν στο <span id="a_ScottishParliament_0_qa_0">Εδιμβούργο</span> με δεδομένο ότι <span id="a_ScottishParliament_0_qa_1">η πλειοψηφία</span> του Σκωτικού εκλεκτορικού σώματος, δηλαδή τουλάχιστον το 40% του συνόλου του θα ψήφιζε σε ένα δημοψήφισμα που θα λάμβανε χώρα την 1η Μαρτίου 1979.  Το δημοψήφισμα στη Σκωτία το 1979 για την εγκαθίδρυση μιας αποκεντρωμένης Σκωτικής Συνέλευσης <span id="a_ScottishParliament_0_qa_3">απέτυχε</span>. Αν και οι ψήφοι ήταν <span id="a_ScottishParliament_0_qa_2">51,6%</span> υπέρ της Σκωτικής Συνέλευσης, ο αριθμός αυτός δεν ισοδυναμούσε με το 40% του συνολικού εκλεκτικού σώματος που ήταν απαραίτητος για να περάσει το μέτρο, καθώς το <span id="a_ScottishParliament_0_qa_4">32,9%</span> του εκλογικού πληθυσμού δεν ψήφισε ή δεν μπόρεσε να ψηφίσει.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Πού θα ιδρυόταν μια εκλεγμένη συνέλευση, με τους όρους των Νόμων της Σκωτίας του 1978;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πού θα ιδρυόταν μια εκλεγμένη συνέλευση, με τους όρους των Νόμων της Σκωτίας του 1978;`, correct_answer: "Εδιμβούργο", trial_name: "a_ScottishParliament_0_qa_0"} 
};var a_ScottishParliament_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι ποσοστό του εκλογικού σώματος της Σκωτίας χρειαζόταν στο δημοψήφισμα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι ποσοστό του εκλογικού σώματος της Σκωτίας χρειαζόταν στο δημοψήφισμα;`, correct_answer: "η πλειοψηφία", trial_name: "a_ScottishParliament_0_qa_1"} 
};var a_ScottishParliament_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι ποσοστό ψήφισε υπερ μιας Σκωτικής Συνέλευσης;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι ποσοστό ψήφισε υπερ μιας Σκωτικής Συνέλευσης;`, correct_answer: "51,6%", trial_name: "a_ScottishParliament_0_qa_2"} 
};var a_ScottishParliament_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πώς πήγε η προσπάθεια για την εγκαθίδρυση μιας αποκεντρωμένης Σκωτικής Συνέλευσης το 1979;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς πήγε η προσπάθεια για την εγκαθίδρυση μιας αποκεντρωμένης Σκωτικής Συνέλευσης το 1979;`, correct_answer: "απέτυχε", trial_name: "a_ScottishParliament_0_qa_3"} 
};var a_ScottishParliament_0_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι ποσοστό του εκλογικού σώματος της Σκωτίας δεν ψήφισε;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι ποσοστό του εκλογικού σώματος της Σκωτίας δεν ψήφισε;`, correct_answer: "32,9%", trial_name: "a_ScottishParliament_0_qa_4"} 
};var a_Islamism_1 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Τα <span id="a_Islamism_1_qa_0">ισλαμιστικά</span> κινήματα, όπως η Αδελφότητα του Ισλάμ, "είναι ευρέως γνωστό ότι παρέχουν <span id="a_Islamism_1_qa_2">καταφύγιο, εκπαιδευτική αρωγή, ιατρικές κλινικές δωρεάν ή με χαμηλό κόστος, βοήθεια στέγασης</span> σε φοιτητές από άλλες πόλεις, συμβουλευτικές ομάδες για φοιτητές, διευκόλυνση μαζικών φτηνών γαμήλιων τελετών για <span id="a_Islamism_1_qa_4">την αποφυγή απαγορευτικά μεγάλων απαιτήσεων κληρονομιάς</span>, νομική αρωγή, αθλητικές υποδομές και ομάδες γυναικών". Όλα αυτά έρχονται σε αντιπαράθεση με κυβερνήσεις <span id="a_Islamism_1_qa_1">ανίκανες, αναποτελεσματικές ή αδιάφορες</span> των οποίων η ρητορική για κοινωνική δικαιοσύνη περιορίζεται στη <span id="a_Islamism_1_qa_3">ρητορική</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Τι είδους κίνημα είναι η Ισλαμική Αδελφότητα;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι είδους κίνημα είναι η Ισλαμική Αδελφότητα;`, correct_answer: "ισλαμιστικά", trial_name: "a_Islamism_1_qa_0"} 
};var a_Islamism_1_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Η ικανότητα της Ισλαμικής Αδελφότητας μπορεί να συγκριθεί με τι είδους τοπικές κυβερνήσεις; `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Η ικανότητα της Ισλαμικής Αδελφότητας μπορεί να συγκριθεί με τι είδους τοπικές κυβερνήσεις; `, correct_answer: "ανίκανες, αναποτελεσματικές ή αδιάφορες", trial_name: "a_Islamism_1_qa_1"} 
};var a_Islamism_1_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Για τι είδους βοήθεια σε φοιτητές που προέρχονται από άλλες πόλεις είναι γνωστή η Ισλαμική Αδελφότητα; `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Για τι είδους βοήθεια σε φοιτητές που προέρχονται από άλλες πόλεις είναι γνωστή η Ισλαμική Αδελφότητα; `, correct_answer: "καταφύγιο, εκπαιδευτική αρωγή, ιατρικές κλινικές δωρεάν ή με χαμηλό κόστος, βοήθεια στέγασης", trial_name: "a_Islamism_1_qa_2"} 
};var a_Islamism_1_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Σε τι περιορίζεται η δέσμευση των ανίκανων κυβερνήσεων ως προς την κοινωνική δικαιοσύνη; `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Σε τι περιορίζεται η δέσμευση των ανίκανων κυβερνήσεων ως προς την κοινωνική δικαιοσύνη; `, correct_answer: "ρητορική", trial_name: "a_Islamism_1_qa_3"} 
};var a_Islamism_1_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Για ποιο λόγο η Ισλαμική Αδελφότητα διευκόλυνε τις μαζικές γαμήλιες τελετές;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Για ποιο λόγο η Ισλαμική Αδελφότητα διευκόλυνε τις μαζικές γαμήλιες τελετές;`, correct_answer: "την αποφυγή απαγορευτικά μεγάλων απαιτήσεων κληρονομιάς", trial_name: "a_Islamism_1_qa_4"} 
};var a_Islamism_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Για πολλά χρόνια το Σουδάν είχε ένα <span id="a_Islamism_3_qa_0">Ισλαμιστικό</span> καθεστώς υπό την ηγεσία του <span id="a_Islamism_3_qa_1">Hassan al-Turabi</span>. Το <span id="a_Islamism_3_qa_2">Εθνικό Ισλαμιστικό Μέτωπό</span> του πρωτοαπέκτησε επιρροή όταν ο δικτάτορας Στρατηγός Γκααφάρ Νιμίιρι κάλεσε μέλη να υπηρετήσουν στην κυβέρνησή του το 1979. Ο Turabi έχτισε μια ισχυρή οικονομική βάση με <span id="a_Islamism_3_qa_3">χρήματα από ξένα Ισλαμιστικά τραπεζικά συστήματα</span>, ειδικά με αυτά που συνδεόταν με τη Σαουδική Αραβία. Επίσης, στρατολόγησε και έχτισε ένα επιτελείο από ισχυρούς νομιμόφρονες τοποθετώντας φοιτητές φιλικούς προς το καθεστώς στο <span id="a_Islamism_3_qa_4">πανεπιστήμιο και στη στρατιωτική ακαδημία</span> ενώ διατελούσε υπουργός Παιδείας.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Τι είδους καθεστώς επικρατούσε στο Σουδάν για πολλά χρόνια;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι είδους καθεστώς επικρατούσε στο Σουδάν για πολλά χρόνια;`, correct_answer: "Ισλαμιστικό", trial_name: "a_Islamism_3_qa_0"} 
};var a_Islamism_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιος ήταν ο ηγέτης του Ισλαμιστικού καθεστώτος στο Σουδάν; `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιος ήταν ο ηγέτης του Ισλαμιστικού καθεστώτος στο Σουδάν; `, correct_answer: "Hassan al-Turabi", trial_name: "a_Islamism_3_qa_1"} 
};var a_Islamism_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποιον οργανισμό κάλεσε να υπηρετήσουν μέλη της κυβέρνησής του ο Στρατηγός Γκααφάρ Νιμίιρι; `, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιον οργανισμό κάλεσε να υπηρετήσουν μέλη της κυβέρνησής του ο Στρατηγός Γκααφάρ Νιμίιρι; `, correct_answer: "Εθνικό Ισλαμιστικό Μέτωπό", trial_name: "a_Islamism_3_qa_2"} 
};var a_Islamism_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Με ποιον τρόπο ο Turabi έχτισε μια δυνατή οικονομική βάση;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Με ποιον τρόπο ο Turabi έχτισε μια δυνατή οικονομική βάση;`, correct_answer: "χρήματα από ξένα Ισλαμιστικά τραπεζικά συστήματα", trial_name: "a_Islamism_3_qa_3"} 
};var a_Islamism_3_qa_4 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πού τοποθέτησε ο Turabi φοιτητές φιλικούς προς τις απόψεις του;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πού τοποθέτησε ο Turabi φοιτητές φιλικούς προς τις απόψεις του;`, correct_answer: "πανεπιστήμιο και στη στρατιωτική ακαδημία", trial_name: "a_Islamism_3_qa_4"} 
};var a_FrenchandIndianWar_0 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Στην Ευρώπη, το Βορειοαμερικανικό θέατρο του Επταετούς Πολέμου συνήθως δεν έχει ξεχωριστό όνομα. Η όλη διεθνής σύγκρουση είναι γνωστή ως ο Επταετής Πόλεμος. Τα «Επτά Χρόνια» αναφέρονται σε γεγονότα στην Ευρώπη, από την επίσημη κήρυξη πολέμου το <span id="a_FrenchandIndianWar_0_qa_0">1756 μέχρι την υπογραφή της συνθήκης ειρήνης το 1763</span>. Αυτές οι ημερομηνίες δεν αντιστοιχούν με τις μάχες στην ηπειρωτική Βόρεια Αμερική, όπου οι μάχες μεταξύ των δύο αποικιακών δυνάμεων ολοκληρώθηκαν σε μεγάλο βαθμό σε <span id="a_FrenchandIndianWar_0_qa_1">έξι χρόνια</span>, από τη μάχη του <span id="a_FrenchandIndianWar_0_qa_3">Τζάμονβιλ Γκλεν</span> το 1754 μέχρι την κατάληψη του Μόντρεαλ το <span id="a_FrenchandIndianWar_0_qa_2">1760</span>.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Ποιο χρονικό διάστημα καλύπτει ο Επταετής Πόλεμος;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποιο χρονικό διάστημα καλύπτει ο Επταετής Πόλεμος;`, correct_answer: "1756 μέχρι την υπογραφή της συνθήκης ειρήνης το 1763", trial_name: "a_FrenchandIndianWar_0_qa_0"} 
};var a_FrenchandIndianWar_0_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πόσον καιρό κράτησαν οι μάχες στον Επταετή Πόλεμο;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πόσον καιρό κράτησαν οι μάχες στον Επταετή Πόλεμο;`, correct_answer: "έξι χρόνια", trial_name: "a_FrenchandIndianWar_0_qa_1"} 
};var a_FrenchandIndianWar_0_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πότε καταλήφθηκε το Μόντρεαλ;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πότε καταλήφθηκε το Μόντρεαλ;`, correct_answer: "1760", trial_name: "a_FrenchandIndianWar_0_qa_2"} 
};var a_FrenchandIndianWar_0_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια ήταν η πρώτη μάχη το 1754;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια ήταν η πρώτη μάχη το 1754;`, correct_answer: "Τζάμονβιλ Γκλεν", trial_name: "a_FrenchandIndianWar_0_qa_3"} 
};var a_Force_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">Μέσω του συνδυασμού του ορισμού του <span id="a_Force_3_qa_0">ηλεκτρικού ρεύματος</span> ως χρονικού ρυθμού μεταβολής του ηλεκτρικού φορτίου, ένας κανόνας πολλαπλασιασμού διανυσμάτων που ονομάζεται <span id="a_Force_3_qa_2">Νόμος του Λόρεντζ</span>  περιγράφει τη δύναμη επί ενός φορτίου που κινείται σε ένα μαγνητικό πεδίο. Η σύνδεση μεταξύ ηλεκτρισμού και μαγνητισμού επιτρέπει την περιγραφή μιας <span id="a_Force_3_qa_1">ενοποιημένης ηλεκτρομαγνητικής δύναμης</span> η οποία ενεργεί επί ενός φορτίου. Αυτή η δύναμη μπορεί να διατυπωθεί ως το άθροισμα της <span id="a_Force_3_qa_3">ηλεκτροστατικής δύναμης</span> (λόγω του ηλεκτρικού πεδίου) και της μαγνητικής δύναμης (λόγω του μαγνητικού πεδίου). Σε πλήρη μορφή, αυτός είναι ο νόμος:</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Τι είναι ο χρονικός ρυθμός μεταβολής του ηλεκτρικού φορτίου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι είναι ο χρονικός ρυθμός μεταβολής του ηλεκτρικού φορτίου;`, correct_answer: "ηλεκτρικού ρεύματος", trial_name: "a_Force_3_qa_0"} 
};var a_Force_3_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Ποια μαγνητική και ηλεκτρική δύναμη ενεργεί επί ενός φορτίου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Ποια μαγνητική και ηλεκτρική δύναμη ενεργεί επί ενός φορτίου;`, correct_answer: "ενοποιημένης ηλεκτρομαγνητικής δύναμης", trial_name: "a_Force_3_qa_1"} 
};var a_Force_3_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πώς ονομάζεται ο νόμος που ορίζει ένα φορτίο που κινείται μέσα σ' ένα μαγνητικό πεδίο;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς ονομάζεται ο νόμος που ορίζει ένα φορτίο που κινείται μέσα σ' ένα μαγνητικό πεδίο;`, correct_answer: "Νόμος του Λόρεντζ", trial_name: "a_Force_3_qa_2"} 
};var a_Force_3_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Πώς διατυπώνεται το άθροισμα της ηλεκτροστατικής και της μαγνητικής δύναμης;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Πώς διατυπώνεται το άθροισμα της ηλεκτροστατικής και της μαγνητικής δύναμης;`, correct_answer: "ηλεκτροστατικής δύναμης", trial_name: "a_Force_3_qa_3"} 
};var a_Force_4 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment" id="paragraph">όπου είναι η σχετική περιοχή εγκάρσιας διατομής του όγκου για τον οποίο υπολογίζεται ο τανυστής τάσης. Αυτός ο <span id="a_Force_4_qa_3">φορμαλισμός</span> περιλαμβάνει <span id="a_Force_4_qa_1"><span id="a_Force_4_qa_2">όρους πίεσης</span></span> που σχετίζονται με δυνάμεις που δρουν κανονικά στην περιοχή της εγκάρσιας τομής (οι διαγώνιες μήτρας του τανυστή) καθώς και όρους διάτμησης που σχετίζονται με δυνάμεις που δρουν παράλληλα με την περιοχή διατομής (τα εκτός διαγωνίου στοιχεία). Ο <span id="a_Force_4_qa_0">τανυστής τάσης</span> αντιπροσωπεύει τις δυνάμεις που προκαλούν όλες τις τάσεις (παραμορφώσεις), συμπεριλαμβανομένων και των τάσεων εφελκυσμού και των συμπιέσεων.</p>`,
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
{prompt:`<p class="webgaze-experiment" id="question">Τι προκαλεί τάση στις δομές;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι προκαλεί τάση στις δομές;`, correct_answer: "τανυστής τάσης", trial_name: "a_Force_4_qa_0"} 
};var a_Force_4_qa_1 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι χρησιμοποιείται για τον υπολογισμό της επιφάνειας διατομής στον όγκο ενός αντικειμένου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι χρησιμοποιείται για τον υπολογισμό της επιφάνειας διατομής στον όγκο ενός αντικειμένου;`, correct_answer: "όρους πίεσης", trial_name: "a_Force_4_qa_1"} 
};var a_Force_4_qa_2 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι σχετίζονται με τις κανονικές δυνάμεις;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι σχετίζονται με τις κανονικές δυνάμεις;`, correct_answer: "όρους πίεσης", trial_name: "a_Force_4_qa_2"} 
};var a_Force_4_qa_3 = {
type: jsPsychSurveyText,
questions: [
{prompt:`<p class="webgaze-experiment" id="question">Τι περιλαμβάνει όρους πίεσης κατά τον υπολογισμό της επιφάνειας ενός όγκου;`, placeholder: 'Your answer...', required: true }
],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],data: { question_text: `Τι περιλαμβάνει όρους πίεσης κατά τον υπολογισμό της επιφάνειας ενός όγκου;`, correct_answer: "φορμαλισμός", trial_name: "a_Force_4_qa_3"} 
};var xquad_trials_array = [[a_SuperBowl50_1,[a_SuperBowl50_1_qa_0,a_SuperBowl50_1_qa_1,a_SuperBowl50_1_qa_2,a_SuperBowl50_1_qa_3,a_SuperBowl50_1_qa_4,a_SuperBowl50_1_qa_5,a_SuperBowl50_1_qa_6,a_SuperBowl50_1_qa_7,a_SuperBowl50_1_qa_8,a_SuperBowl50_1_qa_9,a_SuperBowl50_1_qa_10,a_SuperBowl50_1_qa_11,a_SuperBowl50_1_qa_12,a_SuperBowl50_1_qa_13,a_SuperBowl50_1_qa_14,a_SuperBowl50_1_qa_15]],[a_SuperBowl50_2,[a_SuperBowl50_2_qa_0,a_SuperBowl50_2_qa_1,a_SuperBowl50_2_qa_2,a_SuperBowl50_2_qa_3,a_SuperBowl50_2_qa_4,a_SuperBowl50_2_qa_5,a_SuperBowl50_2_qa_6,a_SuperBowl50_2_qa_7,a_SuperBowl50_2_qa_8,a_SuperBowl50_2_qa_9,a_SuperBowl50_2_qa_10,a_SuperBowl50_2_qa_11,a_SuperBowl50_2_qa_12,a_SuperBowl50_2_qa_13,a_SuperBowl50_2_qa_14,a_SuperBowl50_2_qa_15,a_SuperBowl50_2_qa_16]],[a_SuperBowl50_3,[a_SuperBowl50_3_qa_0,a_SuperBowl50_3_qa_1,a_SuperBowl50_3_qa_2,a_SuperBowl50_3_qa_3,a_SuperBowl50_3_qa_4,a_SuperBowl50_3_qa_5,a_SuperBowl50_3_qa_6,a_SuperBowl50_3_qa_7,a_SuperBowl50_3_qa_8,a_SuperBowl50_3_qa_9,a_SuperBowl50_3_qa_10,a_SuperBowl50_3_qa_11]],[a_Warsaw_0,[a_Warsaw_0_qa_0,a_Warsaw_0_qa_1,a_Warsaw_0_qa_2,a_Warsaw_0_qa_3,a_Warsaw_0_qa_4]],[a_Warsaw_1,[a_Warsaw_1_qa_0,a_Warsaw_1_qa_1,a_Warsaw_1_qa_2,a_Warsaw_1_qa_3,a_Warsaw_1_qa_4]],[a_Normans_4,[a_Normans_4_qa_0]],[a_NikolaTesla_1,[a_NikolaTesla_1_qa_0,a_NikolaTesla_1_qa_1,a_NikolaTesla_1_qa_2,a_NikolaTesla_1_qa_3,a_NikolaTesla_1_qa_4,a_NikolaTesla_1_qa_5,a_NikolaTesla_1_qa_6,a_NikolaTesla_1_qa_7,a_NikolaTesla_1_qa_8,a_NikolaTesla_1_qa_9]],[a_NikolaTesla_3,[a_NikolaTesla_3_qa_0,a_NikolaTesla_3_qa_1,a_NikolaTesla_3_qa_2]],[a_NikolaTesla_4,[a_NikolaTesla_4_qa_0,a_NikolaTesla_4_qa_1,a_NikolaTesla_4_qa_2]],[a_Computationalcomplexitytheory_0,[a_Computationalcomplexitytheory_0_qa_0,a_Computationalcomplexitytheory_0_qa_1,a_Computationalcomplexitytheory_0_qa_2]],[a_Computationalcomplexitytheory_1,[a_Computationalcomplexitytheory_1_qa_0,a_Computationalcomplexitytheory_1_qa_1,a_Computationalcomplexitytheory_1_qa_2,a_Computationalcomplexitytheory_1_qa_3,a_Computationalcomplexitytheory_1_qa_4]],[a_Computationalcomplexitytheory_2,[a_Computationalcomplexitytheory_2_qa_0,a_Computationalcomplexitytheory_2_qa_1]],[a_Computationalcomplexitytheory_4,[a_Computationalcomplexitytheory_4_qa_0,a_Computationalcomplexitytheory_4_qa_1,a_Computationalcomplexitytheory_4_qa_2,a_Computationalcomplexitytheory_4_qa_3]],[a_Teacher_0,[a_Teacher_0_qa_0,a_Teacher_0_qa_1,a_Teacher_0_qa_2,a_Teacher_0_qa_3,a_Teacher_0_qa_4]],[a_Teacher_1,[a_Teacher_1_qa_0,a_Teacher_1_qa_1,a_Teacher_1_qa_2,a_Teacher_1_qa_3,a_Teacher_1_qa_4]],[a_Teacher_3,[a_Teacher_3_qa_0,a_Teacher_3_qa_1,a_Teacher_3_qa_2,a_Teacher_3_qa_3]],[a_Teacher_4,[a_Teacher_4_qa_0,a_Teacher_4_qa_1,a_Teacher_4_qa_2,a_Teacher_4_qa_3,a_Teacher_4_qa_4]],[a_MartinLuther_0,[a_MartinLuther_0_qa_0,a_MartinLuther_0_qa_1,a_MartinLuther_0_qa_2,a_MartinLuther_0_qa_3,a_MartinLuther_0_qa_4]],[a_MartinLuther_2,[a_MartinLuther_2_qa_0,a_MartinLuther_2_qa_1,a_MartinLuther_2_qa_2,a_MartinLuther_2_qa_3,a_MartinLuther_2_qa_4]],[a_MartinLuther_3,[a_MartinLuther_3_qa_0,a_MartinLuther_3_qa_1,a_MartinLuther_3_qa_2,a_MartinLuther_3_qa_3,a_MartinLuther_3_qa_4]],[a_MartinLuther_4,[a_MartinLuther_4_qa_0,a_MartinLuther_4_qa_1,a_MartinLuther_4_qa_2]],[a_SouthernCalifornia_3,[a_SouthernCalifornia_3_qa_0,a_SouthernCalifornia_3_qa_1,a_SouthernCalifornia_3_qa_2,a_SouthernCalifornia_3_qa_3,a_SouthernCalifornia_3_qa_4]],[a_SouthernCalifornia_4,[a_SouthernCalifornia_4_qa_0,a_SouthernCalifornia_4_qa_1,a_SouthernCalifornia_4_qa_2,a_SouthernCalifornia_4_qa_3,a_SouthernCalifornia_4_qa_4]],[a_VictoriaAustralia_1,[a_VictoriaAustralia_1_qa_0,a_VictoriaAustralia_1_qa_1,a_VictoriaAustralia_1_qa_2,a_VictoriaAustralia_1_qa_3,a_VictoriaAustralia_1_qa_4]],[a_VictoriaAustralia_2,[a_VictoriaAustralia_2_qa_0,a_VictoriaAustralia_2_qa_1,a_VictoriaAustralia_2_qa_2,a_VictoriaAustralia_2_qa_3,a_VictoriaAustralia_2_qa_4]],[a_VictoriaAustralia_3,[a_VictoriaAustralia_3_qa_0,a_VictoriaAustralia_3_qa_1,a_VictoriaAustralia_3_qa_2,a_VictoriaAustralia_3_qa_3,a_VictoriaAustralia_3_qa_4]],[a_Huguenot_0,[a_Huguenot_0_qa_0,a_Huguenot_0_qa_1,a_Huguenot_0_qa_2,a_Huguenot_0_qa_3]],[a_Steamengine_0,[a_Steamengine_0_qa_0,a_Steamengine_0_qa_1,a_Steamengine_0_qa_2,a_Steamengine_0_qa_3]],[a_Steamengine_3,[a_Steamengine_3_qa_0,a_Steamengine_3_qa_1,a_Steamengine_3_qa_2,a_Steamengine_3_qa_3,a_Steamengine_3_qa_4]],[a_1973oilcrisis_1,[a_1973oilcrisis_1_qa_0,a_1973oilcrisis_1_qa_1,a_1973oilcrisis_1_qa_2,a_1973oilcrisis_1_qa_3,a_1973oilcrisis_1_qa_4]],[a_1973oilcrisis_2,[a_1973oilcrisis_2_qa_0,a_1973oilcrisis_2_qa_1,a_1973oilcrisis_2_qa_2,a_1973oilcrisis_2_qa_3]],[a_1973oilcrisis_3,[a_1973oilcrisis_3_qa_0,a_1973oilcrisis_3_qa_1,a_1973oilcrisis_3_qa_2]],[a_Apolloprogram_4,[a_Apolloprogram_4_qa_0,a_Apolloprogram_4_qa_1,a_Apolloprogram_4_qa_2,a_Apolloprogram_4_qa_3,a_Apolloprogram_4_qa_4]],[a_Amazonrainforest_3,[a_Amazonrainforest_3_qa_0,a_Amazonrainforest_3_qa_1,a_Amazonrainforest_3_qa_2,a_Amazonrainforest_3_qa_3,a_Amazonrainforest_3_qa_4]],[a_Amazonrainforest_4,[a_Amazonrainforest_4_qa_0,a_Amazonrainforest_4_qa_1,a_Amazonrainforest_4_qa_2,a_Amazonrainforest_4_qa_3,a_Amazonrainforest_4_qa_4]],[a_Ctenophora_2,[a_Ctenophora_2_qa_0,a_Ctenophora_2_qa_1,a_Ctenophora_2_qa_2,a_Ctenophora_2_qa_3]],[a_FresnoCalifornia_0,[a_FresnoCalifornia_0_qa_0,a_FresnoCalifornia_0_qa_1,a_FresnoCalifornia_0_qa_2,a_FresnoCalifornia_0_qa_3,a_FresnoCalifornia_0_qa_4]],[a_FresnoCalifornia_3,[a_FresnoCalifornia_3_qa_0,a_FresnoCalifornia_3_qa_1,a_FresnoCalifornia_3_qa_2,a_FresnoCalifornia_3_qa_3]],[a_Geology_4,[a_Geology_4_qa_0,a_Geology_4_qa_1,a_Geology_4_qa_2,a_Geology_4_qa_3]],[a_Pharmacy_2,[a_Pharmacy_2_qa_0,a_Pharmacy_2_qa_1,a_Pharmacy_2_qa_2,a_Pharmacy_2_qa_3,a_Pharmacy_2_qa_4]],[a_Construction_0,[a_Construction_0_qa_0,a_Construction_0_qa_1,a_Construction_0_qa_2,a_Construction_0_qa_3,a_Construction_0_qa_4]],[a_Privateschool_0,[a_Privateschool_0_qa_0,a_Privateschool_0_qa_1,a_Privateschool_0_qa_2,a_Privateschool_0_qa_3]],[a_Privateschool_2,[a_Privateschool_2_qa_0,a_Privateschool_2_qa_1,a_Privateschool_2_qa_2,a_Privateschool_2_qa_3,a_Privateschool_2_qa_4]],[a_HarvardUniversity_3,[a_HarvardUniversity_3_qa_0,a_HarvardUniversity_3_qa_1,a_HarvardUniversity_3_qa_2,a_HarvardUniversity_3_qa_3]],[a_Yuandynasty_4,[a_Yuandynasty_4_qa_0,a_Yuandynasty_4_qa_1,a_Yuandynasty_4_qa_2,a_Yuandynasty_4_qa_3]],[a_Kenya_0,[a_Kenya_0_qa_0,a_Kenya_0_qa_1,a_Kenya_0_qa_2,a_Kenya_0_qa_3]],[a_Kenya_1,[a_Kenya_1_qa_0,a_Kenya_1_qa_1,a_Kenya_1_qa_2,a_Kenya_1_qa_3,a_Kenya_1_qa_4]],[a_Kenya_2,[a_Kenya_2_qa_0,a_Kenya_2_qa_1,a_Kenya_2_qa_2,a_Kenya_2_qa_3]],[a_IntergovernmentalPanelonClimateChange_0,[a_IntergovernmentalPanelonClimateChange_0_qa_0,a_IntergovernmentalPanelonClimateChange_0_qa_1,a_IntergovernmentalPanelonClimateChange_0_qa_2,a_IntergovernmentalPanelonClimateChange_0_qa_3,a_IntergovernmentalPanelonClimateChange_0_qa_4]],[a_IntergovernmentalPanelonClimateChange_2,[a_IntergovernmentalPanelonClimateChange_2_qa_0,a_IntergovernmentalPanelonClimateChange_2_qa_1,a_IntergovernmentalPanelonClimateChange_2_qa_2,a_IntergovernmentalPanelonClimateChange_2_qa_3]],[a_Chloroplast_1,[a_Chloroplast_1_qa_0,a_Chloroplast_1_qa_1,a_Chloroplast_1_qa_2,a_Chloroplast_1_qa_3,a_Chloroplast_1_qa_4]],[a_Chloroplast_4,[a_Chloroplast_4_qa_0,a_Chloroplast_4_qa_1,a_Chloroplast_4_qa_2]],[a_Rhine_0,[a_Rhine_0_qa_0,a_Rhine_0_qa_1,a_Rhine_0_qa_2,a_Rhine_0_qa_3,a_Rhine_0_qa_4,a_Rhine_0_qa_5,a_Rhine_0_qa_6,a_Rhine_0_qa_7]],[a_Rhine_1,[a_Rhine_1_qa_0,a_Rhine_1_qa_1,a_Rhine_1_qa_2]],[a_ScottishParliament_0,[a_ScottishParliament_0_qa_0,a_ScottishParliament_0_qa_1,a_ScottishParliament_0_qa_2,a_ScottishParliament_0_qa_3,a_ScottishParliament_0_qa_4]],[a_Islamism_1,[a_Islamism_1_qa_0,a_Islamism_1_qa_1,a_Islamism_1_qa_2,a_Islamism_1_qa_3,a_Islamism_1_qa_4]],[a_Islamism_3,[a_Islamism_3_qa_0,a_Islamism_3_qa_1,a_Islamism_3_qa_2,a_Islamism_3_qa_3,a_Islamism_3_qa_4]],[a_FrenchandIndianWar_0,[a_FrenchandIndianWar_0_qa_0,a_FrenchandIndianWar_0_qa_1,a_FrenchandIndianWar_0_qa_2,a_FrenchandIndianWar_0_qa_3]],[a_Force_3,[a_Force_3_qa_0,a_Force_3_qa_1,a_Force_3_qa_2,a_Force_3_qa_3]],[a_Force_4,[a_Force_4_qa_0,a_Force_4_qa_1,a_Force_4_qa_2,a_Force_4_qa_3]]];
