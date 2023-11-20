"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavLink = ({ href, label }) => {
 return (
  <Link href={href}>
   {label}
  </Link>
 );
};


const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const navLinks = [
  {
   label: "About",
   href: "#about",
  },
  {
   label: "Projects",
   href: "#projects",
  },
  {
   label: "Qualifications",
   href: "#qualifications",
  },
  {
   label: "Contact",
   href: "#contact",
  }
 ]

 return (
  <header className='w-full h-16 bg-white sticky top-0 shadow-lg px-4'>
   <nav className='h-full flex justify-between items-center container mx-auto text-[#595454]'>
    <NavLink href={"/"} label={"trucht"} />
    <div className="menu">
     <ul className="hidden md:flex gap-4">
      {
       navLinks.map((link, index) =>
       (<li key={index} className="font-normal hover:font-semibold text-[#595454]">
        <NavLink href={link.href} label={link.label} />
       </li>)
       )
      }
     </ul>
    </div>
    <button className="md:hidden h-full flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
     {isOpen ?
      <Image src={"/icon-close.svg"} width={20} height={20} alt="menu" />
      :
      <Image src={"/icon-menu.svg"} width={20} height={20} alt="menu" />
     }
    </button>
   </nav>
   <ul className={`md:hidden fixed top-16 left-0 bg-white w-full overflow-hidden duration-700
    ${isOpen ? "h-full" : "h-0"}
    `}>
    {
     navLinks.map((link, index) =>
     (<li key={index} className="font-normal text-[#595454] w-full h-16 flex justify-center items-center" onClick={() => setIsOpen(false)}>
      <NavLink href={link.href} label={link.label} />
     </li>)
     )
    }
   </ul>
  </header>
 )
}

export default Navbar;