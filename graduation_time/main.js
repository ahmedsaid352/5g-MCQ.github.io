function secondsToDhms(seconds) {
    seconds = Number(seconds/1000);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
    }

//Define graduation date 
let graduation_date = new Date("15 july 2023 12:38");

// define where to show data
var display_graduation_date  = document.getElementById("graduation_date");

// define the aphorism 
var display_aphorism  = document.getElementById("aphorism");

// define aphorisms
const aphorisms = [
    'الصوت يا بشمهندسيييييييين - نسر و نسر',
    'والله لو إجابتك صح هكدب ومش هتاخدها- توحه',
    'انا مش فاهم الحته دي كويس اتمنى تكونوا فاهمين - توحه',
    'اعتمدوا على نفسكم كما كنتم تعتمدوا على نفسكم وام تحضروا المحاضرات - الزاجل',
    'كل عام وانتم بالف خير وصحة وسعادة - عم غريب',
    'sarsor -  Naive Implementation'
]

// display function to refresh date every second
function displaydate() {
    let datenow = new Date();
    let projectdiff = datenow - graduation_date;
    let readyproj = secondsToDhms(projectdiff);
    display_graduation_date.innerHTML = readyproj;
    }


function displayaphorism(){
    const randomIndex = Math.floor(Math.random() * aphorisms.length);
    const message = aphorisms[randomIndex];
    display_aphorism.innerHTML = message;
}