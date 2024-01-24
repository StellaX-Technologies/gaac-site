import React from 'react';

interface ButtonProps {
  onClick?: () => void;
}

const Button2: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className=" mt-4 mx-10 m-2 mr-7 rounded-xl bg-purple-600 text-white py-2 px-4 font-semibold text-base gap-2 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
      onClick={onClick}>
      Apply now
    </button>
  );
};

export default Button2;