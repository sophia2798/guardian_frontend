import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './Nav.css';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './images/logo.jpeg';

function Nav() {
    const handleLogin = () => {
        
    }

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, []);
    return (
        <div className={`nav ${show && "nav__white"}`}>
            <div className="nav__left">
                <img className="nav__logo" src={logo} alt="" />
            </div>
            <div className="nav__right">
                <div className="nav__option">
                    <Button
                        className="nav__button"
                    >
                        PLAN NOW
                    </Button>
                </div>
                <div className="nav__option">
                    <PermIdentityIcon
                        onClick={handleLogin}
                    />
                </div>
                <div className="nav__option">
                    <MenuIcon />
                </div>
            </div>
        </div>
    )
}

export default Nav
