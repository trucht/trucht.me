"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-4 flex flex-col md:flex-row flex-nowrap justify-evenly items-center gap-16"
    >
      <Image
        src="/about-me.svg"
        alt="about-me"
        width={320}
        height={366}
        className="max-h-screen md:h-[500px] w-full md:w-2/5"
      />
      <div className="w-full md:w-2/5 py-8">
        <h2 className="heading-2">
          About <span className="font-bold">Me</span>
        </h2>
        <p className="text-neutral-500">
          I&apos;m an enthusiastic Software Developer driven by a passion for
          innovation and a relentless hunger for learning. With foundational
          experience in professional web development, I specialize in JavaScript
          ES6, ReactJS, and Node.js. I thrive on solving complex problems and
          delivering high-quality solutions, always maintaining a keen eye for
          detail and taking a proactive approach to every task.
        </p>
        <p className="text-neutral-500 mt-8">
          Adaptability is one of my core strengths, and I eagerly embrace new
          challenges as opportunities for growth. Committed to continuous
          learning, I stay abreast of industry trends and advancements to ensure
          my skills remain relevant and up-to-date. Collaboration is key in my
          approach, and I actively seek out opportunities to work closely with
          teams to drive successful project outcomes, leveraging my expertise to
          contribute effectively to each endeavor.
        </p>
      </div>
    </section>
  );
};

export default About;
