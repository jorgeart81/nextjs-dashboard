'use client';
import { useMemo, useState } from 'react';

import { IoHeartOutline } from 'react-icons/io5';
import { useAppSelector } from '@/store';
import { PokemonGrid } from '..';

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(state => state.pokemons.favorites);

  const pokemonsMemo = useMemo(
    () => Object.values(favoritePokemons),
    [favoritePokemons]
  );
  const [pokemons, setokemons] = useState(pokemonsMemo);

  return (
    <>
      {pokemonsMemo.length ? (
        <PokemonGrid pokemons={pokemonsMemo} />
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
