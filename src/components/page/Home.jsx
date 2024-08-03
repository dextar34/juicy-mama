import React from 'react'
import Container from '../layer/Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const imgData = [
{path:'/s1.jpg'},
{path:'/s2.jpg'},
{path:'/s3.jpg'},
{path:'/s4.jpg'},
{path:'/s5.jpg'},
{path:'/s6.jpg'},
{path:'/s7.jpg'},
{path:'/s8.jpg'},
{path:'/s9.jpg'},
]

const Home = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div>
      <Container>
        <div className="main py-16 ">
          <p className='text-3xl md:text-7xl font-extrabold tracking-wide text-center' >Crafting Wellness, One Glass at a Time Meet Our Juice Shop.</p>
          {/* <p className='pt-10  text-center  font-semibold text-3xl text-blue-500 mx-2' >Some Clicks of our shop</p> */}
          <div className="sliderPart md:w-1/2 md:mx-auto py-2 md:py-5 mx-2">
          <Slider {...settings}>
              {imgData.map((d) =>(
                <div className="py-2 px-4 w-48 h-48 md:h-96 ">
                  <picture>
                      <img src={d.path} alt="" className='object-contain w-full h-full rounded-xl' />
                  </picture>
                </div>
              ))}
              </Slider>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home
