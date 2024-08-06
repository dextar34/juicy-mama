import React from 'react'
import Container from '../layer/Container'
import { FaPhoneAlt } from "react-icons/fa";
import ContactInfo from '../layer/ContactInfo';
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import PageTitle from '../layer/PageTitle';



const Contact = () => {
  return (
    <div>
      <PageTitle title={'Contact Us ‖ Juicy Mama'}/>
      <Container>
        <div className="main mx-4">
            <div className="contactCard  mt-5 mx-auto max-w-[600px] ">
                  <div className="border-solid border-b border-black mx-6">
                    <p className='font-bold text-4xl py-2 text-center'>Contact Us</p>
                  </div>
                <div className="Contactinfo flex flex-col justify-center items-center">
                  <ContactInfo icon={<FaPhoneAlt />} info='phone' data='01685-303344'/>
                  <ContactInfo icon={<MdOutlineMail />} info='email' data='rakrafi40@gmail.com'/>
                  <ContactInfo icon={<IoLocationOutline />} info='location' data='Tikatuli Garden City, 5 Abhay Das Lane, Dhaka 1203, Dhaka, Bangladesh'/>
                </div>
                <div className="bg-red-300 px-2 h-full w-full">
                </div>
            </div>
            <div className="w-full my-10">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.5979355832466!2d90.42103165023862!3d23.719424759898416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9c6890f7c03%3A0x2d02971eecd60d56!2sJuicy%20Mama!5e0!3m2!1sen!2sbd!4v1722669788413!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
