import Image from "next/image"


const Footer = ()=>{
    return(
        <div className="bg-blue-950 pl-3 md:pl-0 text-[#cbcbcb] py-10">
              
              <div className="flex flex-col md:flex-row md:justify-evenly">
                

                <div>
                <Image src="/Images/Logo.svg" width={100} height={80} className="mb-3 md:mb-0"/>
                </div>

                <div className="flex flex-col gap-3 mb-4">
                    <p className="font-bold text-xl">Links</p>
                    <p className="text-sm font-extralight">Courses</p>
                    <p className="text-sm font-extralight">Gallery</p>
                    <p className="text-sm font-extralight">FAQ</p>
                    <p className="text-sm font-extralight">About Us</p>
                </div>

                <div className="flex flex-col gap-3 mb-4">
                  <p className="font-bold text-xl">Company</p>
                  <p className="text-sm font-extralight">Blog</p>
                  <p className="text-sm font-extralight">Contact</p>
                  <p className="text-sm font-extralight">Member</p>
                  <p className="text-sm font-extralight">Partnership</p>
                </div>

                <div className="flex flex-col gap-3 mb-4">
                    <p className="font-bold text-xl">Connect Us</p>
                    <p className="text-sm font-extralight">800 388 80 90</p>
                    <p className="text-sm font-extralight">56, Howard street # san fransisco</p>
                    <p className="text-sm font-extralight">Contact@naxatech.com</p>
                    <p className="text-sm font-extralight">A26BT Building, silver street Londaon, England.</p>
                </div>

               
              </div>
              <div className="flex justify-evenly flex-col gap-3 md:flex-row-reverse md:mt-[10vh]">
                    <p>option</p>
                    <p>socials logo</p>

                    <div className="flex flex-col gap-3 md:flex-row">
                        <p className="text-sm font-extralight">Help</p>
                        <p className="text-sm font-extralight">Privacy</p>
                        <p className="text-sm font-extralight">Terms</p>
                        <p className="text-sm font-extralight">Cookies</p>
                    </div>

                    <div><p>© 2023 Noun  Ltd. All rights reserved. </p></div>
                </div>
        </div>
    )
}

export default Footer