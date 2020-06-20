import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getPokemon } from "../../store/actions/pokemonActions";
import { RootStore } from "../../index";
import PokemonItem from "../PokemonItem";

function FormPokemon() {
  const dispatch = useDispatch();
  const { pokemon, loading, error } = useSelector((state: RootStore) => state.pokemon);
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
      <form onSubmit={handleSubmit} className="form">
        <div className="form__group">
          <label htmlFor="pokemonName" className="sr-only">Search Pokemon</label>
          <input
            type="text"
            onChange={handleChange}
            value={pokemonName}
            className="form__control"
            id="pokemonName"
            placeholder="Search Pokemon"
            required
          />
        </div>
        <button type="submit" className="btn">Search</button>
      </form>

      {loading && <h3>Loading</h3>}
      {error && <h3>Error</h3>}

      {pokemon && (
        <PokemonItem {...pokemon} />
      )}
    </>
  );
}

export default FormPokemon;
