import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

form = document.querySelector('.form');
delayInput = document.querySelector('input[name="delay"]');
stepInput = document.querySelector('input[name="step"]');
amountInput = document.querySelector('input[name="amount"]');

form.addEventListener('submit', onsubmit);

function onsubmit(evt) {
  evt.preventDefault();

  const delay = +delayInput.value;
  const step = +stepInput.value;
  const amount = +amountInput.value;

  for (let i = 1; i < amount + 1; i += 1) {
    const delayStep = +(delay + step * (i - 1));

    createPromise(i, delayStep).then(onSuccess).catch(onFailure);
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      }
      rej({ position, delay });
    }, delay);
  });
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onFailure({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
