//get elements
const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const setTimeBtn = document.getElementById('setTimeBtn');
const minutesInput = document.getElementById('minutes-input');
const secondsInput = document.getElementById('seconds-input');

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
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    
    // Validate inputs
    if (minutes < 0) minutesInput.value = 0;
    if (seconds < 0) secondsInput.value = 0;
    if (seconds > 59) secondsInput.value = 59;
    
    // Check if total time is zero
    const totalSeconds = (minutes * 60) + seconds;
    if (totalSeconds === 0) {
        alert("Please set a time greater than 0");
        return;
    }
    
    if (isRunning) {
        if (!confirm("Timer is running. Do you want to reset the timer?")) {
            return;
        }
        pauseTimer();
    }
    
    totalTime = totalSeconds;
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
    clearInterval(timer);
    isRunning = false;
    timeLeft = totalTime;
    updateTimer();
}

//event listeners
setTimeBtn.addEventListener('click', setTime);
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// code to press enter to set time
minutesInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        setTime();
    }
});

secondsInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        setTime();
    }
});

//start timer display
updateTimer();