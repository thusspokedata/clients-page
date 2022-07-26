import React from "react";

import { Button, Card } from "react-bootstrap";

const ShowRestaurants = ({ restaurants }) => {
  return (
    <>
      {restaurants ? (
        <div>
          {restaurants.map((item, i) => (
            <>
              <Card style={{ width: "30rem" }} key={item._id} className="mt-3">
                <Card.Img
                  variant="top"
                  src={item.imageUrl}
                  alt={`picture restaurant ${item.restoName}`}
                />
                <Card.Body>
                  <Card.Title className="text-capitalize">
                    {item.restoName}
                  </Card.Title>
                  <Card.Text>
                    Address: {item.address} {item.addressNumber}
                  </Card.Text>
                  <Card.Text className="text-capitalize">
                    City: {item.city}
                  </Card.Text>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="/restaurant-details">
                    <Button variant="primary">See Restaurant and Menu</Button>
                  </a>
                </Card.Body>
              </Card>
            </>
          ))}
        </div>
      ) : (
        <h2>There is not restaurant on our database</h2>
      )}
    </>
  );
};

export default ShowRestaurants;
