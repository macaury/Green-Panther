import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



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
          <Col  lg="7" md="2" xs="5" >
            <div class="card_categories">
              <img src="https://github.com/macaury/Green-Panther/blob/main/src/assets/Categories/image2.png?raw=true" alt=""   className="img_cate"/>
            </div>
          </Col>
          <Col  lg="5" md="2" xs="5">
            <div class="card_categories ">
              <img src="https://github.com/macaury/Green-Panther/blob/main/src/assets/Categories/image.png?raw=true"alt="" className="img_cate" />
            </div>
          </Col>

          <Col  lg="7" md="2"  xs="5">
            <div class="card_categories ">
              <img src="https://github.com/macaury/Green-Panther/blob/main/src/assets/Categories/image3.png?raw=true" alt=""  className="img_cate"/>
            </div>
          </Col>
          <Col  lg="5" md="2" xs="5">
            <div class="card_categories">
              <img src="https://github.com/macaury/Green-Panther/blob/main/src/assets/Categories/image4.png?raw=true" alt=""  className="img_cate" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Catergories;
