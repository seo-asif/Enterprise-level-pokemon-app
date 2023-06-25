import Wrapper from "../sections/Wrapper";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getInitialPokemonData } from "../app/reducers/getInitialPokemonData";
import { getPokemonData } from "../app/reducers/getPokemonData";
import PokemonCardGrid from "../components/PokemonCardGrid";
import { debounce } from "../utils/Debounce";
import { setLoading } from "../app/slices/AppSlice";
import Loader from "../components/Loader";

const Search = () => {
  const handleChange = debounce((value: string) => getPokemon(value), 1000);
  const isLoading = useAppSelector(({ app: { isLoading } }) => isLoading);
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
        .slice(0, 30);

      dispatch(getPokemonData(randomPokemonsId));
    }
  }, [allPokemon, dispatch]);

  useEffect(() => {
    if (randomPokemons) {
      dispatch(setLoading(false));
    }
  }, [randomPokemons, dispatch]);

  const getPokemon = async (value: string) => {
    if (value.length >= 3) {
      const pokemons = allPokemon?.filter((pokemon) =>
        pokemon.name.includes(value.toLowerCase())
      );
      dispatch(getPokemonData(pokemons!));
    } else {
      const clonedPokemons = [...(allPokemon as [])];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 30);

      dispatch(getPokemonData(randomPokemonsId));
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="search">
          <h3 className="search-h3">
            Display Pokemons :{randomPokemons && randomPokemons?.length}
          </h3>
          <input
            type="text"
            className="pokemon-searchbar"
            placeholder="Search pokemon"
            onChange={(e) => handleChange(e.target.value)}
          />

          <PokemonCardGrid pokemons={randomPokemons!} />
        </div>
      )}
    </>
  );
};

export default Wrapper(Search);
