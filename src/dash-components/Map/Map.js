import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import "./Map.css";
const styles = require("./GoogleMapStyles.json");

class Map extends Component {
  render() {
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap
        defaultCenter={{ lat: 47.605, lng: -122.353 }}
        defaultZoom={13}
        defaultOptions={{ styles: styles }}
      ></GoogleMap>
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
