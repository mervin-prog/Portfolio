import React from "react";
import LinkedIn from '../assets/images/linkedin.png';
import Github from '../assets/images/github.jpg';
import { FaEnvelope} from 'react-icons/fa';

function Footer2() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Get in Touch</h2>
          <p>
          Have any questions or want to work together? Feel free to reach out!
          </p>
          <div className="footer-social">
                <img 
                src={LinkedIn} 
                className="social-icon" 
                onClick={() => window.open('https://www.linkedin.com/in/mervinrenie', '_blank')}
                >
                </img>

                <img 
                src={Github} 
                class="social-icon"
                onClick={() => window.open('https://github.com/mervin-prog','_blank')}>
                </img>
            </div>
        </div>

        <div className="footer-right">
          <div className="footer-card">
            <FaEnvelope className="icon"/>
            <p>mervinrenie@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
