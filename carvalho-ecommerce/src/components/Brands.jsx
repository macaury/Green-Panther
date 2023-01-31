import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import adidas from "../assets/brands/adidas.svg";
import balenciaga from "../assets/brands/Balenciaga.svg";
import bukalapak from "../assets/brands/Bukalapak.svg";
import gucci from "../assets/brands/gucci.svg";
import tokopedia from "../assets/brands/Tokopedia.svg";

function Brands() {
  return (
    <>
      <Container>
        <Row>
          <div className="text-center">
            <span>
              We Collaborate With 250++ Leading Top
              <br /> E Commerce and Brands
            </span>
          </div>
        </Row>
        <Row className=" justify-content-center brands_icon">
          <img src={adidas} alt="" />
          <img src={balenciaga} alt="" />
          <img src={bukalapak} alt="" />
          <img src={gucci} alt="" />
          <img src={tokopedia} alt="" />
        </Row>
      </Container>
    </>
  );
}

export default Brands;
