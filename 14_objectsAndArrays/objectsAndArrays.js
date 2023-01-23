// start with strings, numbers and booleans

// let name = 'Sunggat';
// let copyOfName = name;
// name = 'Noone';
// console.log(copyOfName, name)
//
// let age = 17;
// let copyOfAge = age;
// age = 20;
// console.log(age, copyOfAge);
//
// let goodPerson = true;
// let sunggatIsOkay = goodPerson;
// goodPerson = false;
// console.log(sunggatIsOkay, goodPerson);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
// You might think we can just do something like this:

// const copyOfPlayers = players;
// players[3] = 'Boba';
// console.log(copyOfPlayers);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
// const copyOfPlayers2 = players.slice();
// copyOfPlayers2[3] = 'Boba';
// console.log(copyOfPlayers2, players);

// or create a new array and concat the old one in

// const copyOfPlayers3 = [].concat(players);
// copyOfPlayers3[3] = 'Boba';
// console.log(copyOfPlayers3, players);

// or use the new ES6 Spread

// const copyOfPlayers4 = [...players];
// copyOfPlayers4[3] = 'Boba';
// console.log(copyOfPlayers4);

// or use the Array.from() method

// const copyOfPlayers5 = Array.from(players);
// copyOfPlayers5[3] = 'Boba';
// console.log(players);

// also you can use JSON stringify and parse method

// const copyOfPlayers6 = JSON.parse(JSON.stringify(players));
// copyOfPlayers6[3] = 'Boba';
// console.log(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:

// how do we take a copy instead?

// const person2 = Object.assign({}, person, { age: 99 });
// console.log(person);

// We will hopefully soon see the object ...spread

const person3 = {...person};
person3.age = 99;
console.log(person);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const person4 = {
    name: 'Wes Bos',
    age: 80,
    social: {
        twitter: '@suna',
        facebook: 'suna'
    }
}

const copyOfPerson = JSON.parse(JSON.stringify(person4));
copyOfPerson.social.instagram = '@suna';
console.log(person4);
