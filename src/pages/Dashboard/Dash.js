import React, { useState, useEffect } from "react";
import "./Dash.css";
import DashCalendar from "./DashCalendar";
import { Button } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Weather from "../../dash-components/Weather/Weather";
import Map from "../../dash-components/Map/Map";
import CrimeSafety from "../../dash-components/CrimeSafety/CrimeSafety";
import TextEditor from "./TextEditor";
import API from "../../utils/API";

function Dash(props) {
  const [showSearch, setShowSearch] = useState(false);
  const [tripInfo, setTripInfo] = useState({
    city: "",
    completed: false,
    start_date: "",
    end_date: "",
    itinerary: [],
    report_doc: "",
    id: ""
  });

  const getTripInfo = id => {
    const token = localStorage.getItem("token");
    API.getOneTrip(token, id).then(result => {
      // console.log("API RESULT:", result);
      setTripInfo({
        city: result.city,
        completed: result.completed,
        start_date: result.start_date,
        end_date: result.end_date,
        itinerary: result.itinerary,
        report_doc: result.report_doc,
        id: result._id
      })
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getTripInfo(props.match.params.cityID)
  },[props.match.params.cityID])

  // console.log("DASH PROPS", props);
  return (
    <div className="dash">
      <div className="dash__calendar">
        <section className="dash__header">
          <h1>{tripInfo.city.toUpperCase()}</h1>
          <p>
            {`${tripInfo.start_date.substring(
              5,
              7
            )}/${tripInfo.start_date.substring(
              8,
              10
            )}/${tripInfo.start_date.substring(0, 4)} - ${tripInfo.end_date.substring(
              5,
              7
            )}/${tripInfo.end_date.substring(
              8,
              10
            )}/${tripInfo.end_date.substring(0, 4)}`}
          </p>
          <Button
            onClick={() => {
              setShowSearch(!showSearch);
            }}
            className="calendar__button"
          >
            <DateRangeIcon />
          </Button>
          {showSearch && (
            <DashCalendar
              // token={props.location.state.token}
              trip="5fb74a580f9401657c0cbe47"
            />
          )}
          <CrimeSafety city={tripInfo.city
              .substring(0, tripInfo.city.indexOf(","))
              .replace(/\s+/g, "-")
              .toLowerCase()} />
        </section>
      </div>
      <div className="component__div">
          <div className="weather__map">
            <Weather city={tripInfo.city.substring(0, tripInfo.city.indexOf(","))
                .replace(/\s+/g, "+")
                .toLowerCase()} />
            <Map
              tripInfo={tripInfo}
              // city={tripInfo.city.substring(0, tripInfo.city.indexOf(","))
              //   .replace(/\s+/g, "+")
              //   .toLowerCase()}
             />
          </div>
      <TextEditor
            // token={props.location.state.token}
            // TODO: update to not hardcode
            trip="5fb74a580f9401657c0cbe47"
            data={tripInfo.report_doc}
          />
      </div>
    </div>
  );
}

export default Dash;
