import React from "react";
import './banner.css';
const banner = () => {
  return (
    <div className="banner__pic">
      <h1>Ready to get started?</h1>
      <hr />
      <div className="banner__con">
        <p>New Cohorts Start On 15th Of Every Month.Stay tuned!!</p>
        <div className="cir">
          <a href="#about">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4196/4196777.png"
              alt="img"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default banner;
