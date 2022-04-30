import React, { useRef } from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import Menu from "./Menu";
import { IoIosArrowUp } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const carousel1 = useRef();
  const carousel2 = useRef();
  const menu = useRef();

  const carouselLeft = () => {
    carousel1.current.style.left = "100%";
    carousel2.current.style.left = "0%";
  };
  const carouselRight = () => {
    carousel1.current.style.left = "0%";
    carousel2.current.style.left = "-100%";
  };

  const carousel = () => {
    carousel1.current.style.left === "100%" ? carouselRight() : carouselLeft();
  };

  return (
    <header>
      <div className="container">
        <HeaderTop />

        <div className="header-body">
          <div className="header-body__container ">
            <Menu />
            <div className="header-content container">
              <nav className="header-content__nav">
                <ul className="header-content__nav-menu">
                  <li>
                    <a
                      href="#"
                      className="header-content__nav-menu--links pink-hover"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="header-content__nav-menu--links pink-hover"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="header-content__nav-menu--links pink-hover"
                    >
                      Shop Detail
                    </a>
                  </li>
                  <li>
                    <span className="header-content__nav-menu--links pink-hover">
                      Pages <IoIosArrowUp className="arrow-icon-rotated" />
                    </span>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="header-content__nav-menu--links pink-hover"
                    >
                      Contact
                    </a>
                  </li>
                </ul>

                <div className="header-content__nav-register">
                  <a href="#" className="pink-hover">
                    Login
                  </a>
                  <a href="#" className="pink-hover">
                    Register
                  </a>
                </div>
              </nav>

              {/* Phone */}
              <nav className="header-content__nav-phone">
                <div className="header-top__logo">
                  <a href="#" className="logo">
                    <span>E</span> Shopper
                  </a>
                </div>
                <div>
                  <FaBars
                    className="header-top__bars"
                    onClick={() => {
                      menu.current.classList.toggle("menu-active");
                    }}
                  />
                </div>
                <ul ref={menu} className="header-content__nav-menu--phone">
                  <li>
                    <a
                      href="#"
                      className="header-content__nav-menu--links pink-hover"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="header-content__nav-menu--links pink-hover"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="header-content__nav-menu--links pink-hover"
                    >
                      Shop Detail
                    </a>
                  </li>
                  <li>
                    <span className="header-content__nav-menu--links pink-hover">
                      Pages <IoIosArrowUp className="arrow-icon-rotated" />
                    </span>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="header-content__nav-menu--links pink-hover"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>

              <article className="header-content__carousel">
                <div className="header-content__carousel-arrow">
                  <IoIosArrowUp
                    className="arrow-icon-right"
                    onClick={carousel}
                  />
                  <IoIosArrowUp
                    className="arrow-icon-left"
                    onClick={carousel}
                  />
                </div>
                <div
                  ref={carousel1}
                  className="header-content__carousel-item carousel-item1"
                >
                  <h4>10% OFF YOUR FIRST ORDER</h4>
                  <h2>Fashionable Dress</h2>
                  <button>Shop Now</button>
                </div>
                <div
                  ref={carousel2}
                  className="header-content__carousel-item carousel-item2"
                >
                  <h4>10% OFF YOUR FIRST ORDER</h4>
                  <h2>Reasonable Price</h2>
                  <button>Shop Now</button>
                </div>
              </article>
            </div>
          </div>
        </div>
        <HeaderBottom />
      </div>
    </header>
  );
};

export default Header;
