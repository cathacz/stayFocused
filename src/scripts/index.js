// function (createTask) for "create task" to create new task in ul (ANGELOS)

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
