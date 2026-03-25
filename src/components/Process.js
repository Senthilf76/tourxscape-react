import React from "react";
import "./Process.css";

function Process() {
  return (
    <section id="process" className="process-section">
      <h1 className="process-heading">____ Easy Process ____</h1>
      <h2 className="process-subtitle">Make a Dream Moment with your lovedonce'section</h2>

      <div className="process-list">
        {/* 1️⃣ Choose Destination */}
        <div className="process-card">
          <i className="fa-solid fa-globe process-icon"></i>
          <h2>Choose a Destination</h2>
          <img
            src="/assets/tourism2.png"
            alt="Choose Destination"
            className="process-image"
          />
         <p>
  Explore breathtaking destinations around the world and pick the one that
  matches your dream getaway. From serene beaches to mountain adventures — we’ve
  got it all.
</p>

        </div>

        {/* 2️⃣ Pay Online */}
        <div className="process-card">
          <i className="fa-solid fa-sack-dollar process-icon"></i>
          <h2>Pay Online</h2>
          <img
            src="/assets/payment1.jpg"
            alt="Pay Online"
            className="process-image"
          />
          <p>
  Enjoy secure and hassle-free online payments with multiple options. Book your
  trip instantly and get ready for an unforgettable experience — all in a few
  clicks.
</p>

        </div>

        {/* 3️⃣ Fly Today */}
        <div className="process-card">
          <i className="fa-solid fa-plane-departure process-icon"></i>
          <h2>Fly Today</h2>
          <img
            src="/assets/fly.jpg"
            alt="Fly Today"
            className="process-image"
          />
          <p>
  Pack your bags and get ready to fly! Our team ensures smooth travel
  arrangements so you can focus on making memories, not managing plans.
</p>

        </div>
      </div>
    </section>
  );
}

export default Process;
