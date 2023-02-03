import React from "react";

import NavbarBrand from "react-bootstrap/NavbarBrand";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import Logo from "../assets/navbar/Logo.svg";

function Nav_bar() {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container className="justify-content-between">
          <NavbarBrand className="logo">
            <img src={Logo} alt="Green Panther" />
          </NavbarBrand>
          <Nav>
            <Nav.Link className="nav_links">Home</Nav.Link>
            <Nav.Link className="nav_links">Products</Nav.Link>
            <Nav.Link className="nav_links">Categories</Nav.Link>
            <Nav.Link className="nav_links">Brand</Nav.Link>
            <Nav.Link className="nav_links">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Button className="btn_login">Login</Button>
            <Button className="btn_color">Rigister</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav_bar;
