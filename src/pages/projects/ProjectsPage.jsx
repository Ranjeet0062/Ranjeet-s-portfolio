import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Project from "./Project";
import insta from "./assets/insta.png";
import insta_sm from "./assets/insta_sm.png";
import growmore from "./assets/growmore.ong";
import growmore_sm from "./assets/growmore_sm.png";
import news from "./assets/news.png";
import news_sm from "./assets/news_sm.png";
import otw from "./assets/otw.png";
import otw_sm from "./assets/otw_sm.png";
import "../../fonts/Font.css";

const projectsData = [
  {
    techstack: [],
    images: [insta, insta_sm],
    title: "Instagram Clone",
    code: "https://github.com/jaimin1503/rj-insta",
    live: "https://rj-insta.vercel.app",
    description:
      "In this project me and my friend tried to make fully working Instagram clone with all the features like posting new post and liking and commenting on post.",
  },
  {
    techstack: [],
    images: [growmore, growmore_sm],
    title: "Netflix Clone",
    description:
      "This is my first project with backend in this I tried to make a netflix clone. I have used HTML, CSS, NodeJs, and Express.",
    code: "https://github.com/jaimin1503/Netflix_Final",
  },
  {
    techstack: [],
    images: [news, news_sm],
    title: "News App",
    description:
      "This is my first project with React.js, In this, I used the news API for fetching current daily news using Axios. And used react-classNamebased components.",
    code: "https://github.com/jaimin1503/newsapp-main",
    live: "https://hunt-news.netlify.app",
  },
  {
    techstack: [],
    images: [otw, otw_sm],
    title: "Open to work",
    description:
      "In this project I used react.js, Node.js and MongoDB. In this app you can create a different profile for different roles as a client or as a freelancer.",
    code: "https://github.com/jaimin1503/opentowork",
    live: "https://opentowork-jaimin.netlify.app",
  },
];

const ProjectsPage = () => {
  return (
    <div id="projects" className="bg-[#09265] flex justify-center p-5 ">
      <div className="container   border-2 border-dashed rounded-2xl">
        {/* <div className="heading flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-bold p-5 mb-10 text-center border-b-2 border-white max-w-xl text-white font-Montserrat">
            My <span className="text-purple-400">Projects</span>
          </h1>
        </div> */}
        <div id="projects" className="projectSection">
          <h2 className="projectTitle">Projects</h2>
          <div className="projectContainer">
            {projectsData.map((project, index) => (
              <AnimateProject key={index} project={project} index={index} />
            ))}
          </div>

        </div>
      </div>
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
