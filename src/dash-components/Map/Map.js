import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import "./Map.css";
import Pin from "./pin2.png";
import TripSeed from "../../utils/seedTrip.json";
const styles = require("./GoogleMapStyles.json");

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itinerary: TripSeed[2].itinerary,
      infoMarkerID: '',
      isOpen: false
    }
  }

  toggleInfo = id => {
    this.setState({
      infoMarkerID: id
    })
    // console.log(this.state.infoMarkerID)
  };

  handleToggleOpen = () => {
    this.setState({
      isOpen: true
    })
    console.log(this.state.isOpen)
  }

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    })
    console.log(this.state.isOpen)
  }
  
  render() {
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter={{ lat: 47.605, lng: -122.353 }}
        defaultZoom={13}
        defaultOptions={{ styles: styles }}
      >
        {console.log(this.state.infoMarkerID)};
        {this.state.itinerary.map((place, i) => {
          return (
          <div key={i} className="marker">
          <Marker position={{lat: place.coordinates.lat, lng: place.coordinates.long}} title={place.location} icon={{url: Pin}} onClick={() => this.toggleInfo(i)}>
              {(this.state.infoMarkerID === i) &&
              <InfoWindow
                position={{lat: place.coordinates.lat, lng: place.coordinates.long}}
              >
                <div style={{background:'white'}} className="info-window">
                  <p style={{marginTop:0}}><strong>{place.location.toUpperCase()}</strong></p>
                  <p>{place.time}</p>
                </div>
              </InfoWindow>
              }
          </Marker>
          </div>
          )
        })}

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
