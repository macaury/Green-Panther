import React from "react";

import { useState, useEffect, useRef } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Products() {
  const [data, setData] = useState([]);
  const carousel = useRef();

  useEffect(() => {
    fetch("https://macaury.github.io/Green-Panther/dist/shoes.json")
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
      <Container id="products_pop">
        <Row className="products_pop_title ">
          <h2>Populer Products From All Brands</h2>
        </Row>
        <Row>
          <div className="carousel  " ref={carousel}>
            {data.map((item) => {
              const { id, name, price, image } = item;
              var price_correct = price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              });

              return (
                <Card key={id}>
                    <Card.Img
                      className="image"
                      variant="top"
                      src={image}
                      alt={name}
                    />

                    <Card.Body className="justify-content-start">
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>{price_correct}</Card.Text>
                    </Card.Body>
                </Card>
              );
            })}
          </div>
        </Row>
        <Row>
          <div className="buttons">
            <Button onClick={handleLeftClick}>
              <FiChevronLeft />
            </Button>
            <Button onClick={handleRightClick}>
              <FiChevronRight />
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Products;
