"use client"

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
 return (
  <section className='w-full flex justify-center items-center text-white bg-[url("/intro-background.png")] bg-no-repeat bg-cover'>
   <div className="w-full h-[30rem] lg:h-[50rem]">
    <TypeAnimation
     sequence={[
      "Hello, I'm Truc Huynh, a Software Developer.",
      1000,
     ]}
     speed={50}
     repeat={Infinity}
     className={"text-center text-xl md:text-3xl lg:text-5xl pt-10 lg:pt-16 text-[#595454] w-full md:w-2/3 lg:w-1/2 mx-auto leading-relaxed"}
     wrapper={"h1"}
    />
   </div>
  </section>
 )
}

export default Intro;