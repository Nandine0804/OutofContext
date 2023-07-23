import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../assets/img/image.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

import Img1 from "../assets/img/img2.png";
import TrackVisibility from "react-on-screen";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Web developer",
    "Frontend developer",
    "Web designer",
    "UI/UX designer",
    "DevOps Aspirant",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hey There! I'm Nandine , I'm a `}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web developer","Frontend developer", "Web designer", "UI/UX designer",DevOps Aspirant ]'
                    >
                      <span className="wrap">
                        <br />
                        {text}
                      </span>
                    </span>
                  </h1>
                  <p>
                    I have a well-rounded skill set with experience in web
                    development, web design, and UI/UX design that enables me to
                    approach projects from various angles. I'm also proficient
                    in languages like HTML, CSS, Bootstrap, TailwindCSS,
                    JavaScript, and Reactjs. I'm constantly learning new methods
                    and tools to keep up with the most recent developments in
                    the field.
                  </p>
                  <button
                    class="connect"
                    onClick={() => console.log("connect")}
                  >
                    <a href="https://linked.com"> Let’s Connect </a>
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={Img1} className="profile" alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
