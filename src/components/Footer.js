// import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import { useState } from "react";
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
                <a href="#"><img src={navIcon1} alt="Icon" /></a>
                <a href="#"><img src={navIcon2} alt="Icon" /></a>
                <a href="#"><img src={navIcon2} alt="Icon" /></a>
                <a href="#"><img src={navIcon3} alt="Icon" /></a>
                <a href="#"><img src={navIcon3} alt="Icon" /></a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}
