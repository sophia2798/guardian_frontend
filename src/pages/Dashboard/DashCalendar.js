import React, { useState, useEffect } from "react";
import "./DashCalendar.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import API from "../../utils/API";

function DashCalendar(props) {
  console.log("CALENDAR PROPS", props)
  // Set states for start and end date using current trip dates
  const [startDate, setStartDate] = useState(new Date(props.startDate));
  const [endDate, setEndDate] = useState(new Date(props.endDate));

  // Calendar Selection Range, default to current trip dates
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // State managmenet, when calendar date is selected, update state
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  
  useEffect(() => {
    setStartDate(new Date(props.startDate))
    setEndDate(new Date(props.endDate))
  }, [props.startDate,props.endDate])

  

  // When Update button is selected, API request for updating the dates in database
  function handleDateUpdate() {
    API.updateTripDates(
      localStorage.getItem("token"),
      props.trip,
      startDate,
      endDate
    ).then(() => {
      console.log(`successfully saved: token=${localStorage.getItem("token")}, tripID: ${props.trip}, startdate ${startDate}`);
      props.getTripInfo(props.trip);
    });
  }

  return (
    <div>
      <button className="dashCalendar__button" onClick={handleDateUpdate}>
        Update
      </button>
      <div className="calendar">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      </div>
    </div>
  );
}

export default DashCalendar;