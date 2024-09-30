
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Experience from "./pages/Experience.js";
import Certifications from './pages/Certifications.js';
import Navbar from "./components/navbar.js";
import Footer from './components/Footer.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/experience" element={<Experience />} />;
          <Route path="/projects" element={<Projects />} />;
          <Route path="/certifications" element={<Certifications/>}/>;

        </Routes>
        <Footer/>
       </Router>
    </div>
  );
}

export default App;
