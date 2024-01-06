import { notFound } from 'next/navigation';

import { envs } from '@/config';
import { SimplePokemon, PokemonsResponse, PokemonResponse } from '..';

export class PokeApi {
  constructor() {}

  static async getPokemons(limit = 20, offset = 0): Promise<SimplePokemon[]> {
    try {
      const data: PokemonsResponse = await fetch(
        `${envs.POKEAPI_URL}/pokemon?limit=${limit}&offset=${offset}`
      ).then(res => res.json());

      const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2),
        name: pokemon.name,
      }));

      return pokemons;
    } catch (error) {
      notFound();
    }
  }

  /**
   *
   * @param value - pokemon id or name
   * @returns
   */
  static getPokemon = async (value: string) => {
    try {
      const data: PokemonResponse = await fetch(
        `${envs.POKEAPI_URL}/pokemon/${value}`,
        { cache: 'force-cache' }
      ).then(res => res.json());

      return data;
    } catch (error) {
      notFound();
    }
  };
}
