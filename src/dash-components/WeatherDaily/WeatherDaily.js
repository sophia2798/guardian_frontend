import React from 'react';
import "./WeatherDaily.css";

function WeatherDaily(props) {
    return (
        <div className="weather-day">
            <h3>{new Date(props.date * 1000).toLocaleDateString('en-US')}</h3>
            <img className="weather-icon" src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="Weather Icon" />
            <h4>{props.main}</h4>
            <p>{`${props.f}${String.fromCharCode(176)}F / ${props.c}${String.fromCharCode(176)}C`}</p>
        </div>
    )
}

export default WeatherDaily
