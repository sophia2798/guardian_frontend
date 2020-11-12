import React from "react";
import "./Banner.css";
import Grid from "@material-ui/core/Grid";

function Banner() {
  return (
    <div className="banner">
      {/* <Grid container spacing={2}> */}
      {/* <Grid item xs md> */}
      <div className="banner__img__div">
        <img
          className="banner__image"
          src="https://images.pexels.com/photos/3700369/pexels-photo-3700369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      {/* </Grid> */}
      {/* <Grid item xs md> */}
      <div className="banner__img__div">
        <img
          className="banner__image"
          src="https://images.pexels.com/photos/364096/pexels-photo-364096.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      {/* </Grid> */}
      {/* <Grid item xs md> */}
      <div className="banner__img__div">
        <img
          className="banner__image"
          src="https://images.pexels.com/photos/2411688/pexels-photo-2411688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      {/* </Grid> */}
      {/* <Grid item xs md> */}
      <div className="banner__img__div">
        <img
          className="banner__image"
          src="https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      {/* </Grid> */}
      {/* <Grid item xs md> */}
      <div className="banner__img__div">
        <img
          className="banner__image"
          src="https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
      {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
}

export default Banner;
