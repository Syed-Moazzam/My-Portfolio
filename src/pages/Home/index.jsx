import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../../assets/images/site-assets/about.png';
import Particle from '../../components/Particle';
import TypeWriter from '../../components/TypeWriter';
import Techstack from "../../components/Skillset/Techstack";
import Toolstack from "../../components/Skillset/Toolstack";
import Button from "react-bootstrap/Button";

import LaptopImg from "../../assets/images/site-assets/home-main.svg";
import Tilt from "react-parallax-tilt";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { mobileProjectsArray, webProjectsArray } from '../../config/data';
import WebProjectCard from '../../components/WebProjectCard';
import MobileProjectCard from '../../components/MobileProjectCard';
import WorkExperience from '../../components/WorkExperience';
import emailjs from "@emailjs/browser";
import Loader from '../../components/Loader';

// importing react-awesome-reveal
import { Zoom } from "react-awesome-reveal";

const Home = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [projectTab, setProjectTab] = useState("web");

  const aboutRef = useRef();
  const workExpRef = useRef();
  const skillsetRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setDone(false)
    setNotDone(false)
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formData?.from_name || !formData?.reply_to || !formData?.message) {
      setNotDone(true);
    } else {
      setLoading(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(() => {
          setDone(true);
          setLoading(false);
        },
          (error) => {
            console.log(error.text);
            setLoading(false);
          }
        );
    }
  };

  const sectionsRef = {
    aboutRef,
    workExpRef,
    skillsetRef,
    projectsRef,
    contactRef
  };

  const filteredWebProjects = webProjectsArray.filter((project) => project?.type === projectTab);

  useEffect(() => {
    setTimeout(() => {
      if (done) {
        setDone(false);
      }
      if (notDone) {
        setNotDone(false);
      }
      setFormData({
        from_name: "",
        reply_to: "",
        message: ""
      })
    }, 3200);
  }, [done, notDone]);

  return (
    <>
      <Header sectionsRef={sectionsRef} />
      <Particle />
      <section ref={aboutRef}>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row className="row-of-home-content">
              <Col md={12} lg={6} className="home-header">
                <Zoom>
                  <h1 style={{ paddingBottom: 15 }} className="heading">
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </h1>

                  <h1 className="heading-name">
                    I'M
                    <strong className="main-name"> Syed Moazzam Ahmed</strong>
                  </h1>

                  <div className="home-content-typewriter">
                    <TypeWriter />
                  </div>
                </Zoom>
              </Col>

              <Col sm={9} md={8} lg={6} style={{ paddingBottom: '20px', margin: 'auto' }}>
                <Zoom>
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                  />
                </Zoom>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section>
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row className="row-of-home-about-section">
              <Col sm={12} md={12} lg={12} xl={6} className="home-about-description">
                <Zoom>
                  <h1 className='let-me-introduce-myself-heading'>
                    Let Me<span className="yellow"> Introduce </span> Myself
                  </h1>
                  <p className="home-about-body">
                    Hi, my name is <b className="yellow">Syed Moazzam Ahmed </b>
                    and I'm from <b className="yellow"> Karachi, Pakistan.</b>
                    <br />
                    As a
                    <b className="yellow"> Backend-focused Software Engineer </b>
                    with 5+ years of experience building scalable services, APIs, and cloud infrastructure using
                    <b className="yellow"> TypeScript, Node.js, NestJS, and AWS. </b>
                    I specialize in backend architecture, database design, API integrations, and
                    <b className="yellow"> AI/GenAI systems, </b>
                    turning ambiguous requirements into production-ready solutions. Currently serving as a
                    <b className="yellow"> Senior Software Engineer, </b>
                    I work across
                    <b className="yellow"> Node.js, NestJS, Express.js, REST APIs, GraphQL, and microservices </b>
                    with a strong focus on scalability, reliability, performance, and maintainability. My proficiency extends to databases including
                    <b className="yellow"> PostgreSQL, MongoDB, MySQL, DynamoDB, Firebase, and Supabase, </b>
                    along with cloud platforms like
                    <b className="yellow"> AWS, Microsoft Azure, and GCP. </b>
                    I have delivered high-impact solutions across fintech, health tech, and travel tech domains.
                  </p>
                </Zoom>
              </Col>
              <Col sm={9} md={8} lg={7} xl={6} className="myAvatar">
                <Zoom>
                  <Tilt>
                    <img src={LaptopImg} className="img-fluid" alt="avatar" />
                  </Tilt>
                </Zoom>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section ref={workExpRef}>
        <Container fluid className="work-experience-section">
          <Container>
            <Zoom>
              <h1 className="work-experience-heading">
                Work <strong className="yellow">Experience</strong>
              </h1>
              <WorkExperience />
            </Zoom>
          </Container>
        </Container>
      </section>

      <section ref={skillsetRef}>
        <Container fluid className="skillset-section">
          <Container>
            <Zoom>
              <h1 className="skillset-heading">
                Professional <strong className="yellow">Skillset </strong>
              </h1>
              <Techstack />

              <h1 className="tools-used-heading">
                <strong className="yellow">Tools</strong> I Use
              </h1>
              <Toolstack />
            </Zoom>
          </Container>
        </Container>
      </section>

      <section ref={projectsRef}>
        <Container fluid className="project-section">
          <Container>
            <Zoom>
              <h1 className="project-heading">
                Recent Top <strong className="yellow">Works </strong>
              </h1>
              <p style={{ color: "white" }}>
                Here are a few projects I've worked on recently.
              </p>
              <div className="projects-tabs">
                <button
                  type="button"
                  className={`projects-tab-btn ${projectTab === "web" ? "active" : ""}`}
                  onClick={() => setProjectTab("web")}
                >
                  Web Apps
                </button>
                <button
                  type="button"
                  className={`projects-tab-btn ${projectTab === "mobile" ? "active" : ""}`}
                  onClick={() => setProjectTab("mobile")}
                >
                  Mobile Apps
                </button>
              </div>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                {(projectTab === "web" ? filteredWebProjects : mobileProjectsArray).map((project, index) => {
                  return (
                    <Col sm={12} md={6} lg={6} xl={4} className="project-card" key={index}>
                      {projectTab === "web" ? (
                        <WebProjectCard
                          img={project?.img}
                          title={project?.title}
                          description={project?.description}
                          ghLink={project?.ghLink}
                          demoLink={project?.demoLink}
                        />
                      ) : (
                        <MobileProjectCard
                          title={project?.title}
                          description={project?.description}
                          images={project?.images}
                          ghLink={project?.ghLink}
                          appStoreLink={project?.appStoreLink}
                          playStoreLink={project?.playStoreLink}
                        />
                      )}
                    </Col>
                  )
                })}
              </Row>
            </Zoom>
          </Container>
        </Container>
      </section>

      <section ref={contactRef}>
        <Container style={{ paddingTop: '100px' }} className='contact-me-container' >
          <Row>
            <Col md={6} className="c-left" >
              <Zoom>
                <h1 >Get in Touch</h1>
                <h1 className="yellow">Contact me</h1>
              </Zoom>
            </Col>
            <Col md={6} className="c-right">
              <Zoom style={{ width: '100%' }}>
                <form ref={form} onSubmit={sendEmail}>
                  <input type="text" name="from_name" className="user" placeholder="Enter Your Name..." value={formData?.from_name} onChange={handleChange} disabled={done || notDone} autoComplete="off" />
                  <input type="email" name="reply_to" className="user" placeholder="Enter Your Email Address..." value={formData?.reply_to} onChange={handleChange} disabled={done || notDone} autoComplete="off" />
                  <textarea name="message" className="user" placeholder="Enter Message..." value={formData?.message} onChange={handleChange} disabled={done || notDone} autoComplete="off" />
                  <div className='contact-me-send-btn-container'>
                    {notDone && <span className='not-done' >Please fill all the input fields!</span>}
                    <Button type="submit" className="button" disabled={done || notDone} style={{ margin: notDone ? '18px auto 0px' : done ? '0px auto 18px' : "" }}>{loading ? <Loader /> : "Send"}</Button>
                    {done && <span className='done'>Thanks for contacting me!</span>}
                  </div>
                </form>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Home;