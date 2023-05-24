import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <Card>
        <Card.Img variant='top' src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.director}</Card.Text>
          <Button onClick={() => onMovieClick(movie)} variant='link'>
            Open
          </Button>
        </Card.Body>
      </Card>
    );
  };

  // Props Constraints for the MovieCard
  MovieCard.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.shape({
        name: PropTypes.string.isRequired
      }),
      genre: PropTypes.shape({
        name: PropTypes.string.isRequired
      })

    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };