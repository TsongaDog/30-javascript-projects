const nav = document.querySelector('#main');
let navTop = nav.offsetTop

function fixNav() {
    if (window.scrollY >= navTop) {
        nav.classList.add('fixed-nav');
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        nav.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);