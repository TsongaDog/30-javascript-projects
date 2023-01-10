const video = document.querySelector('video');
const toggle = document.querySelector('.player__button');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const sliders = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('[data-skip]');
const fullScreenButton = document.querySelector('.player__full-screen-button');

function playPauseVideo(){
    video.paused ? video.play() : video.pause();
}

function changeButton() {
    const sign = video.paused ? '►' : '❚ ❚';
    toggle.textContent = sign;
}

function skip(){
    video.currentTime += Number(this.dataset.skip);
}

function changeVolume() {
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function navigateVideo(e){
    const scrubTime = (e.offsetX / video.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function fullScreen(){
    if(video.requestFullscreen) {
        return video.requestFullscreen();
    }
}

video.addEventListener('click', playPauseVideo);
video.addEventListener('play', changeButton);
video.addEventListener('pause', changeButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', playPauseVideo);
sliders.forEach(slider => slider.addEventListener('input', changeVolume))
skipButtons.forEach(button => button.addEventListener('click', skip));
fullScreenButton.addEventListener('click',fullScreen)

let mousedown = false;

progress.addEventListener('click', navigateVideo);
progress.addEventListener('mousemove', (e) => mousedown && navigateVideo(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);