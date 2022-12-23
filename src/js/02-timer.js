import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';
require('flatpickr/dist/themes/dark.css');

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const refs = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

startBtn.addEventListener('click', onStartBtn);
input.addEventListener('input', inputValue);

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // onChange(selectedDates) {
  //   if (selectedDates[0] <= Date.now()) {
  //     Notify.failure('"Please choose a date in the future"');
  //     startBtn.disabled = true;
  //     startBtn.classList.remove('is-active');
  //   } else {
  //     startBtn.disabled = false;
  //     startBtn.classList.add('is-active');
  //   }
  // },
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notify.failure('"Please choose a date in the future"');
      startBtn.disabled = true;
      startBtn.classList.remove('is-active');
    } else {
      startBtn.disabled = false;
      startBtn.classList.add('is-active');
    }
  },
};
flatpickr('#datetime-picker', options);

function inputValue() {
  return new Date(input.value).getTime();
}

function onStartBtn() {
  startBtn.classList.remove('is-active');
  let intervalId = setInterval(() => {
    const currentDate = Date.now();
    const timeDif = inputValue() - currentDate;
    if (timeDif < 0) {
      clearInterval(intervalId);
      Notify.success(`(●'◡'●)`);
    } else {
      const turgetTime = convertMs(timeDif);
      updateCounter(turgetTime);
    }
  }, 1000);
}

function updateCounter({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(`${days}`);
  refs.hours.textContent = addLeadingZero(`${hours}`);
  refs.minutes.textContent = addLeadingZero(`${minutes}`);
  refs.seconds.textContent = addLeadingZero(`${seconds}`);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
