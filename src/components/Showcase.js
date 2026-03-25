import React, { useState } from "react";
import "./Showcase.css";

const ShowcaseSection = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section className="showcase-section">
      <div className="showcase-card">

        {/* Company Showcase */}
        <div className="block">
          <h1 className="title1">
            🌍 Find the Best Travel Packages at TourXscape
          </h1>

          <p>
            Discover unforgettable journeys with TourXscape, your trusted travel partner for perfectly planned adventures. 
            From breathtaking destinations to customized travel experiences, 
            we bring you the best travel packages designed for comfort, affordability, and memorable experiences.
            <br /><br />
            Whether you’re planning a relaxing getaway, an adventurous trip, a family vacation,
            or a romantic escape, TourXscape offers hand-picked packages that match your travel style and budget.
            With expert planning, trusted guidance, and 24/7 support, your journey is always smooth and worry-free. 
            <br /><br />
            Explore more. Travel better. Experience TourXscape.
          </p>
        </div>

        {/* What makes us best */}
        <div className="block">
          <h3 className="title">
            ✈️ What makes us one of the best travel companies in India?
          </h3>

          <p>
            We, at TourXscape, know that there is nothing better than the experiences and memories you are able to create when you travel to new places
            with our holiday packages.
          </p>

          <div className={`read-more-content ${readMore ? "open" : ""}`}>
          <p>
            With TourXscape World’s packages, you can head out and indulge in the exploration of an unknown destination
            or revisit your favourite spots in places that hold a lot of memories, meet new people from various walks of life,
            and mark another spot on the map that you have covered.
            <br /><br />
            Whether you want to head out for a solo trip or travel with like-minded people, we offer customised and bespoke services
            whenever you book holiday packages online with us. Our personal touch ensures every itinerary is special.
            <br /><br />
            All you have to do is book your holiday packages online and get ready for the vacation of a lifetime.
          </p>
           <h3 className="title">
            🌴Bringing you the best travel packages online
          </h3>

          <p>
            We bring you the best travel packages online, carefully designed to offer comfort, value, and
            unforgettable experiences. From popular destinations to hidden gems, our packages are crafted to suit every travel style and budget.
            Making a niche for ourselves as a top online travel company in India, we offer domestic and international tour packages.
          </p>
</div>

          {/* READ MORE – EXACT LIKE IMAGE */}
          <span
            className="read-more"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Read Less ▲" : "Read More ▼"}
          </span>
        </div>

        {/* Customer Focused */}
        
      </div>
    </section>
  );
};

export default ShowcaseSection;
