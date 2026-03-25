import React, { useState, useRef, useEffect } from "react";
import "./Benefits.css";

// Replace these paths with your real assets in /public or /src
const characters = [
  { id: 1, name: "Food&Compliments", subtitle: "Both Veg&Non-Veg ", img: "/assets/food.jpg" ,},
  { id: 2, name: "Hotel Stay", subtitle: "3star - 5star & location based different types of stay", img: "/assets/stay.avif" },
  { id: 3, name: "Cab Service", subtitle: "Pickup & Drop from Any Location", img: "/assets/cab.jpg" },
  { id: 4, name: "Sight-Seeings", subtitle: "Details on the respective packages", img: "/assets/sight.jpg" },
  { id: 5, name: "Customize Option", subtitle: " For Physically challenged person ", img: "/assets/custom.png" },
];

export default function StackedCardsSlider({ items = characters }) {
  const [index, setIndex] = useState(0);
  const length = items.length;
  const animRef = useRef(false);

  // helper to wrap index
  const clamp = (n) => ((n % length) + length) % length;

  function prev() {
    if (animRef.current) return;
    animRef.current = true;
    setIndex((i) => clamp(i - 1));
  }
  function next() {
    if (animRef.current) return;
    animRef.current = true;
    setIndex((i) => clamp(i + 1));
  }

  // tiny debounce so rapid clicks don't break animations
  useEffect(() => {
    const t = setTimeout(() => (animRef.current = false), 650);
    return () => clearTimeout(t);
  }, [index]);

  // Computes visual stack positions for each card relative to `index` (active)
  const getOffset = (cardIndex) => {
    const d = (cardIndex - index + length) % length;

    if (d === 0) return { pos: 0, depth: 100, visible: true };
    if (d === 1) return { pos: 1, depth: 90, visible: true };
    if (d === 2) return { pos: 2, depth: 80, visible: true };
    if (d === 3) return { pos: 3, depth: 70, visible: true };

    const dNeg = (index - cardIndex + length) % length;
    if (dNeg === 1) return { pos: -1, depth: 60, visible: true };

    return { pos: 4, depth: 20, visible: false };
  };

  return (
    <section id="Benefits" className="scs-section">   {/* ⭐ Added ID here */}
    <h1 className="heading"> We Offer Seamless Service For Every Packages </h1>
      <div className="scs-root">
        <div className="scs-card-area">
          <div className="scs-card-frame">
            {items.map((it, i) => {
              const { pos, depth, visible } = getOffset(i);
              const style = {
                transform: `translateY(${pos * 18}px) scale(${1 - Math.abs(pos) * 0.06}) rotate(${pos * -2}deg)`,
                zIndex: depth,
                opacity: visible ? 1 : 0,
              };
              const isActive = pos === 0;

              return (
                <div
                  key={it.id}
                  className={`scs-card ${isActive ? "scs-card--active" : "scs-card--back"}`}
                  style={style}
                  aria-hidden={!isActive}
                >
                  <img src={it.img} alt={it.name} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="scs-details-area">
          <div className="scs-controls">
            <button className="scs-btn" onClick={prev} aria-label="previous">▲</button>
            <button className="scs-btn" onClick={next} aria-label="next">▼</button>
          </div>
          <h1 className="title">  Packages Includes</h1>
          <div className="scs-name">
            <h2>{items[index].name}</h2>
            <div className="scs-sub">{items[index].subtitle}</div>
            <div className="scs-underline" />
            <div className="scs-lines">
              <div /><div /><div /><div /><div />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
