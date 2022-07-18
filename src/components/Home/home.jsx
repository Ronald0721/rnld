import React from 'react';
import "./home.css";
import Profile from "../assets/prof.png";

function home() {
  //Scroll to top button
//   const scrollTopBtn = document.querySelector(".scrollToTop-btn");
  
//   window.addEventListener("scroll", function(){
//   scrollTopBtn.classList.toggle("active", window.scrollY > 500);
// });


//   scrollTopBtn.addEventListener("click", () => {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// ;});

  //Website dark/light theme
//   const themeBtn = document.querySelector(".theme-btn");

//   themeBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark-theme");
//     themeBtn.classList.toggle("sun");

//     localStorage.setItem("saved-theme", getCurrentTheme());
//     localStorage.setItem("saved-icon", getCurrentIcon());
// });

//   const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
//   const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";
//   const savedTheme = localStorage.getItem("saved-theme");
//   const savedIcon = localStorage.getItem("saved-icon");

//   if(savedTheme) {document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
//   themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
//   }
  
// //Scroll reveal animations
// //Common reveal options to create reveal animations
// ScrollReveal({ 
//   reset: true ,
//   distance: "60px",
//   duration: 2500,
//   delay: 100
// });
// //Target elements, and specify options to create reveal animations
// ScrollReveal().reveal(".home .info h2", {delay: 500, origin: "left"});

  return (
    <section class="home flex-center" id="home">

    {/* =======Light/Dark theme button======= */}
    <div class="theme-btn flex-center">
      <i class="fas fa-moon"></i>
      <i class="fas fa-sun"></i>
    </div>

    <div>
        <i className="fas fa-arrow-up scrollToTop-btn flex-center"></i>
    </div>
    <div class="home-container">
      <div class="media-icons">
        <a href="http://linkedin.com/in/ronald-sandagon-abarquez/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
        <a href="http://github.com/Ronald0721/" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
        <a href="http:/facebook.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook-square"></i></a>
      </div>
        <div class="info">
        <h2>Hi, I am Ronald</h2>
        <h3>Front-end Developer</h3>
        <p>I create stunning websites for your business.</p>
        <a href="#contact" class="btn">Contact Me  <i class="fas fa-arrow-circle-right"></i></a>
        </div>
        <div className="home-img">
         <img src={Profile} alt="profile-img"/>
        </div>
      </div>
      <a href='#about' className="scroll-down">Scroll Down <i className="fas fa-arrow-down"></i></a>
    </section>
  )
}

export default home