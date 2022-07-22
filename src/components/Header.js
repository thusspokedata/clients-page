import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/clientAuth";

// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">ClientsPage</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {isLoggedIn ? (
            <>
              <Nav className="me-auto">
                <Nav.Link href="#features">Menu</Nav.Link>
                <Nav.Link href="/">QR</Nav.Link>
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
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link eventKey={2} href="/login">
                  Login
                </Nav.Link>
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
