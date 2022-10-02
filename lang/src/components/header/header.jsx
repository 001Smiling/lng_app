import React from "react";
import './header.scss';
import logo from '../data/logo.png';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className="header">
                <Link to="/" className="link">
                <div className="header-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="header-name">Cardio</div>
                </div>
                </Link>
                <nav className="nav">
                <Link to="/cards" className="nav__link link">Карточки</Link>
                </nav>
            <div className="header-container">
            </div>
        </header>
    );
}

export default Header;