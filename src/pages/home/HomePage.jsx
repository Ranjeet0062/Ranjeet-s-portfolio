import Navbar from "../../components/Navbar";
import Welcome from "../../components/homepage/Welcome";
import "../../components/Styles.css";
import developer from "../assets/developer.png";
import "../cursor.css";
import { motion } from "framer-motion";
import useCustomCursor from "../../components/useCustomCursor";

const HomePage = () => {
  const { cursorVariant, variants, textEnter, textLeave } = useCustomCursor();

  return (
    <div id="home" className="home-page bg-[#092635]">

      <div className=" py-5">
        <Navbar />
      </div>
      //s
      <div className="mt-6 flex w-[80%] mx-auto  justify-between flex-col items-center lg:flex-row">
        <div className="developer ml-10 pointer-events-none w-[50%]">
          <img
            className=" object-cover h-[40vh] md:h-[60vh] developer-img "
            src={developer}
            alt="dev"
          />
        </div>
        <div className="welcome w-[50%] flex md:flex-row justify-center items-center flex-col">
          <div className="flex flex-col gap-3 md:mb-10">
            <Welcome />
            <p className=" flex items-center justify-center text-slate-400">From concept to code, turning ideas into reality. Full-stack development isn't just about crafting code; it's about shaping experiences and solving problems, bridging creativity with functionality to build a better digital world</p>
            <button className="btn">
              Hire me
            </button>
          </div>
        </div>
      </div>
      <div className="headline  lg:text-5xl sm:text-4xl text-3xl text-wrap text-[#F8FAE5] font-poiret font-extrabold text-center py-10">
        <h1
          className="py-5 lg:py-10"
        >
          "Innovative <span className=" text-[#43766C]">MERN</span> Solutions
          for Your Digital Success Story"
        </h1>
        <h1
          className="py-5 lg:py-10"
        >
          "Innovate, Develop, Deliver"
        </h1>
      </div>
    </div>
  );
};
export default HomePage;
