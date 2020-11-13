import React from "react";
import "./Signup.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LockIcon from "@material-ui/icons/Lock";
import { Button } from "@material-ui/core";
import logo from "../../images/logo-white.jpeg";
import Grid from "@material-ui/core/Grid";

function Signup() {
  return (
    <div className="signup">
      <div className="signup__header">
        <div className="header__option">
          <ArrowBackIcon />
          <h3>Return to Homepage</h3>
        </div>
      </div>
      <div className="signup__body">
        <img className="signup__logo" src={logo} alt="" />
        <br></br>
        <hr></hr>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className="signup__input">
              <PermIdentityIcon />
              <input type="text" placeholder="First Name" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="signup__input">
              <PermIdentityIcon />
              <input type="text" placeholder="Last Name" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="signup__input">
              <PermIdentityIcon />
              <input type="email" placeholder="Email" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="signup__password">
              <LockIcon />
              <input type="password" placeholder="Password" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="signup__password">
              <LockIcon />
              <input type="password" placeholder="Confirm Password" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="signup__button">
              <Button className="nav__button" variant="outlined">
                SIGN UP
              </Button>
            </div>
          </Grid>
        </Grid>
        <div className="signup__footer"></div>
      </div>
    </div>
  );
}

export default Signup;
