import React from "react";

const Header = (props) => {
  return (
    <header id="header">
      <div className="container">
        <div className="navbar">
          <a
            href="/"
            className="logo__wrap"
            data-aos="fade"
            data-aos-once="true"
          >
            <img src={require("../images/logo_new.png")} alt="Pritesh Zaveri" />
          </a>
          <ul className="nav__list">
            <li className="nav__list-item" data-aos="fade" data-aos-once="true">
              <a href="#aboutme">About Me</a>
            </li>
            <li
              className="nav__list-item"
              data-aos="fade"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <a href="#myskills">My Skills</a>
            </li>
            <li
              className="nav__list-item"
              data-aos="fade"
              data-aos-once="true"
              data-aos-delay="400"
            >
              <a href="#workhistory">Work History</a>
            </li>
            <li
              className="nav__list-item"
              data-aos="fade"
              data-aos-once="true"
              data-aos-delay="600"
            >
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
