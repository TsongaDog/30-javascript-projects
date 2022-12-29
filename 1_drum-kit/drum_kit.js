function recordSound(event) {
    const keyCode = event.keyCode;
    const key = document.querySelector(`.key[data-key = "${keyCode}"]`);
    const audio = document.querySelector(`audio[data-key = "${keyCode}"]`);

    if (!audio) {
        return;
    }

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
}

function removePlayingClass(event) {
    if (event.propertyName !== 'transform') return;
    console.log(event.propertyName)
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removePlayingClass))

window.addEventListener('keydown', recordSound);

