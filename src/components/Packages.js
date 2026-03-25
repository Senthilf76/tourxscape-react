import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./packages.css";

const packages = [
  { id: 1, name: "Mussoorie Hiking", img: "/assets/mussoorie.jpg", route: "/Mussoorie" },
  { id: 2, name: "Dubai UAE", img: "/assets/dubai.jpg", route: "/Dubai" },
  { id: 3, name: "Islands", img: "/assets/islands.jpg",route: "/Islands" },
  { id: 4, name: "Andaman", img: "/assets/andaman.jpg", route: "/Andaman" },
  { id: 5, name: "Lakshadweep", img: "/assets/lakshadweep.jpg", route: "/Lakshadweep"  },
  { id: 6, name: "Bali", img: "/assets/bali.jpg", route: "/Bali" },
  { id: 7, name: "Paris", img: "/assets/paris.jpg",route: "/Paris" },

  // ✅ Added route property for navigation
  { id: 8, name: "Kashmir", img: "/assets/kashmir.webp", route: "/kashmir" },
];

function Packages() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  const navigate = useNavigate(); // ✅ navigation hook

  const totalSlides = packages.length;
  const visibleCards = 5;

  const slides = [...packages, ...packages.slice(0, visibleCards)];

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // ✅ handle itinerary click
  const handleViewItinerary = (pkg) => {
    if (pkg.route) {
      navigate(pkg.route);
    }
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  // Infinite loop reset
  useEffect(() => {
    if (index >= totalSlides) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 300);
    } else {
      setIsTransitioning(true);
    }
  }, [index, totalSlides]);

  return (
    <section id="packages" className="packages-section">
      <h1 className="packages-subtitle">Wonderful Place For You</h1>
      <h3 className="packages-title">Our packages</h3>

      <div className="carousel">
        <button className="arrow left" onClick={prevSlide}>❮</button>

        <div className="slider-container">
          <div
            className="slider-track"
            ref={sliderRef}
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
            }}
          >
            {slides.map((pkg, idx) => (
              <div className="package-card" key={idx}>
                <img src={pkg.img} alt={pkg.name} />
                <h2>{pkg.name}</h2>

                {/* ✅ Click opens itinerary page if route exists */}
                <p
                  className="view-link"
                  onClick={() => handleViewItinerary(pkg)}
                >
                  view itinerary
                </p>
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>❯</button>
      </div>
    </section>
  );
}

export default Packages;