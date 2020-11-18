import React, { useState } from "react";
import "./Dash.css";
import DashCalendar from "./DashCalendar";
import { Button } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Weather from "../../dash-components/Weather/Weather";
import Map from "../../dash-components/Map/Map";
import CrimeSafety from "../../dash-components/CrimeSafety/CrimeSafety";
import TextEditor from "./TextEditor";

function Dash(props) {
  const [showSearch, setShowSearch] = useState(false);

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
      <Map />
      <TextEditor />
    </div>
  );
}

export default Dash;
