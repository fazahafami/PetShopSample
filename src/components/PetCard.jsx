import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card } from 'react-bootstrap'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function PetCard() {
  return (
   <div className='position-relative'>
   <button className='btn'> <FontAwesomeIcon icon={faHeart}  className="position-absolute fs-2"
        style={{
          top: '30px',
          right: '10px',
          color: '#873e23',
          cursor: 'pointer',
          backgroundColor: 'white',
          borderRadius: '50%',
          padding: '2px',
          zIndex:'1000'
        }}
        title="Add to Favourites"/></button>
     <Card style={{ width: '100%' }}>
   <Link to={'/petDetails'}> <Card.Img variant="top" src="https://i.pinimg.com/474x/b5/7e/a2/b57ea27a8a99395a6ae844ca77d18f60.jpg"  style={{ height: '300px', objectFit: 'cover' }}/></Link>
    <Card.Body>
      <Card.Title>Choco</Card.Title>
      <Card.Text>2yrs , Bengal</Card.Text>
    </Card.Body>
  </Card>
   </div>
  )
}

export default PetCard
