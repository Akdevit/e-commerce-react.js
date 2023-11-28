import React from "react";
import "../css/HomeProCatogry.css";
const HomeProCatogry = () => {
  const scrollRight = () => {
    let scrollCato = document.getElementById("scroll-cato");
    scrollCato.scrollLeft += 300;
  };
  const scrollLeft = () => {
    let scrollCato = document.getElementById("scroll-cato");
    scrollCato.scrollLeft -= 300;
  };
  return (
    <>
      <div className="catogry-main-container">
        <div className="catogry-container">
          <div className="text-name">
            <div className="catogry">Categories</div>

            <div className="cato-btn">
              <h1 className="cato-text">Browse By Category</h1>
              <div className="next-pre-btn">
                <button className="btn-n" onClick={() => scrollLeft()}>
                  {" "}
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <button className="btn-n" onClick={() => scrollRight()}>
                  {" "}
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
          {/* add catogry */}
          <div className="product-catogry-container" id="scroll-cato">
            <div className="catogry-box">
              <div className="cat-card">
                <i className="fa-solid fa-mobile-screen-button cato-icon"></i>
                <p className="name-cato">Phones</p>
              </div>
            </div>

            <div className="catogry-box">
              <div className="cat-card">
                <i className="fa-solid fa-desktop  cato-icon"></i>
                <p className="name-cato">Computers</p>
              </div>
            </div>

            <div className="catogry-box">
              <div className="cat-card">
                <i className="fa-regular fa-clock cato-icon"></i>
                <p className="name-cato">SmartWatch</p>
              </div>
            </div>

            <div className="catogry-box">
              <div className="cat-card">
                <i className="fa-solid fa-headphones-simple cato-icon"></i>
                <p className="name-cato">HeadPhones</p>
              </div>
            </div>

            <div className="catogry-box">
              <div className="cat-card">
                <i className="fa-solid fa-book cato-icon"></i>
                <p className="name-cato">Books</p>
              </div>
            </div>

            <div className="catogry-box">
              <div className="cat-card">
                <i className="fa-solid fa-vest-patches cato-icon"></i>
                <p className="name-cato">Fashion accessories</p>
              </div>
            </div>

            <div className="catogry-box">
              <div className="cat-card">
                <i className="fa-solid fa-person-skating cato-icon"></i>
                <p className="name-cato">Sports products</p>
              </div>
            </div>

            <div className="catogry-box">
              <div className="cat-card">
                <i className="fa-solid fa-basket-shopping cato-icon"></i>
                <p className="name-cato">Groceries</p>
              </div>
            </div>

            <div className="catogry-box">
              <div className="cat-card">
                <i className="fa-solid fa-shoe-prints cato-icon"></i>
                <p className="name-cato">shoes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProCatogry;
 