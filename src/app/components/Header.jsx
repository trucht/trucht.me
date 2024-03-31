"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DownloadCVButton from "@/app/components/DownloadCVButton";

const NavLink = ({ href, label }) => {
  return <Link href={href}>{label}</Link>;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      label: "About Me",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Contact Me",
      href: "#contact",
    },
  ];

  return (
    <header className="w-full h-16 bg-white sticky top-0 z-30 p-4">
      <div className="w-full container mx-auto flex justify-between items-center">
        <Link className="font-bold text-xl" href={"/"}>
          trucht
        </Link>
        <nav className="text-primary">
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="font-normal hover:font-semibold text-primary"
              >
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>
        <DownloadCVButton />
        <button
          className="md:hidden h-full flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <Image src={"/icon-close.svg"} width={20} height={20} alt="menu" />
          ) : (
            <Image src={"/icon-menu.svg"} width={20} height={20} alt="menu" />
          )}
        </button>
      </div>
      <ul
        className={`md:hidden fixed top-16 left-0 bg-white w-full overflow-hidden duration-700 ${
          isOpen ? "h-full" : "h-0"
        }`}
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="font-normal text-primary w-full h-16 flex justify-center items-center"
            onClick={() => setIsOpen(false)}
          >
            <NavLink href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
