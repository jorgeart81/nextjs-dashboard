import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SimplePokemon } from '@/pokemons';
import { LocalStorage } from '@/config';

interface PokemosState {
  [key: string]: SimplePokemon;
}

const getFavorites = () =>
  JSON.parse(localStorage.getItem(LocalStorage.FAVORITE_POKEMONS) ?? '{}');

const initialState: PokemosState = {
  ...getFavorites(),
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toogleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const { id } = action.payload;
      if (id) {
        !!state[id] ? delete state[id] : (state[id] = action.payload);
      }
    },
  },
});

export const { toogleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
