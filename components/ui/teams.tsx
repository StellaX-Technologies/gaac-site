import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Button from './button';
import Stargazers from '../public/Stargazers.png'

const Teams = () => {
  

  return (
    <>
      <>
      <div className='flex flex-col sm:flex-row gap-5 '>

        <div className="flex top-46 w-full ml-52 h-12 left-8 flex-shrink-0 text-white font-roboto text-5xl font-bold leading-normal tracking-widest shadow-text-[8px_8px_8px_8E01FD] text-white-800 text-shadow-[0.5rem 0.5rem 0.25rem #8E01FD]">
          TEAM STARGAZERS
          <Image src="/public/Stargazers.jpg" alt="" layout="fill"  />
          
        </div>
        </div>
      </>
      <div className="absolute top-32 left-12 text-white font-roboto text-30 font-bold w-full h-23 flex-shrink-0 ml-32">
        Previous Work
      </div>
      <div className="absolute top-24 right-0 mr-12">
        <Button />
      </div>

   <div className="mt-44 w-1302 mr-42 h-377 flex-shrink-0 space bg-transparent mb-12">
        <div className="flex justify-center items-center">
          <div className="w-56 h-56 rounded-3xl relative bg-black shadow-[1.25rem 0.3125rem 1.25rem 0.3125rem #8E01FD] mr-32 shadow-md shadow-purple-600/100">
            <Image src="/public/pw-1.jpg" alt="Image 1" layout="fill"  />
          </div>
          <div className="w-56 h-56 rounded-3xl relative bg-black shadow-[1.25rem 0.3125rem 1.25rem 0.3125rem #8E01FD] mr-32 shadow-md shadow-purple-500/100">
          <Image src="/public/pw-2.jpg" alt="Image 1" layout="fill"  />
          </div>
          <div className="w-56 h-56 rounded-3xl relative bg-black shadow-[1.25rem 0.3125rem 1.25rem 0.3125rem #8E01FD] shadow-md shadow-purple-500/100">
          
          <Image src="/public/pw-3.jpg" alt="Image 1" layout="fill"  /></div>
        </div>
  <div className="mt-9 text-white font-roboto text-25 font-normal leading-normal">
    📍 Mumbai, 2023
</div>


</div>





      <div className="w-[313.735px] h-[301.6px] flex-shrink-0 rounded-2xl bg-cover bg-no-repeat bg-center bg-lightgray-50"></div>
    
    </>
  );
};

export default Teams;
