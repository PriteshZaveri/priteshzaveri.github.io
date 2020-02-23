import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.addEventListener("scroll", scrollParallal);
  }
  render() {
    return (
      <div className="home">
        <section className="home__top">
          <div className="container" id="scroll__text1">
            {/* <img src={require("./images/personal.jpg")} /> */}
            <h1>
              I'm a <span>Web Developer</span>
            </h1>
            <h3>I create experiences</h3>
          </div>
        </section>
        <section className="home__about parallax" id="aboutme">
          <div className="container">
            <h2 className="section__title">About Me</h2>
            <div className="section__details">
              <div className="section__details-left">
                <img
                  src={require("./images/personal.jpg")}
                  className="about__img"
                  alt="Pritesh Zaveri"
                />
                <h3>Pritesh Zaveri</h3>
                <h4>Senior UI Developer at Media.net</h4>
              </div>
              <div className="section__details-right">
                <p>
                  Hi, I'm 26 years old born on 27th Feb. 1994.
                  <br /> My love for Computers began since I was a kid. I
                  started programming at the age of 10 with Logo being my first
                  language on a windows 95 machine.
                  <br />
                  Gradually I started picking up new things and later at the age
                  of 17 started with C programming.
                  <br />
                  Later went on to Object Oriented approach with Java and also
                  started learning Python and MySQL.
                  <br />
                  Since Web Developement took a huge leap in technology with
                  HTML5 and CSS3 releasing in 2014, It was then that I decided
                  to become a Web Developer and started learning the web basics.
                  <br />I learnt HTML5, CSS3, Javascript, MySQL, MongoDb, PHP,
                  ReactJs, NodeJsetc. to build various Web Applications.
                  <br />
                  Also tried my hands on Android App Developement for a couple
                  of years.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home__skills" id="myskills">
          <div className="container">
            <h2 className="section__title">My Skills</h2>
            <div className="skills__wrap">
              <div className="skills__card">
                <img src={require("./images/html_logo.png")} />
                <h4>HTML5</h4>
              </div>
              <div className="skills__card">
                <img src={require("./images/css_logo.png")} />
                <h4>CSS3</h4>
              </div>
              <div className="skills__card">
                <img src={require("./images/js_logo.png")} />
                <h4>Javascript</h4>
              </div>
              <div className="skills__card">
                <img src={require("./images/sass_logo.png")} />
                <h4>Sass</h4>
              </div>
              <div className="skills__card">
                <img src={require("./images/php_logo.png")} />
                <h4>PHP</h4>
              </div>
              <div className="skills__card">
                <img src={require("./images/wp_logo.png")} />
                <h4>WordPress</h4>
              </div>
              <div className="skills__card">
                <img src={require("./images/react_logo.png")} />
                <h4>React Js</h4>
              </div>
              <div className="skills__card">
                <img src={require("./images/angular_logo.png")} />
                <h4>Angular Js</h4>
              </div>
              <div className="skills__card">
                <img src={require("./images/vue_logo.png")} />
                <h4>VUE Js</h4>
              </div>
              <div className="skills__card">
                <img src={require("./images/mysql_logo.png")} />
                <h4>MySQL</h4>
              </div>
              <div className="skills__card">
                <img src={require("./images/mongo_logo.png")} />
                <h4>Mongo DB</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function scrollParallal() {
  var yScroll = window.scrollY;
  document.getElementById("scroll__text1").style.transform =
    "translateY(" + yScroll * 0.8 + "px)";
}

export default Home;
