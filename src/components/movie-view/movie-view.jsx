import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

export const MovieView = ({ movies, user, token, updateUser }) => {
    const { movieId } = useParams();

    const movie = movies.find((m) => m.id === movieId);

    const [isFavoriteMovie, setAsFavorite] = useState(
        user.FavoriteMovies.includes(movie.id)
    );

    useEffect(() => {
        setAsFavorite(user.FavoriteMovies.includes(movie.id));
        window.scrollTo(0, 0);
    }, [movieId]);

    const addFavorite = () => {
        fetch(
            `https://myflix-88009.herokuapp.com/users/${user._id}/movies/${movieId}`,
            {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
            }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert("Failed");
                    return false;
                }
            })
            .then((user) => {
                if (user) {
                    alert("Successfully added to favorites");
                    setAsFavorite(true);
                    updateUser(user);
                }
            })
            .catch((e) => {
                alert(e);
            });
    };

    const removeFavorite = () => {
      fetch(`https://myflix-88009.herokuapp.com/users/${user._id}/${movieId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
          if (response.ok) {
              return response.json();
          } else {
              alert("Failed");
              return false;
          }
      })
      .then(user => {
          if (user) {
              alert(`"${movie.title}" was successfully deleted from favorites`);
              setAsFavorite(false);
              updateUser(user);
          }
      })
      .catch(e => {
          alert(e);
      });
  }

    return (
        <>
          <Col>
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
            <Link to={`/`}>
                <Button variant="primary">Back</Button>
            </Link>
              {isFavoriteMovie ? 
                <Button variant="danger" className="ms-2" onClick={removeFavorite}>Remove from favorites</Button>
                :
                <Button variant="success" className="ms-2" onClick={addFavorite}>Add to favorites</Button>
              }
          </Col>
        </>
    );
    
};
