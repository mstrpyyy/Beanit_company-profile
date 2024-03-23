'use client'
import React, { useState, useEffect, useRef } from 'react';

export default function GetIframe() {
    const [autoplay, setAutoplay] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    
    useEffect(() => {
        const storedAutoplay = localStorage.getItem('autoplay');
        if (storedAutoplay) {
            const parsedAutoplay = parseInt(storedAutoplay, 10);
            setAutoplay(parsedAutoplay === 1);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
      
    const handleScroll = () => {
        const scrollThreshold = 500;
        if (window.scrollY > scrollThreshold) {
            setAutoplay(true);
            if (videoRef.current) {
                videoRef.current.play(); // Start the video
            }
        } else {
            setAutoplay(false);
        }
    };
    
    return (
        <div data-aos="fade-up">
             {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/A1HuXukeWw0?${autoplay}&mute=1`}  loading="lazy"  title="Bean It! introduction video" className="rounded-3xl max-sm:w-[90vw]"></iframe> */}
            <video ref={videoRef} src='/overview.mp4' playsInline  width="560" height="315" loop controls autoPlay={autoplay} muted className='rounded-3xl max-sm:w-[90vw]'></video>
        </div>
    );
}
