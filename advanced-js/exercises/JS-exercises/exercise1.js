// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
	var a = 5;
	if (a > 1) {
		a = 3;
	}
	alert(a);
}

/* Q1 - The value shown will be 3 */

//#2
var a = 0;
function q2() {
	a = 5;
}

function q22() {
	alert(a);
}

/* Q2 - The value shown will be 5. First run function q2 before q22 */

//#3
function q3() {
	window.a = 'hello';
}

function q32() {
	alert(a);
}

/* Q3 - Running q3 first and then q32 will display 'hello' */

//#4
var a = 1;
function q4() {
	var a = 'test';
	alert(a);
}

/* Q4 - Will return 'test' as it uses local scope variable of function rather than global*/

//#5
var a = 2;
if (true) {
	var a = 5;
	alert(a);
}
alert(a);

/* Q5 - a will be 5 */
