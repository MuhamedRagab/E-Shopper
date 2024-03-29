import React, { useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const HeaderTop = () => {
  let [purchases, setPurchases] = useState(localStorage.getItem("purchases"));
  setInterval(() => {
    setPurchases(JSON.parse(localStorage.getItem("purchases")));
  }, 1000);

  return (
    <section className="header-top">
      <div className="header-top__logo">
        <a href="# " className="logo">
          <span>E</span> Shopper
        </a>
      </div>

      <form className="header-top__searchForm">
        <input type="search" placeholder="Search for products" />
        <button className="btn">
          <FaSearch className="icon" />
        </button>
      </form>

      <div className="buys-loves">
        <button className="btn">
          <FaHeart className="icon" /> <span>0</span>
        </button>
        <button className="btn">
          <FaShoppingCart className="icon" />
          <span>{purchases || 0}</span>
        </button>
      </div>
    </section>
  );
};

export default HeaderTop;
