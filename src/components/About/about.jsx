import React from "react";
import "./about.css";
import CV from "../Assets/Sandagon,Ronald.pdf";
import Img from "../Assets/2x2.jpg";

function about() {
  return (
    <section id="about" className="about section">
      <div className="container flex-center">
        <h1 className="section-title-01">About Me</h1>
        <h1 className="section-title-02">About Me</h1>
        <div className="content flex-center">
          <div className="about-img">
            <img src={Img} alt="img" />
          </div>
          <div className="about-info">
            <div className="description">
              <h3>I'm Ronald Sandagon</h3>
              <h4>
                A <span>Full Stack Developer</span>
              </h4>
              <p>
                My goal is to create web applications that not only look great
                but also perform well in terms of speed and accessibility and
                will provide an enjoyable experience for users.{" "}
              </p>
            </div>
            <ul className="professional-list">
              <li className="list-items">
                <h3>10+</h3>
                <span>
                  Months of
                  <br />
                  Experience
                </span>
              </li>
              <li className="list-items">
                <h3>0</h3>
                <span>
                  Unsatisfied
                  <br />
                  Customers
                </span>
              </li>
              <li className="list-items">
                <h3>6</h3>
                <span>
                  Success
                  <br />
                  Projects
                </span>
              </li>
            </ul>
            <a href={CV} download class="btn">
              Download CV<i className="fas fa-dowload"></i>
            </a>
          </div>
        </div>
      </div>

      {/* =======Get-in-touct======= */}
      <div className="get-in-touch sub-section">
        <div className="container">
          <div className="content flex-center">
            <div className="contact-card flex-center">
              <div className="title">
                <h4>Let's Talk</h4>
                <h3>About Your</h3>
                <h2>Next Project</h2>
              </div>
              <div className="contact-btn">
                <a href="#contact" className="btn">
                  Get In Touch <i className="fas fa-paper-plane"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
