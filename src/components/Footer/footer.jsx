import React from "react";
import "./footer.css";

function footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <div className="about group">
          <h2>
            <a href="#home">Rnld</a>
          </h2>
          <p>Full Stack Developer</p>
          <a href="#about">About Me</a>
        </div>
        <div className="hr"></div>
        <div className="info group">
          <h3>More</h3>
          <ul>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hr"></div>
        <div className="follow group">
          <h3>Follow</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/sandagon.ronald.abarquez"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/as._.ronald/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="http:/twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright group">
        <p>&copy; Ronald Sandagon {year}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default footer;
