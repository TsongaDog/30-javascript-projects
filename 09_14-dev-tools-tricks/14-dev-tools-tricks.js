const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hi');

// Interpolated

console.log('I am %s', '💩');

// Styled

console.log('%c I am red text', 'color: red')

// warning!

console.warn('FUUUUUUUUUCKKK')

// Error :|

console.error('You funcking dumb cannot even write code properly')

// Info

console.info('Baby rabbits are called kits. Cute!\n');

// Testing

const p = document.querySelector('p');
console.assert(p.classList.contains('eak'), 'that is wrong!')

// clearing

console.clear()

// Viewing DOM Elements

console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}!`);
    console.log(`${dog.name} is ${dog.age} human years old!`);
    console.log(`or ${dog.age * 7} dog years old!`);
    console.groupEnd(`${dog.name}`);
})

// counting

console.count(`Hello World!`);
console.count(`Hello World!`);

// timing

const photos = 'https://jsonplaceholder.typicode.com/photos';
console.time('fetching data')
fetch(photos)
    .then(data => data.json()
    .then(data => {
        console.log(data)
        console.timeEnd('fetching data');
}))

//table

console.table(dogs);