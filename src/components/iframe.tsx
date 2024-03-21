'use client'


import React, { useState, useEffect } from 'react';

export default function GetIframe() {
    const [autoplay, setAutoplay] = useState('');
    
    useEffect(() => {
        const storedAutoplay = localStorage.getItem('autoplay');
        if (storedAutoplay) {
          setAutoplay(storedAutoplay);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      
      
      const handleScroll = () => {
        const scrollThreshold = 500;
        if (window.scrollY > scrollThreshold) {
          setAutoplay('autoplay=1');
        } else {
          setAutoplay('autoplay=0');
        }
      };
    
  return (
    <div>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/A1HuXukeWw0?${autoplay}&mute=1`}  loading="lazy"  title="Bean It! introduction video" className="rounded-3xl max-sm:w-[90vw]"></iframe>
    </div>
  )
}
