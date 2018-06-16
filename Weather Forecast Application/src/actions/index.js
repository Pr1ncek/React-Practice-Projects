import axios from 'axios';

const API_KEY = "22f1803a2c94eaec4238583d837aa6d1";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},us&units=imperial`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}