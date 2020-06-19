import { Dispatch } from "redux";
import axios from 'axios';

import { POKEMON_SUCCESS, POKEMON_LOADING, POKEMON_FAIL, PokemonDispatchTypes } from "./pokemonsTypes";

export const getPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
  try {
    dispatch({
      type: POKEMON_LOADING
    })

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: POKEMON_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: POKEMON_FAIL
    })
  }
}
