let timeInSeconds = 0;
let timerInterval;
const timerDisplay = document.getElementById('timer');
const timeInput = document.getElementById('timeInput');

function startTimer() {
  timeInSeconds = parseInt(timeInput.value);
  displayTime();
  timerInterval = setInterval(() => {
    timeInSeconds--;
    if (timeInSeconds < 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
    } else {
      displayTime();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeInput.value = "";
  displayTime();
}

function displayTime() {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

displayTime();