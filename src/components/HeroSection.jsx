import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="hero">
    <h1>Welcome to Leasy</h1>
    <p>Your one-stop solution for renting and listing products with ease.</p>
    <div className="hero-buttons">
      <Link to="/explore" className="button">Explore Products</Link>
      <Link to="/upload" className="button button-secondary">List Your Product</Link>
    </div>
  </section>
);

export default HeroSection;
