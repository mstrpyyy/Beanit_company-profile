import React from 'react'

export default function CultureCard({title, text}: {title:string, text:string}) {
  return (
    <div className="flex max-md:flex-col justify-center items-center flex-wrap py-5">
                <div className="text-xwhite text-3xl font-bold text-left max-sm:text-center min-w-80 max-md:mb-5">
                    {title}
                </div>
                <div className="text-xwhite text-xl font-light max-sm:text-center flex-1">
                    {text}
                </div>
            </div>
  )
}
