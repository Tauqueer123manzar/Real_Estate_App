import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow">
          <Container fluid>
            <Navbar.Brand href="/" style={{marginLeft:"20px"}}>
              <span style={{color:"orange", fontWeight:"700", fontSize:"40px"}}>Real</span>
              <span style={{color:"black", fontWeight:"700", fontSize:"40px"}}>Estate</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <div className="d-flex justify-content-center w-100">
                <Form className='d-flex mt-2'>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </div>
              <Nav
                className="mx-auto my-2 my-lg-0 p-1"
                style={{ maxHeight: '100%', maxWidth:"100%",textAlign:"center"}}
                navbarScroll
              >
                <Nav.Link href="/" className='m-2 home' style={{fontSize:"18px",fontWeight:"450"}}>Home</Nav.Link>
                <Nav.Link href="/about" className='m-2 about'style={{fontSize:"18px",fontWeight:"450"}}>About</Nav.Link>
                <Nav.Link href='/service' className='m-2 service' style={{fontSize:"18px",fontWeight:"450"}}>Service</Nav.Link>
                <Nav.Link href="/contact" className='m-2 contact' style={{fontSize:"18px",fontWeight:"450"}}>Contact</Nav.Link>
                <Nav.Link href="/signin" className='m-2 signin' style={{fontSize:"18px",fontWeight:"450"}}>Signin</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default Header;
