const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

let isDown = false;

const isDownTrue = () => isDown = true;
const isDownFalse = () => isDown = false;

function handleMove(e){
    if (!isDown) return;
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;

    const min = 0.4;
    const max = 4;

    const playbackRate = (percent * (max - min) + min);

    speedBar.style.height = Math.round(percent * 100) + '%';
    speedBar.textContent = playbackRate.toFixed(2);
    video.playbackRate = playbackRate;
}


speed.addEventListener('mousedown', isDownTrue);
speed.addEventListener('mousemove', handleMove);
speed.addEventListener('mouseup', isDownFalse);
speed.addEventListener('mouseleave', isDownFalse);