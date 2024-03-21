'use client'

import Image from 'next/image';
import test from '../../public/picture/test.jpg'

import React from 'react';


export const Carousel = () => {

    return (
      
      <div className="h-[600px] max-md:w-80 md:w-96 carousel carousel-vertical rounded-box max-md:my-5">
        <div className="carousel-item h-full">
          <Image src={test} alt='test' />
        </div> 
        <div className="carousel-item h-full" id='test1'>
          <Image src={test} alt='test' />
        </div> 
        <div className="carousel-item h-full">
          <Image src={test} alt='test' />
        </div> 
        <div className="carousel-item h-full">
          <Image src={test} alt='test' />
        </div> 
        <div className="carousel-item h-full">
          <Image src={test} alt='test' />
        </div> 
        <div className="carousel-item h-full">
          <Image src={test} alt='test' />
        </div> 

      </div>
    );
  }

