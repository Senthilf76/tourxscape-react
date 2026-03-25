import React, { useState } from "react";
import "./Islands.css";

function Islands() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="islands-section">

      {/* HERO */}
      <div className="islands-hero">
        <img
          src="/assets/maldives.jpeg"
          alt="Islands"
        />
        <div className="hero-overlay">
          <h1>🏝️ Exotic Islands Escape</h1>
          <p>Maldives • Seychelles • Lakshadweep | 4 Days / 5 Nights</p>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="islands-layout">

        {/* LEFT CONTENT */}
        <div className="islands-main">

          <div className="premium-card">
            <p className="islands-rating">⭐⭐⭐⭐⭐ 4.9 Premium Rating</p>

            <div className="islands-highlights">
              <span>🏖️ Private Beaches</span>
              <span>🤿 Snorkeling</span>
              <span>🌅 Sunset Cruise</span>
              <span>🏨 Water Villas</span>
            </div>

            <p>
              Escape to paradise with crystal-clear waters, white sandy beaches,
              and luxury island stays. Perfect for relaxation and honeymoon trips.
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
                  <h3>Day 1 — Arrival & Resort Check-in</h3>
                  <p>Airport pickup, speedboat transfer & beach resort stay.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 2 — Water Activities</h3>
                  <p>Snorkeling, scuba diving & coral reef exploration.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 3 — Island Hopping</h3>
                  <p>Visit nearby islands & enjoy sunset cruise.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 4 — Leisure & Relaxation</h3>
                  <p>Spa, beach time & optional activities.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 5 — Departure</h3>
                  <p>Checkout & return transfer.</p>
                </div>
              </div>

              {/* HOTEL */}
              <h2>🏨 Luxury Island Stay</h2>

              <div className="hotel-card">
                <div className="hotel-images">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="island beach" />
                  <img src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21" alt="ocean view" />
                </div>

                <div className="hotel-info">
                  <p><strong>Stay:</strong> Water Villa / Beach Resort</p>
                  <p><strong>Meals:</strong> Breakfast & Dinner</p>
                  <p><strong>Room:</strong> Ocean View Villa</p>
                  <p><strong>Transport:</strong> Speedboat Transfers</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="booking-sidebar">
          <h3>₹59,999 / person</h3>
          <p>Limited paradise slots</p>
          <button className="btn-primary">Book Now</button>
        </div>

      </div>
    </section>
  );
}

export default Islands;