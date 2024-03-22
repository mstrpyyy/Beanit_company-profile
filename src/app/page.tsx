/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "@/components/carousel";
import Hero from "@/components/hero";
import Overview from "@/components/overview";
import Testimony from "@/components/testimony";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";





export default function Home() {
  


  return (
    <main className="z-10 bg-xblack overflow-x-hidden">
      <Hero />
      <Overview />
      
      <div className="flex justify-center">
        <div className="Dig-deeper-container justify-between flex flex-wrap md:w-[90vw] py-10 px-10 gap-5">
            <Link data-aos="fade-up" href="/about#history" className="dig1 bg-xred flex-1 min-w-64 h-96  rounded-3xl digHover overflow-hidden" >
              <div  className=" transition-all duration-500 hover:backdrop-blur-lg h-full p-10 ">
                  <h2 className="dig-title flex items-center gap-2 hover:text-2xl">The History<FaArrowUpRightFromSquare className="text-white text-xl" /></h2> 
              <p className="dig-sub drop-shadow-[0_0_10px_rgba(0,0,0,1)]">The journey, so far.</p>
              </div>
            </Link>
            
            
            <Link data-aos="fade-up" data-aos-delay="200" href="/about#culture"  className="dig2 bg-blue1 flex-1 min-w-64 h-96  rounded-3xl digHover overflow-hidden">
              <div className=" transition-all duration-500 hover:backdrop-blur-lg h-full p-10 ">
                <h2 className="dig-title flex items-center gap-2">Our Cultures<FaArrowUpRightFromSquare className="text-white text-xl" /></h2> 
              <p className="dig-sub drop-shadow-[0_0_10px_rgba(0,0,0,1)]">What drive us.</p>
              </div>
            </Link>
            <Link data-aos="fade-up" data-aos-delay="400" href="/teams"  className="dig3 bg-blue2 flex-1 min-w-64 h-96  rounded-3xl digHover overflow-hidden">
              <div className=" transition-all duration-500 hover:backdrop-blur-lg h-full p-10 ">
                <h2 className="dig-title flex items-center gap-2">Meet Our Team<FaArrowUpRightFromSquare className="text-white text-xl" /></h2> 
                
              <p className="dig-sub drop-shadow-[0_0_10px_rgba(0,0,0,1)]">People behind the wheel.</p>
              </div>
            </Link>
            
        </div>
      </div>

      <div className="flex justify-center items-center bg-grey1 my-20">
        <div className="flex max-md:flex-col justify-around md:gap-10 items-center px-10 py-10 md:w-[90vw]">
          <div className="md:flex-1 min-w-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue2 mb-5 max-md:text-center">Our Products</h1>
            <h2 className="text-xwhite text-2xl md:text-4xl font-light max-md:text-center mb-2">Experience Excellence: Bean It!'s Assortment of Ethically Sourced Coffee Beans</h2>
            <p className=" font-thin text-md max-md:text-center md:mb-10 text-grey2">Scroll and click the cards to explore our tantalizing array of coffee beans!</p>
            <Link href={'/products'} className="hover:bg-blue2 text-white font-base text-lg py-3 px-4 rounded-lg transition-colors duration-200 bg-blue1 max-md:hidden flex items-center gap-2 w-60 justify-center">Our beans collections <FaArrowUpRightFromSquare className="text-white text-xl" /></Link>
          </div>
          <Carousel />
          <Link href={'/products'} className="flex justify-center items-center  gap-2 hover:bg-blue2 text-white font-base text-base py-3 px-4 rounded-lg transition-colors duration-200 bg-blue1 md:hidden">Our beans collections <FaArrowUpRightFromSquare className="text-white text-xl" /></Link>
        </div>
      </div>

      <div className="flex  justify-center items-center my-10 pb-10">
        <div className="flex flex-col items-center py-5 px-10 md:w-[90vw]">
          <h1 className="text-4xl md:text-5xl font-bold text-blue2 mb-5 text-center">What They Say About Bean It!</h1>
          <p className="text-xwhite text-2xl font-light max-md:text-center mb-10">Our sustainable global journey and glowing customer testimonials.</p>
          <Testimony />
        </div>

      </div>

      <div className="flex justify-center h-[50vh] items-center w-screen py-20 mt-10 bg-base-100 quotes">
        <h1 className="text-4xl md:text-5xl font-bold text-xwhite mb-5 text-center drop-shadow-[0_0_15px_rgba(0,0,0,1)]">Bean It! Where Both Ends of the Bean Are Happy.</h1>
      </div>   
    </main>
  );
}
