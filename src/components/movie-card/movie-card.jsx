import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
    return (
        <Link
            className="text-decoration-none"
            to={`/movies/${encodeURIComponent(movie.id)}`}
        >
            <Card className="h-100" border="light">
                <Card.Img variant="top" src={movie.image} className="border" />
                <Card.Body className="text-center">
                    <Card.Title className="fw-bold">{movie.title}</Card.Title>
                    <Card.Text className="fs-6">{movie.genre}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};

// Props Constraints for the MovieCard
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
        genre: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
    }).isRequired,
};
