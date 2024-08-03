import React from "react";

const ContactInfo = ({icon,info,data}) => {
  return (
    <div>
      <div className="infoIcon flex  items-center gap-x-4 py-5 mx-2 ">
        <div className="icon rounded-full bg-white  w-12 h-12 flex justify-center items-center hover:rotate-[360deg]  transition-all duration-700 ">
          {icon}
        </div>
        <div className="contactInfo text-gray-700">
          <p className="text-3xl capitalize font-bold ">{info}</p>
          <p className="text-lg font-semibold w-[200px] ">{data}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
