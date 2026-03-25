import React, { useState } from "react";
import "./Andaman.css";

function Andaman() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="andaman-section">

      {/* HERO */}
      <div className="andaman-hero">
        <img
          src="/assets/Andaman.jpg"
          alt="Andaman"
        />
        <div className="hero-overlay">
          <h1>🏝️ Andaman Tropical Escape</h1>
          <p>Port Blair • Havelock • Neil Island | 4 Days / 5 Nights</p>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="andaman-layout">

        {/* LEFT */}
        <div className="andaman-main">

          <div className="premium-card">
            <p className="andaman-rating">⭐⭐⭐⭐⭐ 4.9 Premium Rating</p>

            <div className="andaman-highlights">
              <span>🏖️ Radhanagar Beach</span>
              <span>🤿 Scuba Diving</span>
              <span>🚤 Island Cruise</span>
              <span>🌅 Sunset Views</span>
            </div>

            <p>
              Experience Andaman’s crystal-clear waters, coral reefs, and tropical
              beaches with a premium Tour-X package designed for relaxation and adventure.
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
                  <h3>Day 1 — Port Blair Arrival</h3>
                  <p>Cellular Jail visit & Light and Sound show.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 2 — Havelock Island</h3>
                  <p>Ferry ride & Radhanagar Beach sunset.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 3 — Adventure Activities</h3>
                  <p>Scuba diving, snorkeling & beach relaxation.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 4 — Neil Island</h3>
                  <p>Natural Bridge & Laxmanpur Beach.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 5 — Departure</h3>
                  <p>Return to Port Blair & airport drop.</p>
                </div>
              </div>

              {/* HOTEL */}
              <h2>🏨 Premium Resort Stay</h2>

              <div className="hotel-card">
                <div className="hotel-images">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="resort" />
                  <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" alt="room" />
                  <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" alt="sea view" />
                </div>

                <div className="hotel-info">
                  <p><strong>Stay:</strong> Beachside Resort / 4★ Hotel</p>
                  <p><strong>Meals:</strong> Breakfast & Dinner</p>
                  <p><strong>Room:</strong> Sea View Deluxe</p>
                  <p><strong>Transport:</strong> Ferry & Private Cab</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="booking-sidebar">
          <h3>₹22,999 / person</h3>
          <p>Limited slots available</p>
          <button className="btn-primary">Book Now</button>
        </div>

      </div>
    </section>
  );
}

export default Andaman;