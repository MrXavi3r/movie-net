import React from "react";
import { Card, Col } from "react-bootstrap/";

export default function Movie(props) {
  return (
      <Col>
        <Card className="mb-3">
          <Card.Body className="p-0">
            {/* <Card.Title text="center">{props.title}</Card.Title> */}
            <Card.Img
              src={`http://image.tmdb.org/t/p/w185${props.image}`}
              alt="no-img available"
              variant="top"
              className="w-100"
            />
            {/* <Card.Text>{props.overview}</Card.Text> */}
          </Card.Body>
        </Card>
      </Col>
  );
}
