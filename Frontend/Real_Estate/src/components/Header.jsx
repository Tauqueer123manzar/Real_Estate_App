import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow">
          <Container fluid>
            <Navbar.Brand href="/" style={{marginLeft:"20px"}}>
              <span style={{color:"rgb(100 116 139)", fontWeight:"550", fontSize:"30px"}}>Sahand</span>
              <span style={{color:"black", fontWeight:"550", fontSize:"30px"}}>Estate</span>
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
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100%', maxWidth:"100%",textAlign:"center"}}
                navbarScroll
              >
                <Nav.Link href="/" style={{fontSize:"18px",fontWeight:"500"}}>Home</Nav.Link>
                <Nav.Link href="/about" style={{fontSize:"18px",fontWeight:"500"}}>About</Nav.Link>
                <Nav.Link href='/service' style={{fontSize:"18px",fontWeight:"500"}}>Service</Nav.Link>
                <Nav.Link href='/testimonial' style={{fontSize:"18px",fontWeight:"500"}}>Testimonial</Nav.Link>
                <Nav.Link href="/signin" style={{fontSize:"18px",fontWeight:"bold"}}>Signin</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default Header;
