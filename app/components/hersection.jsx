"use client"
import Image from "next/image"

import { useEffect } from 'react';
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
'aos/dist/aos.css';



export default function Herosection(){
  useEffect(() => {
    AOS.init();
  }, []);
  return(
    <div  className="flex flex-col gap-6 text-white bg-blue-950 p-3 py-14 md:flex-row-reverse md:py-28 md:pl-14  ">

    
        <div  className="self-center mt-14 md:w-1/2 md:mt-0">
         <Image src="/Images/hero-image.svg" width={380} height={450} className="lg:w-[80%]" />
        </div>

        <div className="flex flex-col md:w-1/2 md:pt-10" >
             
             <div className="md:flex md:flex-col">
             <p className="font-extrabold text-4xl mb-5 lg:w-3/4 md:1/2" data-aos="fade-right"data-aos-duration="3000 ">Get Technology Services  From The Best Provider</p>
             <p className="font-extralight text-sm text-gray-400 mb-6 md:w-3/4" data-aos="fade-up"data-aos-duration="4000 "> Access, Start, switch, or advance your career with career-based, skills, and certificate programs from the NAXATECH where you get to grow in your career. </p>
             </div>

            <div><button className="text-blue-950 font-bold bg-white rounded-md text-sm p-4 md" >EXPLORE MORE</button></div>
        </div>
    </div>
  )
}