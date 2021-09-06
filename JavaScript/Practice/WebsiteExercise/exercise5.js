function checkDriverAge(age) {
	if (age < 18) {
		return 'Sorry, you are too young to drive this car. Powering Off';
	} else if (age > 18) {
		return 'Powering On. Emjoy the ride!';
	} else {
		return 'Congrats on your first year of driving! Enjoy the ride.';
	}
}

console.log(checkDriverAge(18));
console.log(checkDriverAge(14));
console.log(checkDriverAge(26));
