import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="sticky-top"
      className="p-3 navbar-custom"
    >
      <Container className="">
        <Navbar.Brand href="/">ClientsPage</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {isLoggedIn ? (
            <>
              <Nav className="me-auto align-items-center">
                <Nav.Link href="/admin-page">Admin Profile</Nav.Link>
                <Nav.Link href="/qr">QR</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link onClick={logoutUser} href="/login">
                  Log Out
                </Nav.Link>
              </Nav>
            </>
          ) : (
            <>
              <Nav>
                <Nav.Link href="/login">Already an account? Login</Nav.Link>
                <Nav.Link href="/signup">Not an account? Sign Up</Nav.Link>
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
