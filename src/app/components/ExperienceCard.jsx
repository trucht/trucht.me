import React from "react";
import Image from "next/image";

function ExperienceCard({ logo, title, duration, desc }) {
  return (
    <div className="text-white p-6 border-solid border border-neutral-500 rounded-lg hover:bg-neutral-800">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
        <div className="inline-flex gap-8">
          <Image src={logo} alt={title} width={32} height={32} />
          <h3 className="grow text-xl md:text-2xl font-semibold">{title}</h3>
        </div>
        <h4 className="w-full md:w-auto text-base font-semibold text-neutral-300 mt-4 md:mt-0">{duration}</h4>
      </div>
      <p className="mt-8 text-neutral-300">{desc}</p>
    </div>
  );
}

export default ExperienceCard;
