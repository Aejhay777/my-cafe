import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'


function Home() {
  return (
  <>
    <Container className='home--container' id='home' fluid>
    <Row>
        <Col className='col-md-4'><h1 className='display-1 text-start'>Freshly <br /> Brewed <br /> Everyday!</h1></Col>
        
        <Col className='col-md-8'>
          <div className='subtext'>
        <figure>
                <blockquote class="blockquote">
                  <p>What goes best with a cup of coffee? Another cup.</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  Aejhay <cite title="Source Title">Coffee Bender</cite>
                </figcaption>
        </figure>
          </div>
        </Col>
        
    </Row>
    </Container>
  </>
  )
}

export default Home