import React, { useState } from "react";
import "./Trips.css";
import SearchIcon from "@material-ui/icons/Search";
import Card from "../../card-components/TripCards/TripCard";
// import TripSeed from "../../utils/seedTrip.json";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#111",
    border: "3px solid #404040",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "10px",
  },
}));

function Trips(props) {
  const [trips, setTrips] = React.useState(props.trips);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [blur, setBlur] = React.useState(false);
  const [image, setImage] = React.useState([]);
  const [trip, setTrip] = useState({
    city: "",
    start_date: "",
    end_date: "",
    report_doc: "",
    completed: false
  });

  console.log(props)

  const handleSubmit = (e) => {
    e.preventDefault();
    API.createTrip(props.token, trip).then(() => {
      setTrip({
        city: "",
        start_date: "",
        end_date: "",
        report_doc: "",
        completed: false
      });
      props.fetchData();
    });
  };
  // console.log("TRIPS PROPS", props);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setTrip({
      ...trip,
      [name]: value,
    });
  };

  const handleOpen = () => {
    setOpen(true);
    setBlur(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBlur(false);
  };

  const cityAPI = (city) => {
    return axios.get(
      `https://api.teleport.org/api/urban_areas/slug:${city}/images/`
    );
  };

  const getCityImg = async (tripsArr) => {
    const imageArr = [];
    for (var i = 0; i < tripsArr.length; i++) {
      await cityAPI(
        tripsArr[i].city
          .substring(0, tripsArr[i].city.indexOf(","))
          .replace(/\s+/g, "-")
          .toLowerCase()
      )
        .then((result) => {
          // console.log(result)
          // console.log(result.data.photos[0].image.web)
          const imgURL = result.data.photos[0].image.web;
          imageArr.push(imgURL);
        })
        .catch((err) => {
          imageArr.push("/static/media/logo-dark.3594f758.jpeg");
        });
    }
    setImage(imageArr);
  };

  React.useEffect(() => {
    // fetchUserData();
    console.log("check useEffect");
    getCityImg(props.trips);
    setTrips(props.trips);
    // console.log(image);
  }, [props.trips]);

  return (
    <div
      className="trip-container"
      style={blur ? { filter: "blur(2px)" } : null}
    >
      <div className="trips-header">
        <h1>TRIPS</h1>
        <button onClick={handleOpen} id="add-trip">
          +
        </button>
        <form>
          <input type="text" placeholder="SEARCH TRIPS" />
          <button id="trip-search-submit">
            <SearchIcon className="search__icon" />
          </button>
        </form>
      </div>
      <div className="trip-cards-container">
        {trips.map((trip, i) => {
          return (
            <Card
              fetchData={props.fetchData}
              tripObj={trip}
              tripProps={props}
              deleteTrip={props.deleteTrip}
              title={trip.city.toUpperCase()}
              start={`${trip.start_date.substring(
                5,
                7
              )}/${trip.start_date.substring(
                8,
                10
              )}/${trip.start_date.substring(0, 4)}`}
              end={`${trip.end_date.substring(5, 7)}/${trip.end_date.substring(
                8,
                10
              )}/${trip.end_date.substring(0, 4)}`}
              image={image[i]}
              key={i}
            />
          );
        })}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        style={{ outline: 0 }}
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
          <div
            className={classes.paper}
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            <h2 id="transition-modal-title">CREATE A NEW TRIP</h2>
            <div id="transition-modal-description">
              <form onSubmit={handleSubmit}>
                <label className="modal-label" htmlFor="location">
                  DESTINATION
                </label>
                <input
                  name="city"
                  onChange={handleInputChange}
                  type="text"
                  id="location"
                  className="modal-input"
                  placeholder="CITY (e.g. Seattl)"
                />
                <label className="modal-label" htmlFor="start-date">
                  START DATE
                </label>
                <input
                  name="start_date"
                  onChange={handleInputChange}
                  type="date"
                  id="start-date"
                  className="modal-input"
                />
                <label className="modal-label" htmlFor="end-date">
                  END DATE
                </label>
                <input
                  name="end_date"
                  onChange={handleInputChange}
                  type="date"
                  id="end-date"
                  className="modal-input"
                />
                <input
                  id="create-submit"
                  type="submit"
                  value="SUBMIT"
                  onClick={handleClose}
                />
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Trips;
