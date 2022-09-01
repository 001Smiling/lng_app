import React from "react";
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__link">Избранное</div>
                <div className="nav__link">В изучении</div>
                <div className="nav__link">Выученные</div>
            </nav>
        </header>
    );
}

export default Header;