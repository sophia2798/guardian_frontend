import React, { useState } from "react";
import "./Signup.css";
import { withRouter } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LockIcon from "@material-ui/icons/Lock";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Button } from "@material-ui/core";
import logo from "../../images/logo-white.jpeg";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import { Link } from "react-router-dom";

function Signup() {
  const [signUpFormState, setSignUpFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    position: ""
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setSignUpFormState({
      ...signUpFormState,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    API.signup(signUpFormState).then((window.location = "/login"));
  };

  return (
    <div className="signup">
      <div className="signup__header">
        <div className="header__option">
          <Link to="/" style={{display:'flex',flexDirection:'row'}}>
          <ArrowBackIcon />
          &nbsp;
          <h3>RETURN TO HOMEPAGE</h3>
          </Link>
        </div>
      </div>
      <div className="signup__body">
        <img className="signup__logo" src={logo} alt="" />
        <br></br>
        <hr></hr>
        <br></br>
        <form className="signup__form" onSubmit={handleFormSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div className="signup__input">
                <PermIdentityIcon />
                <input
                  name="first_name"
                  className=""
                  type="text"
                  placeholder="First Name"
                  onChange={handleInputChange}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="signup__input">
                <PermIdentityIcon />
                <input
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
                <select name="position" onChange={handleInputChange} name="position" className="position__select">
                  <option style={{backgroundColor:'rgb(54,54,54) !important'}} value="Select a Position" selected>Select a Position</option>
                  <option value="Lead">Lead</option>
                  <option value="Medic">Medic</option>
                  <option value="Advance Lead">Advance Lead</option>
                  <option value="Agent">Agent</option>
                </select>
            </Grid>
            <Grid item xs={12}>
              <div className="signup__input">
                <PermIdentityIcon />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleInputChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="signup__password">
                <LockIcon />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleInputChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="signup__password">
                <LockIcon />
                <input
                  name="confirm_password"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleInputChange}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="signup__button">
                <input
                  className="login-submit-btn"
                  type="submit"
                  value="SIGN UP"
                />
              </div>
            </Grid>
          </Grid>
        </form>
        <div className="signup__footer"></div>
      </div>
    </div>
  );
}

export default Signup;
