function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  intervalId = setInterval(changeBgc, 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onStopBtn() {
  clearInterval(intervalId);

  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function changeBgc() {
  document.body.style.backgroundColor = getRandomHexColor();
}
