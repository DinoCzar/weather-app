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

export default getWeather;
