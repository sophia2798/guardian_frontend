import React, { useState, useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import { Button } from "@material-ui/core";
import "./Nav.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../images/logo-white.jpeg";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function Nav(props) {
  const [show, handleShow] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else handleShow(false);
      });
    };
  }, []);

  const handleLogin = () => {};

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsExpanded(!isExpanded);
    console.log("isExpanded:", isExpanded);
  };

  const logout = event => {
    event.preventDefault();
    props.handleLogout(event);
    setIsExpanded(false);
  }

  return (
    <div className={`nav ${show && "nav__white"}`}>
      <div className="nav__left">
        <Link to="/">
          <img className="nav__logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="nav__right">
        <div className="nav__option">
          {props.profile.isLoggedIn ?
          <Link to="/trips" style={{ color: "white" }}>
            <Button className="nav__button" variant="outlined">
              PLAN NOW
            </Button>
          </Link>
          :
          null }
        </div>
        <div className="nav__option">
          <PermIdentityIcon onClick={handleLogin} />
        </div>
        <div className="nav__option">
          {/* <React.Fragment key={anchor}> */}
          <MenuIcon onClick={toggleDrawer("right", true)} />
          <Drawer
            anchor="right"
            open={isExpanded}
            onClose={toggleDrawer("right", false)}
          >
            <div className="drawer">
              {props.profile.isLoggedIn ? 
              <ul className="drawer__list" onClick={toggleDrawer("right", false)}>
                <Link to="/">
                  <img className="drawer__logo" src={logo} alt="" />
                </Link>
                <Link to="/" className="drawer__item">
                  HOME
                </Link>
                <Link to="/trips" className="drawer__item">
                  TRIPS
                </Link>
                <Link to="/teams" className="drawer__item">
                  TEAMS
                </Link>
              </ul>
              :
              <ul className="drawer__list" onClick={toggleDrawer("right", false)}>
              <Link to="/">
                <img className="drawer__logo" src={logo} alt="" />
              </Link>
              <Link to="/" className="drawer__item">
                HOME
              </Link>
              <Link to="/login" className="drawer__item">
                LOGIN
              </Link>
              <Link to="/signup" className="drawer__item">
                SIGN UP
              </Link>
              </ul>
              }
              {props.profile.isLoggedIn ? 
              <div className="logout__container" style={{textAlign:'center'}}>
                {/* <Link to="/logout" className="logout__button"> */}
                  <Button onClick={logout} style={{color:'white', fontFamily:"'Work Sans',sans-serif"}} className="logout__button">
                  Log Out
                  </Button>
                {/* </Link> */}
              </div>
              :
              null}
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Nav;
