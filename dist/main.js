/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const api_key = '5405e3e8a66b7d0b54e7b940115d07f9';

const search = document.getElementById('search');

function showError(input, message) {
	const errorDiv = document.getElementById(`${input.id}-error`);
	errorDiv.innerHTML = message;
	input.classList.add('error');
}

function showSuccess(input) {
	const errorDiv = document.getElementById(`${input.id}-error`);
	errorDiv.innerHTML = '';
	input.classList.remove('error');
}

function validateSearch() {
	const searchValue = search.value.trim();
	if (!searchValue) {
		showError(search, 'Please enter a search term');
	} else {
		showSuccess(search);
	}
}

search.addEventListener('blur', validateSearch);

const container = document.querySelector('#container');
const button = document.querySelector('#new-image');
button.addEventListener('click', () => {
	validateSearch();
	const errors = document.querySelectorAll('.error');

	if (errors.length === 0) {
		const searchValue = search.value.trim();
		const apiString =
			'http://api.openweathermap.org/geo/1.0/direct?q=' +
			searchValue +
			'&limit=5&appid=' +
			api_key;
		const img = document.createElement('img');
		async function getLocation() {
			const response = await fetch(apiString, { mode: 'cors' });
			const locationData = await response.json();
			console.log(locationData);
		}
		getLocation().catch(function (err) {
			alert('An error occurred while fetching the data.');
		});
	}
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxjQUFjO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpX2tleSA9ICc1NDA1ZTNlOGE2NmI3ZDBiNTRlN2I5NDAxMTVkMDdmOSc7XG5cbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcblxuZnVuY3Rpb24gc2hvd0Vycm9yKGlucHV0LCBtZXNzYWdlKSB7XG5cdGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5wdXQuaWR9LWVycm9yYCk7XG5cdGVycm9yRGl2LmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cdGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dTdWNjZXNzKGlucHV0KSB7XG5cdGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5wdXQuaWR9LWVycm9yYCk7XG5cdGVycm9yRGl2LmlubmVySFRNTCA9ICcnO1xuXHRpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNlYXJjaCgpIHtcblx0Y29uc3Qgc2VhcmNoVmFsdWUgPSBzZWFyY2gudmFsdWUudHJpbSgpO1xuXHRpZiAoIXNlYXJjaFZhbHVlKSB7XG5cdFx0c2hvd0Vycm9yKHNlYXJjaCwgJ1BsZWFzZSBlbnRlciBhIHNlYXJjaCB0ZXJtJyk7XG5cdH0gZWxzZSB7XG5cdFx0c2hvd1N1Y2Nlc3Moc2VhcmNoKTtcblx0fVxufVxuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHZhbGlkYXRlU2VhcmNoKTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1pbWFnZScpO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHR2YWxpZGF0ZVNlYXJjaCgpO1xuXHRjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3InKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuXHRcdGNvbnN0IHNlYXJjaFZhbHVlID0gc2VhcmNoLnZhbHVlLnRyaW0oKTtcblx0XHRjb25zdCBhcGlTdHJpbmcgPVxuXHRcdFx0J2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JyArXG5cdFx0XHRzZWFyY2hWYWx1ZSArXG5cdFx0XHQnJmxpbWl0PTUmYXBwaWQ9JyArXG5cdFx0XHRhcGlfa2V5O1xuXHRcdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlTdHJpbmcsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXHRcdFx0Y29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0Y29uc29sZS5sb2cobG9jYXRpb25EYXRhKTtcblx0XHR9XG5cdFx0Z2V0TG9jYXRpb24oKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGRhdGEuJyk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9