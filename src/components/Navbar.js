import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/discord.png";
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
        <Navbar.Brand className="brand" href="#home">
          NANDINE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeState === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeState === "about" ? "active navbar-link" : "navbar-link"
              }
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeState === "skills" ? "active navbar-link" : "navbar-link"
              }
            >
              SKILLS
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeState === "projects"
                  ? "active navbar-link"
                  : "navbar-link"
              }
            >
              PROJECTS
            </Nav.Link>
            <Nav.Link
              href="#exp"
              className={
                activeState === "exp" ? "active navbar-link" : "navbar-link"
              }
            >
              EXPERIENCE
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nandine-s-s-228032226">
                <img src={navIcon1} alt=""></img>
              </a>
              <a href="https://github.com/nandine0804">
                <img src={navIcon2} alt="" className="social-git"></img>
              </a>
              <a href="https://discord.gg/QdDHgrDZ">
                <img src={navIcon3} alt=""></img>
              </a>
            </div>
            <a href="#contact">
              <button
                className="button"
                onClick={() => {
                  console.log("connnect");
                }}
              >
                <span>Let's Talk</span>
              </button>
            </a>
            {/* <DarkMode /> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
