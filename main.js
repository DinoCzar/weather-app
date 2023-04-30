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

search.addEventListener('input', function (event) {
	const searchValue = event.target.value.trim();
	console.log(searchValue);
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
                    const locationInfo = element.name + ", " + element.state + ", " + element.country;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGlfa2V5ID0gJzU0MDVlM2U4YTY2YjdkMGI1NGU3Yjk0MDExNWQwN2Y5JztcblxuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuXG5mdW5jdGlvbiBzaG93RXJyb3IoaW5wdXQsIG1lc3NhZ2UpIHtcblx0Y29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbnB1dC5pZH0tZXJyb3JgKTtcblx0ZXJyb3JEaXYuaW5uZXJIVE1MID0gbWVzc2FnZTtcblx0aW5wdXQuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbn1cblxuZnVuY3Rpb24gc2hvd1N1Y2Nlc3MoaW5wdXQpIHtcblx0Y29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbnB1dC5pZH0tZXJyb3JgKTtcblx0ZXJyb3JEaXYuaW5uZXJIVE1MID0gJyc7XG5cdGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2VhcmNoKCkge1xuXHRjb25zdCBzZWFyY2hWYWx1ZSA9IHNlYXJjaC52YWx1ZS50cmltKCk7XG5cdGlmICghc2VhcmNoVmFsdWUpIHtcblx0XHRzaG93RXJyb3Ioc2VhcmNoLCAnUGxlYXNlIGVudGVyIGEgc2VhcmNoIHRlcm0nKTtcblx0fSBlbHNlIHtcblx0XHRzaG93U3VjY2VzcyhzZWFyY2gpO1xuXHR9XG59XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdmFsaWRhdGVTZWFyY2gpO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0Y29uc3Qgc2VhcmNoVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpO1xuXHRjb25zb2xlLmxvZyhzZWFyY2hWYWx1ZSk7XG5cdHZhbGlkYXRlU2VhcmNoKCk7XG5cdGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvcicpO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0Y29uc3QgYXBpU3RyaW5nID1cblx0XHRcdCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPScgK1xuXHRcdFx0c2VhcmNoVmFsdWUgK1xuXHRcdFx0JyZsaW1pdD01JmFwcGlkPScgK1xuXHRcdFx0YXBpX2tleTtcblx0XHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpU3RyaW5nLCB7IG1vZGU6ICdjb3JzJyB9KTtcblx0XHRcdGNvbnN0IHNlYXJjaEFycmF5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoc2VhcmNoQXJyYXkpKSB7XG5cdFx0XHRcdHNlYXJjaEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb25JbmZvID0gZWxlbWVudC5uYW1lICsgXCIsIFwiICsgZWxlbWVudC5zdGF0ZSArIFwiLCBcIiArIGVsZW1lbnQuY291bnRyeTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhsb2NhdGlvbkluZm8pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Z2V0TG9jYXRpb24oKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGRhdGEuJyk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LWltYWdlJyk7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKCdnZXQgd2VhdGhlciBmcm9tIGFwaScpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=