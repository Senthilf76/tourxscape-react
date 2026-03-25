import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/compliment";
import Welcome from "./components/Welcome";
import Packages from "./components/Packages";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DestinationsGrid from "./components/DestinationsGrid";
import Benefits from "./components/Benefits";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Kashmir from "./pages/Kashmir";
import Andaman from "./pages/Andaman";
import TicketBooking from "./pages/TicketBooking";
import Bali from "./pages/Bali";
import Paris from "./pages/Paris";
import Dubai from "./pages/Dubai";
import Islands from "./pages/Islands";
import Lakshadweep from "./pages/Lakshadweep";
import "./styles/website.css";
import Mussoorie from "./pages/Mussoorie";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Welcome />
              <Packages />
              <DestinationsGrid />
              <About />
              <Benefits />
              <Services />
              <Process />
              <Showcase />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Ticket Booking Page */}
        <Route path="/book-ticket" element={<TicketBooking />} />
        <Route path="/kashmir" element={<Kashmir />} />
        <Route path="/Andaman" element={<Andaman />} />
        <Route path="/Bali" element={<Bali />} />
        <Route path="/Paris" element={<Paris />} />
        <Route path="/Dubai" element={<Dubai />} />
        <Route path="/Islands" element={<Islands />} />
        <Route path="/Lakshadweep" element={<Lakshadweep />} />
        <Route path="/Mussoorie" element={<Mussoorie />} />

      </Routes>
    </>
  );
}

export default App;
