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
      <Container id="brands" >
        <Row>
          <div className="brands_box_txt text-center">
            <h3>
              We Collaborate With 250++ Leading Top
              <br /> E Commerce and Brands
            </h3>
          </div>
        </Row>
        <Row className=" justify-content-center icon_group">
          <img src={tokopedia} alt="" />
          <img src={balenciaga} alt="" />
          <img src={adidas} alt="" />
          <img src={bukalapak} alt="" />
          <img src={gucci} alt="" />
        </Row>
      </Container>
    </>
  );
}

export default Brands;
