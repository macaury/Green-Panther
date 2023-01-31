import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import delivery from "../assets/SendTypes/delivery.svg";
import trusted from "../assets/SendTypes/trusted.svg";
import foryou from "../assets/SendTypes/foryou.svg";

function SendTypes() {
  return (
    <>
      <Container>
        <Row>
          <div className="text-center">
            <h2>Why Choose LoremIpsum?</h2>
          </div>
          <Col>
            <div className="text-center">
              <img src={delivery} alt="" />
              <h4>Free Delivery</h4>
              <span>
                Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <img src={trusted} alt="" />
              <h4>Trusted Platfrom</h4>
              <span>
                Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <img src={foryou} alt="" />
              <h4>Here For You</h4>
              <span>
                Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SendTypes;
