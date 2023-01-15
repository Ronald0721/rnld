import React, {useState} from 'react';
import "./services.css";

function Services() {
//Services section - Modal
// const serviceModals = document.querySelectorAll(".service-modal");
// const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
// const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

// var modal = function (modalClick) {
//     serviceModals[modalClick].classList.add("active");
//   }

//   learnmoreBtns.forEach((learnmoreBtn, i) => {
//     learnmoreBtn.addEventListener("click", () => {
//         modal(i);
//     });
//   });

//   modalCloseBtns.forEach((modalCloseBtn) => {
//     modalCloseBtn.addEventListener("click", () => {
//         serviceModals.forEach((modalView) => {
//             modalView.classList.remove("active")
//         });
//     });
//   });

const [isActive, setIsActive] = useState(false);

const handleToggle = () => {
  setIsActive(!isActive);
};
  
  return (
    <section className="services section" id="services">
        <div className="container flex-center">
            <h1 className="section-title-01">Services</h1>
            <h2 className="section-title-02">Services</h2>
            <div className="content">
                <div className="services-description">
                    <h3>What I provide</h3>
                </div>
                <ul className="service-list">
                    <li className="service-container">
                        <div className="service-card">
                            <i className="fas fa-file-code"></i>
                            <h3>Web Develoment</h3>
                            <div className="learn-more-btn" onClick={handleToggle}>Learn More <i className="fas fa-long-arrow-alt-right"></i></div>
                        </div>
                        <div className={isActive ? "service-modal flex-center active" : "service-modal flex-center"}>
                            <div className="service-modal-body">
                                <i className="fas fa-times modal-close-btn" onClick={handleToggle}></i>
                                <h3>Web Development </h3>
                                <h4>What is Web Development?</h4>
                                <p>Web development services are used to design, build, support, and evolve all types of web-based software.</p>
                                <h4>What I provide</h4>
                                <ul>
                                    <li><i className="fas fa-check-circle"></i> Web application development</li>
                                    <li><i className="fas fa-check-circle"></i> Testing</li>
                                    <li><i className="fas fa-check-circle"></i> Maintenance</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Services