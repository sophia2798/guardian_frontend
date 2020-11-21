import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import "./Map.css";
import Pin from "./pin2.png";
import API from "../../utils/weatherAPI";
// import TripSeed from "../../utils/seedTrip.json";
const styles = require("./GoogleMapStyles.json");

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // itinerary: TripSeed[2].itinerary,
      infoMarkerID: '',
      isOpen: false,
      itinerary: props.itinerary[0],
      city: props.city,
      coordinates: {},
    }
  }

  toggleInfo = id => {
    this.setState({
      infoMarkerID: id
    })
    // console.log(this.state.infoMarkerID)
  };

  getCenterCoordinates = city => {
    API.getCoordinates(city)
    .then(result => {
      this.setState({
        coordinates: {
          lat: result.data.coord.lat,
          lng: result.data.coord.lon
        }
      })
    })
    .catch(err => console.log(err))
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

  componentDidMount = () => {
    console.log(this.state.city);
    this.getCenterCoordinates(this.state.city);
  }
  
  render() {
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
      // 35.0050, "long": 135.7649
        defaultCenter={{ lat: this.state.coordinates.lat, lng: this.state.coordinates.lng }}
        defaultZoom={13}
        defaultOptions={{ styles: styles }}
      >
        {console.log(this.state.infoMarkerID)};
        {this.state.itinerary.map((place, i) => {
          return (
          <div key={i} className="marker">
          <Marker position={{lat: parseFloat(place.coordinates.lat), lng: parseFloat(place.coordinates.lon)}} title={place.location} icon={{url: Pin}} onClick={() => this.toggleInfo(i)}>
              {(this.state.infoMarkerID === i) &&
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
