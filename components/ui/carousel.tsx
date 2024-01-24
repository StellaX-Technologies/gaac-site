"use client";
import { useState } from 'react';
import Image from 'next/image'
import Button from './button';


const Carousel = () => {
  const items = [
    {
        imageUrl: '/event.png', 
        heading: 'S A N G A R S H',
        body: 'The entire GAAC community participated in Sangharsh, a tech fest organized by GITAM School of Technology\'s mechanical department', 
    },
    {
      heading: 'Slide 2',
      body: 'This is the body text for Slide 2. You can customize the content for each slide.',
      imageUrl: '/event.png',
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
    
<div className="flex justify-start">
  
</div>

<div className="flex text-white font-roboto text-3xl font-normal font-bold tracking-normal mr-0"> Events</div><div className="flex items-center justify-center">
<div className='bg-black drop-shadow-2xl inline-flex max-w-[1100px] min-h-[400px] justify-center align-middle m-24 pt-[149px] pb-[149px] pl-[22px] pr-[22px] rounded-[40px] shadow-md shadow-purple-500/50'>
      
      <div className='flex align-middle justify-between max-[200px] m-auto'>
        <button onClick={prevItem} className='bg-slate-40 fill-slate-80 p-1 mr-[400px] font-bold cursor-pointer'>
          &lt;
        </button>
        <div className="flex items-center justify-start relative w-full h-600 mt-10">
  <div className="flex flex-1 flex-col text-center text-white w-3/4"> {/* Add the new width class here */}
    <Image src={items[currentIndex].imageUrl} width={300} height={224} className='mt-4 w-full h-auto' alt={''} />
    <h2 className='text-[30px] width-39 mt-4'>{items[currentIndex].heading}</h2>
    <p className='text-[15px] mt-4.5'>{items[currentIndex].body}</p>
  </div>
</div>
        <button onClick={nextItem} className='bg-slate-40 fill-slate-50 p-1 ml-[500px] cursor-pointer'>
          &gt;
        </button>
      </div>
    </div>
    </div>
   
<div className="mr-46">
  <Button/>
  </div></>
  );
};

export default Carousel;