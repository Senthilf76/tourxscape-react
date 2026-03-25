import React, { useState } from "react";
import "./Bali.css";

function Bali() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="bali-section">

      {/* HERO */}
      <div className="bali-hero">
        <img
          src="/assets/bali1.jpg"
          alt="Bali"
        />
        <div className="hero-overlay">
          <h1>🌴 Bali Luxury Escape</h1>
          <p>Ubud • Kuta • Nusa Penida | 5 Days / 6 Nights</p>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="bali-layout">

        {/* LEFT CONTENT */}
        <div className="bali-main">

          <div className="premium-card">
            <p className="bali-rating">⭐⭐⭐⭐⭐ 4.9 Premium Rating</p>

            <div className="bali-highlights">
              <span>🏝️ Nusa Penida Tour</span>
              <span>🌅 Tanah Lot Sunset</span>
              <span>🏞️ Ubud Rice Fields</span>
              <span>💆 Spa & Relaxation</span>
            </div>

            <p>
              Discover Bali’s exotic beaches, temples, and lush greenery with a
              premium Tour-X experience. Perfect blend of adventure, culture, and luxury.
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
                  <h3>Day 1 — Arrival in Bali</h3>
                  <p>Airport pickup & hotel check-in at Kuta.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 2 — Ubud Exploration</h3>
                  <p>Visit rice terraces, monkey forest & waterfalls.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 3 — Nusa Penida Island</h3>
                  <p>Kelingking Beach, Angel’s Billabong & Broken Beach.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 4 — Temple & Sunset Tour</h3>
                  <p>Tanah Lot temple & beach sunset experience.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 5 — Leisure & Spa</h3>
                  <p>Relaxation, shopping & Balinese spa session.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 6 — Departure</h3>
                  <p>Checkout & airport transfer.</p>
                </div>
              </div>

              {/* HOTEL */}
              <h2>🏨 Luxury Resort Stay</h2>

              <div className="hotel-card">
                <div className="hotel-images">
                  <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6" alt="villa" />
                  <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" alt="pool villa" />
                </div>

                <div className="hotel-info">
                  <p><strong>Stay:</strong> Private Pool Villa / 5★ Resort</p>
                  <p><strong>Meals:</strong> Breakfast Included</p>
                  <p><strong>Room:</strong> Luxury Pool Villa</p>
                  <p><strong>Transport:</strong> Private Transfers</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="booking-sidebar">
          <h3>₹45,999 / person</h3>
          <p>Limited luxury slots</p>
          <button className="btn-primary">Book Now</button>
        </div>

      </div>
    </section>
  );
}

export default Bali;