import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md={12} className="footer-social-links-container">
          <h1>FIND ME ON</h1>
          <p>
            Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
          </p>
          <ul className="footer-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/Syed-Moazzam/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/syed-moazzam/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>

        <Col md="4" className="footer-copyright">
          <span>Dedicated to creating impactful solutions!</span>
        </Col>
        <Col md="4" className="footer-copyright">
          <span>Copyright © {year}</span>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Syed-Moazzam/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/syed-moazzam"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer