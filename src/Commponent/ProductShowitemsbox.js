import React, { useEffect, useState } from "react";
import "../css/ProductShowitemsbox.css";
import Lodding from "../Commponent/Lodding";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import { Wish } from "../redux/actions/action";
const ProductShowitemsbox = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([""]);
  const [lodding, setLodding] = useState(true);
  let navigate = useNavigate();

  /* ............redux............... */
  const dispatch = useDispatch();

  const senddetaaddtocard = (productadd) => {
    dispatch(ADD(productadd));
  };

  const WishList=(wishnum)=>{
    dispatch(Wish(wishnum));
  }
 /* ............redux............... */
  /* renge set value */
  const rangeSelector = (event) => {
    setValue(event);
    // console.log(newValue)
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((deta) => {
        // console.log(deta);
        setData(deta);
        setLodding(false);
      }, []);
  });

  /* function to show filter side bar */
  const showSideBar = () => {
    const sideBar = document.getElementById("show-filter-side-bar");
    sideBar.style.display = "block";
  };
  /* function to Hide filter side bar */
  const HideShowbar = () => {
    const sideBar = document.getElementById("show-filter-side-bar");
    sideBar.style.display = "none";
  };

  return (
    <>
      {/* filter side show button */}
      <div className="hide-show-filter">
        <i
          className="fa-solid fa-bars-staggered"
          onClick={() => showSideBar()}
        ></i>
      </div>
      <div className="ProductShowitemsbox-container">
        {/* Side baar filter box */}
        <div className="Filter-side-baar" id="show-filter-side-bar">
          <div className="name-btn">
            <h1 className="name-filter">Filter</h1>
            <button className="hide-slide" onClick={() => HideShowbar()}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          {/* filter colors */}
          <div className="colors-filter">
            <p className="color-name-p">Color's</p>
            <div className="colo-box">
              <div className="collors-filter-box1"></div>
              <div className="collors-filter-box2"></div>
              <div className="collors-filter-box3"></div>
              <div className="collors-filter-box4"></div>
              <div className="collors-filter-box5"></div>
              <div className="collors-filter-box6"></div>
            </div>
          </div>
          {/* filter sizes */}
          <div className="size-content-filter">
            <p className="color-name-p">Size's</p>
            <div className="sizes-list">
              <div className="sizes-name size-hover">XS</div>
              <div className="sizes-name">S</div>
              <div className="sizes-name">M</div>
              <div className="sizes-name">L</div>
              <div className="sizes-name">XL</div>
            </div>
          </div>
          {/* Filter catogreys */}
          <div className="catogrey-filter-container">
            <p className="color-name-p">Category's</p>
            <div className="Categorys-box">
              <div className="Category-name category-hover">All</div>
              <div className="Category-name">Men</div>
              <div className="Category-name">Women</div>
              <div className="Category-name">Grils</div>
              <div className="Category-name">Boys</div>
            </div>
          </div>
          {/* Filter Price */}
          <div className="Filter-price-renge">
            <p className="color-name-p">Price's</p>
            <div className="price-set">
              <input
                type="range"
                value={value}
                onChange={(e) => rangeSelector(e.target.value)}
                className="price-slider"
              />
              <p className="range-number">${value}</p>
            </div>
          </div>
          {/* Brands */}
          <div className="brands-show-filter">
            <p className="color-name-p">Brand's</p>
            <div className="brands-box-x">
              <div className="b-c">
                <input className="brands-ceck" type="checkbox" name="box1" />
                <label for="box1">Nike </label>
              </div>
              <div className="b-c">
                <input className="brands-ceck" type="checkbox" name="box1" />
                <label for="box1">Levi's </label>
              </div>
              <div className="b-c">
                <input className="brands-ceck" type="checkbox" name="box1" />
                <label for="box1">Zara </label>
              </div>
              <div className="b-c">
                <input className="brands-ceck" type="checkbox" name="box1" />
                <label for="box1">H&M </label>
              </div>
              <div className="b-c">
                <input className="brands-ceck" type="checkbox" name="box1" />
                <label for="box1">Mango </label>
              </div>
              <div className="b-c">
                <input className="brands-ceck" type="checkbox" name="box1" />
                <label for="box1">ASOS </label>
              </div>
              <div className="b-c">
                <input className="brands-ceck" type="checkbox" name="box1" />
                <label for="box1">Boohoo </label>
              </div>
              <div className="b-c">
                <input className="brands-ceck" type="checkbox" name="box1" />
                <label for="box1">Topshop </label>
              </div>
              <div className="b-c">
                <input className="brands-ceck" type="checkbox" name="box1" />
                <label for="box1">Gap </label>
              </div>
            </div>
          </div>
        </div>

        {/* Product side show */}
        <div className="Product-show-side-baar">
          {lodding ? (
            <>
              <Lodding />
            </>
          ) : (
            data.map((res) => {
              return (
                <>
                  <div className="card-product" key={res.id}>
                    <div className="image-box-x">
                      <img
                        src={res.image}
                        className="image-im"
                        alt="product.jpg"
                        onClick={() => navigate(`/${res.id}`)}
                      />
                    </div>
                    <p className="title">{res.title}</p>
                    <p className="price">${res.price}</p>
                    <div className="heart-wish" onClick={()=>WishList(res)}>
                      <i class="fa-regular fa-heart wish"></i>
                    </div>
                    <div className="but-box">
                      <button
                        className="add-to-card"
                        onClick={() => senddetaaddtocard(res)}
                      >
                        Add To Card
                      </button>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ProductShowitemsbox;
