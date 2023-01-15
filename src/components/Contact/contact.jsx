import React, {useRef} from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i2c339m', 'template_o1jxqa7', form.current, '2XSJYPYkRPnPG6LyH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id="contact" className='contact section'>
      <div className="container flex-center">
        <h1 className="section-title-01">Contact Me</h1>
        <h2 className="section-title-02">Contact Me</h2>
        <div className="content">
          <div className="contact-left">
            <h2>Let's discuss your projects</h2>
            <ul className='contact-list'>
              <li>
                <h3 className="item-title"><i className="fas fa-phone"></i>Viber</h3>
                <span><a href="viber://contact?number=%2B639057053176" target="_blank" rel="noreferrer">+639057053176</a></span>
              </li>
              <li>
                <h3 className="item-title"><i className="fas fa-envelope"></i>Email</h3>
                <span><a href="mailto:sandagonronald@gmail.com" target="_blank" rel="noreferrer">sandagonronald@gmail</a></span>
              </li>
              <li>
                <h3 className="item-title"><i className="fa-brands fa-facebook-messenger"></i>Messenger</h3>
                <span><a href='http://m.me/sandagon.ronald.abarquez' target="_blank" rel="noreferrer">Ronald Abarquez Sandagon</a></span>
              </li>
            </ul>
          </div>
          <div className="contact-right">
            <p>I'm always open to discussing product <br /><span>design work or partnerships.</span></p>
            <form action="" className="contact-form"  ref={form} onSubmit={sendEmail}>
              <div className="first-row">
                <input type="text" name="name" placeholder="Your full Name" required/>
              </div>
              <div className="second-row">
                <input type="email" name="email" placeholder="Your Email" required/>
                <input type="text" name="subject" placeholder="Your Subject" required/>
              </div>
              <div className="third-row">
                <textarea name="message" id="" rows="7" placeholder='Message'></textarea>
              </div>
              <button className="btn" type='submit'>Send Message  <i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;