import React from "react";
import "../Maintenance/MainContent.css";
import mainImage from "../../assets/main.png";

const MainContent = () => {
  return (
    <div className="icon-section">
      <div className="icon">
        <img src={mainImage} alt="Main" className="icon-image" />
      </div>
      <div className="content">
        <h1 className="maintenance-title">
          We're Under
          <br />
          Maintenance
        </h1>
        <p className="description">
          Our site is currently undergoing scheduled maintenance.We'll be back
          shortly. Thank you for your patience!
        </p>
        <p className="support-text">
          Need urgent support? Email us at:{" "}
          <a href="mailto:info@everefficient.lk">info@everefficient.lk</a>
        </p>
      </div>
    </div>
  );
};
export default MainContent;
