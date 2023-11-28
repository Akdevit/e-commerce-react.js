import React from "react";
import "../css/NavBaar.css";
import Icon from "../Image/icon.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBaar = () => {
  const getdeta = useSelector((state) => state.cartreducers.carts);
  const wishdeta = useSelector((state) => state.Wishcartreducers.Wishcarts);


  const HameBurgerMenu = ()=>{
  
      var x = document.querySelector(".ul-box");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    
  }
  return (
    <>
      <div className="Navbaar-cointener">
        <Link to="/" className="a">
          <div className="icon-nav">
            <img className="icon_logo" src={Icon} alt="logo" />
            <h1 className="site_name">ShopNest</h1>
          </div>
        </Link>

        <div className="ul-box">
          <ul className="ul">
            <li className="li">
              <Link to="/" className="a">
                Home
              </Link>
            </li>
            <li className="li">
              <Link to="/Product" className="a">
                Product{" "}
              </Link>
            </li>
            <li className="li">
              <Link to="/About" className="a">
                About{" "}
              </Link>
            </li>
            <li className="li">
              <Link to="/ContactUs" className="a">
                Contact Us
              </Link>
            </li>
            {/* <li className="li">
              <Link to="/SignUp" className="a">
                Log In
              </Link>
            </li> */}
          </ul>

          <div className="search-navebaar">
            <input
              type="search"
              className="sear-nav"
              placeholder="search items"
            />
            <i className="fa-solid fa-magnifying-glass ser-icon-li"></i>
          </div>
        </div>

        <div className="items-for-user">
          <Link to="/WishList" className="a">
            <div className="hearts">
              <i className="fa-regular fa-heart hert"></i>
              <div className="show-item-heart">
                <p className="item-number">{wishdeta.length}</p>
              </div>
            </div>
          </Link>

          <Link to="/AddToCard" className="a">
            <div className="shoping-card">
              <i className="fa-solid fa-cart-shopping"></i>
              <div className="show-item-shopping">
                <p className="item-number">{getdeta.length}</p>
              </div>
            </div>
          </Link>

        </div>

        <div className="Hame-burger" onClick={()=>HameBurgerMenu()}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </>
  );
};

export default NavBaar;
