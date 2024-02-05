var start = document.getElementById("start");
var stop = document.getElementById("stop");
var hours = 0;
var mins = 0;
var seconds = 0;
var miliSeconds = 0;
var interval;
var hoursDisp = document.getElementById("hoursDisp");
console.log(hoursDisp);
var minsDisp = document.getElementById("minsDisp");
console.log(minsDisp);
var secDisp = document.getElementById("secondsDisp");
console.log(secDisp);
var miliSecDisp = document.getElementById("miliSecondsDisp");
console.log(miliSecDisp);
function display() {
  hoursDisp.innerHTML = hours;
  minsDisp.innerHTML = mins;
  secDisp.innerHTML = seconds;
  miliSecDisp.innerHTML = miliSeconds;
}
display();

function handleStart() {
  console.log("Start");
  start.disabled = true;
  stop.disabled = false;
  interval = setInterval(() => {
    miliSeconds++;
    miliSecDisp.innerHTML = miliSeconds;
    if (miliSeconds === 10) {
      miliSeconds = 0;
      seconds++;
      secDisp.innerHTML = seconds;
      if (seconds == 60) {
        seconds = 0;
        mins++;
        minsDisp.innerHTML = mins;
        if (mins == 60) {
          mins = 0;
          hours++;
          hoursDisp.innerHTML = hours;
        }
      }
    }
  }, 100);
}

function handleStop() {
  clearInterval(interval);
  start.disabled = false;
  stop.disabled = true;
}

function handleReset() {
  console.log("Reset");
  handleStop();
  hours = 0;
  mins = 0;
  seconds = 0;
  miliSeconds = 0;
  hoursDisp.innerHTML = 0;
  minsDisp.innerHTML = 0;
  secondsDisp.innerHTML = 0;
  miliSecDisp.innerHTML = 0;
}
