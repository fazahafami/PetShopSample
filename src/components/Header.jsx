import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../App.css';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="header-footer-bg p-3 sticky-top">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand>
            <Link to={'/'}>  <img
              alt=""
              src="./src/assets/Logo1.png"
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
              <Nav.Link as={Link} to="/shopPets" className="mx-3 nav-link-custom" style={{ fontWeight: 'bold' }}>Shop Pets</Nav.Link>
              <Nav.Link as={Link} to="/shopSupplies" className="mx-3 nav-link-custom" style={{ fontWeight: 'bold' }}>Shop Supplies</Nav.Link>
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
                title={<><FontAwesomeIcon icon={faRightToBracket} /> Sign In</>}
                id="signin-dropdown"
                className="ms-auto ms-2 nav-link-custom"
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