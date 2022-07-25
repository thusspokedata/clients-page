import React from "react";

import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from 'react-bootstrap/Card';

const AddEmployee = () => {
  // bootstrap
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // adding newbeer states
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  let userRoles = ["admin", "waiter", "cooker"];
  const roles = userRoles.map((userrole) => {
    return (
      <option value={userrole}>{userrole}</option>
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
    return token
  }


  const handleSubmit = (event) => {
    event.preventDefault();


    const requestBody = {
      username,
      password: generator(),
      email,
      role,
    };

    console.log(requestBody);
    axios
      .post("http://localhost:5005/api/auth/signup", requestBody)
      .then((response) => {
        //console.log(response);
        Navigate("/add-employee");
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
      <Card style={{ width: '28rem' }} className="m-5" border="info">
      <Card.Body>
        <Card.Title>Add a employee</Card.Title>
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
                className="mt-0"
                onChange={handleEmailChange}
                autoFocus
              />
                <label className="mt-3" htmlFor="pet-select">Please choose an employee role</label>
                <select className="m-2 btn btn-info btn-sm text-white" name="role" id="role-select" onChange={handleRoleChange}>
                
                    {roles}
                </select>
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
        </Card.Body>
      </Card>
    </>
  );
};


export default AddEmployee;