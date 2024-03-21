import React from "react";
import Modal1 from '@/components/modal1'
import { StaticImageData } from "next/image";

export default function ProductCard({bgproduct, name, type, origin, notes, taste, roast, modalimage}:{bgproduct:string, name: string, type: string, origin: string, notes: string, taste: string, roast: string, modalimage:StaticImageData}) {
  return (
    <div className={`flex items-end justify-between ${bgproduct} h-[30rem] w-[20rem] p-5 rounded-3xl`}>
      <div>
        <h3 className="text-white font-bold drop-shadow-[0_0_10px_rgba(0,0,0,1)] ">
          {name}
        </h3>
        <h2 className="text-white drop-shadow-[0_0_10px_rgba(0,0,0,1)]">
          {origin}
        </h2>
      </div>
      <Modal1
              name={name}
              type={type}
              origin={notes}
              taste={taste}
              roast={roast}
              notes={notes}
              modalimage={modalimage}       />
    </div>
  );
}
