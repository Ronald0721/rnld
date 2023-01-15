import React, {useState} from 'react';
import "./portfolio.css";
import P1a from "../Assets/TD.png";
import P1b from "../Assets/TD L.png";
import P2a from "../Assets/Keeper.png";
import P2b from "../Assets/Keeper N.png";
import P3a from "../Assets/Simon.png";
import P3b from "../Assets/Simon G.png";

function Portfolio() {
  const [modals, setModals] = useState({
    modal1: false,
    modal2: false,
    modal3: false
  });
  
  const handleModal = (modal) => {
      setModals({ ...modals, [modal]: !modals[modal] });
  }

  const handleCloseModals = () => {
    setModals({
      modal1: false,
      modal2: false,
      modal3: false
    });
  }

  return (
    <section id="portfolio" className='portfolio section'>
      <div className="container flex-center">
        <h1 className="section-title-01">Portfolio</h1>
        <h2 className="section-title-02">Portfolio</h2>
        <div className="content">
          <div className="portfolio-list">
            <div className="img-card-container">
              <div className="img-card" onClick={() => handleModal('modal1')}>
                <div className="overlay"></div>
                <div className="info">
                  <h3>To-Do List</h3>
                  <span>Manage Your Tasks and Priorities</span>
                </div>
                <img src={P1a} alt="project-img" />
              </div>
                <div className={`modal ${modals.modal1 ? 'show active portfolio-model flex-center' : 'hide portfolio-model flex-center'}`} >
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" onClick={handleCloseModals}></i>
                    <h3>To-Do List</h3>
                    <img src={P1b} alt="model-img" />
                    <p>Designed to help you stay organized and on top of your tasks. With a user-friendly interface you can easily create and manage your to-do lists. Whether you're a busy professional, a student, or just someone looking to stay on top of their to-dos, this app is the perfect solution for managing your tasks and staying productive.</p>
                    <br />
                    <h4><a  href="https://60ymvv.csb.app/" target="_blank" rel="noreferrer">Live Demo   </a><i className="fas fa-long-arrow-alt-right"></i></h4>
                  </div>
                </div>
            </div>
            <div className="img-card-container">
              <div className="img-card" onClick={() => handleModal('modal2')}>
                <div className="overlay"></div>
                <div className="info">
                  <h3>Keeper</h3>
                  <span>Organize Your Notes and Ideas</span>
                </div>
                <img src={P2a} alt="project-img" />
              </div>
                <div className={`modal ${modals.modal2 ? 'show active portfolio-model flex-center' : 'hide portfolio-model flex-center'}`} >
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" onClick={handleCloseModals}></i>
                    <h3>Keeper</h3>
                    <img src={P2b} alt="model-img" />
                    <p>Designed for organizing and managing your notes, ideas, and information. It's an essential tool for students, professionals, and anyone looking to keep their thoughts, information and ideas organized and accessible anytime, anywhere.</p>
                    <br />
                    <h4><a  href="https://z82ivs.csb.app/" target="_blank" rel="noreferrer">Live Demo   </a><i className="fas fa-long-arrow-alt-right"></i></h4>
                  </div>
                </div>
            </div>
            <div className="img-card-container">
              <div className="img-card" onClick={() => handleModal('modal3')}>
                <div className="overlay"></div>
                <div className="info">
                  <h3>Simon Game</h3>
                  <span>Challenge Your Memory and Reflexes</span>
                </div>
                <img src={P3a} alt="project-img" />
              </div>
                <div className={`modal ${modals.modal3 ? 'show active portfolio-model flex-center' : 'hide portfolio-model flex-center'}`} >
                  <div className="portfolio-model-body">
                    <i className="fas fa-times portfolio-close-btn" onClick={handleCloseModals}></i>
                    <h3>Simon Game</h3>
                    <img src={P3b} alt="model-img" />
                    <p>Simon game is a game of memory skill. It creates a series of tones and lights and requires a user to repeat the sequence. The game typically has four colored buttons, each producing a particular tone when it is pressed or lit. The user has to repeat the sequence correctly before the sequence becomes longer and more complex, and the user has to remember the correct sequence to repeat it correctly. </p>
                    <br />
                    <h4><a  href="https://ronald0721.github.io/simon/" target="_blank" rel="noreferrer">Live Demo   </a><i className="fas fa-long-arrow-alt-right"></i></h4>
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

export default Portfolio