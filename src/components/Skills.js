import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/css.png";
import meter3 from "../assets/img/js.png";
import meter4 from "../assets/img/tailwindcss.png";
import meter5 from "../assets/img/reactjs.png";
import meter6 from "../assets/img/figma.png";
import meter7 from "../assets/img/Indesign.png";
import meter8 from "../assets/img/bootstrap.png";
import meter9 from "../assets/img/nodejs.png";
import meter10 from "../assets/img/git-logo.png";
import meter11 from "../assets/img/firebase.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import cloud from "../assets/img/cloud.png";
import programming from "../assets/img/programming.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills" data-interval="10000">
      <div className="container" data-interval="1000">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have sufficient knowledge of the following skills, and I'll
                work to become skilled
                <br /> by consistently putting them to use each day.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                data-interval="false"
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>Tailwind css</h5>
                </div>
                <div className="item">
                  <img src={meter10} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="Image" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={cloud} alt="Image" />
                  <h5>Cloud computing</h5>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png"
                    alt="Image"
                  />
                  <h5>Firebase</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>Adobe InDesign</h5>
                </div>
                <div className="item">
                  <img
                    src="https://o.remove.bg/downloads/5a2de164-b23b-4e1a-b515-2b03144f6d6e/png-transparent-java-logo-java-runtime-environment-computer-icons-java-platform-standard-edition-java-miscellaneous-text-logo-thumbnail-removebg-preview.png"
                    alt="Image"
                  />
                  <h5>Java</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
