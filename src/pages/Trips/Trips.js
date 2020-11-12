import React from 'react';
import "./Trips.css";
import Card from "../../card-components/TripCards/TripCard";

function Trips() {
    return (
        <div className="trip-container">
            <div className="trips-header">
                <h1>TRIPS</h1>
                <button id="add-trip">+</button>
            </div>
            <div className="trip-cards-container">
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Trips