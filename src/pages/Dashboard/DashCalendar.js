import React, { useState, useEffect } from "react";
import "./DashCalendar.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import API from "../../utils/API";

function DashCalendar(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [tripDates, setTripDates] = useState({
    start_Date: "",
    end_Date: "",
  });

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);

    setTripDates({
      start_Date: ranges.selection.startDate,
      end_Date: ranges.selection.endDate,
    });
  }

  function handleDateUpdate() {
    console.log("Schwooop", startDate, endDate);
    API.updateTripDates(
      localStorage.getItem("token"),
      props.trip,
      startDate,
      endDate
    ).then(() => {
      console.log("successfully saved");
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
