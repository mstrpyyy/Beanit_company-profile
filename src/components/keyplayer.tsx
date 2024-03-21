import Image, { StaticImageData } from 'next/image';
import React from 'react'

export default function KeyPlayer({profile, position, name, experience, delayAos}:{profile:StaticImageData, position:string, name:string, experience:string, delayAos:string}) {
    // console.log(profile);
    
  return (
    <div
              data-aos="fade-up"
              data-aos-delay={delayAos}
              className="flex bg-blue1 px-10 py-7 gap-5 rounded-3xl sm:min-w-[35rem] sm:flex-1"
            >
              <div className="hidden md:flex items-center md:shrink-0">
                <Image
                  src={profile}
                  alt="ceo"
                  className="w-[700px] md:w-[175px] rounded-full"
                />
              </div>

              <div className="flex flex-col justify-center gap-3">
                <div className="flex items-center max-sm:flex-col-reverse gap-3">
                  <div className="flex md:hidden">
                    <Image
                      src={profile}
                      alt="ceo"
                      className="w-[150px] rounded-full"
                    />
                  </div>
                  <div>
                    <h2 className="text-xwhite text-2xl font-bold max-sm:text-center">
                      {position}
                    </h2>
                    <h3 className="text-xwhite text-2xl max-sm:text-center">
                      {name}
                    </h3>
                  </div>
                </div>
                <p className="text-xwhite text-base font-normal text-justify">
                  {experience}
                </p>
              </div>
            </div>
  )
}
