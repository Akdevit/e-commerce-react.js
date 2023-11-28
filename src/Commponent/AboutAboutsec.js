import React from "react";
import "../css/AboutAboutsec.css";
const AboutAboutsec = () => {
  return (
    <>
      <div className="about-about-section-contener">
        <div className="about-sub-section">
          <div className="card-about-box">
            <div className="about-join-box">
              <div className="about-round-box">
                <div className="about-round-box2">
                  <i class="fa-solid fa-store"></i>
                </div>
              </div>
              <h1 className="text-about-h1">10.5k </h1>
              <h1 className="text-about-p">Sallers active our site</h1>
            </div>
          </div>

          <div className="card-about-box">
            <div className="about-join-box">
              <div className="about-round-box">
                <div className="about-round-box2">
                  <i class="fa-solid fa-circle-dollar-to-slot"></i>
                </div>
              </div>
              <h1 className="text-about-h1">33k </h1>
              <h1 className="text-about-p">Mopnthly Produduct Sale</h1>
            </div>
          </div>

          <div className="card-about-box">
            <div className="about-join-box">
              <div className="about-round-box">
                <div className="about-round-box2">
                  <i class="fa-solid fa-bag-shopping"></i>
                </div>
              </div>
              <h1 className="text-about-h1">45.5k </h1>
              <h1 className="text-about-p">Customer active in our site</h1>
            </div>
          </div>

          <div className="card-about-box">
            <div className="about-join-box">
              <div className="about-round-box">
                <div className="about-round-box2">
                  <i class="fa-solid fa-sack-dollar"></i>
                </div>
              </div>
              <h1 className="text-about-h1">25k </h1>
              <h1 className="text-about-p">Anual gross sale in our site</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAboutsec;
