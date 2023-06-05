import React from 'react';
import { useSelector } from 'react-redux';
import { MovieCard } from '../movie-card/movie-card';
import { MoviesFilter } from '../movies-filter/movies-filter';
import { Col, Row } from 'react-bootstrap';

export const MoviesList = () => {
  const movies = useSelector((state) => state.movies.list);
  const filter = useSelector((state) => state.movies.filter)
    .trim()
    .toLowerCase();

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter)
  );

  return (
    <>
      <Row className='px-4 pb-3'>
        <MoviesFilter />
      </Row>
      <Row>
        {movies.length === 0 ? (
          <Col>The list is empty</Col>
        ) : (
          filteredMovies.map((movie) => (
            <Col
              className='mb-4'
              key={movie.id}
              xxl={3}
              xl={4}
              lg={4}
              md={6}
              xs={12}
            >
              <MovieCard movie={movie} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};
