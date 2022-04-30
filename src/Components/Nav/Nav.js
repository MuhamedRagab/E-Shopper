import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="contact-nav">
      <div className="container nav__container">
        <ul className="nav__support-links">
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>

        <ul className="nav__social-icons">
          <li>
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
