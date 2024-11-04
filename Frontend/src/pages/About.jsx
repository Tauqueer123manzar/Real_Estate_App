import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../components/Footer';

const About = () => {
  return (
    <Container fluid className="about-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        {/* Section Header */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="display-4" style={{ fontWeight: 'bold' }}>About Us</h2>
            <p className="lead text-muted">Your Trusted Partner in Real Estate</p>
          </Col>
        </Row>

        {/* Main Content */}
        <Row className="align-items-center">
          {/* Left Column - Text Content */}
          <Col md={6}>
            <h4>Our Mission</h4>
            <p>
              We strive to connect people with their dream properties, whether it’s a family home, a luxury apartment, or a commercial space.
              Our team of experts is committed to delivering an exceptional experience through personalized service, transparency, and professionalism.
            </p>
            <h4>Our Values</h4>
            <p>
              With over a decade of experience, we believe in integrity, trust, and excellence. Our goal is to ensure every transaction is smooth and every client is satisfied.
            </p>
          </Col>

          {/* Right Column - Image */}
          <Col md={6}>
            <img
              src="https://images.ctfassets.net/0gqf8nju6pz6/3w36aYvCCihRoxvfhd5c32/dd185cb2b5bb97153c6feed640262693/real-estate-asset-classes-hero.jpeg"
              alt="Real estate properties"
              className="img-fluid rounded"
            />
          </Col>
        </Row>

        {/* Key Stats Section */}
        <Row className="text-center mt-5">
          <Col md={4}>
            <Card className="border-0">
              <Card.Body>
                <h3>5,000+</h3>
                <p>Properties Sold</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0">
              <Card.Body>
                <h3>10+</h3>
                <p>Years of Experience</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0">
              <Card.Body>
                <h3>1,000+</h3>
                <p>Happy Clients</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
     <div className='mt-5'>
     <Footer/>
     </div>
    </Container>
  );
};

export default About;
