import { combineReducers } from "redux";
import { pokemonReducers } from "./pokemonsReducers";

export default combineReducers({
  pokemon: pokemonReducers
})
