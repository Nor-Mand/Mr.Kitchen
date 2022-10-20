import React from "react";
import Image from "next/image";
import logo from "../images/logo-white.png";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          variant="dark"
          expand={expand}
          className="mb-3"
        >
          <Container md>
            <Navbar.Brand href="/">
              <Image
                src={logo}
                fill="true"
                objectFit="contain"
                height={40}
                className="d-inline-block align-top"
                alt="Mr. Kitchen Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Mr. Kitchen
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#action2">Recipe</Nav.Link>
                  <Nav.Link href="/categories">Categories</Nav.Link>
                  <Nav.Link href="/search">Search</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBar;
