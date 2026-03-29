import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//  import NavDropdown from 'react-bootstrap/NavDropdown';


import { NavLink, useNavigate } from "react-router-dom";

function Header(props) {
  const { user, setUser } = props;
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };
  return (
    <Navbar bg="light" variant="light" expand="lg" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={NavLink} to="/">
          📝 To-Do List
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            {user ? <Nav.Link as={NavLink} to="/todo">
              Tasks
            </Nav.Link> : null}

            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact-us">
              Contact
            </Nav.Link>
            {!user ? <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link> : 
            <NavDropdown title={user?.name} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );


}



export default Header