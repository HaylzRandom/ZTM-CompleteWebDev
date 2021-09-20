const toggles = document.querySelectorAll('.question-toggle');

toggles.forEach((toggle) => {
	toggle.addEventListener('click', () => {
		console.log('click');
		toggle.parentNode.classList.toggle('active');
	});
});
