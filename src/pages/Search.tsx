import Wrapper from "../sections/Wrapper";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData";
import { getPokemonData } from "../app/reducers/getPokemonData";
import PokemonCardGrid from "../components/PokemonCardGrid";

const Search = () => {
  const dispatch = useAppDispatch();
  const { allPokemon, randomPokemons } = useAppSelector(
    ({ pokemon }) => pokemon
  );
  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemons = [...allPokemon];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);

      dispatch(getPokemonData(randomPokemonsId));
    }
  }, [allPokemon, dispatch]);

  return (
    <>
      <div className="search">
        <input type="text" name="" id="" />
        <PokemonCardGrid pokemons={randomPokemons} />
      </div>
    </>
  );
};

export default Wrapper(Search);
