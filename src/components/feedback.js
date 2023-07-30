import React from "react";

const feedback = () => {
  return (
    <div className="feedback" id="feedback">
      <h4>
        - CHECK OUT OUR EX <b>INTERNS</b> HAVE TO SAY
      </h4>
      <div className="feedback__con">
        <div className="feedback__video">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/h4X8rKDSpjo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="video1"
          ></iframe>
        </div>
        <div className="feedback__video">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/J09qee7fYfk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="video1"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default feedback;
