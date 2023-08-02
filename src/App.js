import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Sub";
import Hero from "./components/Hero";
import Banner from "./components/banner";
//import Choose from "./components/choose";
import Contact from "./components/Contact";
import Feedback from "./components/feedback";
import Terms from "./components/Terms";
import Skills from "./components/SkillsAnimation";
//import Perks from './components/Perks';
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
   const [loading, setLoading] = useState(false);
   useEffect(() => {
     setLoading(true);
     setTimeout(() => {
       setLoading(false);
     }, 5000);
   }, []);
  return (
    <div className="App">
       {loading ? (
      <Loader color={"white"} size={"500px"} loading={loading} />
      ) : (
          <div className="App">
      <Navbar />
      <Hero />
      <Body />
      <Terms />
      <Skills />
      <Banner />
      <Feedback />
      <Contact />
            <Footer />
            </div>
      )}
    </div>
  );
}

export default App;
