const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const currentTime = new Date();

    const currentTimeSeconds = currentTime.getSeconds();
    const currentTimeSecondsDegrees = ((currentTimeSeconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${currentTimeSecondsDegrees}deg)`;

    const currentTimeHours = currentTime.getHours();
    const currentTimeHoursDegrees = ((currentTimeHours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${currentTimeHoursDegrees}deg)`

    const currentTimeMinutes = currentTime.getMinutes();
    const currentTimeMinutesDegrees = ((currentTimeMinutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${currentTimeMinutesDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate()