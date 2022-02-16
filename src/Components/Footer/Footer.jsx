/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left footer-width">
        <ul className="footer-container">
          <h4>Support</h4>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>
      <div className="footer-middle footer-width">
        <ul className="footer-container">
          <h4>Fusion Shoes</h4>
          <li>
            <a href="#">About Shop</a>
          </li>
          <li>
            <a href="#">Join US</a>
          </li>
          <li>
            <a href="#">Subscribe Now!</a>
          </li>
        </ul>
      </div>
      <div className="footer-right footer-width">
        <ul className="footer-container">
          <h4>Hiring Now!</h4>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Newsroom</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
