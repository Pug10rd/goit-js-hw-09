function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const start = document.querySelector("button[data-start]");

const stopB = document.querySelector("button[data-stop]");

const centr = document.querySelector('.centr');

let timer = null;

stopB.setAttribute("disabled", "disabled");

start.addEventListener('click', () => {
    timer = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    start.setAttribute("disabled", 'disabled');
    stopB.removeAttribute('disabled');
});

stopB.addEventListener('click', () => {
    clearInterval(timer);
    start.removeAttribute('disabled');
    stopB.setAttribute("disabled", "disabled");
});

centr.style.marginLeft = '650px';
centr.style.marginTop = '300px';