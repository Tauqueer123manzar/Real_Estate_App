import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <Container fluid style={{ maxWidth: "100vw", maxHeight: "100%", backgroundColor: "#00008B", marginBottom: "2px" }}>
            <Row className='d-flex justify-content-center shadow'>
                <Col sm={12} md={6} lg={3}>
                    <h1 className='text-danger mt-5' style={{ fontSize: "45px", fontWeight: "bold", fontFamily: "initial" }}>SahandEstate</h1>
                    <p style={{ fontFamily: "initial",color:"white"}}>We are a leading real estate company dedicated to helping you find your dream home.</p>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <h1 className='text-warning mt-5' style={{ fontSize: "30px", fontWeight: "bold", fontFamily: "initial" }}>COMPANY</h1>
                    <li style={{ listStyle: "none", fontSize: "18px" }}>
                        <a href='/' style={{ textDecoration: "none",color:"white"}}>Home</a>
                    </li>
                    <li style={{ listStyle: "none", fontSize: "18px"}}>
                        <a href='/about' style={{ textDecoration: "none",color:"white"}}>About</a>
                    </li>
                    <li style={{ listStyle: "none", fontSize: "18px"}}>
                        <a href='/signin' style={{ textDecoration: "none",color:"white"}}>Signin</a>
                    </li>
                    <li style={{ listStyle: "none", fontSize: "18px"}}>
                        <a href='/signup' style={{ textDecoration: "none",color:"white"}}>Signup</a>
                    </li>
                    <li style={{ listStyle: "none", fontSize: "18px"}}>
                        <a href='/profile' style={{ textDecoration: "none",color:"white"}}>Profile</a>
                    </li>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <h1 className='text-warning mt-5' style={{ fontSize: "30px", fontWeight: "bold", fontFamily: "initial" }}>CONTACT US</h1>
                    <p style={{ fontSize: "18px",color:"white"}}><MdOutlineEmail style={{ color: "white", fontSize: "20px" }} /> mdtauqueermanzar@gmail.com</p>
                    <p style={{ fontSize: "18px",color:"white"}}><FaPhoneAlt style={{ color: "white", fontSize: "20px" }} /> +91-7549200441</p>
                    <p style={{ fontSize: "18px",color:"white"}}><IoLocationSharp style={{ color: "white", fontSize: "20px" }} /> GachiBowli Hyderabad</p>
                    <p></p>
                    <p></p>
                </Col>
                <Col sm={12} lg={3} md={6}>
                    <h1 className='text-warning mt-5' style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "initial" }}>SOCIAL</h1>
                    <li style={{ listStyle: "none", fontSize: "18px" }}><a href='https://www.facebook.com' style={{ textDecoration: "none" }}><FaFacebook style={{ color: "dark-blue", fontSize: "20px" }} /> Facebook</a></li>
                    <li style={{ listStyle: "none", fontSize: "18px" }}><a href='https://www.instagarm.com' style={{ textDecoration: "none" }}><FaInstagram style={{ color: "red", fontSize: "20px" }} /> Instagram</a></li>
                    <li style={{ listStyle: "none", fontSize: "18px" }}><a href='https://twitter.com' style={{ textDecoration: "none" }}><FaTwitter style={{ color: "black", fontSize: "20px" }} /> Twitter</a></li>
                    <li style={{ listStyle: "none", fontSize: "18px" }}><a href='https://www.linkedin.com' style={{ textDecoration: "none" }}><FaLinkedin style={{ color: "white", fontSize: "20px" }} /> LinkedIn</a></li>
                </Col>
                <p className='text-center mt-2 text-danger'>© 2024 Real Estate Co. All Rights Reserved.</p>
                <p className='text-center text-white'>Created by <a href="https://www.linkedin.com/in/md-tauqueer-manzar-268408233" style={{textDecoration:"none",color:"yellow"}} target="_blank" rel="noopener noreferrer">@Tauqueer Manzar</a></p>
            </Row>
        </Container>
    )
}

export default Footer
