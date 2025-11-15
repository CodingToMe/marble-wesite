import React from 'react'

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
            <a href="#">AI Design Center</a>
          </li>
          <li>
            <a href="#">Daya Marbles</a>
          </li>
          <li>
            <a href="#">CNC Marble Work</a>
          </li>
          <li>
            <a href="#">CNC Tool</a>
          </li>
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
          <li>
            <a href="#">Watch List</a>
          </li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h3>Contact Us</h3>
        <p>
          Paladha Road, Muskan Merige
          <br />
          Gardan Ke Samne, Makrana
        </p>
        <p>📞 +91 9024852867, 9950769265</p>
        <p>✉️ sarfarazal5@gmail.com</p>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
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

  )
}

export default Footer