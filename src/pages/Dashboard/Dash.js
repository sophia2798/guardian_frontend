import React, { useState } from 'react';
import './Dash.css';
import DashCalendar from './DashCalendar';
import { Button } from "@material-ui/core";
import DateRangeIcon from '@material-ui/icons/DateRange';
import Weather from "../../dash-components/Weather/Weather";

function Dash() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="dash">
            <div className="dash__calendar">
                {showSearch && <DashCalendar />}
                <Button
                    onClick={
                        () => {
                            setShowSearch(!showSearch)
                        }
                    }
                    className="calendar__button"
                >
                    <DateRangeIcon
                    />
                </Button>
                <Weather/>
            </div>
        </div>
    )
}

export default Dash

