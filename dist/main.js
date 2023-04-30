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
		const description = weatherArray.weather[0].description;
		const temp = weatherArray.main.temp;
		const tempMin = weatherArray.main.temp_min;
		const tempMax = weatherArray.main.temp_max;
		const humidity = weatherArray.main.humidity;
		const windSpeed = weatherArray.wind.speed;
		displayWeather(city, description, temp, tempMin, tempMax, humidity, windSpeed);
	}
	retreiveWeatherData().catch(function (err) {
		alert('An error occurred while fetching the data.');
	});
}

const displayCity = document.querySelector('#city');
const displayDescription = document.querySelector('#description');
const displayTemp = document.querySelector('#temp');
const displayTempMin = document.querySelector('#temp-min');
const displayTempMax = document.querySelector('#temp-max');
const displayHumidity = document.querySelector('#humidity');
const displayWindSpeed = document.querySelector('#wind-speed');

function displayWeather(
	city,
    description,
	temp,
	tempMin,
	tempMax,
	humidity,
	windSpeed
) {
    displayCity.textContent = city;
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
	searchSuggestions.innerHTML = '';
    displayCity.innerHTML = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNsRDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBVTtBQUNoQjtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2V0LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHksIGxhdGl0dWRlLCBsb25naXR1ZGUsIGFwaV9rZXkpIHtcblx0Y29uc3QgYXBpU3RyaW5nV2VhdGhlciA9XG5cdFx0J2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0nICtcblx0XHRsYXRpdHVkZSArXG5cdFx0JyZsb249JyArXG5cdFx0bG9uZ2l0dWRlICtcblx0XHQnJmFwcGlkPScgK1xuXHRcdGFwaV9rZXk7XG5cdGFzeW5jIGZ1bmN0aW9uIHJldHJlaXZlV2VhdGhlckRhdGEoKSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlTdHJpbmdXZWF0aGVyLCB7IG1vZGU6ICdjb3JzJyB9KTtcblx0XHRjb25zdCB3ZWF0aGVyQXJyYXkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0Y29uc3QgZGVzY3JpcHRpb24gPSB3ZWF0aGVyQXJyYXkud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblx0XHRjb25zdCB0ZW1wID0gd2VhdGhlckFycmF5Lm1haW4udGVtcDtcblx0XHRjb25zdCB0ZW1wTWluID0gd2VhdGhlckFycmF5Lm1haW4udGVtcF9taW47XG5cdFx0Y29uc3QgdGVtcE1heCA9IHdlYXRoZXJBcnJheS5tYWluLnRlbXBfbWF4O1xuXHRcdGNvbnN0IGh1bWlkaXR5ID0gd2VhdGhlckFycmF5Lm1haW4uaHVtaWRpdHk7XG5cdFx0Y29uc3Qgd2luZFNwZWVkID0gd2VhdGhlckFycmF5LndpbmQuc3BlZWQ7XG5cdFx0ZGlzcGxheVdlYXRoZXIoY2l0eSwgZGVzY3JpcHRpb24sIHRlbXAsIHRlbXBNaW4sIHRlbXBNYXgsIGh1bWlkaXR5LCB3aW5kU3BlZWQpO1xuXHR9XG5cdHJldHJlaXZlV2VhdGhlckRhdGEoKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG5cdFx0YWxlcnQoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIHRoZSBkYXRhLicpO1xuXHR9KTtcbn1cblxuY29uc3QgZGlzcGxheUNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpO1xuY29uc3QgZGlzcGxheURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5jb25zdCBkaXNwbGF5VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wJyk7XG5jb25zdCBkaXNwbGF5VGVtcE1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLW1pbicpO1xuY29uc3QgZGlzcGxheVRlbXBNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC1tYXgnKTtcbmNvbnN0IGRpc3BsYXlIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuY29uc3QgZGlzcGxheVdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLXNwZWVkJyk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyKFxuXHRjaXR5LFxuICAgIGRlc2NyaXB0aW9uLFxuXHR0ZW1wLFxuXHR0ZW1wTWluLFxuXHR0ZW1wTWF4LFxuXHRodW1pZGl0eSxcblx0d2luZFNwZWVkXG4pIHtcbiAgICBkaXNwbGF5Q2l0eS50ZXh0Q29udGVudCA9IGNpdHk7XG5cdGRpc3BsYXlEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdXZWF0aGVyOiAnICsgZGVzY3JpcHRpb247XG5cdGRpc3BsYXlUZW1wLnRleHRDb250ZW50ID0gJ1RlbXBlcmF0dXJlOiAnICsgdGVtcDtcblx0ZGlzcGxheVRlbXBNaW4udGV4dENvbnRlbnQgPSAnTG93IFRlbXA6ICcgKyB0ZW1wTWluO1xuXHRkaXNwbGF5VGVtcE1heC50ZXh0Q29udGVudCA9ICdIaWdoIFRlbXA6ICcgKyB0ZW1wTWF4O1xuXHRkaXNwbGF5SHVtaWRpdHkudGV4dENvbnRlbnQgPSAnSHVtaWRpdHk6ICcgKyBodW1pZGl0eTtcblx0ZGlzcGxheVdpbmRTcGVlZC50ZXh0Q29udGVudCA9ICdXaW5kIFNwZWVkOiAnICsgd2luZFNwZWVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tICcuL2dldC13ZWF0aGVyJztcblxuY29uc3QgYXBpX2tleSA9ICc1NDA1ZTNlOGE2NmI3ZDBiNTRlN2I5NDAxMTVkMDdmOSc7XG5cbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbmNvbnN0IHNlYXJjaFN1Z2dlc3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1zdWdnZXN0aW9ucycpO1xuY29uc3QgZGlzcGxheUNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpO1xuY29uc3QgZGlzcGxheURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5jb25zdCBkaXNwbGF5VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wJyk7XG5jb25zdCBkaXNwbGF5VGVtcE1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLW1pbicpO1xuY29uc3QgZGlzcGxheVRlbXBNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC1tYXgnKTtcbmNvbnN0IGRpc3BsYXlIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuY29uc3QgZGlzcGxheVdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLXNwZWVkJyk7XG5cbmZ1bmN0aW9uIHNob3dFcnJvcihpbnB1dCwgbWVzc2FnZSkge1xuXHRjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lucHV0LmlkfS1lcnJvcmApO1xuXHRlcnJvckRpdi5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXHRpbnB1dC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xufVxuXG5mdW5jdGlvbiBzaG93U3VjY2VzcyhpbnB1dCkge1xuXHRjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lucHV0LmlkfS1lcnJvcmApO1xuXHRlcnJvckRpdi5pbm5lckhUTUwgPSAnJztcblx0aW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTZWFyY2goKSB7XG5cdGNvbnN0IHNlYXJjaFZhbHVlID0gc2VhcmNoLnZhbHVlLnRyaW0oKTtcblx0aWYgKCFzZWFyY2hWYWx1ZSkge1xuXHRcdHNob3dFcnJvcihzZWFyY2gsICdQbGVhc2UgZW50ZXIgYSBzZWFyY2ggdGVybScpO1xuXHR9IGVsc2Uge1xuXHRcdHNob3dTdWNjZXNzKHNlYXJjaCk7XG5cdH1cbn1cblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB2YWxpZGF0ZVNlYXJjaCk7XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldmVudCkge1xuXHRzZWFyY2hTdWdnZXN0aW9ucy5pbm5lckhUTUwgPSAnJztcbiAgICBkaXNwbGF5Q2l0eS5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheURlc2NyaXB0aW9uLmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5VGVtcC5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheVRlbXBNaW4uaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlUZW1wTWF4LmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5SHVtaWRpdHkuaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlXaW5kU3BlZWQuaW5uZXJIVE1MID0gJyc7XG5cblx0Y29uc3Qgc2VhcmNoVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpO1xuXHR2YWxpZGF0ZVNlYXJjaCgpO1xuXHRjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3InKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuXHRcdGNvbnN0IGFwaVN0cmluZ0xvY2F0aW9uID1cblx0XHRcdCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPScgK1xuXHRcdFx0c2VhcmNoVmFsdWUgK1xuXHRcdFx0JyZsaW1pdD01JmFwcGlkPScgK1xuXHRcdFx0YXBpX2tleTtcblx0XHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpU3RyaW5nTG9jYXRpb24sIHsgbW9kZTogJ2NvcnMnIH0pO1xuXHRcdFx0Y29uc3Qgc2VhcmNoQXJyYXkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShzZWFyY2hBcnJheSkpIHtcblx0XHRcdFx0c2VhcmNoQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGNpdHkgPSBlbGVtZW50Lm5hbWU7XG5cdFx0XHRcdFx0Y29uc3Qgc3RhdGUgPSBlbGVtZW50LnN0YXRlO1xuXHRcdFx0XHRcdGNvbnN0IGNvdW50cnkgPSBlbGVtZW50LmNvdW50cnk7XG5cdFx0XHRcdFx0Y29uc3QgbGF0aXR1ZGUgPSBlbGVtZW50LmxhdDtcblx0XHRcdFx0XHRjb25zdCBsb25naXR1ZGUgPSBlbGVtZW50Lmxvbjtcblx0XHRcdFx0XHRjb25zdCBsb2NhdGlvbkluZm8gPSBjaXR5ICsgJywgJyArIHN0YXRlICsgJywgJyArIGNvdW50cnk7XG5cdFx0XHRcdFx0Y29uc3Qgc3VnZ2VzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0XHRcdFx0c3VnZ2VzdGlvbi50ZXh0Q29udGVudCA9IGxvY2F0aW9uSW5mbztcblx0XHRcdFx0XHRzZWFyY2hTdWdnZXN0aW9ucy5hcHBlbmRDaGlsZChzdWdnZXN0aW9uKTtcblx0XHRcdFx0XHRzdWdnZXN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VhcmNoLnZhbHVlID0gbG9jYXRpb25JbmZvO1xuXHRcdFx0XHRcdFx0c2VhcmNoU3VnZ2VzdGlvbnMuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdFx0XHRnZXRXZWF0aGVyKGNpdHksIGxhdGl0dWRlLCBsb25naXR1ZGUsIGFwaV9rZXkpO1xuXHRcdFx0XHRcdFx0c2VhcmNoLnZhbHVlID0gJyc7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRnZXRMb2NhdGlvbigpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyB0aGUgZGF0YS4nKTtcblx0XHR9KTtcblx0fVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=