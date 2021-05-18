// function (createTask) for "create task" to create new task in ul (ANGELOS)
const createTask = (e) => {
  e.preventDefault();
  let myData = document.querySelector("input").value;

  if (myData != "") {
    let myTime = document.querySelector(".timer").value;

    let newTask = document.createElement("li");

    let texti = document.createTextNode(myData);

    newTask.appendChild(texti);

    document.querySelector(".taskList").appendChild(newTask);
    document.querySelector("input").value = "";

    const newbox = document.createElement("div");
    newbox.classList.add("basics");
    const kstart = document.createElement("button");
    const kstop = document.createElement("button");
    const timing = document.createElement("div");
    timing.innerHTML = `${myTime} minutes`;

    kstart.innerHTML = "start";
    kstop.innerHTML = "stop";

    // Injecting the buttons into the our box
    newbox.appendChild(timing);
    newbox.appendChild(kstart);
    newbox.appendChild(kstop);

    newTask.appendChild(newbox);
    // Adding class

    kstart.classList.add("done");
    // Complete function

    // Complete function
    // toggle will check if the class name exist, will remove it and if it's not will add it
  } else {
    document.querySelector("#myData").placeholder = "write here your task...";
  }
};
const keyCheck = (e) => {
  //console.log(event);
  if (e.key == "Enter") createTask(e);
};
document.querySelector("form").addEventListener("submit", createTask);

// function (timer) counting backwards – default 00:00
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

/* END DAY FUNCTION (ALEX) */
//selectors
const endBtn = document.querySelector(".endDay");

//functions
function endDay() {
  var str = prompt("are you sure? please type yes or no");
  let strToLowerCase = str.toLowerCase();
  if (strToLowerCase.includes("yes")) {
    alert("Thank You for trying! But do better next time!");
    //show percentage
    // function showPercentage () {
    //    let sumTotalTime =  ? //Need "Create Task" variables from Angelos;
    //    return totalTime;
    // }
  } else {
    // return back
    alert("good decision! let's finish these tasks!");
  }
}

//events
endBtn.addEventListener("click", endDay);
// connect everything so it actually works :)
// >> do that together – before merging!
