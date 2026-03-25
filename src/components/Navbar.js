import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to section (works from any page)
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      setMenuOpen(false);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // 🔎 Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    const value = search.toLowerCase();

    if (value.includes("home")) handleScroll("hero");
    else if (value.includes("trip")) handleScroll("packages");
    else if (value.includes("Benefits")) handleScroll("Benefits");
    else if (value.includes("process")) handleScroll("process");
    else if (value.includes("Contact")) handleScroll("Contact");

    setSearch("");
  };

  // Scroll listener
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["hero", "packages", "process", "Contact", "Benefits"];
      const pos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          if (pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, [location.pathname]);

  return (
    <header className={`glass-navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src="/assets/logo1.png" alt="Logo" />
        </div>

        {/* 🔎 Search Bar */}
        <form className="nav-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        {/* Mobile Toggle */}
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li
            className={activeSection === "hero" ? "active" : ""}
            onClick={() => handleScroll("hero")}
          >
            Home
          </li>

          <li
            className={activeSection === "packages" ? "active" : ""}
            onClick={() => handleScroll("packages")}
          >
            Trips
          </li>

          <li
            className={activeSection === "Benefits" ? "active" : ""}
            onClick={() => handleScroll("Benefits")}
          >
            Benefits
          </li>

          <li
            className={activeSection === "process" ? "active" : ""}
            onClick={() => handleScroll("process")}
          >
            Process
          </li>

          <li
            className={activeSection === "Contact" ? "active" : ""}
            onClick={() => handleScroll("Contact")}
          >
            Contact
          </li>

          {/* Booking page */}
          <li>
            <Link
              to="/book-ticket"
              className={`book ${
                location.pathname === "/book-ticket" ? "active" : ""
              }`}
            >
              Book Ticket
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;