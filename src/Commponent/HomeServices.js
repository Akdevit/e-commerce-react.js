import React from "react";
import "../css/HomeServices.css";
const HomeServices = () => {
  return (
    <>
      <div className="services-conteners">
        <div className="services-sub-contener">
          <div className="cointener-service">
            <div className="services1">
              <div className="service-box">
                <i class="fa-solid fa-truck-fast"></i>
              </div>
            </div>
            <div className="text">
              <h2 className="header-text-services">FREE AND FAST DELIVERY</h2>
              <p className="sub-text">Free delivery for all orders over $140</p>
            </div>
          </div>

          <div className="cointener-service">
            <div className="services1">
              <div className="service-box">
                <i class="fa-solid fa-headset"></i>
              </div>
            </div>
            <div className="text">
              <h2 className="header-text-services">24/7 CUSTOMER SERVICE</h2>
              <p className="sub-text">Friendly 24/7 customer support</p>
            </div>
          </div>

          <div className="cointener-service">
            <div className="services1">
              <div className="service-box">
                <i class="fa-solid fa-shield"></i>
              </div>
            </div>
            <div className="text">
              <h2 className="header-text-services">MONEY BACK GUARANTEE</h2>
              <p className="sub-text">We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeServices;
