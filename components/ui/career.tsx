import React from 'react';
import Button2 from './button2';

const Career =() =>{
  return (
    <>
    <div className="max-w-md mx-auto bg-white rounded-[40px]  shadow-purple-700 flex items-center shadow-lg overflow-hidden md:max-w-full ml-12 mr-12 mt-8">
  <div className="md:flex">
    <div className="2">
    </div>
    <div className="p-3">
      <div className='flex justify-between'>
      <a className="block leading-tight font-bold  text-3xl text-black ml-5 mt-5 ">Web Developer</a><div className='mb-5 mr-3'><Button2/></div></div>
      <p className="mt-1 text-black Roboto mb-6 ml-5 font-bold text-xl">Join us as a web developer, crafting and maintaining our website for an immersive user experience. Your role elevates site navigation and functionality. At AeroAstro Club, embrace the dynamic fusion of technology and aerospace.</p>
    </div>
  </div>
</div>

<div className="max-w-md mx-auto bg-white rounded-[40px]  shadow-purple-700 flex items-center shadow-lg overflow-hidden md:max-w-full ml-12 mr-12 mt-8">
  <div className="md:flex">
    <div className="md:shrink-0">
    </div>
    <div className="p-3">
      <div className='flex justify-between'>
      <a className="block leading-tight font-bold  text-3xl text-black ml-5 mt-5 ">Content Writer</a><div className='mb-5 mr-3'><Button2/></div></div>
      <p className="mt-1 text-black Roboto mb-6 ml-5 font-bold text-xl">As a content writer at AeroAstro Club, you'll craft engaging aerospace content, implement SEO strategies, collaborate with teams, and ensure captivating storytelling. Join us in shaping how the world explores flight and space!.</p>
    </div>
  </div>
</div>
    </>


  );
};
export default Career;
