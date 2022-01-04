import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="section">
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
                <span className="point">Experience</span>
              </h2>
              <div className="opacity-box">
                <p>
                  I have worked as a full time professional as well as a
                  freelancer to create highly optimized websites using latest
                  technologies and top quality code.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 right-box">
            <div className="row wow zoomIn">
              <div className="col-md-12">
                <div className="about-row">
                  <h4 className="about-tittle">Senior UI Developer</h4>
                  <p className="about-info">
                    Media.net Software Services (India) Pvt. Ltd
                  </p>
                  <p>Dec, 2017 — Dec, 2021</p>
                  <div className="opacity-box">
                    <p>
                      • Converted PSD and Zeplin designs to Web pages using
                      HTML, CSS, and Javascript.
                      <br />• Created 15 WordPress websites with custom themes
                      built from scratch, 17 Product websites built on CakePHP
                      framework, and 8 Product Listing and Comparison Websites
                      made using ReactJs in the Front-end and NodeJs with Hapi
                      server in the Back-end. All websites are mobile responsive
                      up to 320px and have all major browser support.
                      <br />• Developed 5 highly optimized dashboards using
                      ReactJs to help business teams visualize the key
                      performance indicators and other strategic data for the
                      organization at a glance. Made use of latest libraries
                      like Redux, Webpack for code bundling, Sass for CSS
                      pre-processing, and Axios for API calls.
                      <br />• Mentored 4 new joiners to help them get on board
                      in the team and trained them well.
                      <br />• Brought new ideas and improved existing
                      development process by introducing OOP style of
                      programming and training everyone on writing modular code,
                      thus helping in overall reduction of more than 40% in
                      website development time.
                      <br />• Actively took interviews and helped to bring new
                      talent to the team. Also responsible for setting up the
                      interview questions and assignments for the candidates.
                      <br />• Expertise in creating highly optimized Search
                      Engine Results Page with Google DFP/ADX integration along
                      with the integrations of Taboola and Outbrain Ad Units.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row wow zoomIn">
              <div className="col-md-12">
                <div className="about-row">
                  <h4 className="about-tittle">
                    Application Development Analyst
                  </h4>
                  <p className="about-info">Accenture Solutions Pvt. Ltd</p>
                  <p>Aug, 2016 — Dec, 2017</p>
                  <p style={{ opacity: 0.8 }}>
                    Trained in SAP Sales and Distribution module. Worked on
                    various technologies in different domains such as Automation
                    Initiatives and products based on Artificial Intelligence.
                  </p>
                  <div className="opacity-box">
                    <ul className="work-ul">
                      <li>
                        Created 7 independent Automation utilities that resulted
                        in more than 3000 hrs and $750,000 worth of savings in 1
                        financial year which was highly appreciated by the
                        client.
                      </li>
                      <li>Won star employee of the month twice in 6 months.</li>
                      <li>
                        Created a dashboard for monitoring daily team activites.
                        This helped in increasing the team productivity by more
                        than 40%.
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
                  <h4 className="about-tittle">FreeLance App Developer</h4>
                  <p className="about-info">Vow Jewels LLP.</p>
                  <p>July, 2020 — Nov, 2020</p>
                  <div className="opacity-box">
                    <p>
                      • Developed a mobile application with payment gateway
                      integration based on client requirements and
                      specifications using Ionic 4, Laravel and MySQL. The app
                      is deployed and published on Google PlayStore since
                      November 2020.
                      <br />
                      <a
                        href="https://play.google.com/store/apps/details?id=vow.gold.investment"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-link"
                      >
                        https://play.google.com/store/apps/details?id=vow.gold.investment
                      </a>
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

export default Experience;
