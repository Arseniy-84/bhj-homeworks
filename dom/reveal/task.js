document.addEventListener('DOMContentLoaded', function() {
	const reveals = document.querySelectorAll('.reveal');

	function checkReveal() {
		const windowHeight = window.innerHeight;

		reveals.forEach(reveal => {
			const elementTop = reveal.getBoundingClientRect().top;
			const elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
				reveal.classList.add('reveal_active');
			} else {
				reveal.classList.remove('reveal_active');
			}
		});
	}

		checkReveal();

		window.addEventListener('scroll', checkReveal);

		window.addEventListener('resize', checkReveal);
});