import React, { useState } from 'react'
import PetCard from '../components/PetCard'
import '../App.css'
import Form from 'react-bootstrap/Form';

function ShopPets() {

  return (
    <div className="container-fluid px-0">
      {/* 🐾 Category Banner */}
      <div className="category-banner py-3 d-flex gap-3 flex-wrap shadow-sm">
        <h4 className="ms-4">Choose a Category</h4>
       <div className='px-3 d-flex gap-3'> <button className="btn btn-outline-secondary px-4 py-2 rounded-pill">
          🐶 Dogs
        </button>
        <button className="btn btn-outline-secondary px-4 py-2 rounded-pill">
          🐱 Cats
        </button></div>
      </div>

      <div className="row">
        {/* Aside Filter */}
        <aside className="breed-section col-md-3 mb-4">
          <div className="border-top p-4">
            <h5 className="text-dark ms-2">Filter by Breed</h5>
            <Form>
              <div key={`default-checkbox`} className="mb-3">
                <Form.Check
                  type='checkbox'
                  id='labrador'
                  label='Labrador'
                />
              </div>
            </Form>

          </div>
        </aside>

        {/* Pet Listings */}
        <div className="col-md-9">
          <h4 className="mt-5 ms-2">🐾 Browse Our Adorable Pets</h4>
          <div className="row px-5 pt-4">
            <div className="col-md-3 mb-4">
              <PetCard />
            </div>
            <div className="col-md-3 mb-4">
              <PetCard />
            </div>
            <div className="col-md-3 mb-4">
              <PetCard />
            </div>
            <div className="col-md-3 mb-4">
              <PetCard />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopPets
