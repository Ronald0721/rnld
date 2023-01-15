import React from 'react';
import "./about.css";
import CV from "../Assets/SANDAGON, RONALD (CV).pdf";
import Img from "../Assets/2x2.jpg"

function about() {
  return (
    <section id="about" className="about section">
      <div className="container flex-center">
        <h1 className='section-title-01'>About Me</h1>
        <h1 className='section-title-02'>About Me</h1>
        <div className="content flex-center">
          <div className="about-img">
            <img src={Img} alt='img'/>
          </div>
          <div className="about-info">
            <div className="description">
              <h3>I'm Ronald Sandagon</h3>
              <h4>A <span>Front-End Web Developer</span></h4>
              <p>My goal is to create websites that not only look great but also perform well in terms of speed and accessibility and will provide an enjoyable experience for visitors. </p>
            </div>
            <ul className="professional-list">
              <li className="list-items">
                <h3>5+</h3>
                <span>Months of<br/>Experience</span>
              </li>
              <li className="list-items">
                <h3>0</h3>
                <span>Sad<br/>Customers</span>
              </li>
              <li className="list-items">
                <h3>3</h3>
                <span>Success<br/>Projects</span>
              </li>
            </ul>
            <a href={CV}  download class="btn">Download CV<i className="fas fa-dowload"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about