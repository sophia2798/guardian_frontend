import React, { useState, useEffect } from "react";
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import "./Map.css";
import Pin from "./pin2.png";
import weatherAPI from "../../utils/weatherAPI";
const styles = require("./GoogleMapStyles.json");

const GoogleMapExample = withGoogleMap((props) => (
  <GoogleMap
    defaultCenter={{ lat: props.lat, lng: props.lng}}
    defaultZoom={12}
    defaultOptions={{ styles: styles }}
  >
    {/* {console.log("ITINERARY PROPS:", props.itinerary)}
    {props.itinerary.map((place, i) => {
      return (
      <div key={i} className="marker">
      <Marker position={{lat: parseFloat(place.coordinates.lat), lng: parseFloat(place.coordinates.lng)}} title={place.location} icon={{url: Pin}} onClick={() => props.toggleInfo(i)}>
          {(props.infoMarkerID === i) &&
          <InfoWindow
            position={{lat: parseFloat(place.coordinates.lat), lng: parseFloat(place.coordinates.lng)}}
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
    })} */}

  </GoogleMap>
));

function Map(props) {
  const [infoMarkerID, setInfoMarkerID] = React.useState('');
  const [coordinates, setCoordinates] = useState({
    lat: "",
    lng: ""
  });
  const [itinerary, setItinerary] = useState({
    location: "",
    time: "",
    coordinates: {lat: "", lng: ""}
  })

  const toggleInfo = id => {
    setInfoMarkerID(id)
    console.log(infoMarkerID)
  };

  const getCenterCoordinates = city => {
    weatherAPI.getCoordinates(city)
    .then(result => {
      setCoordinates({
          lat: result.data.coord.lat,
          lng: result.data.coord.lon
      });
      console.log("FUNCTION CHECK STATE:", coordinates)
    })
    .catch(err => console.log(err))
  };

  useEffect(() => {
    console.log("USE EFFECT CHECK", props.tripInfo)
    // setItinerary(props.itinerary.map(element => (
    //   {
    //     location: element.location,
    //     time: element.time,
    //     coordinates: {lat: element.coordinates.lat, lng: element.coordinates.lon}
    //   }
    // )));
    // getCenterCoordinates(props.city);
    // console.log(coordinates)
  },[]);

  return (
    <div className="map__container">
      <GoogleMapExample
        lat={35.012}
        lng={135.768}
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
