document.addEventListener('DOMContentLoaded', function() {

	const fontSizeControl = document.querySelector('.book__control_font-size');

	const book = document.getElementById('book');


	fontSizeControl.addEventListener('click', function(event) {

		event.preventDefault();


		if (event.target.classList.contains('font-size')) {

			const allSizeButtons = this.querySelectorAll('.font-size');
			allSizeButtons.forEach(button => {
				button.classList.remove('font-size_active');
			});


			event.target.classList.add('font-size_active');


			const size = event.target.dataset.size;


			book.classList.remove('book_fs-small', 'book_fs-big');


			if (size === 'small') {
				book.classList.add('book_fs-small');
			} else if (size === 'big') {
				book.classList.add('book_fs-big');
			}

		}
	});
});