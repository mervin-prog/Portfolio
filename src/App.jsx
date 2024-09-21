import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects"
];

function App(){

    /* About section */

    const [showAll , setShowAll] = useState(false);

    const toggleShowMore = ()=>{
      setShowAll(!showAll);
    }

  /* Projects section */
  const [showText,setShowText] = useState(false);

  const toggleText = ()=>{
      setShowText(!showText);
  };

  const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const sections = sectionIds.map(id => document.getElementById(id));
          const scrollPosition = window.scrollY + window.innerHeight / 2;
          let activeIndex = 0;
            
            sections.forEach((section, index) => {
                if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    activeIndex = index;
                }
            });

            setActiveSection(activeIndex);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <>
    
    <Navbar />
    <Home />
    <About showAll={showAll} toggleShowMore={toggleShowMore} />
    <Skills/>
    <Projects showText={showText} toggleText={toggleText}/>
    <Footer/>

    <div className="road-lines">
        {sectionIds.map((id, index) => (
          <div
              key={index}
              className={`line ${index === activeSection ? 'active' : ''}`}
              onClick={() => document.getElementById(id).scrollIntoView({ behavior: 'smooth' })}
          >
          </div>
        ))}
      </div>
     
    </>
  );
}

export default App;