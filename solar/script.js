const r = document.querySelector(":root");
const mercury = -241.36363636363636363636363636364;
const venus = -79.6;
const earth = -195;
const moon = 0;
const mars = -60;
const ceres = -305;
const astbelt = 0;
const jupiter = -225;
const saturn = -210;
const uranus = -305;
const neptune = -260;
const pluto = -205;
const datep = document.querySelector(".datep");
const slider = document.querySelector(".slider");
let nextday = 86400000;
let standardday = 1625356800000;
let timecounter;
let today = Date.now();
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
  return day + "." + month + "." + date.getFullYear();
}

let mercurydeg,
  venusdeg,
  earthdeg,
  moondeg,
  marsdeg,
  ceresdeg,
  jupiterdeg,
  saturndeg,
  uranusdeg,
  neptunedeg,
  plutodeg,
  beltdeg;
let interval = setInterval(() => {
  //Counts days//
  timecounter = parseInt((today - standardday) / 86400000);
  mercurydeg = mercury - timecounter * (360 / 88);
  if (mercurydeg <= -360) {
    mercurydeg += 360;
  }
  venusdeg = venus - timecounter * (360 / 225);
  if (venusdeg < -360) {
    venusdeg += 360;
  }
  earthdeg = earth - timecounter * (360 / 365.25);
  if (earthdeg < -360) {
    earthdeg += 360;
  }
  moondeg = moon - timecounter * (360 / 27.32);
  if (moondeg < -360) {
    moondeg += 360;
  }
  marsdeg = mars - timecounter * (360 / 686.67);
  if (marsdeg < -360) {
    marsdeg += 360;
  }
  ceresdeg = ceres - timecounter * (360 / 1680);
  if (ceresdeg < -360) {
    ceresdeg += 360;
  }
  beltdeg = astbelt - timecounter * (360 / 1800);
  if (beltdeg < -360) {
    beltdeg += 360;
  }
  jupiterdeg = jupiter - timecounter * (360 / 4331.87);
  if (jupiterdeg < -360) {
    jupiterdeg += 360;
  }
  saturndeg = saturn - timecounter * (360 / 10756.6);
  if (saturndeg < -360) {
    saturndeg += 360;
  }
  uranusdeg = uranus - timecounter * (360 / 30681);
  if (uranusdeg < -360) {
    uranusdeg += 360;
  }
  neptunedeg = neptune - timecounter * (360 / 60196.85);
  if (neptunedeg < -360) {
    neptunedeg += 360;
  }
  plutodeg = pluto - timecounter * (360 / 90907.07);
  if (plutodeg < -360) {
    plutodeg += 360;
  }
  r.style.setProperty(
    "--mercury-year",
    `translate(-50%, -50%) rotate(${mercurydeg}deg)`
  );
  r.style.setProperty(
    "--venus-year",
    `translate(-50%, -50%) rotate(${venusdeg}deg)`
  );
  r.style.setProperty(
    "--earth-year",
    `translate(-50%, -50%) rotate(${earthdeg}deg)`
  );
  r.style.setProperty("--moon", `translate(-50%, -50%) rotate(${moondeg}deg)`);
  r.style.setProperty(
    "--mars-year",
    `translate(-50%, -50%) rotate(${marsdeg}deg)`
  );
  r.style.setProperty(
    "--ceres-year",
    `translate(-50%, -50%) rotate(${ceresdeg}deg)`
  );
  r.style.setProperty(
    "--asteroids-belt",
    `translate(-50%, -50%) rotate(${beltdeg}deg)`
  );
  r.style.setProperty(
    "--jupiter-year",
    `translate(-50%, -50%) rotate(${jupiterdeg}deg)`
  );
  r.style.setProperty(
    "--saturn-year",
    `translate(-50%, -50%) rotate(${saturndeg}deg)`
  );
  r.style.setProperty("--saturn-after", `rotateZ(${-25 - saturndeg}deg)`);

  r.style.setProperty(
    "--uranus-year",
    `translate(-50%, -50%) rotate(${uranusdeg}deg)`
  );
  r.style.setProperty(
    "--neptune-year",
    `translate(-50%, -50%) rotate(${neptunedeg}deg)`
  );
  r.style.setProperty(
    "--pluto-year",
    `translate(-50%, -50%) rotate(${plutodeg}deg)`
  );
  datep.innerHTML = unitodate(today);
  today = today + nextday;
}, 60);
