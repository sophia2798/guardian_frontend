import React, { Component } from 'react';
import "./Trips.css";
import SearchIcon from '@material-ui/icons/Search';
import Card from "../../card-components/TripCards/TripCard";
import TripSeed from "../../utils/seedTrip.json";

class Trips extends Component {
    state = {
        TripSeed
    };

    render() {
    return (
        <div className="trip-container">
            <div className="trips-header">
                <h1>TRIPS</h1>
                <button id="add-trip">+</button>
                <form>
                    <input type="text" placeholder="SEARCH TRIPS"/>
                    <button id="trip-search-submit"><SearchIcon/></button>
                </form>
            </div>
            <div className="trip-cards-container">
                {this.state.TripSeed.map(trip => (
                    <Card
                        title={trip.city.toUpperCase()}
                        start={trip.start}
                        end={trip.end}
                        image={trip.image}
                        key={trip.id}
                    />
                ))}
            </div>
        </div>
    )
    }
}

export default Trips