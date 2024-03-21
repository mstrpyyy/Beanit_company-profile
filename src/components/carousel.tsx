'use client'

import Image from 'next/image';
import coffee1 from '../../public/coffee/1.webp'
import coffee2 from '../../public/coffee/3.webp'
import coffee3 from '../../public/coffee/5.webp'
import coffee4 from '../../public/coffee/6.webp'
import coffee5 from '../../public/coffee/9.webp'
import coffee6 from '../../public/coffee/8.webp'

import React from 'react';
import Link from 'next/link';


export const Carousel = () => {

    return (
      <Link href={'/products'}>
      <div className="md:h-[500px] h-[450px] w-80 md:w-96 carousel carousel-vertical rounded-box max-md:my-5">
        <div className="carousel-item h-full">
          <Image src={coffee1} alt='coffee carousel 1' />
        </div> 
        <div className="carousel-item h-full" id='test1'>
          <Image src={coffee2} alt='coffee carousel 2' />
        </div> 
        <div className="carousel-item h-full">
          <Image src={coffee3} alt='coffee carousel 3' />
        </div> 
        <div className="carousel-item h-full">
          <Image src={coffee4} alt='coffee carousel 4' />
        </div> 
        <div className="carousel-item h-full">
          <Image src={coffee5} alt='coffee carousel 5' />
        </div> 
        <div className="carousel-item h-full">
          <Image src={coffee6} alt='coffee carousel 6' />
        </div> 
      </div>
      </Link>
    );
  }

