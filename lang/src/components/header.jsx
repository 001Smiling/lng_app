import React from "react";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <a className='nav-link' href='#' label='Избранное'/>
                <a className='nav-link' href='#' label='Изучение'/>
                <a className='nav-link' href='#' label='Выученные'/>
            </nav>
        </header>
    );
}

export default Header;
