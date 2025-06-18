import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-logo navbar-logo">Bzog</h2>
      <ul className="footer-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/jamal__majdy?igsh=bDVxZXd3NjBrZHQ4" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
      </div>
      <p className="footer-copy">© 2025 Bzog All rights reserved</p>
    </footer>
  );
};

export default Footer;
