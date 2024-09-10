import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import image from '../assets/signup1.jpg';
import '../App.css'
const Signup = () => {
  const [formdata, setFormdata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const naviagte = useNavigate();
  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.id]: e.target.value
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.sucess === false) {
        setError(data.message);
        setLoading(false);
      }
      setLoading(false);
      setError(null);
      naviagte("/signin")
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <>
      <div className='box' style={{
        width: "100vw",
        height: "90vh",
        // backgroundImage: `url(${image})`,
        backgroundColor:'lightcyan',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
        <h1 className='text-center p-5' style={{ fontSize: "30px", fontWeight: "bold" }}>Sign Up</h1>
        <Container fluid>
          <Form onSubmit={handlesubmit}>
            <Row className='d-flex justify-content-center'>
              <Col md={4} lg={4} xs={12}>
                <Form.Group className='mb-4' controlId='username'>
                  <Form.Control
                    required
                    placeholder='Username'
                    type='text'
                    onChange={handlechange}
                    style={{ width: "100%", height: "45px", margin: "0 auto" }}
                    autoComplete="username"
                  />
                </Form.Group>
                <Form.Group className='mb-4' controlId='email'>
                  <Form.Control
                    required
                    placeholder='Email'
                    type='email'
                    onChange={handlechange}
                    style={{ width: "100%", height: "45px", margin: "0 auto" }}
                    autoComplete="email"
                  />
                </Form.Group>
                <Form.Group className='mb-4' controlId='password'>
                  <Form.Control
                    required
                    placeholder='Password'
                    type='password'
                    onChange={handlechange}
                    style={{ width: "100%", height: "45px", margin: '0 auto' }}
                    autoComplete="current-password"
                  />
                </Form.Group>
                <Button variant='secondary' disabled={loading} type='submit' className='w-100'>
                  {loading ? "Loading..." : "SIGN UP"}
                </Button>
                <Button variant='danger' type='button' className='w-100 mt-3'>
                  CONTINUE WITH GOOGLE
                </Button>
                <div>
                  <p className='mt-3 text-dark'>
                    Have an account?<a href='/signin' className='p-2 text-decoration-none'>Sign in</a>
                  </p>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
        {error && <p className='text-danger text-center mt-4'>{error}</p>}
      </div>
    </>
  )
}

export default Signup;
