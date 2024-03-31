import React from "react";
import Image from "next/image";
import IconEmail from "../../../public/icon-email.svg";
import IconLinkedin from "../../../public/icon-linkedin.svg";
import IconGithub from "../../../public/icon-github.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="container mx-auto flex flex-col md:flex-row justify-center items-center px-4 lg:px-28 pb-10 pt-16 gap-8"
    >
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl md:text-4xl leading-8">
          Hello,
          <br /> I&apos;m <span className="font-semibold">Truc Huynh</span>
        </h1>
        <h3 className="text-2xl mt-4">Software Developer</h3>
        <p className="text-neutral-500 mt-8">
          I&apos;m not merely a developer;
          <br />
          I&apos;m a perpetual learner on a quest for the next coding treasure
          chest;
        </p>
        <div className="flex gap-4 item-center mt-8">
          <a
            href="mailto:trucht96@gmail.com"
            className="inline-block p-2 border-2 border-solid border-black rounded-md hover:bg-black"
          >
            <IconEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/truc-huynh-05939317a/"
            target="_blank"
            className="inline-block p-2 border-2 border-solid border-black rounded-md hover:bg-black"
          >
            <IconLinkedin />
          </a>
          <a
            href="https://github.com/trucht"
            target="_blank"
            className="inline-block p-2 border-2 border-solid border-black rounded-md hover:bg-black"
          >
            <IconGithub />
          </a>
        </div>
      </div>
      <Image
        src="/hero-profile.svg"
        alt="alt"
        width={720}
        height={1280}
        className="w-full md:w-1/3 object-center object-cover"
      />
    </section>
  );
};

export default Hero;
