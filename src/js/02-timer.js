
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Додатковий імпорт стилів

const timeItem = {
    startBtn: document.querySelector('button[data-start]'),
    input: document.getElementById('datetime-picker'),
    daysRemaining: document.querySelector('[data-days]'),
    hoursRemaining: document.querySelector('[data-hours]'),
    minutesRemaining: document.querySelector('[data-minutes]'),
    secondsRemaining: document.querySelector('[data-seconds]')
}
console.log(timeItem.input);

timeItem.startBtn.setAttribute("disabled", "disabled");

let futureDate

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
      window.alert("Please choose a date in the future");
      timeItem.startBtn.setAttribute("disabled", "disabled");
    } else {
      //window.alert("Press Start!");
      timeItem.startBtn.removeAttribute("disabled");
    }
    futureDate = selectedDates;
  },
};

const fp = flatpickr(timeItem.input, options)



timeItem.startBtn.addEventListener('click', () => {
  //const delta = futureDate[0] - Date.now();
  setInterval(() => {
    const delta = futureDate[0] - Date.now();
    if (delta >= 0) {
      const result = convertMs(delta);
      timeItem.daysRemaining.textContent = result.days;
      timeItem.hoursRemaining.textContent = result.hours;
      timeItem.minutesRemaining.textContent = result.minutes;
      timeItem.secondsRemaining.textContent = result.seconds;
    }
  }, 1000)
  
})

function addLeadingZero(value) { 
    return String(value).padStart(2, '0'); 
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

