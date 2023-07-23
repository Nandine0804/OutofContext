import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Loader from "./components/Loader";
import About from "./components/About";
import Skills from "./components/SkillsAnimation";
import Skill from "./components/Skills";
import Project from "./components/Pro";
import ClipLoader from "react-spinners/ClipLoader";
import Linkedin from "./components/linkedin";
import Experience from "./components/Experience";
import Volunteer from "./components/Volunteer"
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App" id="light">
      {loading ? (
        <Loader color={"white"} size={"500px"} loading={loading} />
      ) : (
        <div className="Main">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Skill />
          <Project />
            <Experience />
            <Volunteer/>
            <Linkedin />
            
          <Contact />

          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
