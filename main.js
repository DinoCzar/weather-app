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

function displayWeather(
	description,
	temp,
	tempMin,
	tempMax,
	humidity,
	windSpeed
) {
console.log('Weather: ' + description)
console.log('Temperature: ' + temp)
console.log('Low Temp: ' + tempMin)
console.log('High Temp: ' + tempMax)
console.log('Humidity: ' + humidity)
console.log('Wind Speed: ' + windSpeed)
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
					const locationInfo =
						city + ', ' + state + ', ' + country;
					const suggestion = document.createElement('li');
					suggestion.textContent = locationInfo;
					searchSuggestions.appendChild(suggestion);
					suggestion.addEventListener('click', () => {
						search.value = locationInfo;
						searchSuggestions.innerHTML = '';
						(0,_get_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(latitude, longitude, api_key);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxjQUFjO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ3hDMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051Qzs7QUFFdkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBVTtBQUNoQixNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXQtd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdldFdlYXRoZXIobGF0aXR1ZGUsIGxvbmdpdHVkZSwgYXBpX2tleSkge1xuXHRjb25zdCBhcGlTdHJpbmdXZWF0aGVyID1cblx0XHQnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PScgK1xuXHRcdGxhdGl0dWRlICtcblx0XHQnJmxvbj0nICtcblx0XHRsb25naXR1ZGUgK1xuXHRcdCcmYXBwaWQ9JyArXG5cdFx0YXBpX2tleTtcblx0YXN5bmMgZnVuY3Rpb24gcmV0cmVpdmVXZWF0aGVyRGF0YSgpIHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVN0cmluZ1dlYXRoZXIsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXHRcdGNvbnN0IHdlYXRoZXJBcnJheSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRjb25zdCBkZXNjcmlwdGlvbiA9IHdlYXRoZXJBcnJheS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXHRcdGNvbnN0IHRlbXAgPSB3ZWF0aGVyQXJyYXkubWFpbi50ZW1wO1xuXHRcdGNvbnN0IHRlbXBNaW4gPSB3ZWF0aGVyQXJyYXkubWFpbi50ZW1wX21pbjtcblx0XHRjb25zdCB0ZW1wTWF4ID0gd2VhdGhlckFycmF5Lm1haW4udGVtcF9tYXg7XG5cdFx0Y29uc3QgaHVtaWRpdHkgPSB3ZWF0aGVyQXJyYXkubWFpbi5odW1pZGl0eTtcblx0XHRjb25zdCB3aW5kU3BlZWQgPSB3ZWF0aGVyQXJyYXkud2luZC5zcGVlZDtcblx0XHRkaXNwbGF5V2VhdGhlcihkZXNjcmlwdGlvbiwgdGVtcCwgdGVtcE1pbiwgdGVtcE1heCwgaHVtaWRpdHksIHdpbmRTcGVlZCk7XG5cdH1cblx0cmV0cmVpdmVXZWF0aGVyRGF0YSgpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcblx0XHRhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGRhdGEuJyk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihcblx0ZGVzY3JpcHRpb24sXG5cdHRlbXAsXG5cdHRlbXBNaW4sXG5cdHRlbXBNYXgsXG5cdGh1bWlkaXR5LFxuXHR3aW5kU3BlZWRcbikge1xuY29uc29sZS5sb2coJ1dlYXRoZXI6ICcgKyBkZXNjcmlwdGlvbilcbmNvbnNvbGUubG9nKCdUZW1wZXJhdHVyZTogJyArIHRlbXApXG5jb25zb2xlLmxvZygnTG93IFRlbXA6ICcgKyB0ZW1wTWluKVxuY29uc29sZS5sb2coJ0hpZ2ggVGVtcDogJyArIHRlbXBNYXgpXG5jb25zb2xlLmxvZygnSHVtaWRpdHk6ICcgKyBodW1pZGl0eSlcbmNvbnNvbGUubG9nKCdXaW5kIFNwZWVkOiAnICsgd2luZFNwZWVkKVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tICcuL2dldC13ZWF0aGVyJztcblxuY29uc3QgYXBpX2tleSA9ICc1NDA1ZTNlOGE2NmI3ZDBiNTRlN2I5NDAxMTVkMDdmOSc7XG5cbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbmNvbnN0IHNlYXJjaFN1Z2dlc3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1zdWdnZXN0aW9ucycpO1xuXG5mdW5jdGlvbiBzaG93RXJyb3IoaW5wdXQsIG1lc3NhZ2UpIHtcblx0Y29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbnB1dC5pZH0tZXJyb3JgKTtcblx0ZXJyb3JEaXYuaW5uZXJIVE1MID0gbWVzc2FnZTtcblx0aW5wdXQuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbn1cblxuZnVuY3Rpb24gc2hvd1N1Y2Nlc3MoaW5wdXQpIHtcblx0Y29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbnB1dC5pZH0tZXJyb3JgKTtcblx0ZXJyb3JEaXYuaW5uZXJIVE1MID0gJyc7XG5cdGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2VhcmNoKCkge1xuXHRjb25zdCBzZWFyY2hWYWx1ZSA9IHNlYXJjaC52YWx1ZS50cmltKCk7XG5cdGlmICghc2VhcmNoVmFsdWUpIHtcblx0XHRzaG93RXJyb3Ioc2VhcmNoLCAnUGxlYXNlIGVudGVyIGEgc2VhcmNoIHRlcm0nKTtcblx0fSBlbHNlIHtcblx0XHRzaG93U3VjY2VzcyhzZWFyY2gpO1xuXHR9XG59XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdmFsaWRhdGVTZWFyY2gpO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0c2VhcmNoU3VnZ2VzdGlvbnMuaW5uZXJIVE1MID0gJyc7XG5cblx0Y29uc3Qgc2VhcmNoVmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUudHJpbSgpO1xuXHR2YWxpZGF0ZVNlYXJjaCgpO1xuXHRjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3InKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuXHRcdGNvbnN0IGFwaVN0cmluZ0xvY2F0aW9uID1cblx0XHRcdCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPScgK1xuXHRcdFx0c2VhcmNoVmFsdWUgK1xuXHRcdFx0JyZsaW1pdD01JmFwcGlkPScgK1xuXHRcdFx0YXBpX2tleTtcblx0XHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0XHRhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpU3RyaW5nTG9jYXRpb24sIHsgbW9kZTogJ2NvcnMnIH0pO1xuXHRcdFx0Y29uc3Qgc2VhcmNoQXJyYXkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShzZWFyY2hBcnJheSkpIHtcblx0XHRcdFx0c2VhcmNoQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGNpdHkgPSBlbGVtZW50Lm5hbWU7XG5cdFx0XHRcdFx0Y29uc3Qgc3RhdGUgPSBlbGVtZW50LnN0YXRlO1xuXHRcdFx0XHRcdGNvbnN0IGNvdW50cnkgPSBlbGVtZW50LmNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGl0dWRlID0gZWxlbWVudC5sYXQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IGVsZW1lbnQubG9uO1xuXHRcdFx0XHRcdGNvbnN0IGxvY2F0aW9uSW5mbyA9XG5cdFx0XHRcdFx0XHRjaXR5ICsgJywgJyArIHN0YXRlICsgJywgJyArIGNvdW50cnk7XG5cdFx0XHRcdFx0Y29uc3Qgc3VnZ2VzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0XHRcdFx0c3VnZ2VzdGlvbi50ZXh0Q29udGVudCA9IGxvY2F0aW9uSW5mbztcblx0XHRcdFx0XHRzZWFyY2hTdWdnZXN0aW9ucy5hcHBlbmRDaGlsZChzdWdnZXN0aW9uKTtcblx0XHRcdFx0XHRzdWdnZXN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VhcmNoLnZhbHVlID0gbG9jYXRpb25JbmZvO1xuXHRcdFx0XHRcdFx0c2VhcmNoU3VnZ2VzdGlvbnMuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdFx0XHRnZXRXZWF0aGVyKGxhdGl0dWRlLCBsb25naXR1ZGUsIGFwaV9rZXkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Z2V0TG9jYXRpb24oKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRhbGVydCgnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGRhdGEuJyk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LWltYWdlJyk7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNvbnNvbGUubG9nKCdnZXQgd2VhdGhlciBmcm9tIGFwaScpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=