import React from "react";
import NavBaar from "../Commponent/NavBaar";
import { useSelector } from "react-redux";
import "../css/AddtoCart.css";
import { DEL } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Commponent/Footer"
const AddToCard = () => {
  const getdeta = useSelector((state) => state.cartreducers.carts);
  // console.log(getdeta);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteitems = (id) => {
    dispatch(DEL(id));
  };

  return (
    <>
      <NavBaar />
      <h1
        style={{
          marginLeft: "60px",
          marginTop: "20px",
        }}
      >
        Cart's
      </h1>

      <div className="main-carts-conteners">
        <div className="cards-box">
          {getdeta.length === 0 ? (
            <>
              <h1
                style={{
                  textAlign: "center",
                }}
              >
                Cart Is Empty
              </h1>
            </>
          ) : (
            getdeta.map((res) => {
              return (
                <>
                  <div className="addtocard-products-details">
                    <div
                      className="image-name-products"
                      onClick={() => navigate(`/${res.id}`)}
                    >
                      <img
                        className="image-addto"
                        src={res.image}
                        alt="product.jpg"
                      />
                      <p className="name-produst-addto">{res.title}</p>
                    </div>

                    <div className="price-container">
                      <p className="price-addto">${res.price}</p>
                    </div>

                    <div className="quintity-container">
                      <button className="decrese-addto">-</button>
                      <p className="number-show-addto">1</p>
                      <button className="increase-addto">+</button>
                    </div>

                    <div className="delete-container">
                      <i
                        class="fa-solid fa-trash"
                        onClick={() => deleteitems(res.id)}
                      ></i>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>

      <div className="two-btn-main-container">
        <div className="two-btn-group-container-addto">
          <button className="addto-return-up">Return To Shop</button>
          <button className="addto-return-up">Update Cart</button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AddToCard;
