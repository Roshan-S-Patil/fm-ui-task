import React from 'react'
import './USP.css'
import thumb from "../../assets/Frame 1367.png"
import phone from "../../assets/Frame 1367 (1).png"
import card from "../../assets/Frame 1367 (2).png"
import fast from "../../assets/Frame 1367 (3).png"

const USP = () => {
  return (
    <div className='usp'>
        <div className="satisfaction">
            <div className="satisfaction-container">
            <img src={thumb} alt="thumb" />
            <div>
            <h1>100% Satisfaction Guaranteed</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
            </div>
            </div>
        </div>
        <div className="online">
            <div className="online-container">
            <img src={phone} alt="phone" />
            <div className="online-text-container">
            <h1>24/7 Online Service</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
            </div>
            </div>
        </div>
        <div className="payment">
            <div className="payment-container">
            <img src={card} alt="card" />
            <div>
            <h1>Payment With Secure System</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
            </div>
            </div>
        </div>
        <div className="fast-delivery">
            <div className="fast-delivery-container">
            <img src={fast} alt="fast" />
            <div className="online-text-container">
            <h1>Fast Delivery</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default USP