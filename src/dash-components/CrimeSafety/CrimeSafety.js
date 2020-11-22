import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./CrimeSafety.css";

function CrimeSafety(props) {
    const [safety, setSafety] = useState('');
    const [color, setColor] = useState('');

    const safetyAPI = city => {
        return axios.get(`https://api.teleport.org/api/urban_areas/slug:${city}/scores/`)
    }

    const getRating = city => {
        safetyAPI(city)
        .then(result => {
            // console.log(result.data.categories[7].score_out_of_10);
            setSafety(result.data.categories[7].score_out_of_10.toFixed(1));
            setColor(result.data.categories[7].color);
        })
        .catch(err => console.log(err))
    };

    useEffect(() => {
        getRating(props.city);
        // console.log(safety);
    })

    return (
        <p className="crime-safety-container ">
            CRIME SAFTEY RATING: <span className="rating_num" style={{border:`2px solid ${color}`}}>{safety}</span>
        </p>
    )
}

export default CrimeSafety
