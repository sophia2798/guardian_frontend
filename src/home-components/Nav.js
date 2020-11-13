import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import "./Nav.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../images/logo-white.jpeg";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

function Nav() {
  const handleLogin = () => {};

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__white"}`}>
      <div className="nav__left">
        <Link to="/"><img className="nav__logo" src={logo} alt="" /></Link>
      </div>
      <div className="nav__right">
        <div className="nav__option">
          <Link to="/trips" style={{color:'white'}}>
          <Button className="nav__button" variant="outlined">
            PLAN NOW
          </Button>
          </Link>
        </div>
        <div className="nav__option">
          <PermIdentityIcon onClick={handleLogin} />
        </div>
        <div className="nav__option">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}

export default Nav;
