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
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Body />
      <Terms />
    
      <Skills/>
      <Banner />

      <Feedback />
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;
