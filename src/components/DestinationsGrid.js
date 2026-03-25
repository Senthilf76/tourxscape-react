import React from "react";
import "./DestinationsGrid.css";

const destinations = [
  {
    id: 1,
    name: "KASHMIR",
    days: "4 Nights / 5 Days",
    img: "/assets/kashmir1.webp",
    gridWidth: "span 2",
    gridHeight: "span 2",
  },
  {
    id: 2,
    name: "KERALA",
    days: "4 Nights / 5 Days",
    img: "/assets/kerala.jpg",
    gridWidth: "span 1",
    gridHeight: "span 1",
  },
  {
    id: 3,
    name: "AGRA",
    days: "2 Nights / 3 Days",
    img: "/assets/agra.jpg",
    gridWidth: "span 1",
    gridHeight: "span 1.5",
  },
  {
    id: 4,
    name: "MALDIVES",
    days: "3 Nights / 4 Days",
    img: "/assets/maldives.jpeg",
    gridWidth: "span 2",
    gridHeight: "span 3",
  },
  {
    id: 5,
    name: "THAILAND",
    days: "4 Nights / 5 Days",
    img: "/assets/thailand.jpg",
    gridWidth: "span 2",
    gridHeight: "span 1",
  },
  {
    id: 6,
    name: "MAURITIUS",
    days: "4 Nights / 5 Days",
    img: "/assets/mar.jpg",
    gridWidth: "span 2",
    gridHeight: "span 2",
  },
  {
    id: 6,
    name: "PARIS",
    days: "4 Nights / 5 Days",
    img: "/assets/paris.jpg",
    gridWidth: "span 2",
    gridHeight: "span 1",
  },
];

function DestinationsGrid() {
  return (
    <section className="destination-grid-section">
      <div className="destination-grid">
        {destinations.map((item) => (
          <div
            className="destination-card"
            key={item.id}
            style={{
              gridColumn: item.gridWidth,
              gridRow: item.gridHeight,
            }}
          >
            <img src={item.img} alt={item.name} />
            <div className="destination-overlay">
              <h2>{item.name}</h2>
              <p>{item.days}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DestinationsGrid;
