import React, { useState } from "react";
import "./Mussoorie.css";

function Mussoorie() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="mus-section">

      {/* HERO */}
      <div className="mus-hero">
        <img
          src="/assets/mussoorie.jpg"
          alt="Mussoorie"
        />
        <div className="hero-overlay">
          <h1>🌄 Mussoorie Hill Escape</h1>
          <p>Kempty Falls • Mall Road • Gun Hill | 3 Days / 4 Nights</p>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="mus-layout">

        {/* LEFT CONTENT */}
        <div className="mus-main">

          <div className="premium-card">
            <p className="mus-rating">⭐⭐⭐⭐⭐ 4.8 Premium Rating</p>

            <div className="mus-highlights">
              <span>🌊 Kempty Falls</span>
              <span>🚡 Gun Hill Ropeway</span>
              <span>🛍️ Mall Road</span>
              <span>🌄 Mountain Views</span>
            </div>

            <p>
              Escape to Mussoorie’s misty hills, waterfalls, and scenic views.
              Enjoy a peaceful retreat with a perfect blend of nature and comfort.
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
                  <h3>Day 1 — Arrival in Mussoorie</h3>
                  <p>Check-in & evening walk at Mall Road.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 2 — Sightseeing</h3>
                  <p>Kempty Falls, Gun Hill & scenic viewpoints.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 3 — Local Exploration</h3>
                  <p>Camel’s Back Road, Company Garden & shopping.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 4 — Departure</h3>
                  <p>Checkout & return journey.</p>
                </div>
              </div>

              {/* HOTEL */}
              <h2>🏨 Hill View Hotel Stay</h2>

              <div className="hotel-card">
                <div className="hotel-images">
                  <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" alt="mountains" />
                  <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="hotel" />
                  <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" alt="room" />
                </div>

                <div className="hotel-info">
                  <p><strong>Stay:</strong> Hill View Hotel / Resort</p>
                  <p><strong>Meals:</strong> Breakfast & Dinner</p>
                  <p><strong>Room:</strong> Valley View Room</p>
                  <p><strong>Transport:</strong> Private Cab</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="booking-sidebar">
          <h3>₹14,999 / person</h3>
          <p>Limited hill slots</p>
          <button className="btn-primary">Book Now</button>
        </div>

      </div>
    </section>
  );
}

export default Mussoorie;