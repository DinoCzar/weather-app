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
		api_key;
	async function retreiveWeatherData() {
		const response = await fetch(apiStringWeather, { mode: 'cors' });
		const weatherArray = await response.json();
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
	displayTempMin.textContent = 'Low Temp: ' + tempMin + '\u00B0F';
	displayTempMax.textContent = 'High Temp: ' + tempMax + '\u00B0F';
	displayHumidity.textContent = 'Humidity: ' + humidity + '%';
	displayWindSpeed.textContent = 'Wind Speed: ' + windSpeed + 'mph';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ2xFMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051Qzs7QUFFdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBVTtBQUNoQjtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXQtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSwgbGF0aXR1ZGUsIGxvbmdpdHVkZSwgYXBpX2tleSkge1xuXHRjb25zdCBhcGlTdHJpbmdXZWF0aGVyID1cblx0XHQnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PScgK1xuXHRcdGxhdGl0dWRlICtcblx0XHQnJmxvbj0nICtcblx0XHRsb25naXR1ZGUgK1xuXHRcdCcmYXBwaWQ9JyArXG5cdFx0YXBpX2tleTtcblx0YXN5bmMgZnVuY3Rpb24gcmV0cmVpdmVXZWF0aGVyRGF0YSgpIHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVN0cmluZ1dlYXRoZXIsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXHRcdGNvbnN0IHdlYXRoZXJBcnJheSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRjb25zdCBtYWluID0gd2VhdGhlckFycmF5LndlYXRoZXJbMF0ubWFpbjtcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IHdlYXRoZXJBcnJheS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXHRcdGNvbnN0IHRlbXAgPSBNYXRoLmZsb29yKHdlYXRoZXJBcnJheS5tYWluLnRlbXApO1xuXHRcdGNvbnN0IHRlbXBNaW4gPSBNYXRoLmZsb29yKHdlYXRoZXJBcnJheS5tYWluLnRlbXBfbWluKTtcblx0XHRjb25zdCB0ZW1wTWF4ID0gTWF0aC5mbG9vcih3ZWF0aGVyQXJyYXkubWFpbi50ZW1wX21heCk7XG5cdFx0Y29uc3QgaHVtaWRpdHkgPSBNYXRoLmZsb29yKHdlYXRoZXJBcnJheS5tYWluLmh1bWlkaXR5KTtcblx0XHRjb25zdCB3aW5kU3BlZWQgPSBNYXRoLmZsb29yKHdlYXRoZXJBcnJheS53aW5kLnNwZWVkKTtcblx0XHRkaXNwbGF5V2VhdGhlcihcblx0XHRcdGNpdHksXG5cdFx0XHRtYWluLFxuXHRcdFx0ZGVzY3JpcHRpb24sXG5cdFx0XHR0ZW1wLFxuXHRcdFx0dGVtcE1pbixcblx0XHRcdHRlbXBNYXgsXG5cdFx0XHRodW1pZGl0eSxcblx0XHRcdHdpbmRTcGVlZFxuXHRcdCk7XG5cdH1cblx0cmV0cmVpdmVXZWF0aGVyRGF0YSgpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcblx0XHRhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGRhdGEuJyk7XG5cdH0pO1xufVxuXG5jb25zdCBkaXNwbGF5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktZGl2Jyk7XG5jb25zdCBkaXNwbGF5Q2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5Jyk7XG5jb25zdCBkaXNwbGF5TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG5jb25zdCBkaXNwbGF5RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbmNvbnN0IGRpc3BsYXlUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcbmNvbnN0IGRpc3BsYXlUZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAtbWluJyk7XG5jb25zdCBkaXNwbGF5VGVtcE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLW1heCcpO1xuY29uc3QgZGlzcGxheUh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5Jyk7XG5jb25zdCBkaXNwbGF5V2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQnKTtcblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoXG5cdGNpdHksXG5cdG1haW4sXG5cdGRlc2NyaXB0aW9uLFxuXHR0ZW1wLFxuXHR0ZW1wTWluLFxuXHR0ZW1wTWF4LFxuXHRodW1pZGl0eSxcblx0d2luZFNwZWVkXG4pIHtcblx0ZGlzcGxheUNpdHkudGV4dENvbnRlbnQgPSBjaXR5O1xuXHRkaXNwbGF5TWFpbi50ZXh0Q29udGVudCA9IG1haW47XG5cdGRpc3BsYXlEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXHRkaXNwbGF5VGVtcC50ZXh0Q29udGVudCA9ICdUZW1wZXJhdHVyZTogJyArIHRlbXAgKyAnXFx1MDBCMEYnO1xuXHRkaXNwbGF5VGVtcE1pbi50ZXh0Q29udGVudCA9ICdMb3cgVGVtcDogJyArIHRlbXBNaW4gKyAnXFx1MDBCMEYnO1xuXHRkaXNwbGF5VGVtcE1heC50ZXh0Q29udGVudCA9ICdIaWdoIFRlbXA6ICcgKyB0ZW1wTWF4ICsgJ1xcdTAwQjBGJztcblx0ZGlzcGxheUh1bWlkaXR5LnRleHRDb250ZW50ID0gJ0h1bWlkaXR5OiAnICsgaHVtaWRpdHkgKyAnJSc7XG5cdGRpc3BsYXlXaW5kU3BlZWQudGV4dENvbnRlbnQgPSAnV2luZCBTcGVlZDogJyArIHdpbmRTcGVlZCArICdtcGgnO1xuXHRjb25zdCBjc3NTZWxlY3RvciA9IG1haW4uY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBtYWluLnNsaWNlKDEpO1xuXHRkaXNwbGF5RGl2LmNsYXNzTGlzdC5hZGQoY3NzU2VsZWN0b3IpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tICcuL2dldC13ZWF0aGVyJztcblxuY29uc3QgYXBpX2tleSA9ICc1NDA1ZTNlOGE2NmI3ZDBiNTRlN2I5NDAxMTVkMDdmOSc7XG5cbmNvbnN0IGRpc3BsYXlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheS1kaXYnKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbmNvbnN0IHNlYXJjaFN1Z2dlc3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1zdWdnZXN0aW9ucycpO1xuY29uc3QgZGlzcGxheU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuY29uc3QgZGlzcGxheUNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpO1xuY29uc3QgZGlzcGxheURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5jb25zdCBkaXNwbGF5VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wJyk7XG5jb25zdCBkaXNwbGF5VGVtcE1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLW1pbicpO1xuY29uc3QgZGlzcGxheVRlbXBNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC1tYXgnKTtcbmNvbnN0IGRpc3BsYXlIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuY29uc3QgZGlzcGxheVdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLXNwZWVkJyk7XG5cbmRpc3BsYXlEaXYuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC1pbWFnZScpO1xuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbmZ1bmN0aW9uIHNob3dFcnJvcihpbnB1dCwgbWVzc2FnZSkge1xuXHRjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lucHV0LmlkfS1lcnJvcmApO1xuXHRlcnJvckRpdi5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXHRpbnB1dC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xufVxuXG5mdW5jdGlvbiBzaG93U3VjY2VzcyhpbnB1dCkge1xuXHRjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lucHV0LmlkfS1lcnJvcmApO1xuXHRlcnJvckRpdi5pbm5lckhUTUwgPSAnJztcblx0aW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTZWFyY2goKSB7XG5cdGNvbnN0IHNlYXJjaFZhbHVlID0gc2VhcmNoLnZhbHVlLnRyaW0oKTtcblx0aWYgKCFzZWFyY2hWYWx1ZSkge1xuXHRcdHNob3dFcnJvcihzZWFyY2gsICdQbGVhc2UgZW50ZXIgYSBzZWFyY2ggdGVybScpO1xuXHR9IGVsc2Uge1xuXHRcdHNob3dTdWNjZXNzKHNlYXJjaCk7XG5cdH1cbn1cblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB2YWxpZGF0ZVNlYXJjaCk7XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldmVudCkge1xuXHRkaXNwbGF5RGl2LmNsYXNzTmFtZSA9ICcnO1xuXHRzZWFyY2hTdWdnZXN0aW9ucy5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheUNpdHkuaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlNYWluLmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlUZW1wLmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5VGVtcE1pbi5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheVRlbXBNYXguaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlIdW1pZGl0eS5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheVdpbmRTcGVlZC5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheURpdi5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWltYWdlJyk7XG5cdGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5cdGNvbnN0IHNlYXJjaFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKTtcblx0dmFsaWRhdGVTZWFyY2goKTtcblx0Y29uc3QgZXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yJyk7XG5cblx0aWYgKGVycm9ycy5sZW5ndGggPT09IDApIHtcblx0XHRjb25zdCBhcGlTdHJpbmdMb2NhdGlvbiA9XG5cdFx0XHQnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0nICtcblx0XHRcdHNlYXJjaFZhbHVlICtcblx0XHRcdCcmbGltaXQ9NSZhcHBpZD0nICtcblx0XHRcdGFwaV9rZXk7XG5cdFx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0YXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVN0cmluZ0xvY2F0aW9uLCB7IG1vZGU6ICdjb3JzJyB9KTtcblx0XHRcdGNvbnN0IHNlYXJjaEFycmF5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoc2VhcmNoQXJyYXkpKSB7XG5cdFx0XHRcdHNlYXJjaEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBjaXR5ID0gZWxlbWVudC5uYW1lO1xuXHRcdFx0XHRcdGNvbnN0IHN0YXRlID0gZWxlbWVudC5zdGF0ZTtcblx0XHRcdFx0XHRjb25zdCBjb3VudHJ5ID0gZWxlbWVudC5jb3VudHJ5O1xuXHRcdFx0XHRcdGNvbnN0IGxhdGl0dWRlID0gZWxlbWVudC5sYXQ7XG5cdFx0XHRcdFx0Y29uc3QgbG9uZ2l0dWRlID0gZWxlbWVudC5sb247XG5cdFx0XHRcdFx0Y29uc3QgbG9jYXRpb25JbmZvID0gY2l0eSArICcsICcgKyBzdGF0ZSArICcsICcgKyBjb3VudHJ5O1xuXHRcdFx0XHRcdGNvbnN0IHN1Z2dlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdFx0XHRcdHN1Z2dlc3Rpb24udGV4dENvbnRlbnQgPSBsb2NhdGlvbkluZm87XG5cdFx0XHRcdFx0c2VhcmNoU3VnZ2VzdGlvbnMuYXBwZW5kQ2hpbGQoc3VnZ2VzdGlvbik7XG5cdFx0XHRcdFx0c3VnZ2VzdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlYXJjaC52YWx1ZSA9IGxvY2F0aW9uSW5mbztcblx0XHRcdFx0XHRcdHNlYXJjaFN1Z2dlc3Rpb25zLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0XHRcdFx0Z2V0V2VhdGhlcihjaXR5LCBsYXRpdHVkZSwgbG9uZ2l0dWRlLCBhcGlfa2V5KTtcblx0XHRcdFx0XHRcdHNlYXJjaC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRnZXRMb2NhdGlvbigpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyB0aGUgZGF0YS4nKTtcblx0XHR9KTtcblx0fVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=