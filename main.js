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
    document.body.classList.add(cssSelector);
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
    document.body.className = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUN4RDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBVTtBQUNoQjtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2V0LXdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHksIGxhdGl0dWRlLCBsb25naXR1ZGUsIGFwaV9rZXkpIHtcblx0Y29uc3QgYXBpU3RyaW5nV2VhdGhlciA9XG5cdFx0J2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0nICtcblx0XHRsYXRpdHVkZSArXG5cdFx0JyZsb249JyArXG5cdFx0bG9uZ2l0dWRlICtcblx0XHQnJmFwcGlkPScgK1xuXHRcdGFwaV9rZXk7XG5cdGFzeW5jIGZ1bmN0aW9uIHJldHJlaXZlV2VhdGhlckRhdGEoKSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlTdHJpbmdXZWF0aGVyLCB7IG1vZGU6ICdjb3JzJyB9KTtcblx0XHRjb25zdCB3ZWF0aGVyQXJyYXkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IG1haW4gPSB3ZWF0aGVyQXJyYXkud2VhdGhlclswXS5tYWluO1xuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gd2VhdGhlckFycmF5LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cdFx0Y29uc3QgdGVtcCA9IHdlYXRoZXJBcnJheS5tYWluLnRlbXA7XG5cdFx0Y29uc3QgdGVtcE1pbiA9IHdlYXRoZXJBcnJheS5tYWluLnRlbXBfbWluO1xuXHRcdGNvbnN0IHRlbXBNYXggPSB3ZWF0aGVyQXJyYXkubWFpbi50ZW1wX21heDtcblx0XHRjb25zdCBodW1pZGl0eSA9IHdlYXRoZXJBcnJheS5tYWluLmh1bWlkaXR5O1xuXHRcdGNvbnN0IHdpbmRTcGVlZCA9IHdlYXRoZXJBcnJheS53aW5kLnNwZWVkO1xuXHRcdGRpc3BsYXlXZWF0aGVyKGNpdHksIG1haW4sIGRlc2NyaXB0aW9uLCB0ZW1wLCB0ZW1wTWluLCB0ZW1wTWF4LCBodW1pZGl0eSwgd2luZFNwZWVkKTtcblx0fVxuXHRyZXRyZWl2ZVdlYXRoZXJEYXRhKCkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuXHRcdGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyB0aGUgZGF0YS4nKTtcblx0fSk7XG59XG5cbmNvbnN0IGRpc3BsYXlDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbmNvbnN0IGRpc3BsYXlNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbmNvbnN0IGRpc3BsYXlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuY29uc3QgZGlzcGxheVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpO1xuY29uc3QgZGlzcGxheVRlbXBNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC1taW4nKTtcbmNvbnN0IGRpc3BsYXlUZW1wTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAtbWF4Jyk7XG5jb25zdCBkaXNwbGF5SHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcbmNvbnN0IGRpc3BsYXlXaW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1zcGVlZCcpO1xuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihcblx0Y2l0eSxcbiAgICBtYWluLFxuICAgIGRlc2NyaXB0aW9uLFxuXHR0ZW1wLFxuXHR0ZW1wTWluLFxuXHR0ZW1wTWF4LFxuXHRodW1pZGl0eSxcblx0d2luZFNwZWVkXG4pIHtcbiAgICBkaXNwbGF5Q2l0eS50ZXh0Q29udGVudCA9IGNpdHk7XG4gICAgZGlzcGxheU1haW4udGV4dENvbnRlbnQgPSBtYWluO1xuXHRkaXNwbGF5RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblx0ZGlzcGxheVRlbXAudGV4dENvbnRlbnQgPSAnVGVtcGVyYXR1cmU6ICcgKyB0ZW1wO1xuXHRkaXNwbGF5VGVtcE1pbi50ZXh0Q29udGVudCA9ICdMb3cgVGVtcDogJyArIHRlbXBNaW47XG5cdGRpc3BsYXlUZW1wTWF4LnRleHRDb250ZW50ID0gJ0hpZ2ggVGVtcDogJyArIHRlbXBNYXg7XG5cdGRpc3BsYXlIdW1pZGl0eS50ZXh0Q29udGVudCA9ICdIdW1pZGl0eTogJyArIGh1bWlkaXR5O1xuXHRkaXNwbGF5V2luZFNwZWVkLnRleHRDb250ZW50ID0gJ1dpbmQgU3BlZWQ6ICcgKyB3aW5kU3BlZWQ7XG4gICAgY29uc3QgY3NzU2VsZWN0b3IgPSBtYWluLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbWFpbi5zbGljZSgxKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY3NzU2VsZWN0b3IpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tICcuL2dldC13ZWF0aGVyJztcblxuY29uc3QgYXBpX2tleSA9ICc1NDA1ZTNlOGE2NmI3ZDBiNTRlN2I5NDAxMTVkMDdmOSc7XG5cbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbmNvbnN0IHNlYXJjaFN1Z2dlc3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1zdWdnZXN0aW9ucycpO1xuY29uc3QgZGlzcGxheU1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuY29uc3QgZGlzcGxheUNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpO1xuY29uc3QgZGlzcGxheURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG5jb25zdCBkaXNwbGF5VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wJyk7XG5jb25zdCBkaXNwbGF5VGVtcE1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLW1pbicpO1xuY29uc3QgZGlzcGxheVRlbXBNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC1tYXgnKTtcbmNvbnN0IGRpc3BsYXlIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuY29uc3QgZGlzcGxheVdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLXNwZWVkJyk7XG5cbmZ1bmN0aW9uIHNob3dFcnJvcihpbnB1dCwgbWVzc2FnZSkge1xuXHRjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lucHV0LmlkfS1lcnJvcmApO1xuXHRlcnJvckRpdi5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXHRpbnB1dC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xufVxuXG5mdW5jdGlvbiBzaG93U3VjY2VzcyhpbnB1dCkge1xuXHRjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lucHV0LmlkfS1lcnJvcmApO1xuXHRlcnJvckRpdi5pbm5lckhUTUwgPSAnJztcblx0aW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTZWFyY2goKSB7XG5cdGNvbnN0IHNlYXJjaFZhbHVlID0gc2VhcmNoLnZhbHVlLnRyaW0oKTtcblx0aWYgKCFzZWFyY2hWYWx1ZSkge1xuXHRcdHNob3dFcnJvcihzZWFyY2gsICdQbGVhc2UgZW50ZXIgYSBzZWFyY2ggdGVybScpO1xuXHR9IGVsc2Uge1xuXHRcdHNob3dTdWNjZXNzKHNlYXJjaCk7XG5cdH1cbn1cblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB2YWxpZGF0ZVNlYXJjaCk7XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gJyc7XG5cdHNlYXJjaFN1Z2dlc3Rpb25zLmlubmVySFRNTCA9ICcnO1xuICAgIGRpc3BsYXlDaXR5LmlubmVySFRNTCA9ICcnO1xuICAgIGRpc3BsYXlNYWluLmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlUZW1wLmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5VGVtcE1pbi5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheVRlbXBNYXguaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlIdW1pZGl0eS5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheVdpbmRTcGVlZC5pbm5lckhUTUwgPSAnJztcblxuXHRjb25zdCBzZWFyY2hWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZS50cmltKCk7XG5cdHZhbGlkYXRlU2VhcmNoKCk7XG5cdGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvcicpO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0Y29uc3QgYXBpU3RyaW5nTG9jYXRpb24gPVxuXHRcdFx0J2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JyArXG5cdFx0XHRzZWFyY2hWYWx1ZSArXG5cdFx0XHQnJmxpbWl0PTUmYXBwaWQ9JyArXG5cdFx0XHRhcGlfa2V5O1xuXHRcdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlTdHJpbmdMb2NhdGlvbiwgeyBtb2RlOiAnY29ycycgfSk7XG5cdFx0XHRjb25zdCBzZWFyY2hBcnJheSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHNlYXJjaEFycmF5KSkge1xuXHRcdFx0XHRzZWFyY2hBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgY2l0eSA9IGVsZW1lbnQubmFtZTtcblx0XHRcdFx0XHRjb25zdCBzdGF0ZSA9IGVsZW1lbnQuc3RhdGU7XG5cdFx0XHRcdFx0Y29uc3QgY291bnRyeSA9IGVsZW1lbnQuY291bnRyeTtcblx0XHRcdFx0XHRjb25zdCBsYXRpdHVkZSA9IGVsZW1lbnQubGF0O1xuXHRcdFx0XHRcdGNvbnN0IGxvbmdpdHVkZSA9IGVsZW1lbnQubG9uO1xuXHRcdFx0XHRcdGNvbnN0IGxvY2F0aW9uSW5mbyA9IGNpdHkgKyAnLCAnICsgc3RhdGUgKyAnLCAnICsgY291bnRyeTtcblx0XHRcdFx0XHRjb25zdCBzdWdnZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRcdFx0XHRzdWdnZXN0aW9uLnRleHRDb250ZW50ID0gbG9jYXRpb25JbmZvO1xuXHRcdFx0XHRcdHNlYXJjaFN1Z2dlc3Rpb25zLmFwcGVuZENoaWxkKHN1Z2dlc3Rpb24pO1xuXHRcdFx0XHRcdHN1Z2dlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWFyY2gudmFsdWUgPSBsb2NhdGlvbkluZm87XG5cdFx0XHRcdFx0XHRzZWFyY2hTdWdnZXN0aW9ucy5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0XHRcdGdldFdlYXRoZXIoY2l0eSwgbGF0aXR1ZGUsIGxvbmdpdHVkZSwgYXBpX2tleSk7XG5cdFx0XHRcdFx0XHRzZWFyY2gudmFsdWUgPSAnJztcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGdldExvY2F0aW9uKCkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuXHRcdFx0YWxlcnQoJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIHRoZSBkYXRhLicpO1xuXHRcdH0pO1xuXHR9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==