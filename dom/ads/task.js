class Rotator {
	constructor(element) {
		this.element = element;
		this.cases = Array.from(element.querySelectorAll('.rotator__case'));
		this.currentIndex = 0;
		this.intervalId = null;
		this.init();
	}

	init() {

		this.startRotation();
	}

	startRotation() {

		const speed = parseInt(this.cases[this.currentIndex].getAttribute('data-speed')) || 1000;


		this.intervalId = setInterval(() => {
			this.rotate();
		}, speed);
	}

	rotate() {

		this.cases[this.currentIndex].classList.remove('rotator__case_active');


		this.currentIndex = (this.currentIndex + 1) % this.cases.length;


		this.cases[this.currentIndex].classList.add('rotator__case_active');


		const speed = parseInt(this.cases[this.currentIndex].getAttribute('data-speed')) || 1000;
		const color = this.cases[this.currentIndex].getAttribute('data-color');


		if (color) {
			this.cases[this.currentIndex].style.color = color;
		}


		clearInterval(this.intervalId);
		this.intervalId = setInterval(() => {
			this.rotate();
		}, speed);
	}

	destroy() {

		clearInterval(this.intervalId);
	}
}


document.addEventListener('DOMContentLoaded', () => {
	const rotators = document.querySelectorAll('.rotator');

	rotators.forEach(rotator => {
		new Rotator(rotator);
	});
});