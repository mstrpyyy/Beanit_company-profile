/* eslint-disable react/no-unescaped-entities */
import GetIframe from "./iframe"

export default function Overview() {
    

  return (
    <div className="flex justify-center scrollmargin" id='overview'>
    <div className="flex justify-evenly gap-10 flex-wrap-reverse items-center md:w-[90vw] pt-20 px-10">
      <GetIframe />
      <div className="md:flex-1 md:min-w-[500px]">
        <h1 className="text-4xl md:text-5xl font-bold max-md:text-center text-blue2 mb-5">Company Overview</h1>
        <p className="text-xwhite leading-10 text-justify text-xl font-light">
          Established in 2001, Bean It! is a leading ethical coffee bean supplier committed to sourcing the finest beans while promoting fair trade practices and environmental sustainability. Our team of dedicated coffee enthusiasts works tirelessly to ensure every aspect of our operations aligns with our core values. From sourcing to delivery, we prioritize ethics and sustainability, fostering long-term partnerships with farmers and minimizing our environmental footprint. At Bean It!, we're not just about great coffee; we're about brewing a better world, one cup at a time.
        </p>
      </div>
    </div>
  </div>
    
  )
}
