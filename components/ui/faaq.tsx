import React from 'react';
import Button2 from './button2';

const Faq =() =>{
  return (
    <>
    <div className="max-w-md mx-auto bg-white rounded-[40px]  shadow-purple-700 flex items-center shadow-lg overflow-hidden md:max-w-full ml-12 mr-12 mt-8">
  <div className="md:flex">
    <div className="md:shrink-0">
    </div>
    <div className="p-7">
      <a className="block mt-1  leading-tight font-bold  text-3xl text-black ">Who can join the club?</a>
      <p className="mt-6 text-black Roboto mb-6 font-bold text-xl">The club is open to all students across different disciplines who share an interest in aerospace, whether it's engineering, science, business, or any other field. You don't need to be an aerospace major to join!</p>
    </div>
  </div>
</div>

<div className="max-w-md mx-auto bg-white rounded-[40px]  shadow-purple-700 flex items-center shadow-lg overflow-hidden md:max-w-full ml-12 mr-12 mt-8">
  <div className="md:flex">
    <div className="md:shrink-0">
    </div>
    <div className="p-7">
      <a className="block mt-1  leading-tight font-bold  text-3xl text-black ">Who are Stargazers?</a>
      <p className="mt-6 text-black Roboto mb-6 font-bold text-xl">Stargazers is our passionate, internal cohort of astronomy enthusiasts within the AeroAstro Club. Together, we delve into the mysteries of the cosmos, exploring and understanding the intricate workings of the universe.</p>
    </div>
  </div>
</div>
   
</>

  );
};
export default Faq;
