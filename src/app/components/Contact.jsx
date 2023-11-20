import React from 'react';
import Image from 'next/image';

const Contact = () => {
 return (
  <section id="contact" className='bg-[#595454] py-16 px-4'>
   <div className='container mx-auto flex flex-wrap flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16'>
    <Image src="/avatar.jpg" height={150} width={150} alt="avatar" className="rounded-full" />
    <h2 className='text-2xl lg:text-4xl text-white font-semibold'>Connect with me!</h2>
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-stretch">
     <a href="mailto:trucht96@gmail.com" className="relative inline-block px-4 py-2 font-semibold group">
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span className="relative text-black group-hover:text-white flex justify-center items-center gap-4">trucht96@gmail.com</span>
     </a>
     <a href="/Truc-Huynh-Resume.pdf" className="relative inline-block px-4 py-2 font-semibold group" download>
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span className="relative text-black group-hover:text-white flex justify-center items-center gap-4">Download CV</span>
     </a>
     <a href="https://www.linkedin.com/in/truc-huynh-05939317a/" className="relative inline-block px-4 py-2 font-semibold group" download>
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span className="relative text-black group-hover:text-white flex justify-center items-center gap-4">Linkedin</span>
     </a>

     <a href="https://github.com/trucht" className="relative inline-block px-4 py-2 font-semibold group" download>
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span className="relative text-black group-hover:text-white flex justify-center items-center gap-4">Github</span>
     </a>
    </div>
   </div>
  </section >
 )
}

export default Contact