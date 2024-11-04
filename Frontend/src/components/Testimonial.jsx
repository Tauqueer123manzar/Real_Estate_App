import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Happy Homeowner',
    testimonial: "Buying a house was never this easy! The platform helped me find my dream home in just a few clicks.",
    img: 'https://cdn-icons-png.flaticon.com/128/6813/6813541.png',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Satisfied Investor',
    testimonial: "Amazing service! I was able to find profitable properties in great locations without any hassle.",
    img: "https://cdn-icons-png.flaticon.com/128/6813/6813541.png",
  },
  {
    id: 3,
    name: 'Alex Johnson',
    title: 'New Resident',
    testimonial: "From browsing to closing, everything was smooth and transparent. Highly recommend this platform!",
    img: 'https://cdn-icons-png.flaticon.com/128/6813/6813541.png',
  },
];

const Testimonial = () => {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <p className='text-center'>A fantastic platform that made property investment easy and efficient. <br></br> I found multiple lucrative options and had all the data I needed to make informed decisions.<br></br>The support team was proactive and responsive, making it a great experience from start to finish.</p>
      <Carousel indicators={false} controls={false}>
        {testimonialsData.map((testimonial) => (
          <Carousel.Item key={testimonial.id}>
            <Row className="justify-content-center">
              <Col md={6} lg={4}>
                <Card className="text-center shadow-sm" style={{ borderRadius: '15px', border: 'none' }}>
                  <Card.Body>
                    <div className="mb-3">
                      <img
                        src={testimonial.img}
                        alt={`${testimonial.name}`}
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '3px solid #17a2b8'
                        }}
                      />
                    </div>
                    <Card.Text style={{ fontStyle: 'italic', color: '#666' }}>
                      "{testimonial.testimonial}"
                    </Card.Text>
                    <h5 style={{ fontWeight: 'bold' }}>{testimonial.name}</h5>
                    <small className="text-muted">{testimonial.title}</small>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonial;
