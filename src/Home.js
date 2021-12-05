import React from "react";
import Hello from "./components/hello";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Education from "./components/education";
import Portfolio from "./components/portfolio";

const Home = () => {
  return (
    <>
      <Hello />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />

      <section id="feedback" className="section">
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
                  <span className="point">Feedback</span>
                </h2>
                <div className="opacity-box">
                  <p>
                    Take a look at the reviews of my customers and ensure the
                    quality of my services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-8 right-box">
              <div className="row wow zoomIn">
                <div className="col-md-12">
                  <div className="feedback-block">
                    <img
                      className="feedback-image"
                      src="media/feedback-images/feedback-1.jpg"
                      alt=""
                    />
                    <h4 className="about-tittle">Stacey Don</h4>
                    <p className="about-info">President @ Coolor Studio</p>
                    <div className="opacity-box">
                      <p>
                        "Considers problems as a challenge and enjoys finding
                        creative yet appropriate solutions. Danny is able to
                        work out his own solutions, but also works well with a
                        group to solve problems. Performs most jobs well and has
                        the habit of checking work outcomes. Danny is achieving
                        excellence in some areas but in others is not yet
                        achieving the highest standards.""
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row wow zoomIn">
                <div className="col-md-12">
                  <div className="feedback-block">
                    <img
                      className="feedback-image"
                      src="media/feedback-images/feedback-2.jpg"
                      alt=""
                    />
                    <h4 className="about-tittle">Anson Shura</h4>
                    <p className="about-info">
                      Project Manager @ Motion Studio
                    </p>
                    <div className="opacity-box">
                      <p>
                        “He will always try to do what is required, even if it
                        means performing tasks that are not in the job
                        description or if required to do extra work
                        unexpectedly. However, may sometimes complain about the
                        extra load. Aiming for a top job in the organization. He
                        sets very high standards, aware that this will bring
                        attention and promotion.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row wow zoomIn">
                <div className="col-md-12">
                  <div className="feedback-block">
                    <img
                      className="feedback-image"
                      src="media/feedback-images/feedback-3.jpg"
                      alt=""
                    />
                    <h4 className="about-tittle">Gaylord Jefferson</h4>
                    <p className="about-info">Developer @ Illskill Agency</p>
                    <div className="opacity-box">
                      <p>
                        “When working to a firm but realistic deadline, Danny
                        always completes tasks to a high standard. Care and
                        accuracy is obvious even when put under pressure of
                        time. Prepared to work all the extra hours it takes to
                        meet the deadline.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
