import React from 'react';

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className=" mx-10 mt-4 mr-7 rounded-xl bg-purple-600 text-white py-2 px-4 font-semibold text-base gap-2 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
      onClick={onClick}>
      Explore More
    </button>
  );
};

export default Button;