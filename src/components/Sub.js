import React from "react";
const Sub = () => {
  return (
    <div className="sub" id="about">
      <div className="sub__content">
        <h4>Skill Brewery : Virtual Internship Program</h4>
        <div className="sub__con">
          <div>
            <p>
              Get ready to take your profile to the next level with thrilling
              hands-on projects! Upon finishing the program, you'll receive a
              prestigious internship certificate, invaluable work experience,
              and personalized mentoring. Choose from a variety of domains and
              supercharge your resume to stand out from the crowd!
            </p>
          </div>
          <div className="sub__list">
            <ul>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Data Science</li>
              <li>Computer Vision</li>
              <li>Product Management</li>
            </ul>
            <button type="submit" className="sub__button">
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdf17YI0sj5Eu1zHnbAKvOkJzO4hd4bWuU-AiAHZFwRou32Gw/viewform"
              >
                FILL THE VERIFICATION FORM
              </a>
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/software-development-2602883-2194271.png"
        alt="img"
        className="sub__img"
      />
    </div>
  );
};

export default Sub;
