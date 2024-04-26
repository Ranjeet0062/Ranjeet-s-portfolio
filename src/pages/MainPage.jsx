import React from 'react'
import AboutMe from "./aboutMe/AboutMe";
import HomePage from "./home/HomePage";
import "./cursor.css";
import Skills from "./skills/Skills";
import ProjectsPage from "./projects/ProjectsPage";
import ContactMe from "./contact/ContactMe";
function mainPage() {
    return (
        <div className="" style={{ backgroundColor: 'rgb(20, 20, 32)' }}>
            <HomePage />
            <AboutMe />
            <Skills />
            <ProjectsPage />
            <ContactMe />
        </div>
    )
}

export default mainPage