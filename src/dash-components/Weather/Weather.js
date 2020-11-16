import React, { useState, Component } from 'react';
import API from "../../utils/weatherAPI";
import "./Weather.css";
import Day from "../WeatherDaily/WeatherDaily";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: [0,1,2,3,4]
        }
    };

    getWeather = city => {
        API.getWeather(city)
        .then(result => {
            // each 24 hour index
            const res = result.data.list;
            const resArr = [res[0],res[8],res[16],res[24],res[32]];
            this.setState({ weather: resArr });
            console.log(this.state.weather);
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
        // this.getWeather('Seattle');
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
                    // date={day.dt}
                    // icon={day.weather[0].icon}
                    // main={day.weather[0].main.toUpperCase()}
                    // f={this.toF(parseInt(day.main.temp))}
                    // c={this.toC(parseInt(day.main.temp))}
                    date={1605506400}
                    icon={'04n'}
                    main={'CLOUDS'}
                    f={this.toF(parseInt('281.75'))}
                    c={this.toC(parseInt('281.75'))}
                    f2={this.toF(parseInt('278.05'))}
                    c2={this.toC(parseInt('278.05'))}
                    fLow={this.toF(parseInt('280.69'))}
                    cLow={this.toC(parseInt('280.69'))}
                    fHigh={this.toF(parseInt('281.35'))}
                    cHigh={this.toC(parseInt('281.35'))}
                    humidity={81}
                    wind={3.14}
                    windmph = {(3.14*2.237).toFixed(0)}
                    />
                ))}
            </section>
        </div>
    )
    };
}

export default Weather
