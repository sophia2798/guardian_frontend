import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Nav from "./home-components/Nav";
import Banner from "./home-components/Banner";
import About from "./home-components/About";
import Footer from "./home-components/Footer";
import Trips from "./pages/Trips/Trips";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Teams from "./pages/Teams/Teams";
import Dash from "./pages/Dashboard/Dash";
import API from "./utils/API";

function App() {
  // const [user, setUser] = useState(true);
  const [loginFormState, setLoginFormState] = useState({
    email: "",
    password: "",
  });
  const [profileState, setProfileState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    position: "",
    trips: [],
    id: "",
    isLoggedIn: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    API.getProfile(token).then((profileData) => {
      if (profileData) {
        setProfileState({
          first_name: profileData.first_name,
          last_name: profileData.last_name,
          email: profileData.email,
          position: profileData.position,
          trips: profileData.trips,
          id: profileData._id,
          isLoggedIn: true,
        });
      } else {
        localStorage.removeItem("token");
        setProfileState({
          first_name: "",
          last_name: "",
          email: "",
          position: "",
          trips: [],
          id: "",
          isLoggedIn: false,
        });
      }
    });
  }, []);

  const handleLogout = event => {
    event.preventDefault();
    localStorage.removeItem("token");
    setProfileState({
      first_name: "",
      last_name: "",
      email: "",
      position: "",
      trips: [],
      id: "",
      isLoggedIn: false,
    });
    setLoginFormState({
      email: "",
      password: ""
    })
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setLoginFormState({
      ...loginFormState,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.login(loginFormState).then((newToken) => {
      localStorage.setItem("token", newToken.token);
      API.getProfile(newToken.token).then((profileData) => {
        setProfileState({
          first_name: profileData.first_name,
          last_name: profileData.last_name,
          email: profileData.email,
          position: profileData.email,
          trips: profileData.trips,
          id: profileData._id,
          isLoggedIn: true,
        });
      });
    });
    <Redirect to="/"/>
  };

  return (
    <Router>
      <div className="app">
        <Nav handleLogout={handleLogout} profile={profileState}/>
        <Switch>
          <Route exact path="/">
              <div>
                <Banner />
                <About />
                <Footer />
              </div>
          </Route>
          <Route path="/trips">
            {profileState.isLoggedIn ?
            <Trips trips={profileState.trips} />
            :
            <Redirect to="/" />
            }
          </Route>
          <Route path="/login">
            {profileState.isLoggedIn ? 
            <Redirect to="/" />
            :
            <Login
            inputChange={handleInputChange}
            loginFormState={loginFormState}
            handleSubmit={handleFormSubmit}
            />
            }
          </Route>
          <Route path="/signup" component={Signup} />
          <Route path="/teams">
            {profileState.isLoggedIn ?
              <Teams/>
              :
              <Redirect to="/" />
            }
          </Route>
          <Route path="/dashboard">
            {profileState.isLoggedIn ?
              <Dash />
              :
              <Redirect to="/" />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
