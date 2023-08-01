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
              <li>
                <a href="#about">&gt; ABOUT</a>
              </li>
              <li>
                <a href="#terms">&gt; INTERNSHIP PROGRAMME</a>
              </li>
              <li>
                <a href="#feedback">&gt; FEEDBACK</a>
              </li>
            </ul>
          </div>
          <div className="footer__right">
            <span className="navbar-text">
              <div className="social-icon">
                <h3>Follow us on : </h3>
                <a href="https://www.linkedin.com/school/codevita-live/">
                  <img src={navIcon1} alt=""></img>
                </a>

                <a href="https://www.instagram.com/codevitalive/">
                  <img src={navIcon3} alt=""></img>
                </a>

                <a href="https://www.facebook.com/codevitalive">
                  <img src={navIcon4} alt=""></img>
                </a>
                <a href="https://www.youtube.com/channel/UCi2AzaYuWFF5doDCoT2iWvA/featured">
                  <img src={navIcon5} alt=""></img>
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
