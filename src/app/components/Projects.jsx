import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="bg-primary text-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="heading-2 text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href={"/404-pages"}
            className="cursor-pointer flex flex-col gap-4 items-center"
          >
            <Image
              src={"/project-404.png"}
              width={343}
              height={500}
              alt="project"
              className="rounded-md h-96 object-cover object-center"
            />
            <h3 className="heading-3">404 Pages</h3>
          </Link>
          <Link
            href={"https://www.emma-sleep.com.sg/"}
            className="cursor-pointer flex flex-col gap-4 items-center"
          >
            <Image
              src={"/project-emma.jpeg"}
              width={343}
              height={500}
              alt="project"
              className="rounded-md h-96 object-cover object-center"
            />
            <h3 className="heading-3">Emma</h3>
          </Link>
          <Link
            href={"https://www.behance.net/gallery/79084283/Sol-App"}
            className="cursor-pointer flex flex-col gap-4 items-center"
          >
            <Image
              src={"/project-sol.gif"}
              width={343}
              height={500}
              alt="project"
              className="rounded-md h-96 object-cover object-center"
            />
            <h3 className="heading-3">Sol</h3>
          </Link>
          <Link
            href={"/register"}
            className="cursor-pointer flex flex-col gap-4 items-center"
          >
            <Image
              src={"/project-register.svg"}
              width={343}
              height={500}
              alt="project"
              className="rounded-md h-96 object-cover object-center"
            />
            <h3 className="heading-3">Register Page</h3>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
