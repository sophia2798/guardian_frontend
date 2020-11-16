import React from 'react';
import API from "../../utils/weatherAPI";
import "./Weather.css";

function Weather() {
    return (
        <div className="weather-container">
            <section className="weather-header">
                <h1>WEATHER DASHBOARD</h1>
                <p>5-DAY FORECAST</p>
            </section>
            <section className="weather-body">
                <div className="weather-day">1</div>
                <div className="weather-day">2</div>
                <div className="weather-day">3</div>
                <div className="weather-day">4</div>
                <div className="weather-day">5</div>
            </section>
        </div>
    )
}

export default Weather
