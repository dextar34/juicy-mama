import React from 'react'
import Container from '../layer/Container'
import Img5 from '/img5.PNG?url' 
import PageTitle from '../layer/PageTitle'
const Menu = () => {
  return (
    <div>
      <PageTitle title={'Menu ‖ Juicy Mama'}/>
      <Container>
        <p className='font-bold text-center capitalize py-5 text-2xl border-b border-black '>have look on our menu</p>
        <picture>
            <img src={Img5} alt="" className='mx-auto my-5' />
        </picture>
      </Container>
    </div>
  )
}

export default Menu
