import React from "react";
import { useAppSelector } from "../../app/hooks";

const Location = () => {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );
  return (
    <div className="pokemon-locations">
      <h2 className="pokemon-locations-title">Catching Location of This Pokemon</h2>
      <ul className="pokemon-locations-list">
        {pokemonData?.encounters.map((encounter: string) => (
          <li key={encounter} className="pokemon-location">
            {encounter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Location;
