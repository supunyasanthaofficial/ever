import React from "react";
import "../Maintenance/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a
            href="https//facebook.com"
            target="_blank"
            rel="noopenner noreferrer"
            className="social-link"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.tiktok.com/@ever_efficient?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopenner noreferrer"
            className="social-link"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a
            href="https//instagram.com"
            target="_blank"
            rel="noopenner noreferrer"
            className="social-link"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https//youtube.com"
            target="_blank"
            rel="noopenner noreferrer"
            className="social-link"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p className="copyright">
          © 2025 All Rights Reserved. EVER EFFICIENT Business Management (Pvt)
          Ltd.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
