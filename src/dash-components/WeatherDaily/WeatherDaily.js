import React from 'react';
import "./WeatherDaily.css";

function WeatherDaily(props) {
    const [flip, setFlip] = React.useState(false);

    const toggleFlip = () => {
        setFlip(!flip);
    }

    return (
        <div className="weather-day flip-card" onClick={toggleFlip}>
            <div className="flip-card-inner" style={flip ? {transform:'rotateY(180deg)'} : null }>
                <div className="flip-card-front">
                    <h3>{new Date(props.date * 1000).toLocaleDateString('en-US')}</h3>
                    <img className="weather-icon" src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="Weather Icon" />
                    <h4>{props.main}</h4>
                    <p>{`${props.f}${String.fromCharCode(176)}F / ${props.c}${String.fromCharCode(176)}C`}</p>
                </div>
                <div className="flip-card-back">
                    <div className="back-content">
                        <p style={{marginTop:0}}><strong>CURRENT: </strong>{`${props.f}${String.fromCharCode(176)}F / ${props.c}${String.fromCharCode(176)}C`}</p>
                        <p><strong>FEELS LIKE: </strong>{`${props.f2}${String.fromCharCode(176)}F / ${props.c2}${String.fromCharCode(176)}C`}</p>
                        <p><strong>LOW: </strong>{`${props.fLow}${String.fromCharCode(176)}F / ${props.cLow}${String.fromCharCode(176)}C`}</p>
                        <p><strong>HIGH: </strong>{`${props.fHigh}${String.fromCharCode(176)}F / ${props.cHigh}${String.fromCharCode(176)}C`}</p>
                        <p><strong>HUMIDITY: </strong>{`${props.humidity}%`}</p>
                        <p><strong>WIND: </strong>{`${props.wind}mps / ${props.windmph}mph`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDaily
