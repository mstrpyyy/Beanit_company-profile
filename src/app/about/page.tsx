/* eslint-disable react/no-unescaped-entities */
import Subhero from "@/components/subhero";
import Timeline from "@/components/timeline";
import React from "react";
import male1 from "../../../public/picture/male1.webp";
import male2 from "../../../public/picture/male2.webp";
import female1 from "../../../public/picture/female1.webp";
import female2 from "../../../public/picture/female2.webp";
import Image from "next/image";
import KeyPlayer from "@/components/keyplayer";
import CultureCard from "@/components/culturecard";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About us",
  description: "Bean It! about page",
};

export default function About() {
  return (
    <div className="bg-xblack">
      <Subhero bgimage={"bgabout"} title={"About Us"} />
      <div className="flex flex-col items-center pt-10 pb-20" id="history">
        <h1 className="text-4xl md:text-5xl font-bold text-blue2 mb-5 max-md:text-center">
          Our History
        </h1>
        <h3 className="text-xwhite text-2xl md:text-4xl font-light text-center mb-10">
          From Local Roots to Global Recognition
        </h3>
        <div className="mockup-browser border bg-xblack max-sm:w-[90vw]">
          <div className="mockup-browser-toolbar">
            <div className="input">www.Bean-It-history.com</div>
          </div>
          <div className="flex justify-center px-4 py-16 bg-grey3">
            <Timeline />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col gap-5 items-center justify-center w-[90vw] pt-20 pb-28">
          <h1 className="text-4xl md:text-5xl font-bold text-blue2 pb-5 max-md:text-center">
            {" "}
            Key Players Driving Bean It!'s Success
          </h1>
          <div className="flex justify-center gap-5 flex-wrap">
            <KeyPlayer
              profile={male1}
              delayAos={""}
              position={"Chief Executive Officer"}
              name={"Arya Hanif Nugroho"}
              experience={
                "Arya has a wealth of experience in the coffee industry, having previously held executive positions in several Indonesian coffee companies. He brings strategic leadership and a deep understanding of the local coffee market to Bean It!."
              }
            />

            <KeyPlayer
              profile={female1}
              delayAos={"100"}
              position={"Coffee Sourcing Manager"}
              name={"Putri Kusuma"}
              experience={
                "Putri has extensive experience in coffee sourcing across Indonesia, having worked closely with farmers and cooperatives in regions such as Sumatra, Java, and Sulawesi. She is known for her strong relationships and commitment to quality sourcing practices."
              }
            />
          </div>

          <div className="flex justify-center gap-5 flex-wrap">
            <KeyPlayer
                profile={female2}
                delayAos={"200"}
                position={"Sustainability Coordinator"}
                name={"Sari Rahayu"}
                experience={
                    "Sari is passionate about sustainability and environmental conservation, with a master's degree in environmental science. She has worked on sustainability projects in Indonesia's agriculture sector and is dedicated to integrating sustainable practices into Bean It!'s operations."
                }
                />

                <KeyPlayer
                profile={male2}
                delayAos={"300"}
                position={"Ethical Sourcing Coordinator"}
                name={"Budi Santoso"}
                experience={
                    "Budi has a background in sustainable agriculture and supply chain management, with a focus on promoting ethical sourcing practices in the Indonesian coffee industry. He has worked with various stakeholders to develop and implement sustainable sourcing initiatives."
                }
                />
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-10 scrollcontrol" id="culture">
        <div className="w-[80vw]">
        <h1 className="text-4xl md:text-5xl font-bold text-blue2 mb-5 text-center">
          Our Cultures
        </h1>
        <h3 className="text-xwhite text-xl md:text-3xl font-light text-center mb-10">
            At Bean It!, ethics and sustainability drive every decision. We build lasting partnerships with coffee farmers, ensuring fair compensation and promoting sustainable practices. Our commitment extends to environmental responsibility, minimizing waste and reducing our carbon footprint.
        </h3>
            <div className="divider"></div>
                <CultureCard 
                    title={"Ethical Sourcing"} 
                    text={"We believe in doing the right thing, which is why ethical sourcing is at the forefront of our operations. We build strong relationships with coffee farmers and cooperatives, paying fair prices for their hard work and ensuring they receive the recognition they deserve."} /> 
            <div className="divider"></div> 
                <CultureCard 
                    title={"Sustainability"} 
                    text={"We're committed to minimizing our environmental impact. From reducing waste in our packaging to implementing eco-friendly practices in our operations, we strive to promote sustainability at every level of our business."} /> 
            <div className="divider"></div> 
                <CultureCard 
                    title={"Passion for Coffee"} 
                    text={"Coffee isn't just a beverage; it's a way of life for us. We're passionate about the entire coffee journey, from bean to cup. This passion drives us to continually seek out the best beans, perfect our roasting techniques, and deliver exceptional coffee experiences to our customers."} />
            <div className="divider"></div> 
                <CultureCard 
                    title={"Team Collaboration"} 
                    text={"We believe in the power of teamwork. Collaboration is key to our success, and we foster an environment where every team member's voice is heard and valued. Together, we work towards our common goal of bringing great coffee to the world."} />
            <div className="divider"></div>
                <CultureCard 
                    title={"Improvement"} 
                    text={"We're always striving to do better. Whether it's refining our sourcing practices, enhancing the quality of our products, or finding new ways to serve our customers, we're dedicated to continuous improvement and innovation."} /> 
            <div className="divider"></div>
                <CultureCard 
                    title={"Customer-Centric"} 
                    text={"Our customers are at the heart of everything we do. We listen to their feedback, understand their needs, and go above and beyond to exceed their expectations. Our goal is to build lasting relationships with our customers based on trust, reliability, and exceptional service."} />
            <div className="divider"></div> 

        </div>
      </div>
    </div>
  );
}
