import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const LunchItem = ({ item }) => {
  const { picture, name, about, price, id } = item;
  return (
    <div className="col-lg-4 text-center">
      <Link className="text-decoration-none text-dark" to={`/fooddetail/${id}`}>
        <CardGroup>
          <Card className="d-flex align-items-center border-0 shadow my-3 p-3 bg-body rounded">
            <Card.Img className="w-75" variant="top" src={picture} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{about}</Card.Text>
              <p className="fw-bolder fs-5">$ {price}</p>
            </Card.Body>
          </Card>
        </CardGroup>
      </Link>
    </div>
  );
};

export default LunchItem;
