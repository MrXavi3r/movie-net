import React from "react";
import { Card, Col } from "react-bootstrap/";

type Props = {
  image: string
  title: string
  overview: string
}

export const Movie: React.FC<Props> = ({image, title, overview}) => {
  return (
    <Col className="py-2">
      <Card className="bg-dark" border="primary">
        <Card.Body className="p-0">
          {/* insert ternary state to put in base image if props.img === null */}
          <Card.Img
            src={`http://image.tmdb.org/t/p/w185${image}`}
            alt="no-img available"
            variant="top"
          />
          {/* <Card.Title className="text-center">{props.title}</Card.Title> */}
          {/* <Card.Text className="px-2">{props.overview}</Card.Text> */}
        </Card.Body>
      </Card>
    </Col>
  );
}