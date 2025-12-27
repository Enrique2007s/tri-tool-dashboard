//get elements
const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const setTimeBtn = document.getElementById('setTimeBtn');
const minutesInput = document.getElementById('minutes');

//timer variables
let timeLeft = 25 * 60;
let totalTime = timeLeft;
let timer = null;
let isRunning = false;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes} : ${seconds.toString().padStart(2, '0')}`;
}   

function setTime() {
    const minutes = parseInt(minutesInput.value);

    if (isNaN(minutes) || minutes < 1) {
        minutesInput.value = 1;
        return;
    }

    if (minutes > 60) {
        minutesInput.value = 60;
        return;
    }

    if (isRunning) {
        if (!confirm("Timer is running. Do you want to reset the timer?")) {
        return;
    }
    pauseTimer();
    }

    totalTime = minutes * 60;
    timeLeft = totalTime;
    updateTimer();
}

function startTimer() {
    if (isRunning) return;

    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timer);
            isRunning = false;
            alert("Time is up!")
        }
    }, 1000);
}

function pauseTimer() {
    if (!isRunning) return;

    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
}

