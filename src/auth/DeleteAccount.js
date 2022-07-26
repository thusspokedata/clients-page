import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
// Bootstrap
import { Button, Form, Modal, Card } from "react-bootstrap";

const DeleteAccount = () => {
  const { user } = useContext(AuthContext);
  // bootstrap
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  // deleting account
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestBody = {
      email,
      password,
    };
    console.log(requestBody);
    axios
      .post(
        "https://foodstrap-berlin.herokuapp.com/api/auth/delete-account",
        // "/api/auth/delete-account",
        requestBody
      )
      .then((response) => {
        //console.log(response);
        navigate("/");
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });

    setEmail("");
    setPassword("");
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <>
      <Card style={{ width: "28rem" }} className="m-5" border="danger">
        <Card.Body>
          <Card.Title className="titleCard">Delete account</Card.Title>
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
                className="mt-0"
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
                variant="danger text-white col-6 mx-auto"
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
              <small>*Required</small>
            </label>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default DeleteAccount;
