import React from "react";
import calendar from "../assets/img/calendar.png";
import education from "../assets/img/education.png";
import exp from "../assets/img/exp.png";
import { useState, useEffect } from "react";
import "./exp.css";
const Experience = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section className="exp-section" id="exp">
      <div className="exp-heading">
        <h1 className="about-me" id="journey">
          Journey Experience
        </h1>
        <span className="about-line"></span>
      </div>
      <div className="exp-container container">
        <div className="exp-tabs">
          <div
            className={toggle === 1 ? "exp-button exp_active" : "exp-button"}
            onClick={() => toggleTab(1)}
          >
            <h5>
              <img className="exp-icons" src={education} alt="education" />
              Education
            </h5>
          </div>
          <div
            className={toggle === 2 ? "exp-button exp_active" : "exp-button"}
            onClick={() => toggleTab(2)}
          >
            <h5>
              <img className="exp-icons" src={exp} alt="experience" />
              Experience
            </h5>
          </div>
        </div>
        <div className="exp-section">
          <div
            className={
              toggle === 1 ? "exp-content exp-content-active" : "exp-content"
            }
            onClick={() => toggleTab(1)}
          >
            <div className="exp-data">
              <div>
                <h3 className="exp-title">
                  B.Tech Computer Science and Business Systems
                </h3>
                <span className="exp-subtitle">
                  Rajalakshmi Engineering College , Thandalam
                </span>
                <div className="exp-calender">
                  <p>CGPA : 8.38</p>
                  <h3>
                    <img className="exp-icons" src={calendar} alt="calendar" />
                    2020 - Present
                  </h3>
                </div>
              </div>

              <div>
                <span className="exp-rounder"></span>
                <span className="exp-line"></span>
              </div>
            </div>
            <div className="exp-data">
              <div>
                <h3 className="exp-title">Higher Secondary Education</h3>
                <span className="exp-subtitle">
                  CBSE, Velammal Vidyalaya, Parthipattu
                </span>
                <div className="exp-calender">
                  <h3>
                    <img className="exp-icons" src={calendar} alt="calendar" />
                    2019 - 2020
                  </h3>
                </div>
              </div>
              <div>
                <span className="exp-rounder"></span>
                <span className="exp-line"></span>
              </div>
            </div>
            <div className="exp-data">
              <div>
                <h3 className="exp-title">Secondary Education</h3>
                <span className="exp-subtitle">
                  CBSE, Jaigopal Garodia Vivekanada Vidyalaya
                </span>
                <div className="exp-calender">
                  <h3>
                    <img className="exp-icons" src={calendar} alt="calendar" />
                    2005 - 2018
                  </h3>
                </div>
              </div>
              <div>
                <span className="exp-rounder"></span>
                <span className="exp-line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2 ? "exp-content exp-content-active" : "exp-content"
            }
            onClick={() => toggleTab(2)}
          >
            <div className="exp-data">
              <div>
                <h3 className="exp-title">Salesforce Developer</h3>
                <span className="exp-subtitle">
                  SmartInternz with Salesforce
                </span>
                <div className="exp-calender">
                  <h3>
                    <img className="exp-icons" src={calendar} alt="calendar" />
                    May 2023 - July 2023
                  </h3>
                </div>
              </div>
              <div>
                <span className="exp-rounder"></span>
                <span className="exp-line"></span>
              </div>
            </div>
            <div className="exp-data">
              <div>
                <h3 className="exp-title">Frontend-development</h3>
                <span className="exp-subtitle">Edunet Foundations</span>
                <div className="exp-calender">
                  <h3>
                    {" "}
                    <img className="exp-icons" src={calendar} alt="calendar" />
                    JAN 2023
                  </h3>
                </div>
              </div>
              <div>
                <span className="exp-rounder"></span>
                <span className="exp-line"></span>
              </div>
            </div>
            <div className="exp-data">
              <div>
                <h3 className="exp-title">UI/UX DESIGNER</h3>
                <span className="exp-subtitle">BRAINQUEST</span>
                <div className="exp-calender">
                  <h3>
                    <img className="exp-icons" src={calendar} alt="calendar" />
                    OCT 2022 - NOV 2022
                  </h3>
                </div>
              </div>
              <div>
                <span className="exp-rounder"></span>
                <span className="exp-line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
