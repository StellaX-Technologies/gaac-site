"use client";
import { useState } from 'react';
import Image from 'next/image'
import Button from './button';

const Carousel = () => {
  const items = [
    {
      heading: 'viswa teja',
      body: 'president', 
    },
    {
      heading: 'anannya',
      body: 'secretary',
      imageUrl: '/sangharsh.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <>
      <div className="text-white font-roboto text-3xl font-normal font-bold-80 tracking-normal mr-20 top-8">
        Executive Body
      </div>
      <div className="flex items-center justify-center mt-32">
        <div className="flex mb-4">
          <button onClick={prevItem} className="bg-slate-40 fill-slate-50 p-1 mr-2 ml-2 cursor-pointer">
            &lt;
          </button>
          <div className="flex flex-1 items-center justify-center">
            <div className="w-40 h-40 flex-shrink-0 rounded-2xl bg-gray-500 content-clip relative z-0">
            </div>
          </div>
          <div className="relative w-60 h-100s flex-shrink-0 rounded-3xl bg-black z-1 shadow-md ">
            <div className="absolute inset-x-0 bottom-0 rounded-1.5xl bg-white h-12 transform -translate-y-1/2">
              <div className="max-w-250 m-auto">
                <h2 className="text-30 font-bold mt-2 text-black">
                  {items[currentIndex].heading}
                </h2>
                <p className="text-[10px] mt-1 text-black">
                  {items[currentIndex].body}
                </p>
              </div>
            </div>
          </div>
          <div className="w-40 h-40 flex-shrink-0 rounded-2xl bg-gray-500 relative z-0 "></div>
        </div>
        <button onClick={nextItem} className="bg-slate-40 fill-slate-50 p-1 mr-2 ml-2 cursor-pointer">
          &gt;
        </button>
      </div>
      <div className="ml-32">
        <Button/>
      </div>
    </>
  );
};

export default Carousel;