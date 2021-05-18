// function (createTask) for "create task" to create new task in ul (ANGELOS)

// function (timer) counting backwards – default 00:00

// function of input range for time input (Omar)

let range = document.querySelector('input[type="range"]');

let rangeValue = function () {
  let newValue = range.value;
  let target = document.querySelector(".value");
  target.innerHTML = newValue;
};

range.addEventListener("input", rangeValue);

// function (startTime) that sets time of task(OMAR)
const startTimer = (duration, display) => {
  let timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
};
window.onload = function () {
  let inputUser = 60 * 1,
    display = document.querySelector("#time");
  startTimer(inputUser, display);
};
// function (stopTime) that stops task >> alert "are you sure? only _____ minutes left" (CATHA)

// list items need buttons and timer

// function (endDay) percentage of how much is been a accomplished (ALEX)

// connect everything so it actually works :)
// >> do that together – before merging!
