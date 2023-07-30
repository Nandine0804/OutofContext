import React from "react";
import img1 from "../assets/img/cyber.png"
import img2 from "../assets/img/data.png";
const SkillsAnimation = () => {
  return (
    <div>
      <div>
        <img
          src={img1}
          className="hero__rocket_1"
          alt="starts"
        />
        <img
          src={img2}
          className="hero__rocket_2"
          alt="starts"
        />
      </div>
    </div>
  );
};

export default SkillsAnimation;
