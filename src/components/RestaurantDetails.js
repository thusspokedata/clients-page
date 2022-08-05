import React from "react";

import { Button, Card } from "react-bootstrap";

const RestaurantDetail = ({ restaurants }) => {
  return (
    <>
      {restaurants ? (
        <div>
          {restaurants.map((item, i) => (
            <>
              <Card style={{ width: "30rem" }} key={item._id} className="mt-3">
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.restoName}</Card.Title>
                  <Card.Text>
                    Address: {item.address} {item.addressNumber}
                  </Card.Text>
                  <Card.Text>City: {item.city}</Card.Text>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">See Restaurant and Menu</Button>
                </Card.Body>
              </Card>
            </>
          ))}
        </div>
      ) : (
        <h2>There restaurant was not loaded</h2>
      )}
    </>
  );
};

export default RestaurantDetail;
