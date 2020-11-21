import React, { useState, Component } from 'react';
import API from "../../utils/weatherAPI";
import "./Weather.css";
import Day from "../WeatherDaily/WeatherDaily";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: []
        }
    };

    getWeather = city => {
        API.getWeather(city)
        .then(result => {
            // each 24 hour index
            const res = result.data.list;
            const resArr = [res[0],res[8],res[16],res[24],res[32]];
            this.setState({ weather: resArr });
            // console.log(this.state.weather);
        })
        .catch(err => console.log(err))
    };

    toF = temp => {
        return ((temp - 273.15) * 9/5 + 32).toFixed(0)
    };

    toC = temp => {
        return ((temp - 273.15)).toFixed(0)
    };

    componentDidMount = () => {
        this.getWeather(this.props.city);
    }

    render() {
    return (
        <div className="weather-container">
            <section className="weather-header">
                <h1>WEATHER DASHBOARD</h1>
                <p>5-DAY FORECAST</p>
            </section>
            <section className="weather-body">
                {this.state.weather.map(day => (
                    <Day
                    date={day.dt}
                    icon={day.weather[0].icon}
                    main={day.weather[0].main.toUpperCase()}
                    f={this.toF(parseInt(day.main.temp))}
                    c={this.toC(parseInt(day.main.temp))}
                    f2={this.toF(parseInt(day.main.feels_like))}
                    c2={this.toC(parseInt(day.main.feels_like))}
                    fLow={this.toF(parseInt(day.main.temp_min))}
                    cLow={this.toC(parseInt(day.main.temp_min))}
                    fHigh={this.toF(parseInt(day.main.temp_max))}
                    cHigh={this.toC(parseInt(day.main.temp_max))}
                    humidity={day.main.humidity}
                    wind={day.wind.speed}
                    windmph = {(parseInt(day.wind.speed)*2.237).toFixed(0)}
                    />
                ))}
            </section>
        </div>
    )
    };
}

export default Weather
