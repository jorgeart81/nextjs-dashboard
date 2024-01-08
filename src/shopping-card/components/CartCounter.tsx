'use client';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/store';
import {
  decrement,
  increment,
  initCounterState,
} from '@/store/counter/counterSlice';

interface Props {
  value?: number;
}

const getApiCounter = async () => {
  const data: { count: number } = await fetch('/api/counter').then(res =>
    res.json()
  );

  return data;
};

export const CartCounter = ({ value }: Props) => {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (value) dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <>
      <span className='text-9xl'>{count}</span>

      <div className='flex gap-2'>
        <button
          onClick={() => dispatch(increment())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[6.25rem]'>
          +1
        </button>
        <button
          disabled={count <= 0}
          onClick={() => dispatch(decrement())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[6.25rem] disabled:bg-gray-500'>
          -1
        </button>
      </div>
    </>
  );
};
