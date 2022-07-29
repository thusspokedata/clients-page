import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

// Bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const { isLoggedIn, logoutUser, user } = useContext(AuthContext);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="sticky-top"
      className="newColor p-0 navbar-custom"
    >
      <Container className="newColor p-0">
        <Navbar.Brand className="newColor p-0" href="/">
          ClientsPage
        </Navbar.Brand>
        <Navbar.Toggle
          className="newColor"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse className="newColor p-0" id="responsive-navbar-nav">
          {isLoggedIn ? (
            <>
              <Nav className="newColor me-auto  align-items-center">
                {user.role === "admin" ? (
                  <>
                    <Nav.Link className="newColor" href="/admin-page">
                      Admin Page
                    </Nav.Link>
                    <Nav.Link className="newColor" href="/qr">
                      QR
                    </Nav.Link>
                  </>
                ) : (
                  <Nav.Link className="newColor" href="/qr">
                    QR
                  </Nav.Link>
                )}
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
