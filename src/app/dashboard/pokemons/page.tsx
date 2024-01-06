import {
  PokeApi,
  PokemonGrid
} from '@/pokemons';


export default async function PokemonsPage() {
  const pokemons = await PokeApi.getPokemons(151);
  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>
        Listado de Pokémons <small>estático</small>
        <PokemonGrid pokemons={pokemons} />
      </span>
    </div>
  );
}
