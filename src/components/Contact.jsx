import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Content */}
        <div className="contact-left">
          <button className="contact-tag">Contact Us</button>
          <h1>Let’s Get In Touch.</h1>
          <p>
            Or just reach out manually to{" "}
            <a href="mailto:support@auramart.com">support@auramart.com</a>
          </p>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Enter your full name..."
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaPhone className="input-icon" />
            <input
              type="tel"
              name="phone"
              placeholder="+92 (000) 000-0000"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="textarea-group">
            <textarea
              name="message"
              placeholder="Enter your main text here..."
              value={formData.message}
              maxLength={300}
              onChange={handleChange}
              required
            />
            <p className="char-limit">{formData.message.length}/300</p>
          </div>

          <label className="checkbox">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />
            I hereby agree to our <a href="#">Privacy Policy</a> terms.
          </label>

          <button type="submit" className="submit-btn">
            Submit Form <FaPaperPlane className="btn-icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;