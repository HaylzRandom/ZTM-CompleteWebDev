var button = document.getElementById('enter');
var input = document.getElementById('user-input');
var list = document.querySelector('ul');

button.addEventListener('click', addListClick);

input.addEventListener('keypress', addListEnter);

function inputLength() {
	return input.value.length;
}

function createListItem() {
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	list.appendChild(li);
	input.value = '';
}

function addListClick() {
	if (inputLength() > 0) {
		createListItem();
	}
}

function addListEnter(e) {
	if (e.code === 'Enter') {
		if (inputLength() > 0) {
			createListItem();
		}
	}
}
