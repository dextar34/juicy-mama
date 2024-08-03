import React from 'react'
import Container from '../layer/Container'
import Img5 from '/img5.PNG?url' 
const Menu = () => {
  return (
    <div>
      <Container>
        <p className='font-bold text-center capitalize pt-10 text-2xl'>have look on our menu</p>
        <picture>
            <img src={Img5} alt="" className='mx-auto my-10' />
        </picture>
      </Container>
    </div>
  )
}

export default Menu
