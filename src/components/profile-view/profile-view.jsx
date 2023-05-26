import { UserInfo } from "./user-info";
import { Col, Button } from 'react-bootstrap';
import { UserEdit } from "./user-edit";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({user, token, movies, updateUser, onLoggedOut}) => {

    let favoriteMovies = movies.filter(movie => user.FavoriteMovies.includes(movie.id))

    const deleteAccount = () => {

        fetch(`https://myflixapi-11d1.onrender.com/users/${user._id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            if (response.ok) {
                alert("Your account has been deleted. Good Bye!");
                onLoggedOut();
            } else {
                alert("Could not delete account");
            }
        })
        .catch(e => {
            alert(e);
        });
    }

    return (
        <>
            <Col>
                <UserInfo user={user} />
                <UserEdit user={user} token={token} updateUser={updateUser} onLoggedOut={onLoggedOut}/>
                <Button
                    className='mt-5'
                    variant='danger'
                    type='submit'
                    onClick={() => {
                        if (confirm('Are you sure you want to remove your account from our site?')) {
                            deleteAccount();
                        }
                    }}
                >
                    Delete your Account
                </Button>
            </Col>

            <Col md={12}>
                <h3 className="mt-3 mb-3 text-light">Your favorite movies:</h3>
            </Col>
                {favoriteMovies.map(movie => (
            <Col className="mb-4" key={movie.id} xl={2} lg={3} md={4} xs={6}>
                <MovieCard movie={movie} />
            </Col>
            ))}
        </>
    );
}