import React from "react";
import {
  FaCheck,
  FaShippingFast,
  FaExchangeAlt,
  FaPhoneVolume,
} from "react-icons/fa";

const headerBottom = () => {
  return (
    <article className="header-bottom">
      <div className="header-bottom-item">
        <FaCheck className="header-bottom--item-icon" />
        <h3>Quality Product</h3>
      </div>
      <div className="header-bottom-item">
        <FaShippingFast className="header-bottom--item-icon" />
        <h3>Free Shipping</h3>
      </div>
      <div className="header-bottom-item">
        <FaExchangeAlt className="header-bottom--item-icon" />
        <h3>14-Day Return</h3>
      </div>
      <div className="header-bottom-item">
        <FaPhoneVolume className="header-bottom--item-icon" />
        <h3>24/7 Support</h3>
      </div>
    </article>
  );
};

export default headerBottom;
