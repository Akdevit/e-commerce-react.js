import React, { useEffect, useState } from "react";
import "../css/HomeBestSeling.css";
import Lodding from "../Commponent/Lodding";
import { useNavigate } from "react-router-dom";
import { Wish } from "../redux/actions/action";
import { useDispatch } from "react-redux";
const HomeBestSeling = () => {
  const [deta, setDeta] = useState([""]);
  const [lodding, setLodding] = useState(true);
  let navigate = useNavigate()
  useEffect(() => {
    // setLodding(true)
    fetch(`https://fakestoreapi.com/products?limit=5`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDeta(data);
        setLodding(false);
      }, []);
  });


  const dispatch = useDispatch();
  const addwishlist = (res)=>{
    dispatch(Wish(res))
  }
  return (
    <>
      <div className="bestproductsell-container">
        <div className="bestproductsell-sub-container">
          <div className="hedertag-bestsall">
            <div className="tag-title">This Month</div>
            <div className="more-btn-text">
              <h1 className="browse-title">Best Selling Products</h1>
              <button className="more-items">View All</button>
            </div>
          </div>
          {/* add product */}
          <div className="bestsallproduct">
            {lodding ? (
              <>
                <Lodding />
              </>
            ) : (
              deta.map((res) => {
                return (
                  <>
                    <div className="card" key={res.id}>
                      <div className="card-image">
                        <img
                          className="product-image"
                          src={res.image}
                          alt="product.jpg"
                          onClick={()=>navigate(`/${res.id}`)}
                        />
                      </div>
                      <div className="items-details">
                        <p className="text-title">{res.title}</p>

                        <div className="price-like">
                          <p className="price">${res.price}</p>
                          <div className="heart-like" onClick={()=>addwishlist(res)}>
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
      </div>
    </>
  );
};

export default HomeBestSeling;
