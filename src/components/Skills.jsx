import React from "react";
import skills from "../skills";

function Skills(){
    return (
        <section id="skills">
             <div className="skills">
                <p>Explore my</p>
                <h2 className="title">Skills</h2>

                <div className="skills-list">
                    {skills.map((skill, index) => (
                        <div key={index}>
                                <img
                                src={skill.icon}
                                className="skill-icon"
                                />
                                <h3>{skill.title}</h3>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
}

export default Skills;