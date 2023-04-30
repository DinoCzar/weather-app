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
					console.log(locationInfo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaV9rZXkgPSAnNTQwNWUzZThhNjZiN2QwYjU0ZTdiOTQwMTE1ZDA3ZjknO1xuXG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG5jb25zdCBzZWFyY2hTdWdnZXN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtc3VnZ2VzdGlvbnMnKTtcblxuZnVuY3Rpb24gc2hvd0Vycm9yKGlucHV0LCBtZXNzYWdlKSB7XG5cdGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5wdXQuaWR9LWVycm9yYCk7XG5cdGVycm9yRGl2LmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cdGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dTdWNjZXNzKGlucHV0KSB7XG5cdGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5wdXQuaWR9LWVycm9yYCk7XG5cdGVycm9yRGl2LmlubmVySFRNTCA9ICcnO1xuXHRpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNlYXJjaCgpIHtcblx0Y29uc3Qgc2VhcmNoVmFsdWUgPSBzZWFyY2gudmFsdWUudHJpbSgpO1xuXHRpZiAoIXNlYXJjaFZhbHVlKSB7XG5cdFx0c2hvd0Vycm9yKHNlYXJjaCwgJ1BsZWFzZSBlbnRlciBhIHNlYXJjaCB0ZXJtJyk7XG5cdH0gZWxzZSB7XG5cdFx0c2hvd1N1Y2Nlc3Moc2VhcmNoKTtcblx0fVxufVxuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHZhbGlkYXRlU2VhcmNoKTtcblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdHNlYXJjaFN1Z2dlc3Rpb25zLmlubmVySFRNTCA9ICcnO1xuXG5cdGNvbnN0IHNlYXJjaFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKTtcblx0dmFsaWRhdGVTZWFyY2goKTtcblx0Y29uc3QgZXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yJyk7XG5cblx0aWYgKGVycm9ycy5sZW5ndGggPT09IDApIHtcblx0XHRjb25zdCBhcGlTdHJpbmcgPVxuXHRcdFx0J2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JyArXG5cdFx0XHRzZWFyY2hWYWx1ZSArXG5cdFx0XHQnJmxpbWl0PTUmYXBwaWQ9JyArXG5cdFx0XHRhcGlfa2V5O1xuXHRcdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlTdHJpbmcsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXHRcdFx0Y29uc3Qgc2VhcmNoQXJyYXkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShzZWFyY2hBcnJheSkpIHtcblx0XHRcdFx0c2VhcmNoQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGxvY2F0aW9uSW5mbyA9XG5cdFx0XHRcdFx0XHRlbGVtZW50Lm5hbWUgKyAnLCAnICsgZWxlbWVudC5zdGF0ZSArICcsICcgKyBlbGVtZW50LmNvdW50cnk7XG5cdFx0XHRcdFx0Y29uc3Qgc3VnZ2VzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0XHRcdFx0c3VnZ2VzdGlvbi50ZXh0Q29udGVudCA9IGxvY2F0aW9uSW5mbztcblx0XHRcdFx0XHRzZWFyY2hTdWdnZXN0aW9ucy5hcHBlbmRDaGlsZChzdWdnZXN0aW9uKTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhsb2NhdGlvbkluZm8pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Z2V0TG9jYXRpb24oKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGRhdGEuJyk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LWltYWdlJyk7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKCdnZXQgd2VhdGhlciBmcm9tIGFwaScpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=