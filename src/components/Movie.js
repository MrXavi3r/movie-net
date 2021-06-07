import React from "react";
import { Card, Col } from "react-bootstrap/";

export default function Movie(props) {
  return (
    <Col className="p-0">
      <Card className="bg-dark" border="primary">
        <Card.Body className="p-0">
          {/* <Card.Title className="text-center">{props.title}</Card.Title> */}
          {/* insert ternary state to put in base image if props.img === null */}
          <Card.Img
            src={`http://image.tmdb.org/t/p/w185${props.image}`}
            alt="no-img available"
            variant="top"
            className="w-100"
          />
          {/* <Card.Text className="px-2">{props.overview}</Card.Text> */}
        </Card.Body>
      </Card>
    </Col>
  );
}
