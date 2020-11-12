'google maps APIkey: AIzaSyCbwXcpuUUjcKe5ueD3ueYZmuUDP4U1GKs';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './Login';
import Nav from './home-components/Nav';
import Banner from './home-components/Banner';
import About from './home-components/About';
import Footer from './home-components/Footer';
import Trips from "./pages/Trips/Trips";

function App() {
  const [user, setUser] = useState(true);

  return (
    <Router>
    <div className="app">
      <Nav />
      <Switch>
      <Route exact path="/">
      {user ? (<Login />) : (
        <div>
          <Banner />
          <About />
          <Footer />
        </div>
      )}
      </Route>
      <Route path="/trips" component={Trips}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;