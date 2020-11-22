import React, { useState, useEffect } from "react";
import "./Map.css";
import weatherAPI from "../../utils/weatherAPI";
import GoogleMapExample from "./GoogleMap";

function Map(props) {
  const [infoMarkerID, setInfoMarkerID] = React.useState('');
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [itinerary, setItinerary] = useState([]);

  const toggleInfo = id => {
    setInfoMarkerID(id)
    console.log(infoMarkerID)
  };

  const getCenterCoordinates = city => {
    weatherAPI.getCoordinates(city)
    .then(result => {
        console.log(result.data.coord.lat, result.data.coord.lon)
        setLat(result.data.coord.lat);
        setLng(result.data.coord.lon);
    })
    .catch(err => console.log(err))
  };

  useEffect(() => {
    const arr = [];
    props.tripInfo.itinerary.map(element => {
      arr.push(element[0]);
      console.log(arr);
      setItinerary(arr);
    });
    getCenterCoordinates(props.tripInfo.city.substring(0, props.tripInfo.city.indexOf(",")).replace(/\s+/g, "+").toLowerCase());
  },[props.tripInfo, props.city]);

  return (
    <div className="map__container">
      <GoogleMapExample
        lat={lat}
        lng={lng}
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
