import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <Card 
      className='h-100'
      border='primary'
      onClick={() => onMovieClick(movie)}
      style={{ cursor: 'pointer' }}
      >
        <Card.Img
          variant='top' 
          src={movie.image}
          className='border'
        />
        <Card.Body className='text-center'>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.genre}</Card.Text>
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