import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 wow zoomIn">
            <div className="copyright">
              <p>&copy;Copyrights {new Date().getFullYear()} Pritesh Zaveri</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
