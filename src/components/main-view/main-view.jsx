import { useEffect } from 'react';
import { MoviesList } from '../movies-list/movies-list';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { ProfileView } from '../profile-view/profile-view';
import { ProtectedRoutes } from './protected-routes';
import { Col, Row } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { setMovies } from '../../redux/reducers/movies';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/reducers/user';

export const MainView = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const movies = useSelector((state) => state.movies.list);

  const updateUser = (user) => {
    dispatch(setUser(user));
    localStorage.setItem('user', JSON.stringify(user));
  };

  useEffect(() => {
    if (!token) return;

    fetch('https://myflix-88009.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((doc) => {
          return {
            image: doc.ImagePath,
            id: doc._id,
            title: doc.Title,
            genre: doc.Genre.Name,
            director: doc.Director.Name,
            description: doc.Description,
          };
        });
        dispatch(setMovies(moviesFromApi));
      });
  }, [token]);

  return (
    <BrowserRouter>
      <Row className='font-monospace'>
        <Col className='mb-4'>
          <NavigationBar />
        </Col>
      </Row>
      <Row className='justify-content-md-center font-monospace'>
        <Routes>
          <Route
            path='/signup'
            element={
              <>
                {user ? (
                  <Navigate to='/' />
                ) : (
                  <Col className='m-2' md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path='/login'
            element={
              <>
                {user ? (
                  <Navigate to='/' />
                ) : (
                  <Col className='m-3' md={5}>
                    <LoginView />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path='/movies/:movieId'
            element={
              <ProtectedRoutes>
                {movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView updateUser={updateUser} />
                  </Col>
                )}
              </ProtectedRoutes>
            }
          />
          <Route
            path='/'
            element={
              <ProtectedRoutes>
                        <MoviesList />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoutes>
                  <>
                    <Col>
                      <ProfileView updateUser={updateUser} />
                    </Col>
                  </>
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
