import Project from "./Project";
import apple from "./assets/apple.png";
import apple_sm from "./assets/apple-sm.png";
import netflix from "./assets/netflix.png";
import netflix_sm from "./assets/netflix-sm.png";
const ProjectsPage = () => {
  const appleImages = [apple, apple_sm];
  const netflixImages = [netflix, netflix_sm];
  return (
    <div className="bg-[#092635] flex justify-center p-5 ">
      <div className="container border-2 border-dashed  rounded-2xl">
        <div className="heading flex justify-center items-center">
          <h1 className=" text-4xl md:text-5xl font-bold p-5 mb-10 text-center border-b-2 border-white max-w-xl text-white">
            My Projects
          </h1>
        </div>
        <div className="projects-container">
          <div className=" flex justify-center items-center lg:justify-start lg:p-10 py-5">
            <Project
              images={appleImages}
              title={"Apple Home-page"}
              live={"https://apple-clone-homepage-add03b.netlify.app"}
              code={"https://github.com/jaimin1503/Apple_clone"}
              description={
                "This i my first project where my journey to web-development started. In this I have made official Apple website HomePage using HTML and CSS."
              }
            />
          </div>
          <div className=" flex justify-center items-center lg:justify-end lg:p-10 py-5">
            <Project
              images={netflixImages}
              title={"Netflix Clone"}
              description={
                "This is my first project with backend in this I tried to make netflix clone. I have used HTML,CSS,NodeJs and Express."
              }
              code={"https://github.com/jaimin1503/Netflix_Final"}
              live={"https://netflix-clone-homepage-851a7b.netlify.app"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
