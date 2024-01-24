import React from 'react';

const Gallery = () => {
  return (
    <div className='flex flex-row flex-1 justify-center'>
      <div className='max-w-full'>
        <div className='w-[112.289px] h-[111.2px] lg:w-[213.735px] lg:h-[201.6px] bg-black drop-shadow-2xl rounded-[14px] mt-32 mr-[30px] md:mr-[105px] lg:mt-36 lg:mr-[100px]'></div>
        <span className='text-gray-50 lg:text-[18px] mt-2 block text-left md:text-[13px] sm:text-[13px]'>📍 Delhi, 2023</span>
      </div>
      <div className='max-w-full'>
        <div className='w-[112.289px] h-[111.2px] lg:w-[213.735px] lg:h-[201.6px] bg-black drop-shadow-2xl rounded-[14px] mt-32 mr-[30px] md:mr-[105px] lg:mt-36 lg:mr-[100px]'></div>
        <span className='text-gray-50 lg:text-[18px] mt-2 block text-left md:text-[13px] sm:text-[13px]'>📍 Mumbai, 2023</span>
      </div>
      <div className='max-w-full'>
        <div className='w-[112.289px] h-[111.2px] lg:w-[213.735px] lg:h-[201.6px] bg-black drop-shadow-2xl rounded-[14px] mt-32 mr-[30px] md:mr-[105px] lg:mt-36 lg:mr-[100px]'></div>
        <span className='text-gray-50 lg:text-[18px] mt-2 block text-left md:text-[13px] sm:text-[13px]'>📍 Bangalore, 2023</span>
      </div>
    </div>
  );
};

export default Gallery;
