"use client"

import Image from 'next/image';
import logo from '../public/navbar.png';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col items-center justify-center lg:bg-navbar lg:bg-opacity-11 mt-[33px] p-6 rounded-3xl max-w-[1309px] mx-auto w-full">
      <div className="flex items-center justify-between w-full">
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-800 hover:border-gray-800">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center flex-shrink-0 text-white lg:ml-auto">
          <Image src={logo} width={100} height={20} alt='logo' quality={100} />
        </div>
        <div className={`lg:flex lg:items-center lg:justify-between w-full ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#responsive-header" className="block m-2 ml-[50px] lg:inline-block text-white font-bold hover:drop-shadow-xl">
              Home
            </a>
            <a href="#responsive-header" className="block m-2 ml-[55px] lg:inline-block text-white font-bold hover:drop-shadow-xl">
              Team
            </a>
            <a href="#responsive-header" className="block m-2 ml-[55px] lg:inline-block text-white font-bold hover:drop-shadow-xl">
              About Us
            </a>
            <a href="#responsive-header" className="block m-2 ml-[55px] lg:inline-block text-white font-bold hover:drop-shadow-xl">
              Events
            </a>
            <a href="#responsive-header" className="block m-2 ml-[55px] lg:inline-block text-white font-bold hover:drop-shadow-xl">
              Contact Us
            </a>
            <a href="#responsive-header" className="block m-2 ml-[55px] lg:inline-block text-white font-bold hover:drop-shadow-xl">
              Careers
            </a>
            <a href="#responsive-header" className="block m-2 ml-[60px] lg:inline-block text-white font-bold hover:drop-shadow-xl">
              Signup
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;