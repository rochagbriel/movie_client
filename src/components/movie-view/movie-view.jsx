import Button from "react-bootstrap/Button";

export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div>
          <img className="w-100 border" src={movie.image} />
        </div>
        <div>
          <span>Title: </span>
          <span>{movie.title}</span>
        </div>
        <div>
          <span>Genre: </span>
          <span>{movie.genre}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.director}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{movie.description}</span>
        </div>
        <Button onClick={onBackClick}>Back</Button>
      </div>
    );
  };