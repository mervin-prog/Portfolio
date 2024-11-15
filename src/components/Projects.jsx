import React from "react";
import projectList from "../projects";


function Projects({showText,toggleText}){
    return (
        <section id="projects">
            <div className="projects">
                <p>Browse my</p>
                <h2 className="title">Projects</h2>
                <div className="projects-list">
                    {projectList.slice(0, showText ? projectList.length : 6).map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            
                            <div className="project-btn">
                                <button className={`first-btn ${project.id == '7' || 
                                project.id == '8' ? "blur-btn":"" }`} 
                                onClick={() => window.open(project.liveDemo , '_blank')}
                                disabled ={project.id == '7' || project.id == '8'}
                                > 
                                <span>Live Demo</span>
                                </button>

                                <button className="second-btn" 
                                onClick={() => window.open(project.github , '_blank')}>
                                <span>Github</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div class="show-more-btn">
                    <button className="about-btn" onClick={toggleText}>
                    <span>{showText ? "Show Less" : "Show More"}</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;