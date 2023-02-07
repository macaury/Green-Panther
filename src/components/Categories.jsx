import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Source from "../../dist/assets/image.png";
import Source2 from "../../dist/assets/image2.png";
import Source3 from "../../dist/assets/image3.png";
import Source4 from "../../dist/assets/image4.png";

function Catergories() {

  return (
    <>
      <Container id="Categories">
        <Row>
          <div className="Categories_box_txt">
            <h2>Browse Categories of The Store</h2>
          </div>
        </Row>
        <Row className="categories_container_card ">
          <Col  lg="6" md="2" xs="5" >
            <div class="card_categories">
              <img src={Source} alt=""   className="img_cate"/>
            </div>
          </Col>
          <Col  lg="6" md="2" xs="5">
            <div class="card_categories ">
              <img src={Source2} alt="" className="img_cate" />
            </div>
          </Col>

          <Col col="3" lg="6" md="2"  xs="5">
            <div class="card_categories ">
              <img src={Source3} alt=""  className="img_cate"/>
            </div>
          </Col>
          <Col col="3" lg="6" md="2" xs="5">
            <div class="card_categories">
              <img src={Source4} alt=""  className="img_cate" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Catergories;
