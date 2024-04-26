import "../../components/Styles.css";
import insta from "./assets/Instagram.svg";
import ranjeet from "./assets/20230901_133233.png";
import { Link } from "react-scroll";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import email from "./assets/email.svg";
import { motion } from "framer-motion";
import useCustomCursor from "../../components/useCustomCursor";
import TypeWriter from "../../components/TypeWriter";
import { NavLink } from "react-router-dom";

const AboutMe = () => {
  const { cursorVariant, variants, textEnter, textLeave } = useCustomCursor();
  const words = [
    "Web-design.",
    "Mern-stack Devlopment.",
    "Front-end Development.",
    "Back-end Development.",
    "Full-stack Devlopment",
  ];
  return (
    <div id="about" className=" bg-[#17461]">
      <div className=" flex flex-col">
        <div className="heading flex justify-center items-center mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center border-b-2 border-white max-w-xl text-[#dce1e0] font-Montserrat">
            About <span className="text-red-500">Me!</span>
          </h1>
        </div>
        <div className="about-me gap-9  mt-4 flex-col-reverse flex items-center lg:flex-row lg:justify-center">
          <div className="info-text flex flex-col items-start">
            <h2 className=" sm:text-5xl text-3xl  py-5 text-[#dce1e0] ">
              Hello! 👋, People
            </h2>
            <div className=" sm:text-4xl text-2xl  py-5 text-[#dce1e0] font-bold flex overflow-hidden">
              <h1 className=" pr-2 md:pr-4">I do</h1>{" "}
              <div className="">
                <TypeWriter words={words} />
              </div>
            </div>
            <div className=" lg:text-xl text-xl  max-w-xl flex flex-col items-baseline  text-slate-400">
              <p>
                Hey there! I'm Ranjeet, a web
                developer who loves creating awesome and good-looking apps. I'm
                all about making sure they not only work great but also look
                fantastic.
              </p>

              <p>
                Right now, I'm on the lookout for a
                part-time gig as a frontend and backend engineer. I bring a mix of
                creativity and tech skills to the table, making me a perfect fit
                for any team.
              </p>

              <p>
                If you want to team up or know more
                about what I do, let's set up a meeting! I'm all about turning
                cool ideas into real, working stuff. <span className="text-red-500 font-semibold">Let's make things happen!</span>
              </p>
            </div>
            <div className=" flex flex-col mt-10">
              <div className=" links flex font-Montserrat my-5">
                <Link to="contact" smooth={true} duration={500}>
                  <button className="btn">
                    Schedule a meet
                  </button>
                </Link>
                <NavLink to="/resume" smooth={true} duration={500}>
                  <button
                    className=" py-2 px-5 text-lg font-bold text-[#9EC8B9] resume-lin"
                  >
                    Resume&#8594;
                  </button>
                </NavLink>
              </div>
              <div className="social-links w-fit mt-5 p-3 rounded-2xl">
                <div className="flex relative ">
                  <a href="https://www.linkedin.com/in/odedara-ranjeet-2a3549262/" target="_blank" rel="noopener noreferrer">
                    <div className=" p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
                      <img src={linkedin} alt="linkedin"  loading='lazy'/>
                    </div>
                  </a>
                  <a href="https://github.com/Ranjeet0062" target="_blank" rel="noopener noreferrer">
                    <div className=" p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
                      <img src={github} alt="github"  loading='lazy'/>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/ranjeet_62.0/" target="_blank" rel="noopener noreferrer">
                    <div className=" p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
                      <img src={insta} alt="insta" loading='lazy'/>
                    </div>
                  </a>
                  <a href="mailto:odedararanjeet1361@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className=" p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
                      <img src={email} alt="email" loading='lazy'/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="wraper md:mt-0 mt-9">
            <div className="cantainer">
              <img src={ranjeet} alt="" loading='lazy'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
