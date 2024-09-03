import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container,Row,Col} from 'react-bootstrap';
import '../App.css'
import Signin from './Signin';
const Signup = () => {
  return (
   <>
   <div className='box' style={{width:"100vw",height:"90vh"}}>
    <h1 className='text-center p-5' style={{fontSize:"30px",fontWeight:"bold"}}>Sign Up</h1>
    <Container fluid>
      <Form>
        <Row className='d-flex justify-content-center'>
          <Col md={4} lg={4} xs={12}>
             <Form.Group className='mb-4' controlId='username'>
                <Form.Control
                 required
                 placeholder='Username'
                 type='text'
                 style={{width:"100%",height:"45px",margin:"0 auto"}}
                 >
                </Form.Control>
             </Form.Group>
             <Form.Group className='mb-4' controlId='email'>
                <Form.Control
                 required
                 placeholder='Email'
                 type='email'
                 style={{width:"100%",height:"45px",margin:"0 auto"}}
                 >
                </Form.Control>
             </Form.Group>
             <Form.Group className='mb-4' controlId='password'>
                <Form.Control
                 required
                 placeholder='Password'
                 type='password'
                 style={{width:"100%",height:"45px",margin:'0 auto'}}
                 >
                </Form.Control>
             </Form.Group>
             <Button variant='secondary' type='submit' className='w-100'>
                 SIGN UP
             </Button>
             <Button variant='danger' type='submit' className='w-100 mt-3'>
                 CONTINUE WITH GOOGLE
             </Button>
          </Col>
        </Row>
      </Form>
      <p className='text-center mt-3' style={{fontWeight:"bold"}}>
      Have an account?<a href='/signin' className='p-2 text-decoration-none'>Sign in</a></p>
    </Container>
    </div>
   </>

  )
}

export default Signup
