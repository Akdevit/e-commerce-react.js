import React from "react";
import "../css/ContactSection.css";
import Footer from "../Commponent/Footer";
const ContactSection = () => {
  return (
    <>
      <div className="Contact-section-cointener">
        <div className="contact-text-cointener">
          <div className="contact-text-cointener1">
            <div className="icon-with-text">
              <div className="ico-contact">
                <i class="fa-solid fa-phone"></i>
              </div>
              <p className="text-p-contact">Call To Us</p>
            </div>
            <p className="around-p-contact">
              We are available 24/7, 7 days a week.
            </p>
            <p className="around-p-contact">Phone: +8801611112222</p>
          </div>

          <div className="contact-text-cointener2">
            <div className="email-text-contaener">
              <div className="email-text-conte">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <p className="text-p-contact">Write To US</p>
            </div>
            <p className="around-p-contact">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="around-p-contact">Emails: customer@exclusive.com</p>
            <p className="around-p-contact">Emails: support@exclusive.com</p>
          </div>
        </div>
        {/* Contact Info */}
        <div className="contact-all-contact-cointener">
          <div className="inputes-box-contacrt">
            <div className="email-protect-box-contener">
              <input
                type="text"
                className="inpute-filtd-contact"
                placeholder="Enter yor Name"
              />
            </div>
            <div className="email-protect-box-contener">
              <input
                type="Email"
                className="inpute-filtd-contact"
                placeholder="Enter yor Email"
              />
            </div>
            <div className="email-protect-box-contener">
              <input
                type="number"
                className="inpute-filtd-contact"
                placeholder="Enter yor Phone"
              />
            </div>
          </div>
          <div className="textfild-buton-container">
            <textarea className="msg-textfild"></textarea>
            <button className="send-button">Send Massage</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactSection;
