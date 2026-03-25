import React, { useState } from "react";
import "./Dubai.css";

function Dubai() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="dubai-section">

      {/* HERO */}
      <div className="dubai-hero">
        <img
          src="/assets/dubai.jpg"
          alt="Dubai"
        />
        <div className="hero-overlay">
          <h1>🏜️ Dubai Luxury Escape</h1>
          <p>Burj Khalifa • Desert Safari • Marina | 4 Days / 5 Nights</p>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="dubai-layout">

        {/* LEFT CONTENT */}
        <div className="dubai-main">

          <div className="premium-card">
            <p className="dubai-rating">⭐⭐⭐⭐⭐ 4.9 Premium Rating</p>

            <div className="dubai-highlights">
              <span>🏙️ Burj Khalifa</span>
              <span>🐪 Desert Safari</span>
              <span>🛥️ Marina Cruise</span>
              <span>🛍️ Dubai Mall</span>
            </div>

            <p>
              Explore Dubai’s futuristic skyline, luxury lifestyle, and thrilling
              desert adventures with our premium Tour-X package.
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
                  <h3>Day 1 — Arrival in Dubai</h3>
                  <p>Airport pickup & hotel check-in. Evening city tour.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 2 — Burj Khalifa & Mall</h3>
                  <p>Visit Burj Khalifa & explore Dubai Mall.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 3 — Desert Safari</h3>
                  <p>Dune bashing, camel ride & BBQ dinner with shows.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 4 — Marina Cruise</h3>
                  <p>Dinner cruise at Dubai Marina & leisure time.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 5 — Departure</h3>
                  <p>Checkout & airport transfer.</p>
                </div>
              </div>

              {/* HOTEL */}
              <h2>🏨 Luxury Hotel Stay</h2>

              <div className="hotel-card">
                <div className="hotel-images">
                  <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c" alt="dubai hotel" />
                  <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa" alt="room" />
                  <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" alt="pool" />
                </div>

                <div className="hotel-info">
                  <p><strong>Stay:</strong> 4★ / 5★ Luxury Hotel</p>
                  <p><strong>Meals:</strong> Breakfast Included</p>
                  <p><strong>Room:</strong> Skyline View Deluxe</p>
                  <p><strong>Transport:</strong> Private Transfers</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="booking-sidebar">
          <h3>₹39,999 / person</h3>
          <p>Limited luxury slots</p>
          <button className="btn-primary">Book Now</button>
        </div>

      </div>
    </section>
  );
}

export default Dubai;