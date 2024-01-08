'use client';
import Image from 'next/image';
import Link from 'next/link';

import { useAppDispatch, useAppSelector } from '@/store';

import { toogleFavorite } from '@/store/pokemos/pokemons';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { SimplePokemon } from '..';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  const isFavorite = useAppSelector(state => !!state.pokemons[id ?? '']);
  const dispatch = useAppDispatch();

  const onToogle = () => {
    dispatch(toogleFavorite(pokemon));
  };

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
                  href={`/dashboard/pokemon/${name}`}
                  className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100'>
                  Más información
                </Link>
              </div>
            </div>
            <div className='border-b'>
              <div
                onClick={onToogle}
                className='px-4 py-2 hover:bg-gray-100 flex cursor-pointer'>
                <div className='text-red-600'>
                  {isFavorite ? (
                    <IoHeart className='size-6' />
                  ) : (
                    <IoHeartOutline className='size-6' />
                  )}
                </div>
                <div className='pl-3'>
                  <p className='text-sm font-medium text-gray-800 leading-none'>
                    {isFavorite ? 'Es favorito' : 'No es favorito'}
                  </p>
                  <p className='text-xs text-gray-500'>
                    {isFavorite
                      ? ' Click para quitar favorito'
                      : 'Click para agregar favorito'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};
