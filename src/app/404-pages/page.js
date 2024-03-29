"use client"

import Link from "next/link";
import Image from "next/image";
import DarkModeToggler from "@/app/components/DarkModeToggler";

export default function Home() {
 return (
  <div className="h-full w-full bg-[#E7FFF8] dark:bg-[#122638] relative overflow-hidden">
   <div className="h-16 flex items-center justify-between px-8">
    <Link href={"/"} className="text-[#6BB67F dark:text-white text-2xl font-semibold">trucht</Link>
    <DarkModeToggler />
   </div>

   <div className="max-w-[1440px] mx-auto h-full w-full flex dark:hidden gap-4 flex-col md:flex-row items-center justify-evenly md:pb-48 p-4 lg:px-20">
    <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
     <Image src={"/404-light.svg"} alt="404-light" height={469} width={703} className="animate-wave-2" />
     <div className="block w-full mt-16 h-4 bg-[#c5c5c5] rounded-[100%] animate-shadow blur-sm opacity-30">
     </div>
    </div>
    <div className='w-full md:w-1/3 text-center md:text-start'>
     <h1 className="text-5xl lg:text-7xl font-semibold">Oh No!<br />Error 404</h1>
     <p className="text-xl text-[#989898] mt-6">This page doesn’t exist or was removed! We suggest you back to home</p>
     <Link href={"/"} className="inline-block bg-[#6BB67F] text-white px-8 py-4 mt-6">Back to homepage</Link>

    </div>
   </div>

   <div className="max-w-[1440px] mx-auto h-full w-full hidden dark:flex gap-4 flex-col md:flex-row items-center justify-between p-4 lg:px-20">

    <div className='w-full md:w-1/2 text-center bg-[url("/404.png")] bg-no-repeat bg-contain pt-48'>
     <h1 className="text-5xl text-white">OOOps!<br />Page Not Found</h1>
     <p className="text-xl text-white mt-6 font-extralight">Sorry about that! Please visit our homepage to get where you need to go.</p>
     <Link href={"/"} className="inline-block bg-[#1A3F55] text-white px-8 py-4 mt-6 text-sm rounded-lg">Back to homepage</Link>
    </div>
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
     <Image src={"/404-dark.svg"} alt="404-dark" height={489} width={475} className="animate-rotate" />
    </div>
   </div>

   <Image src={"/wave-1.png"} alt="404-light" width={1440} height={256} className="hidden md:block dark:hidden w-full absolute h-full max-h-48 bottom-[-50px] left-0 right-0 animate-wave-1 z-10" />
   <Image src={"/wave-2.png"} alt="404-light" width={1440} height={256} className="hidden md:block dark:hidden w-full absolute h-full max-h-48 bottom-[-50px] left-0 right-0 animate-wave-2" />
  </div>
 )
}
