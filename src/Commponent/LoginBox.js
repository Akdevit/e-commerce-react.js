import React, { useState } from "react";
import "../css/LoginBox.css";
import LoginImg from "../Image/loginboximg.png";
const LoginBox = ({ getvalueuserdata }) => {
  const [getvalue, setGetvalue] = useState("");
  const getusername = (e) => {
    getvalueuserdata(getvalue);
  };

  const remove = () => {
    let box = document.querySelector(".alert-sub-box");
    box.style.display = "none";
  };
  return (
    <>
      <div className="alert-box-login">
        <div className="alert-sub-box">
          <p className="alert-name">Alert</p>
          <p className="msg-text">Enter any text and Log In</p>
          <div className="remove" onClick={() => remove()}>
            X
          </div>
        </div>
      </div>

      <div className="login-box-cointener">
        <div className="login-box-image">
          <img className="image-login-card" src={LoginImg} alt="card.png" />
        </div>

        <div className="login-box-contener">
          <h1 className="login-text-box">Log in to Exclusive</h1>
          <p className="login-text-box-p">Enter your details below</p>
          <div className="Login-inpute-box-contener">
            <input
              type="text"
              className="login-inp"
              placeholder="Email or phone number"
              onChange={(e) => setGetvalue(e.target.value)}
            />
            <input
              type="password"
              className="login-inp"
              placeholder="password"
            />
            <div className="login-box-button">
              <button className="login-btn" onClick={() => getusername()}>
                Log In
              </button>
              <a href="/" className="forget-login-box-text">
                Forgate password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginBox;
