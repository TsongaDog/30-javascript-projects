const links = document.querySelectorAll('a');
const highlighter = document.createElement('span');
highlighter.classList.add('highlight');
document.body.appendChild(highlighter);

function highlightLinks(){
    const coords = this.getBoundingClientRect();
    console.log(coords);
    highlighter.style.width = `${coords.width}px`;
    highlighter.style.height = `${coords.height}px`;
    highlighter.style.transform = `translate(${coords.left + window.scrollX}px, ${coords.top+ window.scrollY}px)`
}

links.forEach(link => link.addEventListener('mouseenter', highlightLinks));
