/* eslint-disable react/no-unescaped-entities */

import { IoPersonSharp } from "react-icons/io5";
import Subhero from '@/components/subhero'
import { getTeam } from '@/lib/team'
import Image from 'next/image'
import React from 'react'
import { Metadata } from 'next';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import PageLocator from "@/components/pagelocator";

export const metadata: Metadata = {
  title: "Teams",
  description: "Bean It! teams",
};

export default async function Team() {
const member = await getTeam()
// console.log(member.results[0].name.first);
// console.log(member.results[0].name.last);
// console.log(member.results[0].picture.large);
// console.log(member.results[0].location.city);

  return (
    <div>
      <PageLocator store={"teams"}  />
        <Subhero bgimage={'bgteam'} title={'Meet Our Team'} />
        <div className='flex justify-center bg-xblack'>
          <div className='flex max-md:flex-col justify-start md:justify-center w-[90vw] xl:w-[70vw] flex-wrap gap-10 py-10'>
            <div className='flex-1'>
              <div className='flex flex-col md:sticky md:top-[15vh] lg:pb-28 xl:top-[25vh] py-5 md:min-w-80 max-sm:w-full'>
                  <h1 className="text-4xl md:text-5xl font-bold text-blue2 mb-1 max-md:text-center">
                    Our Dedicated Team
                  </h1>
                  <h2 className="text-xwhite text-xl md:text-2xl font-light max-md:text-center">
                    Meet the People Behind Bean It!'s Mission of Sustainability and Customer Satisfaction
                  </h2>
                  <p className="text-xwhite font-thin pt-10 text-justify text-base md:text-lg max-md:text-center">
                  Meet the passionate team behind Bean It!'s mission of sustainability and customer satisfaction. From our Coffee Sourcing Managers to our Sustainability Coordinators, each member plays a vital role in upholding ethical practices and delivering exceptional coffee. Together, we are dedicated to making a positive impact on the world around us while providing you with the finest coffee experience.
                  </p>
              </div>
            </div>         
            <div className='flex flex-col items-center max-sm:w-full'>
                {member.results.map((user: any) => {
                  return (
                    <div data-aos="zoom-in" data-aos-duration="500" key={user.id.value} className='flex justify-center sm:justify-start items-center bg-blue1 rounded-3xl max-sm:py-2 my-5 gap-5 sm:gap-10 max-sm:max-w-[300px] max-sm:w-full sm:w-[500px] overflow-hidden'>
                      <div className='flex shadow-[-12px_0px_15px_15px_rgba(0,0,0,0.5)] overflow-hidden max-sm:hidden'>
                          <Image src={`${user.picture.large}`} alt='user' width={100} height={100} className='rounded-l-3xl sm:min-w-32 sm:min-h-32 overflow-hidden ' />                
                      </div>
                      <div className='text-xwhite flex flex-col'>
                        <p className="flex items-center gap-3 max-sm:text-sm sm:text-xl"><IoPersonSharp />{user.name.first} {user.name.last} </p>
                        <p className="flex items-center gap-4 max-sm:text-sm sm:text-base font-bold">  <FaLocationDot /> {user.location.city} </p>
                        <p className="flex items-center gap-4 max-sm:text-sm sm:text-base"><MdEmail />{user.email}</p>
                        <p className="flex items-center gap-4 max-sm:text-sm sm:text-base"><IoCall />  {user.phone} </p>
                      </div>
                      
                    
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        
    </div>
  )
}

// nama ==> member.results[1].name.first &  member.results[1].name.last
// location ===> member.results[0].location.city
// contact email ===> member.results[0].email
// contact phone ===> member.results[0].phone
// profile ===> member.results[0].picture.large
