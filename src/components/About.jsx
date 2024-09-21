import React from "react";
import up from "../assets/images/arrow-up.png";
import down from "../assets/images/arrow-down.png";

function About({showAll , toggleShowMore}){

    return (
        <section id="about">
            <div className="about">
                <p>Get to Know More</p>
                <h2 class="title">About Me</h2>

                <div class="about-para">
                <span className="initial-text">
                "As a <span class="highlight">B.Tech graduate in Information Technology</span> and a 
                passionate <span class="highlight">Fullstack Developer</span>, I am eager to apply my skills 
                in creating dynamic and responsive web applications. 
                With a strong foundation in both frontend and backend technologies, 
                I am driven by a love for coding and a keen eye for detail. 
                </span>
                {showAll && (
                    <span className="hidden-text">
                My academic background has equipped me with a solid understanding 
                of <span class="highlight">software development principles</span>, and I am enthusiastic about 
                leveraging my <span class="highlight">problem-solving skills</span> and technical knowledge to 
                contribute to innovative projects. I am actively seeking an 
                <span class="highlight"> Entry-level position or Internships</span> where I can grow my expertise, 
                collaborate with talented professionals, and make a meaningful 
                impact."
                </span>
                )}
                <div className="know-more-icon">
                <img 
                src={showAll ? up : down} 
                className="arrow-icon" 
                onClick={toggleShowMore}
                />  
                </div>
                </div>
            </div>
        </section>
    );
}

export default About;