import React from "react";
import { Container, Row, CardGroup } from "react-bootstrap/";
import Movie from "./Movie";

export default function MovieList(props) {
  return (
    <Container className="mt-5">
      <Row md={4} xl={6}>
        {props.movies.map((movie) => {
          return (
            <CardGroup className="d-flex">
              <Movie
                key={movie.id}
                title={movie.title}
                image={movie.poster_path}
                overview={movie.overview}
              />
            </CardGroup>
          );
        })}
      </Row>
    </Container>
  );
}
