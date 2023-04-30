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
function getWeather(latitude, longitude, api_key) {
	const apiStringWeather =
		'https://api.openweathermap.org/data/2.5/weather?lat=' +
		latitude +
		'&lon=' +
		longitude +
		'&appid=' +
		api_key;
	async function retreiveWeatherData() {
		const response = await fetch(apiStringWeather, { mode: 'cors' });
		const weatherArray = await response.json();
		const description = weatherArray.weather[0].description;
		const temp = weatherArray.main.temp;
		const tempMin = weatherArray.main.temp_min;
		const tempMax = weatherArray.main.temp_max;
		const humidity = weatherArray.main.humidity;
		const windSpeed = weatherArray.wind.speed;
		displayWeather(description, temp, tempMin, tempMax, humidity, windSpeed);
	}
	retreiveWeatherData().catch(function (err) {
		alert('An error occurred while fetching the data.');
	});
}

const displayDescription = document.querySelector('#description');
const displayTemp = document.querySelector('#temp');
const displayTempMin = document.querySelector('#temp-min');
const displayTempMax = document.querySelector('#temp-max');
const displayHumidity = document.querySelector('#humidity');
const displayWindSpeed = document.querySelector('#wind-speed');

function displayWeather(
	description,
	temp,
	tempMin,
	tempMax,
	humidity,
	windSpeed
) {
	displayDescription.textContent = 'Weather: ' + description;
	displayTemp.textContent = 'Temperature: ' + temp;
	displayTempMin.textContent = 'Low Temp: ' + tempMin;
	displayTempMax.textContent = 'High Temp: ' + tempMax;
	displayHumidity.textContent = 'Humidity: ' + humidity;
	displayWindSpeed.textContent = 'Wind Speed: ' + windSpeed;
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

const search = document.getElementById('search');
const searchSuggestions = document.getElementById('search-suggestions');
const displayDescription = document.querySelector('#description');
const displayTemp = document.querySelector('#temp');
const displayTempMin = document.querySelector('#temp-min');
const displayTempMax = document.querySelector('#temp-max');
const displayHumidity = document.querySelector('#humidity');
const displayWindSpeed = document.querySelector('#wind-speed');

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
	displayDescription.innerHTML = '';
	displayTemp.innerHTML = '';
	displayTempMin.innerHTML = '';
	displayTempMax.innerHTML = '';
	displayHumidity.innerHTML = '';
	displayWindSpeed.innerHTML = '';

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
						(0,_get_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(latitude, longitude, api_key);
						search.value = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUMvQzFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdEQUFVO0FBQ2hCO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXQtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFdlYXRoZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSwgYXBpX2tleSkge1xuXHRjb25zdCBhcGlTdHJpbmdXZWF0aGVyID1cblx0XHQnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PScgK1xuXHRcdGxhdGl0dWRlICtcblx0XHQnJmxvbj0nICtcblx0XHRsb25naXR1ZGUgK1xuXHRcdCcmYXBwaWQ9JyArXG5cdFx0YXBpX2tleTtcblx0YXN5bmMgZnVuY3Rpb24gcmV0cmVpdmVXZWF0aGVyRGF0YSgpIHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVN0cmluZ1dlYXRoZXIsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXHRcdGNvbnN0IHdlYXRoZXJBcnJheSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IHdlYXRoZXJBcnJheS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXHRcdGNvbnN0IHRlbXAgPSB3ZWF0aGVyQXJyYXkubWFpbi50ZW1wO1xuXHRcdGNvbnN0IHRlbXBNaW4gPSB3ZWF0aGVyQXJyYXkubWFpbi50ZW1wX21pbjtcblx0XHRjb25zdCB0ZW1wTWF4ID0gd2VhdGhlckFycmF5Lm1haW4udGVtcF9tYXg7XG5cdFx0Y29uc3QgaHVtaWRpdHkgPSB3ZWF0aGVyQXJyYXkubWFpbi5odW1pZGl0eTtcblx0XHRjb25zdCB3aW5kU3BlZWQgPSB3ZWF0aGVyQXJyYXkud2luZC5zcGVlZDtcblx0XHRkaXNwbGF5V2VhdGhlcihkZXNjcmlwdGlvbiwgdGVtcCwgdGVtcE1pbiwgdGVtcE1heCwgaHVtaWRpdHksIHdpbmRTcGVlZCk7XG5cdH1cblx0cmV0cmVpdmVXZWF0aGVyRGF0YSgpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcblx0XHRhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGRhdGEuJyk7XG5cdH0pO1xufVxuXG5jb25zdCBkaXNwbGF5RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbmNvbnN0IGRpc3BsYXlUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcbmNvbnN0IGRpc3BsYXlUZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAtbWluJyk7XG5jb25zdCBkaXNwbGF5VGVtcE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLW1heCcpO1xuY29uc3QgZGlzcGxheUh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5Jyk7XG5jb25zdCBkaXNwbGF5V2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQnKTtcblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoXG5cdGRlc2NyaXB0aW9uLFxuXHR0ZW1wLFxuXHR0ZW1wTWluLFxuXHR0ZW1wTWF4LFxuXHRodW1pZGl0eSxcblx0d2luZFNwZWVkXG4pIHtcblx0ZGlzcGxheURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1dlYXRoZXI6ICcgKyBkZXNjcmlwdGlvbjtcblx0ZGlzcGxheVRlbXAudGV4dENvbnRlbnQgPSAnVGVtcGVyYXR1cmU6ICcgKyB0ZW1wO1xuXHRkaXNwbGF5VGVtcE1pbi50ZXh0Q29udGVudCA9ICdMb3cgVGVtcDogJyArIHRlbXBNaW47XG5cdGRpc3BsYXlUZW1wTWF4LnRleHRDb250ZW50ID0gJ0hpZ2ggVGVtcDogJyArIHRlbXBNYXg7XG5cdGRpc3BsYXlIdW1pZGl0eS50ZXh0Q29udGVudCA9ICdIdW1pZGl0eTogJyArIGh1bWlkaXR5O1xuXHRkaXNwbGF5V2luZFNwZWVkLnRleHRDb250ZW50ID0gJ1dpbmQgU3BlZWQ6ICcgKyB3aW5kU3BlZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vZ2V0LXdlYXRoZXInO1xuXG5jb25zdCBhcGlfa2V5ID0gJzU0MDVlM2U4YTY2YjdkMGI1NGU3Yjk0MDExNWQwN2Y5JztcblxuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuY29uc3Qgc2VhcmNoU3VnZ2VzdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXN1Z2dlc3Rpb25zJyk7XG5jb25zdCBkaXNwbGF5RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbmNvbnN0IGRpc3BsYXlUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcbmNvbnN0IGRpc3BsYXlUZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAtbWluJyk7XG5jb25zdCBkaXNwbGF5VGVtcE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLW1heCcpO1xuY29uc3QgZGlzcGxheUh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5Jyk7XG5jb25zdCBkaXNwbGF5V2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQnKTtcblxuZnVuY3Rpb24gc2hvd0Vycm9yKGlucHV0LCBtZXNzYWdlKSB7XG5cdGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5wdXQuaWR9LWVycm9yYCk7XG5cdGVycm9yRGl2LmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cdGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dTdWNjZXNzKGlucHV0KSB7XG5cdGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5wdXQuaWR9LWVycm9yYCk7XG5cdGVycm9yRGl2LmlubmVySFRNTCA9ICcnO1xuXHRpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNlYXJjaCgpIHtcblx0Y29uc3Qgc2VhcmNoVmFsdWUgPSBzZWFyY2gudmFsdWUudHJpbSgpO1xuXHRpZiAoIXNlYXJjaFZhbHVlKSB7XG5cdFx0c2hvd0Vycm9yKHNlYXJjaCwgJ1BsZWFzZSBlbnRlciBhIHNlYXJjaCB0ZXJtJyk7XG5cdH0gZWxzZSB7XG5cdFx0c2hvd1N1Y2Nlc3Moc2VhcmNoKTtcblx0fVxufVxuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHZhbGlkYXRlU2VhcmNoKTtcblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdHNlYXJjaFN1Z2dlc3Rpb25zLmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlUZW1wLmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5VGVtcE1pbi5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheVRlbXBNYXguaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlIdW1pZGl0eS5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheVdpbmRTcGVlZC5pbm5lckhUTUwgPSAnJztcblxuXHRjb25zdCBzZWFyY2hWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZS50cmltKCk7XG5cdHZhbGlkYXRlU2VhcmNoKCk7XG5cdGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvcicpO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0Y29uc3QgYXBpU3RyaW5nTG9jYXRpb24gPVxuXHRcdFx0J2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JyArXG5cdFx0XHRzZWFyY2hWYWx1ZSArXG5cdFx0XHQnJmxpbWl0PTUmYXBwaWQ9JyArXG5cdFx0XHRhcGlfa2V5O1xuXHRcdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlTdHJpbmdMb2NhdGlvbiwgeyBtb2RlOiAnY29ycycgfSk7XG5cdFx0XHRjb25zdCBzZWFyY2hBcnJheSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHNlYXJjaEFycmF5KSkge1xuXHRcdFx0XHRzZWFyY2hBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgY2l0eSA9IGVsZW1lbnQubmFtZTtcblx0XHRcdFx0XHRjb25zdCBzdGF0ZSA9IGVsZW1lbnQuc3RhdGU7XG5cdFx0XHRcdFx0Y29uc3QgY291bnRyeSA9IGVsZW1lbnQuY291bnRyeTtcblx0XHRcdFx0XHRjb25zdCBsYXRpdHVkZSA9IGVsZW1lbnQubGF0O1xuXHRcdFx0XHRcdGNvbnN0IGxvbmdpdHVkZSA9IGVsZW1lbnQubG9uO1xuXHRcdFx0XHRcdGNvbnN0IGxvY2F0aW9uSW5mbyA9IGNpdHkgKyAnLCAnICsgc3RhdGUgKyAnLCAnICsgY291bnRyeTtcblx0XHRcdFx0XHRjb25zdCBzdWdnZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRcdFx0XHRzdWdnZXN0aW9uLnRleHRDb250ZW50ID0gbG9jYXRpb25JbmZvO1xuXHRcdFx0XHRcdHNlYXJjaFN1Z2dlc3Rpb25zLmFwcGVuZENoaWxkKHN1Z2dlc3Rpb24pO1xuXHRcdFx0XHRcdHN1Z2dlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWFyY2gudmFsdWUgPSBsb2NhdGlvbkluZm87XG5cdFx0XHRcdFx0XHRzZWFyY2hTdWdnZXN0aW9ucy5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0XHRcdGdldFdlYXRoZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSwgYXBpX2tleSk7XG5cdFx0XHRcdFx0XHRzZWFyY2gudmFsdWUgPSAnJztcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGdldExvY2F0aW9uKCkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuXHRcdFx0YWxlcnQoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIHRoZSBkYXRhLicpO1xuXHRcdH0pO1xuXHR9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==