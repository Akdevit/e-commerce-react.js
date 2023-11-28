import React from "react";
import "../css/Footer.css"
const Footer = () => {
  return (
    <>
      <div className="footer-contener">
           
         <div className="footer-sub-contener">
              
              <div className="box-footer1">
                  <h1 className="text-h">Exclusive</h1>
                  <h2 className="text-h">Subscribe</h2>
                  <div className="subscrabe">
                    <p className="text-p">Get 10% off your first order</p>
                    <div className="input-btn">
                        <input className="f-in" type="email" placeholder="Enter your email"/>
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                  </div>
              </div>

              <div className="box-footer2">
                <h1 className="text-h">Support</h1>
                <p className="para-footer">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p className="para-footer">exclusive@gmail.com</p>
                <p className="para-footer">+88015-88888-9999</p>
              </div>

              <div className="box-footer3">
                <h1 className="text-h">Account</h1>
                <p className="para-footer">My Account</p>
                <p className="para-footer">ogin / Register</p>
                <p className="para-footer">Cart</p>
                <p className="para-footer">Wishlist</p>
                <p className="para-footer">Shop</p>
              </div>
              
              <div className="box-footer4">
                <h1 className="text-h">Quick Link</h1>
                <p className="para-footer">Privacy Policy</p>
                <p className="para-footer">erms Of Use</p>
                <p className="para-footer">FAQ</p>
                <p className="para-footer">Contact</p>
              </div>


         </div>

      </div>
    </>
  );
};

export default Footer;
