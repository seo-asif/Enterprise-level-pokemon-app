import React from "react";
import Info from "../../components/info";
import PokemonContainer from "../../components/PokemonContainer";
import { useAppSelector } from "../../app/hooks";

function Description() {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );
  return (
    <>
      {pokemonData && <Info data={pokemonData} />}
      {pokemonData && <PokemonContainer image={pokemonData.image} />}
    </>
  );
}

export default Description;
