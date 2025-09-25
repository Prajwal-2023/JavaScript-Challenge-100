let minElem = document.getElementById('min');
let secElem = document.getElementById('sec');

let minute = 25;
let seconds = 0;

minElem.innerText = minute;
secElem.innerText = seconds.toString().padStart(2, "0");

const START_BTN = document.getElementById('start-btn');
const STOP_BTN = document.getElementById('stop-btn');
const RESET_BTN = document.getElementById('reset-btn');

START_BTN.addEventListener('click', startTimerBtn);
STOP_BTN.addEventListener('click', stopTimerBtn);
RESET_BTN.addEventListener('click', resetTimerBtn);

let interval = null;

function startTimerBtn() {
  if (interval !== null) return;
  interval = setInterval(timer, 1000);
}

function stopTimerBtn() {
  clearInterval(interval);
  interval = null;
}

function resetTimerBtn() {
  clearInterval(interval);
  interval = null;
  minute = 25;
  seconds = 0;
  minElem.innerText = minute;
  secElem.innerText = seconds.toString().padStart(2, "0");
}

function timer() {
  if (seconds === 0) {
    if (minute === 0) {
      clearInterval(interval);
      interval = null;
      alert("Time's up! Take a break 👏");
      return;
    }
    minute--;
    seconds = 59;
  } else {
    seconds--;
  }

  minElem.innerText = minute;
  secElem.innerText = seconds.toString().padStart(2, "0");
}
