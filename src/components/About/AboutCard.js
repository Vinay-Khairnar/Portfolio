import React from "react";
import Card from "react-bootstrap/Card";
import { SiYourtraveldottv } from "react-icons/si";
import {CgGames} from 'react-icons/cg'
import {GiMuscleUp} from 'react-icons/gi'
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinay Khairnar </span>
            from <span className="purple"> Aurangabad, Maharashtra, India.</span>
            <br />I Completed BTech in Computer Science and Engineering from MGM's JNEC,Aurangabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <CgGames /> Playing Games
            </li>
            <li className="about-activity">
              <GiMuscleUp /> Fitness and Workout
            </li>
            <li className="about-activity">
              <SiYourtraveldottv /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "life is not a problem to be solved but a game to be played!"{" "}
          </p>
          <footer className="blockquote-footer">Vinay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
