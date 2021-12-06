import React from "react";
import Hello from "./components/hello";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Education from "./components/education";
import Portfolio from "./components/portfolio";
import Feedback from "./components/feedback";

const Home = () => {
  return (
    <>
      <Hello />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Feedback />

      <section id="contact" className="section">
        <div className="container">
          <div className="row wave-bg">
            <div className="zigzag wow slideInLeft">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 105 20"
              >
                <g>
                  <rect className="st0" width="105" height="20" />
                  <g>
                    <polyline
                      className="st1"
                      points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                    />
                  </g>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 105 20"
              >
                <g>
                  <rect className="st0" width="105" height="20" />
                  <g>
                    <polyline
                      className="st1"
                      points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="col-md-4 wow slideInLeft">
              <div className="section-sidebar">
                <h2>
                  <span className="point">Contact</span>
                </h2>
                <div className="opacity-box">
                  <p>
                    Are you working on something great? I would love to help
                    make it happen! Drop me a letter and start your project
                    right now! Just do it.
                  </p>
                </div>
              </div>
            </div>
            <form action="#" className="wow slideInRight js-footer-form">
              <div className="form-wrapper">
                <div className="col-md-3">
                  <div className="form-group">
                    <input
                      className="form-field js-field-name"
                      type="text"
                      placeholder="Name"
                      required
                    />
                    <span className="form-validation"></span>
                    <span className="form-invalid-icon">
                      <i className="mdi mdi-close" aria-hidden="true"></i>
                    </span>
                  </div>

                  <div className="form-group">
                    <input
                      className="form-field js-field-email"
                      type="email"
                      placeholder="E-mail"
                      required
                    />
                    <span className="form-validation"></span>
                    <span className="form-invalid-icon">
                      <i className="mdi mdi-close" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <textarea
                      className="form-field js-field-message"
                      placeholder="Message"
                      required
                    ></textarea>
                    <span className="form-validation"></span>
                  </div>
                  <div className="submit-holder">
                    <input
                      className="site-btn"
                      type="submit"
                      value="Send message"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* <!-- Contact me modal --> */}
      <div
        className="modal fade"
        id="contact-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="portfolio-modal"
      >
        <div className="modal-dialog modal-center" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-title">
                <h1>
                  <span className="point">Let’s work together</span>
                </h1>
              </div>
              <div className="modal-description">
                <p>
                  Are you working on something great? I would love to help make
                  it happen! Drop me a letter and start your project right now!
                  Just do it.
                </p>
              </div>
              <div className="modal-form">
                <form action="#" className="js-modal-form">
                  <div className="row form-wrapper">
                    <div className="col-lg-5 col-md-5">
                      <div className="form-group">
                        <input
                          className="form-field js-field-name"
                          type="text"
                          placeholder="Name"
                          required
                        />
                        <span className="form-validation"></span>
                        <span className="form-invalid-icon">
                          <i className="mdi mdi-close" aria-hidden="true"></i>
                        </span>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-field js-field-email"
                          type="email"
                          placeholder="E-mail"
                          required
                        />
                        <span className="form-validation"></span>
                        <span className="form-invalid-icon">
                          <i className="mdi mdi-close" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                      <div className="form-group">
                        <textarea
                          className="form-field js-field-message"
                          placeholder="Message"
                          required
                        ></textarea>
                        <span className="form-validation"></span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="submit-holder">
                        <input
                          className="site-btn js-submit-contact"
                          type="submit"
                          value="Send message"
                        />
                        <a
                          href="#"
                          className="site-btn gray-btn"
                          data-dismiss="modal"
                        >
                          Back to cv
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact me modal --> */}

      {/* <!-- Thank you modal --> */}
      <div
        className="modal fade"
        id="thanks-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="thanks-modal"
      >
        <div className="modal-dialog modal-center" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-title">
                <h1>
                  <span className="point">Your message has been sent</span>
                </h1>
              </div>
              <div className="modal-description">
                <p>
                  Thank you for your interest in my work. I’ll contact you just
                  in a few days. Stay tuned and see you soon, friend!
                </p>
              </div>
              <a href="#" className="site-btn" data-dismiss="modal">
                Back to cv
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Thank you modal --> */}

      {/* <!-- Error message modal --> */}
      <div
        className="modal fade"
        id="error-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="error-modal"
      >
        <div className="modal-dialog modal-center" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-title">
                <h1>
                  <span className="point">Ooops!</span>
                </h1>
              </div>
              <div className="modal-description">
                <p>Something go wrong!</p>
              </div>
              <a href="#" className="site-btn" data-dismiss="modal">
                Try again
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
