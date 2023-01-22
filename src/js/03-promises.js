import Notiflix from 'notiflix';

const refs = {
  delay: document.querySelector('input[name-delay]'),
  step: document.querySelector('input[name-step]'),
  amount: document.querySelector('input[name-amount]'),
  btnSubmit: document.querySelector('button'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
