import React, { useEffect, useCallback } from "react";
import Wrapper from "../sections/Wrapper";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import axios from "axios";
import {
  pokemonRoute,
  pokemonSpeciesRoute,
  pokemonTabs,
} from "../utils/Constants";
import { defaultImages, images } from "../utils/getPokemonImages";
import { extractColors } from "extract-colors";
import Description from "./PokemonPages/Description";
import Evolution from "./PokemonPages/Evolution";
import CapableMoves from "./PokemonPages/CapableMoves";
import Location from "./PokemonPages/Location";
import { setCurrentPokemon } from "../app/slices/PokemonSlice";

function Pokemon() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { currentPokemonTab } = useAppSelector(({ app }) => app);

  const getRecursiveEvolution: any = useCallback(
    (evolutionChain: any, level: number, evolutionData: any) => {
      if (!evolutionChain.evolves_to.length) {
        return evolutionData.push({
          pokemon: {
            ...evolutionChain.species,
            url: evolutionChain.species.url.replace(
              "pokemon-species",
              "pokemon"
            ),
          },
          level,
        });
      }
      evolutionData.push({
        pokemon: {
          ...evolutionChain.species,
          url: evolutionChain.species.url.replace("pokemon-species", "pokemon"),
        },
        level,
      });
      return getRecursiveEvolution(
        evolutionChain.evolves_to[0],
        level + 1,
        evolutionData
      );
    },
    []
  );

  const getEvolutionData = useCallback(
    (evolutionChain: any) => {
      const evolutionData: any[] = [];
      getRecursiveEvolution(evolutionChain, 1, evolutionData);
      return evolutionData;
    },
    [getRecursiveEvolution]
  );

  const getPokemonInfo = useCallback(
    async (image: string) => {
      const { data } = await axios.get(`${pokemonRoute}/${params.id}`);
      const { data: dataEncounters } = await axios.get(
        data.location_area_encounters
      );
      const {
        data: {
          evolution_chain: { url: evolutionURL },
        },
      } = await axios.get(`${pokemonSpeciesRoute}/${data.id}`);
      const { data: evolutionData } = await axios.get(evolutionURL);

      const encounters: string[] = [];
      dataEncounters.forEach((encounter: any) => {
        encounters.push(
          encounter.location_area.name.toUpperCase().split("-").join(" ")
        );
      });
      const pokemonAbilities: { abilities: string[]; moves: string[] } = {
        abilities: data.abilities.map(
          ({ ability }: { ability: { name: string } }) => ability.name
        ),
        moves: data.moves.map(
          ({ move }: { move: { name: string } }) => move.name
        ),
      };
      const evolution = getEvolutionData(evolutionData.chain);
      const evolutionLevel = evolution.find(
        ({ pokemon }) => pokemon.name === data.name
      ).level;
      dispatch(
        setCurrentPokemon({
          id: data.id,
          name: data.name,
          types: data.types.map(
            ({ type: { name } }: { type: { name: string } }) => name
          ),
          image,
          stats: data.stats.map(
            ({
              stat,
              base_stat,
            }: {
              stat: { name: string };
              base_stat: number;
            }) => ({
              name: stat.name,
              value: base_stat,
            })
          ),
          encounters,
          evolutionLevel,
          evolution,
          pokemonAbilities,
        })
      );
    },
    [getEvolutionData, params.id, dispatch]
  );

  useEffect(() => {
    const imageElemet = document.createElement("img");
    // @ts-ignore
    imageElemet.src = images[params.id];
    if (!imageElemet.src) {
      // @ts-ignore
      imageElemet.src = defaultImages[params.id];
    }

    const options = {
      pixels: 10000,
      distance: 1,
      splitPower: 10,
      colorValidator: (red: number, green: number, blue: number, alpha = 255) =>
        alpha > 250,
      saturationDistance: 0.2,
      lightnessDistance: 0.2,
      hueDistance: 0.083333333,
    };

    const getColor = async () => {
      const color = await extractColors(imageElemet.src, options);
      const root = document.documentElement;
      root.style.setProperty("--accent-color", color[0].hex.split('"')[0]);
    };
    getColor();

    getPokemonInfo(imageElemet.src);
  }, [params, getPokemonInfo]);

  return (
    <div>
      {currentPokemonTab === pokemonTabs.description && <Description />}
      {currentPokemonTab === pokemonTabs.evolution && <Evolution />}
      {currentPokemonTab === pokemonTabs.moves && <CapableMoves />}
      {currentPokemonTab === pokemonTabs.locations && <Location />}
    </div>
  );
}

export default Wrapper(Pokemon);
