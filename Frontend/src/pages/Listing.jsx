import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import residency from '../assets/residency.jpg';
import residency1 from '../assets/residency-1.jpg'

const Listing = () => {
  const listings = [
    {
      title: 'Emerald Residency',
      location: '123, Serene Lane, Colombo 05',
      description: 'Experience luxury living at Emerald Residency, a prestigious address in the heart of Colombo.',
      price: 'LKR 25270000',
      bedrooms: 6,
      bathrooms: 6,
      image:residency
    },
    {
      title: 'Pearl Gardens',
      location: '222, Blossom Street, Nuwara Eliya',
      description: 'Nestled in the hills of Nuwara Eliya, Pearl Gardens offers a picturesque escape.',
      price: 'LKR 38175000',
      bedrooms: 10,
      bathrooms: 5,
      image:residency1
    },
    // Add more listings as needed
  ];

  return (
    <Container fluid>
      <Row className='mt-3'>
        {/* Filter Section */}
        <Col md={3} style={{ padding: '20px', backgroundColor: '#f0f3f5', borderRadius: '8px' }}>
          <h5>Search Term:</h5>
          <Form.Control type="text" placeholder="Search" className="mb-3" />

          <h5>Type:</h5>
          <Form.Check type="checkbox" label="Rent & Sell" />
          <Form.Check type="checkbox" label="Rent" />
          <Form.Check type="checkbox" label="Sell" />
          <Form.Check type="checkbox" label="Offer" className="mb-3" />

          <h5>Amenities:</h5>
          <Form.Check type="checkbox" label="Parking" />
          <Form.Check type="checkbox" label="Furnished" className="mb-3" />

          <h5>Sort By:</h5>
          <Form.Select className="mb-3">
            <option>Price High to Low</option>
            <option>Price Low to High</option>
          </Form.Select>

          <Button variant="dark" block>Search</Button>
        </Col>

        {/* Listing Results Section */}
        <Col md={9}>
          <h3 className="mt-3">Listing Results:</h3>
          <Row>
            {listings.map((listing, index) => (
              <Col md={6} key={index}>
                <Card className="mb-4 shadow-sm" style={{ borderRadius: '10px' }}>
                  <Card.Img variant="top" src={listing.image} width={"200px"} height={"300px"} style={{overflowX:"hidden",overflowY:"hidden"}}/>
                  <Card.Body>
                    <Card.Title>{listing.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{listing.location}</Card.Subtitle>
                    <Card.Text>{listing.description}</Card.Text>
                    <h5 style={{ color: 'green' }}>{listing.price}</h5>
                    <div className="d-flex justify-content-between">
                      <span>🛏️ {listing.bedrooms} Bedrooms</span>
                      <span>🛁 {listing.bathrooms} Bathrooms</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Listing;
