import React from 'react';
import "./skills.css";

function skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container flex-center">
        <h1 className="section-title-01">Skills</h1>
        <h2 className="section-title-02">Skills</h2>
        <div className="content">
          <div className="skills-description">
            <h3>Education & Skills</h3>
            <p>For more than 5 years our experts have been accomplishing enough with modern Web Development, new generation web and app programming language.</p>
          </div>
          <div className="skills-info education-all">
            <div className="education">
              <h4><label>Education</label></h4>
              <ul className="edu-list">
                <li className="item">
                  <span className="year">2015-2019</span>
                  <p><span>Bachelor's Degree</span> - Bicol University Polangui Campus</p>
                  <p><span>GWA - 1.80</span></p>
                </li>
                <li className="item">
                  <span className="year">2011-2015</span>
                  <p><span>Secondary Education</span> - Polangui General Comprehensive High School</p>
                </li>
                <li className="item">
                  <span className="year">2005-2011</span>
                  <p><span>Elementary Education</span> - Pinagdapugan Elementary School</p>
                </li>
              </ul>
            </div>
            <div className="education">
              <h4><label>Skills</label></h4>
              <ul className="bars">
                <li className="bar">
                  <div className="info">
                    <span>HTML</span>
                    <span>Advanced</span>
                  </div>
                  <div className="line html"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>CSS</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="line css"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>JavaScript</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="line javascript"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>Bootstrap</span>
                    <span>Basic</span>
                  </div>
                  <div className="line bootstrap"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>React</span>
                    <span>Basic</span>
                  </div>
                  <div className="line react"></div>
                </li>
              </ul>
            </div>
            <div className="education">
              <h4><label>Awards</label></h4>
              <ul className="edu-list">
                <li className="item">
                  <span className="year">2018-2019</span>
                  <p>Academic Awards</p>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="skills-descrition">
            <h3>Work & Experience</h3>
          </div>
          <div className="skills-info">
            <div className="experince-card">
              <div className="upper">
                <h3></h3>
                <h5></h5>
                <span></span>
              </div>
              <div className="hr">
                <h4><label></label></h4>
                <p></p>
              </div>
            </div>
            <div className="experince-card">
              <div className="upper">
                <h3></h3>
                <h5></h5>
                <span></span>
              </div>
              <div className="hr">
                <h4><label></label></h4>
                <p></p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default skills