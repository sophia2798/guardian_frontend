import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import "./Map.css";
import Pin from "./pin2.png";
const styles = require("./GoogleMapStyles.json");

const GoogleMapExample = withGoogleMap((props) => (
  <GoogleMap
  // 35.0050, "long": 135.7649
    defaultCenter={{ lat: props.lat, lng: props.lng}}
    defaultZoom={12}
    defaultOptions={{ styles: styles }}
  >
    {/* {console.log(this.state.infoMarkerID)}; */}
    {props.itinerary.map((place, i) => {
      return (
      <div key={i} className="marker">
      <Marker position={{lat: parseFloat(place.coordinates.lat), lng: parseFloat(place.coordinates.lon)}} title={place.location} icon={{url: Pin}} onClick={() => props.toggleInfo(i)}>
          {(props.infoMarkerID === i) &&
          <InfoWindow
            position={{lat: parseFloat(place.coordinates.lat), lng: parseFloat(place.coordinates.lon)}}
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

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoMarkerID: '',
      isOpen: false,
      itinerary: props.itinerary[0],
      city: props.city,
      coordinates: {lat: props.coordinates.coordinates.lat, lng: props.coordinates.coordinates.lng},
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
    return (
      <div className="map__container">
        <GoogleMapExample
          lat={this.state.coordinates.lat}
          lng={this.state.coordinates.lng}
          itinerary={this.state.itinerary}
          toggleInfo={this.toggleInfo}
          infoMarkerID={this.state.infoMarkerID}
          containerElement={<div style={{ height: `500px`, width: "80vw" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
