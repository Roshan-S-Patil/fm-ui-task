import React from 'react'
import cross from "../../assets/Union.png"
import './Topbar.css'
const Topbar = () => {
  return (
    <div className='sticky-bar'>
        <p>Discount 20% For New Member, <span className="topbar-bold-text" style={{fontWeight:"700"}}>ONLY FOR TODAY!!</span></p>
        <img src={cross} alt='cross' className="topbar-cross" style={{position:"absolute",right:0,marginRight:"20px"}}/>
      </div>
  )
}

export default Topbar