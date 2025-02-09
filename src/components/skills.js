import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="section">
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
                <span className="point">Skills</span>
              </h2>
              <div className="opacity-box">
                <p>
                  I am inspired by creating great work with people who are as
                  passionate as I am about building something awesome.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 wow zoomIn">
                <div className="advantages-box">
                  <h4>Frontend Development</h4>
                  <div className="opacity-box">
                    <p>
                      HTML, CSS, SCSS, React, Redux, NextJs, Tanstack,
                      Bootstrap, Wordpress, Ionic, Cypress.io, Jest.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow zoomIn">
                <hr className="mobile-hr" />
                <div className="advantages-box">
                  <h4>UI\UX Design</h4>
                  <div className="opacity-box">
                    <p>
                      Photoshop, Zeplin, Figma, Prototyping, Wireframing,
                      Usability Testing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 wow zoomIn">
                <hr />
                <div className="advantages-box">
                  <h4>Backend Development</h4>
                  <div className="opacity-box">
                    <p>
                      Node.js, PHP, CakePHP, Laravel, Python, MongoDB,
                      PostgreSQL, GraphQL.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow zoomIn">
                <hr />
                <div className="advantages-box">
                  <h4>Professional\Other Skills</h4>
                  <div className="opacity-box">
                    <p>
                      Effective Communication, a11y, Website Optimization, Agile
                      methodologies, SEO, Design Patterns and Principles.
                    </p>
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

export default Skills;
