import React, { Component } from 'react';
import "./Trips.css";
import SearchIcon from '@material-ui/icons/Search';
import Card from "../../card-components/TripCards/TripCard";
import TripSeed from "../../utils/seedTrip.json";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from "axios";
import darkLogo from "../../images/logo-dark.jpeg";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#111',
    border: '3px solid #404040',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '10px'
  },
}));

function Trips(props) {
    
    const [trips, setTrips] = React.useState(props.trips);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [blur, setBlur] = React.useState(false);
    const [image, setImage] = React.useState([]);
  
    const handleOpen = () => {
      setOpen(true);
      setBlur(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setBlur(false);
    };

    const cityAPI = city => {
        return axios.get(`https://api.teleport.org/api/urban_areas/slug:${city}/images/`)
    };

    const getCityImg = async () => {
        const imageArr =[];
        for (var i=0; i < trips.length; i++) {
            await cityAPI(trips[i].city.substring(0, trips[i].city.indexOf(",")).replace(/\s+/g, '-').toLowerCase())
            .then(result => {
                // console.log(result)
                // console.log(result.data.photos[0].image.web)
                const imgURL = result.data.photos[0].image.web;
                imageArr.push(imgURL);
            })
            .catch(err => {
                imageArr.push("/static/media/logo-dark.3594f758.jpeg")
            })
        }
        setImage(imageArr);
    };

    React.useEffect(() => {
        getCityImg();
        console.log(image);
    },[trips])

    console.log(trips)
    return (
        <div className="trip-container" style={blur ? {filter:'blur(2px)'} : null}>
            <div className="trips-header">
                <h1>TRIPS</h1>
                <button onClick={handleOpen} id="add-trip">+</button>
                <form>
                    <input type="text" placeholder="SEARCH TRIPS"/>
                    <button id="trip-search-submit"><SearchIcon className="search__icon"/></button>
                </form>
            </div>
            <div className="trip-cards-container">
                {trips.map((trip, i) => {
                    return (<Card
                        tripObj={trip}
                        title={trip.city.toUpperCase()}
                        start={`${trip.start_date.substring(5,7)}/${trip.start_date.substring(8,10)}/${trip.start_date.substring(0,4)}`}
                        end={`${trip.end_date.substring(5,7)}/${trip.end_date.substring(8,10)}/${trip.end_date.substring(0,4)}`}
                        image={image[i]}
                        key={i}
                    />
                )
                })}
            </div>
            <Modal
            aria-labelledby="transition-modal-title"
            style={{outline:0}}
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
                <Fade in={open}>
                <div className={classes.paper} style={{fontFamily:"'Work Sans', sans-serif"}}>
                    <h2 id="transition-modal-title">CREATE A NEW TRIP</h2>
                    <div id="transition-modal-description">
                        <form>
                            <label className="modal-label" htmlFor="location">DESTINATION</label>
                            <input type="text" id="location" className="modal-input" placeholder="CITY"/>
                            <label className="modal-label" htmlFor="start-date">START DATE</label>
                            <input type="date" id="start-date" className="modal-input" />
                            <label className="modal-label" htmlFor="end-date">END DATE</label>
                            <input type="date" id="end-date" className="modal-input" />
                            <input id="create-submit" type="submit" value="SUBMIT" />
                        </form>
                    </div>
                </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default Trips