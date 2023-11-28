import React from "react";
import "../css/Lodding.css"
import LoddingImg from "../Image/icon.png"
const Lodding = () => {
  return (
    <>
      <div className="lodding-contener">
           <img className="lodding-image" src={LoddingImg} alt="icon.png"/>
      </div>
    </>
  );
};

export default Lodding;
