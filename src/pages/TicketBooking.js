import React, { useState } from "react";
import "./TicketBooking.css";

const PRICE_MAP = {
  flight: 5000,
  train: 2000,
  ship: 3500,
};

const BookNow = () => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    passengers: 1,
    days: 1,
    transport: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateTotal = () => {
    if (!form.transport) return 0;
    return form.passengers *  PRICE_MAP[form.transport];
  };

  const validateStep1 = () => {
    if (!form.name || !form.email || !form.mobile || !form.transport) {
      alert("Please fill all required fields");
      return false;
    }
    return true;
  };

  // 🔥 BACKEND API CALL
  const saveBookingToBackend = async () => {
    const bookingData = {
      name: form.name,
      email: form.email,
      mobile: form.mobile,
      transport: form.transport,
      passengers: Number(form.passengers),
      days: Number(form.days),
      totalAmount: calculateTotal(),
    };

    console.log("SENDING DATA:", bookingData);

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();
      console.log("BACKEND RESPONSE:", data);
    } catch (error) {
      console.error("FAILED TO SAVE BOOKING:", error);
    }
  };

  return (
    <div className="container">
      <div className="book-container">
        <h2 className="page-title">
          Book Now --- Safe & Secure --- Trusted --- Client Satisfaction Focused Services
        </h2>

        {/* STEPPER */}
        <div className="stepper">
          <div className={`step ${step >= 1 ? "active" : ""}`}>
            <span>1</span>
            <p>Details</p>
          </div>

          <div className={`line ${step >= 2 ? "active" : ""}`}></div>

          <div className={`step ${step >= 2 ? "active" : ""}`}>
            <span>2</span>
            <p>Payment</p>
          </div>

          <div className={`line ${step === 3 ? "active" : ""}`}></div>

          <div className={`step ${step === 3 ? "active" : ""}`}>
            <span>3</span>
            <p>Success</p>
          </div>
        </div>

        <section className="form-section">
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h3>Personal Details</h3>
              <div className="grid">
                <input name="name" placeholder="Full Name" onChange={handleChange} />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} />
                <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />
              </div>

              <h3>Registration</h3>
              <div className="grid">
                <input
                  name="passengers"
                  type="number"
                  min="1"
                  placeholder="Passengers"
                  onChange={handleChange}
                />
                <input
                  name="days"
                  type="number"
                  min="1"
                  placeholder="Days"
                  onChange={handleChange}
                />
              </div>

              <h3>Transport Mode</h3>
              <div className="transport">
                <label>
                  <input type="radio" name="transport" value="flight" onChange={handleChange} />
                  ✈ Flight
                </label>
                <label>
                  <input type="radio" name="transport" value="train" onChange={handleChange} />
                  🚆 Train
                </label>
                <label>
                  <input type="radio" name="transport" value="ship" onChange={handleChange} />
                  🚢 Ship
                </label>
              </div>

              <button
                className="btn primary"
                onClick={() => validateStep1() && setStep(2)}
              >
                Next →
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <h3>Booking Summary</h3>
              <p><b>Name:</b> {form.name}</p>
              <p><b>Transport:</b> {form.transport}</p>
              <p><b>Passengers:</b> {form.passengers}</p>
              <p><b>Days:</b> {form.days}</p>
              <h2>Total Amount: ₹{calculateTotal()}</h2>

              <h3>Payment</h3>
              <div className="grid">
                <input placeholder="Name on Card" />
                <input placeholder="Card Number" />
                <input type="month" />
                <input placeholder="CVV" />
              </div>

              <div className="btn-group">
                <button className="btn secondary" onClick={() => setStep(1)}>
                  ← Back
                </button>

                {/* ✅ FIXED PAY BUTTON */}
                <button
                  className="btn primary"
                  onClick={async () => {
                    await saveBookingToBackend();
                    setStep(3);
                  }}
                >
                  Pay ₹{calculateTotal()}
                </button>
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="success">
              <h2>🎉 Booking Confirmed!</h2>
              <p>Thank you <b>{form.name}</b></p>
              <p>Your <b>{form.transport}</b> journey has been successfully booked.</p>
              <p><b>Total Paid:</b> ₹{calculateTotal()}</p>

              <button className="btn primary" onClick={() => setStep(1)}>
                Book Another Trip
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default BookNow;
