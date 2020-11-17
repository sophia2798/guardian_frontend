import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import "./Map.css";
import Pin from "./pin2.png";
import TripSeed from "../../utils/seedTrip.json";
const styles = require("./GoogleMapStyles.json");

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itinerary: TripSeed[2].itinerary,
      info: false
    }
  }

  toggleInfo = () => {
    this.setState({ info: !this.state.info })
  }
  
  render() {
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter={{ lat: 47.605, lng: -122.353 }}
        defaultZoom={13}
        defaultOptions={{ styles: styles }}
      >
        {this.state.itinerary.map(place => (
          <div className="marker">
          <Marker position={{lat: place.coordinates.lat, lng: place.coordinates.long}} title={place.location} icon={{url: Pin}} onClick={this.toggleInfo}/>
          <div className="marker-info" style={this.state.info ? {display:'block'} : {display:'none'}}>sdfsdfsdf</div>
          </div>
        ))}

      </GoogleMap>
    ));

    return (
      <div className="map__container">
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: "80vw" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
