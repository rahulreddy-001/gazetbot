/* Footer.js */

import React from "react";
import logo from "../../assets/logo/2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container footer-left">
        <div className="footer-column">
          <h5>Customer Account</h5>
          <ul>
            <li>My Account</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div className="footer-column">
          <h5>Help & Support</h5>
          <ul>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-left">
            <div className="footer-bottom-left-logo">
              <img src={logo} alt="logo" />
            </div>
            <p>© 2023 All rights reserved. GAZETBOT</p>
          </div>
          <div className="footer-bottom-social">
            <ul className="social-icons">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
