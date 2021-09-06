var database = [
	{
		username: 'Bob',
		password: 'secret',
	},
	{
		username: 'John',
		password: '123',
	},
	{
		username: 'Emily',
		password: '456',
	},
];

var newsfeed = [
	{
		username: 'Haylz',
		timeline: 'Snagged a web dev job!',
	},
	{
		username: 'John',
		timeline: 'Petted a dog today, pretty cool',
	},
];

var usernamePrompt = prompt('What is your username?');
var passwordPrompt = prompt('What is your password?');

signIn(usernamePrompt, passwordPrompt);

function isUserValid(username, password) {
	for (let i = 0; i < database.length; i++) {
		if (
			database[i].username === username &&
			database[i].password === password
		) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		console.log('Incorrect username/password');
	}
}
