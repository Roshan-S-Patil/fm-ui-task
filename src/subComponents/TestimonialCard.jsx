import React from 'react'
import star from "../assets/star.png"

const TestimonialCard = ({prop}) => {
  return (
    <div className='testimonial-card'>
        <div className="testimonial-card-header">
            <div className="testimonial-card-header-left">
                <div className="profile-pic"></div>
                <div className="details">
                    <p>{prop.name}</p>
                    <p>{prop.date}</p>
                </div>
            </div>
            <div className="testimonial-ratings">
                {Array.apply(null,{length:prop.rating}).map(rating => (<img src={star} alt="star" />))}
            </div>
        </div>
        <p className='message'>{prop.message}</p>
    </div>
  )
}

export default TestimonialCard