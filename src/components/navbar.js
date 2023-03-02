import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsSearch} from 'react-icons/bs';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./navbar.css"

function Navibar() {
  return (
    <Navbar className='Navbar' expand="lg">
      <Container fluid>
        <Navbar.Brand id='navname'>Ariya Labs</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            id='navlinks'
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link id='home' href="/home">Home</Nav.Link>
            <Nav.Link id='doctors' href="/doctor">Doctors</Nav.Link>
            <Nav.Link id='channels' href="channel">Channels</Nav.Link>
            <Nav.Link id='pricing' href="/pricing">Pricing</Nav.Link>
            <Nav.Link id='abouts' href="#action2">About_us</Nav.Link>
            <Nav.Link id='service' href="/services">Service</Nav.Link>
            
            
          </Nav>
          <Form id='form' >
            <input id='search' type='search' placeholder='  search here'/>
           
            <Button ><BsSearch id='icon'/></Button>
          </Form>
          <img/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;