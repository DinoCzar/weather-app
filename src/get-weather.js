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

export default getWeather;
