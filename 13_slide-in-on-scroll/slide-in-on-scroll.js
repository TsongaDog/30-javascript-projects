const images = document.querySelectorAll('img');
const alignLeft = document.querySelectorAll('.align-left');
const alignRight = document.querySelectorAll('.align-right');

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function scroll(){
    images.forEach(image => {
        const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
        const bottomImage = image.offsetTop + image.height;
        const isHalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPast = slideInAt < bottomImage;
        if (isHalfShown && isNotScrolledPast){
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(scroll));