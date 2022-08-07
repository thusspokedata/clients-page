import React from "react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Button, Form, Modal } from "react-bootstrap";

const AdminSignup = () => {
  // bootstrap
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  // adding newbeer states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = {
      username,
      password,
      email,
      address,
      addressNumber,
      city,
      role: "admin",
    };
    axios
      .post(
        "https://foodstrap-berlin.herokuapp.com/api/auth/signup",
        // "/api/auth/signup",
        requestBody
      )
      .then((response) => {
        navigate("/signup-login");
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });

    setUsername("");
    setPassword("");
    setEmail("");
    setAddress("");
    setAddressNumber("");
    setCity("");
  };

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleAddressNumberChange = (e) => setAddressNumber(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

  return (
    <>
      <section className="mt-5"></section>
      <section className="mt-5"></section>
      {/* <Button variant="info text-white mx-3 px-5" onClick={handleShow}>
        Sign Up
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <label htmlFor="recipient-name" className="col-form-label mt-2">
                *Username:
              </label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                autoFocus
                onChange={handleUsernameChange}
              />
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
              <label htmlFor="recipient-name" className="col-form-label mt-2">
                Address:
              </label>
              <Form.Control
                type="text"
                placeholder="address"
                value={address}
                className="mt-1"
                name="address"
                onChange={handleAddressChange}
                autoFocus
              />
              <label htmlFor="recipient-name" className="col-form-label mt-2">
                Number:
              </label>
              <Form.Control
                type="text"
                placeholder="addressNumber"
                value={addressNumber}
                name="addressNumber"
                className="mt-0"
                onChange={handleAddressNumberChange}
                autoFocus
              />
              <label htmlFor="recipient-name" className="col-form-label mt-2">
                City:
              </label>
              <Form.Control
                type="text"
                placeholder="City"
                value={city}
                className=""
                name="city"
                onChange={handleCityChange}
                autoFocus
              />
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="info text-white col-6 mx-auto"
                type="submit"
                onClick={handleClose}
              >
                Save Changes
              </Button>
            </Modal.Footer>
            <label
              htmlFor="recipient-name"
              className="col-form-label text-end mt-0 fs-6 fst-italic"
            >
              *Required
            </label>
          </Form>
        </Modal.Body>
      </Modal>
      {errorMessage && <h5>{errorMessage}</h5>}
    </>
  );
};

export default AdminSignup;
