import React from "react";
import profile_img from '../assets/images/profile1.png';
import resume from '../assets/Mervin_Profile.pdf';
import LinkedIn from '../assets/images/linkedin.png';
import Github from '../assets/images/github.jpg';

function Home(){
    return (
        <section id="home">
        <div className="home">
            <img src={profile_img} className="profile-img"></img>
            <h1><span>I'm Mervin Renie, </span>Fullstack Developer</h1>
            <p>Ready to elevate my knowledge and experience to meet your business needs.</p>
            <div className="custom-btn">
                <button className="first-btn" 
                onClick={() => window.open(resume , '_blank')}>
                <span>My Resume</span>
                </button>

                <button className="second-btn" 
                onClick={() => window.location.href='#contact'}>
                <span>Contact me</span>
                </button>
            </div>

            <div className="social">
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
        </section>
    );
}
export default Home;