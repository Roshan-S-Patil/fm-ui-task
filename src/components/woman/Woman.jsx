import React from 'react'
import './Woman.css'
import woman1 from "../../assets/Rectangle 132.png"
import woman2 from "../../assets/Rectangle 132 (1).png"
import woman3 from "../../assets/Rectangle 132 (2).png"
import woman4 from "../../assets/Rectangle 132 (3).png"
import man1 from "../../assets/Rectangle 132 (4).png"
import woman5 from "../../assets/Rectangle 132 (5).png"
import woman6 from "../../assets/Rectangle 132 (6).png"
import man2 from "../../assets/Rectangle 132 (7).png"
import arrow from "../../assets/arrow-small-right.png"
import star from "../../assets/star.png"
import CategoryPage from '../category/CategoryPage'
import ProductCard from '../../subComponents/ProductCard'

const Woman = () => {
    let woman=[
        {   id:"1",
            name:"Product Name",
            category:"Product Category",
            price:"IDR XXX",
            image:woman1
        },
        {id:"2",
            name:"Product Name",
            category:"Product Category",
            price:"IDR XXX",
            image:woman2
        },
        {id:"3",
            name:"Product Name",
            category:"Product Category",
            price:"IDR XXX",
            image:woman3
        },
        {id:"4",
            name:"Product Name",
            category:"Product Category",
            price:"IDR XXX",
            image:woman4
        },
    ]

    const happiness=[
        {id:"5",
            name:"Product Name",
            category:"Product Category",
            price:"IDR XXX",
            image:man1
        },
        {id:"6",
            name:"Product Name",
            category:"Product Category",
            price:"IDR XXX",
            image:woman5
        },
        {id:"7",
            name:"Product Name",
            category:"Product Category",
            price:"IDR XXX",
            image:woman6
        },
        {id:"8",
            name:"Product Name",
            category:"Product Category",
            price:"IDR XXX",
            image:man2
        },
    ]
  return (
    <>
    <div className='woman'>
        <h1 className='woman-heading'>THE BEST DRESS FOR THE BEST WOMAN</h1>
        <div className="woman-cards">
            {woman.map((woman) => (
                <ProductCard prop={woman} key={woman.id}/>
            ))}  
        </div>
        <div className="see-more-btn-container">
        <button className='see-more-btn'>See More</button>
            <img src={arrow} alt="arrow" />
        </div>
    </div>

    {/* Man */}
    <div className='woman'>
        <h1 className='woman-heading'>BEST OUTFIT FOR YOUR HAPPINES </h1>
        <div className="woman-cards">
        {happiness.map((Product) => (
                <ProductCard prop={Product } key={happiness.id}/>
            ))} 
        </div>
        <div className="see-more-btn-container">
        <button className='see-more-btn'>See More</button>
            <img src={arrow} alt="arrow" />
        </div>
    </div>

    </>
  )
}

export default Woman