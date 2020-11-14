import React, { useState } from 'react';
import './Dash.css';
import DashCalendar from './DashCalendar';
import { Button } from "@material-ui/core";

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
                    variant="outlined"
                >
                    Calendar
                </Button>
            </div>
        </div>
    )
}

export default Dash

