const list = document.querySelector('ul');

const bands =
    ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled',
    'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName){
    const articles = /^(a |the |an )/i;
    return bandName.replace(articles, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

list.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
