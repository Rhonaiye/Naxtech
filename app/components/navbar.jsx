"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

import Hamburger from 'hamburger-react'

import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
'aos/dist/aos.css';
import '/Users/mac/Desktop/nax/app/globals.css';




const Navbar = ()=>{
    const [isClose, setIclose] = useState(false);

    useEffect(() => {
        AOS.init();
      }, []);
        
      return (
        
        <div className="bg-blue-950 text-white flex p-3 md:p-0 items-center fixed left-0 right-0 top-0 z-50 md:static   md:pl-3">
            
           
        <div className={isClose? "" : "flex gap-10"}>

          <div className="flex flex-row md:ml-3">
           <Image src="/Images/Logo.svg" width={100} height={50}/>
             

           

           <div className="  md:hidden ml-[210px]">
           <Hamburger toggled={isClose} toggle={setIclose} /> 
           </div>

           </div>

           

           <div className={isClose? "flex  flex-col gap-3 mt-10" : "hidden md:flex lg:gap-8 md:items-center lg:ml-[45vh] md:gap-4 md:ml-[10vh]"}>
            <p>HOME</p>
            <p>ABOUT US</p>
            <p>SERVICE</p>
            <p>BLOGS</p>
            <div><button className="text-blue-950 font-bold bg-white rounded-md text-sm p-3 my-5 lg:ml-[40vh] md:ml-[6vh]">Conatct us</button></div>
           </div>

           
           
        </div>
        </div>
      );
    }
  

export default Navbar