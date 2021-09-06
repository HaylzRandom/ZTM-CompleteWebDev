const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const ul = document.querySelector('ul');

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListEnter);

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListEnter(e) {
	if (inputLength() > 0 && e.code === 'Enter') {
		createListElement();
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	const li = document.createElement('li');

	li.innerText = input.value;

	li.addEventListener('click', () => {
		li.classList.toggle('done');
	});

	addDeleteBtn(li);

	ul.appendChild(li);

	input.value = '';
}

function addDeleteBtn(li) {
	const deleteBtn = document.createElement('button');
	deleteBtn.innerHTML = 'Delete!';
	deleteBtn.classList.add('deleteBtn');
	deleteBtn.addEventListener('click', () => {
		li.remove();
	});
	li.append(deleteBtn);
}
