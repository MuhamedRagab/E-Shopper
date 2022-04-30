import React from "react";
import cat1 from "../../assets/img/cat-1.jpg";
import cat2 from "../../assets/img/cat-2.jpg";
import cat3 from "../../assets/img/cat-3.jpg";
import cat4 from "../../assets/img/cat-4.jpg";
import cat5 from "../../assets/img/cat-5.jpg";
import cat6 from "../../assets/img/cat-6.jpg";
import Offer from "../Offer/Offer";
import "./products.css";
import "aos/dist/aos.css";
import AOS from "aos";

const products = [
  {
    id: 1,
    name: "Men's dresses",
    quantity: "15 Products",
    image: cat1,
  },

  {
    id: 2,
    name: "Women's dresses    ",
    quantity: "15 Products",
    image: cat2,
  },

  {
    id: 3,
    name: "Baby's dresses    ",
    quantity: "15 Products",
    image: cat3,
  },

  {
    id: 4,
    name: "Accessories",
    quantity: "15 Products",
    image: cat4,
  },

  {
    id: 5,
    name: "Bags",
    quantity: "15 Products",
    image: cat5,
  },

  {
    id: 6,
    name: "Shoes",
    quantity: "15 Products",
    image: cat6,
  },
];

const Products = () => {
  AOS.init({ duration: 2000, delay: 500 });
  return (
    <section>
      <div className="container ">
        <article data-aos={"fade-left"} className=" products__container">
          {products.map((product) => {
            return (
              <figure key={product.id} className="product-card">
                <figcaption>{product.quantity}</figcaption>
                <div className="product-card__image">
                  <img
                    data-aos={"fade-left"}
                    src={product.image}
                    alt="product"
                    loading="lazy"
                  />
                </div>
                <h3>{product.name}</h3>
              </figure>
            );
          })}
        </article>
        <Offer />
      </div>
    </section>
  );
};

export default Products;
