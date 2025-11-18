import React from "react";
import "./Header.css";
import logo from "/everefficient.png";

const Header = () => {
  return (
    <div className="logo-section">
      <div className="logo">
        <img src={logo} alt="EVER EFFICIENT" className="logo-image" />
        {/* <div className="logo-text">
          <span className="logo-title">EVER EFFICIENT</span>
          <span className="logo-subtitle">BUSINESS MANAGEMENT</span>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
