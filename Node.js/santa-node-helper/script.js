import fs from 'fs';

function question1() {
	fs.readFile('./santa.txt', 'utf8', (err, data) => {
		console.time('Santa');
		if (err) {
			console.log('Error');
		}

		let floorNumber = 0;
		let floorLevel = data.split('');
		//console.log(floorLevel);

		/* for (let i = 0; i < floorLevel.length; i++) {
		if (floorLevel[i] === '(') {
			floorNumber++;
			//console.log(floorLevel[i], floor);
		} else {
			floorNumber--;
			//console.log(floorLevel[i], floor);
		}
	} */

		for (const floor of floorLevel) {
			if (floor === '(') {
				floorNumber++;
			} else {
				floorNumber--;
			}
		}

		console.log(floorNumber);
		console.timeEnd('Santa');
	});
}

// Question 2
function reachedBasement() {
	fs.readFile('./santa.txt', 'utf8', (err, data) => {
		console.time('Santa');
		if (err) {
			console.log('Error');
		}

		let floorNumber = 0;
		let basementCount = 0;
		let floorLevel = data.split('');
		const answer = floorLevel.some((currentValue) => {
			if (currentValue === '(') {
				floorNumber++;
			} else {
				floorNumber--;
			}
			basementCount++;
			return floorNumber < 0;
		});

		console.log('Basement Reached!', basementCount);
		console.timeEnd('Santa');
	});
}

question1();
reachedBasement();
