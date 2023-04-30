/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const api_key = '5405e3e8a66b7d0b54e7b940115d07f9';

const search = document.getElementById('search');
const searchSuggestions = document.getElementById('search-suggestions');

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

search.addEventListener('input', function (event) {
	searchSuggestions.innerHTML = '';

	const searchValue = event.target.value.trim();
	validateSearch();
	const errors = document.querySelectorAll('.error');

	if (errors.length === 0) {
		const apiString =
			'http://api.openweathermap.org/geo/1.0/direct?q=' +
			searchValue +
			'&limit=5&appid=' +
			api_key;
		const img = document.createElement('img');
		async function getLocation() {
			const response = await fetch(apiString, { mode: 'cors' });
			const searchArray = await response.json();
			if (Array.isArray(searchArray)) {
				searchArray.forEach((element) => {
					const locationInfo =
						element.name + ', ' + element.state + ', ' + element.country;
					const suggestion = document.createElement('li');
					suggestion.textContent = locationInfo;
					searchSuggestions.appendChild(suggestion);
					suggestion.addEventListener('click', () => {
						search.value = locationInfo;
                        searchSuggestions.innerHTML = '';
					});
				});
			}
		}
		getLocation().catch(function (err) {
			alert('An error occurred while fetching the data.');
		});
	}
});

const container = document.querySelector('#container');
const button = document.querySelector('#new-image');
button.addEventListener('click', () => {
	console.log('get weather from api');
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpX2tleSA9ICc1NDA1ZTNlOGE2NmI3ZDBiNTRlN2I5NDAxMTVkMDdmOSc7XG5cbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbmNvbnN0IHNlYXJjaFN1Z2dlc3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1zdWdnZXN0aW9ucycpO1xuXG5mdW5jdGlvbiBzaG93RXJyb3IoaW5wdXQsIG1lc3NhZ2UpIHtcblx0Y29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbnB1dC5pZH0tZXJyb3JgKTtcblx0ZXJyb3JEaXYuaW5uZXJIVE1MID0gbWVzc2FnZTtcblx0aW5wdXQuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbn1cblxuZnVuY3Rpb24gc2hvd1N1Y2Nlc3MoaW5wdXQpIHtcblx0Y29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbnB1dC5pZH0tZXJyb3JgKTtcblx0ZXJyb3JEaXYuaW5uZXJIVE1MID0gJyc7XG5cdGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2VhcmNoKCkge1xuXHRjb25zdCBzZWFyY2hWYWx1ZSA9IHNlYXJjaC52YWx1ZS50cmltKCk7XG5cdGlmICghc2VhcmNoVmFsdWUpIHtcblx0XHRzaG93RXJyb3Ioc2VhcmNoLCAnUGxlYXNlIGVudGVyIGEgc2VhcmNoIHRlcm0nKTtcblx0fSBlbHNlIHtcblx0XHRzaG93U3VjY2VzcyhzZWFyY2gpO1xuXHR9XG59XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdmFsaWRhdGVTZWFyY2gpO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0c2VhcmNoU3VnZ2VzdGlvbnMuaW5uZXJIVE1MID0gJyc7XG5cblx0Y29uc3Qgc2VhcmNoVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpO1xuXHR2YWxpZGF0ZVNlYXJjaCgpO1xuXHRjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3InKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuXHRcdGNvbnN0IGFwaVN0cmluZyA9XG5cdFx0XHQnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0nICtcblx0XHRcdHNlYXJjaFZhbHVlICtcblx0XHRcdCcmbGltaXQ9NSZhcHBpZD0nICtcblx0XHRcdGFwaV9rZXk7XG5cdFx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0YXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVN0cmluZywgeyBtb2RlOiAnY29ycycgfSk7XG5cdFx0XHRjb25zdCBzZWFyY2hBcnJheSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHNlYXJjaEFycmF5KSkge1xuXHRcdFx0XHRzZWFyY2hBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgbG9jYXRpb25JbmZvID1cblx0XHRcdFx0XHRcdGVsZW1lbnQubmFtZSArICcsICcgKyBlbGVtZW50LnN0YXRlICsgJywgJyArIGVsZW1lbnQuY291bnRyeTtcblx0XHRcdFx0XHRjb25zdCBzdWdnZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRcdFx0XHRzdWdnZXN0aW9uLnRleHRDb250ZW50ID0gbG9jYXRpb25JbmZvO1xuXHRcdFx0XHRcdHNlYXJjaFN1Z2dlc3Rpb25zLmFwcGVuZENoaWxkKHN1Z2dlc3Rpb24pO1xuXHRcdFx0XHRcdHN1Z2dlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWFyY2gudmFsdWUgPSBsb2NhdGlvbkluZm87XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hTdWdnZXN0aW9ucy5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGdldExvY2F0aW9uKCkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuXHRcdFx0YWxlcnQoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIHRoZSBkYXRhLicpO1xuXHRcdH0pO1xuXHR9XG59KTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1pbWFnZScpO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRjb25zb2xlLmxvZygnZ2V0IHdlYXRoZXIgZnJvbSBhcGknKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9