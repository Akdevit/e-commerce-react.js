import React from "react";
import NavBaar from "../Commponent/NavBaar";
import { useDispatch, useSelector } from "react-redux";
import "../css/WishList.css";
import { ADD } from "../redux/actions/action";
import { WishDEL } from "../redux/actions/action";
import Footer from "../Commponent/Footer";
import { useNavigate } from "react-router-dom";
const WishList = () => {
  const wishdeta = useSelector((state) => state.Wishcartreducers.Wishcarts);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const AddToCard = (res) => {
    dispatch(ADD(res));
  };
  const deleteitems = (id) => {
    dispatch(WishDEL(id));
  };
  return (
    <>
      <NavBaar />
      <h1 className="wishlist-name-number-wish">WishList({wishdeta.length})</h1>

      <div className="wishlist-container-wish">
        <div className="wishlist-sub-container-wish">
          {wishdeta.length === 0 ? (
            <>
              <h1>Wish List Is Empty</h1>
            </>
          ) : (
            wishdeta.map((res) => {
              return (
                <>
                  <div className="card-wishlist-wish">
                    <img
                      className="wishlist-image"
                      src={res.image}
                      alt="product-wish.jpg"
                      onClick={() => navigate(`/${res.id}`)}
                    />
                    <div className="sub-container-wish-text">
                      <button
                        className="addto-wishlist-wish"
                        onClick={() => AddToCard(res)}
                      >
                        Add To Cart
                      </button>
                      <p className="product-name-wish">{res.title}</p>
                      <div className="both-p-d-wish">
                        <p className="price-wish">${res.price}</p>
                        <i
                          class="fa-solid fa-trash wish-del"
                          onClick={() => deleteitems(res.id)}
                        ></i>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WishList;
