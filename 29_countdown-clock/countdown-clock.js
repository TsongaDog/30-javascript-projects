const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('.timer__button');
let countdown;

function timer(seconds){
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;

    displaySecondsLeft(seconds);
    displayEndTime(then);

    countdown = setInterval( () => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft <= 0){
            clearInterval(countdown);
        }
        displaySecondsLeft(secondsLeft);
    }, 1000);
}

function displaySecondsLeft(seconds){
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const remainderSeconds = seconds % 60;
    const display = `${hours} : ${minutes < 10 ? '0' : ''}${minutes} : ${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At: ${hours}:${minutes}`;
}

function setTimer(){
    timer(parseInt(this.dataset.time));
}

function setCustomTime(e){
    e.preventDefault();
    const customTime = this.minutes.value;
    this.reset();
    timer(customTime * 60);
}

buttons.forEach(button => button.addEventListener('click', setTimer));
document.customForm.addEventListener('submit', setCustomTime);