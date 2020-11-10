import React from 'react';
import './Login.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LockIcon from '@material-ui/icons/Lock';
import { Button } from '@material-ui/core';

function Login() {
    return (
        <div className="login">
            <div className="login__header">
                <div className="header__option">
                    <ArrowBackIcon />
                </div>
                <div className="header__option">
                    <h3>Return to Homepage</h3>
                </div>
            </div>
            <div className="login__body">
                <div className="login__input">
                    <PermIdentityIcon />
                    <input type="text" />
                </div>
                <div className="login__password">
                    <LockIcon />
                    <input type="text" />
                </div>
                <div className="login__button">
                    <Button
                        className="nav__button"
                        variant='outlined'
                    >
                        LOGIN
                    </Button>
                    <Button
                        className="nav__button"
                        variant='outlined'
                    >
                        SIGN UP
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login
