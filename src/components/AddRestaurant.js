import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

import { AuthContext } from "../context/auth";

const CreateRestaurant = () => {
  // const [userData, setUserData] = useState("");

  // bootstrap
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const { user } = useContext(AuthContext);
  // console.log(`this is the userId: ${user._id}`);

  // adding new restaurant states
  const [restoName, setRestoName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [city, setCity] = useState("");
  const [tables, setTables] = useState(0);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestBody = {
      restoName,
      email,
      address,
      addressNumber,
      city,
      adminResto: user._id,
      tables,
    };
    console.log(requestBody);
    const storedToken = localStorage.getItem("authToken");
    axios
      .post("/api/restaurants/add-new", requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        //console.log(response);
        navigate("/admin-page");
      })
      .catch((err) => {
        const errorDescription = err.response.data.message;
        setErrorMessage(errorDescription);
      });

    setRestoName("");
    setEmail("");
    setAddress("");
    setAddressNumber("");
    setCity("");
    setTables(0);
  };

  const handleRestoNameChange = (e) => setRestoName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleAddressNumberChange = (e) => setAddressNumber(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleTablesChange = (e) => setTables(e.target.value);

  return (
    <>
      <Card style={{ width: "28rem" }} className="m-5">
        <Card.Body>
          <Card.Title>Add new restaurant</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <label htmlFor="recipient-name" className="col-form-label mt-2">
                *Restaurant Name:
              </label>
              <Form.Control
                type="text"
                placeholder="Restaurant name"
                name="RestoName"
                value={restoName}
                autoFocus
                onChange={handleRestoNameChange}
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
                className="mt-1"
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
              {/* <label htmlFor="recipient-name" className="col-form-label mt-2">
                
              </label>
              <NumericInput
                min={0}
                max={30}
                value={tables}
                onChange={handleTablesChange}
                type="number"
              /> */}
              <label htmlFor="recipient-name" className="col-form-label mt-2">
                Number of tables:
              </label>
              <Form.Control
                type="number"
                placeholder="Tables"
                value={tables}
                className=""
                name="tables"
                onChange={handleTablesChange}
                autoFocus
              />
              {/* <label htmlFor="recipient-name" className="col-form-label mt-2">
                Add a picture:
              </label> */}
              {/* <Form.Control
                type="file"
                placeholder="Add a picture"
                // value={tables}
                enctype="multipart/form-data"
                className=""
                name="movie-cover-image"
                onChange={handlePhotoChange}
                autoFocus
              /> */}
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
              *Required
            </label>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default CreateRestaurant;
