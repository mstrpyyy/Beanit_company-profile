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

export const metadata: Metadata = {
  title: "Teams",
  description: "Bean It! teams",
};

export default async function Team() {
const member = await getTeam()
// console.log(member.results[0].name.last);

  return (
    <div>
        <Subhero bgimage={'bgteam'} title={'Meet Our Team'} />
        <div className='flex justify-center bg-xblack'>
          <div className='flex max-md:flex-col justify-start md:justify-center w-[90vw] xl:w-[70vw] flex-wrap gap-10 py-10'>
            <div className='flex-1'>
              <div className='flex flex-col md:sticky md:top-[30vh] xl:top-[40vh] py-5 md:min-w-64'>
                  <h1 className="text-4xl md:text-5xl font-bold text-blue2 mb-5 max-md:text-center">
                    Our Dedicated Team
                  </h1>
                  <h3 className="text-xwhite text-xl md:text-2xl font-light max-md:text-center">
                    Meet the People Behind Bean It!'s Mission of Sustainability and Customer Satisfaction
                  </h3>
              </div>
            </div>         
            <div className='flex flex-col items-center'>
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
