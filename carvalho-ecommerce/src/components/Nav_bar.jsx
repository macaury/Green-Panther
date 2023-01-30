import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Nav_bar() {
  return (
    <>
      <Container>
        <Navbar>
          <Nav.Brand>Logo</Nav.Brand>

          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Products</Nav.Link>
            <Nav.Link>Categories</Nav.Link>
            <Nav.Link>Brand</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
}

export default Nav_bar;
