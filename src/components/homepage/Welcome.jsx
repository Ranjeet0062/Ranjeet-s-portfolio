import "../Styles.css";
import TypeWriter from "../TypeWriter";
const words = [
  "Web-designer.",
  "Mern-stack Devloper.",
  "Front-end Developer.",
  "Back-end Developer.",
  "Full-stack Devloper",
];
const Welcome = () => {

  return (
    <div className=" flex flex-col gap-2 items-baseline justify-center text-white">
      <h1 className=" text-4xl"><span className="text-red-500">Hello!</span> Odedara Ranjeet</h1>
      <div className="flex  items-center text-3xl gap-3">
        <h1 className="">I am </h1>
        <TypeWriter words={words}/>
      </div>
    </div>
  );
};
export default Welcome;
