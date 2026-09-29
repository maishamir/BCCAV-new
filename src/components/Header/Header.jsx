import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-and-text">
        <img src={logo} alt="bccav logo" className="header__logo" />
        <p className="header__logo-text">
          Bangladesh Canada <br />
          Cultural Association of Victoria
        </p>
      </div>

      <nav className="header__nav">
        <ul className="header__nav-links">
          <li className="header__nav-link">About</li>
          <li className="header__nav-link">Events</li>
          <li className="header__nav-link">Gallery</li>
          <li className="header__nav-link">Programs</li>
          <li className="header__nav-link">Membership</li>
          <li className="header__nav-link">Contact Us</li>
        </ul>
        <button className="header__nav-donate">Donate</button>
      </nav>
    </header>
  );
}

export default Header;
