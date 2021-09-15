import fs from 'fs';

// Read File

// Asynchronous - Most useful with routes
fs.readFile('./hello.txt', (err, data) => {
	if (err) {
		console.log('error');
	}
	console.log('Async', data.toString('utf8'));
});

// Synchronous - Waits
const file = fs.readFileSync('./hello.txt');

console.log('Sync', file.toString());

// Append
/* fs.appendFile('./hello.txt', ' This is very cool!', (err) => {
	if (err) {
		console.log(err);
	}
}); */

// Write
fs.writeFile('bye.txt', 'Bye bye! See ya real soon!', (err) => {
	if (err) {
		console.log('Error');
	}
});

// Delete
fs.unlink('./bye.txt', (err) => {
	if (err) {
		console.log('Error');
	}
	console.log('Deleted');
});
