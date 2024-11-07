import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import '../App.css';
import image2 from '../assets/image-2.jpg';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';

const Signin = () => {
  const [formdata, setFormdata] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); 

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message || "Something went wrong!");
        setLoading(false);
        return;
      }

      const data = await res.json();
      toast.success(data.message);
      if (data.success) {
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      toast.error(data.message);
      setError("Failed to sign in. Please try again later.");
      console.error(error);
    }
  };

  return (
    <>
      <div
        className='box'
        style={{
          maxWidth: "100vw",
          height: "90vh",
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className='text-center p-5' style={{ fontSize: "30px", fontWeight: "bold" }}>
          Sign In
        </h1>
        <Container fluid>
          <Form onSubmit={handlesubmit}>
            <Row className='d-flex justify-content-center'>
              <Col md={4} lg={4} xs={12}>
                <Form.Group className='mb-4' controlId='email'>
                  <Form.Control
                    required
                    placeholder='Email'
                    type='email'
                    onChange={handlechange}
                    style={{ width: "100%", height: "45px", margin: "0 auto" }}
                    autoComplete='email'
                  />
                </Form.Group>

                <Form.Group className='mb-4' controlId='password'>
                  <Form.Control
                    required
                    placeholder='Password'
                    type='password'
                    onChange={handlechange}
                    style={{ width: "100%", height: "45px", margin: "0 auto" }}
                    autoComplete='password'
                  />
                </Form.Group>
                <Button variant='secondary' disabled={loading} type='submit' className='w-100'>
                  {loading ? "Loading..." : "SIGN IN"}
                </Button>
                <div className='mt-3'>
                  <p>Don't have an account? <a href='/signup' className='text-decoration-none'>Sign up</a></p>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
