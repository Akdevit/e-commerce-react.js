import React from "react";
import "../css/Aboutman.css"
import ManImage from "../Image/image 46.png"
import WomanImage from "../Image/image 51.png"
import Mwn2image from "../Image/image 47.png"
const Aboutman = () => {
  return (
    <>
      <div className="Aboutman-cointerner">
         <div className="Aboutman-sub-cointener">
            
            <div className="Aboutman-card">
                <div className="image-wraper-about">
                    <img className="image-man-about" src={ManImage} alt="man.png"/>
                </div>
                <div className="about-text-wrapper">
                    <h1 className="text-about-h1-text">Tom Cruise</h1>
                    <h1 className="text-about-p-text">Founder & Chairman</h1>
                </div>
                <div className="social-about-icons">
                   <i class="fa-brands fa-twitter"></i>
                   <i class="fa-brands fa-instagram"></i>
                   <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>

            <div className="Aboutman-card">
                <div className="image-wraper-about">
                    <img className="image-man-about" src={WomanImage} alt="man.png"/>
                </div>
                <div className="about-text-wrapper">
                    <h1 className="text-about-h1-text">Emma Watson</h1>
                    <h1 className="text-about-p-text">Managing Director</h1>
                </div>
                <div className="social-about-icons">
                   <i class="fa-brands fa-twitter"></i>
                   <i class="fa-brands fa-instagram"></i>
                   <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>

            <div className="Aboutman-card">
                <div className="image-wraper-about">
                    <img className="image-man-about" src={Mwn2image} alt="man.png"/>
                </div>
                <div className="about-text-wrapper">
                    <h1 className="text-about-h1-text">Will Smith</h1>
                    <h1 className="text-about-p-text">Product Designer</h1>
                </div>
                <div className="social-about-icons">
                   <i class="fa-brands fa-twitter"></i>
                   <i class="fa-brands fa-instagram"></i>
                   <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>


         </div>
      </div>
    </>
  );
};

export default Aboutman;
