import "./projects.css";
import { useEffect, useState } from "react";
import github from "./assets/github.svg";
import link from "./assets/link.svg";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Project = ({ project, index }) => {
  const images = project.images;
  const title = project.title;
  const description = project.description;
  const live = project.live;
  const code = project.code;
  const stack = project.techstack
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSrc, setImageSrc] = useState("");
  console.log("index", project)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Define your logic here to choose images based on different screen widths
    if (windowWidth < 800) {
      setImageSrc(images[1]);
    } else if (windowWidth >= 800 && windowWidth < 1200) {
      setImageSrc(images[0]);
    } else {
      setImageSrc(images[0]);
    }
  }, [windowWidth]);
  return (
    <div className="projectCard" id={`${index % 2 === 0 ? "project1" : "project2"}`} style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="projectNumber rightNumber">0{index + 1}</div>
      <div className="projectContent leftProjectContent">
        <div className="projectSkillsContainer md:max-w-[60%] w-full">
          {stack?.map((item) => {
            return <img className="md:projectSkill w-[20px]"  src={item} key={item} alt="" />

          })}
          
        </div>
        <h2 className="md:projectHeading font-bold text-3xl">{title}</h2>
        <p className="md:projectSubHeading text-[10px] font-style: italic font-semibold">
          {description}
        </p>
        <div className="btnGroup">
          <button className="btn btnProject">Read More</button>
          <Link to={live}>
            {/* <i title="GitHubLink" className="fa-brands fa-github icon"></i> */}
            
          </Link>
          <Link to={code}>
            {/* <i title="Live Link" className="fa-solid fa-link icon"></i> */}
            <FaGithub/>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Project;
