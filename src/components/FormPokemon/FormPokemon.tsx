import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getPokemon } from "../../store/actions/pokemonActions";
import { RootStore } from "../../index";
import PokemonItem from "../PokemonItem";

function FormPokemon() {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const [pokemonName, setPokemonName] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPokemonName(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    dispatch(getPokemon(pokemonName));
    setPokemonName('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-inline justify-content-center">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="pokemonName" className="sr-only">Search Pokemons</label>
          <input
            type="text"
            onChange={handleChange}
            value={pokemonName}
            className="form-control"
            id="pokemonName"
            placeholder="Search Pokemon"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">Search</button>
      </form>

      {pokemonState.pokemon && (
        <PokemonItem {...pokemonState.pokemon} />
      )}
    </>
  );
}

export default FormPokemon;
