import React from 'react'
import image1 from "../../assets/Rectangle 133.png"
import image2 from "../../assets/Rectangle 134.png"
import image3 from "../../assets/Rectangle 133 (1).png"
import './Category.css'

const CategoryPage = () => {
  return (
    <div className='category-page'>
      <div className="image1">
        {/* <img src={image1} alt="image1" /> */}
        <h1>Formal Woman</h1>
        </div>
        <div className="image2">
        <h1>Formal Men</h1>
        {/* <img src={image2} alt="image2" /> */}
        </div>
        <div className="image3">
        <h1>Casual Style</h1>
            {/* <img src={image3} alt="image3" /> */}
        </div>  
    </div>
  )
}

export default CategoryPage