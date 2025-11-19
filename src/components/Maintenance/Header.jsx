import React from "react";
import "../Maintenance/Header.css";
import logo from "../../assets/everefficient.png";

const Header = () => {
  return (
    <div className="logo-section">
      <div className="logo">
        <img src={logo} alt="EVER EFFICIENT" className="logo-image" />
      </div>
    </div>
  );
};
export default Header;
