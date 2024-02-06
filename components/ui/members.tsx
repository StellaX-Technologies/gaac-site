import React from 'react';

const Members = () => {
  const items = [
    { id: 1, imageUrl: 'img1.jpg' },
    { id: 2, imageUrl: 'img2.png' },
    { id: 3, imageUrl: 'img3.png' },
  ];

  return (
    <div className='flex flex-col sm:flex-row gap-10 ml-12 mr-24'>
      {items.map((item) => (
        <div key={item.id} className="flex mt-4 mb-6  bg-[#ffffff40] w-[500px] h-[400px] rounded-[14px] text-white">
          <img
            src={item.imageUrl}
            alt={`Image ${item.id}`}
            className="w-full h-3/4 object-cover rounded-t-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default Members;
