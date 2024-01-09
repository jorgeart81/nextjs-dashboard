'use client';
import { Provider } from 'react-redux';

import { store } from '.';
import { useEffect } from 'react';
import { LocalStorage } from '@/config';
import { setFavoritePokemons } from './pokemos/pokemons';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const favorites = JSON.parse(
      localStorage.getItem(LocalStorage.FAVORITE_POKEMONS) ?? '{}'
    );
    store.dispatch(setFavoritePokemons(favorites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
