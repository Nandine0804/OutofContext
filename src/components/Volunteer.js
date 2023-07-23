import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/css.png";
import meter3 from "../assets/img/js.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
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
    <section className="skill" id="volunteer" data-interval="10000">
      <div className="container" data-interval="1000">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Volunteering Works</h2>
              <p>
                I have been volunteering for the following groups and have some
                contributions
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                data-interval="false"
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    src="https://media.licdn.com/dms/image/C4D03AQFvDNJgV4kKog/profile-displayphoto-shrink_800_800/0/1663335686033?e=2147483647&v=beta&t=_83EPr5H1I_j5o4yR3_DbJpWnwLqjijrfw0fkwEinNk"
                    alt="Image"
                  />
                  <h5>DEVS REC</h5>
                  <h6>EVENT MANAGER</h6>
                </div>
                <div className="item">
                  <img src="https://media.licdn.com/dms/image/C560BAQGVKavOFtqIcg/company-logo_200_200/0/1593965914944?e=2147483647&v=beta&t=Mm1nnS3cTe_gs7NrmDaI0_oUPjEoMjpNzq11SK1L7rA" alt="Image" />
                                  <h5>Enactus REC</h5>
                                  <h6>Member</h6>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
