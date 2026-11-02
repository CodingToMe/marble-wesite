import React from "react";

const Footer = () => {
  return (
    <>
      {/* ===== FOOTER START ===== */}
      <footer className="footer mt-5">
        {/* <div className="footer-curve" /> */}
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home Marble Mandir</a>
              </li>
              <li>
                <a href="#">Marble Slabs</a>
              </li>
              <li>
                <a href="#">Modern Marble Architecture & Decor</a>
              </li>
              {/* <li>
                <a href="#">Collections</a>
              </li> */}
            </ul>
          </div>
          <div className="footer-section">
            <h3>Accounts</h3>
            <ul>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Login / Register</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              {/* <li>
                <a href="#">Watch List</a>
              </li> */}
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>
              <i class="bi bi-geo-alt-fill"></i> Makrana
            </p>
            <p>📞 +91 6367877532, 9950769265</p>
            <p>✉️ whiteMarbleArt@gmail.com</p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/whitemarblearts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f" />
              </a>

              <a
                href="https://www.twitter.com/whitemarblearts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>

              <a
                href="https://www.instagram.com/whitemarblearts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" />
              </a>

              <a
                href="https://www.youtube.com/company/yourpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <i className="fab fa-youtube.com" /> */}
                <i class="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright Rimel 2022. All rights reserved</p>
        </div>
      </footer>
      {/* ===== FOOTER END ===== */}
    </>
  );
};

export default Footer;
