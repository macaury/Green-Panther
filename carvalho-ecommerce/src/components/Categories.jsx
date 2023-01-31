import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import image1 from "../assets/Categories/image1.svg";
import image2 from "../assets/Categories/image2.svg";
import image3 from "../assets/Categories/image3.svg";
import image4 from "../assets/Categories/image4.svg";

function Catergories() {
  return (
    <>
      <Container id="Categories">
        <Row>
          <div>
            <span>Browse Categories of The Store</span>
          </div>
        </Row>
        <Row className="justify-content-between">
          <div class="categories_container_card">
            <div class="hor">
              <img className="vertical_btn_1" src={image1} alt="" />
            </div>
            <div class="hor2">
              <img className="horizontal_btn" src={image2} alt="" />
            </div>
            <div class="ver1">
              <img className="horizontal_btn" src={image3} alt="" />
            </div>
            <div class="ver2">
              <img className="vertical_btn_2" src={image4} alt="" />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Catergories;
