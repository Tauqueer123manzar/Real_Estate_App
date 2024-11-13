import React from 'react'
import { Container,Row,Col,Card, Button} from 'react-bootstrap'
import image2 from '../assets/real-estate.jpg'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial';
import 'animate.css';
import '../App.css'
const Home = () => {
  const valuesData = [
  {
    id: 1,
    title: 'Integrity',
    description: 'We uphold honesty and transparency in every aspect of our business.',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq9pvnL9MI-KBaZ1xL76mzYoMCIv31LPSJaw&s"
  },
  {
    id: 2,
    title: 'Innovation',
    description: 'We continuously seek new ways to improve the real estate experience.',
    image:"https://cdn-icons-png.flaticon.com/128/1087/1087840.png"
  },
  {
    id: 3,
    title: 'Customer Commitment',
    description: 'Our clients are our top priority, and we strive to exceed their expectations.',
    image:"https://cdn-icons-png.flaticon.com/128/8898/8898827.png"
  },
  {
    id: 4,
    title: 'Excellence',
    description: 'We aim to deliver the highest quality service in everything we do.',
    image:"https://cdn-icons-png.flaticon.com/128/17805/17805818.png"
  },
];
  return (
    <div style={{maxWidth:"100vw",maxHeight:"100vh"}}>
    <Container fluid
     style={{
          maxWidth: "100vw",
          height:"100vh",
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity:"1"
        }}>
      <Row>
        <Col md={6} lg={5} sm={12}>
        <h1 className='m-5 text-light animate__animated animate__fadeInLeft' style={{fontSize:"65px",fontFamily:"initial",fontWeight:"bold"}}>Discover Your Dream Property</h1>
            <p className='m-5 text-white animate__animated animate__fadeInLeft' style={{fontFamily:"initial"}}>
              Explore the best listings of homes, apartments, and villas. Find the perfect property
              that fits your needs, whether you’re looking to buy, sell, or rent.
              Our platform offers powerful search tools to help you quickly find properties
               that meet your criteria. From location and price to amenities and nearby attractions.
            </p>
            <Button variant='primary' style={{fontSize:"25px",fontFamily:"initial",fontWeight:"bold",borderRadius:"10px",marginLeft:"45px"}} href='/listing'>Let's get Started</Button>
        </Col>
      </Row>
    </Container>

    <Container fluid className="py-5" style={{ backgroundColor: '#f4f4f4' }}>
      <h2 className="text-center mb-5" style={{fontWeight:"bold",fontSize:"40px",fontFamily:"initial"}}>Our Values</h2>
      <p className='text-center' style={{fontStyle:"initial"}}>We prioritize honesty and transparency in every interaction, from the first consultation to closing.</p>
      <Row className="justify-content-center">
        {valuesData.map((value) => (
          <Col md={6} lg={3} key={value.id} className="mb-4">
            <Card className="value-card text-center shadow-sm h-100">
              <Card.Body>
                <div className="icon-container mb-3">
                 <img src={value.image} alt='image' />
                </div>
                <h5 className="value-title">{value.title}</h5>
                <Card.Text className="value-description">{value.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Testimonial/>
      <Footer/>
    </Container>
    </div>
  )
}

export default Home
