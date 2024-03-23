/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function Testimony() {
  return (
    <div className='w-full max-sm:w-[90vw ] flex justify-center items-start gap-5 flex-wrap text-lg'>
      <div className='flex justify-center flex-wrap md:flex-nowrap gap-5'>
        <div data-aos="zoom-in"  className="group mockup-window border bg-blue1 hover:bg-xwhite transition-colors">
          <div className="py-10 px-4 bg-grey3 group-hover:bg-grey1 h-full text-xwhite font-light text-center flex flex-col justify-between">
            <q>
              Bean It! has truly changed my coffee experience. Knowing that their beans are ethically sourced makes every cup taste even better. Thank you for bringing a taste of Brazil to the world!
            </q>
            <p className='mt-10 text-center text-base text-xwhite'>Maria Santos, Brazil</p>
          </div>
          
        </div>

        <div data-aos="zoom-in" data-aos-delay="100" className="group mockup-window border bg-blue1 hover:bg-xwhite transition-colors ">
          <div className="py-10 px-4 bg-grey3 group-hover:bg-grey1 h-full text-xwhite font-light text-center flex flex-col justify-between">
            <q>
              As a coffee enthusiast, I'm thrilled to have discovered Bean It! Their commitment to sustainability and quality shines through in every sip. Proud to support such a fantastic company!
            </q>
            <p className='mt-10 text-center text-base text-xwhite'>James Smith, United States</p>
          </div>
        </div>
      </div>
      
      <div className='flex flex-wrap justify-center md:flex-nowrap gap-5'>
      <div data-aos="zoom-in" data-aos-delay="200" className="group mockup-window border bg-blue1 hover:bg-xwhite transition-colors ">
          <div className="py-10 px-4 bg-grey3 group-hover:bg-grey1 h-full text-xwhite font-light text-center flex flex-col justify-between">
            <q>
              从其精选的咖啡豆中带来的独特口味让我着迷。他们的可持续发展理念令我印象深刻，我期待着看到他们在中国市场上的发展
            </q>
            <p className='mt-10 text-center text-base text-xwhite'>Mei Chen, China</p>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-delay="300" className="group mockup-window border bg-blue1 hover:bg-xwhite transition-colors ">
          <div className="py-10 px-4 bg-grey3 group-hover:bg-grey1 h-full text-xwhite font-light text-center flex flex-col justify-between">
            <q>
              Bean It! è diventato il mio fornitore di caffè preferito. La loro attenzione all'etica e alla sostenibilità è un valore aggiunto ai loro incredibili chicchi di caffè. Continuate così!
              </q>
              <p className='mt-10 text-center text-base text-xwhite'>Luca Rossi, Italy</p>
            </div>
        </div>
      </div>
      
    </div>
  )
}
