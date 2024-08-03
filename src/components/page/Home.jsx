import React from "react";
import Container from "../layer/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Pro from '/prop.png'

const imgData = [
  { path: "/s1.jpg" },
  { path: "/s2.jpg" },
  { path: "/s3.jpg" },
  { path: "/s4.jpg" },
  { path: "/s5.jpg" },
  { path: "/s6.jpg" },
  { path: "/s7.jpg" },
  { path: "/s8.jpg" },
  { path: "/s9.jpg" },
];

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
        <div className="main py-4 ">
          <div
            className=" scale-90  w-full h-96 md:h-[900px] p-10"
            style={{
              backgroundImage: "url('/bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className="text-xl md:text-7xl font-extrabold tracking-wide text-center">
              Crafting Wellness, One Glass at a Time Meet Our Juice Shop.
            </p>
          </div>
          <div className="pt-5 px-3 mx-2 flex justify-center items-center">
            <img src={Pro} alt=""  className="scale-[1.10] md:scale-125"/>
          </div>
          <p className='pt-5  text-center  font-semibold text-3xl text-stone-800-500 mx-2' >Some Clicks of our shop</p>
          <div className="sliderPart w-3/4  md:w-1/2 mx-auto py-3  md:py-5 ">
            <Slider {...settings}>
              {imgData.map((d) => (
                <div className="py-2 h-48 md:h-96 ">
                  <picture>
                    <img
                      src={d.path}
                      alt=""
                      className="object-contain w-full h-full rounded-xl"
                    />
                  </picture>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
