import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import "./arrow-up.css";

const ArrowUp = () => {
  window.onscroll = () => {
    window.scrollY > 300
      ? (document.querySelector(".arrow-up").style.display = "block")
      : (document.querySelector(".arrow-up").style.display = "none");
  };
  return (
    <a href="#">
      <button className="arrow-up">
        <FaAngleDoubleUp />
      </button>
    </a>
  );
};

export default ArrowUp;
