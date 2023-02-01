import React from "react";

import { useState, useEffect, useRef } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import Carousel from "react-bootstrap/Carousel";

import nike from "../assets/productspop/Group 2.svg";

function Products() {
  const price = 2999.0;
  var price_correct = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch("./public/shoes.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <>
      <Container>
        <Row>
          <h2>Populer Products From All Brands</h2>
        </Row>
        <Row>
          <div className="carousel">
            {data.map((item) => {
              const { id, name, price, image } = item;
              var price_correct = price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              });

              return (
                <Card
                  key={id}
                  style={{ width: "18rem", border: "none", flex: "none" }}
                >
                  <Card.Img
                    className="image"
                    variant="top"
                    src={image}
                    alt={name}
                  />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{price_correct}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Products;
