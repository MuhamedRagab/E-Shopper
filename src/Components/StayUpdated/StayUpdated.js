import React from "react";
import "./stayUpdated.css";

const StayUpdated = () => {
  return (
    <section className="stay-updated">
      <article className="stay__container">
        <h2 className="stay__title">Stay Updated</h2>
        <p className="stay__text">
          Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam
          labore at justo ipsum eirmod duo labore labore.
        </p>
        <form className="stay__form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </article>
    </section>
  );
};

export default StayUpdated;
