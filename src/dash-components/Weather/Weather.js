import React, { useState, useEffect } from 'react';
import API from "../../utils/weatherAPI";
import "./Weather.css";
import Day from "../WeatherDaily/WeatherDaily";

function Weather(props) {
    const [weather, setWeather] = useState([]);

    const getWeather = city => {
        API.getWeather(city)
        .then(result => {
            // each 24 hour index
            const res = result.data.list;
            const resArr = [res[0],res[8],res[16],res[24],res[32]];
            setWeather(resArr);
            // console.log(this.state.weather);
        })
        .catch(err => console.log(err))
    };

    const toF = temp => {
        return ((temp - 273.15) * 9/5 + 32).toFixed(0)
    };

    const toC = temp => {
        return ((temp - 273.15)).toFixed(0)
    };

    useEffect(() => {
        getWeather(props.city)
    })

    return (
        <div className="weather-container">
            <section className="weather-header">
                <h1>WEATHER DASHBOARD</h1>
                <p>5-DAY FORECAST</p>
            </section>
            <section className="weather-body">
                {weather.map(day => (
                    <Day
                    date={day.dt}
                    icon={day.weather[0].icon}
                    main={day.weather[0].main.toUpperCase()}
                    f={toF(parseInt(day.main.temp))}
                    c={toC(parseInt(day.main.temp))}
                    f2={toF(parseInt(day.main.feels_like))}
                    c2={toC(parseInt(day.main.feels_like))}
                    fLow={toF(parseInt(day.main.temp_min))}
                    cLow={toC(parseInt(day.main.temp_min))}
                    fHigh={toF(parseInt(day.main.temp_max))}
                    cHigh={toC(parseInt(day.main.temp_max))}
                    humidity={day.main.humidity}
                    wind={day.wind.speed}
                    windmph = {(parseInt(day.wind.speed)*2.237).toFixed(0)}
                    />
                ))}
            </section>
        </div>
    )
}

export default Weather
