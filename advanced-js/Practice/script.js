// Scope

// Root Scope (window)
var fun = 5;

// Using var in function creates new separate version - naming conflict

function funFunction() {
	// child scope
	var fun = 'hello';
	console.log(1, fun);
}

function funerFunction() {
	// child scope
	var fun = 'Byee';
	console.log(2, fun);
}

// Will modify global fun variable

function funestFunction() {
	// child scope
	fun = 'AHHHHH';
	console.log(3, fun);
}

// console.log('window', fun);
// funFunction();
// funerFunction();
// funestFunction();
// console.log('final', fun);

// ES6

// let + const

/* const player = 'haylz';
let experience = 100;
let rangerLevel = false;

if (experience > 90) {
	let rangerLevel = true;
	console.log('inside', rangerLevel);
}

// console.log('outside', rangerLevel);

const obj = {
	player: 'alex',
	experience: '100',
	rangerLevel: false,
};

const player = obj.player;
const experience = obj.experience;
let rangerLevel = obj.rangerLevel; */

// Destructuring

// const { player, experience } = obj;

// Advanced Functions

/* const first = () => {
	const greet = 'Hi!';
	const second = () => {
		alert(greet);
	};
	return second;
};

const newFunc = first();
newFunc(); */

/* Closures - a function ran, the function executed. It's never going to execute again
BUT it's going to remember that there are references to those variables, so child scope always has access to the parent scope */

// Currying - Process of converting a function into taking parameters one at a time
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);

curriedMultiply(3)(4);

const multiplyBy5 = curriedMultiply(5);

// Compose - Act of puitting 2 function together to form 3rd function where output of 1 function is output of other

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

// Avoiding side effects => functional purity
// Determenistic - Input always returns same value

/* A pure function is a deterministic function. This means when a same input is passed every time, the function will return same output. In mathematical terms it is nothing but a well defined function.

A pure function will have the following properties

    - It depends only on its own arguments.

    - It wont try to change variables out of its scope.

    - It doesn't produce any side effects. */

var a = 1;
function b() {
	// Side Effect
	a = 2;
}

// Advanced Arrays

var array = [1, 2, 10, 16, 20, 40];

/* for loops
forEeach */

const newArray = array.forEach((num) => {
	num * 2;
});

//console.log('undefined', newArray); // undefined

const double = [];
const newArray2 = array.forEach((num) => {
	double.push(num * 2);
});

// console.log('forEach', double);

// map, filter, reduce

// map
const mapArray = array.map((num) => num * 2);

// console.log('map', mapArray);

// filter

const filterArray = array.filter((num) => num > 5);

// console.log('filter', filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 5);

// console.log('reduce', reduceArray);

// Advanced Objects

//Reference Type

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 === object2);
console.log(object1 === object3);

object1.value = 20;
console.log(object2.value);

// Context vs Scope

// Scope
/* function c() {
	let d = 4;
}

console.log(d); */

// Context

/* function e() {
	console.log('e', this);
}

e();

const object4 = {
	e: function () {
		console.log('object4', this);
	},
};

object4.e(); */

// Instantiation - Make copy of object and re-use code

/* class Player {
	constructor(name, type) {
		console.log('Player', this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}. I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
		console.log('Wizard', this);
	}
	play() {
		console.log(`WEEEEEE I am a ${this.type}`);
	}
}

const wizard1 = new Wizard('Albus', 'Mage');
const wizard2 = new Wizard('Gandalf', 'Dark'); */

// Classical Inheritence

/* var Player = function (name, type) {
	this.name = name;
	this.type = type;
};

Player.prototype.introduce = function () {
	console.log(`Hi I am ${this.name}. I'm a ${this.type}`);
};

var wizard1 = new Player('Albus', 'Mage');
var wizard2 = new Player('Gandalf', 'Dark');

wizard1.play = function () {
	console.log(`WEEEEEE I am a ${this.type}`);
};

wizard2.play = function () {
	console.log(`WEEEEEE I am a ${this.type}`);
}; */

// Pass by Reference vs Pass by Value
let varA = 5;
let varB = varA;

varB++;

let objectA = { name: 'Billy', password: '123' };
let objectB = objectA;

objectB.password = 'easypeasy';

/* console.log(objectA);
console.log(objectB); */

var varC = [1, 2, 3, 4, 5];
var varD = varC;

varD.push(12345689);

/* console.log('varD', varD);
console.log('varC', varC); */

let obj = { a: 'a', b: 'b', c: { deep: 'try and copy me' } };
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'hahaha';
/* console.log(clone);
console.log(clone2);
console.log(superClone); */

// Type Coercion

/* if (false) {
	console.log(5);
}

console.log(Object.is(-0, +0)); */

// ES7

// .includes()

const pets = ['cat', 'dog', 'fish'];
pets.includes('dog');
pets.includes('bird');

// Exponetial Operator
const square = (x) => x ** 2;
const cube = (y) => y ** 3;
square(2);
cube(3);

// ES8

// String Padding

// .padStart() .padEnd()
'Turtle'.padStart(10);
// returns ('    Turtle');

'Turtle'.padEnd(10);
// returns("Turtle    ");

// Trailing commas

const fun = (a, b, c, d) => {
	console.log(a);
};

fun(1, 2, 3, 4);

// Object.values Object.entries
// Object.keys

let twitterUser = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr.Grinch',
};

Object.keys(twitterUser).forEach((key, index) => {
	console.log(key, twitterUser[key]);
});

Object.values(twitterUser).forEach((value) => {
	console.log(value);
});

Object.entries(twitterUser).forEach((value) => {
	console.log(value);
});

Object.entries(twitterUser).map((value) => {
	return value[1] + value[0].replace('username', '');
});

// ES10

// .flat()

const es10Array = [1, 2, 3, 4, 5];
console.log(es10Array.flat());
const es10Array2 = [1, [2, 3], [4, 5]];
console.log(es10Array2.flat());
const es10Array3 = [1, [2, 3], [4, 5], [6, 7, [8]]];
console.log(es10Array3.flat(2)); // How many layers we want to flatten array

const jurassicPark = [
	['🦂', '🦟'],
	'🦠',
	'🐢',
	['🐍', '🦎'],
	[[[['🦖']]], '🦕'],
	['🐙', '🦑'],
];

jurassicPark.flat(50);

const entries = ['bob', 'kathy', , , , , 'cindy'];
entries.flat();

// flatMap()

const jurassicParkChaos = jurassicPark.flatMap((creature) => creature + '🦖');

let userEmail = '      test@gmail.com';
let userEmail2 = 'elvispresley@gmail.com            ';

console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

// fromEntries()

const userProfiles = [
	['commanderTim', 23],
	['derekZlander', 40],
	['hansel', 18],
];

const userObj1 = Object.fromEntries(userProfiles);
Object.entries(userObj1);

// try catch block updated
try {
	true + 'hi';
} catch {
	console.log('you messed up');
}

// Loops
const basket = ['cheese', 'bananas', 'chicken'];
const detailedBasket = {
	cheese: 1,
	bananas: 5,
	chicken: 10,
};

/* for (let i = 0; i < basket.length; i++) {
	console.log('for loop', basket[i]);
} */

/* basket.forEach((item) => console.log('forEach', item)); */

// for of
// Iterating - arrays, strings

for (item of basket) {
	console.log('for of', item);
}

// for in - loop over and see object properties. Not iterating, enumerating instead. Enumerating - Objects

for (item in detailedBasket) {
	console.log('for in', item);
}

// ES2020

// BigInt - New Type
// typeof BigInt

console.log(1n + 2n);

// Nullish Coalescing Operation ?? - Can be used instead of ||

let ash_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.4,
		weight: 6,
		type: 'lightning',
	},
};

let misty_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.4,
		weight: 6,
	},
};

let type_ash = ash_pokemon?.pikachu?.type;
console.log(type_ash);

let type_misty = misty_pokemon?.pikachu?.type ?? 'no type';
console.log(type_misty);

// Optional Chaining Operator ?.

/* let will_pokemon = {
	pikachu: {
		species: 'Mouse Pokemon',
		height: 0.4,
		weight: 6,
	},
};

let hayley_pokemon = {
	raichu: {
		species: 'Mouse Pokemon',
		height: 0.8,
		weight: 30,
	},
};

/* let weight = will_pokemon.pikachu.weight;
console.log('weight', weight); */
/* if (hayley_pokemon.pikachu && hayley_pokemon.pikachu.weight) {
	let raichu_weight = hayley_pokemon.pikachu.weight;
	console.log('raichu weight', raichu_weight);
} else {
	let raichu_weight = undefined;
	console.log('raichu weight', raichu_weight);
}

let weight3 = will_pokemon?.pikachu?.weight;

console.log(weight3); */

// Promise.allSettled
// globalThis

// Debugging

// Original Function

const flattened = [
	[0, 1],
	[2, 3],
	[4, 5],
].reduce((a, b) => a.concat(b), []);

// Console Log
const flattened = [
	[0, 1],
	[2, 3],
	[4, 5],
].reduce((accumulator, arr) => {
	console.log('array', arr);
	console.log('accumulator', accumulator);
	return accumulator.concat(arr);
}, []);

// Debugger

const flattened = [
	[0, 1],
	[2, 3],
	[4, 5],
].reduce((accumulator, arr) => {
	debugger;
	return accumulator.concat(arr);
}, []);

// Modules

// Inline script = Including JS in HTML file
// Script Tags - Link to script file in HTML - Need to make sure multiple files are added in correct order - Lack of dependancy resolution. Global namespaces can be problematic

// IIFE - Evaluates and then runs functions. Order of JS files still important
/* // js1 file
var myApp = {};
// js2 file
(function () {
	myApp.add = function (a, b) {
		return a + b;
	};
})(); */

// Browserify

// CommonJS + Browserify - Module Bundler. Creates a single file
/* // js1 file
module.exports = function add(a, b) {
	return a + b;
};

//js2
var add = require('./js1'); */

// ES6 + Webpack2

// js1 file
export const add = (a, b) => a + b;

//or
export default function add() {
	return a + b;
}

// js2
import { add } from './js1';
//or
import add from './js1';

// webpack

/* module.exports = {
	entry: './app/main.js',
	output: {
		path: '.dist',
		filename: 'bundle.js',
	},
}; */
