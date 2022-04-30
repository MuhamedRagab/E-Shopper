import React from "react";
import offer1 from "../../assets/img/offer-1.png";
import offer2 from "../../assets/img/offer-2.png";
import "./offer.css";

const Offer = () => {
  return (
    <article className="offer__container">
      <figure className="offer-card">
        <img src={offer1} alt="offer" />
        <div>
          <figcaption>20% OFF THE ALL ORDER</figcaption>
          <h3>Spring Collection</h3>
          <button>Shop Now</button>
        </div>
      </figure>

      <figure className="offer-card">
        <div>
          <figcaption>20% OFF THE ALL ORDER</figcaption>
          <h3>Winter Collection </h3>
          <button>Shop Now</button>
        </div>
        <img src={offer2} alt="offer" />
      </figure>
    </article>
  );
};

export default Offer;
