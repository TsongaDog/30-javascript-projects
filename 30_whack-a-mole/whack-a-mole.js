const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const button = document.querySelector('button');
let lastHole;
let timeUp = false;
let score = 0;

function randTime(min, max){
    const milliseconds = Math.round(Math.random() * (max - min) + min);
    return milliseconds;
}

function randHole(holes){
    const holeIndex = Math.round(Math.random() * 5);
    const hole = holes[holeIndex];

    if(hole === lastHole){
        return randHole(holes);
    }

    lastHole = hole;
    return hole;
}

function putMole(){
    const time = randTime(400, 2000);
    const hole = randHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) putMole();
    }, time)
}

function startGame(){
    score = 0;
    scoreBoard.textContent = 0;
    timeUp = false;
    putMole();
    setTimeout(() => timeUp = true, 10000);
}

function bonkMole(e){
    if (!e.isTrusted) return;
    this.parentElement.classList.remove('up');
    scoreBoard.textContent = ++score;
}

moles.forEach(mole => mole.addEventListener('click', bonkMole));