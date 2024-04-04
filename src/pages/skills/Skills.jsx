import Features from "./Features";
import faster from "./assets/faster.svg";
import responsive from "./assets/responsive.svg";
import bulb from "./assets/bulb.svg";
import rocket from "./assets/rocket.svg";
import css from "./assets/CSS.png";
import HTML from "./assets/HTML.png";
import Javascript from "./assets/Javascript.svg";
import MongoDB from "./assets/MongoDB.svg";
import Github from "./assets/Github.svg";
import Git from "./assets/Git.svg";
import Figma from "./assets/Figma.png";
import React from "./assets/React.png";
import Tailwind from "./assets/Tailwind.png";
import Bootstrap from "./assets/Bootstrap.svg";
import NodeJs from "./assets/NodeJs.svg";
import Docker from "./assets/Docker.svg";
import MyTechStack from "../../components/mytechstack/Mystackstack";
import TechStack from "./TechStack";
import "../../fonts/Font.css";

const Skills = () => {
  return (
    <div className=" ">
      <div className="heading flex justify-center items-center">
        <h1 className=" text-4xl md:text-5xl font-bold p-5 pt-10 text-center border-b-2 border-white max-w-xl text-white font-Montserrat">
          My <span className="text-red-500">Tech</span> Stack
        </h1>
      </div>
      <div className=" flex flex-wrap md:flex-nowrap justify-around mt-5  mx-auto">
        <MyTechStack/>
      </div>

      <div className="techStack flex max-w-[85vw] md:max-w-[65vw] lg:max-w-[55vw] flex-wrap items-center justify-center mx-auto">
        <TechStack image={HTML} />
        <TechStack image={css} />
        <TechStack image={Javascript} />
        <TechStack image={Bootstrap} />
        <TechStack image={Tailwind} />
        <TechStack image={React} />
        <TechStack image={NodeJs} />
        <TechStack image={MongoDB} />
        <TechStack image={Git} />
        <TechStack image={Github} />
        <TechStack image={Docker} />
        <TechStack image={Figma} />
      </div>
    </div>
  );
};
export default Skills;
