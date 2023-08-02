import React from "react";
import './banner.css';
const banner = () => {
  return (
    <div className="banner__pic">
      <h1>Ready to get started?</h1>
      <hr/>
      <div className="banner__con">
        <p>
          Fill this form below after filling the verification form above. You
          shall get the verification code after filling the Google Form. New
          Cohorts Start On 15th Of Every Month.
        </p>
      </div>
      <div className="cir">
        <a href="#about">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4196/4196777.png"
            alt="img"
          />
        </a>
      </div>
    </div>
  );
};

export default banner;
