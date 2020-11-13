import React from 'react';
import "./Trips.css";
import SearchIcon from '@material-ui/icons/Search';
import Card from "../../card-components/TripCards/TripCard";

function Trips() {
    return (
        <div className="trip-container">
            <div className="trips-header">
                <h1>TRIPS</h1>
                <button id="add-trip">+</button>
                <form>
                    <input type="text" placeholder="Search Trips"/>
                    <button id="trip-search-submit"><SearchIcon/></button>
                </form>
            </div>
            <div className="trip-cards-container">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Trips