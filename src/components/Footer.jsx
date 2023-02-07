import React from "react";

import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Footer() {
  const dataAtual = new Date();
  const year = dataAtual.getFullYear();

  return (
    <>
      <Container className="py-5 mt-5">
        <Row id="footer py-5 ">
          <Col lg="3"  mb="2" xs="11">
            <div className="about">
              <div className="logo mb-3 ">
                <h3>
                  Green{" "}
                  <span style={{ color: " var(--primary-color)" }}>
                    Panther
                  </span>
                </h3>
              </div>
              <h6 className="text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h6>
            </div>
          </Col>
          <Col col="6" lg="2" md="3" xs="6" className="offset-lg-1">
            <div>
              <h4 className="mb-3">For Beginner</h4>
              <ul className="list-unstyled">
                <li className="mb-2">About</li>
                <li className="mb-2">Career</li>
                <li className="mb-2">Promotion</li>
              </ul>
            </div>
          </Col>
          <Col col="6" lg="2" md="3" xs="5">
            <div>
              <h4 className="mb-3">Overview</h4>
              <div>
                <ul className="list-unstyled">
                  <li className="mb-2">Categories</li>
                  <li className="mb-2">Product</li>
                  <li className="mb-2">Pricing</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col col="6" lg="2" md="3" xs="6">
            <div>
              <h4 className="mb-3">Explore Us</h4>
              <ul className="list-unstyled">
                <li className="mb-2">Our Career</li>
                <li className="mb-2">Privacy</li>
                <li className="mb-2">Terms & Conditions</li>
              </ul>
            </div>
          </Col>
          <Col col="6" lg="2" md="3" xs="5">
            <div>
              <h4 className="mb-3">Connect Us</h4>
              <ul className="list-unstyled">
                <li className="mb-2">supp@lorem.com</li>
                <li className="mb-2">011 - 222 -333</li>
                <li className="mb-2">lorem ipsum, lor- ip</li>
              </ul>
            </div>
          </Col>
          <div className="copyright text-center ">
            <h6>
              {" "}
              &copy; {year} • All right and Design development by Giatinaja |
              Code developed by{" "}
              <a className="oak" href="https://macaury.github.io/Portifolio/">
                {" "}
                {"{OAK}"}
              </a>
            </h6>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
