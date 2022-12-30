import { Link } from "react-router-dom";
import logo from '../Data/logo.png'

function Header() {
  return (
    <header className="header">
    <Link to="/" className="link">
    <div className="header-logo">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="header-name">Cardio</div>
    </div>
    </Link>
    <div className="header-container">
    <nav className="nav">
    <Link to="/game" className="nav__link link">Карточки</Link>
    <Link to="/" className="nav__link link">Таблица</Link>
    </nav>
    </div>
</header>
  );
}

export default Header;
