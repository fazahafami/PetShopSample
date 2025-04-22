import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SupplyCard() {
  return (
    <div className='position-relative'>
      <button className='btn'> <FontAwesomeIcon icon={faHeart} className="position-absolute fs-2"
        style={{
          top: '30px',
          right: '10px',
          color: '#873e23',
          cursor: 'pointer',
          backgroundColor: 'white',
          borderRadius: '50%',
          padding: '2px',
          zIndex: '1000'
        }}
        title="Add to Favourites" /></button>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/474x/16/ca/b1/16cab153397fc070d5369635ba891e8d.jpg" style={{ height: '300px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Pedegree</Card.Title>
          <Card.Text className="fw-bold">₹ price</Card.Text>
          <Button className="btn text-white w-100" style={{ backgroundColor: '#EF8714', border: 0 }}>Add to Cart</Button>
        </Card.Body>
      </Card></div>
  )
}

export default SupplyCard