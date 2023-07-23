import React from "react";
import Mine from "../assets/img/image.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-heading">
        <h1 className="about-me">About me</h1>
        <span className="about-line"></span>
      </div>
      <div className="about-section">
        <p>
          I have a passion for building stunning and useful websites and
          consider myself to be a skilled web developer and designer. I'm
          currently a pre-final student at Rajalakshmi Engineering College (REC),
          where I'm laying a solid foundation in computer science and business
          systems. I also had the chance to design the website for my
          department, which attracts lots of students due to the numerous
          animations I used.
        </p>
        <p>
          I like to create new things or start from scratch in my spare time,
          experiment with emerging design trends and techniques. I'm elated
          about the career opportunities that lie ahead of me and am looking
          forward to applying my knowledge and expertise to develop powerful,
          user-centered digital experiences. I can't wait to put my knowledge
          and experience to use in creating effective, user-centered digital
          experiences.
        </p>
      </div>
      <div className="about-connect">
        <button className="about-connect-button">Download CV</button>
      </div>
    </div>
  );
};

export default About;
