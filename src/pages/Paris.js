import React, { useState } from "react";
import "./Paris.css";

function Paris() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <section className="paris-section">

      {/* HERO */}
      <div className="paris-hero">
        <img
          src="/assets/paris.jpg"
          alt="Paris"
        />
        <div className="hero-overlay">
          <h1>🗼 Paris Romantic Escape</h1>
          <p>Eiffel Tower • Louvre • Seine Cruise | 4 Days / 5 Nights</p>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="paris-layout">

        {/* LEFT CONTENT */}
        <div className="paris-main">

          <div className="premium-card">
            <p className="paris-rating">⭐⭐⭐⭐⭐ 4.9 Premium Rating</p>

            <div className="paris-highlights">
              <span>🗼 Eiffel Tower Visit</span>
              <span>🛥️ Seine River Cruise</span>
              <span>🎨 Louvre Museum</span>
              <span>🍷 French Cuisine</span>
            </div>

            <p>
              Experience the charm of Paris with romantic streets, iconic landmarks,
              and luxury stays. Perfect for couples and cultural explorers.
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
                  <h3>Day 1 — Arrival in Paris</h3>
                  <p>Airport pickup & hotel check-in. Evening city walk.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 2 — Eiffel Tower & Cruise</h3>
                  <p>Visit Eiffel Tower & enjoy Seine River cruise.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 3 — Louvre & City Tour</h3>
                  <p>Louvre Museum, Notre Dame & Champs-Élysées.</p>
                </div>

                <div className="timeline-item">
                  <h3>Day 4 — Leisure & Shopping</h3>
                  <p>Explore cafes, shopping streets & local markets.</p>
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
                  <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" alt="paris hotel" />
                  <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="room" />
                  <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa" alt="restaurant" />
                </div>

                <div className="hotel-info">
                  <p><strong>Stay:</strong> 4★ / 5★ Luxury Hotel</p>
                  <p><strong>Meals:</strong> Breakfast Included</p>
                  <p><strong>Room:</strong> City View Deluxe</p>
                  <p><strong>Transport:</strong> Private Transfers</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="booking-sidebar">
          <h3>₹79,999 / person</h3>
          <p>Limited premium slots</p>
          <button className="btn-primary">Book Now</button>
        </div>

      </div>
    </section>
  );
}

export default Paris;