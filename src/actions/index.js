import axios from 'axios';

const API_KEY = '4062587d2ebbf382c8335a364140eb3f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city},ro`;
	const request = axios.get(url);
	// console.log('fetchWeather > Request: ', request);
	return {
		type: FETCH_WEATHER,
		payload: request
	}

}
