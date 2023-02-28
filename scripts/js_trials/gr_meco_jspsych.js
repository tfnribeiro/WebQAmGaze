var meco_para_3 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment-compact" id="paragraph">Στον αθλητισμό, το ντόπινγκ ορίζεται ως η χρήση <span id="meco_para_3_qa_1">απαγορευμένων ουσιών που ενισχύουν την απόδοση των αθλητών.</span> Ο όρος ντόπινγκ χρησιμοποιείται ευρέως από διεθνείς αθλητικούς οργανισμούς. Η χρήση ουσιών για ενίσχυση της απόδοσης θεωρείται ανέντιμη πρακτική και συνεπώς απαγορεύεται από τους περισσότερους διεθνείς οργανισμούς, μεταξύ των οποίων και τη Διεθνή Ολυμπιακή Επιτροπή. Επιπλέον, οι αθλητές που προσπαθούν να αποφύγουν την ανίχνευση τέτοιων ουσιών υπερβαίνουν τα όρια της ηθικής και φτάνουν στα όρια της εξαπάτησης. Το ντόπινγκ δεν είναι ένα νέο φαινόμενο - στην πραγματικότητα είναι τόσο παλιό όσο και ο ίδιος ο αθλητισμός. Από τη χρήση ουσιών <span id="meco_para_3_qa_3">στους αρχαίους αγώνες άμαξας</span> μέχρι τα πρόσφατα περιστατικά <span id="meco_para_3_qa_2">σε μπέιζμπολ και ποδηλασία</span>, οι απόψεις των αθλητών για το ντόπινγκ ποικίλουν διαχρονικά. Τις τελευταίες δεκαετίες, οι αρμόδιες αθλητικές αρχές και οργανώσεις προσπαθούν να ρυθμίσουν αυστηρά τη χρήση ουσιών στον αθλητισμό. Οι βασικοί λόγοι για την απαγόρευση των ουσιών<span id="meco_para_3_qa_0"> είναι οι κίνδυνοι για την υγεία των αθλητών </span>, οι ίσες ευκαιρίες και το θετικό παράδειγμα του αθλητισμού χωρίς ουσίες. Οι αρχές αντι-ντόπινγκ έχουν επανειλημμένα τονίσει ότι η χρήση ουσιών είναι ενάντια στο «πνεύμα του αθλητισμού».</p>`,
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
stimulus: `<p class="webgaze-experiment" id="question">Μπορεί η χρήση ουσιών να έχει δυσμενή για την υγεία αποτελέσματα; `,
data: {
 correct_answer: "True", trial_name: "meco_para_3_qa_0"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_3_qa_1 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Οι αθλητές χρησιμοποιούν τέτοιες ουσίες για να χαλαρώνουν πριν από τον αγώνα `,
data: {
 correct_answer: "False", trial_name: "meco_para_3_qa_1"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_3_qa_2 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Το ντόπινγκ αφορά μόνο συγκεκριμένους τομείς του αθλητισμού `,
data: {
 correct_answer: "False", trial_name: "meco_para_3_qa_2"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_3_qa_3 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Η πρώτη φορά που καταγράφηκε χρήση τέτοιων ουσιών ήταν σε αρχαίους αγώνες πάλης `,
data: {
 correct_answer: "False", trial_name: "meco_para_3_qa_3"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_11 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment-compact" id="paragraph">Η Διεθνής Ένωση Προστασίας της Φύσης εργάζεται για την προστασία της φύσης και της ορθής χρήσης των φυσικών πόρων. Δραστηριοποιείται στους τομείς της συλλογής και ανάλυσης δεδομένων, της έρευνας, των κατά τόπους έργων, της νομικής προστασίας και της εκπαίδευσης. Αποστολή της είναι να «επηρεάσει, να ενθαρρύνει και να βοηθήσει τις κοινωνίες σε όλο τον <span id="meco_para_11_qa_2">κόσμο να προστατεύσουν τη φύση και να διασφαλίσουν ότι η χρήση των φυσικών πόρων είναι δίκαιη και οικολογικά βιώσιμη».</span> Τις τελευταίες δεκαετίες, η οργάνωση έχει διευρύνει τους τομείς δράσης της ενσωματώνοντας στα προγράμματά της, πέρα από θέματα προστασίας της φύσης, θέματα αειφόρου ανάπτυξης. <span id="meco_para_11_qa_0">Σε αντίθεση με πολλές άλλες διεθνείς περιβαλλοντικές οργανώσεις,</span> δεν αποσκοπεί στην κινητοποίηση του κοινού. Αντιθέτως, προσπαθεί να επηρεάσει τις δράσεις κυβερνήσεων, επιχειρήσεων και άλλων εμπλεκομένων με την παροχή πληροφοριών, συμβουλών και την ανάπτυξη συνεργασιών. Η οργάνωση  είναι γνωστή στο ευρύτερο κοινό για τη <span id="meco_para_11_qa_3">σύνταξη και δημοσίευση της «Κόκκινης Λίστας Απειλούμενων Ειδών»,</span> η οποία αποτελεί ευρετήριο για την κατάσταση απειλούμενων ειδών φυτών και ζώων σε όλο τον κόσμο. Σήμερα, στην <span id="meco_para_11_qa_1">οργάνωση απασχολούνται με καθεστώς πλήρους απασχόλησης</span> περίπου χίλια άτομα σε περισσότερες από πενήντα χώρες.</p>`,
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
stimulus: `<p class="webgaze-experiment" id="question">Η Διεθνής Ένωση Διατήρησης της Φύσης διαφέρει από την Green Peace `,
data: {
 correct_answer: "True", trial_name: "meco_para_11_qa_0"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_11_qa_1 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Η οργάνωση διοικείται κυρίως από εθελοντές `,
data: {
 correct_answer: "False", trial_name: "meco_para_11_qa_1"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_11_qa_2 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Ο κύριος στόχος είναι η ευαισθητοποίηση του κοινού για την προστασία της φύσης `,
data: {
 correct_answer: "False", trial_name: "meco_para_11_qa_2"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_11_qa_3 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Η οργάνωση δημοσιεύει την κόκκινη λίστα απειλούμενων ειδών `,
data: {
 correct_answer: "True", trial_name: "meco_para_11_qa_3"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment-compact" id="paragraph">Οι πινακίδες κυκλοφορίας είναι μεταλλικές ή πλαστικές και τοποθετούνται στα αυτοκίνητα για σκοπούς αναγνώρισης από τις αρχές.Σε όλες τις χώρες απαιτούνται πινακίδες κυκλοφορίας για οχήματα, όπως αυτοκίνητα, φορτηγά και μοτοσικλέτες. Κατά πόσο είναι υποχρεωτικές και σε άλλα μεταφορικά <span id="meco_para_12_qa_2">μέσα, όπως ποδήλατα, σκάφη ή τρακτέρ</span>, εξαρτάται από τη νομοθεσία του κάθε κράτους. Για σκοπούς αναγνώρισης, στις πινακίδες κυκλοφορίας αναγράφεται ένας <span id="meco_para_12_qa_3">συνδυασμός γραμμάτων και αριθμών,</span> ο οποίος είναι μοναδικός και καταχωρείται στο μητρώο οχημάτων της χώρας έκδοσης. Σε ορισμένες χώρες, ο συνδυασμός αυτός είναι μοναδικός σε ολόκληρη την επικράτεια της χώρας, ενώ σε άλλες χώρες είναι μοναδικός εντός μίας πολιτείας ή περιφέρειας. Η <span id="meco_para_12_qa_0">Γαλλία ήταν η πρώτη χώρα που εισήγαγε τις πινακίδες κυκλοφορίας</span>, στα τέλη του δεκάτου ενάτου αιώνα. Στις αρχές του εικοστού αιώνα, οι πινακίδες κυκλοφορίας είχαν διαφορετικό μέγεθος και σχήμα ανά χώρα, με αποτέλεσμα, σε περίπτωση μετακόμισης, να απαιτούνται νέες τρύπες στο αυτοκίνητο για στήριξη της νέας πινακίδας. Οι πινακίδες <span id="meco_para_12_qa_1">τυποποιήθηκαν στα τέλη της δεκαετίας του πενήντα</span>, όταν οι κατασκευαστές αυτοκινήτων κατέληξαν σε συμφωνία με κυβερνήσεις και διεθνείς οργανισμούς.</p>`,
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
stimulus: `<p class="webgaze-experiment" id="question">Η Γαλλία ήταν η πρώτη χώρα που χρησιμοποίησε τις πινακίδες κυκλοφορίας `,
data: {
 correct_answer: "True", trial_name: "meco_para_12_qa_0"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_1 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Το μέγεθος των πινακίδων τυποποιήθηκε πριν τον Α’ παγκόσμιο πόλεμο `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_1"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_2 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Το μητρώο καταγραφής μεταφορικών μέσων σε όλες τις χώρες περιλαμβάνει τόσο αυτοκίνητα όσο και βάρκες `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_2"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_3 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Στις πινακίδες κυκλοφορίας αναγράφονται γράμματα, αριθμοί και σύμβολα `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_3"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};

var meco_trials_array = [[meco_para_3,[meco_para_3_qa_0,meco_para_3_qa_1,meco_para_3_qa_2,meco_para_3_qa_3]],[meco_para_11,[meco_para_11_qa_0,meco_para_11_qa_1,meco_para_11_qa_2,meco_para_11_qa_3]],[meco_para_12,[meco_para_12_qa_0,meco_para_12_qa_1,meco_para_12_qa_2,meco_para_12_qa_3]]];
