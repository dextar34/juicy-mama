import React from 'react'
import { TbMilkshake } from "react-icons/tb";
import Container from '../layer/Container';
import Nav from '../Nav';
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div className="">
      <Nav/>
      <div className='flex justify-center items-center mt-[25vh]'>
      
      <Container>
      <div className="text-center">
        <p className='font-black text-6xl'>404</p>
        <div className="flex gap-x-3 items-center capitalize font-semibold text-4xl mt-4">
          <TbMilkshake />
          <p>juice not found</p>
        </div>
        <button className='bg-orange-300 py-2 px-4 rounded-3xl mt-4 text-white hover:text-black transition-all duration-300 font-medium capitalize' >
        <Link to={'/'}>
        go back 
        </Link>
        </button>
      </div>
      </Container>
    </div>
    </div>
  )
}

export default Error
