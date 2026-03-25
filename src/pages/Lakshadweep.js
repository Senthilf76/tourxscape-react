import React, { useState } from "react";
import "./Lakshadweep.css";

function Lakshadweep() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="lak-section">

      {/* HERO */}
      <div className="lak-hero">
        <img
          src="/assets/lakshadweep.jpg"
          alt="Lakshadweep"
        />
        <div className="hero-overlay">
          <h1>🏝️ Lakshadweep Island Escape</h1>
          <p>Agatti • Bangaram • Kavaratti | 4 Days / 5 Nights</p>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="lak-layout">

        {/* LEFT CONTENT */}
        <div className="lak-main">

          <div className="premium-card">
            <p className="lak-rating">⭐⭐⭐⭐⭐ 4.9 Premium Rating</p>

            <div className="lak-highlights">
              <span>🏖️ Crystal Beaches</span>
              <span>🤿 Coral Snorkeling</span>
              <span>🚤 Lagoon Cruise</span>
              <span>🌅 Island Sunsets</span>
            </div>

            <p>
              Discover the untouched beauty of Lakshadweep with pristine beaches,
              coral reefs, and peaceful island vibes. A perfect tropical getaway.
            </p>

            <button className="btn-glass" onClick={toggleDetails}>
              {showDetails ? "Hide Itinerary" : "View Detailed Itinerary"}
            </button>
          </div>

          {/* DETAILS */}
          {showDetails && (
            <div className="details-wrapper">

              <h2>📍 Travel Itinerary</h2>

              <div className="timeline">
                <div className="timeline-item">
                  <h3>Day 1 — Arrival at Agatti</h3>
                  <p>Flight to Agatti & transfer to beach resort.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 2 — Bangaram Island</h3>
                  <p>Boat transfer & snorkeling in coral lagoons.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 3 — Kavaratti Exploration</h3>
                  <p>Visit lagoons, marine museum & water sports.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 4 — Leisure Day</h3>
                  <p>Relax, beach walk & optional scuba diving.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 5 — Departure</h3>
                  <p>Return transfer to airport.</p>
                </div>
              </div>

              {/* HOTEL */}
              <h2>🏨 Beach Resort Stay</h2>

              <div className="hotel-card">
                <div className="hotel-images">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="beach" />
                  <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" alt="sea" />
                </div>

                <div className="hotel-info">
                  <p><strong>Stay:</strong> Beach Resort / Eco Stay</p>
                  <p><strong>Meals:</strong> Breakfast & Dinner</p>
                  <p><strong>Room:</strong> Ocean View Room</p>
                  <p><strong>Transport:</strong> Boat Transfers Included</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="booking-sidebar">
          <h3>₹32,999 / person</h3>
          <p>Limited island slots</p>
          <button className="btn-primary">Book Now</button>
        </div>

      </div>
    </section>
  );
}

export default Lakshadweep;