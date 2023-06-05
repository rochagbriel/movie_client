import { UserInfo } from './user-info';
import { Col, Container } from 'react-bootstrap';
import { UserEdit } from './user-edit';
import { Link } from 'react-router-dom';
import { FavoriteMovies } from './favorite-movies';
import { useSelector } from 'react-redux';
import { handleLogout } from '../handleLogout/handleLogout';

export const ProfileView = ({ updateUser }) => {
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const deleteAccount = () => {
    fetch(`https://myflix-88009.herokuapp.com/users/${user._id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        if (response.ok) {
          alert('Your account has been deleted. Good Bye!');
          handleLogout();
        } else {
          alert('Could not delete account');
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <>
      <Col xxl={4} xl={5} lg={6} md={12} xs={12} className='px-4 text-primary'>
        <UserInfo />
        <UserEdit updateUser={updateUser} />
        <Link
          className='link-danger text-decoration-none w-100 text-end fs-6'
          variant='link-danger'
          type='submit'
          onClick={() => {
            if (
              confirm(
                'Are you sure you want to remove your account from our site?'
              )
            ) {
              deleteAccount();
            }
          }}
        >
          Remove account permanently
        </Link>
      </Col>
      <Container className='bg-light mb-4 px-4 rounded-4'>
        <FavoriteMovies />
      </Container>
    </>
  );
};
