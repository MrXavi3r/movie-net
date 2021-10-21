import React from "react";
import { Container, Row, CardGroup } from "react-bootstrap/";
import {Movie} from "./Movie";

type Props = {
  movies: {
    id: number
    title: string
    poster_path: string
    overview: string
  }[]
}

export const MovieList: React.FC<Props> = ({movies}) => {
  return (
    <Container className="mt-5">
      <Row md={4} xl={6}>
        {movies.map((movie) => {
          return (
            <CardGroup className="d-flex" key={movie.id}>
              <Movie
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
