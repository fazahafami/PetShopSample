import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faRightToBracket,faPaw,faBone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../App.css';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Logo from '../assets/Logo1.png'


function Header() {
  return (
    <>
      <Navbar expand="lg" className="header-footer-bg p-3 sticky-top">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand>
            <Link to={'/'}>  <img
              alt=""
              src={Logo}
              width="130"
              height="70"
              className="d-inline-block align-top"
            /></Link>
          </Navbar.Brand>

          {/* Mobile Toggler */}
          <Navbar.Toggle aria-controls="pawmart-navbar" />

          {/* Collapsible Nav Section */}
          <Navbar.Collapse id="pawmart-navbar">
            <Nav className="ms-auto fs-5 d-flex align-items-center">
              <Nav.Link as={Link} to="/shopPets" className="mx-3 nav-link-custom"><FontAwesomeIcon icon={faPaw} flip /> Shop Pets</Nav.Link>
              <Nav.Link as={Link} to="/shopSupplies" className="mx-3 nav-link-custom"><FontAwesomeIcon icon={faBone} bounce /> Shop Supplies</Nav.Link>
              <Nav.Link as={Link} to="/favourites" className="mx-3 nav-link-custom" >
                <OverlayTrigger
                  placement="top" // position the tooltip above the icon
                  overlay={<Tooltip id="tooltip-favorites">Favorites</Tooltip>}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </OverlayTrigger>
              </Nav.Link>

              <Nav.Link as={Link} to="/cart" className="mx-3 nav-link-custom">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="tooltip-cart">Cart</Tooltip>}
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                </OverlayTrigger>
              </Nav.Link>

              {/* Sign In Dropdown pushed to right */}
              <NavDropdown
                title={<span className="nav-link-custom"><FontAwesomeIcon icon={faRightToBracket} /> Sign In</span>}
                id="signin-dropdown"
                className="mx-3"
              >
                <NavDropdown.Item as={Link} to="/Login">Login</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Register">Register</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header