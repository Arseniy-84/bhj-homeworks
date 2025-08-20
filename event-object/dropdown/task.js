document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.dropdown').forEach(dropdown => {
		const value = dropdown.querySelector('.dropdown__value');
		const list = dropdown.querySelector('.dropdown__list');

		value.addEventListener('click', () => {
			list.classList.toggle('dropdown__list_active');
		});

		dropdown.querySelectorAll('.dropdown__item').forEach(item => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				value.textContent = item.textContent.trim();
				list.classList.remove('dropdown__list_active');
			});
		});
	});
});