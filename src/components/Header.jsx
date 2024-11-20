import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png"; // Import the logo image

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={logo} alt="Leasy Logo" className="logo-img" /> {/* Add logo image */}
      Leasy
    </div>
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/upload">Upload</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
