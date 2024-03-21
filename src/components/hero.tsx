
import Link from 'next/link'
import React from 'react'
import { FaArrowAltCircleDown } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="w-full bg-xblack flex justify-center">
        <div className="hero bg-herobg w-screen max-md:w-full" >
          {/* <div className="hero-overlay bg-opacity-60"></div> */}
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-4xl gap-y-96">
              <h1 className="mb-8 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white drop-shadow-[0_0_20px_rgba(0,0,0,1)]">Ethically sourced beans, <div className='max-sm:hidden'></div>delivered to your doorstep.</h1>
              <p className="mb-8 text-xl md:text-2xl font-normal text-white drop-shadow-[0_0_10px_rgba(0,0,0,1)]">Experience the journey of each ethically sourced bean from farm to cup, and savor the sustainable flavor in every aromatic brew, hassle-free.</p>
              <Link href="#overview" className='bg-blue2 text-white font-base text-lg py-3 px-4 rounded-lg transition-colors duration-200 hover:bg-blue1'>Get to know us <FaArrowAltCircleDown className='inline' /></Link>
            </div>
          </div>
        </div>
      </div>
  )
}
