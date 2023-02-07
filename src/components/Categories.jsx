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

        <Row className="categories_container_card justify-content-center">
          <Col lg="6" md="6">
            <div class="hor">
              <div className="img1"></div>
            </div>

            <div class="hor2 ">
              <div className="img2"></div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div class="ver1 ">
              <div className="img4"></div>
            </div>
            <div class="ver2">
              <div className="img3"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Catergories;
