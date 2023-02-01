import React from "react";

import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import logo from "../assets/navbar/Logo.svg";

function Footer() {
  const dataAtual = new Date();
  const year = dataAtual.getFullYear();

  return (
    <>
      <Container style={{ listStyle: "none" }}>
        <Row>
          <Col md="4">
            <div>
              <div className="logo">
                {" "}
                <img src={logo} alt="" />
              </div>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h6>
            </div>
          </Col>
          <Col md="2">
            <div>
              <h4>For Beginner</h4>
              <div>
                <li>About</li>
                <li>Career</li>
                <li>Promotion</li>
              </div>
            </div>
          </Col>
          <Col md="2">
            <div>
              <h4>Overview</h4>
              <div>
                <li>Categories</li>
                <li>Product</li>
                <li>Pricing</li>
              </div>
            </div>
          </Col>
          <Col md="2">
            <div>
              <h4>Explore Us</h4>
              <div>
                <li>Our Career</li>
                <li>Privacy</li>
                <li>Terms & Conditions</li>
              </div>
            </div>
          </Col>
          <Col md="2">
            <div>
              <h4>Connect Us</h4>
              <div>
                <li>supp@lorem.com</li>
                <li>011 - 222 -333</li>
                <li>lorem ipsum, lor- ip</li>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="text-center">
            <h6> &copy; {year} • All right and Design development by Giatinaja | Code developed by {"{OAK}"}</h6>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
