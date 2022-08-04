import React, { useState, useEffect } from "react";

const ShowRestaurants = ({restaurants}) => {
  return (
    <>
    {restaurants ? 
    (<div>
      {restaurants.map((item, i) => (
      <>
      <main key={item._id}>
        <div className="container">
          <div className="col col-sm-6 d-flex align-items-center justify-content-center">
            <div>
              <div className="mt-5">
                <h2 className="col-12" >{item.restoName}</h2>
              </div>
              <div className="mt-2">
                <img className="col-12 " alt={item.restoName} src={item.imageUrl}></img>
              </div>
              <div className="mt-2">
                <h4 className="col-12" >Address: {item.address} {item.addressNumber}</h4>
              </div>
              <div className="">
                <h4 className="col-12" >City: {item.city}</h4>
              </div>
            </div>
          </div>
        </div>
      </main>
      </>
      
    ))
  }</div>):(
    <h2>There is not restaurant on our database</h2>
  )}

  </>
    )
};

export default ShowRestaurants;
