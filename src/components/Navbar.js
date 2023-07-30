import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terms from "./Terms";

import { useState, useEffect } from "react";

function BasicExample() {
  const [activeState, setState] = useState("home");
  const [scrolled, seScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
  });
  const [theme, setDarktheme] = useState("light");
  const light = () => {
    if (theme === "light") {
      setDarktheme("dark");
    } else {
      setDarktheme("light");
    }
  };
  // useEffect(() => {
  //   document.body.className = "App";
  // }, [theme]);
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand className="brand"><a href="" className="logo">SKILL BREWERY</a></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#about"
              className={
                activeState === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="#terms"
              className={
                activeState === "terms" ? "active navbar-link" : "navbar-link"
              }
            >
              INTERNSHIP PROGRAMME
            </Nav.Link>
            
            <Nav.Link
              href="#feedback"
              className={
                activeState === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              FEEDBACK
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            {/* <div className="social-icon">
              <a href="https://www.linkedin.com/in/nandine-s-s-228032226">
                <img src={navIcon1} alt=""></img>
              </a>
              <a href="https://github.com/nandine0804">
                <img src={navIcon2} alt="" className="social-git"></img>
              </a>
              <a href="https://discord.gg/QdDHgrDZ">
                <img src={navIcon3} alt=""></img>
              </a>
            </div> */}
            <a href="#contact">
              <button
                className="button"
                onClick={() => {
                  console.log("connnect");
                }}
              >
                <span>CONTACT </span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
