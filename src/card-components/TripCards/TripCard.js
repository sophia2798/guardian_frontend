import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./TripCard.css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import { Link } from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "50%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatarCurrent: {
    backgroundColor: "#1282a2",
  },
  avatarComplete: {
    backgroundColor: "#cccccc",
  },
  textCurrent: {
    color: "#1282a2",
  },
  textComplete: {
    color: "#cccccc",
  },
  cardComplete: {
    border: "2px solid #3a3a3a",
    color: "white",
    backgroundColor: "rgb(25,25,25) !important",
    minWidth: "48%",
  },
  cardCurrent: {
    color: "white",
    backgroundColor: "rgb(25,25,25) !important",
    minWidth: "48%",
    border: "2px solid #1282a2",
  },
  textColor: {
    color: "white",
  },
}));

function TripCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [complete, setCompleted] = React.useState(false);
  const [tripObj, setTripObj] = React.useState(props.tripObj);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const setComplete = () => {
    const token = localStorage.getItem("token");
    setCompleted(!complete);
    console.log("pre", complete);
    API.toggleComplete(token, tripObj._id, complete).then(result => {
      console.log(`switched completed boolean to ${complete}`);
      props.fetchData();
      console.log("new state", tripObj.completed)
    });
  };

  React.useEffect(() => {
    setTripObj(props.tripObj);
  },[props.tripObj])

  return (
    <Card
      className={tripObj.completed ? classes.cardCurrent : classes.cardComplete}
      id="root-trip-card"
    >
      <CardHeader
        className={classes.textColor}
        avatar={
          <Avatar
            aria-label="recipe"
            className={
              tripObj.completed ? classes.avatarCurrent : classes.avatarComplete
            }
          >
            &nbsp;
          </Avatar>
        }
        title={props.title}
        subheader={`${props.start} - ${props.end}`}
        action={
          <IconButton aria-label="settings">
            <ClearIcon
              style={{ color: "white" }}
              onClick={() => props.deleteTrip(props.tripObj._id)}
            />
          </IconButton>
        }
      />
      <Link to={`/dashboard/${tripObj._id}`}
        // to={{
        //   pathname: "/dashboard",
        //   state: {
        //     title: tripObj.city.toUpperCase(),
        //     id: tripObj._id,
            // city: tripObj.city
            //   .substring(0, tripObj.city.indexOf(","))
            //   .replace(/\s+/g, "-")
            //   .toLowerCase(),
        //     cityWeather: tripObj.city
        //       .substring(0, tripObj.city.indexOf(","))
        //       .replace(/\s+/g, "+")
        //       .toLowerCase(),
            // startDate: `${tripObj.start_date.substring(
            //   5,
            //   7
            // )}/${tripObj.start_date.substring(
            //   8,
            //   10
            // )}/${tripObj.start_date.substring(0, 4)}`,
        //     endDate: `${tripObj.end_date.substring(
        //       5,
        //       7
        //     )}/${tripObj.end_date.substring(
        //       8,
        //       10
        //     )}/${tripObj.end_date.substring(0, 4)}`,
        //     token: props.tripProps.token,
        //     report_doc: props.tripObj.report_doc,
        //     itinerary: props.tripObj.itinerary
        //   },
        // }}
        className="trip-links"
      >
        <CardMedia className={classes.media} image={props.image} />
      </Link>
      <CardActions disableSpacing>
        <IconButton onClick={setComplete} aria-label="add to favorites">
          {tripObj.completed ? (
            <div className="textBlue">
              <CheckIcon />
            </div>
          ) : (
            <div className="textGrey">
              <MoreHorizIcon />
            </div>
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default TripCard;
