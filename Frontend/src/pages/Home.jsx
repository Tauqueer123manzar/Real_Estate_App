import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import image2 from '../assets/real-estate.jpg'
import map from '../assets/india-map.jpg'
import Footer from '../components/Footer'
import 'animate.css';
const Home = () => {
  return (
    <div style={{maxWidth:"100vw",maxHeight:"200vh"}}>
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
        <h1 className='m-5 text-light animate__animated animate__fadeInLeft' style={{fontSize:"65px"}}>Discover Your Dream Property</h1>
            <p className='m-5 text-white animate__animated animate__fadeInLeft' style={{fontFamily:"initial"}}>
              Explore the best listings of homes, apartments, and villas. Find the perfect property
              that fits your needs, whether you’re looking to buy, sell, or rent.
              Our platform offers powerful search tools to help you quickly find properties
               that meet your criteria. From location and price to amenities and nearby attractions.
            </p>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </div>
  )
}

export default Home
