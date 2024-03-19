import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineContacts
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi"
import { CgFileDocument } from "react-icons/cg";
import { IoPersonSharp } from "react-icons/io5";
import pdf from "../../assets/Moazzam.pdf";
import { FaBriefcase } from "react-icons/fa";

function Header({ sectionsRef }) {
  const { aboutRef, workExpRef, skillsetRef, projectsRef, contactRef } = sectionsRef;

  const [expand, updateExpanded] = useState(false);
  const [headerColor, updateHeader] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateHeader(true);
    } else {
      updateHeader(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const navigateToSection = (ref) => {
    if (ref && ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={headerColor ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <span className="navbar-my-name-logo">{"<Syed"}</span>&nbsp;
          <span className="navbar-my-name-logo">{"Moazzam Ahmed />"}</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} onClick={() => {
                updateExpanded(false);
                navigateToSection(aboutRef);
              }}>
                <IoPersonSharp style={{ margin: "0px 1px 2.5px 0px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                onClick={() => {
                  updateExpanded(false);
                  navigateToSection(workExpRef);
                }}
              >
                <FaBriefcase style={{ margin: "0px 1px 2.5px 0px" }} /> Work Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                onClick={() => {
                  updateExpanded(false);
                  navigateToSection(skillsetRef)
                }}
              >
                <GiSkills style={{ margin: "0px 1px 2.5px 0px" }} /> Skillset
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                onClick={() => {
                  updateExpanded(false);
                  navigateToSection(projectsRef)
                }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ margin: "0px 1px 2.5px 0px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href={pdf}
                target="_blank"
                onClick={() => {
                  updateExpanded(false);
                }}
              >
                <CgFileDocument style={{ margin: "0px 1px 2.5px 0px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                onClick={() => {
                  updateExpanded(false);
                  navigateToSection(contactRef);
                }}
              >
                <AiOutlineContacts style={{ margin: "0px 1px 2.5px 0px" }} /> Contact Me
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;