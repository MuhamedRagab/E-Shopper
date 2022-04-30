import React from "react";
import VendorSwiper from "./VandorSwiper";
import "./vendor.css";

const Vendor = () => {
  return (
    <section className="vendor">
      <article className="container vendor__container">
        <VendorSwiper />
      </article>
    </section>
  );
};

export default Vendor;
