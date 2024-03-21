/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Timeline() {
  return (
    <div className="w-[90vw] xl:w-[70vw]">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div data-aos="fade-right" className="timeline-start md:text-end mb-10">
            <time className=" font-normal text-xl text-blue1">2001</time>
            <div className="font-bold text-xl text-blue2 my-2">Founding in Bandung, Indonesia</div>
            <p className=" font-light text-lg text-xwhite"><b>Bean It!</b> was founded in 2001 by a group of coffee enthusiasts in Bandung, Indonesia. Recognizing the importance of ethical sourcing and sustainability in the coffee industry, they set out to create a company that would prioritize these values from the start.</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div data-aos="fade-left" className="timeline-end mb-10">
            <time className=" font-normal text-xl text-blue1">2005</time>
            <div className="font-bold text-xl text-blue2 my-2">Establishment of Direct Trade Partnerships</div>
            <p className=" font-light text-xwhite text-lg">In 2005, <b>Bean It!</b> established its first direct trade partnerships with coffee farmers and cooperatives in Indonesia. These partnerships ensured fair prices for farmers and allowed <b>Bean It!</b> to have more control over the sourcing process, guaranteeing the quality and sustainability of its beans.</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div data-aos="fade-right" className="timeline-start md:text-end mb-10">
            <time className=" font-normal text-xl text-blue1">2010</time>
            <div className="font-bold text-xl text-blue2 my-2">Expansion Beyond Indonesia</div>
            <p className=" font-light text-xwhite text-lg">By 2010, <b>Bean It!</b> had gained a strong foothold in the Indonesian coffee market and began expanding its reach beyond the country's borders. It started sourcing beans from other coffee-growing regions in Southeast Asia and established partnerships with farmers in countries like Vietnam and Thailand.</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div data-aos="fade-left" className="timeline-end mb-10">
            <time className=" font-normal text-xl text-blue1">2015</time>
            <div className="font-bold text-xl text-blue2 my-2">Introduction of Sustainable Packaging</div>
            <p className=" font-light text-xwhite text-lg"><b>Bean It!</b> took a significant step towards sustainability by introducing eco-friendly packaging for its coffee beans. The company made a commitment to reduce its environmental footprint by using biodegradable materials and minimizing plastic waste in its packaging.</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div data-aos="fade-right" className="timeline-start md:text-end mb-10">
            <time className=" font-normal text-xl text-blue1">2020</time>
            <div className="font-bold text-xl text-blue2 my-2">Global Expansion and Recognition</div>
            <p className=" font-light text-xwhite text-lg">In 2020, <b>Bean It!</b> experienced significant growth and recognition on the global stage. The company expanded its distribution network to reach customers in Europe, North America, and beyond. Its commitment to ethical sourcing and sustainability earned it accolades and certifications, solidifying its reputation as a leading ethical coffee bean company on the global market.</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
