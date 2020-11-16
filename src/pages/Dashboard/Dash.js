import React, { useState } from "react";
import "./Dash.css";
import DashCalendar from "./DashCalendar";
import { Button } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Weather from "../../dash-components/Weather/Weather";
import Map from "../../dash-components/Map/Map";
import CrimeSaftey from "../../dash-components/CrimeSafety/CrimeSafety";

function Dash() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="dash">
      <div className="dash__calendar">
        <section className="dash__header">
            <h1>SEATTLE, WA</h1>
            <p>12/14/2020 - 12/20/2020</p>
            <CrimeSaftey city='seattle'/>
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
      <Weather />
      <Map></Map>
    </div>
  );
}

export default Dash;
