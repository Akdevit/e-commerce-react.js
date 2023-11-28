import React, { useState } from "react";
import "../css/HomeHeroSection.css";
import HeroImage from "../Image/hero-img.png";
import { Link } from "react-router-dom";
const HomeheroSection = () => {
  const [incnumber, setIncnumber] = useState(0);
  let dataHeroText = [
    "Discover Your Perfect Look.",
    "Where Style Meets Convenience.",
    "Elevate Your Shopping Experience.",
    "Shop the Latest Trends.",
    "Quality Products, Exceptional Savings.",
    "Your One-Stop Shop for Everything.",
    "Find Your Perfect Fit Today.",
    "Shop. Save. Smile.",
    "Unleash Your Shopping Desires.",
    "Savor the Joy of Online Shopping.",
    "Fashion for Every Occasion.",
    "Elevate Your Everyday Style.",
    "Where Trends Come to Life.",
    "Upgrade Your Wardrobe with Us.",
    "Curated Collections, Just for You.",
    "Fashion, Delivered to Your Doorstep.",
    "Your Shopping Destination Awaits.",
    "Quality Meets Affordability.",
    "Innovative. Stylish. Yours.",
    "Step into a World of Fashion.",
    "Your Style, Your Way.",
    "Where Dreams and Fashion Collide.",
    "Unleash Your Inner Shopaholic.",
    "Get Ready to Be Amazed.",
    "Elevating Everyday Moments.",
    "Shopping Made Simple.",
    "Turning Dreams into Reality.",
    "Empowering Your Unique Style.",
    "Discover. Shop. Love.",
    "Experience Fashion, Redefined.",
    "Your Dream Wardrobe, One Click Away.",
    "Your Online Shopping Oasis.",
    "Connecting You with Style.",
    "Quality, Choice, Convenience.",
    "Start Your Shopping Adventure Here.",
    "Transforming Shopping into an Experience.",
    "Innovative. Affordable. Yours.",
    "Shopping, Reinvented.",
    "Fashion Finds, One Click Away.",
    "Unlock Your Fashion Potential.",
    "Inspiring Your Style Journey.",
    "The Art of Online Shopping.",
    "Your Style, Our Passion.",
    "Elegance Meets Ease.",
    "Style That Speaks to You.",
    "Elevate Your Everyday Life.",
    "Elegance, One Click at a Time.",
    "Redesigning Your Shopping Experience.",
    "Empower Your Style Evolution.",
    "Your Fashion, Your Rules.",
  ];

  setTimeout(() => {
    setIncnumber(incnumber + 1);
    if (incnumber === dataHeroText.length - 1) {
      setIncnumber(0);
    }
  }, 5000);

  return (
    <>
      <div className="heroSection-cointener">
        <div className="text-buttons">
          <h1 className="header-text">{dataHeroText[incnumber]}</h1>
          <p className="header-paragraf">
            Explore a world of fashion and discover quality products,
            exceptional savings, and unparalleled convenience in every click.
            Elevate your shopping experience today.
          </p>
          <div className="combo-button">
            <Link to="/About" className="a">
              {" "}
              <button className="btn-e over">About this site</button>
            </Link>
            <Link to="/Product" className="a">
              <button className="btn-e start">Explore more product</button>
            </Link>
          </div>
        </div>

        <div className="shopping-images">
          <img className="hero-image" src={HeroImage} alt="hero.png" />
        </div>
      </div>
    </>
  );
};

export default HomeheroSection;
