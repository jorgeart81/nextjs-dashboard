import React from 'react';

interface Props {
  description: string;
  href?: string;
  name: string;
  children: JSX.Element;
}

export const SideItem = ({
  description,
  name,
  href = '#',
  children,
}: Props) => {
  return (
    <a
      href={href}
      className='w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150'>
      <div>{children}</div>
      <div className='flex flex-col'>
        <span className='text-lg font-bold leading-5'>{name}</span>
        <span className='text-sm text-white/50 hidden md:block'>
          {description}
        </span>
      </div>
    </a>
  );
};
