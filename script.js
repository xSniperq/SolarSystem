const r = document.querySelector(":root");
// const mercury = -241.36363636363636363636363636364;
// const venus = -79.6;
// const earth = -195;
// const moon = 0;
// const mars = -60;
// const ceres = -305;
// const astbelt = 0;
// const jupiter = -225;
// const saturn = -210;
// const uranus = -305;
// const neptune = -260;
// const pluto = -205;
const datecalender = document.querySelector(".datecalender");
const slider = document.querySelector(".slider");
let oneday = 86400000;
let standardday = 1625356800000;
let timecounter;
let today = Date.now();
let intervalspeed = 30;

function unitodate(a) {
  let date = new Date(a);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return date.getFullYear() + "-" + month + "-" + day;
}

let solarinterval = setInterval(solarintervalstart, intervalspeed);

function solarintervalstart() {
  timecounter = parseInt((today - standardday) / 86400000);
  datecalender.value = unitodate(today);
  today = today + oneday;
  r.style.setProperty("--day-counter", `${timecounter}`);
}
