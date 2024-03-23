import React, { useEffect, useRef, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../../assets/images/about.png';
import Particle from '../../components/Particle';
import TypeWriter from '../../components/TypeWriter';
import Techstack from "../../components/Skillset/Techstack";
import Toolstack from "../../components/Skillset/Toolstack";
import Button from "react-bootstrap/Button";

import LaptopImg from "../../assets/images/home-main.svg";
import Tilt from "react-parallax-tilt";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { projectsArray } from '../../config/data';
import ProjectCard from '../../components/ProjectCard';
import Experience from '../../components/Experience';
import emailjs from "@emailjs/browser";
import Loader from '../../components/Loader';

const Home = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const [notDone, setNotDone] = useState(false)
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

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
              </Col>

              <Col sm={9} md={8} lg={6} style={{ paddingBottom: '20px', margin: 'auto' }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
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
                <h1 className='let-me-introduce-myself-heading'>
                  Let Me<span className="yellow"> Introduce </span> Myself
                </h1>
                <p className="home-about-body">
                  Hi, my name is <b className="yellow">Syed Moazzam Ahmed </b>
                  and I'm from <b className="yellow"> Karachi, Pakistan.</b>
                  <br />
                  As a
                  <b className="yellow"> Software Engineer </b>
                  with a robust background in
                  <b className="yellow"> Python, C++, and JavaScript, </b>
                  I bring a wealth of experience to the table. Currently serving as a
                  <b className="yellow"> Full-Stack Software Engineer, </b>
                  I specialize in leveraging cutting-edge libraries and frameworks such as
                  <b className="yellow"> React, React Native, Next.js, Node.js, and Express.js </b>
                  to craft efficient and scalable solutions. My proficiency extends to diverse databases including
                  <b className="yellow"> MySQL, PostgreSQL, and MongoDB, </b>
                  ensuring seamless data management and optimization. With a dedication to staying abreast of industry trends and a passion for problem-solving, I am committed to delivering high-quality software solutions tailored to meet the unique needs of each project. Explore my portfolio to discover my expertise and accomplishments in the realm of software engineering.
                </p>
              </Col>
              <Col sm={9} md={8} lg={7} xl={6} className="myAvatar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>

      <section ref={workExpRef}>
        <Container fluid className="work-experience-section">
          <Container>
            <h1 className="work-experience-heading">
              Work <strong className="yellow">Experience</strong>
            </h1>
            <Experience />
          </Container>
        </Container>
      </section>

      <section ref={skillsetRef}>
        <Container fluid className="skillset-section">
          <Container>
            <h1 className="skillset-heading">
              Professional <strong className="yellow">Skillset </strong>
            </h1>
            <Techstack />

            <h1 className="tools-used-heading">
              <strong className="yellow">Tools</strong> I Use
            </h1>
            <Toolstack />
          </Container>
        </Container>
      </section>

      <section ref={projectsRef}>
        <Container fluid className="project-section">
          <Container>
            <h1 className="project-heading">
              Recent Top <strong className="yellow">Works </strong>
            </h1>
            <p style={{ color: "white" }}>
              Here are a few projects I've worked on recently.
            </p>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              {projectsArray.map((project, index) => {
                return (
                  <Col sm={12} md={6} lg={6} xl={4} className="project-card" key={index}>
                    <ProjectCard
                      img={project?.img}
                      title={project?.title}
                      description={project?.description}
                      ghLink={project?.ghLink}
                      demoLink={project?.demoLink}
                    />
                  </Col>
                )
              })}
            </Row>
          </Container>
        </Container>
      </section>

      <section ref={contactRef}>
        <Container style={{ paddingTop: '100px' }} className='contact-me-container' >
          <Row >
            <Col md={6} className="c-left" >
              <h1 >Get in Touch</h1>
              <h1 className="yellow">Contact me</h1>
            </Col>
            <Col md={6} className="c-right">
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
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Home;