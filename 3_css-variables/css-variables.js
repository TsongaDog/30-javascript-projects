const inputs = document.querySelectorAll('.controls input');

function setUpdate() {
    const postfix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + postfix);
}

inputs.forEach(input => input.addEventListener('mouseover', setUpdate));