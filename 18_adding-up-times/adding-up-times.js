const lists = Array.from(document.querySelectorAll('[data-time]'));
const heading = document.querySelector('h1');
const button = document.querySelector('button');

function getTotalTime(){
    const time = lists.map(list => list.dataset.time); // Get time in Minutes:Seconds
    const secs = time.map(timeCode => {
        // Destructuring array and set variables minutes and seconds by splitting string via semicolon and converting string to number.
        const [minutes, seconds] = timeCode.split(':').map(parseFloat);
        return minutes * 60 + seconds;
    })

    const totalSeconds = secs.reduce((total, vidSeconds) => total + vidSeconds);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = minutes % 60;
    heading.innerHTML = `Total Time : ${hours}:${minutes}:${seconds}`
}


button.addEventListener('click', getTotalTime)
