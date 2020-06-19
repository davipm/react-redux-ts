export const POKEMON_LOADING = 'POKEMON_LOADING';
export const POKEMON_FAIL = 'POKEMON_FAIL';
export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';

export type PokemonsType = {
  name: string;
  abilities: PokemonsAbility[],
  sprites: PokemonsSprites,
  stats: PokemonsStats[]
}

export type PokemonsAbility = {
  ability: {
    name: string
    url: string
  }
}

export type PokemonsSprites = {
  front_default: string
}

export type PokemonsStats = {
  base_stats: number
  stats: {
    name: string
  }
}

export interface PokemonLoading {
  type: typeof POKEMON_LOADING
}

export interface PokemonFail {
  type: typeof POKEMON_FAIL
}

export interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS
  payload: PokemonsType
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess;
