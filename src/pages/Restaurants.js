import React, { useState, useEffect } from "react";
import ShowRestaurants from "../components/Restaurants";
import axios from "axios";

function Resto() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`/api/resto/restaurants`, 
      {
        headers: { Authorization: `Bearer ${storedToken}` },
      }
      )
      .then(response => {
        console.log(`this is restaurant ${response}`);
        setRestaurants(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
          <ShowRestaurants restaurants={restaurants}/>
    </>
  );
}

export default Resto;
