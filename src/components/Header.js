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
      className="newColor p-3 navbar-custom"
    >
      <Container className="newColor">
        <Navbar.Brand className="newColor" href="/">
          ClientsPage
        </Navbar.Brand>
        <Navbar.Toggle
          className="newColor"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse className="newColor" id="responsive-navbar-nav">
          {isLoggedIn ? (
            <>
              <Nav className="newColor me-auto align-items-center">
                <Nav.Link className="newColor" href="/create-company">
                  Add your restaurant
                </Nav.Link>
                <Nav.Link className="newColor" href="/">
                  QR
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link
                  className="newColor"
                  onClick={logoutUser}
                  href="/login"
                >
                  Log Out
                </Nav.Link>
              </Nav>
            </>
          ) : (
            <>
              <Nav>
                <Nav.Link className="newColor" href="/login">
                  Already an account? Login
                </Nav.Link>
                <Nav.Link className="newColor" href="/signup">
                  Not an account? Sign Up
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
