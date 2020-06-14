import React from "react";

const Header = props => {
  return (
    <header id="header">
      <div className="container">
        <div className="navbar">
          <a href="/" className="logo__wrap">
            <img src={require("../images/logo_new.png")} alt="Pritesh Zaveri" />
          </a>
          <ul className="nav__list">
            <li className="nav__list-item">
              <a href="#aboutme">About Me</a>
            </li>
            <li className="nav__list-item">
              <a href="#myskills">My Skills</a>
            </li>
            <li className="nav__list-item">
              <a href="#workhistory">Work History</a>
            </li>
            <li className="nav__list-item">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
