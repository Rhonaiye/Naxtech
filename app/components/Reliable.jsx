import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import Image from "next/image"


const Reliable = ()=>{
    return(
        <div className="bg-[whitesmoke] p-3 py-7 text-blue-950 md:px-10">
             <p className="text-2xl font-bold text-center mb-3">Reliable Digital Service</p>
             <p className="text-slate-600 text-center font-extralight text-sm">We offer reliable Solution to advancing your career path in Tech and Trust our Team to Deliver and guide you through this journey </p>

             <div className="flex flex-col md:flex-row-reverse md:mt-[8vh] lg:gap-[30vh] md:gap-[13.5vh]">

                <div className="my-5 lg:w-1/2">
                <Image src="/Images/hero-image.svg" width={380} height={450} className="w-full"/>
                </div>

                <div className="md:w-1/2">
                   <p className="bg-blue-200 border-x-2 border-x-blue-400 w-[20vh] pl-2 mb-2 font-bold md:w-[22vh]">WHY CHOOSE US</p>
                   <p className="font-bold">Faq</p>

                   <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                    <AccordionTrigger>How can i get started ?</AccordionTrigger>

                     <AccordionContent>
                     With various Professional IT services, NAXATECH is your one stop go-to to learn and build your career!
                    </AccordionContent>
                     </AccordionItem>
                     </Accordion>

                     <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                    <AccordionTrigger>How can i get started ?</AccordionTrigger>

                     <AccordionContent>
                     With various Professional IT services, NAXATECH is your one stop go-to to learn and build your career!
                    </AccordionContent>
                     </AccordionItem>
                     </Accordion>

                     <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                    <AccordionTrigger>How can i get started ?</AccordionTrigger>

                     <AccordionContent>
                     With various Professional IT services, NAXATECH is your one stop go-to to learn and build your career!
                    </AccordionContent>
                     </AccordionItem>
                     </Accordion>

                     <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                    <AccordionTrigger>How can i get started ?</AccordionTrigger>

                     <AccordionContent>
                     With various Professional IT services, NAXATECH is your one stop go-to to learn and build your career!
                    </AccordionContent>
                     </AccordionItem>
                     </Accordion>




                </div>
             </div>
        </div>
    )
}

export default Reliable