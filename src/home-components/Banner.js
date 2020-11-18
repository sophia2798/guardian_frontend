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
                    <h3 className="overlay__text2">Integrity. Quality. Partnership.</h3>
                </div>
            </div>
            <div className="banner_img_wrapper">
                <img className="banner__image" src="https://images.pexels.com/photos/364096/pexels-photo-364096.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className="banner__overlay">
                    <h2 className="overlay__text">SERVICES</h2>
                </div>
                <div className="banner__overlay2">
                    <h3 className="overlay__text2">Application Development. Information and Data Security. Risk Assessment. Data Analysis.</h3>
                </div>
            </div>
            <div className="banner_img_wrapper">
                <img className="banner__image" src="https://images.pexels.com/photos/2411688/pexels-photo-2411688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                <div className="banner__overlay">
                    <h2 className="overlay__text">APPROACH</h2>
                </div>
                <div className="banner__overlay2">
                    <h3 className="overlay__text2">Our approach allows clients to be successful in planning and implementing their protection strategy while integrating modern web and mobile applications with the highest levels of data security.</h3>
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
                    <h3 className="overlay__text2">Chris MacGeorge. Sophia Jung. Chris Sison. Jack Solaro. Katie Dickson. Nick VanBaak.</h3>
                </div>
            </div>
        </div>
    )
}

export default Banner