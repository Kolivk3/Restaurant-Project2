import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      {/* Contact Header */}
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Drop us a message or visit us in person.
        </p>
      </header>

      {/* Contact Form */}
      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <h2>Visit Us</h2>
        <p>123 Foodie Lane, Flavor Town, FT 45678</p>
        <h3>Opening Hours:</h3>
        <p>Mon-Sun: 10:00 AM - 11:00 PM</p>
        <h3>Contact Number:</h3>
        <p>+1 234 567 8900</p>
      </section>

      {/* Social Media Links */}
      <footer className="contact-footer">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="#" className="icon facebook" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="icon twitter" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="icon instagram" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
