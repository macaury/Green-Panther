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
      <Container id="send_type">
        <Row>
          <div className="send_types_title text-center">
            <h2>
              Why Choose Green{" "}
              <span style={{ color: "#3C9379" }}>Panther </span>?
            </h2>
          </div>
        </Row>
        <Row className="send_type_box_card">
          <Col>
            <div className="send_type_card text-center">
              <img src={delivery} alt="" />
              <h4>Free Delivery</h4>
              <span>
                Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
          </Col>
          <Col>
            <div className="send_type_card text-center">
              <img src={trusted} alt="" />
              <h4>Trusted Platfrom</h4>
              <span>
                Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
          </Col>
          <Col>
            <div className="send_type_card text-center">
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
