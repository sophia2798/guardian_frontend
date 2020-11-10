import React, { useState } from 'react'
import './App.css';
import Login from './Login';
import Nav from './Nav';
import Banner from './Banner';
import About from './About';
import Footer from './Footer';

function App() {
  const [user, setUser] = useState(true);

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