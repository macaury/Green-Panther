import React from "react";

import NavbarBrand from "react-bootstrap/NavbarBrand";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import { HiMenu } from "react-icons/hi";

function Nav_bar() {
  return (
    <>
      <Navbar id="nav_bar" expand="lg" variant="light" bg="light">
        <Container className="justify-content-between">
          <NavbarBrand className="logo">
            <h3>
              Green{" "}
              <span style={{ color: " var(--primary-color)" }}>Panther</span>
            </h3>
          </NavbarBrand>
          <Nav className="nav_links_box">
            <Nav.Link className="nav_links">Home</Nav.Link>
            <Nav.Link className="nav_links">Products</Nav.Link>
            <Nav.Link className="nav_links">Categories</Nav.Link>
            <Nav.Link className="nav_links">Brand</Nav.Link>
            <Nav.Link className="nav_links">Pricing</Nav.Link>
          </Nav>
          <Nav>
              <Col className="login_menu">
                <Button className="btn_login">Login</Button>
                <Button className="btn_color">Rigister</Button>
                  <HiMenu className="menu" />
              </Col>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav_bar;
