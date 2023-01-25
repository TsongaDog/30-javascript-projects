const hero = document.querySelector('.hero');
const text = document.querySelector('h1');

function shadowPosition(e){
    const xWalk = Math.round((e.clientX / hero.clientWidth * 100) - (100 / 2));
    const yWalk = Math.round((e.clientY / hero.clientHeight * 100) - (100 / 2));
    console.log(e.clientX / hero.clientWidth * 100)

    text.style.textShadow = `
    ${xWalk * 3}px ${yWalk * 3}px 3px #EC5863,
    ${yWalk * 3}px ${xWalk * 3}px 3px #4285F4,
    ${xWalk * -3}px ${xWalk * -3}px 3px #ffc600,
    ${yWalk * -2.5}px ${xWalk * -2.5}px 3px #921099,
    ${xWalk * -2.5}px ${yWalk * -2.5}px 3px #bada55
    `;
}

hero.addEventListener('mousemove', shadowPosition)