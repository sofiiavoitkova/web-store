import React from "react";
import "../styles/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
          <div className="footer-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 TrekQuest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
