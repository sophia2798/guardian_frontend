import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className="footer">
            <ul className="footer__top">
                <li><a href="https://www.facebook.com/chris.sison.587" target="_blank" rel="noreferrer"><FacebookIcon className="footer__icon" /></a></li>
                <li><a href="https://www.instagram.com/5ison/?hl=en" target="_blank" rel="noreferrer"><InstagramIcon className="footer__icon" /></a></li>
                <li><a href="https://www.linkedin.com/in/chris-alexander-86b8a5194" target="_blank" rel="noreferrer"><LinkedInIcon className="footer__icon" /></a></li>
            </ul>

            <div className="footer__middle">
                <div className="middle__top">
                    <p>Identify</p>
                    <p>Prepare</p>
                    <p>Privacy</p>
                    <p>Security</p>
                </div>
            
                <div className="middle__middle">
                    <p>Travel</p>
                    <p>Restrictions</p>
                    <p>Investigations</p>
                    <p>Terms of Use</p>
                </div>
            
                <div className="middle__bottom">
                    <p>Help Center</p>
                    <p>Careers</p>
                    <p>Assessments</p>
                    <p>Corporate Information</p>
                </div>
            </div>

            <div className="footer__copyright">
                <p>GUARDIAN by Chris MacGeorge, Chris Alexander, Sophia Jung, Jack Solaro, and Nick VanBaak ©</p>
            </div>
        </div>
    )
}

export default Footer
