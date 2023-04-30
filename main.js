/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/get-weather.js":
/*!****************************!*\
  !*** ./src/get-weather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getWeather(city, latitude, longitude, api_key) {
	const apiStringWeather =
		'https://api.openweathermap.org/data/2.5/weather?lat=' +
		latitude +
		'&lon=' +
		longitude +
		'&appid=' +
		api_key + '&units=imperial';
	async function retreiveWeatherData() {
		const response = await fetch(apiStringWeather, { mode: 'cors' });
		const weatherArray = await response.json();

        console.log(weatherArray)

		const main = weatherArray.weather[0].main;
		const description = weatherArray.weather[0].description;
		const temp = Math.floor(weatherArray.main.temp);
		const tempMin = Math.floor(weatherArray.main.temp_min);
		const tempMax = Math.floor(weatherArray.main.temp_max);
		const humidity = Math.floor(weatherArray.main.humidity);
		const windSpeed = Math.floor(weatherArray.wind.speed);
		displayWeather(
			city,
			main,
			description,
			temp,
			tempMin,
			tempMax,
			humidity,
			windSpeed
		);
	}
	retreiveWeatherData().catch(function (err) {
		alert('An error occurred while fetching the data.');
	});
}

const displayDiv = document.getElementById('display-div');
const displayCity = document.querySelector('#city');
const displayMain = document.querySelector('#main');
const displayDescription = document.querySelector('#description');
const displayTemp = document.querySelector('#temp');
const displayTempMin = document.querySelector('#temp-min');
const displayTempMax = document.querySelector('#temp-max');
const displayHumidity = document.querySelector('#humidity');
const displayWindSpeed = document.querySelector('#wind-speed');

function displayWeather(
	city,
	main,
	description,
	temp,
	tempMin,
	tempMax,
	humidity,
	windSpeed
) {
	displayCity.textContent = city;
	displayMain.textContent = main;
	displayDescription.textContent = description;
	displayTemp.textContent = 'Temperature: ' + temp + '\u00B0F';
	displayTempMin.textContent = 'Low: ' + tempMin + '\u00B0F';
	displayTempMax.textContent = 'High: ' + tempMax + '\u00B0F';
	displayHumidity.textContent = 'Humidity: ' + humidity + '%';
	displayWindSpeed.textContent = 'Wind: ' + windSpeed + 'mph';
	const cssSelector = main.charAt(0).toLowerCase() + main.slice(1);
	displayDiv.classList.add(cssSelector);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-weather */ "./src/get-weather.js");


const api_key = '5405e3e8a66b7d0b54e7b940115d07f9';

const displayDiv = document.getElementById('display-div');
const container = document.getElementById('container');
const search = document.getElementById('search');
const searchSuggestions = document.getElementById('search-suggestions');
const displayMain = document.querySelector('#main');
const displayCity = document.querySelector('#city');
const displayDescription = document.querySelector('#description');
const displayTemp = document.querySelector('#temp');
const displayTempMin = document.querySelector('#temp-min');
const displayTempMax = document.querySelector('#temp-max');
const displayHumidity = document.querySelector('#humidity');
const displayWindSpeed = document.querySelector('#wind-speed');

displayDiv.classList.add('background-image');
container.style.display = 'none';

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
	displayDiv.className = '';
	searchSuggestions.innerHTML = '';
	displayCity.innerHTML = '';
	displayMain.innerHTML = '';
	displayDescription.innerHTML = '';
	displayTemp.innerHTML = '';
	displayTempMin.innerHTML = '';
	displayTempMax.innerHTML = '';
	displayHumidity.innerHTML = '';
	displayWindSpeed.innerHTML = '';
	displayDiv.classList.add('background-image');
	container.style.display = 'none';

	const searchValue = event.target.value.trim();
	validateSearch();
	const errors = document.querySelectorAll('.error');

	if (errors.length === 0) {
		const apiStringLocation =
			'http://api.openweathermap.org/geo/1.0/direct?q=' +
			searchValue +
			'&limit=5&appid=' +
			api_key;
		const img = document.createElement('img');
		async function getLocation() {
			const response = await fetch(apiStringLocation, { mode: 'cors' });
			const searchArray = await response.json();
			if (Array.isArray(searchArray)) {
				searchArray.forEach((element) => {
					const city = element.name;
					const state = element.state;
					const country = element.country;
					const latitude = element.lat;
					const longitude = element.lon;
					const locationInfo = city + ', ' + state + ', ' + country;
					const suggestion = document.createElement('li');
					suggestion.textContent = locationInfo;
					searchSuggestions.appendChild(suggestion);
					suggestion.addEventListener('click', () => {
						search.value = locationInfo;
						searchSuggestions.innerHTML = '';
						(0,_get_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(city, latitude, longitude, api_key);
						search.value = '';
                        container.style.display = 'grid';
					});
				});
			}
		}
		getLocation().catch(function (err) {
			alert('An error occurred while fetching the data.');
		});
	}
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNyRTFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQVU7QUFDaEI7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2V0LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHksIGxhdGl0dWRlLCBsb25naXR1ZGUsIGFwaV9rZXkpIHtcblx0Y29uc3QgYXBpU3RyaW5nV2VhdGhlciA9XG5cdFx0J2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0nICtcblx0XHRsYXRpdHVkZSArXG5cdFx0JyZsb249JyArXG5cdFx0bG9uZ2l0dWRlICtcblx0XHQnJmFwcGlkPScgK1xuXHRcdGFwaV9rZXkgKyAnJnVuaXRzPWltcGVyaWFsJztcblx0YXN5bmMgZnVuY3Rpb24gcmV0cmVpdmVXZWF0aGVyRGF0YSgpIHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVN0cmluZ1dlYXRoZXIsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXHRcdGNvbnN0IHdlYXRoZXJBcnJheSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyQXJyYXkpXG5cblx0XHRjb25zdCBtYWluID0gd2VhdGhlckFycmF5LndlYXRoZXJbMF0ubWFpbjtcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IHdlYXRoZXJBcnJheS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXHRcdGNvbnN0IHRlbXAgPSBNYXRoLmZsb29yKHdlYXRoZXJBcnJheS5tYWluLnRlbXApO1xuXHRcdGNvbnN0IHRlbXBNaW4gPSBNYXRoLmZsb29yKHdlYXRoZXJBcnJheS5tYWluLnRlbXBfbWluKTtcblx0XHRjb25zdCB0ZW1wTWF4ID0gTWF0aC5mbG9vcih3ZWF0aGVyQXJyYXkubWFpbi50ZW1wX21heCk7XG5cdFx0Y29uc3QgaHVtaWRpdHkgPSBNYXRoLmZsb29yKHdlYXRoZXJBcnJheS5tYWluLmh1bWlkaXR5KTtcblx0XHRjb25zdCB3aW5kU3BlZWQgPSBNYXRoLmZsb29yKHdlYXRoZXJBcnJheS53aW5kLnNwZWVkKTtcblx0XHRkaXNwbGF5V2VhdGhlcihcblx0XHRcdGNpdHksXG5cdFx0XHRtYWluLFxuXHRcdFx0ZGVzY3JpcHRpb24sXG5cdFx0XHR0ZW1wLFxuXHRcdFx0dGVtcE1pbixcblx0XHRcdHRlbXBNYXgsXG5cdFx0XHRodW1pZGl0eSxcblx0XHRcdHdpbmRTcGVlZFxuXHRcdCk7XG5cdH1cblx0cmV0cmVpdmVXZWF0aGVyRGF0YSgpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcblx0XHRhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGRhdGEuJyk7XG5cdH0pO1xufVxuXG5jb25zdCBkaXNwbGF5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktZGl2Jyk7XG5jb25zdCBkaXNwbGF5Q2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5Jyk7XG5jb25zdCBkaXNwbGF5TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG5jb25zdCBkaXNwbGF5RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbmNvbnN0IGRpc3BsYXlUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcbmNvbnN0IGRpc3BsYXlUZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAtbWluJyk7XG5jb25zdCBkaXNwbGF5VGVtcE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLW1heCcpO1xuY29uc3QgZGlzcGxheUh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5Jyk7XG5jb25zdCBkaXNwbGF5V2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQnKTtcblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoXG5cdGNpdHksXG5cdG1haW4sXG5cdGRlc2NyaXB0aW9uLFxuXHR0ZW1wLFxuXHR0ZW1wTWluLFxuXHR0ZW1wTWF4LFxuXHRodW1pZGl0eSxcblx0d2luZFNwZWVkXG4pIHtcblx0ZGlzcGxheUNpdHkudGV4dENvbnRlbnQgPSBjaXR5O1xuXHRkaXNwbGF5TWFpbi50ZXh0Q29udGVudCA9IG1haW47XG5cdGRpc3BsYXlEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXHRkaXNwbGF5VGVtcC50ZXh0Q29udGVudCA9ICdUZW1wZXJhdHVyZTogJyArIHRlbXAgKyAnXFx1MDBCMEYnO1xuXHRkaXNwbGF5VGVtcE1pbi50ZXh0Q29udGVudCA9ICdMb3c6ICcgKyB0ZW1wTWluICsgJ1xcdTAwQjBGJztcblx0ZGlzcGxheVRlbXBNYXgudGV4dENvbnRlbnQgPSAnSGlnaDogJyArIHRlbXBNYXggKyAnXFx1MDBCMEYnO1xuXHRkaXNwbGF5SHVtaWRpdHkudGV4dENvbnRlbnQgPSAnSHVtaWRpdHk6ICcgKyBodW1pZGl0eSArICclJztcblx0ZGlzcGxheVdpbmRTcGVlZC50ZXh0Q29udGVudCA9ICdXaW5kOiAnICsgd2luZFNwZWVkICsgJ21waCc7XG5cdGNvbnN0IGNzc1NlbGVjdG9yID0gbWFpbi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG1haW4uc2xpY2UoMSk7XG5cdGRpc3BsYXlEaXYuY2xhc3NMaXN0LmFkZChjc3NTZWxlY3Rvcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vZ2V0LXdlYXRoZXInO1xuXG5jb25zdCBhcGlfa2V5ID0gJzU0MDVlM2U4YTY2YjdkMGI1NGU3Yjk0MDExNWQwN2Y5JztcblxuY29uc3QgZGlzcGxheURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5LWRpdicpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuY29uc3Qgc2VhcmNoU3VnZ2VzdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXN1Z2dlc3Rpb25zJyk7XG5jb25zdCBkaXNwbGF5TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG5jb25zdCBkaXNwbGF5Q2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5Jyk7XG5jb25zdCBkaXNwbGF5RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbmNvbnN0IGRpc3BsYXlUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcbmNvbnN0IGRpc3BsYXlUZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAtbWluJyk7XG5jb25zdCBkaXNwbGF5VGVtcE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLW1heCcpO1xuY29uc3QgZGlzcGxheUh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5Jyk7XG5jb25zdCBkaXNwbGF5V2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQnKTtcblxuZGlzcGxheURpdi5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWltYWdlJyk7XG5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuZnVuY3Rpb24gc2hvd0Vycm9yKGlucHV0LCBtZXNzYWdlKSB7XG5cdGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5wdXQuaWR9LWVycm9yYCk7XG5cdGVycm9yRGl2LmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cdGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dTdWNjZXNzKGlucHV0KSB7XG5cdGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5wdXQuaWR9LWVycm9yYCk7XG5cdGVycm9yRGl2LmlubmVySFRNTCA9ICcnO1xuXHRpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNlYXJjaCgpIHtcblx0Y29uc3Qgc2VhcmNoVmFsdWUgPSBzZWFyY2gudmFsdWUudHJpbSgpO1xuXHRpZiAoIXNlYXJjaFZhbHVlKSB7XG5cdFx0c2hvd0Vycm9yKHNlYXJjaCwgJ1BsZWFzZSBlbnRlciBhIHNlYXJjaCB0ZXJtJyk7XG5cdH0gZWxzZSB7XG5cdFx0c2hvd1N1Y2Nlc3Moc2VhcmNoKTtcblx0fVxufVxuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHZhbGlkYXRlU2VhcmNoKTtcblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdGRpc3BsYXlEaXYuY2xhc3NOYW1lID0gJyc7XG5cdHNlYXJjaFN1Z2dlc3Rpb25zLmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5Q2l0eS5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheU1haW4uaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheVRlbXAuaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlUZW1wTWluLmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5VGVtcE1heC5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheUh1bWlkaXR5LmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5V2luZFNwZWVkLmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5RGl2LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtaW1hZ2UnKTtcblx0Y29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cblx0Y29uc3Qgc2VhcmNoVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpO1xuXHR2YWxpZGF0ZVNlYXJjaCgpO1xuXHRjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3InKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuXHRcdGNvbnN0IGFwaVN0cmluZ0xvY2F0aW9uID1cblx0XHRcdCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPScgK1xuXHRcdFx0c2VhcmNoVmFsdWUgK1xuXHRcdFx0JyZsaW1pdD01JmFwcGlkPScgK1xuXHRcdFx0YXBpX2tleTtcblx0XHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpU3RyaW5nTG9jYXRpb24sIHsgbW9kZTogJ2NvcnMnIH0pO1xuXHRcdFx0Y29uc3Qgc2VhcmNoQXJyYXkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShzZWFyY2hBcnJheSkpIHtcblx0XHRcdFx0c2VhcmNoQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGNpdHkgPSBlbGVtZW50Lm5hbWU7XG5cdFx0XHRcdFx0Y29uc3Qgc3RhdGUgPSBlbGVtZW50LnN0YXRlO1xuXHRcdFx0XHRcdGNvbnN0IGNvdW50cnkgPSBlbGVtZW50LmNvdW50cnk7XG5cdFx0XHRcdFx0Y29uc3QgbGF0aXR1ZGUgPSBlbGVtZW50LmxhdDtcblx0XHRcdFx0XHRjb25zdCBsb25naXR1ZGUgPSBlbGVtZW50Lmxvbjtcblx0XHRcdFx0XHRjb25zdCBsb2NhdGlvbkluZm8gPSBjaXR5ICsgJywgJyArIHN0YXRlICsgJywgJyArIGNvdW50cnk7XG5cdFx0XHRcdFx0Y29uc3Qgc3VnZ2VzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0XHRcdFx0c3VnZ2VzdGlvbi50ZXh0Q29udGVudCA9IGxvY2F0aW9uSW5mbztcblx0XHRcdFx0XHRzZWFyY2hTdWdnZXN0aW9ucy5hcHBlbmRDaGlsZChzdWdnZXN0aW9uKTtcblx0XHRcdFx0XHRzdWdnZXN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VhcmNoLnZhbHVlID0gbG9jYXRpb25JbmZvO1xuXHRcdFx0XHRcdFx0c2VhcmNoU3VnZ2VzdGlvbnMuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdFx0XHRnZXRXZWF0aGVyKGNpdHksIGxhdGl0dWRlLCBsb25naXR1ZGUsIGFwaV9rZXkpO1xuXHRcdFx0XHRcdFx0c2VhcmNoLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGdldExvY2F0aW9uKCkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuXHRcdFx0YWxlcnQoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIHRoZSBkYXRhLicpO1xuXHRcdH0pO1xuXHR9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==