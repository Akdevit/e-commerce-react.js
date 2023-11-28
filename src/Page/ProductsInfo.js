import React, { useEffect, useState } from "react";
import "../css/ProductsInfo.css";
import NavBaar from "../Commponent/NavBaar";
import { useParams } from "react-router-dom";
import Lodding from "../Commponent/Lodding";
import Footer from "../Commponent/Footer";
const ProductsInfo = () => {
  const [title, setTitle] = useState();
  const [ratting, setRatting] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [lodding, setLodding] = useState(true);
  const [count, setCount] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((pdeta) => {
        setTitle(pdeta.title);
        setRatting(pdeta.rating && pdeta.rating.rate);
        setPrice(pdeta.price);
        setDescription(pdeta.description);
        setImage(pdeta.image);
        setLodding(false);
      }, []);
  });

  /* function to increase number and decrease */
  const increasenumber = () => {
    setCount(count + 1);
  };
  const deincreasenumber = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
    }
  };

  return (
    <>
      <NavBaar />
      {lodding ? (
        <>
          <Lodding />
        </>
      ) : (
        <div className="ProductsInfo-contener">
          {/* div box product image  */}
          <div className="productinfo-image-box">
            <img className="product-box-image" src={image} alt="product.png" />
          </div>
          {/* div box product details */}
          <div className="ProductsInfo-detils-contener">
            <h1 className="product-title-name">{title}</h1>

            <div className="show-product-ratting">
              <i className="fa-solid fa-star star-fa"></i>
              <p className="ratting-number-star">{ratting}</p>
            </div>
            <h1 className="product-prise-text">${price}</h1>
            <p className="product-description-box-text">{description}</p>
            <hr className="product-box-line" />

            <div className="colors-box-productinfo">
              <p className="name-of-color-proinfo">Colors:</p>
              <div className="colors-box-round-contenres-productinfo"></div>
              <div className="colors-box-round-contenres-productinfo1"></div>
            </div>

            <div className="sizeproduct-box-info">
              <p className="name-of-color-proinfo">Sizes:</p>
              <div className="size-p-info-container">XS</div>
              <div className="size-p-info-container">S</div>
              <div className="size-p-info-container">M</div>
              <div className="size-p-info-container">L</div>
              <div className="size-p-info-container">XL</div>
            </div>

            <div className="countbox-buy-button-wishlist">
              <div className="countofproducts-product">
                <button
                  className="deincrease-button"
                  onClick={() => deincreasenumber()}
                >
                  -
                </button>
                <p className="show-number0fproducts">{count}</p>
                <button
                  className="increase-button"
                  onClick={() => increasenumber()}
                >
                  +
                </button>
              </div>
              <button className="buy-now-box-products-box">Buy Now</button>
              {/* <div className="wishlist-product-box-save">
                <i
                  class="fa-regular fa-heart wishlist-productinfo"
                  onClick={() => addWishlist()}
                ></i>
              </div> */}
            </div>

            <div className="product-delevery-info">
              <div className="delevery-truck-with-text-productinfo">
                <i class="fa-solid fa-truck delevery-tuck"></i>
                <div className="delevry-truk-summery-p">
                  <p className="delevry-truk-summery-text1">Free Delivery</p>
                  <p className="delevry-truk-summery-text2">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <div className="delevery-truck-with-text-productinfo">
                <i class="fa-solid fa-rotate-left"></i>
                <div className="delevry-truk-summery-p">
                  <p className="delevry-truk-summery-text1">Return Delivery</p>
                  <p className="delevry-truk-summery-text2">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductsInfo;
