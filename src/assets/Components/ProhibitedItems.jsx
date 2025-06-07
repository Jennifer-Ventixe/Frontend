import React from 'react'

const ProhibitedItems = () => {
  return (
    <div className="prohibited-items-wrapper">
    <h1>Prohibited Items</h1>
    <div className="prohibited-items">
        <div className="prohibited-item"> 
            <img src="/public/images/weapon.svg" alt="weapon" />
            <p>Weapons and Dangearous Items</p>
        </div>
        <div className="prohibited-item">
            <img src="/public/images/substance.svg" alt="substance" />
            <p>Illegal Substances</p>
        </div>
        <div className="prohibited-item">
            <img src="/public/images/alcohol.svg" alt="alcohol" />
            <p>Alcohol and Beverages</p>
        </div>
        <div className="prohibited-item">
            <img src="/public/images/nopics.svg" alt="No pictures" />
            <p>Recording Equipment</p>
        </div>
        <div className="prohibited-item">
            <img src="/public/images/hazardousItem.svg" alt="substance" />
            <p>Large or Hazardous Items</p>
        </div>
        <div className="prohibited-item">
            <img src="/public/images/merch.svg" alt="Merchandise" />
            <p>Unauthorized Mechandise</p>
        </div>
          <div className="prohibited-item">
            <img src="/public/images/merch.svg" alt="Merchandise" />
            <p>Unauthorized Mechandise</p>
        </div>
        <div className="prohibited-item">
            <img src="/public/images/noice.svg" alt="pets" />
            <p>Noise Makers and Disruptive Items</p>
        </div>
        <div className="prohibited-item">
            <img src="/public/images/bicycle.svg" alt="bicycle" />
            <p>Bicycles, Skateboards, or Hoverboards</p>
        </div>
        <div className="prohibited-item">
            <img src="/public/images/basket.svg" alt="cooler" />
            <p>Coolers or Picnic Baskets</p>
        </div>
        <div className="prohibited-item">
            <img src="/public/images/umbrella.svg" alt="umbrella" />
            <p>Umbrella or Large Parasols</p>
        </div>
        <div className="prohibited-item">
            <img src="/public/images/camping.svg" alt="camping" />
            <p>Camping Gear</p>
        </div>
    </div>
    </div>
  )
}

export default ProhibitedItems