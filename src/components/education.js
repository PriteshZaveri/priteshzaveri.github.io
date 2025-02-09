import React from "react";

const Education = () => {
  return (
    <section id="education" className="section">
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
                <span className="point">Education</span>
              </h2>
              <div className="opacity-box">
                <p>
                  All my life I have been driven by my strong belief that
                  education is important. I try to learn something new every
                  single day.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 right-box">
            <div className="row wow zoomIn">
              <div className="col-md-12">
                <div className="about-row">
                  <h4 className="about-tittle">
                    Bachelor of Engineering in Information Technology
                  </h4>
                  <p className="about-info">
                    - K.J. Somaiya College of Engineering - Mumbai
                  </p>
                  <p>2012 — 2016</p>
                  <div className="opacity-box">
                    <ul>
                      <li>
                        Created a database security system that allows users to
                        access the database after verifying their palm prints.
                      </li>
                      <li>
                        Conducted a workshop for third year students on Android
                        app development.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row wow zoomIn">
              <div className="col-md-12">
                <div className="about-row">
                  <h4 className="about-tittle">Higher Secondary Certificate</h4>
                  <p className="about-info">- Mithibai College - Mumbai</p>
                  <p>2010 — 2012</p>
                  <div className="opacity-box">
                    <ul>
                      <li>Passed HSC in Science with distinction level</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
