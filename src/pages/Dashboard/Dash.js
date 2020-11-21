import React, { useState, useEffect } from "react";
import "./Dash.css";
import DashCalendar from "./DashCalendar";
import { Button } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Weather from "../../dash-components/Weather/Weather";
import Map from "../../dash-components/Map/Map";
import CrimeSafety from "../../dash-components/CrimeSafety/CrimeSafety";
import TextEditor from "./TextEditor";
import API from "../../utils/weatherAPI";

function Dash(props) {
  const [showSearch, setShowSearch] = useState(false);
  const [coordinates, setCoordinates] = useState({})

  const getCenterCoordinates = city => {
    API.getCoordinates(city)
    .then(result => {
      setCoordinates({
          lat: result.data.coord.lat,
          lng: result.data.coord.lon
      })
    })
    .catch(err => console.log(err))
  };

  useEffect(() => {
    getCenterCoordinates(props.location.state.cityWeather);
  },[])

  return (
    <div className="dash">
      <div className="dash__calendar">
        <section className="dash__header">
          <h1>{props.location.state.title}</h1>
          <p>{`${props.location.state.startDate} - ${props.location.state.endDate}`}</p>
          <CrimeSafety city={props.location.state.city} />
        </section>
        {showSearch && <DashCalendar />}
        <Button
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          className="calendar__button"
        >
          <DateRangeIcon />
        </Button>
      </div>
      <Weather city={props.location.state.cityWeather} />
      <Map
      itinerary={props.location.state.itinerary}
      coordinates={coordinates}
      />
      <TextEditor
        token={props.location.state.token}
        // TODO: update to not hardcode
        trip="5fb74a580f9401657c0cbe47"
        data={props.location.state.report_doc}
      />
    </div>
  );
}

export default Dash;
