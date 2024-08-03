import React from 'react'
import Logo from "/pnglogo.png";
import Container from './layer/Container';
import Pic from "./layer/Pic";
import { FaFacebookF } from "react-icons/fa";

const iconData = [
   {
    'icon': <FaFacebookF />,
    'path' : 'https://www.facebook.com/JuicyMama01',
   },
]


const Footer = () => {
  return (
    <footer className='py-10 border-t border-black' >
        <Container>
            <div className="main flex flex-col justify-center items-center">
            <div className="img">
                <Pic scr={Logo} className='w-32 scale-90'/>
            </div>
            <div className="icon flex items-center gap-x-4 py-3 text-slate-500">
                {iconData.map((icon,index) => (
                    <div key={index} className=" scale-125 py-2 w-6 h-6 bg-white  flex justify-center items-center rounded-full">
                        <a href={icon.path} target='blank'>
                        {icon.icon}
                        </a>
                    </div>
                ))}
            </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer
