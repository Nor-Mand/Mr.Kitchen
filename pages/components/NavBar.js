import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../images/logo-white.png";
import Link from "next/link";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
// import style from "../../styles/NavBar.module.css";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const listenScrollEvent = (e) => setIsScrolled(window.scrollY > 80);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} bg={isScrolled ? "dark" : ""}>
          <Container md>
            <Link href="/">
              <Navbar.Brand>
                <Image
                  src={logo}
                  fill="true"
                  objectFit="contain"
                  height={40}
                  className="d-inline-block align-top"
                  alt="Mr. Kitchen Logo"
                />
              </Navbar.Brand>
            </Link>
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
                  
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                  <Link href="/story">
                    <a className="nav-link">Story</a>
                  </Link>
                  <Link href="/recipe" className="nav-link">
                    <a className="nav-link">Recipes</a>
                  </Link>
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
