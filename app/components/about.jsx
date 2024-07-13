import Image from "next/image"

import { Progress } from "@/components/ui/progress"


const About = ()=>{
    return(
        <div className="p-3 py-8">
            <p className="text-3xl font-bold mb-5 text-center">Flexible Digital Service</p>
            <p className="text-sm font-extralight text-center">We offer flexible Solution to advancing your career path in Tech and Trust our Team to Deliver and guide you through this journey </p>

            <div className="flex flex-col md:flex-row md:mt-14">
               
               <div className="my-8 md:w-1/2">
               <Image src="/Images/hero-image.svg" width={380} height={450}/>
               </div>

               <div className="flex flex-col md:gap-5 md:w-1/2">
                    
                    <div className="md:flex md:flex-col md:gap-3 md:pr-10 ">
                     <p className="font-bold bg-blue-200 w-[15vh] p-3 border-x-2 mb-5 md:mb-0 border-x-blue-400 md:w-[18vh] ">ABOUT US</p>
                     <p className="font-bold mb-5 md:mb-0">A World - Wide IT Company</p>
                     <p className="font-extralight text-slate-800 mb-5 md:mb-0"> <span className="font-bold">NAXATECH</span> is a fast growing world-wide information and technology company. Our method of operation helps to boost diverse team of professionals in various field of tech delivering unmatching services using globally accepted standards and processes.</p>
                    </div>
                  
                  <div className="flex gap-3 font-bold mb-5 md:mb-0 md:gap-10">
                    <p>Our Mission</p>
                    <p>Our Vision</p>
                    <p>Our Vision</p>
                  </div>

                 <div className="my-5 md:my-0">
                 <Progress className=" w-[42vh] md:w-[46vh]"  value={33} />
                 </div>


                    <div>
                    <button className="text-blue-950 font-bold bg-white rounded-md text-sm px-6 py-2 border-blue-950 border-2 md:ml-0">READ MORE</button>
                    </div>
               </div>
               

            </div>
        </div>
    )
}

export default About