const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions')

fetch(endpoint)
    .then(data => data.json())
    .then(json => cities.push(...json));

function findMatches(wordToMatch, cities) {
    return cities.filter(cityInfo => {
        const regex = new RegExp(wordToMatch, 'gi')
        return cityInfo.state.match(regex) || cityInfo.city.match(regex);
    })
}

function numberWithCommas(num) {
 return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(){
    const matchArray = findMatches(this.value, cities);
    const newCity = matchArray.map(cityObject => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = cityObject.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = cityObject.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
              <span class="name"> ${cityName} ${stateName}</span>
              <span class="population"> ${numberWithCommas(cityObject.population)}</span>
            </li>
        `}).join('');
    suggestions.innerHTML = newCity;
}

search.addEventListener('input', displayMatches);