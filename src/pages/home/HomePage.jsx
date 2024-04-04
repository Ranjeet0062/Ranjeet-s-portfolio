import Navbar from "../../components/Navbar";
import Welcome from "../../components/homepage/Welcome";
import "../../components/Styles.css";
import developer from "../assets/developer.png";
import "../cursor.css";
import { motion } from "framer-motion";
import useCustomCursor from "../../components/useCustomCursor";
import { Link } from "react-scroll";
import github from "../aboutMe/assets/github.svg";
import linkedin from "../aboutMe/assets/linkedin.svg";
import email from "../aboutMe/assets/email.svg";
import insta from "../aboutMe/assets/Instagram.svg";

const HomePage = () => {
  const { cursorVariant, variants, textEnter, textLeave } = useCustomCursor();

  return (
    <div id="home" className="home-page ">
      <div className=" py-5">
        <Navbar />
      </div>
      <div className="social-links w-fit mt-5 rounded-2xl flex absolute right-0 ">
        <div className="flex relative  flex-col gap-3">
          {/* <Link to="https://www.linkedin.com/in/odedara-ranjeet-2a3549262/" target="_blank">

          </Link> */}
      
            <a href="https://www.linkedin.com/in/odedara-ranjeet-2a3549262/" target="_blank" rel="noopener noreferrer">
              <div className=" p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
                <img src={linkedin} alt="linkedin" />
              </div>
               </a>
         
          <Link to="https://github.com/Ranjeet0062" target="_blank">
            <div className=" p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
              <img src={github} alt="github" />
            </div>
          </Link>
          <Link to="https://www.instagram.com/ranjeet_62.0/" target="_blank">
            <div className=" p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
              <img src={insta} alt="insta" />
            </div>
          </Link>
          <Link to="mailto:odedararanjeet1361@gmail.com" target="_blank">
            <div className=" p-2 bg-white rounded-2xl mx-2 shadow-xl social-logos">
              <img src={email} alt="email" />
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-6 flex w-[80%] mx-auto  justify-between flex-col items-center lg:flex-row">

        <div className="developer ml-10 pointer-events-none w-[50%]">
          <img
            className=" object-cover h-[40vh] md:h-[60vh] developer-img "
            src={developer}
            alt="dev"
          />
        </div>
        <div className="welcome w-full md:w-[50%] flex md:flex-row justify-center items-center flex-col">
          <div className="flex flex-col gap-3 md:mb-10">
            <Welcome />
            <p className=" flex items-center justify-center text-slate-400">From concept to code, turning ideas into reality. Full-stack development isn't just about crafting code; it's about shaping experiences and solving problems, bridging creativity with functionality to build a better digital world</p>
            <Link to="contact" smooth={true} duration={500}>
              <button className="btn">
                Hire me
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="headline  lg:text-5xl sm:text-4xl text-2xl text-wrap text-[#F8FAE5]  font-bold text-center py-10">
        <h1
          className=""
        >
          "Innovative Digital   <span className=" text-red-500">MERN Solutions</span> for Your Digital Success Story"
        </h1>
        <h1
          className="py-5"
        >
          "Innovate, Develop, Deliver"
        </h1>

      </div>

    </div>
  );
};
export default HomePage;
