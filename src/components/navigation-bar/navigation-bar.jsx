import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import myFlixLogo from '../../assets/img/myflix_logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { setToken, setUser } from '../../redux/reducers/user';
import { handleLogout } from '../handleLogout/handleLogout';


export const NavigationBar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <Navbar bg='secondary' className='rounded-3' expand='lg'>
      <Container>
        <Navbar.Brand to='/'>
          <Image
            src={myFlixLogo}
            width='260'
            height='60'
            className='d-inline-block align-top'
            alt='MyFlix logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            {!user && (
              <>
                <Nav.Link className='link-header-light' as={Link} to='/login'>
                  Login
                </Nav.Link>
                <Nav.Link className='link-header-light' as={Link} to='/signup'>
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link className='link-header-light' as={Link} to='/'>
                  Home
                </Nav.Link>
                <Nav.Link className='link-header-light' as={Link} to='/profile'>
                  Profile
                </Nav.Link>
                <Nav.Link onClick={handleLogout} className='ms-lg-auto'>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
