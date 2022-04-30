import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const Menu = () => {
  return (
    <aside className="header-menu">
      <ul className="header-menu-categories">
        <li className="header-menu-categories-item">
          <button>
            Categories
            <IoIosArrowUp className="arrow-icon" />
          </button>

          <ul className="header-menu-categories-list">
            <li className="header-menu-categories-list-item">
              <button className="pink-hover">
                Dresses
                <IoIosArrowUp className="arrow-icon arrow-icon-rotated" />
              </button>
            </li>
            <li className="header-menu-categories-list-item ">
              <a href="#" className="pink-hover">
                Shirts
              </a>
            </li>
            <li className="header-menu-categories-list-item ">
              <a href="#" className="pink-hover">
                Jeans
              </a>
            </li>
            <li className="header-menu-categories-list-item ">
              <a href="#" className="pink-hover">
                Swimwear
              </a>
            </li>
            <li className="header-menu-categories-list-item ">
              <a href="#" className="pink-hover">
                Sleepwear
              </a>
            </li>
            <li className="header-menu-categories-list-item ">
              <a href="#" className="pink-hover">
                Sportswear
              </a>
            </li>
            <li className="header-menu-categories-list-item ">
              <a href="#" className="pink-hover">
                JumpSuits
              </a>
            </li>
            <li className="header-menu-categories-list-item ">
              <a href="#" className="pink-hover">
                Blazers
              </a>
            </li>
            <li className="header-menu-categories-list-item ">
              <a href="#" className="pink-hover">
                Jackets
              </a>
            </li>
            <li className="header-menu-categories-list-item ">
              <a href="#" className="pink-hover">
                Shoes
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default Menu;
