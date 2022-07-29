import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

const AddProduct = () => {
  // bootstrap
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  // adding newbeer states
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [adminResto, setAdminResto] = useState("");

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  //console.log(`this is the userId: ${user._id}`);

  let productTypes = ["meat", "fish", "vegetarian", "vegan"];
  const pTypes = productTypes.map((productType, i) => {
    return (
      <option value={productType} key={i}>
        {productType}
      </option>
    );
  });

  let categoryTypes = ["dish", "drink", "dessert"];
  const cTypes = categoryTypes.map((categoryType, i) => {
    return (
      <option value={categoryType} key={i}>
        {categoryType}
      </option>
    );
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestBody = {
      productName,
      productType,
      category,
      description,
      adminResto,
      price,
      adminResto: user._id,
    };

    console.log(requestBody);
    axios
      .post(
        "https://foodstrap-berlin.herokuapp.com/api/products/add-new",
        // "/api/products/add-new",
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

    setProductName("");
    setProductType("");
    setCategory("");
    setDescription("");
    setAdminResto("");
    setPrice("");
  };

  const handleProductNameChange = (e) => setProductName(e.target.value);
  const handleProductTypeChange = (e) => setProductType(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);

  return (
    <>
      <Card style={{ width: "28rem" }} className="m-5">
        <Card.Body>
          <Card.Title className="titleCard ">Add a new product</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <label htmlFor="recipient-name" className="col-form-label mt-2">
                *Product:
              </label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={productName}
                autoFocus
                onChange={handleProductNameChange}
              />
              <label className="mt-3" htmlFor="pet-select">
                Product Type:
              </label>
              <select
                className="m-2 btn btn-dark btn-sm text-white"
                name="productTypes"
                id="productTypes"
                onChange={handleProductTypeChange}
              >
                {pTypes}
              </select>
              <label htmlFor="recipient-name" className="col-form-label mt-2">
                Category:
              </label>
              <select
                className="m-2 btn btn-dark btn-sm text-white"
                name="category"
                id="category"
                onChange={handleCategoryChange}
              >
                {cTypes}
              </select>
              <label className="mt-3" htmlFor="pet-select">
                Description
              </label>
              <Form.Control
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                autoFocus
                onChange={handleDescriptionChange}
              />
              <label className="mt-3" htmlFor="pet-select">
                Price:
              </label>
              <Form.Control
                type="number"
                placeholder="Price"
                name="price"
                value={price}
                autoFocus
                onChange={handlePriceChange}
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
              *Required
            </label>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddProduct;
