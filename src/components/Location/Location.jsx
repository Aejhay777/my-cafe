import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
import './Location.css'
import image1 from '../../assets/loc-image1.png'
import image2 from '../../assets/loc-image2.jpg'
import image3 from '../../assets/loc-image3.jpg'
import image4 from '../../assets/loc-image4.jpg'
import image5 from '../../assets/loc-image5.jpg'
import image6 from '../../assets/loc-image6.jpg'
import image7 from '../../assets/loc-image7.jpg'

function Location() {
  return (
    <div id='location'>
    <Container className='location--container' fluid>
        <Row>
            <Col>
                <h1 className='header--text display-1 text-center'>Where you'll find us...</h1>
            </Col>
        </Row>

        <Row>
            <Col xs={12} md={12} lg={12}>

            <Carousel variant="light">
                
                    <Carousel.Item className='carousel--container'>
                        <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        />
                    </Carousel.Item>


                    <Carousel.Item className='carousel--container'>
                        <img
                        className="d-block w-100"
                        alt="Second slide"
                        src={image2}
                        />
                    </Carousel.Item>


                    <Carousel.Item className='carousel--container'>
                        <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        />               
                    </Carousel.Item>

                    <Carousel.Item className='carousel--container'>
                        <img
                        className="d-block w-100"
                        src={image4}
                        alt="Third slide"
                        />                      
                    </Carousel.Item>

                    <Carousel.Item className='carousel--container'>
                        <img
                        className="d-block w-100"
                        src={image5}
                        alt="Third slide"
                        />                      
                    </Carousel.Item>

                    <Carousel.Item className='carousel--container'>
                        <img
                        className="d-block w-100"
                        src={image6}
                        alt="Third slide"
                        />                      
                    </Carousel.Item>

                    <Carousel.Item className='carousel--container'>
                        <img
                        className="d-block w-100"
                        src={image7}
                        alt="Third slide"
                        />                       
                    </Carousel.Item>

                    </Carousel>
            </Col>
        </Row>
    </Container> 
    </div>
  )
}

export default Location