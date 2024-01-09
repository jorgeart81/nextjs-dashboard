import { Action, Dispatch, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';

import { RootState } from '..';
import { LocalStorage } from '@/config';

export const localStorageMiddleware: Middleware = (state: MiddlewareAPI) => {
  return (next: any) => (action: any) => {
    next(action);

    if (action.type === 'pokemons/toogleFavorite') {
      const { pokemons } = state.getState() as RootState;
      localStorage.setItem(
        LocalStorage.FAVORITE_POKEMONS,
        JSON.stringify(pokemons.favorites)
      );
      return;
    }
  };
};
