"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-4 flex flex-col lg:flex-row flex-nowrap justify-evenly items-center gap-16 py-8"
    >
      <Image
        src="/about-me-desktop.jpeg"
        alt="about-me"
        width={960}
        height={1280}
        className="object-contain w-full h-auto md:w-1/3 max-w-96 hidden lg:block"
      />
      <Image
        src="/about-me-mobile.jpeg"
        alt="about-me"
        width={960}
        height={1280}
        className="object-contain w-full h-auto md:w-1/3 max-w-96 block lg:hidden"
      />
      <div className="w-full lg:w-2/5 py-8">
        <h2 className="heading-2">About Me</h2>
        <p className="text-neutral-500">
          I&apos;m a passionate Software Developer with a strong drive for
          innovation and continuous learning. With experience in professional
          web development, I specialize in JavaScript ES6, ReactJS, and Node.js.
          I enjoy solving complex problems and delivering high-quality solutions
          with attention to detail.
        </p>
        <p className="text-neutral-500 mt-8">
          Adaptable and eager to embrace new challenges, I stay current with
          industry trends to keep my skills up-to-date. I value collaboration
          and actively seek opportunities to work with teams, contributing
          effectively to achieve successful project outcomes.
        </p>
      </div>
    </section>
  );
};

export default About;
