import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import './Best-sellers.css'
import imaged1 from '../../assets/bestd-1.jpg'
import imaged2 from '../../assets/bestd-2.jpg'
import imaged3 from '../../assets/bestd-3.jpg'
import imagef1 from '../../assets/bestf-1.jpg'
import imagef2 from '../../assets/bestf-2.jpg'
import imagef3 from '../../assets/bestf-3.jpg'

function Best_sellers() {

  return (
    <div id='best_sellers'>
       <Container className='best--container text-center' fluid>

        <Row>
          <Col>
           <h1 className='header--text display-1'> Our Best-Sellers </h1>
          </Col>
        </Row>

       <Row xs={2} md={2} lg={3} className="g-4">
      
              <Col >
                <Card className='card--container'>
                  <Card.Img variant="top" src={imaged1} />
                  <Card.Body>
                    <Card.Title>Hot Latte</Card.Title>             
                  </Card.Body>
                </Card>
              </Col>

              <Col >
                <Card className='card--container'>
                  <Card.Img variant="top" src={imaged2} />
                  <Card.Body>
                    <Card.Title>Mango Frappe</Card.Title>             
                  </Card.Body>
                </Card>
              </Col>

              <Col >
                <Card className='card--container'>
                  <Card.Img variant="top" src={imaged3} />
                  <Card.Body>
                    <Card.Title>Iced-Latte</Card.Title>             
                  </Card.Body>
                </Card>
              </Col>

              <Col >
                <Card className='card--container'>
                  <Card.Img variant="top" src={imagef1} />
                  <Card.Body>
                    <Card.Title>Croissant</Card.Title>             
                  </Card.Body>
                </Card>
              </Col>

              <Col >
                <Card className='card--container'>
                  <Card.Img variant="top" src={imagef2} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>             
                  </Card.Body>
                </Card>
              </Col>

              <Col >
                <Card className='card--container'>
                  <Card.Img variant="top" src={imagef3} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>             
                  </Card.Body>
                </Card>
              </Col>


        </Row>
       </Container>
    </div>
  )
}

export default Best_sellers