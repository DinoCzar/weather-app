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
		const temp = weatherArray.main.temp;
		const tempMin = weatherArray.main.temp_min;
		const tempMax = weatherArray.main.temp_max;
		const humidity = weatherArray.main.humidity;
		const windSpeed = weatherArray.wind.speed;
		displayWeather(city, main, description, temp, tempMin, tempMax, humidity, windSpeed);
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
	displayTemp.textContent = 'Temperature: ' + temp;
	displayTempMin.textContent = 'Low Temp: ' + tempMin;
	displayTempMax.textContent = 'High Temp: ' + tempMax;
	displayHumidity.textContent = 'Humidity: ' + humidity;
	displayWindSpeed.textContent = 'Wind Speed: ' + windSpeed;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ3pEMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051Qzs7QUFFdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQVU7QUFDaEI7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldC13ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5LCBsYXRpdHVkZSwgbG9uZ2l0dWRlLCBhcGlfa2V5KSB7XG5cdGNvbnN0IGFwaVN0cmluZ1dlYXRoZXIgPVxuXHRcdCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JyArXG5cdFx0bGF0aXR1ZGUgK1xuXHRcdCcmbG9uPScgK1xuXHRcdGxvbmdpdHVkZSArXG5cdFx0JyZhcHBpZD0nICtcblx0XHRhcGlfa2V5O1xuXHRhc3luYyBmdW5jdGlvbiByZXRyZWl2ZVdlYXRoZXJEYXRhKCkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpU3RyaW5nV2VhdGhlciwgeyBtb2RlOiAnY29ycycgfSk7XG5cdFx0Y29uc3Qgd2VhdGhlckFycmF5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBtYWluID0gd2VhdGhlckFycmF5LndlYXRoZXJbMF0ubWFpbjtcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IHdlYXRoZXJBcnJheS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXHRcdGNvbnN0IHRlbXAgPSB3ZWF0aGVyQXJyYXkubWFpbi50ZW1wO1xuXHRcdGNvbnN0IHRlbXBNaW4gPSB3ZWF0aGVyQXJyYXkubWFpbi50ZW1wX21pbjtcblx0XHRjb25zdCB0ZW1wTWF4ID0gd2VhdGhlckFycmF5Lm1haW4udGVtcF9tYXg7XG5cdFx0Y29uc3QgaHVtaWRpdHkgPSB3ZWF0aGVyQXJyYXkubWFpbi5odW1pZGl0eTtcblx0XHRjb25zdCB3aW5kU3BlZWQgPSB3ZWF0aGVyQXJyYXkud2luZC5zcGVlZDtcblx0XHRkaXNwbGF5V2VhdGhlcihjaXR5LCBtYWluLCBkZXNjcmlwdGlvbiwgdGVtcCwgdGVtcE1pbiwgdGVtcE1heCwgaHVtaWRpdHksIHdpbmRTcGVlZCk7XG5cdH1cblx0cmV0cmVpdmVXZWF0aGVyRGF0YSgpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcblx0XHRhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGRhdGEuJyk7XG5cdH0pO1xufVxuXG5jb25zdCBkaXNwbGF5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktZGl2Jyk7XG5jb25zdCBkaXNwbGF5Q2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5Jyk7XG5jb25zdCBkaXNwbGF5TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG5jb25zdCBkaXNwbGF5RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbmNvbnN0IGRpc3BsYXlUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcbmNvbnN0IGRpc3BsYXlUZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAtbWluJyk7XG5jb25zdCBkaXNwbGF5VGVtcE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLW1heCcpO1xuY29uc3QgZGlzcGxheUh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5Jyk7XG5jb25zdCBkaXNwbGF5V2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtc3BlZWQnKTtcblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoXG5cdGNpdHksXG4gICAgbWFpbixcbiAgICBkZXNjcmlwdGlvbixcblx0dGVtcCxcblx0dGVtcE1pbixcblx0dGVtcE1heCxcblx0aHVtaWRpdHksXG5cdHdpbmRTcGVlZFxuKSB7XG4gICAgZGlzcGxheUNpdHkudGV4dENvbnRlbnQgPSBjaXR5O1xuICAgIGRpc3BsYXlNYWluLnRleHRDb250ZW50ID0gbWFpbjtcblx0ZGlzcGxheURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cdGRpc3BsYXlUZW1wLnRleHRDb250ZW50ID0gJ1RlbXBlcmF0dXJlOiAnICsgdGVtcDtcblx0ZGlzcGxheVRlbXBNaW4udGV4dENvbnRlbnQgPSAnTG93IFRlbXA6ICcgKyB0ZW1wTWluO1xuXHRkaXNwbGF5VGVtcE1heC50ZXh0Q29udGVudCA9ICdIaWdoIFRlbXA6ICcgKyB0ZW1wTWF4O1xuXHRkaXNwbGF5SHVtaWRpdHkudGV4dENvbnRlbnQgPSAnSHVtaWRpdHk6ICcgKyBodW1pZGl0eTtcblx0ZGlzcGxheVdpbmRTcGVlZC50ZXh0Q29udGVudCA9ICdXaW5kIFNwZWVkOiAnICsgd2luZFNwZWVkO1xuICAgIGNvbnN0IGNzc1NlbGVjdG9yID0gbWFpbi5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIG1haW4uc2xpY2UoMSk7XG4gICAgZGlzcGxheURpdi5jbGFzc0xpc3QuYWRkKGNzc1NlbGVjdG9yKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9nZXQtd2VhdGhlcic7XG5cbmNvbnN0IGFwaV9rZXkgPSAnNTQwNWUzZThhNjZiN2QwYjU0ZTdiOTQwMTE1ZDA3ZjknO1xuXG5jb25zdCBkaXNwbGF5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktZGl2Jyk7XG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG5jb25zdCBzZWFyY2hTdWdnZXN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtc3VnZ2VzdGlvbnMnKTtcbmNvbnN0IGRpc3BsYXlNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbmNvbnN0IGRpc3BsYXlDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbmNvbnN0IGRpc3BsYXlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuY29uc3QgZGlzcGxheVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpO1xuY29uc3QgZGlzcGxheVRlbXBNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC1taW4nKTtcbmNvbnN0IGRpc3BsYXlUZW1wTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAtbWF4Jyk7XG5jb25zdCBkaXNwbGF5SHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcbmNvbnN0IGRpc3BsYXlXaW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1zcGVlZCcpO1xuXG5mdW5jdGlvbiBzaG93RXJyb3IoaW5wdXQsIG1lc3NhZ2UpIHtcblx0Y29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbnB1dC5pZH0tZXJyb3JgKTtcblx0ZXJyb3JEaXYuaW5uZXJIVE1MID0gbWVzc2FnZTtcblx0aW5wdXQuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbn1cblxuZnVuY3Rpb24gc2hvd1N1Y2Nlc3MoaW5wdXQpIHtcblx0Y29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbnB1dC5pZH0tZXJyb3JgKTtcblx0ZXJyb3JEaXYuaW5uZXJIVE1MID0gJyc7XG5cdGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2VhcmNoKCkge1xuXHRjb25zdCBzZWFyY2hWYWx1ZSA9IHNlYXJjaC52YWx1ZS50cmltKCk7XG5cdGlmICghc2VhcmNoVmFsdWUpIHtcblx0XHRzaG93RXJyb3Ioc2VhcmNoLCAnUGxlYXNlIGVudGVyIGEgc2VhcmNoIHRlcm0nKTtcblx0fSBlbHNlIHtcblx0XHRzaG93U3VjY2VzcyhzZWFyY2gpO1xuXHR9XG59XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdmFsaWRhdGVTZWFyY2gpO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBkaXNwbGF5RGl2LmNsYXNzTmFtZSA9ICcnO1xuXHRzZWFyY2hTdWdnZXN0aW9ucy5pbm5lckhUTUwgPSAnJztcbiAgICBkaXNwbGF5Q2l0eS5pbm5lckhUTUwgPSAnJztcbiAgICBkaXNwbGF5TWFpbi5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheURlc2NyaXB0aW9uLmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5VGVtcC5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheVRlbXBNaW4uaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlUZW1wTWF4LmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5SHVtaWRpdHkuaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlXaW5kU3BlZWQuaW5uZXJIVE1MID0gJyc7XG5cblx0Y29uc3Qgc2VhcmNoVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpO1xuXHR2YWxpZGF0ZVNlYXJjaCgpO1xuXHRjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3InKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuXHRcdGNvbnN0IGFwaVN0cmluZ0xvY2F0aW9uID1cblx0XHRcdCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPScgK1xuXHRcdFx0c2VhcmNoVmFsdWUgK1xuXHRcdFx0JyZsaW1pdD01JmFwcGlkPScgK1xuXHRcdFx0YXBpX2tleTtcblx0XHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpU3RyaW5nTG9jYXRpb24sIHsgbW9kZTogJ2NvcnMnIH0pO1xuXHRcdFx0Y29uc3Qgc2VhcmNoQXJyYXkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShzZWFyY2hBcnJheSkpIHtcblx0XHRcdFx0c2VhcmNoQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGNpdHkgPSBlbGVtZW50Lm5hbWU7XG5cdFx0XHRcdFx0Y29uc3Qgc3RhdGUgPSBlbGVtZW50LnN0YXRlO1xuXHRcdFx0XHRcdGNvbnN0IGNvdW50cnkgPSBlbGVtZW50LmNvdW50cnk7XG5cdFx0XHRcdFx0Y29uc3QgbGF0aXR1ZGUgPSBlbGVtZW50LmxhdDtcblx0XHRcdFx0XHRjb25zdCBsb25naXR1ZGUgPSBlbGVtZW50Lmxvbjtcblx0XHRcdFx0XHRjb25zdCBsb2NhdGlvbkluZm8gPSBjaXR5ICsgJywgJyArIHN0YXRlICsgJywgJyArIGNvdW50cnk7XG5cdFx0XHRcdFx0Y29uc3Qgc3VnZ2VzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0XHRcdFx0c3VnZ2VzdGlvbi50ZXh0Q29udGVudCA9IGxvY2F0aW9uSW5mbztcblx0XHRcdFx0XHRzZWFyY2hTdWdnZXN0aW9ucy5hcHBlbmRDaGlsZChzdWdnZXN0aW9uKTtcblx0XHRcdFx0XHRzdWdnZXN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VhcmNoLnZhbHVlID0gbG9jYXRpb25JbmZvO1xuXHRcdFx0XHRcdFx0c2VhcmNoU3VnZ2VzdGlvbnMuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdFx0XHRnZXRXZWF0aGVyKGNpdHksIGxhdGl0dWRlLCBsb25naXR1ZGUsIGFwaV9rZXkpO1xuXHRcdFx0XHRcdFx0c2VhcmNoLnZhbHVlID0gJyc7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRnZXRMb2NhdGlvbigpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyB0aGUgZGF0YS4nKTtcblx0XHR9KTtcblx0fVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=