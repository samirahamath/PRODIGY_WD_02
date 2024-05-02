let timerDisplay = document.querySelector(".timer-display");
let pauseBtn = document.getElementById("pause-timer");
let startBtn = document.getElementById("start-timer");
let resetBtn = document.getElementById("reset-timer");

let msec = 0o0;
let secs = 0o0;
let mins = 0o0;

let timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

pauseBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;

    msec = secs = mins = 0o0;
});

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minString} : ${secsString} : ${msecString}`;
}

