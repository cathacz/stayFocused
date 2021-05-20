// function (createTask) for "create task" to create new task in ul (ANGELOS)

let kstart = "";
let timing = "";
let kstop = "";
const createTask = (e) => {
  e.preventDefault();
  let myData = document.querySelector("input").value;

  if (myData != "") {
    let myTime = document.querySelector('input[type="range"]').value;
    getComputedStyle;
    let newTask = document.createElement("li");
    newTask.classList.add("classforall");
    let texti = document.createTextNode(myData);

    newTask.appendChild(texti);

    document.querySelector(".taskList").appendChild(newTask);
    document.querySelector("input").value = "";

    const newbox = document.createElement("div");
    newbox.classList.add("basics");
    // for the balloon creation effect
    let balloon = document.createElement("div");
    balloon.classList.add("balloon");
    let balloonroom = document.querySelector(".displayTimer");

    balloonroom.appendChild(balloon);
    // kstart button fireTheTimer
    kstart = document.createElement("button");
    kstart.classList.add("start");
    kstart.addEventListener("click", (e) => {
      let mycurrenttime = e.target.previousElementSibling.textContent.slice(
        0,
        2
      );

      inputUser = 60 * +mycurrenttime;
      display = document.querySelector("#time");
      clearInterval(interval);

      startTimer(e, inputUser, display);
    });
    //our button for the stop
    kstop = document.createElement("button");
    kstop.classList.add("toStopit");
    //our time list
    timing = document.createElement("div");
    timing.classList.add("task_time");

    timing.innerHTML = `${myTime} minutes`;

    kstart.innerHTML = "start";
    kstop.innerHTML = "stop";

    // Injecting the buttons into the our box
    newbox.appendChild(timing);
    newbox.appendChild(kstart);
    newbox.appendChild(kstop);

    newTask.appendChild(newbox);
    //kstop button , it deletes the task if thew user says yes

    const stopTime = () => {
      alert("are you sure? only few minutes left");

      var strForStop = prompt("are you sure? please type yes or no");
      let strToLowerCase = strForStop.toLowerCase();
      if (strToLowerCase.includes("yes")) {
        addEventListener("click", (e) => {
          let zielEl = e.target.parentElement.parentElement;
          let timetodelete = document.querySelector("#time");
          timetodelete.textContent = "00:00";
          //console.log(zielEl);
          zielEl.remove();
          // balloon.remove();
        });
      } else if (strToLowerCase.includes("no")) {
        // return back
        alert("good decision! let's finish the task!");
      } else {
        alert("please enter yer or not");
        prompt(" please type yes or no");
      }
    };
    kstop.addEventListener("click", stopTime);
  } else {
    document.querySelector("input").placeholder = "write here your task...";
  }
};

const keyCheck = (e) => {
  //console.log(event);
  if (e.key == "Enter") createTask(e);
};

document.querySelector("form").addEventListener("submit", createTask);
document.querySelector("form").addEventListener("submit", createTask);

// function (timer) counting backwards – default 00:00

// function of input range for time input (Omar) (thanks to Roman)

let range = document.querySelector('input[type="range"]');
let timeondisplay = document.querySelector("#time");
let rangeValue = function () {
  let newValue = range.value;
  let target = document.querySelector(".value");
  console.log();
  target.innerHTML = newValue;
  timeondisplay.innerHTML = `${newValue}:00`;
};

range.addEventListener("input", rangeValue);
let interval;
//function (startTimer) that sets time of task(OMAR)
const startTimer = (e, duration, display) => {
  // console.log(e.target);
  let timer = duration,
    minutes,
    seconds;
  interval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;

    // if (--timer < 0) {
    //   timer = duration;
    // }

    if (timer <= 0) {
      clearInterval(interval);
      document.querySelector("input").innerHTML = "Finished";
      const balloon = document.querySelector(".balloon");
      balloon.style.opacity = 0;
      balloon.style.transition = "6s";
      setTimeout(() => balloon.remove(), 6000);
    } else {
      document.querySelector("input").innerHTML = timer + "remaining";
    }
    timer -= 1;

    if (timeondisplay.innerHTML === "00:00") {
      //  balloon.style.opacity = "0%";
      //  balloon.style.transition = "6s";
    }
  }, 10);
};
let myTime = document.querySelector('input[type="range"]');
let mycurrenttime;
let inputUser;
document.querySelectorAll(".start").forEach((el) =>
  el.addEventListener("click", (e) => {
    console.log(e.target.previousElementSibling);
    //console.log(5454);
    // mycurrenttime = document.querySelector('input[type="range"]').value;
    // inputUser = 60 * +mycurrenttime;
    // display = document.querySelector("#time");
    // clearInterval(interval);
    // startTimer(inputUser, display);
  })
);

//list items need buttons and timer

/* END DAY FUNCTION (ALEX) */
//selectors
const endBtn = document.querySelector(".endDay");

//functions
function endDay() {
  var str = prompt("Are you a 100% sure? Please type yes or no");
  let strToLowerCase = str.toLowerCase();
  if (strToLowerCase.includes("yes")) {
    alert("At least you tried (but you crashed and burned...)");
    let ali = document.querySelectorAll("li");
    ali.forEach((el) => el.remove());
    let timetodelete = document.querySelector("#time");
    timetodelete.textContent = "choose your next task, don't be lazy";
    let balloondestroyer = document.querySelectorAll(".balloon");
    balloondestroyer.forEach((el) => el.remove());
  } else if (strToLowerCase.includes("no")) {
    // return back
    alert("Great decision! Let's finish these tasks! You can do it!");
  } else {
    alert(`Please enter "yes" or "no"`);
    prompt(`Be so kind and type "yes" or "no"`);
  }
}

//events
endBtn.addEventListener("click", endDay);
// connect everything so it actually works :)
// >> do that together – before merging!
// :00 on the duration part
//FIX THE STOP BUTTON TO SAY HOW MANY MINUTES LEFT AND MAKE IT STOP THE TASK

//AFTER THE END DAY TASK SUMM THE AMM OF MINUTES

// catha did some stuff too

var colors = [
  "$field-color41",
  `$field-color42`,
  "$field-color43",
  "$field-color44",
  "$field-color45",
];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector(".balloon").style.color = random_color;
