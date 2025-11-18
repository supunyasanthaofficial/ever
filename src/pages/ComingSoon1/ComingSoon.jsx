import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./ComingSoon.css";

const ComingSoon = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`Thank you! We'll notify you at ${email} when we launch.`);
    e.target.reset();
  };

  const handleMaintenanceClick = () => {
    window.location.href = "/maintenance";
  };

  return (
    <div className="coming-soon-page">
      <Header />

      <div className="content">
        <h1 className="coming-soon">Coming Soon</h1>
        <p className="description">
          We're working hard to launch our new website. Stay tuned!
        </p>

        <form className="email-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email to get notified."
              required
              className="email-input"
            />
            <button type="submit" className="notify-btn">
              Notify Me
            </button>
          </div>
        </form>

        <button className="maintenance-btn" onClick={handleMaintenanceClick}>
          Go to Maintenance Page
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ComingSoon;
