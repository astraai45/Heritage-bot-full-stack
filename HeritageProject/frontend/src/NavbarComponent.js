import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
function NavbarComponent() {
  return (
    <Navbar bg="light" variant="light" expand="lg p-4" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-dark">
          TAMIL NADU
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="text-dark mx-2 text-uppercase fw-medium"
              style={{ letterSpacing: "1px" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/maps"
              className="text-dark mx-2 text-uppercase fw-medium"
              style={{ letterSpacing: "1px" }}
            >
              Maps
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/chat"
              className="text-dark mx-2 text-uppercase fw-medium"
              style={{ letterSpacing: "1px" }}
            >
              Chat
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/translate"
              className="text-dark mx-2 text-uppercase fw-medium"
              style={{ letterSpacing: "1px" }}
            >
              Translate
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/more"
              className="text-dark mx-2 text-uppercase fw-medium"
              style={{ letterSpacing: "1px" }}
            >
              More
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
