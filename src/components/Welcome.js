import React from "react";
import "./welcome.css";

function Welcome() {
  return (
    <>
      {/* TOP HEADING */}
      <div className="hero2-wrapper">
        <h1 className="hero2-title">Explore More. Stress Less. Travel the Smart Way</h1>
      </div>

      {/* MAIN SECTION */}
      <section id="home2" className="hero2">

        {/* LEFT SIDE: IMAGE */}
        <div className="hero2-image">
          <img
            src="/assets/world1.jpg"
            alt="Tour"
          />
        </div>

        {/* RIGHT SIDE: TEXT */}
        <div className="hero2-text">
          <h2>TourXscape</h2>

          <p>
            Our mission is to be the leading and most trustworthy travel
            management company that sets the standard for professionalism,
            reliability, and transparency to its customers. We offer a wide
            variety of tours and holidays and have separate divisions for
            corporate travel, tailor-made holidays, and escorted tours.
          </p>

          <p className="social-follow">Follow us on social media for daily updates</p>

          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-square-twitter"></i>
            <i className="fa-brands fa-square-whatsapp"></i>
          </div>
        </div>

      </section>
    </>
  );
}

export default Welcome;
