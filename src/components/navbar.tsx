'use client'

import React, { useState, useEffect } from 'react';
import logo1 from '../../public/logo/comprologo-white3.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [activeButton, setActiveButton] = useState('');
  const [navbarBackground, setNavbarBackground] = useState('');

  useEffect(() => {
    const storedActiveButton = localStorage.getItem('activeButton');

    if (storedActiveButton) {
      setActiveButton(storedActiveButton);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName);
    localStorage.setItem('activeButton', buttonName);
  };

  const handleScroll = () => {
    const scrollThreshold = 200;
    if (window.scrollY > scrollThreshold) {
      setNavbarBackground('bg-xblack');
    } else {
      setNavbarBackground('bg-blue1');
    }
  };

  useEffect(() => {
    localStorage.setItem('navbarBackground', navbarBackground);
  }, [navbarBackground]);

  return (
    <div className="drawer sticky top-0 z-20 overflow-x-hidden shadow-[0px_0px_15px_0px_rgba(0,0,0,0.9)]">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        {/* Navbar */}
        <div className={`w-screen navbar bg-blue1 px-5 transition-all duration-500 ease-in-out flex justify-center ${navbarBackground}`}>
          <div className="flex-none md:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className='flex max-md:justify-end justify-between w-[97%]'>
            <Image src={logo1} alt='logo' width={200} className='w-[150px]'  />
              <div className="flex max-md:hidden mr-5 z-20">
                <div className="menu menu-horizontal text-base gap-4 z-20">
                  {/* Navbar menu content here */}
                  <Link href={'/'} className={`hover:bg-xwhite hover:text-blue1 hover:font-bold hover:shadow-[0px_0px_10px_-4px_rgba(0,0,0,0.9)] text-white w-20 text-center py-1 rounded-lg ${activeButton === 'home' ? 'active' : ''}`} onClick={() => handleButtonClick('home')}>Home</Link>
                  <Link href={'/about'} className={`hover:bg-xwhite hover:text-blue1 hover:font-bold hover:shadow-[0px_0px_10px_-4px_rgba(0,0,0,0.9)] text-white w-20 text-center py-1 rounded-lg ${activeButton === 'about' ? 'active' : ''}`} onClick={() => handleButtonClick('about')}>About</Link>
                  <Link href={'/products'} className={`hover:bg-xwhite hover:text-blue1 hover:font-bold hover:shadow-[0px_0px_10px_-4px_rgba(0,0,0,0.9)] text-white w-20 text-center py-1 rounded-lg ${activeButton === 'products' ? 'active' : ''}`} onClick={() => handleButtonClick('products')}>Products</Link>
                  <Link href={'/teams'} className={`hover:bg-xwhite hover:text-blue1 hover:font-bold hover:shadow-[0px_0px_10px_-4px_rgba(0,0,0,0.9)] text-white w-20 text-center py-1 rounded-lg ${activeButton === 'teams' ? 'active' : ''}`} onClick={() => handleButtonClick('teams')}>Teams</Link>
                </div>
              </div>
              <Link href={'/'} className='text-white max-md:hidden w-24 text-center bg-blue2 py-1 rounded-lg text-base shadow-[0px_0px_10px_-7px_rgba(0,0,0,0.9)] hover:bg-xwhite hover:text-blue1 hover:font-bold'>Contact</Link>
          </div>
        </div>
      </div>
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay z-20"></label>
        
        <div className="menu p-4 w-[50%] max-sm:w-60 min-h-full bg-grey3 z-20">
          {/* Sidebar content here */}
          <div className='flex justify-center py-10'>
          <Image src={logo1} alt='logo' width={200} className='w-[250px]' />
          </div>
          <Link href={'/'} className={`  text-white text-center py-1 rounded-lg ${activeButton === 'home' ? 'active' : ''}`} onClick={() => handleButtonClick('home')}>Home</Link>
          <Link href={'/about'} className={`  text-white text-center py-1 rounded-lg ${activeButton === 'about' ? 'active' : ''}`} onClick={() => handleButtonClick('about')}>About</Link>
          <Link href={'/products'} className={`  text-white text-center py-1 rounded-lg ${activeButton === 'products' ? 'active' : ''}`} onClick={() => handleButtonClick('products')}>Products</Link>
          <Link href={'/teams'} className={`  text-white text-center py-1 rounded-lg ${activeButton === 'teams' ? 'active' : ''}`} onClick={() => handleButtonClick('teams')}>Teams</Link>
        </div>
      </div>
    </div>
  );
}
