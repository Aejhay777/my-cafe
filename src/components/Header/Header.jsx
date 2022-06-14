import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'
import {CgMenuGridR} from 'react-icons/cg'

function Header() {
  return (
    <>
<Navbar expand="lg" fixed="top" className='Navbar'>
  <Container>
  <Navbar.Brand href="#"><img src={logo} className='logo'/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"><CgMenuGridR className='toggle'/></Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto"> 
        <Nav.Link href="#home"><p className='links'>Home</p></Nav.Link>
        <Nav.Link href="#about"><p className='links'>About</p></Nav.Link>
        <Nav.Link href="#best-sellers"><p className='links'>Best-Sellers</p></Nav.Link>
        <Nav.Link href="#location"><p className='links'>Location</p></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Header