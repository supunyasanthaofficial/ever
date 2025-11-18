import React from "react";
import mainImage from "../../assets/main.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Maintenance.css";

const Maintenance = () => {
  return (
    <div className="Maintenance-page">
      <Header />

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
            Our site is currently undergoing scheduled maintenance. We'll be
            back shortly. Thank for your patience!
          </p>
          <p className="support-text">
            Need urgent support? Email use at:{" "}
            <a href="mailto:info@everefficient.lk">info@everefficient.lk</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Maintenance;
