const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve('Stuff Worked');
	} else {
		reject('Error, it broked');
	}
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'HIII');
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, 'Poop');
});

const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, 'I like cheese');
});

Promise.all([promise, promise2, promise3, promise4]).then((values) => {
	console.log(values);
});

promise
	.then((result) => {
		result + '!';
	})
	.then((result2) => {
		result2 + '?';
	})
	.catch(() => console.log('error!'))
	.then((result3) => {
		throw Error;
		console.log(result3 + '#');
	});

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(
	urls.map((url) => {
		return fetch(url).then((response) => response.json());
	})
)
	.then((results) => {
		console.log(results[0]);
		console.log(results[1]);
		console.log(results[2]);
	})
	.catch(() => console.log('error'));

// ES8 - Async/Await

// Async code
movePlayer(100, 'left')
	.then(() => movePlayer(400, 'left'))
	.then(() => movePlayer(10, 'Right'))
	.then(() => movePlayer(330, 'Left'));

// Async/Await

async function playerStart() {
	const firstMove = await movePlayer(100, 'Left'); // pause
	const secondMove = await movePlayer(400, 'Left'); // pause
	const thirdMove = await movePlayer(10, 'Right'); // pause
	const fourthMove = await movePlayer(330, 'Left'); // pause
}

fetch('https://jsonplaceholder.typicode.com/users')
	.then((response) => response.json())
	.then(console.log);

// Async / Await
async function fetchUsers() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();
	console.log(data);
}

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholdr.typicode.com/albums',
];

// Function Expression
const getData = async function () {
	try {
		const [users, posts, albums] = await Promise.all(
			urls.map((url) => {
				return fetch(url).then((response) => response.json());
			})
		);
		console.log('users', users);
		console.log('posts', posts);
		console.log('albums', albums);
	} catch (err) {
		console.log('Error', err);
	}
};

// ES9

// Object spread operator

// ES6
const array = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
	return a + b + c + d + e;
}

// ES9

const animals = {
	tiger: 23,
	lion: 5,
	panda: 10,
	gorilla: 35,
};

function objectSpread(p1, p2, p3) {
	console.log(p1);
	console.log(p2);
	console.log(p3);
}

const { tiger, lion, ...rest } = animals;

objectSpread(tiger, lion, rest);

// Finally

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(
	urls.map((url) => {
		return fetch(url).then((response) => response.json());
	})
)
	.then((results) => {
		throw Error;
		console.log(results[0]);
		console.log(results[1]);
		console.log(results[2]);
	})
	.catch((err) => console.log('error', err))
	.finally((data) => console.log('extra'));

// for await of loop

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholdr.typicode.com/albums',
];

// Function Expression
const getData = async function () {
	try {
		const [users, posts, albums] = await Promise.all(
			urls.map((url) => {
				return fetch(url).then((response) => response.json());
			})
		);
		console.log('users', users);
		console.log('posts', posts);
		console.log('albums', albums);
	} catch (err) {
		console.log('Error', err);
	}
};

// for of
const loopThroughUrls = (url) => {
	for (url of urls) {
		console.log(url);
	}
};

const getData2 = async function () {
	const arrayOfpromises = urls.map((url) => fetch(url));
	for await (let request of arrayOfpromises) {
		const data = await request.json();
		console.log(data);
	}
};

// allSettled - doesn't care about resolve or reject. Runs all promises regardless if resolved or rejected

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 6000));

const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000));

Promise.allSettled([promiseOne, promiseTwo])
	.then((data) => console.log(data))
	.catch((e) => console.log('something failed', e));
