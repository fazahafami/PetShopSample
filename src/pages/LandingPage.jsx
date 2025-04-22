import React, { useState } from 'react';
import { Container, Row, Col, Button, Carousel, Modal, Form } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';

function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="hero">
        <div className='carousel-wrapper'>
          <Carousel>
            {/* Slide 1 */}
            <Carousel.Item>
              <img
                className="d-block w-100 hero-image"
                src="https://i.pinimg.com/736x/be/c9/cc/bec9cc8b9cdbe891f18888067f36b5ab.jpg" // first image
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>Welcome to PawMart</h1>
                <p>Your one-stop shop for all things pets!</p>
                <Link to={'/shopPets'}><Button className="btn cta-btn">Shop Pets</Button></Link>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <img
                className="d-block w-100 hero-image"
                src="https://i.pinimg.com/474x/73/a0/6c/73a06cdef60ae8084364d64701e24d28.jpg" // second image
                alt="Second slide"
              />
              <Carousel.Caption>
                <h1>Adopt a Pet Today</h1>
                <p>Find your new best friend at PawMart!</p>
                <Link to={'/shopPets'}><Button className="btn cta-btn">Adopt Now</Button></Link>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
              <img
                className="d-block w-100 hero-image"
                src="https://i.pinimg.com/474x/83/dc/a4/83dca4efe76a74d77f4015fbe906ea6a.jpg" // third image
                alt="Third slide"
              />
              <Carousel.Caption>
                <h1>Quality Pet Supplies</h1>
                <p>Everything your pet needs in one place.</p>
                <Link to={'/shopSupplies'}><Button className="btn cta-btn">Shop Supplies</Button></Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* About Sections */}
      <section className="about-us py-5" style={{ backgroundColor: '#FBFBEB' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={10} className="text-center">
              <h2 className="mb-4" style={{ color: '#563037' }}>About Us</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                At <strong>PawMart</strong>, we believe pets aren’t just animals—they’re family. That’s why we've built a one-stop destination where pet lovers can find everything they need, all under one roof. Whether you're welcoming a new furry friend into your home or shopping for essentials, we're here to make your journey joyful and stress-free.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                From playful puppies to gentle senior cats, our carefully curated pet collection ensures healthy, happy companions for every kind of household. We also offer high-quality pet supplies—food, toys, grooming gear, and more—handpicked to keep tails wagging and whiskers twitching.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                Our team is passionate about animal welfare and committed to connecting people with pets through responsible practices. When you choose PawMart, you're not just shopping—you’re joining a community that loves, respects, and celebrates the joy that pets bring into our lives.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* review section */}
      <section className="testimonials py-5" style={{ backgroundColor: '#fff7f9' }}>
        <Container fluid>
          <h2 className="text-center mb-5" style={{ color: '#563037' }}>What Our Customers Say</h2>
          <Row className='g-4 p-3 mx-5'>
            <Col md={3} className='p-2'><ReviewCard/></Col>
            <Col md={3} className='p-2'><ReviewCard/></Col>
            <Col md={3} className='p-2'><ReviewCard/></Col>
            <Col md={3} className='p-2'><ReviewCard/></Col>
            <Col md={3} className='p-2'><ReviewCard/></Col>
            <Col md={3} className='p-2'><ReviewCard/></Col>

          </Row>
          <Row className="justify-content-center mt-4">
            <Col md="auto">
              <Button onClick={handleShow} className="cta-btn">
                Write a Review
              </Button>
            </Col>
          </Row>
        </Container>
      </section>



      {/*join the family*/}
      <section className="footer-cta mt-4">
        <Container className="text-center">
          <Link to={'/register'}><Button className="cta-btn">Join Us Today</Button></Link>
        </Container>
      </section>


      {/* Modal for review */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Write a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formReview">
              <Form.Label>Your Review</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Share your experience..." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="cta-btn" onClick={handleClose}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default LandingPage