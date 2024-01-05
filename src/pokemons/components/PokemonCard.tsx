import Link from 'next/link';
import Image from 'next/image';

import { IoHeartOutline } from 'react-icons/io5';
import { SimplePokemon } from '..';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  return (
    pokemon?.id && (
      <>
        <div className='mx-auto right-0 mt-2 w-60'>
          <div className='bg-white rounded overflow-hidden shadow-lg'>
            <div className='flex flex-col items-center text-center p-6 bg-gray-800 border-b'>
              <Image
                key={id}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                height={100}
                width={100}
                alt={`Pokemon ${name}`}
                priority={false}
              />
              <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>
                {name}
              </p>
              <div className='mt-1'>
                <Link
                  href={`/dashboard/pokemon/${id}`}
                  className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'>
                  Más información
                </Link>
              </div>
            </div>
            <div className='border-b'>
              <Link href='#' className='px-4 py-2 hover:bg-gray-100 flex'>
                <div className='text-red-600'>
                  <IoHeartOutline className='size-6' />
                </div>
                <div className='pl-3'>
                  <p className='text-sm font-medium text-gray-800 leading-none'>
                    No es favorito
                  </p>
                  <p className='text-xs text-gray-500'>View your campaigns</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  );
};
