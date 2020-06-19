import {
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
  PokemonDispatchTypes,
  PokemonsType
} from "../actions/pokemonsTypes";

interface DefaultStateI {
  loading: boolean
  error?: boolean
  pokemon?: PokemonsType
}

const defaultState: DefaultStateI = {
  loading: false
}

export const pokemonReducers = (state: DefaultStateI = defaultState, action: PokemonDispatchTypes): DefaultStateI => {
  switch (action.type) {
    case POKEMON_FAIL:
      return {
        loading: false,
        error: true
      }
    case POKEMON_LOADING:
      return {
        loading: true
      }
    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload
      }
    default:
      return state;
  }
}
