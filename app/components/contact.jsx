  "use client"


import Image from "next/image"
import { useState } from "react"


const Contact = ()=>{
    const [number , setNumber] = useState(234)
    const Number = (event)=>{
        setNumber(event.target.value)
        console.log(number)
    }
    return(
        <div className="p-3 text-blue-950 md:py-10">
           <p className="font-bold text-2xl text-center ">Contact Us </p>
           <p className="text-sm font-extralight text-center mt-3">Make progress towards your career today, by contacting us!</p>

           <div className="flex flex-col md:flex-row md:gap-10 md:mt-10">

            <div className="md:w-1/2 md:pl-10 my-8 md:my-0">
               <Image src="/Images/hero2.svg" width={400} height={300}/>
            </div>


            <div className="p-5 bg-blue-200 rounded-xl ">
               <p className="text-center text-xl">Contact Us Today</p>
               <p className="text-center font-extralight text-sm mb-8">Make progress towards your career by contacting us </p>
    
                <div className="flex flex-col gap-5">
                    <input type="text" placeholder="Name" className="border-[1px] rounded-md w-full h-14 pl-3" />
                    <input type="text" placeholder="Number" onChange={()=>Number(event)} value={number} className="border-[1px] rounded-md w-full h-14 pl-3"  />
                    <input type="email" placeholder="Email"   className="border-[1px] rounded-md w-full h-14 pl-3" />
                    <button className="bg-blue-950 text-white py-3 rounded-xl">Send message</button>
                </div>
               
            </div>

           </div>
        </div>
    )
}

export default Contact