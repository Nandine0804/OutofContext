import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="project-heading">
        <h2>MY PROJECTS</h2>
        <span className="project-line"></span>
      </div>
      <div className="projects-cards">
        <Row xs={1} md={2} className="g-2">
          <Col>
            <Card className="project-card">
              <Card.Img
                variant="top"
                className="project-pic"
                src="https://xmple.com/wallpaper/3d-cubes-turquoise-3840x2160-c3-20d575-208851-17452c-l-325-a-165-f-11.svg"
              />
              <Card.Body>
                <Card.Title className="project-title">PROJECT</Card.Title>
                <Card.Text className="project-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  ullam alias corrupti laudantium cupiditate eveniet sunt nobis,
                  corporis fugit maiores quis similique debitis nesciunt, veniam
                  saepe consequuntur perferendis, suscipit accusamus!.
                </Card.Text>
                <Button variant="dark" className="project-button">
                  Demo Link
                </Button>
                <Button variant="dark" className="project-button">
                  Github Link
                </Button>
              </Card.Body>
            </Card>

            <Card className="project-card">
              <Card.Img
                variant="top"
                className="project-pic"
                src="https://xmple.com/wallpaper/3d-cubes-turquoise-3840x2160-c3-20d575-208851-17452c-l-325-a-165-f-11.svg"
              />
              <Card.Body>
                <Card.Title className="project-title">PROJECT </Card.Title>
                <Card.Text className="project-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  ullam alias corrupti laudantium cupiditate eveniet sunt nobis,
                  corporis fugit maiores quis similique debitis nesciunt, veniam
                  saepe consequuntur perferendis, suscipit accusamus!.
                </Card.Text>
                <Button variant="dark" className="project-button">
                  Demo Link
                </Button>
                <Button variant="dark" className="project-button">
                  Github Link
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Projects;
