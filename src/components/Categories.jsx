import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Catergories() {
  return (
    <>
      <Container id="Categories">
        <Row>
          <div className="Categories_box_txt">
            <h2>Browse Categories of The Store</h2>
          </div>
        </Row>
        <Row className="justify-content-between">
          <div class="categories_container_card">
            <div class="hor">
              <div className="categories_card_txt">
                <h5>Skincare</h5>
                <span>2,000 items</span>
              </div>
              <div className="img1"></div>
            </div>
            <div class="hor2">
              <div className="categories_card_txt">
                <h5>Fashion</h5>
                <span>30,000 items</span>
              </div>
              <div className="img2"></div>
            </div>
            <div class="ver1">
              <div className="categories_card_txt">
                <h5>Electronic</h5>
                <span>10,000 items</span>
              </div>
              <div className="img4"></div>
            </div>
            <div class="ver2">
              <div className="categories_card_txt">
                <h5>Shoes</h5>
                <span>10,000 items</span>
              </div>
              <div className="img3"></div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Catergories;
