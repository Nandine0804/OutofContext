import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contact from "../assets/img/contact.png";
import "animate.css";
import emailjs from "@emailjs/browser";
import TrackVisibility from "react-on-screen";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_08nwq6l",
        "template_xg1ncxg",
        form.current,
        "wYFoX5Ldbge0wDuxf"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Thanks for connecting. Hope to see you again')
        },
        (error) => {
          console.log(error.text);
          alert('Oops...Try Again')
        }
    );
    e.target.reset();
  };
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  id="cont"
                  src="https://images.assetsdelivery.com/compings_v2/elenanelelena/elenanelelena1805/elenanelelena180500026.jpg"
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Connect with me! Happy to hear your opinions</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          name="userName"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="userLastName"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="userEmail"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Your Interest?"
                          name="userInterest"
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="userMessage"
                          required
                        ></textarea>
                        <button type="submit">
                          <span>Let's Connect</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
