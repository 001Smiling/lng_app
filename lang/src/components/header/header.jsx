import React from "react";
import './header.scss';
import logo from '../data/logo.png';


const Header = () => {
    return (
        <header className="header">
            <div className="header-logo">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="header-name">Cardio</div>
            </div>
            <div className="header-container">
            </div>
        </header>
    );
}

export default Header;