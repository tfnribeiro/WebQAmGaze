var meco_para_7 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment-compact" id="paragraph">Şarap tadımı, şarabın duyumsal olarak incelenmesi ve değerlendirilmesidir. Şarap tadım pratiği şarap üretimi kadar antikken, daha biçimsel bir metodoloji orta çağların sonlarından günümüze yavaşça oluşmaktadır. Modern, profesyonel şarap tadımcıları şarabın algılanan lezzet çeşitlerini, aromasını ve genel karakteristiğini tarif etmek <span id="meco_para_7_qa_1">için kullanılan sürekli olarak gelişen özelleşmiş terminolojiyi kullanırlar.</span> Son yıllarda hem <span id="meco_para_7_qa_0">uzmanlarda hem de tüketicilerde şarap tadımı güvenilirliğini zorlayan</span> sonuçlar ortaya çıktı. Örneğin, araştırmalar insanların daha pahalı şarabın daha ucuz şaraba göre daha fazla arzulanan karakteristiğe sahip olmasını beklediklerini göstermiştir: Tadımcılar verilen şarabın gerçek olmayan bir şekilde pahalı olduğu söylendiğinde, neredeyse her zaman aynı şarap onlara ucuz olduğu söylendiğinden daha lezzetli olduğunu belirttiler. Başka çalışmalar gösteriyor ki tadımcıların kararları coğrafi köken, itibar veya diğer etkenlerin bilinmesiyle etki altında kalabiliyor. <span id="meco_para_7_qa_2">Objektif şarap tadımı bu yüzen şarabın kör tadımını gerektirir</span>- bu tadımcının şarabın etiketini veya şişenin şeklini görmemesidir. Kör tadım ayrıca şarabın <span id="meco_para_7_qa_3">siyah şarap bardağında şarabın rengini maskeleyecek şekilde servis edilmesini de içerir</span>.</p>`,
choices: 'ALL_KEYS',
extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#paragraph','#meco_para_7_qa_0','#meco_para_7_qa_1','#meco_para_7_qa_2','#meco_para_7_qa_3'] } }
 ],on_load: function(){ if(__dev__){
const screenshotTarget = document.body;
html2canvas(screenshotTarget).then((canvas) => {
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
var a = document.createElement('a');
a.href = image;a.download = 'meco_para_7_1280_720.png';
a.click();});}},data: { trial_name: "meco_para_7"}
};
var meco_para_7_qa_0 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Şarap tadımcıları, şarap kalitesi kararlarında güvenilir midir? `,
data: {
 correct_answer: "False", trial_name: "meco_para_7_qa_0"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_7_qa_1 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Tecrübeli şarap tadımcıları meslekten olmayan kişilerden daha az önyargılı mı? `,
data: {
 correct_answer: "False", trial_name: "meco_para_7_qa_1"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_7_qa_2 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Kör şarap tadımı, şarap tadımının daha az öznel olmasını sağlıyor mu? `,
data: {
 correct_answer: "True", trial_name: "meco_para_7_qa_2"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_7_qa_3 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Şarap, rengini maskelemek için siyah bir bardakta mı servis edilir? `,
data: {
 correct_answer: "True", trial_name: "meco_para_7_qa_3"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_11 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment-compact" id="paragraph">Dünya Doğa ve Doğal Kaynakları Koruma Birliği doğanın korunması ve doğal kaynakların sürdürülebilir kullanımı alanında çalışan <span id="meco_para_11_qa_0">uluslararası bir kuruluştur.</span> Veri toplama ve analiz, araştırma, saha projeleri, savunma ve eğitim alanlarında faaliyet göstermektedir. <span id="meco_para_11_qa_2">Misyonu dünyadaki toplumları doğayı korumak için etkilemek, teşvik etmek ve yardımcı olmak ve doğal kaynak kullanımının adil ve ekolojik olarak sürdürülebilir</span> olmasını sağlamak tır. Geçtiğimiz on yıllar boyunca, organizasyon koruma ekolojisinin ötesinde odağını genişletti ve şimdi projelerinde sürdürülebilir kalkınma ile ilgili konuları içeriyor. Pek çok uluslararası çevre kuruluşlarının aksine, bu organizasyon halkı doğanın korunmasına destek olarak seferber etmeyi amaçlamamaktadır. Bunun yerine, organizasyon bilgi, tavsiye sağlayarak ve ortaklıklar kurarak hükümetlerin, iş dünyasının ve diğer paydaşların faaliyetlerini etkilemeye çalışır. Organizasyon geniş kitlelerce dünyadaki türlerin korunma durumunu <span id="meco_para_11_qa_3"> değerlendiren “Tehdit Edilen Türlerin Kırmızı Listesi”ni  derlediği ve yayınladığı için bilinir</span>. Bugün, <span id="meco_para_11_qa_1">organizasyon elliden fazla ülkede yaklaşık bin tam zamanlı personel</span> istihdam etmektedir.</p>`,
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
stimulus: `<p class="webgaze-experiment" id="question">Uluslararası Doğa Koruma Birliği, Green Peace isimli örgütten farklı mıdır `,
data: {
 correct_answer: "True", trial_name: "meco_para_11_qa_0"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_11_qa_1 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Bu organizasyon çoğunlukla gönüllüler tarafından mı yönetilmektedir? `,
data: {
 correct_answer: "False", trial_name: "meco_para_11_qa_1"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_11_qa_2 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Organizasyonun asıl amacı, doğanın korunmasına ilişkin halkın bilinçlendirilmesini sağlamak mıdır?  `,
data: {
 correct_answer: "False", trial_name: "meco_para_11_qa_2"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_11_qa_3 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Bu kuruluş Tehdit Edilen Türlerin Kırmızı Listesi yayınlar mı? `,
data: {
 correct_answer: "True", trial_name: "meco_para_11_qa_3"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12 = {
type: jsPsychHtmlKeyboardResponse,
stimulus:`
<p class="webgaze-experiment-compact" id="paragraph">Taşıt kayıt plakası, resmi tanımlama amacıyla bir araca tutturulmuş metal veya plastik bir plakadır. Tüm ülkeler, araba, kamyon ve motosiklet gibi karayolu taşıtları için plakalara ihtiyaç duymaktadır. Plakaların bisiklet, <span id="meco_para_12_qa_2">tekne veya traktör gibi diğer araçlar için gerekli olup olmadığı yasalarca değişiklik gösterebilir</span> . Kayıt tanımlayıcı, veren bölgenin araç kaydındaki verilen bölge içerisinde araç sahibini benzersiz şekilde tanımlayan bir <span id="meco_para_12_qa_3">dizi harf ve rakamdır</span>. Bazı ülkelerde, bu kimlik tüm ülke içerisinde tekilken bazılarında bölge ve il dahilinde tekildir. <span id="meco_para_12_qa_0">Fransa, on dokuzuncu yüzyılın sonlarında kayıt plakasını tanıtan ilk ülkeydi</span>. Yirminci yüzyılın başlarında plakaların boyutları ve şekilleri bir yetki alanından diğerine değişiyordu, öyle ki eğer bir kişi taşınırsa, yeni levhayı desteklemek için otomobile yeni delikler açılması gerekiyordu. <span id="meco_para_12_qa_1">Plakaların standardizasyonu ellilerin sonlarında otomobil üreticileri, hükümetlerle ve uluslararası kuruluşlarla anlaşmaya</span>, varınca gerçekleşti.</p>`,
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
stimulus: `<p class="webgaze-experiment" id="question">İlk kayıt plakası Fransa'da mı tanıtıldı? `,
data: {
 correct_answer: "True", trial_name: "meco_para_12_qa_0"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_1 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Plakaların boyutları II. Dünya Savaşı'ndan önce mi standardize edildi? `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_1"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_2 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Taşıt kayıt plakası bütün tekneler ve kara yolu araçları için gerekli midir? `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_2"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};var meco_para_12_qa_3 = {
type: jsPsychHtmlButtonResponse,
stimulus: `<p class="webgaze-experiment" id="question">Taşıt kayıt plakası harflerden, rakamlardan ve sembollerden oluşabilir mi. `,
data: {
 correct_answer: "False", trial_name: "meco_para_12_qa_3"
},
choices: ["True", "False"],extensions: [
{type: jsPsychExtensionWebgazer, params: {targets:['#question'] } }
 ],
};

var meco_trials_array = [[meco_para_7,[meco_para_7_qa_0,meco_para_7_qa_1,meco_para_7_qa_2,meco_para_7_qa_3]],[meco_para_11,[meco_para_11_qa_0,meco_para_11_qa_1,meco_para_11_qa_2,meco_para_11_qa_3]],[meco_para_12,[meco_para_12_qa_0,meco_para_12_qa_1,meco_para_12_qa_2,meco_para_12_qa_3]]];
