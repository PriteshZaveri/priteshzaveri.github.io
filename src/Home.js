import React, { Component } from "react";
import Typewriter from "typewriter-effect/dist/core";
import AOS from "aos";
import "aos/dist/aos.css";

class Home extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
    new Typewriter("#typewriter", {
      strings: [
        "I make stuff",
        "I create experiences",
        "I love technology",
        "I make websites",
      ],
      autoStart: true,
      delay: 50,
      deleteSpeed: 25,
      loop: true,
    });
    window.addEventListener("scroll", scrollParallal);
  }
  render() {
    return (
      <div className="home">
        <section className="home__top">
          <div className="container" id="scroll__text1" data-aos="fade">
            {/* <img src={require("./images/personal.jpg")} /> */}
            <h1>
              I'm a <span>Web Developer</span>
            </h1>
            <h3 id="typewriter">I create experiences</h3>
          </div>
        </section>
        <section className="home__about parallax" id="aboutme">
          <div className="container">
            <h2 className="section__title">About Me</h2>
            <div className="section__details">
              <div
                className="section__details-left"
                data-aos="fade"
                data-aos-once="true"
              >
                <img
                  src={require("./images/personal.jpg")}
                  className="about__img"
                  alt="Pritesh Zaveri"
                />
                <h3>Pritesh Zaveri</h3>
                <h4>Senior UI Developer at Media.net</h4>
              </div>
              <div
                className="section__details-right"
                data-aos="fade"
                data-aos-once="true"
                data-aos-delay="200"
              >
                <p>
                  Hi, My name's Pritesh and I was born on 27th Feb. 1994.
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
                  ReactJs, NodeJs etc. to build various Web Applications.
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
              <div
                className="skills__card"
                data-aos="flip-left"
                data-aos-once="true"
                data-aos-delay="0"
              >
                <img src={require("./images/html_logo.png")} alt="html5" />
                <h4>HTML5</h4>
              </div>
              <div
                className="skills__card"
                data-aos="flip-left"
                data-aos-once="true"
                data-aos-delay="100"
              >
                <img src={require("./images/css_logo.png")} alt="css3" />
                <h4>CSS3</h4>
              </div>
              <div
                className="skills__card"
                data-aos="flip-left"
                data-aos-once="true"
                data-aos-delay="200"
              >
                <img src={require("./images/js_logo.png")} alt="javascript" />
                <h4>Javascript</h4>
              </div>
              <div
                className="skills__card"
                data-aos="flip-left"
                data-aos-once="true"
                data-aos-delay="300"
              >
                <img src={require("./images/sass_logo.png")} alt="sass" />
                <h4>Sass</h4>
              </div>
              <div
                className="skills__card"
                data-aos="flip-left"
                data-aos-once="true"
                data-aos-delay="400"
              >
                <img src={require("./images/php_logo.png")} alt="php" />
                <h4>PHP</h4>
              </div>
              <div
                className="skills__card"
                data-aos="flip-left"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <img src={require("./images/wp_logo.png")} alt="wordpress" />
                <h4>WordPress</h4>
              </div>
              <div
                className="skills__card"
                data-aos="flip-left"
                data-aos-once="true"
                data-aos-delay="600"
              >
                <img src={require("./images/react_logo.png")} alt="react js" />
                <h4>React Js</h4>
              </div>
              <div
                className="skills__card"
                data-aos="flip-left"
                data-aos-once="true"
                data-aos-delay="700"
              >
                <img src={require("./images/node_logo.png")} alt="node js" />
                <h4>Node</h4>
              </div>
              <div
                className="skills__card"
                data-aos="flip-left"
                data-aos-once="true"
                data-aos-delay="800"
              >
                <img src={require("./images/vue_logo.png")} alt="vue js" />
                <h4>VUE Js</h4>
              </div>
              <div
                className="skills__card"
                data-aos="flip-left"
                data-aos-once="true"
                data-aos-delay="900"
              >
                <img src={require("./images/mysql_logo.png")} alt="mysql" />
                <h4>MySQL</h4>
              </div>
              <div
                className="skills__card"
                data-aos="flip-left"
                data-aos-once="true"
                data-aos-delay="1000"
              >
                <img src={require("./images/mongo_logo.png")} alt="mongo db" />
                <h4>Mongo DB</h4>
              </div>
              <div
                className="skills__card"
                data-aos="flip-left"
                data-aos-once="true"
                data-aos-delay="1100"
              >
                <img src={require("./images/ps_logo.png")} alt="photoshop" />
                <h4>Photoshop</h4>
              </div>
            </div>
          </div>
        </section>
        <section className="work__history" id="workhistory">
          <div className="container">
            <h2 className="section__title">Work History</h2>
            <div
              className="work__details"
              data-aos="fade-right"
              data-aos-once="true"
            >
              <div className="work__left">
                <h3>Application Development Analyst</h3>
                <span>Aug 2016 - Dec 2017</span>
              </div>
              <div className="work__right">
                <h3>Accenture Solutions Pvt. Ltd.</h3>
                <div>
                  Trained in SAP Sales and Distribution module. Worked on
                  various technologies in different domains such as Automation
                  Initiatives and products based on Artificial Intelligence.
                  <br />
                  <b>Career Highlights:</b>
                  <ul className="work-ul">
                    <li>
                      Created 7 independent Automation utilities that resulted
                      in more than 8000 hrs and $750,000 worth of savings in 1
                      financial year which was highly appreciated by the client.
                    </li>
                    <li>Won star employee of the month twice in 8 months.</li>
                    <li>
                      Created a website from scratch that served as a Dashboard
                      for team management. The website is hosted on AWS and has
                      proven to be beneficial to the team. The Dashboard is even
                      demonstrated to various Accenture MDs and got highly
                      appreciated for it. I was also a part of the team that
                      created a chat bot for automating daily tasks through
                      voice commands.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="work__details"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <div className="work__left">
                <h3>Senior UI Developer</h3>
                <span>Dec 2017 - Present</span>
              </div>
              <div className="work__right">
                <h3>Media.Net Software Services Private Limited</h3>
                <ul className="work-ul">
                  <li>
                    Converted PSD and Zeplin designs to Web pages using HTML,
                    CSS, and Javascript.
                  </li>
                  <li>
                    Created 15 WordPress websites with custom themes built from
                    scratch, 17 Product websites built on CakePHP framework, and
                    8 Product Listing and Comparison Websites made using ReactJs
                    in the Front-end and NodeJs with Hapi server in the
                    Back-end. All websites are mobile responsive up to 320px and
                    have all major browser support.
                  </li>
                  <li>
                    Developed 5 highly optimized dashboards using ReactJs to
                    help business teams visualize the key performance indicators
                    and other strategic data for the organization at a glance.
                    Made use of latest libraries like Redux, Webpack for code
                    bundling, Sass for CSS pre-processing, and Axios for API
                    calls.
                  </li>
                  <li>
                    Mentored 4 new joiners to help them get on board in the team
                    and trained them well.
                  </li>
                  <li>
                    Brought new ideas and improved existing development process
                    by introducing OOP style of programming and training
                    everyone on writing modular code, thus helping in overall
                    reduction of more than 40% in website development time.
                  </li>
                  <li>
                    Actively took interviews and helped to bring new talent to
                    the team. Also responsible for setting up the interview
                    questions and assignments for the candidates.
                  </li>
                  <li>
                    Expertise in creating highly optimized Search Engine Results
                    Page with Google DFP/ADX integration along with the
                    integrations of Taboola and Outbrain Ad Units.
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="work__details"
              data-aos="fade-right"
              data-aos-once="true"
            >
              <div className="work__left">
                <h3>Free Lancing</h3>
                <span>Jul 2020 - Nov 2020</span>
              </div>
              <div className="work__right">
                <h3>Vow Jewels LLP.</h3>
                <div>
                  <ul className="work-ul">
                    <li>
                      Developed a mobile application with payment gateway
                      integration based on client requirements and
                      specifications using Ionic 4, Laravel and MySQL. The app
                      is deployed and published on Google PlayStore since
                      November 2020.
                    </li>
                    Link:&nbsp;
                    <a
                      href="https://play.google.com/store/apps/details?id=vow.gold.investment"
                      title="Vow Gold Investment App"
                      className="link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      https://play.google.com/store/apps/details?id=vow.gold.investment
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact__me" id="contactme">
          <div className="container">
            <h2 className="section__title">Contact Me</h2>
            <form
              id="contact__form"
              name="contactform"
              method="GET"
              action="mailto:priteshzaveri27@gmail.com"
              encType="text/plain"
            >
              <input
                type="text"
                className="c__input name"
                placeholder="Name"
                required
                data-aos="zoom-out"
                data-aos-once="true"
                name="subject"
              />
              {/* <input
                type="email"
                className="c__input email"
                placeholder="Email"
                required
                data-aos="zoom-out"
                data-aos-once="true"
                data-aos-delay="200"
                name="email"
              />
              <input
                type="text"
                className="c__input number"
                placeholder="Contact No."
                data-aos="zoom-out"
                data-aos-once="true"
                data-aos-delay="400"
                name="contact"
              /> */}
              <textarea
                className="c__input message"
                placeholder="Message"
                data-aos="zoom-out"
                data-aos-once="true"
                data-aos-delay="600"
                name="body"
              ></textarea>
              <button
                type="submit"
                className="submit-btn"
                data-aos="zoom-out"
                data-aos-once="true"
                data-aos-delay="800"
              >
                Submit
              </button>
            </form>
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
  var header = document.getElementById("header");
  header.style.backgroundColor = `rgba(255,255,255, ${yScroll / 1000})`;
  if (yScroll > window.innerHeight - 20 && window.innerWidth >= 1024) {
    document.querySelector(".logo__wrap").style.width = "250px";
    document.querySelector(".nav__list").classList.add("scrolled");
  } else if (window.innerWidth >= 1024) {
    document.querySelector(".logo__wrap").style.width = "270px";
    document.querySelector(".nav__list").classList.remove("scrolled");
  }
}

export default Home;
