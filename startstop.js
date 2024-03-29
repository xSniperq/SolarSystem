const startstopbutton = document.querySelector(".startstopbutton");
let differenttext = 0;
const sliderspeed = document.querySelector(".range");
let pausedcalenderrefresh;
// The function is checking for any changes in the calender to update the model
function PausedCalenderRefresh() {
  // Code from the function solarintervalstart
  today = Date.parse(datecalender.value);
  timecounter = parseInt((today - standardday) / 86400000);
  // Comparing calender to the css value
  if (
    (today - standardday) / 86400000 !=
    r.style.getPropertyValue("--day-counter")
  ) {
    r.style.setProperty("--day-counter", `${timecounter}`);
  }
}

function checkdatecalenter() {
  if (differenttext == 0) {
    startstopbutton.innerHTML = "Start";
    differenttext += 1;
    clearInterval(solarinterval);
    pausedcalenderrefresh = setInterval(PausedCalenderRefresh, 100);
  } else {
    clearInterval(pausedcalenderrefresh);
    startstopbutton.innerHTML = "Stop";
    differenttext -= 1;
    if (Date.parse(datecalender.value) < -6000000000000) {
      datecalender.value = unitodate(-6000000000000);
    }
    today = Date.parse(datecalender.value);
    intervalspeed = 60 - sliderspeed.value; // Reversing the slider
    solarinterval = setInterval(solarintervalstart, intervalspeed);
  }
}

startstopbutton.onclick = () => {
  checkdatecalenter();
};

datecalender.onclick = () => {
  // checkdatecalenter();
  clearInterval(solarinterval);
  startstopbutton.innerHTML = "Start";
  differenttext = 1;
  pausedcalenderrefresh = setInterval(PausedCalenderRefresh, 100);
};

sliderspeed.onclick = () => {
  clearInterval(solarinterval);
  startstopbutton.innerHTML = "Start";
  differenttext = 1;
};
