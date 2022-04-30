import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import payments from "../../assets/img/payments.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <article className="footer__contact">
          <div>
            <a href="#" className="logo">
              <span>E</span> Shopper
            </a>
          </div>
          <p>
            Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no
            sit erat lorem et magna ipsum dolore amet erat.
          </p>
          <h3>
            <FaMapMarkerAlt className="icon" /> 123 Street, New York, USA
          </h3>
          <h3>
            <FaPhone className="icon" /> info@example.com
          </h3>
          <h3>
            <FaEnvelope className="icon" /> +012 345 67890
          </h3>
        </article>

        <article className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <IoIosArrowUp className="arrow-icon-rotated-right" />
              <a href="#">Home</a>
            </li>
            <li>
              <IoIosArrowUp className="arrow-icon-rotated-right" />
              <a href="#">Our Shop</a>
            </li>
            <li>
              <IoIosArrowUp className="arrow-icon-rotated-right" />
              <a href="#">Shop Detail</a>
            </li>
            <li>
              <IoIosArrowUp className="arrow-icon-rotated-right" />
              <a href="#">Shopping Cart</a>
            </li>
            <li>
              <IoIosArrowUp className="arrow-icon-rotated-right" />
              <a href="#">Checkout</a>
            </li>
            <li>
              <IoIosArrowUp className="arrow-icon-rotated-right" />
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </article>
        <article className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <IoIosArrowUp className="arrow-icon-rotated-right" />
              <a href="#">Home</a>
            </li>
            <li>
              <IoIosArrowUp className="arrow-icon-rotated-right" />
              <a href="#">Our Shop</a>
            </li>
            <li>
              <IoIosArrowUp className="arrow-icon-rotated-right" />
              <a href="#">Shop Detail</a>
            </li>
            <li>
              <IoIosArrowUp className="arrow-icon-rotated-right" />
              <a href="#">Shopping Cart</a>
            </li>
            <li>
              <IoIosArrowUp className="arrow-icon-rotated-right" />
              <a href="#">Checkout</a>
            </li>
            <li>
              <IoIosArrowUp className="arrow-icon-rotated-right" />
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </article>

        <article className="newsletter">
          <h2 className="newsletter__title">Newsletter</h2>
          <form className="newsletter__form">
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your email" />
            <button type="submit">Subscribe Now</button>
          </form>
        </article>
      </div>
      <div className="container copy-right ">
        <p>
          &copy;
          <a
            href="https://portfolio-mr.vercel.app"
            target="_blank"
            style={{ color: "#006898", padding: "0.5rem" }}
          >
            M_Ragab
          </a>
          .All Rights Reserved. Designed by
          <a
            href="https://www.facebook.com/mr2837465"
            target="_blank"
            style={{ color: "#006898", padding: "0.5rem" }}
          >
            Mohamed Ragab
          </a>
        </p>

        <div className="copy-right--image">
          <img src={payments} alt="payments" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
