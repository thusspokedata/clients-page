import React, { useState, useEffect } from "react";
import axios from "axios";
// import { AuthContext } from "../context/auth";

const ShowRestaurants = () => {
  //   const { user } = useContext(AuthContext);
  const [resto, setResto] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`/api/resto/restaurants`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(`this is restaurant ${response}`);
        setResto(response.data);
      })
      .catch((err) => console.log(err));
  });

  const restaurants = resto.map((item, i) => {
    return (
      <>
        <div className="col-12 d-flex align-items-center justify-content-center mt-5">
          <h2 className="col-3 ">{item.restoName}</h2>
        </div>
        <div className="col-12 d-flex align-items-center justify-content-center mt-5">
          <img className="col-3 " alt={item.restoName}>
            {item.imageUrl}
          </img>
        </div>
      </>
    );
  });

  return (
    <>
      <main className="container">
        <div className="row">{restaurants}</div>
      </main>
    </>
  );
};

export default ShowRestaurants;
