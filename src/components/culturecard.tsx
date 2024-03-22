import React from 'react'

export default function CultureCard({title, text, icons}: {title:string, text:string, icons:any}) {
  return (
    <div data-aos="zoom-in" className="flex max-md:flex-col max-sm:w-full justify-center items-center flex-wrap py-5">
                <div className="flex flex-col items-center gap-3 text-xwhite text-3xl font-bold text-center sm:min-w-80 max-md:mb-5">
                 {icons} {title} 
                </div>
                <div className="text-xwhite text-xl font-light text-center md:text-left flex-1">
                    {text}
                </div>
            </div>
  )
}
