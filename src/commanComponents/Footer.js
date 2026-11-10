import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home Marble Mandir</a></li>
            <li><a href="#">Marble Slabs</a></li>
            <li><a href="#">Modern Marble Architecture &amp; Decor</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Accounts</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <i className="bi bi-geo-alt-fill" /> Makrana, Rajasthan
          </p>
          <p>
            📞 <a href="tel:+916367877532">+91 6367877532</a>,{" "}
            <a href="tel:+919950769265">9950769265</a>
          </p>
          <p>
            ✉️ <a href="mailto:whiteMarbleArt@gmail.com">whiteMarbleArt@gmail.com</a>
          </p>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/whitemarblearts"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://www.twitter.com/whitemarblearts"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.instagram.com/whitemarblearts"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.youtube.com/company/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <i className="bi bi-youtube" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} White Marble Art. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;