import React from 'react'
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <h3 className="footer-copy">Copyrights 2023 by Nandine S S</h3>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/nandine-s-s-228032226">
            <img src={navIcon1} alt=""></img>
          </a>
          <a href="#">
            <img src={navIcon2} alt=""></img>
          </a>
          <a href="#">
            <img src={navIcon3} alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer