window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const words = document.querySelector('.words');

const recognition = new speechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = [...e.results]
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    if (e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    }

    p.textContent = transcript;
})

recognition.addEventListener('end', recognition.start);


recognition.start();
