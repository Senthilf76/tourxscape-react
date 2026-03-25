import React, { useEffect, useState } from "react";
import "./compliment.css";

function Compliment() {
  const services = [
    {
      id: 1,
      title: "Affordable Packages",
      desc: "Get the best travel deals with affordable packages that suit every budget.",
      icon: "fa-solid fa-tags",
    },
    {
      id: 2,
      title: "24/7 Customer Support",
      desc: "Our team is available all day to assist you and ensure a smooth experience.",
      icon: "fa-solid fa-headset",
    },
    {
      id: 3,
      title: "Trusted Guides",
      desc: "We provide professional and friendly guides to make your trip unforgettable.",
      icon: "fa-solid fa-map-location-dot",
    },
    {
      id: 4,
      title: "Customizable Trips",
      desc: "Design your trip your way! Choose destinations, stays, and activities you love.",
      icon: "fa-solid fa-pen-nib",
    },
    {
      id: 5,
      title: "Easy Booking Process",
      desc: "Book your dream destination within minutes using our simple online system.",
      icon: "fa-solid fa-calendar-check",
    },
    {
      id: 6,
      title: "Global Coverage",
      desc: "Explore worldwide destinations with our extensive travel network.",
      icon: "fa-solid fa-earth-asia",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 3) % services.length);
    }, 3000); // Slide every 3s
    return () => clearInterval(interval);
  }, [services.length]);

  const visibleCards = [
    services[startIndex],
    services[(startIndex + 1) % services.length],
    services[(startIndex + 2) % services.length],
  ];

  return (
    <section id="services" className="services-section">
      <h1 className="services-title">Why Choose Us</h1>

      <div className="slider-container">
        <div className="slider-track">
          {visibleCards.map((service) => (
            <div key={service.id} className="service-card fade-slide">
              <div className="icon">
                <i className={service.icon}></i>
              </div>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Compliment;
