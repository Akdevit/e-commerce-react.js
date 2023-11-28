import React, { useEffect, useState } from "react";
import "../css/HomeProduct.css";
import Lodding from "./Lodding";
import { useNavigate } from "react-router-dom";
import { Wish } from "../redux/actions/action";
import { useDispatch } from "react-redux";
const HomeProduct = () => {
  const [dataproduct, setDataproduct] = useState([""]);
  const [lodding, setLodding] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDataproduct(data);
        setLodding(false);
      });
  });

  /* scroll */
  const scrollRight = () => {
    let Srollbox = document.getElementById("Srollbox");
    Srollbox.scrollLeft += 300;
  };
  const scrollLeft = () => {
    let Srollbox = document.getElementById("Srollbox");
    Srollbox.scrollLeft -= 300;
  };
  const dispatch = useDispatch();
  const addwishlist = (res) => {
    dispatch(Wish(res));
  };
  return (
    <>
      <div className="Home-product-container">
        <div className="product-container">
          <div className="combo-today">
            <div className="text-day">Today</div>

            <div className="sale-flash">
              <h2 className="text-sale">Flash Sale</h2>
              {/* add countdown */}
              <div className="product-controller">
                <button className="pre" onClick={() => scrollLeft()}>
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <button className="pre" onClick={() => scrollRight()}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* add product card */}
        <div className="card-product-x" id="Srollbox">
          {lodding ? (
            <>
              <Lodding />
            </>
          ) : (
            dataproduct.map((res) => {
              return (
                <>
                  <div className="card" key={res.id}>
                    <div className="card-image">
                      <img
                        className="product-image"
                        src={res.image}
                        alt="product.jpg"
                        onClick={() => {
                          navigate(`/${res.id}`);
                        }}
                      />
                    </div>
                    <div className="items-details">
                      <p className="text-title">{res.title}</p>

                      <div className="price-like">
                        <p className="price">${res.price}</p>
                        <div
                          className="heart-like"
                          onClick={() => addwishlist(res)}
                        >
                          <i className="fa-regular fa-heart like-her"></i>
                        </div>
                      </div>
                      {/* star */}
                      <div className="retting">
                        <i className="fa-regular fa-star"></i>
                        <p className="number-ratting">
                          {res.rating && res.rating.rate}
                        </p>
                        <p className="product-number">
                          ( {res.rating && res.rating.count} )
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
      <div className="hr-line">
        <hr className="hr" />
      </div>
    </>
  );
};

export default HomeProduct;
