import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth";
import Swal from "sweetalert2";

// Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Login = () => {
  // bootstrap
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  // adding login states
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, verifyStoredToken } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestBody = {
      email,
      password,
    };
    axios
      .post(
        // "https://foodstrap-berlin.herokuapp.com/api/auth/login",
        "/api/auth/login",
        requestBody
      )
      .then((response) => {
        console.log(response.data);
        const token = response.data.authToken;
        // store the token
        Swal.fire("You are loged in");
        storeToken(token);
        verifyStoredToken().then(() => {
          // redirect to qr page
          navigate("/");
        });
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });

    setPassword("");
    setEmail("");
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="formular fw-bold fs-3">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label mt-2">
                *Email:
              </label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                className="mt-1"
                onChange={handleEmailChange}
                autoFocus
              />
              <label htmlFor="recipient-name" className="col-form-label mt-2">
                *Password:
              </label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                className="mt-1"
                onChange={handlePasswordChange}
                autoFocus
              />
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="dark text-white col-6 mx-auto border-0 rounded-pill"
                type="submit"
                onClick={handleClose}
              >
                Login
              </Button>
            </Modal.Footer>
            <label
              htmlFor="recipient-name"
              className="col-form-label text-end mt-0 fs-6 fst-italic"
            >
              <small>*Required</small>
            </label>
          </Form>
        </Modal.Body>
      </Modal>
      {errorMessage && <h5>{errorMessage}</h5>}
    </>
  );
};

export default Login;
