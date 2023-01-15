import React, {useState} from 'react';
import "./nav.css";

function Nav() {
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

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div className="nav-bar">
        <a href="#home" className="logo">Rnld</a>
        <div className={isActive ? "navigation active" : "navigation"}>
          <div className="nav-items" onClick={handleToggle}>
            <div className="nav-close-btn" onClick={handleToggle}></div>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className='nav-menu-btn' onClick={handleToggle}></div>
      </div>
    </nav>
  )
}

export default Nav