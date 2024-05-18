const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 px-4">
      <div className="container w-full md:w-2/3 mx-auto flex flex-wrap flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16">
        <h2 className="text-black text-2xl lg:text-4xl text-center">
          Let&apos;s link up for something special
        </h2>
        <p className="text-base text-neutral-500 text-center">
          I aim to push the limits of innovation by developing highly engaging,
          user-friendly, and memorable software solutions, while continually
          expanding my knowledge and skills in the field of software
          development.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-stretch">
          <a
            href="mailto:trucht96@gmail.com"
            className="relative inline-block px-4 py-2 font-semibold group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white flex justify-center items-center gap-4">
              trucht96@gmail.com
            </span>
          </a>
          <a
            href="tel:+84972352410"
            className="relative inline-block px-4 py-2 font-semibold group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white flex justify-center items-center gap-4">
              +84 972 35 2410
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/truc-huynh-05939317a/"
            className="relative inline-block px-4 py-2 font-semibold group"
            download
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white flex justify-center items-center gap-4">
              Linkedin
            </span>
          </a>

          <a
            href="https://github.com/trucht"
            className="relative inline-block px-4 py-2 font-semibold group"
            download
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white flex justify-center items-center gap-4">
              Github
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
