import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import pic1 from '../../assets/about-pic1.jpg'
import pic2 from '../../assets/about-pic2.jpg'
import pic3 from '../../assets/about-pic3.jpg'
import pic4 from '../../assets/about-pic4.jpg'
import './About.css'

function About() {
  return (
    <div id='about'>
        <Container className='about--container text-center' fluid>
            <Row className='display-1' >
                <Col sm={12} md={12} lg={7} className='left-column'>
                    <Image src={pic1} className='pic' thumbnail/>
                    <Image src={pic2} className='pic' thumbnail/>
                    <Image src={pic3} className='pic' thumbnail/>
                    <Image src={pic4} className='pic' thumbnail/>
                </Col>

                <Col sm={12} md={12} lg={5} className='right-column'>
                    <p className='subtext display-1'>The Café</p>
                    <Card className='card'>
                    <Card.Body className='text'>
                    It takes many hands to craft the perfect cup of coffee – 
                    from the farmers who tend to the red-ripe coffee cherries, to the 
                    master roasters who coax the best from every bean, and to the barista 
                    who serves it with care. We are committed to the highest standards of 
                    quality and service, embracing our heritage while innovating to create 
                    new experiences to savor.

                    <br />
                    <br />

                    We like to say that we are not in the coffee business serving people, 
                    but in the people business serving coffee. Our employees – who we call 
                    partners – are at the heart of our Café experience. We are committed 
                    to making our partners proud and investing in their health, well-being and 
                    success and to creating a culture of belonging where everyone is welcome.
                    </Card.Body>
                    </Card>
                </Col>
            
            </Row>
        </Container>
    </div>
  )
}

export default About