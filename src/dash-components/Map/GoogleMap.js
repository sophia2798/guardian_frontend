import React, { useState, useEffect } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import Pin from "./pin2.png";
const styles = require("./GoogleMapStyles.json");

function GoogleMapExample(props) {
    const [centLat, setCentLat] = useState("");
    const [centLng, setCentLng] = useState("");
    const [itinerary, setItinerary] = useState(null)

    useEffect(() => {
        setCentLat(props.lat);
        setCentLng(props.lng);
        setItinerary(props.itinerary);
    },[props.lat, props.lng, props.itinerary]);

    return (
        <GoogleMap
        center={{ lat: centLat, lng: centLng}}
        defaultZoom={12}
        defaultOptions={{ styles: styles }}
        >
            {itinerary && itinerary.map((place, i) => {
                // console.log("MAP CHECK", place)
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
    )
}

export default withGoogleMap(GoogleMapExample);