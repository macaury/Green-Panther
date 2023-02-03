import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//import home_img from "../assets/home/StartImage";

function Home() {
  return (
    <>
      <Container id="home">
        <Row className="justify-content-between  ">
          <Col md="4">
            <div className="home_box_text">
              <h1 className="">Best Place to Buy <span style={{color:"#3C9379"}}>Everything.</span></h1>
              <p>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et.</p>
              <Button className="btn_color">Shopping Now</Button>
            </div>
          </Col>
          <Col md="8">
            <div className="home_image ">
              <div className="img"></div>  
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
