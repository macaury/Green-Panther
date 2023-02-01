import React from "react";

import NavbarBrand from "react-bootstrap/NavbarBrand";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import Logo from "../assets/navbar/Logo.svg"


function Nav_bar() {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container className="justify-content-between">
          <NavbarBrand><img src={Logo} alt="" /></NavbarBrand>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Products</Nav.Link>
            <Nav.Link>Categories</Nav.Link>
            <Nav.Link>Brand</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Button className="btn_login">Log in</Button>
            <Button className="btn_color">Rigister</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Nav_bar;
