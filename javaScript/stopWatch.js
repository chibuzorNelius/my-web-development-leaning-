// Stop Watch JavaScript

// not time, it's a number counter. the limit is 50, we can start, stop and reset the counter. when the counter reaches 50, it will display a message and stop counting.
let counter = 0;
let intervalId = null;

const counterDisplay = document.getElementById('counterDisplay');
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const resetButton = document.getElementById('resetBtn');

if (startButton) {
    startButton.addEventListener('click', startCounter);
}

if (stopButton) {
    stopButton.addEventListener('click', stopCounter);
}

if (resetButton) {
    resetButton.addEventListener('click', resetCounter);
}

function updateDisplay() {
    if (counterDisplay) {
        counterDisplay.textContent = counter;
    }
}

function startCounter() {
    if (intervalId !== null) {
        return; // Counter already running
    }

    intervalId = setInterval(() => {
        counter += 1;
        updateDisplay();

        if (counter >= 50) {
            alert('Counter has reached 50!');
            stopCounter();      
        }
    }, 1000); // Increment counter every second
}

function stopCounter() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function resetCounter() {
    stopCounter();
    counter = 0;
    updateDisplay();
}


