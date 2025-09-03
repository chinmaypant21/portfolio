import navIconLinkedinn from "../assets/img/nav-icon1.svg";
import navIconInsta from "../assets/img/nav-icon3.svg";
import navIconTwitter from "../assets/img/nav-icon-twitter.svg"
import navIconGithub from "../assets/img/nav-icon-github.svg"
import navIconWebsite from "../assets/img/nav-icon-website.svg"
import logo from '../assets/img/logo.png';
import { Widget } from '@typeform/embed-react'
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Footer = () => {
  return (
    <div className="footer-main-container">

      <section className="contact" id="connect">
        <Container>
          <Row>
            <Col size={12} md={6} className="footer-img-container">
              <TrackVisibility>
                {({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                }
              </TrackVisibility>
            </Col>
            < Col size={12} md={6} className="footer-form-container">
              <div style={{height:'100%'}}>
                <Widget id="cum4jmc7" style={{ height: '100%'}} className="my-form" />
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      <footer className="footer">
        <Container>
        <div className="footer-heading">
          <h2>Connect with me</h2>
        </div>
          <Row className="align-items-center">
            <Col size={12} sm={6} className="text-center" style={{width:'100%'}}>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/chinmay-pant-565277200/" target="_blank"><img src={navIconLinkedinn} alt="Icon" /></a>
                <a href="https://github.com/chinmaypant21" target="_blank"><img src={navIconGithub} alt="Icon" /></a>
                <a href="https://twitter.com/not__cicada" target="_blank"><img src={navIconTwitter} alt="Icon" /></a>
                <a href="https://chinz.me" target="_blank"><img src={navIconWebsite} alt="Icon" /></a>
                <a href="https://instagram.com/not_cicada" target="_blank"><img src={navIconInsta} alt="Icon" /></a>
              </div>
              <div className="d-md-none">
                <img src={logo} />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}
