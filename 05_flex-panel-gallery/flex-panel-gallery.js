const panels = document.querySelectorAll('.panel');

function toggleOpenClass() {
    this.classList.toggle('open');
}

function toggleOpenActiveClass(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpenClass))
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActiveClass))