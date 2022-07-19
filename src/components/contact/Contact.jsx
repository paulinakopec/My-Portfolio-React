import React from 'react';
import './contact.css'
import Phone from '../../img/phone.png';
import Email from '../../img/mail.png';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import { ThemeContext } from '../../context';
import { useContext } from 'react';


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_ph67rkk', 
                'template_e3zzlhp', 
                formRef.current, 
                'gDPwyX6K1ZyQtPz0g')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    };
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Choose your way to contact me.</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <a href="tel:+48518602797"><img src={Phone} alt="phone icon" className="c-icon" /></a>
                        </div>
                        <div className="c-info-item">
                            <a href="mailto:paulinakopec32@gmail.com"><img src={Email} alt="e-mail icon" className="c-icon"/></a>
                        </div>
                        <div className="c-info-item">
                            <a href="https://github.com/paulinakopec" target="_blank" rel="noreferrer"><img src={Github} alt="github icon" className="c-icon"/></a>
                        </div>
                        <div className="c-info-item">
                            <a href="https://www.linkedin.com/in/paulina-kope%C4%87-b11365183/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="linkedin icon" className="c-icon"/></a>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Maybe you don't have much time and want to ask a quick question?</b> Please fill in the form and I will email you back as soon as possible.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "  Message sent! Thank you!"}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact