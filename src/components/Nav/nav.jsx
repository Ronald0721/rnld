import React from 'react';
import "./nav.css";

function nav() {
  //Navigation bar effects on scroll
  window.addEventListener("scroll", function(){
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
  })

    //Navigation menu items active on page scroll
  
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.pageYOffset;
      
      sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");
    
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
      } else{
        document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
      }
      });
    });
    
    //Responsive navigation menu toggle
    // const menuBtn = document.querySelector(".nav-menu-btn");
    // const closeBtn = document.querySelector(".nav-close-btn");
    // const navigation = document.querySelector(".navigation");
    // const navItems = document.querySelectorAll(".nav-item a");

    // menuBtn.addEventListener("click", () => {
    //   navigation.classList.add("active");
    // });
    
    // closeBtn.addEventListener("click", () => {
    //   navigation.classList.remove("active");
    // });

    // navItems.forEach((navItem) => {
    //   navItem.addEventListener("click", () => {
    //     navigation.classList.remove("active");
    //   });
    // });

  return (
    <nav>
      <div className="nav-bar">
        <a href="#home" className="logo">Rnld</a>
        <div className="navigation">
          <div className="nav-items">
            <div className="nav-close-btn"></div>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Sevices</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="nav-menu-btn"></div>
      </div>
    </nav>
  )
}

export default nav