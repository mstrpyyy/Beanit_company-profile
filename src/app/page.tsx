/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "@/components/carousel";
import Hero from "@/components/hero";
import Overview from "@/components/overview";
import Testimony from "@/components/testimony";
import Link from "next/link";




export default function Home() {
  


  return (
    <main className="z-10 bg-xblack overflow-x-hidden">
      <Hero />
      <Overview />
      
      <div className="flex justify-center">
        <div className="Dig-deeper-container justify-between flex flex-wrap md:w-[90vw] py-10 px-10 gap-5">
            <Link href="/about#history" className="dig1 bg-xred flex-1 min-w-64 h-96 p-10 rounded-3xl digHover" >
                <h2 className="dig-title">The History</h2>
                <p className="dig-sub drop-shadow-[0_0_10px_rgba(0,0,0,1)]">The journey, so far.</p>
            </Link>
            
            
            <Link href="/about#culture"  className="dig2 bg-blue1 flex-1 min-w-64 h-96 p-10 rounded-3xl digHover">
              <h2 className="dig-title">Our Cultures</h2>
              <p className="dig-sub drop-shadow-[0_0_10px_rgba(0,0,0,1)]">What drive us.</p>
            </Link>
            <Link href="/teams"  className="dig3 bg-blue2 flex-1 min-w-64 h-96 p-10 rounded-3xl digHover">
              <h2 className="dig-title">Meet the Team</h2>
              <p className="dig-sub drop-shadow-[0_0_10px_rgba(0,0,0,1)]">People behind the wheel.</p>
            </Link>
            
        </div>
      </div>

      <div className="flex justify-center items-center bg-base-100 my-20">
        <div className="flex max-md:flex-col justify-around md:gap-10 items-center px-10 py-10 md:w-[90vw]">
          <div className="md:flex-1 min-w-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue2 mb-5 max-md:text-center">Our Products</h1>
            <h3 className="text-xwhite text-2xl md:text-4xl font-light max-md:text-center mb-2">Experience Excellence: Bean It!'s Assortment of Ethically Sourced Coffee Beans</h3>
            <p className=" font-thin text-md max-md:text-center md:mb-10">Scroll and click the cards to explore our tantalizing array of coffee beans!</p>
            <Link href={'/products'} className="hover:bg-blue2 text-white font-base text-lg py-3 px-4 rounded-lg transition-colors duration-200 bg-blue1 max-md:hidden">See more 👀</Link>
          </div>
          <Carousel />
          <Link href={'/products'} className="hover:bg-blue2 text-white font-base text-lg py-3 px-4 rounded-lg transition-colors duration-200 bg-blue1 md:hidden">See more 👀</Link>
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
