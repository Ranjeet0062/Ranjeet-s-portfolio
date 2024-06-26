import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Project from "./Project";
import insta from "./assets/insta.png";
import insta_sm from "./assets/insta_sm.png";
import growmore from "./assets/stack/growmore.png";
import growmore_sm from "./assets/stack/growmore_sm.png";
import news from "./assets/weatherApp.png";
import news_sm from "./assets/weatherApp_sm.png";
import otw from "./assets/Sanke.png";
import otw_sm from "./assets/Sanke_sm.png";
import "../../fonts/Font.css";
import bash from "./assets/stack/Bash.svg"
import bootstrap from "./assets/stack/Bootstrap.svg"
import chartjs from "./assets/stack/ChartJs.svg"
import css from "./assets/stack/CSS.png"
import doker from "./assets/stack/Docker.svg"
import express from "./assets/stack/Express.png"
import git from "./assets/stack/Git.svg"
import github from "./assets/stack/Github.svg"
import html from "./assets/stack/HTML.png"
import javascript from "./assets/stack/Javascript.svg"
import materialui from "./assets/stack/MaterialUI.svg"
import next from "./assets/stack/Next.svg"
import react from "./assets/stack/React.png"
import redux from "./assets/stack/Redux.svg"
import tailwind from "./assets/stack/Tailwind.png"
import typescript from "./assets/stack/Typescript.svg"
import vercel from "./assets/stack/Vercel.svg"
import mongodb from "./assets/stack/MongoDB.svg"
import node from "./assets/stack/NodeJs.svg"

const projectsData = [
  {
    techstack: [html, css, bootstrap, tailwind, javascript, react, redux, node, express, mongodb, git, github, vercel],
    images: [insta, insta_sm],
    title: "Instagram Clone",
    code: "https://github.com/jaimin1503/rj-insta",
    live: "https://rj-insta.vercel.app",
    description:
      "In this project i collaborate with my friend and tried to make fully working scocial media web-application with all the features like posting new post and liking and commenting on post.",
  },
  {
    techstack: [html, css, bootstrap, tailwind, javascript, react, redux, node, express, mongodb, git, github, vercel],
    images: [growmore, growmore_sm],
    title: "Grow More",
    description:
      "GrowMore is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, ExpressJS and Razorpay payment gateway",
    code: "https://github.com/Ranjeet0062/GrowMore",
    live: "https://grow-more-the-leaning-paltform.vercel.app/"
  },
  {
    techstack: [html, css, bootstrap, tailwind, javascript, git, github, vercel],
    images: [news, news_sm],
    title: "Weather APP",
    description:
      "This is my first project with HTML, CSS and valina JAVASCRIPT, In this, I used the weather API for fetching current daily weather information using fatch API.",
    code: "https://github.com/Ranjeet0062/WeatherApp",
    live: "https://weather-app-psi-lac.vercel.app/",
  },
  {
    techstack: [html, css, bootstrap, tailwind, javascript, git, github, vercel],
    images: [otw, otw_sm],
    title: "Sanke Game",
    description:
      "In this project I used html, css, tailwind and javascript.In this sanke game i learn how to use and manipulate array. In this app you can play snake game and it is also show score and high-score using localstorage .",
    code: "https://github.com/Ranjeet0062/Snake_Game",
    live: "https://snake-game-khaki-kappa.vercel.app/",
  },
];

const ProjectsPage = () => {
  return (
    <div id="projects" className="md:p-16">
      {/* <div className="container   border-2 border-dashed rounded-2xl"> */}
        <div id="projects" className="projectSection border border-dashed border-blue-600   rounded-2xl">
          <h2 className="projectTitle">Projects</h2>
          <div className="projectContainer">
            {projectsData.map((project, index) => (
              <AnimateProject key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

const AnimateProject = ({ project, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const isLeft = index % 2 === 0;

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: isLeft ? "-100%" : "-100%" });
    }
  }, [controls, inView, isLeft]);

  const variants = {
    hidden: { opacity: 0, x: isLeft ? "-100%" : "-100%" },
    visible: { opacity: 1, x: 0 },
  };

  return (

    <Project project={project} index={index} />

  );
};

export default ProjectsPage;
