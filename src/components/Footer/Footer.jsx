import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <>
 <MDBFooter className='footer text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <hr />
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='https://www.facebook.com/acoustic.AJ77/' target="_blank" role='button'>
            <FaFacebookSquare className='icons'/>
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://twitter.com/Acoustic_AJ777' target="_blank" role='button'>
            <FaTwitterSquare className='icons'/>
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/aj_santos7/' target="_blank" role='button'>
            <FaInstagramSquare className='icons'/>
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://linkedin.com/in/aljon-david-santos777-114205238' target="_blank" role='button'>
            <FaLinkedin className='icons'/>
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/Aejhay777' target="_blank" role='button'>
            <FaGithubSquare className='icons'/>
          </a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <a className='copyright text-white' href='https://aejhay777.github.io/my-portfolio/'> © Aljon David Santos. All rights reserved. </a>
        
  
      </div>
    </MDBFooter>

    </>
  )
}

export default Footer