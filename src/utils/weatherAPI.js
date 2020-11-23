import axios from "axios";

export default {
    getWeather: function(city) {
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=+${city}+&appid=e0b82fbe866155125ec89e15985f0d60`)
    },
    getCoordinates: function(city) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=+${city}+&appid=e0b82fbe866155125ec89e15985f0d60`)
    }
};