import PropTypes from 'prop-types';

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <div
      onClick={() => {
        onMovieClick(movie);
      }}
      >
        {movie.title}
        </div>
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