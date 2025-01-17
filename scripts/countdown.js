const countdownDisplay = document.getElementById('countdown');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const customTimeInput = document.getElementById('customTime');

let countdownInterval;
let timeLeft = 0;
let isPaused = false;

startButton.addEventListener('click', () => {
    timeLeft = parseInt(customTimeInput.value) || 10;  // Use the input or default to 10
    if (countdownInterval) clearInterval(countdownInterval); // Clear any previous interval
    startCountdown();
});

pauseButton.addEventListener('click', () => {
    if (isPaused) {
        startCountdown(); // Resume countdown
    } else {
        clearInterval(countdownInterval); // Pause countdown
    }
    isPaused = !isPaused; // Toggle pause/resume
});

function startCountdown() {
    countdownInterval = setInterval(() =>{
        if (timeLeft >= 0) {
            countdownDisplay.textContent = timeLeft;
            timeLeft--;
        }else {
            clearInterval(countdownInterval); // Stop when time is up
            countdownDisplay.textContent = "Time is up!";
        }
    }, 1000);
}