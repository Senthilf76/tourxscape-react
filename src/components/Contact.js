import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact.css";

const Contact = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify the captcha");
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <section id = "Contact" className="contact-section">
      <div className="overlay">
        <div className="contact-container">

          {/* LEFT INFO */}
          <div className="contact-info">
            <h2>CONTACT US</h2>
            <p className="credit">Images from Freepik</p>

            <div className="info-block">
              <span>📞</span>
              <div>
                <h4>Call Us</h4>
                <p>1 (+91) 8910054314</p>
              </div>
            </div>

            <div className="info-block">
              <span>📍</span>
              <div>
                <h4>Location</h4>
                <p> TourXscape Pvt LTD,
            Novel Tech Park,<br />
            Opposite to dream Mall,
            , Bangalore – 560042
            Karnataka, India.</p>
              </div>
            </div>

            <div className="info-block">
              <span>⏰</span>
              <div>
                <h4>Business Hours</h4>
                <p>Mon – Sat: 10 am – 8 pm</p>
                <p> Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              <input type="email" placeholder="Enter a valid email address" required />
              <input type="text" placeholder="Enter your Name" required />
            </div>

            <input type="text" placeholder="Enter your address" required />
            <textarea placeholder="Enter your message" rows="5" required />

            <ReCAPTCHA
              sitekey="6Lcw95csAAAAAIAaMW8mIb0ykY3hlDkOMQIzd917"
              onChange={(value) => setCaptchaValue(value)}
            />

            <button type="submit">SUBMIT</button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
