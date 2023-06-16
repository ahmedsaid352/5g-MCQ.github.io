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
//Define final & project dates 
let final = new Date("18 june 2023 15:00");
let project = new Date("17 july 2023 15:00");
// define where to show data
var display_final = document.getElementById("final");
var display_proj  = document.getElementById("project");
// display function to refresh date every second
function displaydate() {
    let datenow = new Date();
    let finaldiff = final - datenow;
    let projectdiff = project - datenow;
    let readyfinal = secondsToDhms(finaldiff);
    let readyproj = secondsToDhms(projectdiff);
    const aphorisms = [
        'الصوت يا بشمهندسيييييييين - نسر و نسر',
        'والله لو إجابتك صح هكدب ومش هتاخدها- توحه',
        'انا مش فاهم الحته دي كويس اتمنى تكونوا فاهمين - توحه',
        'اعتمدوا على نفسكم كما كنتم تعتمدوا على نفسكم وام تحضروا المحاضرات - الزاجل',
        'كل عام وانتم بالف خير وصحة وسعادة - عم غريب'
    ]
    if (finaldiff < 0) {
        const randomIndex = Math.floor(Math.random() * aphorisms.length);
        const message = aphorisms[randomIndex];
        display_final.innerHTML = message;
    } else {
        display_final.innerHTML = readyfinal;
    }
    if (projectdiff < 0) {
        const song = "Give me freedom, give me fire, give me reason, take me higher";
        const index = Math.min(Math.floor(-finaldiff / 1000), song.length);
        const message = song.substring(0, index);
        display_proj.innerHTML = message;
    } else {
        display_proj.innerHTML = readyproj;
    }

    }