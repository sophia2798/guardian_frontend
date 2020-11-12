'google maps APIkey: AIzaSyCbwXcpuUUjcKe5ueD3ueYZmuUDP4U1GKs';
import React, { useState } from 'react'
import './App.css';
import Login from './Login';
import Nav from './home-components/Nav';
import Banner from './home-components/Banner';
import About from './home-components/About';
import Footer from './home-components/Footer';

function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="app">
      {user ? (<Login />) : (
        <div>
          <Nav />
          <Banner />
          <About />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;