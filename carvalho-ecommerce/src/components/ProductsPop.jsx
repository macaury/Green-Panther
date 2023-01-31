import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import nike from "../assets/productspop/Group 2.svg";

function Products() {
  const price = 2999.00;
  var price_correct = price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
  return (
    <>
      <Container>
        <Row>
          <h2>Populer Products From All Brands</h2>
        </Row>
        <Row>
          <Card style={{ width: "18rem", borderColor: "white" }}>
            <Card.Img variant="top" src={nike} />
            <Card.Body>
              <Card.Title>Nike Air force</Card.Title>
              <Card.Text>{price_correct}</Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default Products;
