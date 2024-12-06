import React from 'react'
import star from "../assets/star.png"

const ProductCard = ({prop}) => {
  return (
    <div className="card">
                <div className="rating">
                    <p>4.6</p>
                    <img src={star} alt="star" />
                </div>
                <img src={prop.image} alt="woman1" />
                <div className="woman-card-details">
                    <p>{prop.category}</p>
                    <h1>{prop.name}</h1>
                    <p>{prop.price}</p>
                </div>
            </div>
  )
}

export default ProductCard