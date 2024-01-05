import { Metadata } from 'next';

import { CartCounter } from '@/shopping-card';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'A simple counter',
};

export default function CounterPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <span>Productos en el carrito</span>
      <CartCounter value={5} />
    </div>
  );
}
