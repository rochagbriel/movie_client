import { MovieCard } from "../movie-card/movie-card";
import { Row, Col } from "react-bootstrap";

export const SimilarMovies = ({movies, movie}) => {
    let similarMovies = movies.filter((m) => movie.genre === m.genre && m !== movie)

    return (
        <>
            <h3 className="mt-4 pt-4 mb-3 text-primary">
                        Recomended for you:
            </h3>
            <Row className="bg-light p-4 rounded-3 mb-5">
                {similarMovies.map((movie) => (
                    <Col className="mb-4 justify-content-center" 
                            key={movie.id}
                            xxl={4} xl={6} lg={12} md={12} xs={12}
                            >
                        <MovieCard movie={movie} />
                    </Col>
                ))}
            </Row>
        </>
    )
}
