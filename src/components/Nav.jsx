import React from "react";
import Pic from "./layer/Pic";
import Logo from "/pnglogo.png";
import Container from "./layer/Container";
import List from "./layer/List";

const navData = [
  {
    item: "home",
    path: "/",
  },
  {
    item: "menu",
    path: "/",
  },
  {
    item: "about us",
    path: "/",
  },
  {
    item: "contact us",
    path: "/",
  },
];

const Nav = () => {
  return (
    <nav className="py-5" >
      <Container>
        <div className="main flex justify-between items-center gap-10">
          <div className="logo">
            <Pic scr={Logo} className={'w-40'} />
          </div>
          <div className="navItems mx-5 relative lg:w-full">
            <ul className="flex flex-col md:flex-row md:justify-around gap-y-10 md:gap-x-5 absolute left-full -translate-x-full top-1/2  md:static" >
              {navData.map((data, index) => (
                <List 
                key={index} 
                item={data.item} 
                href={data.path}
                className={'capitalize  hover:underline transition-all duration-300'} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
