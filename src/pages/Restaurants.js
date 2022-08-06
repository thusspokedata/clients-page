import React, { useState, useEffect } from "react";
import ShowRestaurants from "../components/Restaurants";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function Resto() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`https://foodstrap-berlin.herokuapp.com/api/resto/restaurants`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(`this is restaurant ${response}`);
        setRestaurants(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main>
        <Container>
          <Row>
            <Col sm={4}>
              <ShowRestaurants restaurants={restaurants} />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Resto;
