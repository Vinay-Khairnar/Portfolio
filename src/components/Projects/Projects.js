import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Lenskart from "../../Assets/Projects/Lenskart.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/108890778/201250253-68b7fe2e-2624-4f3a-9493-d4b1edc5cf19.png"
              isBlog={false}
              title="Blue Mercury"
              description="Bluemercury.com is a leading luxury beauty retailer offering the best cosmetics, skin care, makeup, perfume, hair, and bath and body."
              ghLink="https://github.com/Vinay-Khairnar/Blue-Mercury-React"
              demoLink="https://blue-mercury-clone2.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lenskart}
              isBlog={false}
              title="Lenskart Clone"
              description="Lenskart is an Indian multinational optical prescription eyewear retail chain, based in New Delhi, India."
              ghLink="https://github.com/Vinay-Khairnar/Lenskart-clone"
              demoLink="https://lenskart-clone.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://raw.githubusercontent.com/Vinay-Khairnar/HappyFox-Clone/main/ReadmeAssets/Home%20page.png"
              isBlog={false}
              title="HappyFox"
              description="Build clone of happyfox along with a team of 5 members in 7 days using html css js"
              ghLink="https://github.com/Vinay-Khairnar/HappyFox-Clone"
              demoLink="https://idyllic-scone-5f37c8.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/108894016/183241256-56331693-edb1-44f0-a919-39d5950fadbe.png"
              isBlog={false}
              title="CrickBuzz Clone"
              description="This is a static website clone of crickbuzz.com, it is fully responsive website, and as a milestone in the journey for the web development journey."
              ghLink="https://github.com/Vinay-Khairnar/CrickBuzz-Clone"
              demoLink="https://heroic-puffpuff-cbebb9.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
