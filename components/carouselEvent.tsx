"use client"
import React from "react";
import { useState } from "react"
import "tailwindcss/tailwind.css";
import Image from "next/image";
import arrow from "../public/arrowL.png";

const Carousel = () => {
    const items = [
      {
        imageUrl: "/sangharsh.png",
        heading: "Sangharsh",
        body:
          "The entire GAAC community participated in Sangharsh, a tech fest organized by GITAM School of Technology's mechanical department.",
      },
      {
        heading: "Slide 2",
        body:
          "Lorem ipsum dolor set amet.",
        imageUrl: "/sangharsh.png",
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
      <div className="bg-black drop-shadow-2xl inline-flex lg:w-[1300px] lg:h-[541px] justify-center align-middle ml-36 mr-40 mt-40 pt-[45px] pl-[22px] pr-[22px] rounded-[40px] md:w-[907px] md:h-[455px] sm:w-[349px] sm:h-[252px]">
        <div className="flex align-middle justify-between">
          <button onClick={prevItem} className="mr-4 p-2">
            <Image
              src={arrow}
              width={41}
              height={50}
              alt="arrow"
              quality={100}
              className="rotate-180"
            />
          </button>
          <div className="flex flex-col justify-center align-middle text-center text-white">
          <Image
              src={items[currentIndex].imageUrl}
              alt={`Slide ${currentIndex + 1}`}
              width={160}
              height={100}
              className="flex justify-center align-middle mx-auto lg:mt-5 md:mt-4 sm:mt-2 w-full h-auto md:w-80 md:h-40 sm:w-50 sm:h-20"
            />
            <h2 className="text-[30px] font-bold lg:mt-4 md:mt-3 sm:mt-2 md:text-[30px] sm:text-[15px]">
              {items[currentIndex].heading}
            </h2>
            <p className="text-[15px] lg:mt-5 md:mt-4 md:text-[15px] sm:text-[10px] sm:mt-2" style={{ textAlign: "justify" }}>
              {items[currentIndex].body}
            </p>
          </div>
          <button onClick={nextItem} className="mr-4 p-2">
            <Image
              src={arrow}
              width={41}
              height={50}
              alt="arrow"
              quality={100}
            />
          </button>
        </div>
      </div>
    );
  };
  
  export default Carousel;