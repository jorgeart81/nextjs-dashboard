'use client';
import { useState } from 'react';

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value);

  const handleClick = (value: number) => {
    if (count + value < 0) return;
    setCount(prevCount => prevCount + value);
  };
  return (
    <>
      <span className='text-9xl'>{count}</span>

      <div className='flex gap-2'>
        <button
          onClick={() => handleClick(1)}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[6.25rem]'>
          +1
        </button>
        <button
          onClick={() => handleClick(-1)}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[6.25rem]'>
          -1
        </button>
      </div>
    </>
  );
};
