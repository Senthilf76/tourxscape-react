import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Corporate Office */}
        <div className="footer-box">
          <h2 className="footer-title">Corporate Office</h2>
          <div className="underline"></div>
          <p>
            TourXscape Pvt LTD,<br />
            Novel Tech Park,<br />
            Opposite to dream Mall,<br />
            , Bangalore – 560042<br />
            Karnataka, India.
          </p>

          <p className="footer-sub">Call Us</p>
          <div className="small-line"></div>
          <p className="footer-highlight">+91 9940882200</p>
        </div>

        {/* Head Office */}
        <div className="footer-box">
          <h2 className="footer-title">Head Office</h2>
          <div className="underline"></div>
          <p>
           TourXscape  Pvt LTD,<br />
            No:1, gcn complex,<br />
            chennai High Road,<br />
            , Chennai – 600006<br />
            Tamil Nadu, India.
          </p>

          <p className="footer-sub">Email Us</p>
          <div className="small-line"></div>
          <p className="footer-highlight">mail@TourXscape.in</p>
        </div>

        {/* Branches */}
        <div className="footer-box">
          <h2 className="footer-title">Our Branches</h2>
          <div className="underline"></div>

          <div className="branches-grid">
            <p>Mumbai</p>
            <p>Trichy</p>
            <p>Hyderabad</p>
            <p>Salem</p>
            <p>Bangalore</p>
            <p>Kochi</p>
            <p>Chennai</p>
            <p>Vellore</p>
            <p>Coimbatore</p>
            <p>Pondicherry</p>
            <p>Erode</p>
            <p>Nagercoil</p>
            <p>Madurai</p>
            <p>Kanyakumari</p>
          </div>

          <p className="footer-sub">Follow Us</p>
          <div className="small-line"></div>

          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-google"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        Copyright © 2025 by TourXscape Pvt.Ltd. All Rights Reserved.<br />
        Privacy Policy | Terms & Conditions | Cancellation & Refund Policy
      </div>
    </footer>
  );
}
