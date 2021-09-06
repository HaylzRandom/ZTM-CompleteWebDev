4 + 3;
if (4 + 3 === 7) {
	console.log('Wow you so smart!');
}

// Functions

// Function Declaration
function sayHello() {
	console.log('Hello World');
}

sayHello();

// // Function Expression - Anonymous Function

var sayBye = function () {
	console.log('Bye');
};

sayBye();

function sing(song) {
	console.log(song);
}

sing('Ladeda');
sing('Hello');
sing("I'm a little teapot");

// function multiply(a, b) {
	if (a > 10 || b > 10) {
		return 'That is too hard!';
	} else {
		return a * b;
	}
}

alert(multiply(5, 40));

// Arrays

var arr = ['cat', 'dog', 'mouse', 'fish'];

console.log(arr[0]);

var arrWithin = [
	['cat', 'dog', 'fish'],
	['tiger', 'lion', 'monkey'],
];

console.log(arrWithin[1][0]);

// Methods
arr.shift();
console.log(arr);

arr.pop();
console.log(arr);

arr.push('zebra');
console.log(arr);

var arr1 = [1, 2, 3];
var arr2 = [3, 4, 5];

console.log(arr1.concat(arr2));

// Objects

var user = {
	name: 'Hayley',
	age: '31',
	hobby: 'Video Games',
	isMarried: false,
	langauges: ['html', 'css', 'javascript'],
	program: function () {
		console.log('Beep boop');
	},
};

console.log(user);

console.log(user.name);

user.favouriteFood = 'cheese';

console.log(user);

console.log(user.langauges[1]);

user.program();

var list = [
	{
		username: 'haylz',
		password: 'secret',
	},
	{
		username: 'bond',
		password: 'doubleoseven',
	},
	{
		username: 'mickey',
		password: 'cheese',
	},
];

console.log(list);
console.log(list[0].password);

// Loops

// For Loop

var todos = ['clean room', 'brush teeth', 'exercise', 'study', 'sleep'];

console.log(todos);

var todosLength = todos.length;

for (let i = 0; i < todosLength; i++) {
	todos.pop();
}

console.log(todos);

// While loop

var counterOne = 10;

while (counterOne > 0) {
	counterOne--;
}

// Do While Loop

var counterTwo = 10;

do {
	console.log(counterTwo);
	counterTwo--;
} while (counterTwo > 0);

// forEach Loop

var animals = ['monkey', 'lion', 'tiger', 'elephant', 'zebra'];
var pets = ['dog', 'cat', 'rabbit', 'fish', 'squirtle'];

animals.forEach(logAnimals);
pets.forEach(logAnimals);

function logAnimals(animal, idx) {
	console.log(animal, idx);
}
