const pressed = []
const secretCode = 'sungat';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    console.log(pressed);
    pressed.slice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode)){
        cornify_add()
    }
})