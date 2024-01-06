'use client';
import { FaShoppingCart } from 'react-icons/fa';
import { SimpleWidget } from '.';
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {
  const count = useAppSelector(state => state.counter.count);

  return (
    <div className='flex flex-wrap p-2 gap-4'>
      <SimpleWidget
        href='/dashboard/counter'
        title={`${count}`}
        subTitle='Producto agregados'
        label='Contador'
        icon={<FaShoppingCart size={50} />}
      />
    </div>
  );
};
