import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="bg-primary text-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="heading-2 text-white">
          My<span className="font-bold"> Projects</span>
        </h2>
        <div className="flex flex-wrap md:flex-nowrap items-start justify-evenly gap-4">
          <Link
            href={"/404-pages"}
            className="cursor-pointer flex flex-col gap-4 items-center w-full md:w-1/3"
          >
            <Image
              src={"/project-404.png"}
              width={343}
              height={397}
              alt="project-404"
              className="rounded-md h-96 object-cover object-center"
            />
            <h3 className="heading-3">404 Pages</h3> 
          </Link>
          <Link
            href={"https://www.emma-sleep.com.sg/"}
            className="cursor-pointer flex flex-col gap-4 items-center w-fsull md:w-1/3"
          >
            <Image
              src={"/project-emma-sleep-singapore.png"}
              width={343}
              height={397}
              alt="project-404"
              className="rounded-md h-96 object-cover object-center"
            />
            <h3 className="heading-3">Emma Shopify</h3>
          </Link>
          <Link
            href={
              "https://medium.com/dwarves-design/https-medium-com-dwarves-design-sol-life-like-prototype-with-protopie-ad7931ace57a"
            }
            className="cursor-pointer flex flex-col gap-4 items-center w-full md:w-1/3"
          >
            <Image
              src={"/project-sol.png"}
              width={343}
              height={397}
              alt="project-404"
              className="rounded-md h-96 object-cover object-center"
            />
            <h3 className="heading-3">Sol - Travel Planning App</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
