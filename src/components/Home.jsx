// Home.jsx

import React from "react";
import "../styles/Home.css";
//import Menu from "./Menu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Street's</h1>
        <p>
          Your ultimate destination for delicious food and delightful vibes!
        </p>
        <Link to="/menu">
          <button className="explore-menu-btn">Explore Menu</button>
        </Link>
      </div>
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <i className="fas fa-utensils"></i>
            <h3>Delicious Recipes</h3>
            <p>Experience the taste of freshly prepared, gourmet dishes.</p>
          </div>
          <div className="feature">
            <i className="fas fa-star"></i>
            <h3>Top Quality</h3>
            <p>We use only the finest ingredients for every dish we prepare.</p>
          </div>
          <div className="feature">
            <i className="fas fa-heart"></i>
            <h3>Customer Love</h3>
            <p>We ensure every customer leaves with a smile on their face.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
