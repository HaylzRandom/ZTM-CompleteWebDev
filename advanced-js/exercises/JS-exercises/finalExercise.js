/* Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. */

const roomArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// const sortedArray = [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591];

// Return into an individual array that is ordered

// Sort into order
// Once sorted, group similar values together

const answer = (arr) => {
	let newRoomArray = [];
	// Sorts array into numerical order - lowest to highest
	let sorted = arr.sort((a, b) => a - b);
	// Will call grouping function
	const groupSorted = groupArray(sorted);
	newRoomArray = groupSorted;
	return newRoomArray;
};

const groupArray = (array) => {
	for (i = 0; i < array.length; i++) {
		//debugger;
		// Select number trying to find in array
		let value = array[i];
		// Find where number last occurs
		let index = array.lastIndexOf(value);
		let count = index + 1 - i;

		// If more than 1 number found, group the values into their own array
		if (count > 1) {
			array.splice(i, count, Array(count).fill(value));
		}
	}
	return array;
};

console.log('Q1', answer(roomArray));

/* Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]] */

const mixArray = [1, '2', '3', 2];

const bonusAnswer = (arr) => {
	let sortedArray = [];
	// Sort array into numerical order
	const sorted = arr.sort((a, b) => a - b);
	// Find values that are of type number
	const numbers = sorted.filter((value) => typeof value === 'number');
	// Find values that are of type string
	const strings = sorted.filter((value) => typeof value === 'string');
	// Group together the number values together and string values toegther
	sortedArray.splice(0, 0, numbers, strings);

	return sortedArray;
};

console.log('Q1 Bonus', bonusAnswer(mixArray));

/* Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3] */

const q2 = [1, 2, 5, 5, 4, 2, 1, 7];

const q2Answer = (array, num) => {
	let answerArray = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === num) {
				return [array[i], array[j]];
			}
		}
	}
	console.log(answerArray);
	return answerArray;
};
console.log('Q2', q2Answer(q2, 11));

/* Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX. */

const convertToRGB = (hexCode) => {
	let q3Answer = '';
	hexCode = hexCode.replace('#', '');
	const red = parseInt(hexCode.substr(0, 2), 16);
	const green = parseInt(hexCode.substr(2, 2), 16);
	const blue = parseInt(hexCode.substr(4), 16);

	return (q3Answer = `rgb(${red}, ${green}, ${blue})`);
};

console.log('Q3', convertToRGB('#9900E6'));
