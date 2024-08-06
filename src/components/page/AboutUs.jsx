import React, { useEffect } from 'react'
import Container from '../layer/Container'
import Img3 from '/img3.jpg'
import Img4 from '/img4.jpg'
import PageTitle from '../layer/PageTitle'

const AboutUs = () => {
    return (
    <div className='py-5 '>
      <PageTitle title={'Our Story ‖ Juicy Mama'}/>
      <Container>
      <p className='mx-5 my-6 text-center text-2xl md:text-4xl'>Welcome to <span className='font-bold' >Juicy Mama</span>, where freshness meets health in every sip!</p>
      <div className="story text-slate-700">
      <div className="para1 flex flex-col-reverse">
        <div className="txt my-2">
            <p className='my-2 mx-3 text-justify text-lg md:text-2xl leading-8 tracking-wide' >At Juicy Mama, we believe that everyone deserves access to the best and healthiest juices without breaking the bank. Our journey began with a simple mission: to provide our community with fresh, delicious, and nutritious juices at affordable prices. We are passionate about promoting a healthy lifestyle and are committed to using only the freshest ingredients in all our beverages.</p>
            <p className='my-2 mx-3 text-justify text-lg md:text-2xl leading-8 tracking-wide' >Our juices are crafted with care, using a blend of locally-sourced fruits and vegetables to ensure maximum flavor and nutritional value. Each glass is packed with essential vitamins, minerals, and antioxidants, making it not just a drink but a boost for your overall well-being.</p>
        </div>
        <div className="img">
            <picture>
                <img src={Img3} alt="img" className='w-3/4 mx-auto' />
            </picture>
        </div>

      </div>
      <div className="para2 md:flex items-center">
        <div className="txt">
            <p  className='my-2 mx-3 text-justify text-lg md:text-2xl leading-8 tracking-wide '>Whether you're looking for a refreshing start to your day, a revitalizing mid-day pick-me-up, or a nutritious post-workout drink, Juicy Mama has got you covered. Our menu features a wide variety of flavors, catering to all tastes and dietary needs, ensuring there's something for everyone.</p>
            <p  className='my-2 mx-3 text-justify text-lg md:text-2xl leading-8 tracking-wide'>Join us at Juicy Mama and embark on a journey towards a healthier, happier you. Come in today and taste the difference that fresh, healthy, and affordable juices can make in your life. We can't wait to serve you!</p>
            <p  className='my-2 mx-3 text-justify text-lg md:text-2xl leading-8 tracking-wide'>Stay fresh, stay healthy, stay Juicy Mama!</p>
        </div>
        <div className="img">
            <picture>
                <img src={Img4} alt="img" className='w-3/4 mx-auto py-3' />
            </picture>
        </div>
      </div>
      </div>
      </Container>
    </div>
  )
}

export default AboutUs
