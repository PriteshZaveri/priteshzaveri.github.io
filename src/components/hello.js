import React from "react";

const Hello = () => {
  return (
    <section id="hello" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 about-img-wrap">
            <div className="about-img wow slideInRight">
              <img
                src={require("../assets/images/profile.jpg")}
                alt="Pritesh Zaveri"
                className="img-responsive"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-me wow slideInLeft">
              <div className="about-me-title">
                <h1>
                  <span className="point">Hello. I am Pritesh Zaveri</span>
                </h1>
              </div>
              <div className="about-me-text">
                <div className="opacity-box">
                  <p>
                    Frontend Engineer @Amazon with 8+ years of experience in
                    building rich, high-performance user interfaces and
                    specializing in JavaScript development. Designed and
                    developed responsive and highly accessible websites and
                    applications that improved user engagement and resolved
                    persistent browser compatibility issues. Proficient in
                    ReactJS, JavaScript, and modern frontend frameworks, with a
                    strong focus on optimizing performance and meeting project
                    deadlines. Recognized for delivering scalable solutions that
                    enhance usability and streamline workflows.
                  </p>
                </div>
              </div>
              <div className="about-me-info">
                <p>
                  <span className="span-title">Phone</span>
                  <span>+1-437-684-0909</span>
                </p>
                <p>
                  <span className="span-title">Email</span>
                  <span>priteshzaveri27@gmail.com</span>
                </p>
                <p>
                  <span className="span-title">Address</span>
                  <span>Pickering, ON, Canada</span>
                </p>
                <p>
                  <span className="span-title">Social</span>
                  <span className="span-icons">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/R3v0luTiOnX"
                      className="mdi fonts-icons mdi-facebook"
                    ></a>
                    <a
                      target="_blank"
                      href="https://twitter.com/pritesh_zaveri"
                      className="mdi fonts-icons mdi-twitter"
                    ></a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/pritesh.zaveri/"
                      className="mdi fonts-icons mdi-instagram"
                    ></a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/pritesh-zaveri-698152ba"
                      className="mdi fonts-icons mdi-linkedin"
                    ></a>
                  </span>
                </p>
              </div>
              <div className="about-btns">
                <a
                  data-toggle="modal"
                  data-target="#contact-modal"
                  href="#"
                  className="site-btn"
                >
                  Contact me
                </a>
                <a
                  href="/Pritesh_Zaveri-Resume.pdf"
                  className="site-btn gray-btn"
                  target="_blank"
                >
                  Download cv
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hello;
