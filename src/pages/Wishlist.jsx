import React, { useState } from "react";
import nikeShoeimg from "../assets/NikeShoe.png";

const Wishlist = () => {
  return (
    <div className="max-h-full w-full">
      {/* Main Content: Sidebar + Products */}
      <div className="flex flex-col p-6 mx-4 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <div className="flex justify-end mb-4">
          <div className="font-light text-sm flex gap-4">
            <p>Edit</p>
            <p className="text-[#CA3327]">CLEAR ALL</p>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 3 * 2 }, (_, index) => (
            <div key={index} className="col-span-1">
              <Card />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Card() {
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col relative bg-[#F5F5F5] rounded-lg overflow-hidden">
        <img className="w-full h-auto object-cover" src={nikeShoeimg} alt="nikeShoeimg" />
        <div className="absolute top-3 right-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_760_8957)">
              <path d="M10.0005 17.5L16.9818 10.4188C17.7144 9.68612 18.126 8.69242 18.126 7.65628C18.126 6.62014 17.7144 5.62644 16.9818 4.89378C16.2491 4.16112 15.2554 3.74951 14.2193 3.74951C13.1831 3.74951 12.1894 4.16112 11.4568 4.89378L10.0005 6.25003L8.54427 4.89378C7.8116 4.16112 6.8179 3.74951 5.78176 3.74951C4.74563 3.74951 3.75193 4.16112 3.01926 4.89378C2.2866 5.62644 1.875 6.62014 1.875 7.65628C1.875 8.69242 2.2866 9.68612 3.01926 10.4188L10.0005 17.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_760_8957">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-3 right-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
            <path d="M13.9043 5.45386L14.54 18.3552H0.524414L1.16113 5.45386H13.9043Z" stroke="#14142B"/>
            <path d="M4.10937 8.06365L4.10938 4.42382C4.10938 3.51577 4.4701 2.64491 5.11219 2.00281C5.75428 1.36072 6.62514 1 7.5332 1C8.44125 1 9.31212 1.36072 9.95421 2.00281C10.5963 2.64491 10.957 3.51577 10.957 4.42382V8.06365" stroke="#14142B"/>
          </svg>
        </div>
      </div>
      <h1 className="text-xs text-center mt-3 mb-1">Women's Air Max 1 '86 Original</h1>
      <p className="text-center text-sm font-bold">Rs 2000</p>
    </div>
  )
}

export default Wishlist;