import React from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/facebook.svg";
import navIcon5 from "../assets/img/youtube.svg";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_con">
          <div className="footer__left">
            <h4>SKILL BREWERY INTERNSHIP PROGRAMME</h4>
            <ul>
              <li>&gt; ABOUT</li>
              <li>&gt; INTERNSHIP PROGRAMME</li>
              <li>&gt; FEEDBACK</li>
            </ul>
          </div>
          <div className="footer__right">
            <span className="navbar-text">
              <div className="social-icon">
                <h3>Follow us on : </h3>
                <a href="https://www.linkedin.com/in/nandine-s-s-228032226">
                  <img src={navIcon1} alt=""></img>
                </a>
                
                <a href="https://discord.gg/QdDHgrDZ">
                  <img src={navIcon3} alt=""></img>
                </a>
                
                <a href="https://discord.gg/QdDHgrDZ">
                  <img src={navIcon4} alt=""></img>
                </a>
                <a href="https://discord.gg/QdDHgrDZ">
                  <img
                    src={navIcon5}
                    alt=""
                  ></img>
                </a>
                {/* <a href="">
                  <i class="fa-brands fa-youtube"></i>
                </a> */}
              </div>
            </span>
          </div>
        </div>
        <div className="footer__copy">
          © Codevita Live, All Right Reserved. Designed By Nandine S S
        </div>
      </div>
    </div>
  );
};

export default Footer;
