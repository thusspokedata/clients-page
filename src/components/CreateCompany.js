import React from "react";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from 'react-bootstrap/Card';

const CreateCompany = () => {
  // bootstrap
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  // adding new company states
  const [companyname, setCompanyname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [city, setCity] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate() 

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestBody = {
      companyname,
      email,
      address,
      addressNumber,
      city,
      role: "admin"
    };
    console.log(requestBody);
    axios
      .post("http://localhost:5005/api/company/add-new", requestBody)
      .then((response) => {
        //console.log(response);
        navigate("/create-company");
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });

    setCompanyname("");
    setEmail("");
    setAddress("");
    setAddressNumber("");
    setCity("");
  };

  const handleCompanynameChange = (e) => setCompanyname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleAddressNumberChange = (e) => setAddressNumber(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

  return (
    <>
    <Card style={{ width: '28rem' }} className="m-5" border="info">
      <Card.Body>
        <Card.Title>Add new company</Card.Title>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <label htmlFor="recipient-name" className="col-form-label mt-2">
                *Company Name:
              </label>
              <Form.Control
                type="text"
                placeholder="Company name"
                name="companyname"
                value={companyname}
                autoFocus
                onChange={handleCompanynameChange}
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
              <label htmlFor="recipient-name" className="col-form-label mt-2">
                Address:
              </label>
              <Form.Control
                type="text"
                placeholder="address"
                value={address}
                className="mt-0"
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
      </Card.Body>
    </Card>
    </>
  );
};

export default CreateCompany;
