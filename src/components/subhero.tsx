
import React from 'react'

export default function Subhero({bgimage, title}: {bgimage:string, title:string}) {
  return (
    <div>
    <div className={`h-[35vh] ${bgimage} flex justify-center items-center`}>
        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white drop-shadow-[0_0_20px_rgba(0,0,0,1)]'>{title}</h1>
    </div>
</div>
  )
}
