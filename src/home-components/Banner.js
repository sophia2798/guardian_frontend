import React from 'react';
import './Banner.css';


function Banner() {

    return (
        <div className="banner">
            <div className="banner_img_wrapper">
                <img className="banner__image" src="https://images.pexels.com/photos/3700369/pexels-photo-3700369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className="banner__overlay">
                    <h2 className="overlay__text">VALUES</h2>
                </div>
                <div className="banner__overlay2">
                    <h2 className="overlay__text2" style={{letterSpacing:'0.2rem'}}>INTEGRITY<br/><br/>QUALITY<br/><br/>PARTNERSHIP</h2>
                </div>
            </div>
            <div className="banner_img_wrapper">
                <img className="banner__image" src="https://images.pexels.com/photos/364096/pexels-photo-364096.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className="banner__overlay">
                    <h2 className="overlay__text">SERVICES</h2>
                </div>
                <div className="banner__overlay2">
                    <h2 className="overlay__text2">APPLICATION DEVELOPMENT<br/><br/>INFORMATION AND DATA SECURITY<br/><br/>RISK ASSESSMENT<br/><br/>DATA ANALYSIS</h2>
                </div>
            </div>
            <div className="banner_img_wrapper">
                <img className="banner__image" src="https://images.pexels.com/photos/2411688/pexels-photo-2411688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className="banner__overlay">
                    <h2 className="overlay__text">APPROACH</h2>
                </div>
                <div className="banner__overlay2">
                    <h3 className="overlay__text2">OUR APPROACH ALLOWS CLIENTS TO BE SUCCESSFUL IN PLANNING AND IMPLEMENTING THEIR PROTECTION STRATEGY WHILE INTEGRATING MODERN WEB AND MOBILE APPLICATIONS WITH THE HIGHEST LEVELS OF DATA SECURITY.</h3>
                </div>
            </div>
            <div className="banner_img_wrapper">
                <img className="banner__image" src="https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className="banner__overlay">
                    <h2 className="overlay__text">TECHNOLOGIES</h2>
                </div>
                <div className="banner__overlay2">
                    <h3 className="overlay__text2">Loading...</h3>
                </div>
            </div>
            <div className="banner_img_wrapper">
                <img className="banner__image" src="https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className="banner__overlay">
                    <h2 className="overlay__text">THE TEAM</h2>
                </div>
                <div className="banner__overlay2">
                    <h3 className="overlay__text2">CHRIS MACGEORGE<br/><br/>SOPHIA JUNG<br/><br/>CHRIS SISON<br/><br/>JACK SOLARO<br/><br/>KATIE DICKSON<br/><br/>NICK VANBAAK</h3>
                </div>
            </div>
        </div>
    )
}

export default Banner