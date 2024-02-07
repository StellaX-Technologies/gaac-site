import React, { forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ className, ...props }, ref) => {
  return (
    <input
      className={twMerge('rounded-lg w-full mx-auto p-2 bg-[#716F6F]', className)}
      ref={ref}
      {...props}
    />
  );
};

const ForwardedInput = forwardRef(Input);

export default ForwardedInput;