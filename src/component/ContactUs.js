import React from "react";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    document.title = "ContactUs";
  });
  return (
    <div className="main">
      <div>
        <h2>
          <b>Contact Us</b>
        </h2>
        <div className="row" >
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Phone</h5>
                <p className="card-text" >8410081757</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Email</h5>
                <p className="card-text">
                  <a style={{textDecoration: 'none', color:"black"}} href="mailto:rajathanda92@gmail.com">
                    rajathanda92@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">WhatsApp</h5>
                <p className="card-text">
                  <a style={{textDecoration: 'none', color:"black"}} href="https://wa.me/8410081757">8410081757</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
