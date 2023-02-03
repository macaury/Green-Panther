import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Brands() {
  return (
    <>
      <Container id="brands">
        <Row>
          <div className="brands_box_txt text-center">
            <h3>
              We Collaborate With 250++ Leading Top
              <br /> E Commerce and Brands
            </h3>
          </div>
        </Row>
        <Row className=" icon_group">
          <div className="adidas"></div>
          <div className="balenciaga"></div>
          <div className="bukalapak"></div>
          <div className="gucci"></div>
          <div className="tokopedia"></div>
        </Row>
      </Container>
    </>
  );
}

export default Brands;
