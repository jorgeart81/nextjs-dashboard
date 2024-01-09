import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SimplePokemon } from '@/pokemons';
import { LocalStorage } from '@/config';

interface PokemosState {
  favorites: { [key: string]: SimplePokemon };
}

JSON.parse(localStorage.getItem(LocalStorage.FAVORITE_POKEMONS) ?? '{}');

const initialState: PokemosState = {
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons: (
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) => {
      state.favorites = action.payload;
    },
    toogleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const { id } = action.payload;
      if (id) {
        !!state.favorites[id]
          ? delete state.favorites[id]
          : (state.favorites[id] = action.payload);
      }

      localStorage.setItem(
        LocalStorage.FAVORITE_POKEMONS,
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { setFavoritePokemons, toogleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
