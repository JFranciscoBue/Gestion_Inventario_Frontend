import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img
          src="https://cdn-icons-png.flaticon.com/512/57/57589.png"
          alt="icon"
        />
        <p>@ 2025. Copyright reserved. Minimarket Inventory</p>
      </div>
      <div className="footer__contact">
        <a href="#">Contact Us</a>
      </div>
      <div className="footer__socials">
        <ul className="footer__socials_list">
          <li>
            <i class="bx bxl-instagram"></i>
            <p>Instagram</p>
          </li>
          <li>
            <i class="bx bxl-facebook-circle"></i>
            <p>Facebook</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
