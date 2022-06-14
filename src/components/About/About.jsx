import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css'

function About() {
  return (
    <div id='about'>
        <Container className='about--container' fluid>
            <Row>
                <Col>1 of 1</Col>
                <Col>1 of 1</Col>
            </Row>
        </Container>
    </div>
  )
}

export default About