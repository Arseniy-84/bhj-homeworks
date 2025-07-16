const cookie = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');


let clicks = 0;


cookie.addEventListener('click', function() {

	clicks++;
	clickCounter.textContent = clicks;


	if (cookie.width === 200) {
		cookie.width = 180;
	} else {
		cookie.width = 200;
	}

	this.style.transform = 'scale(0.95)';
	setTimeout(() => {
		this.style.transform = 'scale(1)';
	}, 100);
});