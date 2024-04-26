// import AboutMe from "./pages/aboutMe/AboutMe";
// import HomePage from "./pages/home/HomePage";
// import "./pages/cursor.css";
// import Skills from "./pages/skills/Skills";
// import ProjectsPage from "./pages/projects/ProjectsPage";
// import ContactMe from "./pages/contact/ContactMe";
import { Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Resume from "./pages/resume/Resume"
function App() {
  return (
    <div className="" style={{ backgroundColor: 'rgb(20, 20, 32)' }}>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
