import AboutMe from "./pages/aboutMe/AboutMe";
import HomePage from "./pages/home/HomePage";
// import "./pages/cursor.js";
import "./pages/cursor.css";
import Skills from "./pages/skills/Skills";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ContactMe from "./pages/contact/ContactMe";
function App() {
  return (
    <div className="" style={{ backgroundColor: 'rgb(20, 20, 32)' }}>
      <HomePage />
      <AboutMe />
      <Skills />
      <ProjectsPage />
      <ContactMe />
    </div>
  );
}

export default App;
