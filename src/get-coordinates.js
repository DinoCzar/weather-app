import getWeather from './get-weather';

function getCoordinates(name, state, country) {
    console.log(name + state + country)
    getWeather(name);
}

export default getCoordinates;