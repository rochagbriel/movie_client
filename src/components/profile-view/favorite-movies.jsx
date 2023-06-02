import { MovieCard } from '../movie-card/movie-card';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const FavoriteMovies = ({ user }) => {
  const movies = useSelector((state) => state.movies.list);
  let favoriteMovies = movies.filter((movie) =>
    user.FavoriteMovies.includes(movie.id)
  );

  return (
    <>
      <h3 className='mt-4 pt-4 mb-3 text-primary'>Your favorite movies:</h3>
      <Row>
        {favoriteMovies.map((movie) => (
          <Col
            className='mb-4 mx-auto'
            key={movie.id}
            xxl={3}
            xl={4}
            lg={4}
            md={6}
            xs={12}
          >
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  );
};
