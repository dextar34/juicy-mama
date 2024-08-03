import React from 'react'
import Product from '/pro.png';
import Arrow from '/curved-arrow.png';

const ProDetails = () => {
  return (
    <div className="details relative">
      <div className="img md:flex justify-center items-center py-4">
        <img src={Product} alt="" className="scale-75 md:scale-150" />
      </div>
      <div className="arrow">
        <img src={Arrow} alt="" className="scale-[0.25] absolute z-50" />
      </div>

    </div>
  )
}

export default ProDetails
