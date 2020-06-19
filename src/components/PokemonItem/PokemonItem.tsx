import React from 'react';
import { PokemonsType } from "../../store/actions/pokemonsTypes";

function PokemonItem({ sprites, abilities, name }: PokemonsType) {
  return (
    <div className="text-center">
      <img src={sprites.front_default} alt={name} />
      {abilities.map(ability => (
        <p key={ability.ability.name}>{ability.ability.name}</p>
      ))}
    </div>
  );
}

export default PokemonItem;
