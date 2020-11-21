import React, { useState, useEffect } from "react";
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import "./Map.css";
import Pin from "./pin2.png";
import API from "../../utils/weatherAPI";
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

function Map(props) {
  const [infoMarkerID, setInfoMarkerID] = React.useState('');
  const [itinerary, setItinerary] = useState(props.itinerary[0]);
  const [coordinates, setCoordinates] = useState({
    // lat: 40.71,
    // lng: -74.01
    lat: props.coordinates.lat,
    lng: props.coordinates.lng
  });

  const toggleInfo = id => {
    setInfoMarkerID(id)
    // console.log(this.state.infoMarkerID)
  };

  useEffect(() => {
    console.log("prop:", props.coordinates);
    console.log("state:", coordinates)
    setCoordinates({lat: props.coordinates.lat, lng: props.coordinates.lng});
  },[props])
//MAKE SEPARATE API CALL, PROTECTED, TO ACCESS TRIP INFO, THEN MAKE API CALL FOR COORDINATES AND SET STATE INSTEAD OF PASSING IN PROPS 
  return (
    <div className="map__container">
      {console.log("coord 2:", coordinates)}
      <GoogleMapExample
        lat={coordinates.lat}
        lng={coordinates.lng}
        itinerary={itinerary}
        toggleInfo={toggleInfo}
        infoMarkerID={infoMarkerID}
        containerElement={<div style={{ height: `500px`, width: "80vw" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default Map;
