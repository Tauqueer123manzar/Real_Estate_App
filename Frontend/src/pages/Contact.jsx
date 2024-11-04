import React from 'react'
import { Container,Row,Col,Button,Form} from 'react-bootstrap'
import Footer from '../components/Footer';
import Estate from '../assets/estate1.jpg';
const Contact = () => {
  return (
    <>
    <Container fluid style={{width:"100%",height:"100%",margin:"0",padding:"0"}}>
    <div className='box' style={{
                    backgroundImage: `url(${Estate})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    width:"100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    left:"0"
                }}>
    </div>
    <h1  className="text-center mt-4">Contact Us</h1>
    <p className='text-center'>If you have any queries then feel free to contact us</p>
    <p className="text-center text-muted mb-4">
            We’re here to help you with all your real estate needs. Feel free to reach out to us for inquiries, property listings, or any questions you may have.
    </p>
     <div className='d-flex justify-content-center align-items-center'>
     <div className="shadow-lg p-5 bg-white rounded mt-5 message-form d-flex justify-content-center align-items-center" style={{ maxWidth: '800px', width: '100%',height:"95%",marginBottom:"60px"}}>
        <Form className='w-100'>
        <p className='text-center fs-2'>Contact me</p>
          <Row className="m-2">
            <Col lg={6} md={4} sm={12} className='p-3'>
              <Form.Group as={Col} controlId="formfname">
                <Form.Control type="text"
                //   value={firstname}
                //   onChange={(e)=> setFirstName(e.target.value)}
                  placeholder="First name"
                  style={{padding:'10px'}} />
              </Form.Group>
            </Col>

            <Col lg={6} md={4} sm={12} className='p-3'>
              <Form.Group as={Col} controlId="formlname">
                <Form.Control type="text"
                //   value={lastname}
                //   onChange={(e)=> setLastname(e.target.value)}
                  placeholder="Last name"
                  style={{padding:'10px'}} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="m-2">
            <Col lg={6} md={4} sm={12} className='p-3'>
              <Form.Group as={Col} controlId="formemail">
                <Form.Control type='text'
                //   value={email}
                //   onChange={(e)=> setEmail(e.target.value)}
                  placeholder="Email"
                  style={{padding:'10px'}} />
              </Form.Group>
            </Col>

            <Col lg={6} md={4} sm={12} className='p-3'>
              <Form.Group as={Col} controlId="formnumber">
                <Form.Control type='number'
                //   value={phonenumber}
                //   onChange={(e)=> setPhonenumber(e.target.value)}
                  placeholder="Phone Number"
                  style={{padding:'10px'}} />
              </Form.Group>
            </Col>
          </Row>

          <Row className='m-2'>
            <Col lg={12} md={12} sm={12}>
              <Form.Group controlId="textarea">
                <Form.Control
                  as="textarea"
                  rows={8}
                //   value={message}
                //   onChange={(e)=> setMessage(e.target.value)}
                  placeholder='Write a message'
                  style={{padding:'10px'}} />
              </Form.Group>
            </Col>
          </Row>

          <Row className='d-flex justify-content-center p-3'>
            <Col xs='auto'>
              <Button variant='primary' type='submit' style={{ width: "150px" }}>
                Send
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
     </div>
     <Row className="text-center mt-5">
        <Col>
          <p className="text-muted">Email: info@realestate.com | Phone: +123-456-7890</p>
          <p className="text-muted">Address: 123 Real Estate St., Hyderabad, India</p>
        </Col>
    </Row>
     </Container>
     <div className='mt-3 border-top'>
        <Footer/>
      </div>
    </>
  )
}

export default Contact
