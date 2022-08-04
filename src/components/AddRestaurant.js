import React, { useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

// Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

import { AuthContext } from "../context/auth";

const CreateRestaurant = () => {
  // bootstrap
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  // adding new restaurant states
  const [restoName, setRestoName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [city, setCity] = useState("");
  const [tables, setTables] = useState(0);
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "final-project");
    data.append("cloud_name", "thusspokedata");
    fetch("https://api.cloudinary.com/v1_1/thusspokedata/image/upload", {
      method: "post",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        const requestBody = {
          restoName,
          email,
          address,
          addressNumber,
          city,
          adminResto: user._id,
          tables,
          imageUrl: data.url,
        };
        const storedToken = localStorage.getItem("authToken");
        axios
          .post(
            // "https://foodstrap-berlin.herokuapp.com/api/restaurants/add-new",
            "/api/resto/add-new",
            requestBody,
            {
              headers: { Authorization: `Bearer ${storedToken}` },
            }
          )
          .then((response) => {
            Swal.fire("Restaurant added");
            console.log(response);
            navigate("/admin-page");
          });
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
    setImage("");
  };

  return (
    <>
      <Card style={{ width: "28rem" }} className="m-5">
        <Card.Body>
          <Card.Title className="titleCard">Add new restaurant</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 col-form-label">
              <label htmlFor="recipient-name" className="col-form-label mt-2">
                *Restaurant Name:
              </label>
              <Form.Control
                type="text"
                placeholder="Restaurant name"
                name="RestoName"
                value={restoName}
                className="mt-1"
                autoFocus
                onChange={(e) => setRestoName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setAddress(e.target.value)}
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
                onChange={(e) => setAddressNumber(e.target.value)}
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
                onChange={(e) => setCity(e.target.value)}
                autoFocus
              />
              <label htmlFor="recipient-name" className="col-form-label mt-2">
                Number of tables:
              </label>
              <Form.Control
                type="number"
                placeholder="Tables"
                value={tables}
                className=""
                name="tables"
                // onChange={handleTablesChange}
                onChange={(e) => setTables(e.target.value)}
                autoFocus
              />
              <label className="mt-3" htmlFor="pet-select">
                Image:
              </label>
              <Form.Control
                type="file"
                placeholder="Add an Image"
                autoFocus
                // value={image}
                className="mt-1"
                onChange={(e) => setImage(e.target.files[0])}
              />
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

export default CreateRestaurant;
