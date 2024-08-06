import React, { useEffect, useState } from "react";
import Pic from "./layer/Pic";
import Logo from "/pnglogo.png";
import Container from "./layer/Container";
import List from "./layer/List";
import cn from "../lib/cn";
import { FaBars } from "react-icons/fa6";

const navData = [
  {
    item: "home",
    path: "/",
  },
  {
    item: "menu",
    path: "/menu",
  },
  {
    item: "our story",
    path: "/our-story",
  },
  {
    item: "contact us",
    path: "/contact",
  },
];

const Nav = () => {
  let [show, setShow] = useState(false);

  
  useEffect(() => {
    const size = () => setShow(window.innerWidth >= 1024);
    size();
    window.addEventListener("resize", size);
    
    return () => window.removeEventListener("resize", size);
  }, []);

  let toggle = () => {
    setShow(!show);
    console.log('ok');
  }
  return (
    <nav className="py-5 mx-4  border-b border-solid border-black relative">
      <Container>
        <div className='flex items-center justify-center md:justify-between'>
          <div className="logo">
            <Pic scr={Logo} className={"w-40"} />
          </div>
          <div className="navItems">
            <FaBars
              className="text-3xl absolute right-0 cursor-pointer lg:hidden"
              onClick={toggle}
            />
            <div className={`${show ? 'block' : 'hidden'}`}>
            <ul
              className={ cn(
                "flex lg:flex-row lg:gap-x-5 lg:static lg:text-3xl lg:w-full absolute z-10 right-0 !sm:-translate-x-full top-full flex-col text-center gap-y-10 text-base",
                'p-5 bg-emerald-400 font-semibold md:bg-transparent rounded-xl text-white md:text-black',
              )}
            >
              {navData.map((data, index) => (
                <List
                  key={index}
                  item={data.item}
                  href={data.path}
                  className={cn(
                    'capitalize md:hover:underline md:hover:text-[#DD2D50] transition-all duration-300',
                    'md:py-2 md:px-3 md:rounded-xl',
                    'border-t border-b border-solid border-black   md:border-none',
                  )}
                />
              ))}
            </ul>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
