import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
// Bootstrap
import { Button, Form, Modal, Card } from "react-bootstrap";

const AddEmployee = () => {
  // bootstrap
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  // adding newbeer states
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  /////////////// Role input ///////////////////////
  let userRoles = ["admin", "waiter", "cooker"];
  const roles = userRoles.map((userrole, i) => {
    return (
      <option value={userrole} key={i}>
        {userrole}
      </option>
    );
  });

  //////////////// PASSWORD GENERATOR //////////////////////////////
  function generator() {
    const characters =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let token = "";
    for (let i = 0; i < 8; i++) {
      token += characters[Math.floor(Math.random() * characters.length)];
    }
    return token;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestBody = {
      username,
      password: generator(),
      email,
      role,
      adminResto: user._id,
    };

    console.log(requestBody);
    axios
      .post(
        "https://foodstrap-berlin.herokuapp.com/api/auth/signupEmp",
        // "/api/auth/signupEmp",
        requestBody
      )
      .then((response) => {
        //console.log(response);
        navigate("/admin-page");
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });

    setName("");
    setEmail("");
    setRole("");
  };

  const handleUsernameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  return (
    <>
      <Card style={{ width: "28rem" }} className="m-5">
        <Card.Body>
          <Card.Title className="titleCard ">Add an employee</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
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
              <label className="mt-3" htmlFor="pet-select">
                Please choose an employee role
              </label>
              <select
                className="m-2 btn btn-dark btn-sm text-white"
                name="role"
                id="role-select"
                onChange={handleRoleChange}
              >
                {roles}
              </select>
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="dark text-white col-6 mx-auto"
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

export default AddEmployee;
