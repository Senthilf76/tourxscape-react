import React from "react";
import "./About.css";

const AboutTourXscape = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-pic">
        <img src="/assets/2.png"
            alt="Tour"></img>
      </div>
      <div className="about-container">

        <h2 className="about-title">About TourXscape</h2>

        <p className="about-brief">
          Discover a new way to explore the world with Tour-X — a modern travel platform designed to simplify planning,
         inspire discovery, and turn every journey into a seamless experience.
          From curated destinations to effortless trip management,
         everything you need for travel lives in one powerful space.
        </p>

        <div className="about-content">
          <p>
           Tour-X is more than a travel website
            — it’s a vision to create meaningful, personalized travel experiences.
             By blending innovation with elegant design,
             we aim to make every journey smoother, smarter, and more memorable.
          </p>
        </div>

        <div className="about-values">
          <div className="value-card">
            <h4>Start Exploring</h4>
            <p>
              
            </p>
          </div>

          <div className="value-card">
            <h4>View Destinations</h4>
            <p>
              
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTourXscape;
