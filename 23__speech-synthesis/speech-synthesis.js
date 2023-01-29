const msg = new SpeechSynthesisUtterance();
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const textarea = document.querySelector('[name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
let voices = [];

msg.text = textarea.value;

function populateVoices(){
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices.filter(voice => voice.lang.includes('en'))
            .map(voice => `<option value="${voice.name}"> ${voice.name}, ${voice.lang} </option>`)
            .join('');
}

function speak(startOver = true){
    msg.voice = voices.find(voice => voice.name === this.value);
    if (startOver) speechSynthesis.speak(msg);
    else speechSynthesis.cancel()
}

function setOption(){
    msg[this.name] = this.value;
    speak();
}

voicesDropdown.addEventListener('change', speak);
speakButton.addEventListener('click', speak);
speechSynthesis.addEventListener('voiceschanged', populateVoices);
stopButton.addEventListener('click', () => speak(false));
options.forEach(option => option.addEventListener('change', setOption))