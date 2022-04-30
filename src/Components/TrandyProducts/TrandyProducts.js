import React from "react";
import product1 from "../../assets/img/product-1.jpg";
import product2 from "../../assets/img/product-2.jpg";
import product3 from "../../assets/img/product-3.jpg";
import product4 from "../../assets/img/product-4.jpg";
import product5 from "../../assets/img/product-5.jpg";
import product6 from "../../assets/img/product-6.jpg";
import product7 from "../../assets/img/product-7.jpg";
import product8 from "../../assets/img/product-8.jpg";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import "./trandyProducts.css";
import AOS from "aos";
import "aos/dist/aos.css";

const trandyProducts = [
  {
    id: 1,
    name: "Colorful Stylish Shirt",
    newPrice: "$123.00",
    oldPrice: "$123.00",
    image: product1,
  },
  {
    id: 2,
    name: "Colorful Stylish Shirt",
    newPrice: "$123.00",
    oldPrice: "$123.00",
    image: product2,
  },
  {
    id: 3,
    name: "Colorful Stylish Shirt",
    newPrice: "$123.00",
    oldPrice: "$123.00",
    image: product3,
  },
  {
    id: 4,
    name: "Colorful Stylish Shirt",
    newPrice: "$123.00",
    oldPrice: "$123.00",
    image: product4,
  },
  {
    id: 5,
    name: "Colorful Stylish Shirt",
    newPrice: "$123.00",
    oldPrice: "$123.00",
    image: product5,
  },
  {
    id: 6,
    name: "Colorful Stylish Shirt",
    newPrice: "$123.00",
    oldPrice: "$123.00",
    image: product6,
  },
  {
    id: 7,
    name: "Colorful Stylish Shirt",
    newPrice: "$123.00",
    oldPrice: "$123.00",
    image: product7,
  },
  {
    id: 8,
    name: "Colorful Stylish Shirt",
    newPrice: "$123.00",
    oldPrice: "$123.00",
    image: product8,
  },
];
const TrandyProduct = ({ title }) => {
  AOS.init({ duration: 2000, delay: 500 });

  return (
    <section>
      <div className="container trandy__container">
        <h1 className="trandy__title">{title}</h1>

        <article className="trandy__cards">
          {trandyProducts.map((product) => {
            return (
              <figure
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="trandy-card"
                key={product.id}
              >
                <div className="trandy-card__image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <figcaption className="trandy-card--info">
                  <h3>{product.name}</h3>
                  <div className="trandy-card--price">
                    <span>{product.newPrice}</span>
                    <span className="old-price">{product.oldPrice}</span>
                  </div>
                </figcaption>

                <div className="trandy-card--details">
                  <button>
                    <FaEye className=" icon" /> View Details
                  </button>
                  <button>
                    <FaShoppingCart className=" icon" /> Add To Cart
                  </button>
                </div>
              </figure>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default TrandyProduct;
