import React from 'react'
import dropdownIcon from "../../assets/chevron-down.png"
import userIcon from "../../assets/user.png"
import cartIcon from "../../assets/shopping-cart.png"
import searchIcon from "../../assets/magnifying-glass.png"
import card1Img from "../../assets/Rectangle 3.png"
import scrollIcon from "../../assets/chevron-double-down.png"
import './Hero.css'

const Hero = () => {
  return (
    <>
        <div className="hero" >
            <header className='hero-header'>
                <div className="hero-header-left">
                <h1 className='logo'><span>M</span>ODEVA</h1>
                </div>
                <div className="hero-header-middle">
                    <div className="catalog-container">
                        <p>Catalog</p>
                        <img src={dropdownIcon} alt="dropdown" />
                    </div>
                    <p>Sale</p>
                    <p>New Arrival</p>
                    <p>About</p>
                </div>
                <div className="hero-header-right">
                    <div className="search-bar">
                        <img src={searchIcon} alt="searchIcon" className='search-icon'/>
                        <input type="text" placeholder='Search' className='search-input'/>
                    </div>
                    <img src={userIcon} alt="userIcon" />
                    <img src={cartIcon} alt="cartIcon" />
                </div>
            </header>
            <div className="hero-middle">
                <p>made in Indonesia, dedicated to Indonesia</p>
                <h1 className="hero-heading">Discover the Art of Dressing Up</h1>
            </div>
            <div className="hero-bottom">
                <div className="hero-bottom-cards-container">
                <div className="hero-cards hero-bottom-card1">
                    <img src={card1Img} alt="card1" className="hero-card-image"/>
                    <div className=" card1-details">
                        <h1>Product Name in Here</h1>
                        <p>IDR 300.000</p>
                        <a href="/">SHOP NOW</a>
                    </div>
                </div>
                <div className="hero-cards hero-bottom-card2">
                <img src={card1Img} alt="card1" className="hero-card-image"/>
                    <div className=" card1-details">
                        <h1>Product Name in Here</h1>
                        <p>IDR 300.000</p>
                        <a href="/">SHOP NOW</a>
                    </div>
                </div>
               
            </div>
            <div className="scroll-text">
                    <p>SCROLL DOWN</p>
                    <img src={scrollIcon} alt="scroll icon" />
                    </div>
        </div>
        </div>
    </>
  )
}

export default Hero