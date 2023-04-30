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
}

export default getWeather;
