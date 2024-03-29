import React from "react";
import Link from "next/link";

const Projects = () => {
 return (
  <section id="projects" className="bg-[#597b6a] h-96 py-16 px-4">
   <div className="container mx-auto">
    <h2 className="text-white text-2xl md:text-4xl mb-10 text-center lg:text-start">Projects</h2>
    <div>
     <Link href={"/404-pages"}>test hihihihi</Link>
    </div>
   </div>
  </section>
 )
}

export default Projects;