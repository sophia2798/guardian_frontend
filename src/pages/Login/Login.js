import React from "react";
import "./Login.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LockIcon from "@material-ui/icons/Lock";
// import { Button } from "@material-ui/core";
import logo from "../../images/logo-white.jpeg";

function Login(props) {
  return (
    <div className="login">
      <div className="login__header">
        <div className="header__option">
          <ArrowBackIcon />
          <h3>Return to Homepage</h3>
        </div>
      </div>
      <div className="login__body">
        <img className="login__logo" src={logo} alt="" />
        <br></br>
        <hr></hr>
        <br></br>
        <form onSubmit={props.handleSubmit}>
          <div className="login__input">
            <PermIdentityIcon />
            <input
              type="text"
              name="email"
              onChange={props.inputChange}
              placeholder="email"
              value={props.loginFormState.email}
            />
          </div>
          <div className="login__password">
            <LockIcon />
            <input
              type="password"
              name="password"
              onChange={props.inputChange}
              placeholder="password"
              value={props.loginFormState.password}
            />
          </div>
          <div className="login__button">
            {/* <Button className="nav__button" variant="outlined">
              LOGIN
            </Button> */}

            <input className="" type="submit" value="LOGIN" />
          </div>
        </form>
        <div className="login__footer">
          <p>
            Don't have an account? <a href="/signup">SIGN UP</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
