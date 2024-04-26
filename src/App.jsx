import { Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Resume from "./pages/Resume.jsx"
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
