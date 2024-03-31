"use client";
import React from "react";
import Image from "next/image";

const techSkills = [
  { label: "Javascript", src: "/icon-javascript.svg" },
  { label: "Node.js", src: "/icon-nodejs.svg" },
  { label: "SASS", src: "/icon-sass.svg" },
  { label: "React", src: "/icon-react.svg" },
  { label: "HTML", src: "/icon-html.svg" },
  { label: "CSS", src: "/icon-css.svg" },
  { label: "Tailwind", src: "/icon-tailwindcss.svg" },
  { label: "Bootstrap", src: "/icon-bootstrap.svg" },
  { label: "Git", src: "/icon-git.svg" },
  { label: "Shopify", src: "/icon-shopify.svg" },
  { label: "NodeJS", src: "/icon-nodejs.svg" },
  { label: "Express", src: "/icon-express.svg" },
  { label: "React", src: "/icon-react.svg" },
  { label: "NextJS", src: "/icon-nextjs.svg" },
  { label: "MongoDB", src: "/icon-mongodb.svg" },
  { label: "AWS", src: "/icon-aws.svg" },
];

const About = () => {
  return (
    <section id="skills" className="container mx-auto py-16 px-4">
      <div className="w-full">
        <h2 className="heading-2">
          My <span className="font-bold">Skills</span>
        </h2>
        <ul className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 justify-center">
          {techSkills.map((skill, index) => (
            <li
              key={index}
              className="flex flex-col justify-center items-center gap-4 cursor-default border-2 border-black border-solid p-4 rounded-md aspect-square"
            >
              <Image
                src={skill.src}
                alt="alt"
                width={36}
                height={36}
                className="aspect-square max-w-full"
              />
              <h3 className="text-xl font-bold">{skill.label}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
