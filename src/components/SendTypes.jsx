import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



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
              <div className="delivery"></div>
              <h4>Free Delivery</h4>
              <span>
                Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
          </Col>
          <Col>
            <div className="send_type_card text-center">
              <div className="trusted"></div>
              <h4>Trusted Platfrom</h4>
              <span>
                Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
          </Col>
          <Col>
            <div className="send_type_card text-center">
              <div className="foryou"></div>
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
