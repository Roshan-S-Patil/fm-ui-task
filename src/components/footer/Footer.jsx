import React from 'react'
import TestimonialCard from '../../subComponents/TestimonialCard'
import "./Footer.css"

let testimonials=[
    {   id:1,
        name: "Cynthia caroline",
        date:"15 July 2023",
        rating:5,
        message:"Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.",
    },
    {id:2,
        name: "Cynthia caroline",
        date:"15 July 2023",
        rating:5,
        message:"Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.",
    },
    {   id:3,
        name: "Cynthia caroline",
        date:"15 July 2023",
        rating:5,
        message:"Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.",
    },
    {   id:4,
        name: "Cynthia caroline",
        date:"15 July 2023",
        rating:5,
        message:"Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.",
    },
]
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">

           {testimonials.map((testimonial) => (
            <TestimonialCard prop={testimonial} key={testimonial.id}/>
           ))}
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-container">
            <div className="contact">
                <h1 className='footer-modeva'>MODEVA</h1>
                <div className="contact-details">
                    <table>
                        <tr>
                            <td>Whatsapp</td>
                            <td>: +62 859 9999 999</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>: hello@modeva.com</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>: Lorem ipsum street Block B Number 08,<br/> Jakarta, Indonesia, 12345</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="menu">
                <h3>Menu</h3>
                <p>Sale</p>
                <p>New Arrivals</p>
                <p>Formal Men</p>
                <p>Formal Woman</p>
                <p>Casual Men</p>
                <p>Casual Woman</p>
            </div>
        <div className="get-help">
                <h3>Get Help</h3>
                <p>FAQ</p>
                <p>Customer Service</p>
                <p>Refund and Return</p>
                <p>Terms and Conditions</p>
                <p>Shipping</p>
            </div>
        <div className="account">
                <h3>Account</h3>
                <p>My Account</p>
                <p>My Orders</p>
                <p>Vouchers and Discounts</p>
                <p>Terms and Conditions</p>
                <p>Shipping</p>
            </div>
        </div>
        <div className="end">
            <p>All Rights reserved</p>
            <p>Copyright 2023 By Modeva Fashion</p>
        </div>
        </div>
    </div>
  )
}

export default Footer