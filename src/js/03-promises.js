

const form = document.querySelector('.form');

const delay = +form.elements.delay.value;
const step = +form.elements.step.value;
const amount = +form.elements.amount.value;

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  for (let i = 0; i <= amount; i++) {
    createPromise(i, delay + step * i)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
  }
}
  //   .then(({ position, delay }) => {
  //   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  // })
  // .catch(({ position, delay }) => {
  //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  // });

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
    }, delay)
  })
  }
//form.addEventListener('submit', onSubmit(e));
