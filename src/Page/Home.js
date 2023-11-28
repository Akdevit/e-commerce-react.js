import React from "react";
import NavBaar from "../Commponent/NavBaar";
import HomeheroSection from "../Commponent/HomeheroSection";
import HomeProduct from "../Commponent/HomeProduct";
import HomeProCatogry from "../Commponent/HomeProCatogry";
import HomeBestSeling from "../Commponent/HomeBestSeling";
import Offeradds from "../Commponent/Offeradds";
import HomeOurProducts from "../Commponent/HomeOurProducts";
import HomeServices from "../Commponent/HomeServices";
import Footer from "../Commponent/Footer";

const Home = () => {
  return (
    <>
      <NavBaar/>
      <HomeheroSection/>
      <HomeProduct/>
      <HomeProCatogry/>
      <HomeBestSeling/>
      <Offeradds/>
      <HomeOurProducts/>
      <HomeServices/>
      <Footer/>
      
    </>
  );
};

export default Home;
