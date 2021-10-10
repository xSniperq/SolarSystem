const startstopbutton = document.querySelector(".startstopbutton");
let differenttext = 0;
function checkdatecalenter() {
  if (differenttext == 0) {
    startstopbutton.innerHTML = "Start";
    differenttext += 1;
    clearInterval(solarinterval);
  } else {
    startstopbutton.innerHTML = "Stop";
    differenttext -= 1;
    if (Date.parse(datecalender.value) < -6000000000000) {
      datecalender.value = unitodate(-6000000000000);
    }
    today = Date.parse(datecalender.value);
    solarinterval = setInterval(solarintervalstart, intervalspeed);
  }
}

startstopbutton.onclick = () => {
  checkdatecalenter();
};
datecalender.onclick = () => {
  startstopbutton.innerHTML = "Start";
  differenttext = 1;
  clearInterval(solarinterval);
};
