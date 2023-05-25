import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import myFlixLogo from '../../assets/img/myflix_logo.png'

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar bg='secondary' className='rounded-3' expand='lg' >
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
          <Nav className='me-auto'>
            {!user && (
              <>
                <Nav.Link as={Link} to='/login'>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to='/signup'>
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to='/'>
                  Home
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut} className='ms-lg-auto'>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
