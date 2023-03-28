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
let final = new Date("18 june 2023");
let project = new Date("17 july 2023");
// define where to show data
var display_final = document.getElementById("final");
var display_proj  = document.getElementById("project");
// display function to refresh date every second
function displaydate(){
    let datenow     = new Date();
    let finaldiff   = final - datenow;
    let projectdiff = project - datenow;
    let readyfinal  = secondsToDhms(finaldiff);
    let readyproj   = secondsToDhms(projectdiff);
    display_final.innerHTML = readyfinal;
    display_proj.innerHTML  = readyproj;
}
