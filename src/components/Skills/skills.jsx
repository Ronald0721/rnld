import React from 'react';
import "./skills.css";
import {ImHtmlFive} from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiReact } from "react-icons/si";

function skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container flex-center">
        <h1 className="section-title-01">Skills</h1>
        <h2 className="section-title-02">Skills</h2>
        <div className="content">
          <div className="skills-description">
          </div>
          <div className="skills-info education-all">
            <div className="education">
              <h4><label>Education</label></h4>
              <ul className="edu-list">
              <li className="item">
                  <span className="year">2023-2023</span>
                  <p><span>Web Development</span> - Zuitt Coding Bootcamp</p>
                  <p><span>Final Grade - 100</span></p>
                </li>
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
                    <span className="icon" ><ImHtmlFive/></span>
                    {/* <span>Advanced</span> */}
                  </div>
                  <div className="line html"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>CSS</span>
                    <span className="icon" ><IoLogoCss3/></span>
                    {/* <span>Intermediate</span> */}
                  </div>
                  <div className="line css"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>JavaScript</span>
                    <span className="icon" ><IoLogoJavascript/></span>
                    {/* <span>Intermediate</span> */}
                  </div>
                  <div className="line javascript"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>Bootstrap</span>
                    <span className="icon" ><FaBootstrap/></span>
                    {/* <span>Basic</span> */}
                  </div>
                  <div className="line bootstrap"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>Node.js</span>
                    <span className="icon" ><FaNodeJs/></span>
                    {/* <span>Basic</span> */}
                  </div>
                  <div className="line react"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>Express.js</span>
                    <span className="icon" ><SiExpress/></span>
                    {/* <span>Basic</span> */}
                  </div>
                  <div className="line react"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>MongoDB</span>
                    <span className="icon" ><SiMongodb/></span>
                    {/* <span>Basic</span> */}
                  </div>
                  <div className="line react"></div>
                </li>
                <li className="bar">
                  <div className="info">
                    <span>React.js</span>
                    <span className="icon" ><SiReact/></span>
                    {/* <span>Basic</span> */}
                  </div>
                  <div className="line react"></div>
                </li>
              </ul>
            </div>
            <div className="education">
              <h4><label>Awards</label></h4>
              <ul className="edu-list">
                <li className="item">
                  <span className="year">2023</span>
                  <p>Best in Capstone Project</p>
                </li>
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