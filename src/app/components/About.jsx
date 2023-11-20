"use client"
import React from 'react';
import Image from 'next/Image';


const techSkills = [
 "Javascript",
 "Node.js",
 "SASS",
 "React",
 "HTML",
 "CSS",
 "Tailwind",
 "Bootstrap",
 "CLI",
 "Git",
 "Shopify",
]

const About = () => {
 return (
  <div id="about" className="container flex flex-wrap lg:flex-nowrap justify-center items-baseline gap-8 lg:gap-16 py-16 mx-auto px-4 xl:px-0">
   <section className="w-full lg:w-1/2">
    <h2 className='text-[#597b6a] text-2xl md:text-4xl mb-10 text-center lg:text-start'>About me</h2>
    <p className='text-base md:text-xl break-words leading-relaxed text-justify'>
     "Ahoy, fellow netizens! This is Truc, also known as Nina, a front-end voyager navigating the boundless seas of code.
     With 4 years of hoisting sails and exploring HTML islands, my coding journey has only just set sail.
     I'm not merely a developer;
     I'm a perpetual learner on a quest for the next coding treasure chest;"
    </p>
   </section >
   <section className="w-full lg:w-1/2">
   <h2 className='text-[#597b6a] text-2xl md:text-4xl mb-10 text-center lg:text-start'>Technical Skills</h2>
    <ul className="flex flex-wrap gap-6 justify-evenly lg:justify-start">
     {
      techSkills.map((skill, index) => (
       <li key={index} className='block lg:hover:animate-bounce w-max py-2 px-4 border border-[#b4b0ab] rounded shadow-[5px_5px_0px_0px_#b4b0ab] font-semibold text-xl cursor-default	'>
        {skill}
       </li>
      ))
     }
    </ul>
   </section>
  </div >
 )
}

export default About;