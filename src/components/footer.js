import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <p className="copyright">
            &copy;Copyrights {new Date().getFullYear()} priteshzaveri.com
          </p>
          <div className="social__media">
            <a
              href="https://www.facebook.com/R3v0luTiOnX"
              className="social facebook"
              title="Add on Facebook"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/pritesh.zaveri/"
              className="social instagram"
              title="Follow on Instagram"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://in.linkedin.com/in/pritesh-zaveri-698152ba"
              className="social linkedin"
              title="Connect on Linkedin"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
