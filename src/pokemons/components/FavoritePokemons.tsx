'use client';
import { useState } from 'react';

import { IoHeartOutline } from 'react-icons/io5';
import { useAppSelector } from '@/store';
import { PokemonGrid } from '..';

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(state =>
    Object.values(state.pokemons)
  );

  const [pokemons, setpokemons] = useState(favoritePokemons);

  return (
    <>
      {pokemons.length ? (
        <PokemonGrid pokemons={pokemons} />
      ) : (
        <NoFavorites />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className='flex flex-col h-[80vh] items-center justify-center'>
      <IoHeartOutline size={100} className='text-red-500' />
      <span>No hay favoritos</span>
    </div>
  );
};
