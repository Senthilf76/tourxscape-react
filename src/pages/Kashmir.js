import React, { useState } from "react";
import "./kashmir.css";

const Kashmir = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="kashmir-section">

      {/* HERO */}
      <div className="kashmir-hero">
        <img
          src="/assets/kashmir1.webp"
          alt="Kashmir"
        />
        <div className="hero-overlay">
          <h1>❄️ Kashmir Bliss Escape</h1>
          <p>Srinagar • Gulmarg • Pahalgam | 3 Days / 4 Nights</p>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="kashmir-layout">

        {/* LEFT CONTENT */}
        <div className="kashmir-main">

          <div className="premium-card">
            <p className="kashmir-rating">⭐⭐⭐⭐⭐ 4.8 Premium Rating</p>

            <div className="kashmir-highlights">
              <span>🛶 Dal Lake Ride</span>
              <span>🚡 Gondola Cable Car</span>
              <span>🌄 Valley Views</span>
              <span>🏨 Luxury Stay</span>
            </div>

            <p>
              Discover Kashmir with a premium Tour-X experience. Enjoy serene
              lakes, snowy mountains, and unforgettable landscapes with luxury comfort.
            </p>

            <button
              className="btn-glass"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide Itinerary" : "View Detailed Itinerary"}
            </button>
          </div>

          {/* DETAILS SECTION */}
          {showDetails && (
            <div className="details-wrapper">

              <h2>📍 Travel Itinerary</h2>

              <div className="timeline">
                <div className="timeline-item">
                  <h3>Day 1 — Srinagar Arrival</h3>
                  <p>Houseboat stay, Dal Lake Shikara ride & Mughal Gardens.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 2 — Gulmarg Adventure</h3>
                  <p>Gondola cable car, snow activities & mountain views.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 3 — Pahalgam Valley</h3>
                  <p>Betaab Valley, Aru Valley & Lidder River exploration.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 4 — Departure</h3>
                  <p>Breakfast, shopping & airport drop.</p>
                </div>
              </div>

              {/* HOTEL WITH PHOTOS */}
              <h2>🏨 Premium Hotel Stay</h2>

              <div className="hotel-card">
                <div className="hotel-images">
                  <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="hotel" />
               
                  <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427" alt="houseboat" />
                </div>

                <div className="hotel-info">
                  <p><strong>Stay:</strong> Deluxe Houseboat / 4★ Hotel</p>
                  <p><strong>Meals:</strong> Breakfast & Dinner</p>
                  <p><strong>Room:</strong> Premium Valley View</p>
                  <p><strong>Transport:</strong> Private Cab Included</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR (STICKY BOOKING) */}
        <div className="booking-sidebar">
          <h3>₹18,999 / person</h3>
          <p>Limited slots available</p>
          <button className="btn-primary">Book Now</button>
        </div>

      </div>
    </section>
  );
};

export default Kashmir;