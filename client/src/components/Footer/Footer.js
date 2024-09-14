import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#about" className="footer-link">About</a>
        <a href="#terms" className="footer-link">Terms of Service</a>
        <a href="#privacy" className="footer-link">Privacy Policy</a>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} LeetCoach. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
