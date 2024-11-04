import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import estate from '../assets/estate3.jpg'
import Footer from '../components/Footer';
import { Typewriter } from 'react-simple-typewriter';
import '../App.css';
const Service = () => {
    const services = [
        {
            id: 1,
            title: 'Luxury Apartments',
            image: "https://content.domu.com/styles/global_webp/s3/2024-06/the_row_fulton_market_apartments_10.jpg.webp?VersionId=OQ9XfYExxfWShW9qRY9QsmVUWuV0HQxb&itok=xVK5mx6f",
            description: 'Explore our luxurious apartments with modern amenities and stunning views.',
        },
        {
            id: 2,
            title: 'Family Homes',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxLqOFdEAnYydimkxvJoyxF_SAeSwFAsB0Q&s",
            description: 'Find perfect homes for families with spacious interiors and serene neighborhoods.',
        },
        {
            id: 3,
            title: 'Office Spaces',
            image: "https://www.winnershtriangle.co.uk/wp-content/uploads/2023/06/WT-banner.jpg",
            description: 'Premium office spaces to elevate your business in prime locations.',
        },
        {
            id: 4,
            title: 'Retail Spaces',
            image: "https://www.nashvillesmls.com/uploads/agent-1/creative-ways-to-fill-vacant-retail-spaces-nashville.jpg",
            description: 'Leverage our retail spaces for your business in bustling commercial areas.',
        },
        {
            id: 5,
            title: 'Vacation Homes',
            image: "https://media.architecturaldigest.com/photos/576d98445ea3e586576ec49a/16:9/w_2580,c_limit/luxury-vacation-rental-sites-03.jpg",
            description: 'Escape to beautiful vacation homes for a relaxing getaway.',
        },
        {
            id: 6,
            title: 'Industrial Properties',
            image: 'https://www.co-production.net/images/2024/04/25/Manufacturers-Guide-Industrial-Real-Estate-Mexico.jpg',
            description: 'Ideal industrial properties with easy access to transportation hubs.',
        },
        {
            id: 7,
            title: 'Rentals Properties',
            image: 'https://images1.apartments.com/i2/EfZC3WmfXDxnRDjijIRkg5NilwV2c_LfUmdtxx8Pz7Y/117/benson-lofts---live-the-lifestyle-you-have-sioux-city-ia-interior-photo.jpg',
            description: 'Rentals for your next vacation or business for a relaxing getaway..',
        },
        {
            id: 8,
            title: 'Agricultural Properties',
            image: 'https://plotson.com/wp-content/uploads/2018/06/WhatsApp-Image-2018-06-01-at-3.25.53-PM.jpeg',
            description: 'Agricultural properties for your agricultural needs.',
        },
    ];

    return (
        <Container fluid style={{width:"100%",height:"100%"}}>
        <Row className='mt-3'>
          <Col xs={12} md={6} lg={6}>
            <h1 className='mt-2 p-4' style={{ fontWeight: "700", fontFamily: "initial", fontSize: "45px" }}>
              <Typewriter
                words={['Find Your Dream Home, Where Life Begins!', 'Your Perfect Property Awaits!', 'Explore, Experience, Elevate Your Lifestyle!']}
                loop={0}
                cursor='true'
                cursorstyle='_'
                typespeed={80}
                deletedspeed={50}
                delayspeed={2000}
              />
            </h1>
            <p className='p-4' style={{ fontSize: "22px", fontFamily: "initial" }}>
            Explore a curated selection of properties tailored to fit every lifestyle and budget. Our expert team is dedicated to guiding you every step of the way, ensuring a seamless journey to homeownership.
            </p>
            <h5 className='p-4' style={{ fontFamily: "initial" }}>Explore properties that not only meet your needs but also elevate your lifestyle. From stunning views to modern amenities, we connect you with homes that inspire and invigorate.Real estate is more than just a place to live; it's an investment in your future. Let us help you navigate the market, find lucrative opportunities, and secure your financial well-being.</h5>
            <Button className='btn btn-outline-warning' href='/' style={{ fontWeight: "600", fontSize: "20px", height: "55px", width: "180px", marginLeft: "25px" }}>Explore Now</Button>
          </Col>
          <Col xs={12} md={5} lg={6} className='mb-5'>
            <img src={estate} className="rounded mt-5" alt='property image' width={"100%"} height={"100%"} />
          </Col>
        </Row>

        <h2 className="text-center mt-5" style={{ fontFamily: "initial" }}>Our Real Estate Services</h2>
        <p className="text-center text-muted">Explore the services we offer to make your property journey smooth and successful.</p>
        <Row xs={12} lg={4} md={6} className="g-4">
          {services.map((service) => (
            <Col key={service.id}>
              <Card className="shadow-sm h-100  card-container">
                <Card.Img variant="top" src={service.image} alt={service.title} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
  
        <div className='mt-5'>
          <Footer />
        </div>
      </Container>
    )
}

export default Service
