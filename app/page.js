import Image from "next/image";
import Navbar from "./components/navbar";
import Herosection from "./components/hersection";
import About from "./components/about";
import Services from "./components/services";
import Trust from "./components/trust";
import Reliable from "./components/Reliable";
import Contact from "./components/contact";
import Footer from "./components/Footer";


import '/app/globals.css';

export default function Home() {
 return(
  <div>
   <Navbar/>
   <Herosection/>
   <About/>
   <Services/>
   <Trust/>
   <Reliable/>
   <Contact/>
   <Footer/>

  </div>
 )
    
}
