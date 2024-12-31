import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Banner Section */}
      <header className="about-banner">
        <h1>About Our Restaurant</h1>
        <p>Where flavors meet excellence.</p>
      </header>

      {/* Main Content */}
      <main className="about-content">
        {/* Our Story Section */}
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            At <strong>Street's</strong>, we started with a passion for creating
            culinary experiences that bring people together. Over the years, we
            have perfected the art of crafting flavors that delight the senses,
            serving you fresh and delicious food in a warm, welcoming
            environment.
          </p>
        </section>

        {/* Values Section */}
        <section className="about-section values-section">
          <h2>Our Core Values</h2>
          <div className="values">
            <div className="value-card">
              <h3>Fresh Ingredients</h3>
              <p>
                We source only the finest, freshest ingredients for every dish.
              </p>
            </div>
            <div className="value-card">
              <h3>Exceptional Service</h3>
              <p>
                Our team is dedicated to ensuring your dining experience is
                extraordinary.
              </p>
            </div>
            <div className="value-card">
              <h3>Community Connection</h3>
              <p>
                We believe in giving back and supporting our local community.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="about-image-section">
          <img
            src="https://via.placeholder.com/800x500"
            alt="Restaurant view"
            className="about-image"
          />
          <p>Experience the joy of dining with us.</p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="about-footer">
        <h2>Visit Us Today</h2>
        <p>
          We look forward to serving you with delicious food and unforgettable
          moments. Let’s make memories, one bite at a time!
        </p>
      </footer>
    </div>
  );
};

export default About;
