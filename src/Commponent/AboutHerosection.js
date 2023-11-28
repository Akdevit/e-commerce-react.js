import React from "react";
import "../css/AboutHerosection.css";
import ShopAboutImg from "../Image/shop.png";
const AboutHerosection = () => {
  return (
    <>
      <div className="about-hero-section-container">
        <div className="about-text-box">
          <h1 className="h1-about-text">Our Story</h1>
          <p className="p-bout-text">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region. Exclusive has more than 1 Million products to
            offer, growing at a very fast. Exclusive offers a diverse assotment
            in categories ranging from consumer.
          </p>
        </div>

        <div className="shop-about-box">
          <img className="about-image-shop" src={ShopAboutImg} alt="hop.png" />
        </div>
      </div>
    </>
  );
};

export default AboutHerosection;
