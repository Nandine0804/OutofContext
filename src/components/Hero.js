import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";

import TrackVisibility from "react-on-screen";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(250 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Coding like poetry should be short and concise. ― Santosh Kalwar",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
    "Of course, bad code can be cleaned up. But it’s very expensive.” — Robert C. Martin",
  ];
  const period = 300;

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
      setDelta(300);
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
                  <h1>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Coding like poetry should be short and concise. ― Santosh Kalwar"
                      ,"First, solve the problem. Then, write the code. – John Johnson",
                       "Code is like humor. When you have to explain it, it’s bad. – Cory House",
                        "Clean code always looks like it was written by someone who cares. — Robert C. Martin"
                        ,"Of course, bad code can be cleaned up. But it’s very expensive.” — Robert C. Martin"
                      ]'
                    >
                      <span className="wrap">
                        <br />
                        {text}
                      </span>
                    </span>
                  </h1>
                  <span className="tagline">
                    INTERNSHIP PROGRAMME BY <b>SKILL BREWERY</b>
                  </span>
                  <p>
                    Skill Brewery, is Codevita Live's premium free Internship
                    cum training program intended for college students. Work on
                    cool hands-on projects to amplify your profile. Gain an
                    internship certificate, work experience and mentoring after
                    the completion of the programme. Choose a domain of your
                    interest and get started now!
                  </p>
                  <button
                    class="connect"
                    onClick={() => console.log("connect")}
                  >
                    <a href="#terms" className="brand">
                      {" "}
                      EXPLORE{" "}
                    </a>
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
                  id="img"
                >
                  <img
                    src="https://media.licdn.com/dms/image/C560BAQGvOSVAwqtr5A/company-logo_200_200/0/1611205348503?e=2147483647&v=beta&t=n_ucTxDrtkEIaVjab2sgLLWZQ4_e_ASI49jvOAIXTSw"
                    className="profile"
                    alt="Header Img"
                  />
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
