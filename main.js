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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ2xFMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051Qzs7QUFFdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBVTtBQUNoQjtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXQtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSwgbGF0aXR1ZGUsIGxvbmdpdHVkZSwgYXBpX2tleSkge1xuXHRjb25zdCBhcGlTdHJpbmdXZWF0aGVyID1cblx0XHQnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PScgK1xuXHRcdGxhdGl0dWRlICtcblx0XHQnJmxvbj0nICtcblx0XHRsb25naXR1ZGUgK1xuXHRcdCcmYXBwaWQ9JyArXG5cdFx0YXBpX2tleSArICcmdW5pdHM9aW1wZXJpYWwnO1xuXHRhc3luYyBmdW5jdGlvbiByZXRyZWl2ZVdlYXRoZXJEYXRhKCkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpU3RyaW5nV2VhdGhlciwgeyBtb2RlOiAnY29ycycgfSk7XG5cdFx0Y29uc3Qgd2VhdGhlckFycmF5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdGNvbnN0IG1haW4gPSB3ZWF0aGVyQXJyYXkud2VhdGhlclswXS5tYWluO1xuXHRcdGNvbnN0IGRlc2NyaXB0aW9uID0gd2VhdGhlckFycmF5LndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cdFx0Y29uc3QgdGVtcCA9IE1hdGguZmxvb3Iod2VhdGhlckFycmF5Lm1haW4udGVtcCk7XG5cdFx0Y29uc3QgdGVtcE1pbiA9IE1hdGguZmxvb3Iod2VhdGhlckFycmF5Lm1haW4udGVtcF9taW4pO1xuXHRcdGNvbnN0IHRlbXBNYXggPSBNYXRoLmZsb29yKHdlYXRoZXJBcnJheS5tYWluLnRlbXBfbWF4KTtcblx0XHRjb25zdCBodW1pZGl0eSA9IE1hdGguZmxvb3Iod2VhdGhlckFycmF5Lm1haW4uaHVtaWRpdHkpO1xuXHRcdGNvbnN0IHdpbmRTcGVlZCA9IE1hdGguZmxvb3Iod2VhdGhlckFycmF5LndpbmQuc3BlZWQpO1xuXHRcdGRpc3BsYXlXZWF0aGVyKFxuXHRcdFx0Y2l0eSxcblx0XHRcdG1haW4sXG5cdFx0XHRkZXNjcmlwdGlvbixcblx0XHRcdHRlbXAsXG5cdFx0XHR0ZW1wTWluLFxuXHRcdFx0dGVtcE1heCxcblx0XHRcdGh1bWlkaXR5LFxuXHRcdFx0d2luZFNwZWVkXG5cdFx0KTtcblx0fVxuXHRyZXRyZWl2ZVdlYXRoZXJEYXRhKCkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuXHRcdGFsZXJ0KCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyB0aGUgZGF0YS4nKTtcblx0fSk7XG59XG5cbmNvbnN0IGRpc3BsYXlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheS1kaXYnKTtcbmNvbnN0IGRpc3BsYXlDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbmNvbnN0IGRpc3BsYXlNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbmNvbnN0IGRpc3BsYXlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuY29uc3QgZGlzcGxheVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpO1xuY29uc3QgZGlzcGxheVRlbXBNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC1taW4nKTtcbmNvbnN0IGRpc3BsYXlUZW1wTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAtbWF4Jyk7XG5jb25zdCBkaXNwbGF5SHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcbmNvbnN0IGRpc3BsYXlXaW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1zcGVlZCcpO1xuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihcblx0Y2l0eSxcblx0bWFpbixcblx0ZGVzY3JpcHRpb24sXG5cdHRlbXAsXG5cdHRlbXBNaW4sXG5cdHRlbXBNYXgsXG5cdGh1bWlkaXR5LFxuXHR3aW5kU3BlZWRcbikge1xuXHRkaXNwbGF5Q2l0eS50ZXh0Q29udGVudCA9IGNpdHk7XG5cdGRpc3BsYXlNYWluLnRleHRDb250ZW50ID0gbWFpbjtcblx0ZGlzcGxheURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cdGRpc3BsYXlUZW1wLnRleHRDb250ZW50ID0gJ1RlbXBlcmF0dXJlOiAnICsgdGVtcCArICdcXHUwMEIwRic7XG5cdGRpc3BsYXlUZW1wTWluLnRleHRDb250ZW50ID0gJ0xvdzogJyArIHRlbXBNaW4gKyAnXFx1MDBCMEYnO1xuXHRkaXNwbGF5VGVtcE1heC50ZXh0Q29udGVudCA9ICdIaWdoOiAnICsgdGVtcE1heCArICdcXHUwMEIwRic7XG5cdGRpc3BsYXlIdW1pZGl0eS50ZXh0Q29udGVudCA9ICdIdW1pZGl0eTogJyArIGh1bWlkaXR5ICsgJyUnO1xuXHRkaXNwbGF5V2luZFNwZWVkLnRleHRDb250ZW50ID0gJ1dpbmQ6ICcgKyB3aW5kU3BlZWQgKyAnbXBoJztcblx0Y29uc3QgY3NzU2VsZWN0b3IgPSBtYWluLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbWFpbi5zbGljZSgxKTtcblx0ZGlzcGxheURpdi5jbGFzc0xpc3QuYWRkKGNzc1NlbGVjdG9yKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9nZXQtd2VhdGhlcic7XG5cbmNvbnN0IGFwaV9rZXkgPSAnNTQwNWUzZThhNjZiN2QwYjU0ZTdiOTQwMTE1ZDA3ZjknO1xuXG5jb25zdCBkaXNwbGF5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktZGl2Jyk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG5jb25zdCBzZWFyY2hTdWdnZXN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtc3VnZ2VzdGlvbnMnKTtcbmNvbnN0IGRpc3BsYXlNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcbmNvbnN0IGRpc3BsYXlDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbmNvbnN0IGRpc3BsYXlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuY29uc3QgZGlzcGxheVRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpO1xuY29uc3QgZGlzcGxheVRlbXBNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC1taW4nKTtcbmNvbnN0IGRpc3BsYXlUZW1wTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAtbWF4Jyk7XG5jb25zdCBkaXNwbGF5SHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcbmNvbnN0IGRpc3BsYXlXaW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1zcGVlZCcpO1xuXG5kaXNwbGF5RGl2LmNsYXNzTGlzdC5hZGQoJ2JhY2tncm91bmQtaW1hZ2UnKTtcbmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG5mdW5jdGlvbiBzaG93RXJyb3IoaW5wdXQsIG1lc3NhZ2UpIHtcblx0Y29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbnB1dC5pZH0tZXJyb3JgKTtcblx0ZXJyb3JEaXYuaW5uZXJIVE1MID0gbWVzc2FnZTtcblx0aW5wdXQuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbn1cblxuZnVuY3Rpb24gc2hvd1N1Y2Nlc3MoaW5wdXQpIHtcblx0Y29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbnB1dC5pZH0tZXJyb3JgKTtcblx0ZXJyb3JEaXYuaW5uZXJIVE1MID0gJyc7XG5cdGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2VhcmNoKCkge1xuXHRjb25zdCBzZWFyY2hWYWx1ZSA9IHNlYXJjaC52YWx1ZS50cmltKCk7XG5cdGlmICghc2VhcmNoVmFsdWUpIHtcblx0XHRzaG93RXJyb3Ioc2VhcmNoLCAnUGxlYXNlIGVudGVyIGEgc2VhcmNoIHRlcm0nKTtcblx0fSBlbHNlIHtcblx0XHRzaG93U3VjY2VzcyhzZWFyY2gpO1xuXHR9XG59XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdmFsaWRhdGVTZWFyY2gpO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0ZGlzcGxheURpdi5jbGFzc05hbWUgPSAnJztcblx0c2VhcmNoU3VnZ2VzdGlvbnMuaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlDaXR5LmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5TWFpbi5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheURlc2NyaXB0aW9uLmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5VGVtcC5pbm5lckhUTUwgPSAnJztcblx0ZGlzcGxheVRlbXBNaW4uaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlUZW1wTWF4LmlubmVySFRNTCA9ICcnO1xuXHRkaXNwbGF5SHVtaWRpdHkuaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlXaW5kU3BlZWQuaW5uZXJIVE1MID0gJyc7XG5cdGRpc3BsYXlEaXYuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC1pbWFnZScpO1xuXHRjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXHRjb25zdCBzZWFyY2hWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZS50cmltKCk7XG5cdHZhbGlkYXRlU2VhcmNoKCk7XG5cdGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvcicpO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0Y29uc3QgYXBpU3RyaW5nTG9jYXRpb24gPVxuXHRcdFx0J2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JyArXG5cdFx0XHRzZWFyY2hWYWx1ZSArXG5cdFx0XHQnJmxpbWl0PTUmYXBwaWQ9JyArXG5cdFx0XHRhcGlfa2V5O1xuXHRcdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlTdHJpbmdMb2NhdGlvbiwgeyBtb2RlOiAnY29ycycgfSk7XG5cdFx0XHRjb25zdCBzZWFyY2hBcnJheSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHNlYXJjaEFycmF5KSkge1xuXHRcdFx0XHRzZWFyY2hBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgY2l0eSA9IGVsZW1lbnQubmFtZTtcblx0XHRcdFx0XHRjb25zdCBzdGF0ZSA9IGVsZW1lbnQuc3RhdGU7XG5cdFx0XHRcdFx0Y29uc3QgY291bnRyeSA9IGVsZW1lbnQuY291bnRyeTtcblx0XHRcdFx0XHRjb25zdCBsYXRpdHVkZSA9IGVsZW1lbnQubGF0O1xuXHRcdFx0XHRcdGNvbnN0IGxvbmdpdHVkZSA9IGVsZW1lbnQubG9uO1xuXHRcdFx0XHRcdGNvbnN0IGxvY2F0aW9uSW5mbyA9IGNpdHkgKyAnLCAnICsgc3RhdGUgKyAnLCAnICsgY291bnRyeTtcblx0XHRcdFx0XHRjb25zdCBzdWdnZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRcdFx0XHRzdWdnZXN0aW9uLnRleHRDb250ZW50ID0gbG9jYXRpb25JbmZvO1xuXHRcdFx0XHRcdHNlYXJjaFN1Z2dlc3Rpb25zLmFwcGVuZENoaWxkKHN1Z2dlc3Rpb24pO1xuXHRcdFx0XHRcdHN1Z2dlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWFyY2gudmFsdWUgPSBsb2NhdGlvbkluZm87XG5cdFx0XHRcdFx0XHRzZWFyY2hTdWdnZXN0aW9ucy5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0XHRcdGdldFdlYXRoZXIoY2l0eSwgbGF0aXR1ZGUsIGxvbmdpdHVkZSwgYXBpX2tleSk7XG5cdFx0XHRcdFx0XHRzZWFyY2gudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Z2V0TG9jYXRpb24oKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGRhdGEuJyk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9