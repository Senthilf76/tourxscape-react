import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id ="hero" className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">Explore The World With TourXscape</h1>
        <p className="hero-subtitle">
          Discover unforgettable destinations, curated experiences, and the best travel packages.
        </p>

        <div className="hero-buttons">
          <button className="btn primary-btn">Book Now</button>
          <button className="btn secondary-btn">Explore Packages</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
