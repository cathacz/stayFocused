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

    // function (stopTime) that stops task >> alert "are you sure? only _____ minutes left" (CATHA)
    const stopTime = () => {
      let messageForAlert = `are you sure? only ${timing.innerHTML}  left`;
      alert(messageForAlert);
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
// const startTimer = (duration, display) => {
//   let timer = duration,
//     minutes,
//     seconds;
//   setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;
//     display.textContent = minutes + ":" + seconds;
//     if (--timer < 0) {
//       timer = duration;
//     }
//   }, 1000);
// };
// window.onload = function () {
//   let inputUser = 60 * 1,
//     display = document.querySelector("#time");
//   startTimer(inputUser, display);
// };

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

// my branch now – yay

document.querySelector("").addEventListener("click", stopTime, quittingAlert);

var stop = false; 
var time_left; // time left on the clock when stopped

function stopTime(){
	if(!stop){
		stop = true;
		clearInterval(timeinterval); // stop the clock
		time_left = remainingTime(deadline).total; // preserve remaining time
	}
}

function quittingAlert(){
    alert(`Are you sure? There are only ${}minutes left of this task. You can do this!`)
}

/////////////////////////////////////////
//  10 minutes from now
// var time_in_minutes = 10;
// var current_time = Date.parse(new Date());
// var deadline = new Date(current_time + time_in_minutes*60*1000);


// function time_remaining(endtime){
// 	var t = Date.parse(endtime) - Date.parse(new Date());
// 	var seconds = Math.floor( (t/1000) % 60 );
// 	var minutes = Math.floor( (t/1000/60) % 60 );
// 	var hours = Math.floor( (t/(1000*60*60)) % 24 );
// 	var days = Math.floor( t/(1000*60*60*24) );
// 	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
// }

// var timeinterval;
// function run_clock(id,endtime){
// 	var clock = document.getElementById(id);
// 	function update_clock(){
// 		var t = time_remaining(endtime);
// 		clock.innerHTML = 'minutes: '+t.minutes+'<br>seconds: '+t.seconds;
// 		if(t.total<=0){ clearInterval(timeinterval); }
// 	}
// 	update_clock(); // run function once at first to avoid delay
// 	timeinterval = setInterval(update_clock,1000);
// }
// run_clock('clockdiv',deadline);


// var paused = false; // is the clock paused?
// var time_left; // time left on the clock when paused

// function pause_clock(){
// 	if(!paused){
// 		paused = true;
// 		clearInterval(timeinterval); // stop the clock
// 		time_left = time_remaining(deadline).total; // preserve remaining time
// 	}
// }

// function resume_clock(){
// 	if(paused){
// 		paused = false;

// 		// update the deadline to preserve the amount of time remaining
// 		deadline = new Date(Date.parse(new Date()) + time_left);

// 		// start the clock
// 		run_clock('clockdiv',deadline);
// 	}
// }

// // handle pause and resume button clicks
// document.getElementById('pause').onclick = pause_clock;
// document.getElementById('resume').onclick = resume_clock;

// skip/finished early button!!!!


// Omar 

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