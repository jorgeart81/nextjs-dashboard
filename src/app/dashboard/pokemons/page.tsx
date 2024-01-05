import { envs } from '@/config';
import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `${envs.POKEAPI_URL}/pokemon?limit=${limit}&offset=${offset}`
  ).then(res => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2),
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>
        Listado de Pokémons <small>estático</small>
        <PokemonGrid pokemons={pokemons} />
      </span>
    </div>
  );
}
