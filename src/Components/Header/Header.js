import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-section">
      <div className="header">
        <div className="logo">
          <h1>TShirt House</h1>
        </div>
        <div className="links">
          <Link to="/home" className="link">
            Home
          </Link>
          <Link to="/review" className="link">
            Review
          </Link>
          <Link to="/about" className="link">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
