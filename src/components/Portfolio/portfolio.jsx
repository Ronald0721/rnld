import React from 'react';
import "./portfolio.css";
import IMG from "../assets/project1.webp";

function portfolio() {
  //Portfolio section - Modal
  const portfolioModels = document.querySelectorAll(".portfolio-model");
  const imgCards = document.querySelectorAll(".img-card");
  const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

  var portfolioModal = function (modalClick) {
    portfolioModels[modalClick].classList.add("active");
  }

  imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
  });

  portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModels.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active")
        });
    });
  });
  return (
    <section id="portfolio" className='portfolio section'>
      <div className="container flex-center">
        <h1 className="section-title-01">Portfolio</h1>
        <h2 className="section-title-02">Portfolio</h2>
        <div className="content">
          <div className="portfolio-list">
            <div className="img-card-container">
              <div className="img-card">
                <div className="overlay"></div>
                <div className="info">
                  <h3>Web Design</h3>
                  <span>Youtube</span>
                </div>
                <img src={IMG} alt="project-img" />
              </div>
                <div className="portfolio-model flex-center">
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn"></i>
                    <h3>Web Design</h3>
                    <img src={IMG} alt="model-img" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perferendis at ad. Deserunt, assumenda. Porro assumenda in quam reiciendis, quis nam impedit, amet, ipsam illo repellendus fugiat. Laudantium quod ea optio alias voluptate ullam vel nostrum ipsa libero officia, dolore ipsam animi! Voluptate sit mollitia molestias deleniti dolorem sequi blanditiis.</p>
                  </div>
                </div>
            </div>
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
              <a href="#contact" className="btn">Get In Touch <i className="fas fa-paper-plane"></i>
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =======Our Clients======= */}
      {/* <div className="our-client sub-section">
         <div className="container flex-center">
          <h1 className="section-title-01">My Clients</h1>
          <h2 className="section-title-02">My Clients</h2>
          <div className="content">
            
          </div>
         </div>
      </div> */}
    </section>
  )
}

export default portfolio