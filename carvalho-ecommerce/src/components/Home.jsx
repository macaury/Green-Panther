import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import home_img from "../assets/home/StartImage.svg";

function Home() {
  return (
    <>
      <Container>
        <Row className="justify-content-between">
          <Col>
            <div>
              <h1  className="text-center">Best Place to Buy Everything.</h1>
              <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et.</p>
              <Button>Shopping Now</Button>
            </div>
          </Col>
          <Col>
            <div>
              <img src={home_img} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
