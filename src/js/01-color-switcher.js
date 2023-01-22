const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

function setBodyColor() {
  refs.body.style.background = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let changeId = null;

refs.startBtn.addEventListener("click", () => {
  refs.startBtn.setAttribute('disabled', 'disabled');
  refs.stopBtn.removeAttribute('disabled');
   changeId = setInterval(setBodyColor, 1000) 
})

refs.stopBtn.addEventListener("click", () => {
  clearInterval(changeId);
  refs.stopBtn.setAttribute('disabled', 'disabled');
  refs.startBtn.removeAttribute('disabled');  
})
