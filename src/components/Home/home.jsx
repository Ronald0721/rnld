import React, {useState} from 'react';
import "./home.css";
import Profile from "../Assets/prof.png";

function Home() {
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

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    document.body.classList.toggle("dark-theme");
    setIsActive(!isActive);
  };

  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <section className="home flex-center" id="home">
    
    <div className="theme-btn flex-center" onClick={handleToggle}>
        <i className={isActive ? "fas fa-sun" : "fas fa-moon"}></i>
        </div>
    <div>
        <i className= "fas fa-arrow-up scrollToTop-btn flex-center" onClick={handleClick}></i>
    </div>
    <div class="home-container">
      <div class="media-icons">
        <a href="http://linkedin.com/in/ronald-sandagon-abarquez/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
        <a href="http://github.com/Ronald0721/" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.facebook.com/sandagon.ronald.abarquez" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook-square"></i></a>
      </div>
        <div class="info">
        <h2>Hi, I am Ronald</h2>
        <h3>Front-End Developer</h3>
        <p>I bring the design and functionality of the site to life. </p>
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

export default Home