import React from 'react'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form } from 'react-bootstrap'; // 🔧 FIX: Corrected wrong import for Row/Col/Form
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faFacebook, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Footer() {
  return (
    <div className='footer-wrapper '> {/* footer style*/}
      <div className="header-footer-bg pt-4 pb-2 px-3 mt-5 ">
        <Container fluid> {/* 🔧 Set to fluid for full-width responsiveness */}
          <Row>
            <Col md={4} className='mb-4'>
              <Link to={'/'}>
                <img
                  alt="logo"
                  src="./src/assets/Logo1.png"
                  width="130"
                  height="70"
                  className="d-inline-block align-top"
                />
              </Link>
              <p className='mt-3 text-justify'>
                Your one-stop destination for all things furry and fabulous!
                From playful pups to cuddly cats, and toys to treats – we bring love, care,
                and quality to every pawstep. Because every pet deserves the best. 🧡
              </p>
            </Col>

            <Col md={2} className='mb-4'>
              <h5 className='mb-3'>Links</h5>
              <Link to={'/shopPets'}><p>Shop for Pets</p></Link>
              <Link to={'/shopSupplies'}><p>Shop for Supplies</p></Link>
              <Link to={'/favourites'}><p>Favourites</p></Link>
              <Link to={'/cart'}><p>Cart</p></Link>
            </Col>

            <Col md={2} className='mb-4'>
              <h5 className='mb-3'>Our Team</h5>
              <p>Athul C Anu</p>
              <p>Fathima A</p>
              <p>Mohammmad Zeeshan</p>
              <p>Nandana Raveendran</p>
            </Col>

            <Col md={4}>
              <h5 className='mb-3'>Contact Us</h5>
              <Form>
                <Row className='gx-2'>
                  <Col xs={8}>
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      className="mb-2"
                    />
                  </Col>
                  <Col xs={4}>
                    <Button variant="warning" className="w-100">Subscribe</Button>
                  </Col>
                </Row>
              </Form>

              <div className="d-flex gap-3 mt-3 mb-4">
                <FontAwesomeIcon className='fs-4 ms-3' icon={faInstagram} />
                <FontAwesomeIcon className='fs-4 ms-3' icon={faXTwitter} />
                <FontAwesomeIcon className='fs-4 ms-3' icon={faFacebook} />
                <FontAwesomeIcon className='fs-4 ms-3' icon={faWhatsapp} />
                <FontAwesomeIcon className='fs-4 ms-3' icon={faLinkedin} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Footer;
